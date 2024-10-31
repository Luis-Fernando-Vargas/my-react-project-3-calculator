import './App.css';
import Button from './components/button';
import './components/styles/button.css'
import Screen from './components/screen';
import ClearButton from './components/clearButton';
import { useState } from 'react';
import { evaluate } from 'mathjs'


function App() {
  const [input, setInput] = useState('0');
  const [isResult, setIsResult] = useState(false);
  const maxInput = 15 ;

  const insertInput = (value)=>{

    if (input === '0' && /[0-9]/.test(value)) {
      setInput(value);
      return;
    }

     if (input.length >= maxInput) {
      return; 
    }
    if (isResult && /[0-9]/.test(value)) {
      setInput(value);
      setIsResult(false);
      return;
    }

    if (isResult && /[+\-*/]/.test(value)) {
      setIsResult(false); 
    }

    if ((input === '' && /[+\-*/]/.test(value)) ||(/[+\-*/]/.test(value) && /[+\-*/]$/.test(input))) {
      return;
    }
      setInput(input + value)
     
  };

  const clearScreen = ()=>{
    setInput('0')
    setIsResult(false);
  };

  const evaluateInput = ()=>{
    if (input){ 
      try{
        const result = evaluate(input);
        setInput(result.toString());
        setIsResult(true)           
      } catch(e){
        setInput(e) 
      }        
    }  
  };
  return (
    <div className='App'>
      <div className='main-container'>
        <h1>My Calculator</h1>
        <div className='calculator-container'>
          <Screen
          input= {input}/>
          <div className='row'>
            <Button manageClick = {insertInput}>1</Button>
            <Button manageClick = {insertInput}>2</Button>
            <Button manageClick = {insertInput}>3</Button>
            <Button manageClick = {insertInput}>/</Button>            
          </div>
          <div className='row'>
            <Button manageClick = {insertInput}>4</Button>
            <Button manageClick = {insertInput}>5</Button>
            <Button manageClick = {insertInput}>6</Button>
            <Button manageClick = {insertInput}>*</Button>
          </div>
          <div className='row'>
            <Button manageClick = {insertInput}>7</Button>
            <Button manageClick = {insertInput}>8</Button>
            <Button manageClick = {insertInput}>9</Button>
            <Button manageClick = {insertInput}>+</Button>
          </div>
          <div className='row'>
            <Button manageClick = {insertInput}>0</Button>
            <Button manageClick = {insertInput}>.</Button>
            <Button manageClick = {evaluateInput}>=</Button>
            <Button manageClick = {insertInput}>-</Button>
          </div>
          <div className='row'>
            <ClearButton manageClick = {clearScreen}/>
          </div>          
        </div>
      </div>
    </div>
  );
}

export default App;
