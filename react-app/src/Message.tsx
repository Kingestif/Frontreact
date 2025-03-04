import {useState} from 'react'
import React from 'react'

function Message(){
    var array = ["Cat","Dog", "Rat"];
    var animalList = array.map((item) => <li key={item}>{item}</li> );       //key is unique identifier here its the Index
    
    return(
        <>
            {array.length === 0 && <p>No Items inside</p>}
            <ul>{animalList}</ul>
        </>
    ) 
}

//Properties (Props): in react it prevent us from creating multiple Buttons with differnt texts inside them instead change that dynamically
// the below parameter are props!! like props.text, props.color we just destructured them for better view
export function Button({text="Click me", color="green"}){
    const buttonStyle = {
        color: color,
    }

    return <button style={buttonStyle}>{text}</button>
}

// 3. Events
export function NewButton(){
    function ButtonEvent(){
        alert('Subscribed Successfully!!');
    }

    return <button onClick={ButtonEvent}>Subscribe</button>
}

//4. States
// Note: in this case we move bottom up state is created on the components and use by app.tsx so each button have its own state updated independently
// But if we want both created buttons share state we go Top bottom, create the state on the app.tsf file then use them on this button
export function Counter(){
    const [count, setCount] = useState(0);      //intialzie count with 0


    return(
        <>
            <p>{count}</p>
            <button onClick={()=> setCount(prevCount => prevCount + 1)}>Increase</button>
            <button onClick={()=> setCount(prevCount => prevCount - 1)}>Decrease</button>
        </>
    )
}

// Project1 (Dark mode Button)
export function ToggleButton(){
    const [toggle, setToggle] = useState(false)
    
    const ButtonStyle = {
        color: toggle? "white" : "black",
        backgroundColor: toggle? "black" : "white",
        padding: "20px",
        display: "block"
    }

    return <button onClick = {() => setToggle(prevToggle => !prevToggle)} style={ButtonStyle}>Toggle</button>
}

// Project2 CV application
export function Form(){
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("prevented");
    }

    return(
        <>
            <p>General Information</p>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="full name" name="fname"/><br/>
                <input type="email" placeholder="email" name="email"/><br/>
                <input type="text" placeholder="phone number" name="pnumber"/><br/>
                <input type="text" placeholder="school name" name="scname"/><br/>
                <input type="text" placeholder="job" name="job"/><br/>
                <input type="text" placeholder="company name" name="cpname"/><br/>
                <button>Submit</button><br/><br/>
            </form>
        </>
    )
}

// Reusable Button(using Props but more Typescriptlike and also funciton passing)
interface Props{
    children: string;
    onclick: () => void;   
    bkcolor: string;
    color: string;
}

export function BossButton({children, onclick, bkcolor, color}: Props){
    const ButtonStyle = {
        backgroundColor: bkcolor,
        color: color,
    }

    return <button style = {ButtonStyle} onClick ={onclick}>{children}</button>
}


export default Message;