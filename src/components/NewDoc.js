import React, { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import './NewDoc.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";

function NewDoc() {

  const navigate = useNavigate();
  const [doc, setDoc] = useState("Welcome new document");

  const saveDoc = async() => {
      const url = "http://codeshare11.herokuapp.com/save";

      await axios
        .post(url, {
          code: doc,
        })
        .then((response) => {
          console.log(response.data.id);
          navigate("/view/" + response.data.id);
        })
        .catch((error) => {
          console.log(error);
        });
  };

  return (
    <div className="container">
      <div>
        <button className="save-btn" onClick={() => saveDoc()}>
          Save
        </button>
      </div>
      <div className="wrapper">
        <div></div>
        <div className="code-display">
          <TextareaAutosize
            className="text-area"
            value={doc}
            onChange={(e) => setDoc(e.target.value)}
            width={100}
          />
        </div>
      </div>
    </div>
  );
}

export default NewDoc;
