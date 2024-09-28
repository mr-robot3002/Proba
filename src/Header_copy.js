import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Userfront, { SignupForm } from "@userfront/toolkit/react";
import './App.css';
import './css/header.css';

const Modal_Reg = ({ isVisible = false, title, content, footer, onClose }) => {
  const keydownHandler = ({ key }) => {
    switch (key) {
      case 'Escape':
        onClose();
        break;
      default:
    }
  };

  React.useEffect(() => {
    document.addEventListener('keydown', keydownHandler);
    return () => document.removeEventListener('keydown', keydownHandler);
  });

  return !isVisible ? null : (
    <div className="modal" onClick={onClose}>
      <div className="modal-dialog" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h3 className="modal-title">{title}</h3>
          <span className="modal-close" onClick={onClose}>
            &times;
          </span>
        </div>
        <div className="modal-body">
          <form id="registration" method="post">
            <label for="first_name">Имя:  </label>
            <input type="text" placeholder="Введите Имя" name="first_name" id="first_name" /><br/>
            <br></br>
            <label for="second_name">Фамилия:  </label>
            <input type="text" placeholder="Введите Фамилию" name="second_name" id="second_name" /><br/>
            <br></br> 
            <label for="email">Email:  </label>
            <input type="email" placeholder="Введите Email" name="email" id="mail" /><br/>
            <br></br>
            <label for="password">Пароль:  </label>
            <input type="password" placeholder="Введите пароль" name="password" id="pass" /><br/>
          
          </form>
          <div className="modal-content">{content}</div>
        </div>
        {footer && <div className="modal-footer">{footer}</div>}
      </div>
    </div>
  );
};

const Modal_Entr = ({ isVisible = false, title, content, footer, onClose }) => {
  const keydownHandler = ({ key }) => {
    switch (key) {
      case 'Escape':
        onClose();
        break;
      default:
    }
  };

  React.useEffect(() => {
    document.addEventListener('keydown', keydownHandler);
    return () => document.removeEventListener('keydown', keydownHandler);
  });

  

  return !isVisible ? null : (
    <div className="modal" onClick={onClose}>
      <div className="modal-dialog" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h3 className="modal-title">{title}</h3>
          <span className="modal-close" onClick={onClose}>
            &times;
          </span>
        </div>
        <div className="modal-body">
          <form id="registration" method="post">
            <label for="email">Email:  </label>
            <input type="email" placeholder="Введите Email" name="email" id="mail" /><br/>
            <br></br>
            <label for="password">Пароль:  </label>
            <input type="password" placeholder="Введите пароль" name="password" id="pass" /><br/>
          
          </form>
          <div className="modal-content">{content}</div>
        </div>
        {footer && <div className="modal-footer">{footer}</div>}
      </div>
    </div>
  );
};



export default function Header() {
  const [isModal1, setModal1] = React.useState(false);
  const [isModal2, setModal2] = React.useState(false);
  return (
    <div className="Header">
      <div className='Logo'>MONKEY SCRIPT</div>

      <ul id="yakors">
        <li><a href="#main2"  title="Link" >Примеры работ</a></li>
        <li><a href="#main3"  title="Link" >Тарифы</a></li>
        <li><a href="#main4"  title="Link" >Контакты</a></li>
      </ul>
      <Router>
        <ul id="regent">
          <li><button onClick={() => setModal1(true)}>Войти</button>
          <Modal_Reg
    
            isVisible={isModal1}
            title="ВХОД"
            content={<div>Add your content here</div>}
            footer={<button>Cancel</button>}
            onClose={() => setModal1(false)}
          /></li>

          <li><button onClick={() => setModal2(true)}>Регистрация</button>
          <Modal_Entr
    
            isVisible={isModal2}
            title="РЕГИСТРАЦИЯ"
            content={<div>Add your content here</div>}
            footer={<button>Cancel</button>}
            onClose={() => setModal2(false)}
          /></li>
      </ul>
      </Router>
    </div>
  );
}