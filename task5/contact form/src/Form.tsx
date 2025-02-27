import {useForm} from "react-hook-form";
import './Form.css';

type FormData = {
    name: string;
    email: string;
    message: string;
}

export function Form(){
    const {register, handleSubmit, formState: {errors}} = useForm<FormData>();

    const onSubmit = (data:FormData) => {
        window.location.href = './Succeed.html';
        console.log(data);
    }

    return(
        <>
            <h2>Contact Form</h2>
            <form onSubmit = {handleSubmit(onSubmit)}>
                <label htmlFor="username">Name</label><br></br>
                <input id="username" {...register("name", {required: "name is required"})}/><br/>
                {errors.name && <p>{errors.name.message}</p>}
                <label htmlFor="useremail">Email</label><br></br>
                <input id="useremail" {...register("email", {required: "email is required", pattern: {value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid Email"}})}/><br/>
                {errors.email && <p>{errors.email.message}</p>}
                <label htmlFor="usermessage">Message</label><br></br>
                <textarea id='usermessage' {...register("message", {required: "message is required"})}/><br/>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}