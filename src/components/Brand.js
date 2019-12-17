import React from 'react';




function Brand(props) {
  return (
    <div className="brand">
     <h1> We are a global <br/>
     companywith local culture</h1>
  <ul className="brand-logo">{props.list.map(el=><li>{el.title}</li>)}</ul>
   </div>
  );
}

export default Brand ;