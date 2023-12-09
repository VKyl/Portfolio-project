import React from 'react'
import logo from './../logo.svg';
export default function Header() {
    function changeLang(event){
        window.location.hash = event.target.innerText;
        window.location.reload();
    }
  return (
    <header>
        <div className='top'>
            <img alt='' src={logo} className='logo'/>
            {
            window.location.hash === '#EN' || window.location.hash === ''?
            <div className='language-wrapper'>
                <span className='current'>EN</span>|<span onClick={changeLang}>UA</span>
            </div>
            :
            <div className='language-wrapper'>
                <span onClick={changeLang}>EN</span>|<span className='current'>UA</span>
            </div>
            }
        </div>
        <div className='info'>
            <img className='profile-picture' alt='' src='image/profile-pic.svg'/>
            <h1><span className='lang-greeting'>Hi! I'm </span> <span className='accent lang-accent'>Viktor</span><span className='pointer'>|</span></h1>
            <p className='lang-frontEndDev'>A front-end developer!</p>
            <img alt='' src='image/stars.svg' className='stars'/>
            <p className='lang-times'>And this -</p>
            <p className='lang-progressiveDevs'>Is my portfolio</p>
        </div>
        <div className='wave-bottom'>
            <img alt='' src='image/wave-bottom.svg'/>
        </div>
    </header>
  )
}
