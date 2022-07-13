import React from 'react'
import './landing_1.css'
import ImgAsset from '../public'
export default function Landing_1 () {
	return (
		<div className='landing_1_landing'>
			<img className='Rectangle1' src = {ImgAsset.landing_1_Rectangle1} />
			<img className='Asset64x1' src = {ImgAsset.KYC_Asset64x1} />
			<img className='_68482771' src = {ImgAsset.landing_1__68482771} />
			<div className='Rectangle1_1'/>
			<div className='Rectangle2'/>
			<span className='Login'>Login</span>
			<span className='ViewLedger'>View Ledger</span>
		</div>
	)
}