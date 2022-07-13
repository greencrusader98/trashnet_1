import React from 'react'
import './KYC.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
export default function KYC () {
	return (
		<div className='KYC_KYC'>
			<div className='desktop1'/>
			<img className='Asset64x1' src = {ImgAsset.KYC_Asset64x1} />
			<span className='ViewLedger'>View Ledger</span>
			<div className='Group2'>
				<div className='Sidebar'>
					<div className='Rectangle1'/>
					<span className='Title'>Navbar</span>
					<div className='ULLI'>
						<Link to='/branddashboard'>
							<div className='LI1'>
								<div className='Rectangle3'/>
								<div className='LI1_1'>
									<img className='Rectangle3_1' src = {ImgAsset.KYC_Rectangle3_1} />
									<span className='Overview'>Overview</span>
									<img className='Vector' src = {ImgAsset.KYC_Vector} />
								</div>
							</div>
						</Link>
						<div className='LI1_2'>
							<span className='Payouts'>Payouts</span>
							<img className='Vector_1' src = {ImgAsset.KYC_Vector_1} />
						</div>
						<div className='LI1_3'>
							<span className='Ledger'>Ledger</span>
							<img className='Vector_2' src = {ImgAsset.KYC_Vector_2} />
						</div>
						<div className='LI1_4'>
							<span className='Statements'>Statements</span>
							<img className='Vector_3' src = {ImgAsset.KYC_Vector_3} />
						</div>
						<div className='LI1_5'>
							<span className='Compliance'>Compliance</span>
							<img className='Vector_4' src = {ImgAsset.KYC_Vector_4} />
						</div>
						<div className='LI1_6'>
							<span className='Settings'>Settings</span>
							<img className='Vector_5' src = {ImgAsset.KYC_Vector_5} />
						</div>
					</div>
					<div className='ContactUs'>
						<div className='Rectangle4'/>
						<span className='Haveanyproblemswithmanageyourdashbord'>Have any problems with manage your dashbord?</span>
						<div className='Rectangle5'/>
						<span className='ContactUs_1'>Contact Us</span>
					</div>
				</div>
				<img className='Asset74x1' src = {ImgAsset.Ledger_Asset74x1} />
			</div>
			<div className='Frame1'>
				<img className='SaahasZeroWaste1' src = {ImgAsset.KYC_SaahasZeroWaste1} />
				<span className='SaahasZeroWaste'>Saahas Zero Waste</span>
				<span className='BengaluruKarnataka'>Bengaluru, Karnataka</span>
				<div className='EmailCityStateCountryPhone'>
					<span className='Collector'>Collector</span>
					<span className='_10MTday'>10MT/day</span>
					<span className='PvtLtd'>Pvt. Ltd.</span>
					<span className='ViewonMap'>View on Map</span>
					<span className='_2348024468361'>(+234)802-446-8361</span>
					<span className='Role'>Role</span>
					<span className='ProcessingCapacity'>Processing Capacity</span>
					<span className='Type'>Type</span>
					<span className='SiteLocation'>Site Location</span>
					<span className='GSTIN'>GSTIN </span>
				</div>
				<span className='RATINGS'>RATINGS</span>
				<span className='_90'>90%</span>
				<span className='Approval'>Approval %</span>
				<div className='Stars'>
					<img className='Star1' src = {ImgAsset.KYC_Star1} />
					<img className='Star2' src = {ImgAsset.KYC_Star2} />
					<img className='Star3' src = {ImgAsset.KYC_Star3} />
					<img className='Star4' src = {ImgAsset.KYC_Star4} />
					<img className='Star5' src = {ImgAsset.KYC_Star5} />
				</div>
				<div className='Group23'>
					<img className='Rectangle2' src = {ImgAsset.KYC_Rectangle2} />
					<span className='DownloadFiles'>Download Files</span>
					<div className='outlinearrowcircledown'>
						<img className='shape' src = {ImgAsset.KYC_shape} />
					</div>
				</div>
				<div className='Group24'>
					<img className='Rectangle2_1' src = {ImgAsset.KYC_Rectangle2_1} />
					<span className='ViewActivity'>View Activity</span>
				</div>
			</div>
			<div className='Rectangle5547'/>
		</div>
	)
}