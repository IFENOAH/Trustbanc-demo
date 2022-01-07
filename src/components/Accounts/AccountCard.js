import React from 'react'
import styles from './AccountCard.module.css'
import image2 from './../../Images/atm.jpeg'

function AccountCard() {

    return (

        <div className = {styles.card_wrapper}>

            <div className = {styles.card} >

                <h6>
                    My Account(s)
                </h6>

                <div className = {styles.img_holder}>
                    <img src = {image2} alt = "account image"  className = {styles.card_image}/>
                </div>
            </div>

            <div className = {styles.beneficiaries}>
                <h6>Frequent Beneficiaries</h6>

                <h2 className = {styles.span}>Click on a beneficiary to make a quick transfer</h2>

                <div className = {styles.account_lists}>

                    <div className = {styles.account}>
                        <h3 className  ={styles.bank_name}>Aminat Oladunni</h3>
                        <span className = {styles.number}> Access Bank- 0154872060</span>
                    </div>

                    <div className = {styles.account}>
                        <h3 className  ={styles.bank_name}>Aminat Oladunni</h3>
                        <span className = {styles.number}> Access Bank- 0154872060</span>
                    </div>

                    <div className = {styles.account}>
                        <h3 className  ={styles.bank_name}>Aminat Oladunni</h3>
                        <span className = {styles.number}> Access Bank- 0154872060</span>
                    </div>

                </div>
 
                <a href = "#" className = { styles.link }>See all beneficiaries</a>
            </div>


        </div>
    )
}

export default AccountCard
