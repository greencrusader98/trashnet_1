import React from 'react'
import './LoginPage.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
export default function LoginPage () {
	return (
		<div className='LoginPage_LoginPage'>
			<img className='background' src = {ImgAsset.LoginPage_background} />
			<div className='loginoutline'/>
			<img className='Asset64x1' src = {ImgAsset.KYC_Asset64x1} />
			<div className='Rectangle1'/>
			<Link to='/branddashboard'>
				<span className='Login'>Login</span>
			</Link>
			<span className='ForgotPassword'>Forgot Password?</span>
			<div className='Ellipse1'/>
			<div className='outlineuser2'>
				<img className='shape' src = {ImgAsset.LoginPage_shape} />
			</div>
			<div className='Rectangle2'/>
			<div className='Rectangle3'/>
			<span className='Username'>Username</span>
			<span className='Username_1'>Username</span>
		</div>
	)
}