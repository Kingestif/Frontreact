import {useState} from 'react'

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



export default Message;