import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from '../Components/index';
import KYC from '../Components/KYC';
import Ledger from '../Components/Ledger';
import FundLedger from '../Components/FundLedger';
import Branddashboard from '../Components/branddashboard';
import LoginPage from '../Components/LoginPage';
import Landing from '../Components/landing';
import Landing_1 from '../Components/landing_1';
import Landing_2 from '../Components/landing_2';
import Landing_3 from '../Components/landing_3';
import Overvew_collector from '../Components/overvew_collector';
import Login from '../Components/login';
const RouterDOM = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/"><HomePage /></Route>
				<Route exact path="/kyc"><KYC /></Route>
				<Route exact path="/ledger"><Ledger /></Route>
				<Route exact path="/fundledger"><FundLedger /></Route>
				<Route exact path="/branddashboard"><Branddashboard /></Route>
				<Route exact path="/loginpage"><LoginPage /></Route>
				<Route exact path="/landing"><Landing /></Route>
				<Route exact path="/landing_1"><Landing_1 /></Route>
				<Route exact path="/landing_2"><Landing_2 /></Route>
				<Route exact path="/landing_3"><Landing_3 /></Route>
				<Route exact path="/overvew_collector"><Overvew_collector /></Route>
				<Route exact path="/login"><Login /></Route>
			</Switch>
		</Router>
	);
}
export default RouterDOM;