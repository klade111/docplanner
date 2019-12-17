import React from 'react';
import './App.css';
import Nav from './components/Nav' ;
import Lead from './components/lead';
import Services from './components/Services';
import Brand from './components/Brand';
import Stats from './components/Stats';
import Offices from './components/Offices';

const intro = [{text:'We want patients to find the perfect doctor and book an appointment in the most easy way. The patient journey should be enjoyable, and thats why we are always next to them: to help them find the best possible care. Anytime, anywhere. '},
               {text:'We also help doctors to better manage their practice and build their online reputation. With our integrated end-to-end solution, doctors are able not only to improve their online presence, but also to devote their time to what really matters: their patients.'} ]
const navbar = [{menu:'About us'},{menu:'Career'},{menu:"Departments",drop:['marketing & pr','Customer Success & Sales','IT, Product, Design & UX','Finance & Administration','HR & more']}];
const service =[{title:'for patients',
text:'Find a doctor, book a visit and solve any health-related doubt', image:"https://www.docplanner.com/img/screen-marketplace@2x.png", alt:"", 
CHOOSECOUNTRY:['CHOOSECOUNTRY','Argentina','Australia','Brazil','Chile','Colombia'],},
{title:'for doctors', text:'Save time managing visits and cut no-shows by half', image:"https://www.docplanner.com/img/screen-saas@2x.png", alt:"1"}]

const list =[{title:'znanylekarz'},{title:'doctoralia'},{title:'miodottore'},{title:'doktortakvimi'},{title:'znamylekar'}]
const stat =[{title:"The worldsbiggest healthcare platform "},{text:"We work from 6 offices all over the world, bringing Docplanner Group to life in almost 20 countries."},{}]
const office=[{image:'https://www.docplanner.com/images/warsaw.png',
               title:'Warsaw',
               btn:'See openings'},
             {image:'https://www.docplanner.com/images/barcelona.png ',
              title:'barcelona',
              btn:'See opening'},
            { image:'https://www.docplanner.com/images/istanbul.png',
              title:'istanbul',
              btn:'See opening'},
            { image:'https://www.docplanner.com/images/rome.png',
             title:'rome',
             btn:'See opening'},
            {image:'https://www.docplanner.com/images/mexico-city.png ',
             title:'mexico-city',
             btn:'See opening'},
            {image:'https://www.docplanner.com/images/curitiba.png',
             title:'curitiba',
             btn:'See opening'}]









function App() {
  return (
    <div className="App">
      <Nav navb={navbar}/>
      <Lead int={intro}/>
      <Services serv={service} />
      <Brand list={list}/>
      <Stats stat={stat}/>
      <Offices office={office}/>
    </div>
  );
}

export default App;
