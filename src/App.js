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
  var value;
  
  for(var i = 0; i <= 4; i++){
    numbers[i] = i + 1;
  }

  
  const changeActive = event => {
    
    const buttonsSelector = document.querySelectorAll(".buttons-each");
    
    if(value == null){
      event.currentTarget.classList.add("active");
      value = event.currentTarget.id;
      console.log(value);
    }
    else if(value !== null & value !== event.currentTarget.id){
      buttonsSelector.forEach(buttonSelector => {
        buttonSelector.classList.remove("active");
      })
      event.currentTarget.classList.add("active");
      value = event.currentTarget.id;
      console.log(value);
    }
    else if(value !== null & value === event.currentTarget.id){
      event.currentTarget.classList.remove("active");
      value = null;
      console.log(value);
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
