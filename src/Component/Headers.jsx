import React from "react";

const myFunction  = (props) =>{
    const pageStyle = {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column', // This allows the buttons to stack vertically
      };
    
    return (
      <h1 className="text-center my-3">{props.title}</h1>

    )
}

export default myFunction


