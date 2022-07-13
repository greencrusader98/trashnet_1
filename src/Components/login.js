import React from 'react'
import './login.css'
import ImgAsset from '../public'
export default function Login () {
	return (
		<div className='login_login'>
			<img className='Rectangle1' src = {ImgAsset.login_Rectangle1} />
			<img className='Asset64x2' src = {ImgAsset.KYC_Asset64x1} />
			<div className='Rectangle4'/>
			<span className='Login'>Login</span>
			<span className='ForgotPassword'>Forgot Password?</span>
			<div className='outlineuser2'>
				<img className='shape' src = {ImgAsset.login_shape} />
			</div>
			<div className='Rectangle5'/>
			<div className='Rectangle3'/>
			<span className='Username'>Username</span>
			<span className='Username_1'>Username</span>
		</div>
	)
}