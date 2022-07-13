import React from 'react'
import './FundLedger.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
export default function FundLedger () {
	return (
		<div className='FundLedger_FundLedger'>
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
									<img className='Vector' src = {ImgAsset.FundLedger_Vector} />
								</div>
							</div>
						</Link>
						<div className='LI1_2'>
							<img className='Rectangle3_1' src = {ImgAsset.FundLedger_Rectangle3_1} />
							<span className='Payouts'>Payouts</span>
							<img className='Vector_1' src = {ImgAsset.FundLedger_Vector_1} />
						</div>
						<div className='LI1_3'>
							<span className='Ledger'>Ledger</span>
							<img className='Vector_2' src = {ImgAsset.FundLedger_Vector_2} />
						</div>
						<div className='LI1_4'>
							<span className='Statements'>Statements</span>
							<img className='Vector_3' src = {ImgAsset.FundLedger_Vector_3} />
						</div>
						<div className='LI1_5'>
							<span className='Compliance'>Compliance</span>
							<img className='Vector_4' src = {ImgAsset.FundLedger_Vector_4} />
						</div>
						<div className='LI1_6'>
							<span className='Settings'>Settings</span>
							<img className='Vector_5' src = {ImgAsset.FundLedger_Vector_5} />
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
			<span className='FUNDDISTRIBUTIONLEDGER'>FUND DISTRIBUTION LEDGER</span>
			<span className='NAME'>NAME</span>
			<span className='SaahasZeroWaste'>Saahas Zero Waste</span>
			<span className='SaahasZeroWaste_1'>Saahas Zero Waste</span>
			<span className='_3062022'>3/06/2022</span>
			<span className='_3062022_1'>3/06/2022</span>
			<span className='BENGALURU'>BENGALURU</span>
			<span className='BENGALURU_1'>BENGALURU</span>
			<span className='MLP'>MLP</span>
			<span className='MLP_1'>MLP</span>
			<span className='_12345678'>12345678</span>
			<span className='_12345678_1'>12345678</span>
			<span className='Approved'>Approved</span>
			<span className='Processing'>Processing</span>
			<span className='DATE'>DATE</span>
			<span className='CREDITSGENERATED'>CREDITS GENERATED</span>
			<span className='MATERIAL'>MATERIAL</span>
			<span className='AMOUNT'>AMOUNT</span>
			<span className='STATUS'>STATUS</span>
			<span className='TRANSACTIONID'>TRANSACTION ID</span>
			<img className='Rectangle5546' src = {ImgAsset.FundLedger_Rectangle5546} />
			<div className='Metrics'>
				<div className='chartmetric'>
					<span className='TotalIncome'>Total Disbursed</span>
					<span className='_1853252'>$ 18532.52</span>
					<div className='percentagegrown'>
						<div className='iconsgrownup'>
							<img className='Vector_6' src = {ImgAsset.FundLedger_Vector_6} />
						</div>
						<span className='_11'> 73%</span>
					</div>
				</div>
			</div>
			<div className='piechart'>
				<div className='Group1000004334'>
					<div className='Ellipse2533'/>
					<div className='Ellipse2534'/>
					<div className='Ellipse2535'/>
					<span className='Collector'>Collector</span>
					<span className='_40'>40%</span>
					<span className='_20'>20%</span>
					<span className='_30'>30%</span>
					<span className='Recycler'>Recycler</span>
					<span className='Manufacturer'>Manufacturer</span>
				</div>
				<div className='Group1000004333'>
					<div className='Group1000004331'>
						<div className='Ellipse2536'/>
						<div className='Ellipse2538'/>
						<img className='Ellipse2539' src = {ImgAsset.FundLedger_Ellipse2539} />
						<img className='Ellipse2540' src = {ImgAsset.FundLedger_Ellipse2540} />
					</div>
				</div>
			</div>
		</div>
	)
}