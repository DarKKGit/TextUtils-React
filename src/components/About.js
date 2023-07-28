import React, { useState } from 'react'

export default function About(props) {

    // const [myStyle, setmyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
        
    // })

    let myStyle = {
        color: props.mode==='dark'?'white':'#042743',
        backgroundColor: props.mode==='dark'?'rgb(36 74 104)':'white',
        border: '2px solid',
        borderColor: props.mode==='dark'?'white':'#042743'
    }

    // const [btnstyle, setbtnstyle] = useState('btn btn-primary')

    // const [btntext, setBtnText] = useState('Enable Dark Mode')


    // const toggleStyle = () => {
    //     if (myStyle.color == 'black') {
    //         setmyStyle({
    //             color: 'white',
    //             backgroundColor: 'black',
    //             border: '1px solid white'
    //         })
    //         setBtnText('Disable Dark Mode')
    //         setbtnstyle('btn btn-dark')
    //     }
    //     else {
    //         setmyStyle({
    //             color: 'black',
    //             backgroundColor: 'white'
    //         })
    //         setBtnText('Enable Dark Mode');
    //         setbtnstyle('btn btn-primary')
    //     }
    // }


    return (
        <div className='container' style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h1>About Us</h1>
            <div className="accordion" id="accordionExample" style={myStyle}>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header">
                        <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong>Analyze your text</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            TextUtils gives you a way to analyze your text quickly and efficiently; be it word count, character count or anything else.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <strong>Free to Use</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            TextUtils is a free character counting tool that provides instant character count and word count statistics for a given text. It reports the number of words and characters. Hence, it is suitable for writing text with word or character limit.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <strong>Browser Compatible</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            This word / character counter works smoothly in any web browser such as Chrome, Firefox, Safari, Internet Explorer, Opera and many such. It suits to count characters in Facebook feeds, blogs, books, excel spreadsheets, pdf documents, essays and many more.
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="container my-3">
                <button onClick={toggleStyle} className={btnstyle}>{btntext}</button>
            </div> */}
        </div>
    )
}
