/* eslint-disable */
import React, { useState } from 'react';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './App.css';

// 정렬기능 정렬 추가 에정

function App() {
  let [ title, setTitle ] = useState(['남자코드', '하남 맛집', '여의도 맛집']);
  let [ count, setCount] = useState(0);
  let [ openModal , setOpenModal ] = useState(false);

  const handleButtonClick = () => {
    const newData = [ ...title ];
    newData[0]= '여자코트 추천';
    setTitle(newData);
  }

  const compare = (a, b) => {
    if(a < b) {
      return -1;
    } 
    if( a > b) {
      return 1;
    }
    return 0
  }

   const sortButtonClick = () => {
    const sortData = [...title];
    sortData.sort(compare);
    setTitle(sortData)
   }

  //  const toggleModal = () => {
  //  setOpenModal(!openModal);
  //  }

  const showModal = () => {
    setOpenModal(true);
  }

  const closeModal = () => {
    setOpenModal(false);
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
          <div className="list__title" onClick={ showModal }>
            <h3>{title[2]}</h3>
            <div className="like-count">
              <span onClick={ () => { setCount(count + 1) } }>👍🏻</span>{count}
            </div>
          </div>
          <p>발행일 2월 17일</p>
        </li>
      </ul>

      {
        openModal === true ? <Modal handler={ closeModal }/> :  null
      }

    </div>
  );
}

function Modal({ handler }) {
  return (
    <div className="modal">
      <button type="button" className="modal__close" onClick={ handler }>닫기</button>
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div> 
  );
}

export default App;
