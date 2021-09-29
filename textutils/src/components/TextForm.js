import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('Enter Text Here');

    const handleOnChange = (event) => setText(event.target.value);
    const handleUpClick = () => { 
        let newText = text.toUpperCase();
        setText(newText);
     }
    const handleLoClick = () => { 
        let newText = text.toLowerCase();
        setText(newText);
     }
    const handleClearClick = () => { 
        let newText = '';
        setText(newText);
     }

    return (
        <>
        <div className = 'container' style = {{color:props.mode === 'dark'?'white':'#212529'}}>
            <h1 >{props.heading}</h1>
            <div className="mb-3">

                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick} >
                Convert to upperCase
            </button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick} >
                Convert to LowerCase
            </button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick} >
                Clear Text
            </button>
        </div>
        <div className="container my-3" style = {{color:props.mode === 'dark'?'white':'#212529'}}>
            <h1>Your text summary</h1>
            <p>{text.split(" ").length} Words , {text.length} Characters</p>
        </div>
        <div className="container my-3" style = {{color:props.mode === 'dark'?'white':'#212529'}}>
            <h1>Preview</h1>
            <p>{text.length>0?text:'Enter Something in the TextBox To Preview Here'}</p>
        </div>

        </>
    )
}
