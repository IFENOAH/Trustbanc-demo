import React from 'react'
import styles from './Transcation.module.css'

function Transaction() {

    return (

        <div className = {styles.transaction_wrapper}>

            <header className = {styles.header}>
                <h3 className = {styles.title}>Transcation history</h3>

                <a href = "#" className = {styles.link}>Download Statement</a>
            </header>

            <div className = {styles.histories}>

                <div className = {styles.history}>
                    <div>
                        <img />
                        <div>
                            <h4>E-CHANNELS</h4>
                            <span>
                                000000006453453118000006765756
                            </span>
                        </div>
                    </div>

                    <div>
                        NGN -1,400.00
                    </div>
                
                </div>
            </div>
            
        </div>
    )
}

export default Transaction
