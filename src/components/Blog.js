import React from "react";
import TodoList from "./CRUD/TodoList";
import TodoForm from "./CRUD/TodoForm";
import { MDBContainer } from "mdbreact";

class Todo extends React.Component {
  render() {
    return (
      <MDBContainer>
        <div className="todo">
          <div style={{ paddingTop: "100px" }}></div>
          <TodoForm />
          <TodoList />
        </div>
      </MDBContainer>
    );
  }
}

export default Todo;
