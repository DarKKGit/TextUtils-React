import React, {useState} from 'react'

export default function Textform(props) {
    const [text, setText] = useState(''); // this ensures that the 'text' entered will be kept in 'text' and it will be updated using the 'setText' function
    
   

    const handleUpclick = ()=>{
        // console.log('Uppercase was clicked')
        // text='sffafef' -> wrong way to change the state
         setText(text.toUpperCase()) // correct way to change the state
         props.showAlert('Converted to upper case','success')
    }

    const handleLoclick = ()=>{
        // console.log('Uppercase was clicked')
        // text='sffafef' -> wrong way to change the state
         setText(text.toLowerCase()) // correct way to change the state
         props.showAlert('Converted to lower case','success')
    }

    const clearText = ()=>{
        setText('');
        props.showAlert('Text cleared','success')
    }

    const copyText = ()=>{
        let copytext = document.getElementById('MyBox')
        copytext.select()
        props.showAlert('Text copied to clipboard','success')
        navigator.clipboard.writeText(copytext.value) // this is how we copy to clipboard
    }
    const handleOnchange = (event)=>{
        // console.log('Change was executed')
        setText(event.target.value);
    }
    return (
        <>
        <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}} onChange={handleOnchange} id="MyBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpclick}>Convert to Upper Case</button>
            <button className="btn btn-primary mx-3 " onClick={handleLoclick}>Convert to Lower Case</button>
            <button className="btn btn-primary mx-3 " onClick={clearText}>Clear Text</button>
            <button className="btn btn-primary mx-3 " onClick={copyText}>Copy Text</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>Your text summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:'Enter something to preview'}</p>
        </div>
        </>
    )
}
