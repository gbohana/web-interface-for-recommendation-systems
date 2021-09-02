import React from 'react'
import useForm from '../../hooks/useForm'
import validate from '../../services/validateLogin';


const LoginPage = ({ submitForm }) => {
    const { handleChange, handleSubmit, values, errors } = useForm(
        submitForm,
        validate
    );

    return (
        <div className='form-content-right'>
          <form onSubmit={handleSubmit} className='form' noValidate>
            <h1>
              Bem-vindo(a)! Faça login para usar o sistema.
            </h1>
            <div className='form-inputs'>
              <label className='form-label'>Email</label>
              <input
                className='form-input'
                type='email'
                name='email'
                placeholder='Digite seu e-mail'
                value={values.email}
                onChange={handleChange}
              />
              {errors.email && <p>{errors.email}</p>}
            </div>
            <div className='form-inputs'>
              <label className='form-label'>Senha</label>
              <input
                className='form-input'
                type='password'
                name='password'
                placeholder='Digite sua senha'
                value={values.password}
                onChange={handleChange}
              />
              {errors.password && <p>{errors.password}</p>}
            </div>
            <button className='form-input-btn' type='submit'>
              Entrar
            </button>
          </form>
        </div>
      );
  }
  
export default LoginPage;