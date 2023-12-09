import React, { useState } from 'react'

export default function Main({lang}) {
  const[pagStart, setPagStart] = useState(0)
  const[currentPage, setCurrentPage] = useState(1)
  let pags = [];
  let pagStep = 3;
  let pagLast = pagStart + pagStep;

  

  let arrow = <img alt='' src='image/arrow.svg' className='arrow'/>;

  const myWorks = [
    // {
    //   title: 'Portfolio',
    //   link: '#'
    // },
    // {
    //   title: 'Portfolio Portfolio Portfolio Portfolio Portfolio',
    //   link: '#'
    // },
    // {
    //   title: 'Portfolio',
    //   link: '#'
    // },
    // {
    //   title: 'Portfolios',
    //   link: '#'
    // }
  ]
  function accordionChange(event){
    document.querySelector('.item.current').classList.remove('current')
    event.target.classList.add('current');
    document.querySelector('.container.current-container').classList.remove('current-container');
    document.querySelector(`.${event.target.dataset.choice}`).classList.add('current-container')
  }
  function paggClick(event){
    setCurrentPage(Number(event.target.id));
    setPagStart((event.target.id-1)*3)
  }
  function createPag(){
    if(myWorks.length !== 0){
      for(let i = 1; i <= Math.ceil(myWorks.length/pagStep); i++){
        if(i === currentPage){
          pags.push(<div className='pag currenPag' onClick={paggClick} key={i} id={i}></div>);
        }else{
          pags.push(<div className='pag' onClick={paggClick} key={i} id={i}></div>);
        }
      }
    }else{
      pags.push(<div className='pag currenPag' key={1} id={1}></div>);
    }
    return  pags.map(el => el);
  }
  function prev(){
    if(currentPage !== 1){
      setCurrentPage(currentPage-1)
      setPagStart(pagStart-pagStep)
    }
  }
  function next(){
    if(currentPage !== Math.ceil(myWorks.length/pagStep)){
      setCurrentPage(currentPage+1)
      setPagStart(pagStart+pagStep)
    }
  }
  
  return (
    <main>
        <div className='accordion'>
            <ul className='nav'>
                <li className='item current' data-choice="about-me" onClick={accordionChange}>About</li>
                <li className='item'  data-choice="experience" onClick={accordionChange}>Experience</li>
                <li className='item'  data-choice="skills" onClick={accordionChange}>Skills</li>
            </ul>
            <div className='about-me container current-container'>
              <h2 className='lang-about'>About me</h2>
              <div className='content'>
                <p className='lang-aboutP1'>I am a junior front-end developer from Ukraine. I have a lot of energy and enthusiasm to create something new and special. My English level is UPPER-INTERMIDIATE but I am always ready for improvements.</p>
                <p className='lang-aboutP2'>I have finished front-end course by ITstep academy, so I can create  basic one-paged sites, landings or complex multi-paged sites for business, organisations and etc. Also now I am a student of Kyiv-Mohila academy, area of study: Applied Math.</p>
                <p className='lang-aboutP3'>I am always open for your purposes, requests and any type of work, as a front-end developer.</p>
              </div>
          </div>
          <div className='experience container'>
              <h2 className='lang-experience'>Experience</h2>
              <ul className='works-wrapper'>
                {myWorks.length !== 0 ? myWorks.slice(pagStart,pagLast).map((el,id) => <li className='work' key={id}><a href={el.link}><span className='title'>{el.title}</span>{arrow}</a></li>) 
                :
                <p className='work'>{window.location.hash === "#UA" ? "Схоже, поки тут нічого" : "Looks, like it's empty"}</p>
                }
              </ul>
              <div className='paggination'>
                <button className='chevron' onClick={prev}><img className='pag-nav left' src='image/chevron.svg' alt=''/></button>
                <div className='pag-wrapper'>{createPag()}</div>
                <button className='chevron' onClick={next}><img className='pag-nav right' src='image/chevron.svg' alt=''/></button>
              </div>
            </div>
            <div className='skills container'>
              <h2 className='lang-skills'>Skills</h2>
              <div className='content'>
                <div className='item'>
                  <img alt='' src='image/html.svg'/>
                  <p className="subtitle">HTML</p>
                </div>
                <div className='item'>
                  <img alt='' src='image/css.svg'/>
                  <p className="subtitle">CSS</p>
                </div>
                <div className='item'>
                  <img alt='' src='image/js.svg'/>
                  <p className="subtitle">JavaScript</p>
                </div>
                <div className='item'>
                  <img alt='' src='image/ts.svg'/>
                  <p className="subtitle">TypeScript</p>
                </div>
                <div className='item'>
                  <img alt='' src='image/angular.svg' />
                  <p className="subtitle">Angular</p>
                </div>
                <div className='item'>
                  <img alt='' src='image/figma.svg'/>
                  <p className="subtitle">Figma</p>
                </div>
                <div className='item'>
                  <img alt='' src='image/sass.svg'/>
                  <p className="subtitle">Sass</p>
                </div>
                <div className='item'>
                  <img alt='' src='image/react.svg'/>
                  <p className="subtitle">React</p>
                </div>
              </div>
            </div>
        </div>    
    </main>
  )
}
