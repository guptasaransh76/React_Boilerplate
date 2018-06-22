import React from 'react';
import style from '../css/nav.css';

export default class Nav extends React.Component {
  render(){
    return(
      <div >
        <div style={{background: "black", height:"15vh", width: "100%", color: "white"}}>
          <nav class="navbar navbar-default">
            <div class="container-fluid">
              <div class="navbar-header">

                <a class="navbar-brand" href="#">Create Todo</a>
                <a class="navbar-brand" href="#">Todo</a>
                <a class="navbar-brand" href="#">Todo</a>
                <a class="navbar-brand" href="#">Todo</a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}
