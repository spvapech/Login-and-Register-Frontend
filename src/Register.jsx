import React,{ useState} from "react";


export const Register = (props) =>{
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [name, setName]=useState('')

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(email)
    }

    return(
        <div className="auth-form-container">
            <h2>Register</h2>
            <form className="register-form" onSubmit={handleSubmit}>
                <label htmlFor="name"> Name </label>
                <input value={name} onChange={(e)=>setName(e.target.value)}
                       type="text" placeholder="Your Name" name="name" id="name"/>
                <label htmlFor="email"> E-Mail </label>
                <input value={email} onChange={(e)=>setEmail(e.target.value)}
                       type="email" placeholder="example@email.com" id="email" name="email"/>
                <label htmlFor="Password"> Password </label>
                <input value={password} onChange={(e)=>setPassword(e.target.value)}
                       type="password" placeholder="Password" id="password" name="password"/>
                <button type="submit">Register</button>
            </form>
            <button className="link-btn" onClick={()=>props.onFormSwitch('login')}>Log In</button>
        </div>
    )
}