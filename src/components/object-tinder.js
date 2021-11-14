import React, { useState } from 'react';
import './object-tinder.css';
import data from "../data.json";
import Success from "./success.js";
import Fail from "./fail.js";

const ObjectTinder = (props) => {
    // DATA IMPORT
    const objectsImport = data;

    // STATE PREPARATION
    const [objects, setObjects] = useState(data);
    let [answers, setAnswers] = useState(0);

    // HANDLE PLAYER ANSWER
    function handlenextObject(e, celebration) {
        // VERIFY ANSWER
        if (celebration === object.festival) {
            setAnswers(answers += 1);
        }
        // REMOVE CURRENT OBJECT FROM STATE
        const currentObjects = [...objects];
        const objectIndex = currentObjects.findIndex(item => item.name === object.name);
        if (currentObjects.length > 0) {
            currentObjects.splice(objectIndex, 1);
            setObjects(currentObjects);
        }
    }

    const object = objects[Math.floor(Math.random() * objects.length)];

    console.log("answers in stateful component", answers);
    // ROUTE TO CARROUSEL, SUCCESS OR FAIL BASED ON ANSWERS AND OBJECTS
    if (objects.length > 0) {
        return (
            <div className="global-wrapper">
                <div>
                    <h1>New Year or Diwali?</h1>
                    <h3>Don't be a culture noob.</h3>
                </div>
                <div className="image-container">
                    <img src={object.src} alt="" />
                </div>
                <div className="buttons-container">
                    <button onClick={(e) => handlenextObject(e, "Diwali")}>Diwali</button>
                    <button onClick={(e) => handlenextObject(e, "NewYears")}>New Year</button>
                </div>
                <div className="progress-container">
                    {(objectsImport.length + 1) - objects.length} / 16
                </div>
            </div>

        );
    } else if (objects.length === 0 && answers > 10) {
        return (
            <div className="global-wrapper">
                <Success correctAnswers={answers} />
            </div>
        );
    } else {
        return (
            <div className="global-wrapper">
                <Fail correctAnswers={answers} />
            </div>
        );
    }
};

export default ObjectTinder;