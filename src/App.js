import React from "react";
import "./App.css";
import AlertBox from "./components/Alert";
import Header from "./components/Header";
import RightSideBar from "./components/RightSidebar";
import TextEditor from "./components/TextEditor";

function App() {
  return (
    <div className="App">
      {/* <div className="leftSideBar">
        Hello
      </div> */}
      <div className="MainBody">
        <Header />
        <TextEditor />
      </div>
      <div className="rightSideBar">
        <RightSideBar/>
      </div>
      <AlertBox />
    </div>
  );
}

export default App;
