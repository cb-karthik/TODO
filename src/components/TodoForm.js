import React, { useState, useEffect, useRef } from "react";
function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput("");
  };
  return (
    <form onSubmit={handleSubmit} className="todo-form">
      {props.edit ? (
        <>
          <input placeholder="Update a TODO" value={input} onChange={handleChange} name="text" ref={inputRef} className="todo-input edit" />
          <button onClick={handleSubmit} className="todo-button edit">
            Update to List
          </button>
        </>
      ) : (
        <>
          <input placeholder="Write your TODO here" value={input} onChange={handleChange} name="text" className="todo-input" ref={inputRef} />
          <button onClick={handleSubmit} className="todo-button">
            Add to List
          </button>
        </>
      )}
    </form>
  );
}

export default TodoForm;
