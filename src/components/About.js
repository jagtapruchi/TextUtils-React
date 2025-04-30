import React from "react";

export default function About(props) {

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
        return { backgroundColor: "white", color: "black" };
    }
  };

  let myStyle = getColors(props.mode);

  let itemStyle = {
    ...getColors(props.mode),
    border: props.mode === 'dark' || props.mode === 'danger' || props.mode === 'success' || props.mode === 'warning' 
      ? "1.5px solid white" 
      : "1.5px solid black"
  };

  return (
    <div className="accordion" id="accordionExample" style={myStyle}>
      <h1 className="my-3">About Us</h1>
      <div className="accordion-item" style={itemStyle}>
        <h2 className="accordion-header">
          <button
            className="accordion-button"
            type="button"
            style={itemStyle}
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            <strong>Analyse your text</strong>
          </button>
        </h2>
        <div
          id="collapseOne"
          className="accordion-collapse collapse show"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body" style={itemStyle}>
            With TextUtils, analyzing your text has never been easier. Whether
            you need to count words, characters, or sentences, our app
            provides an instant breakdown of your input. You can also clean up
            unwanted spaces, convert text case, or even perform advanced text
            manipulations all in one place. Just enter your text, and let
            TextUtils work its magic!
          </div>
        </div>
      </div>
      <div className="accordion-item" style={itemStyle}>
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            style={itemStyle}
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            <strong>Free to use</strong>
          </button>
        </h2>
        <div
          id="collapseTwo"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body" style={itemStyle}>
            TextUtils is completely free to use, offering powerful text
            analysis and editing tools without any hidden charges or
            subscriptions. Whether you're working on a simple text cleanup or
            more advanced analysis, you can enjoy all features at no cost. No
            sign-up required, just open and start using!
          </div>
        </div>
      </div>
      <div className="accordion-item" style={itemStyle}>
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            style={itemStyle}
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            <strong>Browser Compatible</strong>
          </button>
        </h2>
        <div
          id="collapseThree"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body" style={itemStyle}>
            TextUtils is designed to work seamlessly across all major
            browsers, ensuring you have a smooth experience no matter where
            you're accessing it from. Whether you're on Chrome, Firefox,
            Safari, or Edge, our app runs smoothly without any issues. All you
            need is an internet connection and a browser — you're good to go!
          </div>
        </div>
      </div>
    </div>
  );
}
