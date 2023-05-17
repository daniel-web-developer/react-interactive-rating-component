import { useState } from 'react';

import './style.css';
import star from './images/icon-star.svg';
import thanks from './images/illustration-thank-you.svg';

function Icon(){
  return(
    <img src={star} alt="" className="main-icon"></img>
  );
}

function Texts(){
  return(
    <div>
      <p className="texts-title">How did we do?</p>
      <p className="texts-desc">Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
    </div>
  );
}

function Buttons(){

  let numbers = [];
  var value;
  
  for(var i = 0; i <= 4; i++){
    numbers[i] = i + 1;
  }
  
  const changeActive = event => {
    
    const buttonsSelector = document.querySelectorAll(".buttons-each");
    
    if(value == null){
      event.currentTarget.classList.add("active");
      value = event.currentTarget.id;
    }
    else if(value !== null & value !== event.currentTarget.id){
      buttonsSelector.forEach(buttonSelector => {
        buttonSelector.classList.remove("active");
      })
      event.currentTarget.classList.add("active");
      value = event.currentTarget.id;
    }
    else if(value !== null & value === event.currentTarget.id){
      event.currentTarget.classList.remove("active");
      value = null;
    }
  }
  
  const buttons = numbers.map((number) =>
      <button key={number.toString()} id={number} className="flex flex-justcont-c flex-alignit-c buttons buttons-each" onClick={changeActive}>{number}</button>
  );

  return(
    <div className="flex flex-justcont-sa buttons">
      {buttons}
    </div>
  )
}

function App() {

  var inputVar;

  const [value, setValue] = useState("");

  const submitFunction = () => {

    const buttonsSelector = document.querySelectorAll(".buttons-each");
    const mainContents = document.querySelectorAll(".main-content");

    buttonsSelector.forEach(buttonSelector => {
      if(buttonSelector.classList.contains("active")){
        inputVar = buttonSelector.id;
        setValue(inputVar);
      }
    })

    if(value !== null){
      mainContents.forEach(mainContent => {
        mainContent.classList.contains("first-page") ? mainContent.classList.add("display-none") : mainContent.classList.remove("display-none");
      })
    }
    else{
    }
  }

  return (
    <div className="flex flex-justcont-c flex-alignit-c main">
      <div className="main-block">
        <div className="main-content first-page">
          <Icon />
          <Texts />
          <Buttons />
          <button onClick={submitFunction} className="submit">SUBMIT</button>
        </div>
        <div className="main-content second-page display-none">
          <div className="flex flex-justcont-c">
            <img src={thanks} alt=""></img>
          </div>
          <div className="flex flex-justcont-c">
            <div className="flex flex-justcont-c flex-alignit-c results">
              <p className="results-text">You selected {value} out of 5</p>
            </div>
          </div>
          <div className="flex flex-justcont-c">
            <p className="texts-title texts-title-mobile">Thank you!</p>
          </div>
          <div className="flex flex-justcont-c">
            <p className="texts-desc texts-align-c">We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
