import React from 'react'
import './overvew_collector.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
export default function Overvew_collector () {
	return (
		<div className='overvew_collector_overvew_collector'>
			<img className='Rectangle1' src = {ImgAsset.overvew_collector_Rectangle1} />
			<div className='Rectangle6'/>
			<span className='WelcomeSaahasZeroWaste'>Welcome, Saahas Zero Waste</span>
			<span className='Startanewentry'>Start a new entry</span>
			<Link to='/undefined'>
				<div className='ButtonPrimary'>
					<div className='LeftIcon24'>
						<div className='_24plus'>
							<img className='shape' src = {ImgAsset.overvew_collector_shape} />
						</div>
					</div>
					<div className='LeftIcon16'>
						<div className='_16smplus'>
							<img className='shape_1' src = {ImgAsset.overvew_collector_shape_1} />
						</div>
					</div>
				</div>
			</Link>
			<img className='Asset64x1' src = {ImgAsset.KYC_Asset64x1} />
			<img className='shape_2' src = {ImgAsset.overvew_collector_shape_2} />
			<div className='Fund'>
				<div className='Rectangle8'/>
				<div className='Title'>
					<span className='CreditsGeneratedsofar'>Credits Generated so far</span>
				</div>
				<span className='_32'>32</span>
				<span className='FY20222023'>FY 2022-2023</span>
			</div>
			<div className='Fund_1'>
				<div className='Rectangle8_1'/>
				<div className='Title_1'>
					<span className='Creditsinprocess'>Credits in process</span>
				</div>
				<span className='_3'>3</span>
				<span className='FY20222023_1'>FY 2022-2023</span>
			</div>
			<div className='Fund_2'>
				<div className='Rectangle8_2'/>
				<div className='Title_2'>
					<span className='Creditsinprocess_1'>Credits in process</span>
				</div>
				<span className='_4'>4</span>
				<span className='FY20222023_2'>FY 2022-2023</span>
			</div>
		</div>
	)
}