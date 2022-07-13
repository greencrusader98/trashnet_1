import React from 'react'
import './landing.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
export default function Landing () {
	return (
		<div className='landing_landing'>
			<div className='desktop1'/>
			<span className='MakingNetZeroaReality'>Making Net Zero a Reality</span>
			<img className='Asset64x1' src = {ImgAsset.KYC_Asset64x1} />
			<img className='_68482771' src = {ImgAsset.landing_1__68482771} />
			<Link to='/loginpage'>
				<div className='Rectangle1'/>
			</Link>
			<Link to='/ledger'>
				<div className='Rectangle2'/>
			</Link>
			<span className='Login'>Login</span>
			<span className='ViewLedger'>View Ledger</span>
		</div>
	)
}