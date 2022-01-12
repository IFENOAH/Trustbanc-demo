import React, { useState } from 'react'
import styles from './Form.module.css'
import axios from 'axios'

function Form() {

    const [number, setNumber] = useState("")

    const [password, setPassword] = useState("")


    const handleChange = (e) => {

        setNumber(e.target.value)
    }

    const handlePassword = (e) => {

        setPassword(e.target.value)
    }

    // const base_url = "/api/Authentication/LoginUser"


    // async function handleSubmit(input) {

    //     e.preventDefault();

    //     const res = await fetch('https://api/Authentication/LoginUser', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(input)
    //     })
    //     .then(data => data.json());
    //     if (res == 200) {
    //         console.log("success") 
    //     } else {
    //         console.log ("wrong credentials")
    //     }
    // }

    const handleSubmit = e => {

        e.preventDefault();

        const postData = {
          number,
          password
        };

        axios.post(`https://bespoke.trustbancgroup.com/omnichannel_interview/api/Account/FetchAccounts`, postData,)
        .then( response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
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
                    <form className = {styles.form} onSubmit = { handleSubmit }>
                        <h2 className = {styles.heading}> Log in to your account</h2>

                        <input 
                            type = " text " 
                            placeholder = "number" 
                            onChange = { handleChange }  
                            value = { number } 
                            name="number"
                        />

                        <input 
                            type = "password" 
                            placeholder = "password" 
                            onChange = { handlePassword }  
                            value = { password } 
                            name="password"
                        />

                        <button 
                            className = { styles.button2 }
                            type = "submit" >LOGIN
                        </button>

                    </form>

                    <span>Forgot Password?</span>
                </div>
            </div>
            
        </div>
    )
}

export default Form
