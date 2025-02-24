import { hasFormSubmit } from '@testing-library/user-event/dist/utils';
import React, {useState} from 'react'



export default function TextForm(props) {

const handleUpClick = ()=>{
  console.log("Uppercase was clicked" + text);

  let newText = text.toUpperCase(); 
  setText(newText);
  
}
const handleonClick = (event)=>{
  console.log("on Change");
  setText(event.target.value);  
}

const handleLowClick = ()=>{    
  console.log("Lowercase was clicked" + text);
  let newText = text.toLowerCase(); 
  setText(newText);
}

const handleClearClick = ()=>{  
    console.log("Clear was clicked" + text);
    let newText = '';   
    setText(newText);
}

const handleCopy = () => {
  console.log("Copy was clicked" + text);
  var text = document.getElementById("mybox");
  text.select();
  text.setSelectionRange(0, text.value.length); // For mobile devices
  navigator.clipboard.writeText(text.value);
  document.getSelection().removeAllRanges(); // Deselect the text after copying
};


const [text, setText] = useState('');

//text =  "new text";//wrong way to change the state
//setText("new text");//correct way to change the state

return (
  <div>
    <div className='container'>   
      <h1>{props.heading}  </h1>
      <div className="mb-3">
        <label for="mybox" className="form-label"  >Example textarea</label>
        <textarea className="form-control" value ={text}  onChange={handleonClick}  id="mybox" rows="3"></textarea>
      </div>
      <button type="submit" className="btn btn-primary me-2" onClick={handleUpClick}>convert the uppercase</button>
      <button type="submit" className="btn btn-primary me-2" onClick={handleLowClick}>convert the lowercase</button>
      <button type="submit" className="btn btn-primary me-2" onClick={handleClearClick}>clear text</button>
      <button type="submit" className="btn btn-primary me-2" onClick={handleCopy}>Copy text  </button>
    </div>

    <div className="container my-3">
      <h2>Text Summary</h2>  
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{
        text.length>0?text:"Enter something in the textbox above to preview it here"
      }</p>
      <label for="customRange1" class="form-label">Time range(0-100)Seconds</label>
      <input type="range" class="form-range" id="customRange1"/>  
      
    </div>
    
  </div>
  
)
}


//state in react
//state is a temporary storage for the component  in react
//state is a variable in react    
//state is a object that holds some information that may change over the lifetime of the component
//state is used to make the component interactive
//state is used to make the component dynamic
//state is used to make the component responsive
//state is used to make the component data driven
//state is used to make the component user friendly
//handle the state in react   
//useState() hook in react
//useState() hook is used to handle the state in react
//useState() hook is a function that returns an array
//useState() hook is a function that returns an array with two elements


//The me-2 class in Bootstrap stands for "margin-end 2", which applies right margin (margin-right) in LTR (left-to-right) layouts and left margin (margin-left) in RTL (right-to-left) layouts.
// How It Works:
// me → Margin End (right margin in LTR, left in RTL)
// 2 → Spacing size (0 to 5 in Bootstrap)

