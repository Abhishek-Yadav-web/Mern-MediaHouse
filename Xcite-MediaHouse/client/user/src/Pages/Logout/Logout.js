import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import AfterLogin from '../../components/navbar/afterLogin/AfterLogin';
import { getSetToken } from '../../redux/action/userAction';

const Logout = () => {
    const dispatch = useDispatch();
    const navigate =  useNavigate();
    const onLogout = () => {
        dispatch(getSetToken(''));
        localStorage.removeItem('token');
        navigate('/');
        window.location.reload();
    }
  return (
    <div>
        <AfterLogin />
        <button onClick={onLogout} >Logout</button>
    </div>
  )
}

export default Logout