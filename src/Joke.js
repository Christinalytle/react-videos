import React from 'react'; 


function Joke(props) {
    return (
        <div>
            <h3 style={{display: props.question ? "block" : "none"}}>Question: {props.question}</h3>
            <h3 style={{display: props.punchLine ? "block" : "none"}}>Answer: {props.punchLine} </h3>
            <hr></hr>
        </div>

    )
}

export default Joke; 