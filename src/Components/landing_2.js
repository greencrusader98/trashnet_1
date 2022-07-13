import React from 'react'
import './landing_2.css'
import ImgAsset from '../public'
export default function Landing_2 () {
	return (
		<div className='landing_2_landing'>
			<img className='Rectangle1' src = {ImgAsset.landing_2_Rectangle1} />
			<img className='Asset64x1' src = {ImgAsset.KYC_Asset64x1} />
			<img className='_68482771' src = {ImgAsset.landing_1__68482771} />
			<div className='Rectangle1_1'/>
			<div className='Rectangle2'/>
			<span className='Login'>Login</span>
			<span className='ViewLedger'>View Ledger</span>
		</div>
	)
}