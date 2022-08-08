import React , {useState} from 'react'

export default function Textform(props) {
  const handleUpClick = () =>{
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to uppercase","success");
  }
    const handleLoClick = () =>{
      // console.log("Uppercase was clicked" + text);
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("converted to lowercase","warning");
    }

  const handleOnChange = (event) =>{
    // console.log("OnChange");
    setText(event.target.value)
  }

  const handleClear = () => {
    let newText = '';
    setText(newText)
    props.showAlert("text is clear","success");

  }

  const handlecopy = () => {
    navigator.clipboard.writeText(text);
   props.showAlert("text is copy","primary");
  }
   
  const handleExtraspaces = () =>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("extraspces is removed","warning");
  }
  const [text, setText] = useState("");
  return (
    <>
    
        <div className="container" style={{color: props.mode==='dark'?'white':'#092652' }} >
         <h1>{props.heading} </h1>
         <div className="mb-3">
         <textarea className='form-control' id="mybox" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white' ,
         color: props.mode==='dark'?'white':'#092652' }} rows="4"></textarea>
        </div>
       <button disabled={text.length===0} className="btn btn-warning mx-2 my-1" onClick={handleUpClick}>Convert to uppercase</button>
       <button disabled={text.length===0} className="btn btn-danger mx-3 my-1" onClick={handleLoClick}>Convert to lowercase</button>
       <button disabled={text.length===0} className="btn btn-secondary mx-3 my-1" onClick={handleClear}>Clear</button>
       <button disabled={text.length===0} className="btn btn-light mx-2 my-1" onClick={handlecopy}>Copy Text </button>
       <button disabled={text.length===0} className="btn btn-info mx-2 my-1" onClick={handleExtraspaces}>Remove Extraspaces </button>
    </div>
     <div className="container my-3" style={{color: props.mode==='dark'?'white':'#092652' }}>
      <h1>your text summary</h1>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length}  charachters</p>
      <p>{ 0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Nothing to preview "}</p>
    </div>
    </>
  )
}
