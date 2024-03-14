import React, { useState } from "react";
import "./App.css";
import { Modal } from "./components/modal/Modal";
import { Crosses } from "./components/Crosses";
import { Button } from "./components/modal/Button";

function App() {
  const tasks = [
    { id: 1, title: "Task 1", isDone: false },
    { id: 2, title: "Task 2", isDone: true },
    { id: 3, title: "Task 3", isDone: false },
  ];
  return (
    <>
      <Crosses tasks={tasks}>
        <Button name={"red Button"} onclick={() => {}} color={"red"}>
          red Button
        </Button>
        <Button name={"blue Button"} onclick={() => {}} color={"secondary"}>
          blue Button
        </Button>
        <Button name={"blue Button"} onclick={() => {}} disabled>
          Disabled Button
        </Button>
        <Button name={"default Button"} onclick={() => {}}>
          Default Button
        </Button>
        <input type="text" />
        <input type="text" />
        <p>text</p>
        <p>text</p>
        <p>text</p>
        <p>text</p>
        <p>text</p>
        <p>text</p>
        <p>text</p>
      </Crosses>

      <Crosses tasks={tasks}>
        <Button name={"red Button"} onclick={() => {}} color={"red"}>
          red Button
        </Button>
        <Button name={"blue Button"} onclick={() => {}} color={"secondary"}>
          blue Button
        </Button>
        <p>text</p>
        <p>text</p>
        <p>text</p>
        <p>text</p>
        <p>text</p>
        <p>text</p>
        <p>text</p>
        <p>text</p>
        <p>text</p>
        <p>text</p>
        <p>text</p>
        <p>text</p>
        <p>text</p>
        <p>text</p>
      </Crosses>

      <Crosses tasks={tasks}>
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <Button name={"blue Button"} onclick={() => {}} color={"secondary"}>
          blue Button
        </Button>
      </Crosses>

      <div>
        <Modal>
          <input type="text" placeholder="email" />
          <input type="password" placeholder="password" />

          <button>Send</button>
        </Modal>

        {/* <Modal>
          <h1>Hello</h1>
          <input type="text" placeholder="email" />
          <input type="password" placeholder="password" />
          <input type="password" placeholder="confirm password" />
          <div>
            <input type="checkbox" />
            <label>Remember me</label>
          </div>

          <button>Send</button>
        </Modal> */}
      </div>
    </>
  );
}

export default App;
