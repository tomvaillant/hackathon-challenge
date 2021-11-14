import React from 'react';

const Fail = (props) => {

    return (
        <div>
        <h3>FAIL: You only answered correctly {props.correctAnswers} times</h3>
        <button onClick={() => window.location.reload()}>Play Again</button>
        </div>
    );
}

export default Fail;