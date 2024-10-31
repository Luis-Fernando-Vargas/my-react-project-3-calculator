import React from "react";

function Button (props){  
  
const isOperator = value=>{
 // return isNaN(value) && (value != '.') && (value != '=');
 return (value === '*') || (value === '/') || (value === '+') || (value === '-'); // basic operations
}  
  return (
    <div className = {`button-container ${isOperator(props.children) ? 'operator' : ''}`.trimEnd()}
    onClick={()=>{props.manageClick(props.children)}}>
      {props.children} 
    </div>
  );
}

export default Button;