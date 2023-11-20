import React from 'react'
import './formInput.scss'

interface IProps{
  placeholder: string;
  fieldName: string;
}


export default function FormInput(props:IProps) {
  return (
    <div className='form_input_container'>
      <div className='form_input'>
          <label>{props.fieldName}</label>
          <input placeholder={props.placeholder}/>
      </div>
    </div>
  )
}
