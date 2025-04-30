import React, { useState } from "react";
//import PropTypes from 'prop-types';

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  };

  const handleLowClick = () => {
    console.log("Lowercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success");
  };

  const handleClearClick = () => {
    let newText = " ";
    setText(newText);
    props.showAlert("Cleared textbox!", "success");
  };

  const handleEmailExtract = () => {
    let email = text.match(
      /\b[A-Za-z0-9.%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/
    );
    if (email) {
      console.log("Found email: ", email[0]);
      props.showAlert("Email id extracted!", "success");
    } else {
      console.log("No email found!");
      props.showAlert("Email id not extracted!", "danger");
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    console.log("Copied to clipboard!");
    props.showAlert("Copied to clipboard!", "success");
    document.getSelection().removeAllRanges();
  };

  const handleCapitalizeWords = () => {
    setText(text.replace(/\b\w/g, (char) => char.toUpperCase()));
    props.showAlert("Capitalized the words!", "success");
  };
  /* 
    /b --> word boundary, it matches the position between a character(letters,digits,punctuations) and a non-character(spaces,punctuations,begining,ending of string)
    /w --> any word character is matched including letters, digits, underscores
    /g --> global flag ensures the regex matches all the instances throughout the entire string and not the first match
  */

  const handleReverseText = () => {
    setText(text.split("").reverse().join(""));
    props.showAlert("Text reversed!", "success");
  };

  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value);
  };
  /*
     1. The event parameter represents the event object triggered when the content inside the <textarea> changes (user typing).
     2. event.target refers to the element that triggered the event, which is the <textarea>.
     3. event.target.value is the current value of the <textarea> (the text the user typed).
     4. setText(event.target.value) updates the 'text' state with the new value, causing a re-render to display the updated text in the <textarea>..
     Essentially, handleOnChange keeps the 'text' state in sync with the user's input in the <textarea>.
    */

  const [text, setText] = useState("Enter text here");
  /*
    State --> values passed to a component, whereas props --> variables passed to components
    text --> state variable having the value of the useState i.e. text = "Enter text here",
    setText --> function for performing any updates on the text variable.
    useState --> it is a HOOK, used to initialize state variable and function. A method which helps us to use features of classes in function based component 
    */

  // Dynamic button styles based on mode
  const buttonStyle = (mode) => {
    switch (mode) {
      case "dark":
        return { backgroundColor: "#333", color: "white" }; // Dark mode buttons
      case "success":
        return { backgroundColor: "#198754", color: "white" }; // Success mode buttons
      case "danger":
        return { backgroundColor: "#dc3545", color: "white" }; // Danger mode buttons
      case "warning":
        return { backgroundColor: "#ffc107", color: "#212529" }; // Warning mode buttons
      default:
        return { backgroundColor: "#007bff", color: "white" }; // Default (Light mode) buttons
    }
  };

  const getColors = (mode) => {
    switch (mode) {
      case "dark":
        return { backgroundColor: "#212529", color: "white" };
      case "danger":
        return { backgroundColor: "#dc3545", color: "white" };
      case "success":
        return { backgroundColor: "#198754", color: "white" };
      case "warning":
        return { backgroundColor: "#ffc107", color: "#212529" };
      default:
        return { backgroundColor: "white", color: "#042743" };
    }
  };

  return (
    <>
      <div
        className="container"
        style={getColors(props.mode)}
      >
        <h2 className="m-2">{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            onChange={handleOnChange}
            style={getColors(props.mode)}
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn mx-2 my-2"
          style={buttonStyle(props.mode)} // Apply dynamic style here
          onClick={handleUpClick}
        >
          Convert to uppercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn mx-2 my-2"
          style={buttonStyle(props.mode)} // Apply dynamic style here
          onClick={handleLowClick}
        >
          Convert to lowercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn mx-2 my-2"
          style={buttonStyle(props.mode)} // Apply dynamic style here
          onClick={handleClearClick}
        >
          Clear text
        </button>
        <button
          disabled={text.length === 0}
          className="btn mx-2 my-2"
          style={buttonStyle(props.mode)} // Apply dynamic style here
          onClick={handleEmailExtract}
        >
          Extract email
        </button>
        <button
          disabled={text.length === 0}
          className="btn mx-2 my-2"
          style={buttonStyle(props.mode)} // Apply dynamic style here
          onClick={handleCopy}
        >
          Copy text
        </button>
        <button
          disabled={text.length === 0}
          className="btn mx-2 my-2"
          style={buttonStyle(props.mode)} // Apply dynamic style here
          onClick={handleCapitalizeWords}
        >
          Capitalize words
        </button>
        <button
          disabled={text.length === 0}
          className="btn mx-2 my-2"
          style={buttonStyle(props.mode)} // Apply dynamic style here
          onClick={handleReverseText}
        >
          Reverse text
        </button>
      </div>
      <div
        className="container"
        style={getColors(props.mode)}
      >
        <p>
          {text.split(" ").filter((element) => {
            return element.length !== 0;
          }).length}{" "}
          words and {text.length} characters
        </p>
        <p>
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          minutes to read
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to preview"}</p>
      </div>
    </>
  );
}
