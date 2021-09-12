import React, {useState, useRef, useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave, faFile } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import "./RightSidebar.css";
import { getPrompt, getTextContent } from "../store/selectors";
import { alert } from "./Alert";
import { newFile } from "../store/actions";


const MenuItem = ({ icon, onClick }) => (
  <button onClick={onClick} className="menu-item">
    <FontAwesomeIcon icon={icon} color="#ffffff" size="lg" />
  </button>
);

MenuItem.propTypes = {
  icon: PropTypes.object,
  onClick: PropTypes.func
};

const RightSideBar = () => {
  const prompt = useSelector(getPrompt);
  const textContent = useSelector(getTextContent);
  const dispatch = useDispatch();
  const [downloadURL, setDownloadURL] = useState("");
  useEffect(() => {
    if (downloadURL) {
      downloadLink.current.click();
      URL.revokeObjectURL(downloadURL);
      setDownloadURL("");
    }
  }, [downloadURL]);
  const downloadLink = useRef(null);
  const items = [
    {
      icon: faSave,
      onClick: () => {
        if (!downloadLink || !downloadLink.current) {
          return;
        }
        const textToSave = prompt ? `PROMPT: ${prompt}\n\nANSWER: ${textContent}` : textContent;
        const blobToSave = new Blob([textToSave], { type: "text/plain" });
        console.log(blobToSave);
        setDownloadURL(URL.createObjectURL(blobToSave));
      }
    },
    {
      icon: faFile,
      onClick: () => {
        alert("Creating a new file will delete your current note. Do you wish to proceed?", [
          { text: "Yes", onClick: () => { dispatch(newFile()); } },
          { text: "Cancel", onClick: () => {}}
        ]);
      }
    }
  ]; 
  return (
    <div id="right-sidebar">
      <a style={{display: "none"}}
        download="prompted-text.txt"
        href={downloadURL}
        ref={downloadLink}
      >download</a>
      {items.map((item,index) => <MenuItem {...item} key={index}/>) }
    </div>
  );
};

export default RightSideBar;