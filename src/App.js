/* eslint-disable */
import React, { useState } from 'react';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './App.css';

// 정렬기능 정렬 추가 에정

function App() {
  let [ title, setTitle ] = useState(['남자코드', '하남 맛집', '여의도 맛집']);
  let [ count, setCount] = useState(0);

  function handleButtonClick() {
    const newData = [...title]; // deep copy array랑 objdect랑 생각
    newData[0] = '여자코트 추천';
    setTitle(newData);
  }

  function compare ( a, b) {
    if(a < b) {
      return -1;
    } 
    if( a > b) {
      return 1;
    }
    return 0
  }

   function sortButtonClick() {
    const sortData = [...title];
    sortData.sort(compare);
    setTitle(sortData)
   }

  return (
    <div className="App">
      <div className="black-nav">
        <h1>개발자 Blog</h1>
      </div>
      <div className="button__wrap">
        <button type="button" className="button button--sort" onClick={ sortButtonClick }><FontAwesomeIcon icon={ faFilter } />정렬</button>
        <button type="button" className="button button--modify" onClick={ handleButtonClick }>수정</button>
      </div>
      <ul className="list">
        <li className="list__item">
          <div className="list__title">
            <h3>{title[0]}</h3>
            <div className="like-count">
              <span onClick={ () => { setCount(count + 1) } }>👍🏻</span>{count}
            </div>
          </div>
          <p>발행일 2월 17일</p>
        </li>
        <li className="list__item">
          <div className="list__title">
            <h3>{title[1]}</h3>
            <div className="like-count">
              <span onClick={ () => { setCount(count + 1) } }>👍🏻</span>{count}
            </div>
          </div>
          <p>발행일 2월 17일</p>
        </li>
        <li className="list__item">
          <div className="list__title">
            <h3>{title[2]}</h3>
            <div className="like-count">
              <span onClick={ () => { setCount(count + 1) } }>👍🏻</span>{count}
            </div>
          </div>
          <p>발행일 2월 17일</p>
        </li>
      </ul>
    </div>
  );
}

export default App;
