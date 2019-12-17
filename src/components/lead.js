import React from 'react';



function Lead(props) {
  return (
    <div className="lead-section">
    <div className="lead">
        <img className="lead-logo" src="https://www.docplanner.com/img/sygnet.png" alt=""/>
        <h1 className="lead-titl">Making the healthcare experience more human</h1>
    <div className="paragraph">
    {props.int.map(el=>
          <p className="paragraph1">{el.text}</p>)}
    </div>

    </div>
</div>



  );
}

export default Lead;