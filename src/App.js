/* eslint-disable */
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let [ title, setTitle ] = useState({ 0 : 'title1', 1: 'title2', 2: 'title3'});

  return (
    <div className="App">
      <div className="black-nav">
        <h1>개발자 Blog</h1>
      </div>
      <ul className="list">
        <li className="list__item">
          <h3>{title[0]}</h3>
          <p>발행일 2월 17일</p>
        </li>
        <li className="list__item">
          <h3>{title[1]}</h3>
          <p>발행일 2월 17일</p>
        </li>
        <li className="list__item">
          <h3>{title[2]}</h3>
          <p>발행일 2월 17일</p>
        </li>
      </ul>
    </div>
  );
}

export default App;
