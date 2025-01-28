import React from 'react'
import '../styles/home.css'
import LinkedInLogo from '../../assets/linkedin.svg?react'
import RoadClosedLogo from '../../assets/roadClosed.svg?react'
import CraneLogo from '../../assets/crane.svg?react'
import DigLogo from '../../assets/dig.svg?react'

let Home = () => {
    return (
        <div className="standard_page_container">
            <div className="main_middle">
                <div>
                    <div className='fullWidthContainer'>
                        <div className='multiLogoContainer'>
                            <DigLogo alt="A man digging."/>
                            <CraneLogo alt="A construction crane."/>
                            <RoadClosedLogo alt="A road closed barrier."/>
                        </div>
                    </div>
                    <h1>Hello and welcome!</h1>
                    <h2>This website is undergoing some construction right now. Please watch your step!</h2>
                    <div class="fullWidthContainer">
                        <a href="https://www.linkedin.com/in/carl-k-freyer/" className="hiddenLink leftImageRightText linkedInColors">
                            <div>
                                <LinkedInLogo className="smallLogo" alt="LinkedIn Logo"/>
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
