import './style.css';

import star from './images/icon-star.svg';

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
  
  for(var i = 0; i <= 4; i++){
    numbers[i] = i + 1;
  }  

  const buttons = numbers.map((number) =>
      <button id={number.toString()} key={number.toString()} className="flex flex-justcont-c flex-alignit-c buttons buttons-each">{number}</button>
  );

  return(
    <div class="flex flex-justcont-sa buttons">
      {buttons}
    </div>
  )
}

function Submit(){
  return(
    <button className="submit">
      SUBMIT
    </button>
  );
}

function App() {
  return (
    <div className="flex flex-justcont-c flex-alignit-c main">
      <div className="main-block">
        <div className='main-content'>
          <Icon />
          <Texts />
          <Buttons />
          <Submit />
        </div>
      </div>
    </div>
  );
}

export default App;
