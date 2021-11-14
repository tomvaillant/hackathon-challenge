import React from 'react';

const Success = (props) => {
	return (
			<div>
            <h3>CONGRATS: you've answered correctly {props.correctAnswers} times</h3>
            <button onClick={() => window.location.reload()}>Play Again</button>
      </div>
    );
}

export default Success;