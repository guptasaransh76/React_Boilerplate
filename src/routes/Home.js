import React from 'react';
import Nav from '../layout/nav';
import style from '../css/home.css';

export default class Home extends React.Component {
  render(){
    return(
      <div>
        <div>
          <Nav />
        </div>
        <div style={{width: "60%", background: "blue", height: "95vh"}}>
          <div className={style.home}>
            abc
          </div>

        </div>
      </div>
    );
  }
}
