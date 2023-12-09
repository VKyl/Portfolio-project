import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
import './App.css';
import { useEffect, useState } from 'react';

const langArr = {
  greeting: {
    en: "Hi! I'm",
    ua: "Привіт! Я"
  },
  accent: {
    en: "Viktor" ,
    ua: "Віктор"
  }  ,
  frontEndDev: {
    en: "A front-end developer!",
    ua: "Front-end розробник!"
  },
  times:{
    en: 'And this -',
    ua: 'І це -'
  } ,
  progressiveDevs:{
    en: "Is my portfolio" ,
    ua: "Моє портфоліо"
  } ,
  about:{
    en: 'About me',
    ua: 'Про мене'
  } ,
  aboutP1:{
    en: 'I am a junior font-end developer from Ukraine. I have a lot of energy and enthusiasm to create something new and special. My English level is UPPER-INTERMIDIATE but I am always ready for improvements.',
    ua: 'Я джуніор front-end розробник з України. Я маю багато енергії та ентузіазму, аби створювати щось нове та надзвичайне. Мій рівень знань англійської мови UPPER-INTERMIDIATE, проте я завжди готовий до покращень'
  } ,
  aboutP2: {
    en: 'I have finished front-end course by ITstep academy, so I can create  basic one-paged sites, landings or complex multi-paged sites for business, organisations and etc. Also I am a student of Kyiv-Mohila academy, area of study: Applied Math.',
    ua: 'Я закінчив курси front-end розробки від академії ITstep, тож я можу створювати звичайні односторінкові сайти, лендінги або складні багатосторінкові сайти для бізнесу, організації та інше. Також зараз я навчаюсь в Національному університеті "Києво-Могилянська академія", за спеціальністю "Прикладна математика".'
  },
  aboutP3: {
    en: "I am always open for your purposes, requests and any type of work, as a front-end developer.",
    ua: "Я завжди відкритий до ваших пропозицій, запитів та будь-якої роботи, у ролі front-end розробника. "
  } ,
  experience: {
    en: "Experience",
    ua: "Досвід"
  } ,
  skills: {
    en: "Skills",
    ua: "Навички"
  } 
}


function App() {
  function language(){
   try{
    if(window.location.hash === "#UA"){
      for(let item in langArr){
        document.querySelector(`.lang-${item}`).innerHTML = langArr[item].ua;
      }
      setLoad(false)
    }
   }catch{}
  }
  const[load,setLoad] = useState(true)
  useEffect(() =>{
    try{
      language();
    }catch{}
  },[load])
  
  return (
    <div className="App">
      <Header/>
      <Main lang={language}/>
      <Footer/>
    </div>
  );
}

export default App;
