import React from 'react'
import profilepic from '/D I M A/S C H O O L/B I T/M7 - PDPB/Project/code/bussid/src/images/profile-pic.png'
import { IoLogoInstagram, IoLogoLinkedin, IoMail, IoCall   } from "react-icons/io5";
import './Dimitar.css'
import { IoLocationOutline } from "react-icons/io5";


function Dimitar() {
  return (
    <div className="App">
        <div className='info-box'>
          <div className='name-box'>
            <div className='profile-pic'>
              <img src={profilepic} alt='profile pic'></img>
            </div>
            <div className='name'>
                <h1>Dimitar Stoynev</h1>
                <h2>Software Developer @eMagiz  BIT Student @UTwente</h2>
                <h3><IoLocationOutline /> Enschede, Netherlands</h3>
            </div>
          </div>
          <div className='logo-box'>
            <IoLogoInstagram color='white' size={85} />
            <IoLogoLinkedin color='white' size={85} />
            <IoMail color='white' size={87} />
            <IoCall color='white' size={85} />
          </div>
          <div className='bio-box'>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean molestie lobortis tellus, sit amet egestas nibh porttitor ac. Proin posuere purus felis, sed venenatis neque semper a. Nunc faucibus lectus eu justo consectetur, id lacinia tortor ullamcorper. Aenean sit amet lectus metus. Phasellus condimentum dignissim risus ac interdum. Suspendisse molestie ullamcorper imperdiet. Vivamus tincidunt efficitur augue quis tempus. Vestibulum eget elit odio. </p>
          </div>
        </div>
      </div>
  )
}


export default Dimitar

