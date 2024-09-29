import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Signup = () => {
  const [user, setUser] = useState({
    fullName: '',
    username: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/", { replace: true });
  };

  return (
    <div>
      <div className='container LSHight'>
        <div className='row h-100 justify-content-center align-items-center'>
          <div className='col-12 col-md-8 col-lg-5 p-5 rounded-5 bg-light text-center'>
            <h2 className='mb-5 fw-bold'>Sign up</h2>
            <form onSubmit={handleSubmit}>
              <input
                className='form-control mb-3 border-0 border-bottom border-dark bg-transparent'
                type='text'
                name='fullName'
                placeholder='Full Name'
                onChange={handleChange}
                value={user.fullName}
              />
              <input
                className='form-control mb-3 border-0 border-bottom border-dark bg-transparent'
                type='text'
                name='username'
                placeholder='User name'
                onChange={handleChange}
                value={user.username}
              />
              <input
                className='form-control mb-3 border-0 border-bottom border-dark bg-transparent'
                type='email'
                name='email'
                placeholder='Email'
                onChange={handleChange}
                value={user.email}
              />
              <input
                className='form-control mb-3 border-0 border-bottom border-dark bg-transparent'
                type='password'
                name='password'
                placeholder='Password'
                onChange={handleChange}
                value={user.password}
              />
              <button className='form-control btn btn-success' type='submit'>Create Your Account</button>
            </form>
            <button
              className='mt-5 text-decoration-none btn fw-bold'
              onClick={() => navigate('/login')}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup