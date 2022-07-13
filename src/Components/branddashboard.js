import React from 'react'
import './branddashboard.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
export default function Branddashboard () {
	return (
		<div className='branddashboard_branddashboard'>
			<div className='desktop1'/>
			<span className='Login'>Login</span>
			<div className='Group1'>
				<div className='Sidebar'>
					<div className='Rectangle1'/>
					<span className='Title'>Navbar</span>
					<div className='ULLI'>
						<div className='LI1'>
							<div className='Rectangle2'/>
							<div className='Rectangle3'/>
							<div className='LI1_1'>
								<span className='Overview'>Overview</span>
								<img className='Vector' src = {ImgAsset.branddashboard_Vector} />
							</div>
						</div>
						<div className='LI1_2'>
							<span className='Payouts'>Payouts</span>
							<img className='Vector_1' src = {ImgAsset.branddashboard_Vector_1} />
						</div>
						<Link to='/ledger'>
							<div className='LI1_3'>
								<span className='Ledger'>Ledger</span>
								<img className='Vector_2' src = {ImgAsset.branddashboard_Vector_2} />
							</div>
						</Link>
						<div className='LI1_4'>
							<span className='Statements'>Statements</span>
							<img className='Vector_3' src = {ImgAsset.branddashboard_Vector_3} />
						</div>
						<div className='LI1_5'>
							<span className='Compliance'>Compliance</span>
							<img className='Vector_4' src = {ImgAsset.branddashboard_Vector_4} />
						</div>
						<div className='LI1_6'>
							<span className='Settings'>Settings</span>
							<img className='Vector_5' src = {ImgAsset.branddashboard_Vector_5} />
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
			<div className='EPRTARGET'>
				<div className='Rectangle8'/>
				<div className='Title_1'>
					<span className='TotalEPRTarget'>Total EPR Target</span>
					<div className='Rectangle9'/>
				</div>
				<span className='_100'>100</span>
				<span className='MT'>MT</span>
				<span className='FY20222023'>FY 2022-2023</span>
			</div>
			<div className='Ledger_1'>
				<div className='Rectangle8_1'/>
				<span className='PLASTICCREDITLEDGER'>PLASTIC CREDIT LEDGER</span>
				<span className='NAME'>NAME</span>
				<span className='SaahasZeroWaste'>Saahas Zero Waste</span>
				<span className='_10MT'>10MT</span>
				<span className='KARNATAKA'>KARNATAKA</span>
				<span className='SaahasZeroWaste_1'>Saahas Zero Waste</span>
				<span className='ViewAll'>View All </span>
				<span className='SaahasZeroWaste_2'>Saahas Zero Waste</span>
				<span className='QTY'>QTY.</span>
				<span className='LOCATION'>LOCATION</span>
				<Link to='/ledger'>
					<div className='Group7'>
						<div className='buttonnew'/>
						<span className='Viewdata'>View data</span>
					</div>
				</Link>
			</div>
			<div className='Fund'>
				<div className='Rectangle8_2'/>
				<div className='Title_2'>
					<span className='TotalEPRTarget_1'>Total EPR Target</span>
					<div className='Rectangle9_1'/>
				</div>
				<span className='_100_1'>100</span>
				<span className='MT_1'>MT</span>
				<span className='FY20222023_1'>FY 2022-2023</span>
			</div>
			<div className='stakeholderkyc'>
				<div className='Rectangle8_3'/>
				<div className='Title_3'>
					<span className='EXPLORESTAKEHOLDERS'>EXPLORE STAKEHOLDERS</span>
					<div className='Rectangle9_2'/>
				</div>
				<div className='Statistic'>
					<Link to='/kyc'>
						<div className='Group1_1'>
							<div className='Rectangle13'/>
							<span className='_1'>1</span>
						</div>
					</Link>
					<div className='Group2'>
						<div className='Rectangle14'/>
						<span className='_2'>2</span>
					</div>
					<div className='Group3'>
						<div className='Rectangle15'/>
						<span className='_3'>3</span>
					</div>
					<div className='Group4'>
						<div className='Rectangle16'/>
						<span className='_4'>4</span>
					</div>
					<div className='Group5'>
						<div className='Rectangle17'/>
						<span className='_5'>5</span>
					</div>
					<div className='Group6'>
						<div className='Rectangle18'/>
						<span className='_6'>6</span>
					</div>
					<Link to='/kyc'>
						<span className='JamesBond'>James Bond</span>
					</Link>
					<span className='JonyyDep'>Jonyy Dep</span>
					<span className='JamesCameron'>James Cameron</span>
					<span className='DinyDelems'>Diny Delems</span>
					<span className='BradPit'>Brad Pit</span>
					<span className='AnjelinaJolly'>Anjelina Jolly</span>
				</div>
			</div>
		</div>
	)
}