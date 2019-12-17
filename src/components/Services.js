import React from 'react';




function Services(props) {
  return (
    <div  class="services">
{props.serv.map((el,i)=><div className={i===0?"patients":"doctors"}><h3>{el.title}</h3><h2>{el.text}</h2>{el.CHOOSECOUNTRY && <select>{el.CHOOSECOUNTRY.map(el=><option>{el}</option>)}</select>}<img src={el.image}/></div>
      )}
   </div>
  );
}

export default Services ;