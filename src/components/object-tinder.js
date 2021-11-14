import React, { useState } from 'react';
import './object-tinder.css';
import data from "../data.json";
import Success from "./success";
import Fail from "./fail";

const ObjectTinder = (props) => {
    // DATA IMPORT
    const objectsImport = data;
    const objectsDiwali = objectsImport.Diwali;
    const objectsNewYears = objectsImport.NewYear;
    const objectsConcat = objectsDiwali.concat(objectsNewYears);

    

    // STATE PREPARATION
    const [objects, setObjects] = useState(objectsConcat);
    let [answers, setAnswers] = useState(0);

    // GET OBJECT
    
    function handlenextObject (e, celebration) {
        // VERIFY ANSWER
        if (celebration === object.festival) {
            setAnswers(answers += 1);
        }
        const objectIndex = objects.findIndex(item => item.name === object.name);
        // debugger;
        objects.splice(objectIndex, 1)
        console.log('updated state', objects);
    }

    const object = objects[Math.floor(Math.random()*objects.length)];
    console.log('correct answers', answers);
    // ROUTE TO SUCCESS OR FAIL BASED ON ANSWERS ARRAY

    if (objects.length > 0) {
        return (
            <div className="global-wrapper">
            <div className="image-container">
                <img src={object.src} alt="" />
            </div>
            <div className="buttons-container">
                <button key="Diwali" onClick={(e) => handlenextObject(e, "Diwali")}>Diwali</button> 
                <button key="NewYear" onClick={(e) => handlenextObject(e, "NewYear")}>New Year's</button> 
            </div>
            <div className="progress-container"></div>
            </div>
        );
    } else if (objects.length == 0 &&  answers > 8) {
        return (
            <Success correctAnswers={answers} />
        );
    } else {
        return (
            <Fail correctAnswers={answers} />
        );
    }
};

export default ObjectTinder;