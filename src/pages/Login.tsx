import React from 'react'
import FormInput from '../components/forms/input/FormInput'

const formFields = [
  { fieldName: "Имя", placeholder: "Имя"},
  { fieldName: "Фамилия", placeholder: "Фамилия"},
  { fieldName: "e-mail" , placeholder: "e-mail"},
  { fieldName: "Номер телефона" , placeholder: "Номер телефона"},
];

export default function Login() {
  return (
    <div>
      {formFields.map(x=>(
        <FormInput placeholder={x.placeholder} fieldName={x.fieldName}/>
      ))}
    </div>
  )
}
