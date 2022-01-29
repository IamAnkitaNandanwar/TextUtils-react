import React, { useState } from "react";


export default function TextForm(props) {

    const handleUpClick = () => {
        console.log("Upper Case was clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text covert to upper case","success");
    }
    const handlelowClick = () => {
        console.log("Lower Case was clicked");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text covert to lower case","success");
    }
    const handleClearClick = () => {
        let newText = "";
        setText(newText);
        props.showAlert("Text cleared","success");
    }
    const handleOnChange = (event) => {
        console.log("handleOnChange was clicked");
        setText(event.target.value);
    }

    const handleCopy = () => {
        
        navigator.clipboard.writeText(text);
        props.showAlert("Copy to clipboard ","success");
    }

    const handlExtraSpace = ()=>{
        var newText = text.split(/\s+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces have been removed from text","success");
    }

    const handleFirstLetter = () => {
        var newText = text.split(" ");
        for(var i = 0 ; i< newText.length ;i++){
            newText[i] = newText[i][0].toLocaleUpperCase() + newText[i].substring(1,newText[i].length);
        }
        setText(newText.join(" "));
        props.showAlert("First letter of text has been capitalized","success");
    }
    const [text, setText] = useState("");
    // text = "new Text";  wrong way
    // setText("new Text"); correct way
    return (
        <>
            <div className="container" style={{color :props.mode === 'dark' ? 'white' : '#042743'}}>
                <h3>{props.heading}</h3>
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} 
                    style={{backgroundColor :props.mode === 'dark' ? 'grey' : 'white',color :props.mode === 'dark' ? 'white' : '#042743'}}></textarea>
                </div>
                <button disabled = {text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
                <button disabled = {text.length === 0} className="btn btn-success mx-1 my-1" onClick={handlelowClick}>Convert to LowerCase</button>
                <button disabled = {text.length === 0} className="btn btn-danger mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
                <button disabled = {text.length === 0} className="btn btn-warning mx-1 my-1" onClick={handleCopy}>CopyText</button>
                <button disabled = {text.length === 0} className="btn btn-secondary mx-1 my-1" onClick={handlExtraSpace}>Remove Extra Spaces</button>
                <button disabled = {text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleFirstLetter}>First letter capital</button>
            </div>
            <div className="container my-2" style={{color :props.mode === 'dark' ? 'white' : '#042743'}}>
                <h3>Your text summary</h3>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length-text.split(" ").length+1} characters</p>
                <p>{0.008 *text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read</p>
                <h3>Preview</h3>
                <p>{text.length>0 ? text : "Nothing to preview"}</p>
            </div>

        </>
    );
}
