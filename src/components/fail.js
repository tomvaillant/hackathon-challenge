import React from 'react';

const Fail = (props) => {

    return (
        <div>
        <h1>You're a complete failure!</h1>
        <h3>Your mom should be ashamed. You got {17 - props.correctAnswers} wrong answers.</h3>
        <button onClick={() => window.location.reload()}>Play Again</button>
        </div>
    );
}

export default Fail;