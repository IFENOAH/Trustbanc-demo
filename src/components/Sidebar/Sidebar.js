import React from 'react'
import styles from './Sidebar.module.css'
import image1 from './../../Images/trustLogo.png'

function sidebar() {

    return (
        
        <div className = {styles.dashboard_wrapper}> 

            <div className = {styles.dashboard_header}> 
                <img src = {image1} alt = "company logo " className = {styles.header_img} />
            </div>

            <div className = {styles.dashboard_lists}>
                <div>
                    <img />
                    <h2>
                        Home
                    </h2>
                </div>

                <div>
                    <img />
                    <h2>
                        Transfers
                    </h2>
                </div>

                <div>
                    <img />
                    <h2>
                        Target Savings
                    </h2>
                </div>

                <div>
                    <img />
                    <h2>
                        Airtime and Bills
                    </h2>
                </div>

                <div>
                    <img />
                    <h2>
                        Cards
                    </h2>
                </div>

                <div>
                    <img />
                    <h2>
                        Loans
                    </h2>
                </div>

                <div>
                    <img />
                    <h2>
                        Settings
                    </h2>
                </div>
            </div>

        </div>

    )
}

export default sidebar
