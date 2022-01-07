import React from 'react'
import styles from './Topbar.module.css'

function Topbar() {
    return (
        <div className = {styles.top_wrapper}>

            <button className = {styles.button}>

                Make a transfer

            </button>

            <div className = {styles.account_info}>
                <h5>Abati Olawale</h5>
                <span><a>Click to view profile</a></span>
            </div>

        </div>
    )
}

export default Topbar
