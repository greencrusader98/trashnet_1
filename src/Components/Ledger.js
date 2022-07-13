import React from 'react'
import './Ledger.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
export default function Ledger () {
	return (
		<div className='Ledger_Ledger'>
			<div className='desktop1'/>
			<div className='Group1'>
				<div className='Sidebar'>
					<div className='Rectangle1'/>
					<span className='Title'>Navbar</span>
					<div className='ULLI'>
						<Link to='/branddashboard'>
							<div className='LI1'>
								<div className='Rectangle3'/>
								<div className='LI1_1'>
									<span className='Overview'>Overview</span>
									<img className='Vector' src = {ImgAsset.Ledger_Vector} />
								</div>
							</div>
						</Link>
						<div className='LI1_2'>
							<span className='Payouts'>Payouts</span>
							<img className='Vector_1' src = {ImgAsset.Ledger_Vector_1} />
						</div>
						<div className='LI1_3'>
							<img className='Rectangle3_1' src = {ImgAsset.Ledger_Rectangle3_1} />
							<span className='Ledger_1'>Ledger</span>
							<img className='Vector_2' src = {ImgAsset.Ledger_Vector_2} />
						</div>
						<div className='LI1_4'>
							<span className='Statements'>Statements</span>
							<img className='Vector_3' src = {ImgAsset.Ledger_Vector_3} />
						</div>
						<div className='LI1_5'>
							<span className='Compliance'>Compliance</span>
							<img className='Vector_4' src = {ImgAsset.Ledger_Vector_4} />
						</div>
						<div className='LI1_6'>
							<span className='Settings'>Settings</span>
							<img className='Vector_5' src = {ImgAsset.Ledger_Vector_5} />
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
			<div className='Ledger_2'>
				<div className='Rectangle8'/>
				<span className='PLASTICCREDITLEDGER'>PLASTIC CREDIT LEDGER</span>
				<span className='RECYCLER'>RECYCLER</span>
				<span className='SaahasZeroWaste'>Saahas Zero Waste</span>
				<span className='_3062022'>3/06/2022</span>
				<span className='BENGALURU'>BENGALURU</span>
				<span className='MLP'>MLP</span>
				<span className='_12345678'>12345678</span>
				<span className='Approved'>Approved</span>
				<span className='DATE'>DATE</span>
				<span className='LOCATION'>LOCATION</span>
				<span className='MATERIAL'>MATERIAL</span>
				<span className='CREDITSERIAL'>CREDIT SERIAL</span>
				<span className='STATUS'>STATUS</span>
				<div className='Group8'>
					<img className='Rectangle2' src = {ImgAsset.Ledger_Rectangle2} />
					<span className='Name'>Name</span>
				</div>
				<div className='Group11'>
					<img className='Rectangle2_1' src = {ImgAsset.Ledger_Rectangle2_1} />
					<span className='Transactionhash'>Transaction hash</span>
				</div>
				<div className='Group14'>
					<img className='Rectangle2_2' src = {ImgAsset.Ledger_Rectangle2_2} />
					<span className='Timestamp'>Timestamp</span>
				</div>
				<div className='Group17'>
					<img className='Rectangle2_3' src = {ImgAsset.Ledger_Rectangle2_3} />
					<span className='Status'>Status</span>
				</div>
				<div className='Group20'>
					<div className='Group21'>
						<img className='Rectangle2_4' src = {ImgAsset.Ledger_Rectangle2_4} />
						<span className='DownloadFiles'>Download Files</span>
						<div className='outlinearrowcircledown'>
							<img className='shape' src = {ImgAsset.Ledger_shape} />
						</div>
					</div>
					<div className='Group22'>
						<img className='Rectangle2_5' src = {ImgAsset.Ledger_Rectangle2_5} />
						<span className='DownloadFiles_1'>Download Files</span>
						<div className='outlinearrowcircledown_1'>
							<img className='shape_1' src = {ImgAsset.Ledger_shape_1} />
						</div>
					</div>
					<div className='Group23'>
						<img className='Rectangle2_6' src = {ImgAsset.Ledger_Rectangle2_6} />
						<span className='DownloadFiles_2'>Download Files</span>
						<div className='outlinearrowcircledown_2'>
							<img className='shape_2' src = {ImgAsset.Ledger_shape_2} />
						</div>
					</div>
				</div>
				<div className='Group18'>
					<img className='Rectangle2_7' src = {ImgAsset.Ledger_Rectangle2_7} />
					<span className='Status_1'>Status</span>
				</div>
				<div className='Group19'>
					<img className='Rectangle2_8' src = {ImgAsset.Ledger_Rectangle2_8} />
					<span className='Status_2'>Status</span>
				</div>
				<div className='Group15'>
					<img className='Rectangle2_9' src = {ImgAsset.Ledger_Rectangle2_9} />
					<span className='Timestamp_1'>Timestamp</span>
				</div>
				<div className='Group16'>
					<img className='Rectangle2_10' src = {ImgAsset.Ledger_Rectangle2_10} />
					<span className='Timestamp_2'>Timestamp</span>
				</div>
				<div className='Group12'>
					<img className='Rectangle2_11' src = {ImgAsset.Ledger_Rectangle2_11} />
					<span className='TransactionHash'>Transaction Hash</span>
				</div>
				<div className='Group13'>
					<img className='Rectangle2_12' src = {ImgAsset.Ledger_Rectangle2_12} />
					<span className='TransactionHash_1'>Transaction Hash</span>
				</div>
				<div className='Group9'>
					<img className='Rectangle2_13' src = {ImgAsset.Ledger_Rectangle2_13} />
					<span className='Name_1'>Name</span>
				</div>
				<div className='Group10'>
					<img className='Rectangle2_14' src = {ImgAsset.Ledger_Rectangle2_14} />
					<span className='Name_2'>Name</span>
				</div>
			</div>
		</div>
	)
}