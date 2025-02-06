import Message, {Button, NewButton, Counter, ToggleButton} from "./Message";    //use brace for button bc its named export not default export like Message


function Display(){
  return (
    <>
      <Message/>

      <Button text="Click me" color="red"/>
      <Button text="Don't click me" color="blue"/>

      <NewButton/>
      <Counter/>
      <ToggleButton/>
    </>
  )
}

export default Display;