import React from 'react'
import '../styles/home.css'

let Home = () => {
    return (
        <div className="standard_page_container">
            <div className="main_middle">
                <div>
                    <div className='fullWidthContainer'>
                        <div className='multiLogoContainer'>
                        </div>
                    </div>
                    <h1>Hello and welcome!</h1>
                    <h2>This website is undergoing some construction right now. Please watch your step!</h2>
                    <div className="fullWidthContainer">
                        <a href="https://www.linkedin.com/in/carl-k-freyer/" className="hiddenLink leftImageRightText linkedInColors">
                            <div>
                            </div>
                            <div>
                                <p>
                                    In the meantime, click here follow me on LinkedIn!
                                </p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
      )
  }
  
export default Home
