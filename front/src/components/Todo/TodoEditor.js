import React, { useContext, useRef, useState } from "react";
import { TodoDispatchContext } from "../../views/TodoPage/Todo";
import "./TodoEditor.css";

const TodoEditor = () => {
  const { onCreate } = useContext(TodoDispatchContext);

  const [content, setContent] = useState("");
  const inputRef = useRef();

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };
  const onSubmit = () => {
    if (!content) {
      inputRef.current.focus();
      return;
    }
    onCreate(content);
    setContent("");
  };
  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onSubmit();
    }
  };

  return (
      <div className="TodoEditor">
        <div className="Header">
          <h1>📅</h1>
          <h1>{new Date().toDateString()}</h1>          <br/>
          <br/>
        </div>
        <br/>
        <h2>새로운 Todo 작성하기 ✏ </h2>
        <div className="editor_wrapper">
          <input
              ref={inputRef}
              value={content}
              onChange={onChangeContent}
              onKeyDown={onKeyDown}
              placeholder="새로운 Todo..."
          />
          <button onClick={onSubmit}>추가</button>
        </div>
      </div>
  );
};
export default TodoEditor;
