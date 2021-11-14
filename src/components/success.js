import React from 'react';

const Success = (props) => {
    return (
        <div>Congrats you've answered correctly {props.correctAnswers} times</div>
    );
}

export default Success;