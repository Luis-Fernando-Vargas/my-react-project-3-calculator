import React from "react";
import './styles/clearButton.css'

const ClearButton = (props)=> (
    <div
    className='clear-button'
    onClick={()=> props.manageClick()}>
      clear
    </div>
  );

  export default ClearButton;