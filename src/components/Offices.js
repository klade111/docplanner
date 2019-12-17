import React from 'react';




function Offices(props) {
  return (
    <div className='offices'>
        <div className='titl'>
     <h1>Improve the lives of millions. Change yours forever</h1>
     <p>More than 1000 team mates share our same vision, goals and passion. With offices in Warsaw, Barcelona, Istanbul, Rome, Mexico City and Curitiba, our search for great talent never stops. </p>
     </div> <div className='images'>{props.office.map(el=><div><img src={el.image} /><h4>{el.title}</h4><button>{el.btn}</button> </div>)}</div>
 
   </div>
  );
}

export default Offices ;