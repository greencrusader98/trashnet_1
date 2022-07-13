import React from 'react'
import {Link} from 'react-router-dom'
export default function HomePage () {
    return (
	<div>
		<Link to='/KYC'><div>KYC</div></Link>
		<Link to='/Ledger'><div>Ledger</div></Link>
		<Link to='/FundLedger'><div>FundLedger</div></Link>
		<Link to='/branddashboard'><div>branddashboard</div></Link>
		<Link to='/LoginPage'><div>LoginPage</div></Link>
		<Link to='/landing'><div>landing</div></Link>
		<Link to='/landing_1'><div>landing_1</div></Link>
		<Link to='/landing_2'><div>landing_2</div></Link>
		<Link to='/landing_3'><div>landing_3</div></Link>
		<Link to='/overvew_collector'><div>overvew_collector</div></Link>
		<Link to='/login'><div>login</div></Link>
	</div>
	)
}