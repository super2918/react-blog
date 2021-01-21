/* eslint-disable */
import React, { useState } from 'react';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './App.css';

function App() {
  let [ title, setTitle ] = useState(['남자코드', '하남 맛집', '여의도 맛집']);
  let [ count, setCount ] = useState(['0', '0', '0']);
  let [ openModal , setOpenModal ] = useState(false);
  let [ modalTitle, setModalTitle ] = useState(0);
  let [ inputValue, setInputValue ] = useState('');

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

  const toggleModal = () => {
    setOpenModal(!openModal);
  }

  const showModal = () => {
    setOpenModal(true);
  } 

  const closeModal = () => {
    setOpenModal(false);
  }

  const handleCountClick = (i) => {
    let index = i;
    let countArray = [...count];
    countArray[index]++;
    setCount(countArray);
  }

  const onChangeInputValue = (e) => {
    let value = e.target.value;
    setInputValue(value);
  }

  const saveButtonClick = (i) => {
    const newItem = [...title];
    newItem.unshift(inputValue);
    setTitle(newItem);
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
        {
          title.map((item, i) => {
            return (
              <li className="list__item" key={i}>
              <div className="list__title">
                <h3 onClick={ () => { setModalTitle(i), showModal(i) }}>{item}</h3>
                <div className="like-count">
                  <span onClick={ () => {handleCountClick(i)} }>👍🏻</span>{count[i]}
                </div>
              </div>
              <p>발행일 2월 17일</p>
            </li>
            );
          })
        }
      </ul>

      <Profile />

      <div className="input-wrap">
        <input type="text" onChange={ onChangeInputValue } />
        <button type="button" onClick={ saveButtonClick }>저장</button>
      </div>

      {/* <div className="button-wrap">
        <button type="button" onClick={ toggleModal }>Modal</button>
      </div> */}

      {
        openModal === true 
        ? <Modal
            closeModal={ closeModal }
            title={ title }
            modalTitle={ modalTitle }
          /> 
        :  null
      }

    </div>
  );

}

function Modal( props ) {
  return (
    <div className="modal">
      <button type="button" className="modal__close" onClick={ props.closeModal }>닫기</button>
      <h2>{ props.title[ props.modalTitle ] }</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div> 
  );
}


class Profile extends React.Component {
  constructor(){
    super();
    this.state = { name : 'Kim', age : 30 }
  }

  // chageName() {
  //   this.setState({name: 'Park'})
  // }

  chageName = () => { 
    this.setState({name: 'Park'})
  }

  render(){
    return (
      <>  
        <div>저는 { this.state.name } 입니다.</div>
        <button onClick={ this.chageName }>버튼</button>
        {/* <button onClick={this.chageName.bind(this)}>버튼</button> */}
        {/* <button onClick={() => {this.setState( { name: 'park' })}}>버튼</button> */}
      </>
    )
  }
}


export default App;
