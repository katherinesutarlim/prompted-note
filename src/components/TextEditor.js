import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setTextContent } from "../store/actions";
import { getTextContent } from "../store/selectors";
import "./TextEditor.css";

const TextEditor = () => {
  const textContent = useSelector(getTextContent);
  const dispatch = useDispatch();
  const onChange = (event) => {
    dispatch(setTextContent(event.target.value));
  };
  return <div id="text-editor-container">
    <textarea id="text-editor" value={textContent} onChange={onChange} />
  </div>;
};

export default TextEditor;