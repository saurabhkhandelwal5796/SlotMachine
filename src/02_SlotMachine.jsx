/* 
* 1st method is basic .
2nd mthod is to use props
3rd method is called object destructuring 
*/



import React, { Component } from 'react'


const SlotM = (props) => {
    // 1st method:
    // let x = "😄";
    // let y = "😄";
    // let z = "🎅";


    // 2nd Method:
    // let x = props.x;
    // let y = props.y;
    // let z = props.z;



    // this is called object destructuring;

let {x,y,z} = props;


if (x === y && y === z) {
    return (
        <>
        <div className = "slot_inner" >
        <h1>  
            {x}  {y}   {z} 
        </h1> 
        <h1> This is Matching </h1>
        <hr/>
        </div>
        </>
    );
}else {
    return (
        <>
        <div className = "slot_inner" >
        <h1>  
            {x}  {y}   {z} 
        </h1> 
        <h1> This is not Matching </h1>
        <hr/>
        </div>
        </>
    )

}






}

export default SlotM;