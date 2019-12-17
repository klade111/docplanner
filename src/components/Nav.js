import React from 'react';
import './nav.css'

function Nav(props) {
  return (
    <div className='NV' >
       <h1 class="logo-doc">

                <a href="#">
                    <img src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1" alt="docplanner"width='250' />
                </a>
            </h1>
        <ul className='menu'>
  {props.navb.map(el=><li className='drop'>{el.menu}{el.drop && <ul className='drop-C'>{el.drop.map(el=><li>{el}</li>)}</ul>}</li>)}  
        </ul>
   </div>
  );
}

export default Nav;