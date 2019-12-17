import React from 'react';




function Stats(props) {
  return (
    
     <div class="stat">
       <div className='heart-stat'>
  {props.stat.map(el=><><h1>{el.title}</h1><p>{el.text}</p></>)}
       </div>
   </div>
  );
}

export default Stats ;