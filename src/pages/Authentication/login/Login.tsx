import React from 'react'
import '../authentication.scss'
import video from '../../../assets/videos/vl_810_1040.mp4'
import logo from '../../../assets/images/logo.png'
import {Link} from 'react-router-dom'
import { FaUserShield } from "react-icons/fa";
import { BsFillShieldLockFill } from "react-icons/bs";
import { AiOutlineSwapRight } from "react-icons/ai";

export function Login() {
  return (
    <div className="loginPage flex">
      <div className="container flex">
        <div className="videoDiv">
          <video src={video} autoPlay muted loop></video>
          <div className="textDiv">
            <h2 className="title">
              ПРИМОРЬЕ
            </h2>
            <p>Авторские экскурсии по незабываемым уголкам Приморья</p>
          </div>

          <div className="footerDiv flex">
            <span className="text">Не зарегистрированы?</span>
            <Link to={'/register'}>
              <button className="btn">
                Регистрация
              </button>
            </Link>
          </div>
        </div>

        <div className="formDiv flex">
          <div className="headerDiv">
            <img src={logo} alt="Logo" />
            <h3>Добро пожаловать!</h3>
          </div>

          <form action="" className='form grid'>
            <span className='showMessage'>Статус логина</span>

            <div className="inputDiv">
              <label htmlFor="username">Логин</label>
              <div className="input flex">
                <FaUserShield className='icon'/>
                <input type="text" id='username' placeholder='Введите имя пользователя' />
              </div>
            </div>

            <div className="inputDiv">
              <label htmlFor="password">Пароль</label>
              <div className="input flex">
                <BsFillShieldLockFill className='icon'/>
                <input type="password" id='password' placeholder='Введите пароль' />
              </div>
            </div>

            <button type='submit' className='btn flex'>
              <span>Войти</span>
              <AiOutlineSwapRight className='icon'/>
            </button>

            <span className='forgotPassword'>
              Забыли пароль? <a href="">Изменить пароль</a>
            </span>
          </form>
        </div>
      </div>
    </div>
  )
}