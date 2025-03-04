import Message, {Button, NewButton, Counter, ToggleButton, Form, BossButton} from "./Message";    //use brace for button bc its named export not default export like Message

function Display(){
  return (
    <>
      <Message/>

      <Button text="Click me" color="red"/>
      <Button text="Don't click me" color="blue"/>

      <NewButton/>
      <Counter/>
      <ToggleButton/>

      <Form/>

      <BossButton bkcolor = "blue" color = "white" onclick= {() => {console.log('Button 1 Clicked')}}> Button 1 </BossButton>
      <BossButton bkcolor = "red" color = "black" onclick= {() => {console.log('Button 2 Clicked')}}> Button 2 </BossButton>

    </>
  )
}

export default Display;