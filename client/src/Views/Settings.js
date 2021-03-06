import React, { useContext }from 'react';
import Container from '../components/Container';
// import { withAuth, withLoginRequired } from 'use-auth0-hooks';
import { AppContext } from  '../context/Context'
// import ContentBlock from '../components/ContentBlock';
import { useHistory } from 'react-router-dom'
const Settings = () => {
	const history = useHistory()
	const context = useContext(AppContext)  
	// function reformatName(y){
	// 	if(y === null){ return "undefined" }
	// 	else return y.replace('.', ' ').replace(/(?:^|\s)\S/g, a => a.toUpperCase());
	// }
	

	return(
		<div>
			<h3>Asetukset</h3>
			<p>{context.user.email ? context.user.email : ""}</p>
			<button onClick={e => context.logout(e) && history.push('/')}>Log out</button>
		</div>
		
	)
}
export default Settings
// export default withLoginRequired(withAuth(Profile))
