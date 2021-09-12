import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faCheck, faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";
import { getPrompt } from "../store/selectors";
import { setPrompt } from "../store/actions";

const Header = () => {
  const prompt = useSelector(getPrompt);
  const dispatch = useDispatch();
  const [editing, setEditing] = useState(false);
  const [expanded, setExpanded] = useState(true);
  const onChange = (event) => {
    dispatch(setPrompt(event.target.value));
  };
  return (
    <div id="header" className={expanded ? "expanded" : ""}>
      {expanded && (editing ? (
        <textarea className="prompt" onChange={onChange} placeholder="Enter a prompt here" value={prompt} autoFocus/>
      ) : (
        <div className={`prompt ${!prompt && "placeholder"}`}>
          {prompt || "What's the prompt today?"}
        </div>
      ))
      }
      {expanded && (editing ? (
        <button id="edit" onClick={() => setEditing(false)}>
          <FontAwesomeIcon icon={faCheck}/>
        </button>
      ) : (
        <button id="edit" onClick={() => setEditing(true)}>
          <FontAwesomeIcon icon={faPen}/>
        </button>
      ))
      }
      <button className="expand" onClick={() => expanded ? setExpanded(false) : setExpanded(true)}>
        <div>
          <FontAwesomeIcon icon={expanded ? faChevronUp : faChevronDown} color="#ffffff"/>
        </div>
      </button>
    </div>
  );
};

export default Header;