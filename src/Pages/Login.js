import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../Authentication/Features/User/UserSlice';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { loading, error } = useSelector(state => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLoginEvent = (e) => {
    e.preventDefault();
    let userInfo = {
      email,
      password
    };
    
    
    dispatch(loginUser(userInfo)).then(result => {
      if (!result.error) {  
        navigate('/');
      }
    });
  };

  return (
    <div>
      <div className='container LSHight'>
        <div className='row h-100 justify-content-center align-items-center'>
          <div className='col-12 col-md-6 col-lg-4 p-5 rounded-5 bg-light text-center'>
            <h2 className='mb-5 fw-bold'>Log in</h2>
            <form onSubmit={handleLoginEvent}>
              <input
                className='form-control mb-3 border-0 border-bottom border-dark bg-transparent'
                type='email'
                placeholder='Email'
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <input
                className='form-control mb-3 border-0 border-bottom border-dark bg-transparent'
                type='password'
                placeholder='Password'
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
              <button className='form-control btn btn-success' type='submit'>
                {loading ? "Loading..." : "Login"}
              </button>
              {error && (
                <div className='alert alert-danger' role='alert'>{error}</div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
