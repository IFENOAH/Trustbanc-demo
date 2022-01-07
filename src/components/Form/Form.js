import React, { useState } from 'react'
import styles from './Form.module.css'

function Form() {

    const [state, setState] = useState({

        userName : "",
        password : ""
    })


    const handleChange = (e) => {

        e.preventDefault();
        setState({
            ...state,
            [e.target.name]: e.target.value,
        })

        console.log(state)
    }

    const handleSubmit = () =>{

    }


    return (
        <div className = {styles.form_wrapper}>

            <div className = {styles.wrapper}>
                <div className = {styles.left_side}> 
                    <p className = {styles.text}> 
                        Are you a new customer or an existing customer yet to setup your online account? 
                    </p>
                    <button className = {styles.button1}>Get Started</button>
                </div>

                <div className = {styles.form_page}>
                    <form className = {styles.form}>
                        <h2 className = {styles.heading}> Log in to your account</h2>

                        <input 
                            type = " text " 
                            placeholder = "Username" 
                            onChange = { handleChange }  
                            value = { state.userName } 
                            name="userName"
                        />

                        <input 
                            type = "password" 
                            placeholder = "password" 
                            onChange = { handleChange }  
                            value = { state.password } 
                            name="password"
                        />

                        <button className = { styles.button2 } onSubmit = { handleSubmit }>LOGIN</button>

                    </form>

                    <span>Forgot Password?</span>
                </div>
            </div>
            
        </div>
    )
}

export default Form
