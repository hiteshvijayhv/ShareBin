import React, { useState, useEffect } from "react";
import "./ShowDoc.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ShowDoc() {
  const [code, setCode] = useState(``);

  const fetchCode = async () => {
    const url =
      "https://codeshare11.herokuapp.com/view/" +
      window.location.pathname.split("/")[2];

    const response = await axios.get(url);
    setCode(response.data.code);
  };

  useEffect(() => {
    fetchCode();
  });
  const navigate = useNavigate();
  const newDoc = () => {
    navigate("/");
  };

  var indents = [];
  for (var i = 0; i <= code.split("\n").length; i++) {
    indents.push(<div className="indent" key={i}></div>);
  }

  return (
    <div className="App">
      <div>
        <button className="save-btn" onClick={() => newDoc()}>
          New Doc
        </button>
      </div>
      <div className="wrapper">
        <div className="line-numbers">
          {indents.map((item, index) => (
            <div className="indent" key={index}>
              {index + 1}
            </div>
          ))}
        </div>

        <div className="code-display">{code}</div>
      </div>
    </div>
  );
}

export default ShowDoc;
