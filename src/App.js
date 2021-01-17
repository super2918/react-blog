/* eslint-disable */
import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
  let [ title, setTitle ] = useState({ 0 : '남자코드 추천', 1: '강남 맛집', 2: '여의도 맛집'});
  let [ count, upDateCount] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <h1>개발자 Blog</h1>
      </div>
      <div className="button__wrap">
        <button type="button" className="button button--modify">수정</button>
      </div>
      <ul className="list">
        <li className="list__item">
          <div className="list__title">
            <h3>{title[0]}</h3>
            <div className="like-count">
              <span onClick={ () => { upDateCount(count + 1) } }>👍🏻</span>{count}
            </div>
          </div>
          <p>발행일 2월 17일</p>
        </li>
        <li className="list__item">
          <div className="list__title">
            <h3>{title[1]}</h3>
            <div className="like-count">
              <span onClick={ () => { upDateCount(count + 1) } }>👍🏻</span>{count}
            </div>
          </div>
          <p>발행일 2월 17일</p>
        </li>
        <li className="list__item">
          <div className="list__title">
            <h3>{title[2]}</h3>
            <div className="like-count">
              <span onClick={ () => { upDateCount(count + 1) } }>👍🏻</span>{count}
            </div>
          </div>
          <p>발행일 2월 17일</p>
        </li>
      </ul>
    </div>
  );
}

export default App;
