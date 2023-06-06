import React from 'react';
import './index.css';

function App() {
  let curDate = new Date();
  curDate = curDate.getHours();

  const cssStyle = {};

  let greeting = " ";
  if (curDate >= 1 && curDate <= 11) {
    greeting = "Good Morning!";
    cssStyle.color = "green";
  }
  else if (curDate >= 12 && curDate <= 16) {
    greeting = "Good Afternoon!";
    cssStyle.color = "orange";
  }
  else if (curDate > 16 && curDate <= 19) {
    greeting = "Good Evening!";
    cssStyle.color = "blue";
  }
  else {
    greeting = "Good Night!";
    cssStyle.color = "black";
  }
  return (
    <>
      <div className='box'>
        <h1>Hello Sir ,<span style={cssStyle}>{greeting}</span></h1>,
      </div>
    </>
  );
}
export default App;
