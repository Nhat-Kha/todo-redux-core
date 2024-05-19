import { Col, Row, Input, Button, Select, Tag } from "antd";
import Todo from "./Todo";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/actions";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

export default function TodoList() {
  const dispatch = useDispatch();
  const searchText = useSelector((state) => state.filters.search);
  const statusFilter = useSelector((state) => state.filters.status);
  const priorityFilter = useSelector((state) => state.filters.priority);
  const todoList = useSelector((state) => {
    const todoRemaining = state.todoList.filter((todo) => {
      if (statusFilter === "All") {
        return priorityFilter.length
          ? todo.name.includes(searchText) &&
              priorityFilter.includes(todo.priority)
          : todo.name.includes(searchText);
      }
      return (
        todo.name.includes(searchText) &&
        (statusFilter === "Completed" ? todo.completed : !todo.completed) &&
        (priorityFilter.length ? priorityFilter.includes(todo.priority) : true)
      );
    });
    return todoRemaining;
  });

  const [todoName, setTodoName] = useState("");
  const [priority, setPriority] = useState("Medium");

  const HandleAddButton = () => {
    dispatch(
      addTodo({
        id: uuidv4(),
        name: todoName,
        priority: priority,
        completed: false,
      })
    );

    setTodoName("");
    setPriority("Medium");
  };

  const handleChangeName = (e) => {
    console.log("Change", e.target.value);
    setTodoName(e.target.value);
  };

  const handleChangePriority = (value) => {
    console.log({ value });
    setPriority(value);
  };

  console.log({ todoList });

  return (
    <Row style={{ height: "calc(100% - 40px)" }}>
      <Col span={24} style={{ height: "calc(100% - 40px)", overflowY: "auto" }}>
        {todoList.map((todo, index) => (
          <Todo
            key={index}
            id={todo.id}
            name={todo.name}
            priority={todo.priority}
            completed={todo.completed}
          />
        ))}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: "flex" }} compact>
          <Input value={todoName} onChange={handleChangeName} />
          <Select
            defaultValue="Medium"
            value={priority}
            onChange={handleChangePriority}
          >
            <Select.Option value="High" label="High">
              <Tag color="red">High</Tag>
            </Select.Option>
            <Select.Option value="Medium" label="Medium">
              <Tag color="blue">Medium</Tag>
            </Select.Option>
            <Select.Option value="Low" label="Low">
              <Tag color="gray">Low</Tag>
            </Select.Option>
          </Select>
          <Button type="primary" onClick={HandleAddButton}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
