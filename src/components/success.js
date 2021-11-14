import React from 'react';

const Success = (props) => {
	return (
			<div>
            <h1>Congratz! You're a boss.</h1>
            <h3>You've given {props.correctAnswers} correct answers.</h3>
            <button onClick={() => window.location.reload()}>Play Again</button>
      </div>
    );
}

export default Success;