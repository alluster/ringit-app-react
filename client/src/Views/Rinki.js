import React, { setState, useContext, useState, useEffect } from 'react';
import Container from '../components/Container';
import PropTypes from 'prop-types';
import { AppContext } from '../context/Context';
import Reservation from '../components/Reservation';
import axios from 'axios';
import Button from '../components/Button';
import Accordion from '../components/Accordion';
import { faTrash, faUser } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components';
import { useHistory } from "react-router-dom";

const AccordionContainer = styled.div`
	padding: 15px;
	min-height: 20px;
`
const Rinki = (props) => {
	const history = useHistory();

	const handleClick = (e) => {
		e.preventDefault()
		context.DeleteRinki(props.match.params.id);
		alert("Rinki on poistettu")
		history.push("/profile");
	}		
	

			
	
	
	
  
	const context = useContext(AppContext)  
	const [ userInRinki, setUserInRinki ] = useState(true)
	const [ owner, setOwner ] = useState("")

	const addUserToRinki = async (e) => {
		e.preventDefault();
		if (context.isAuthenticated & !userInRinki) {
			try {
				return await axios.get('/api/addusertorinki',  {
					params: {
						id_user: context.user.sub,
						id_rinki: props.router.query.id,	
						user_email: context.user.email			
					}	
				})
			} 
			catch (error) {
				console.error(error)
			}
		}
		else {
			alert("Sinun tulisi kirjautua tai rekisteröityä liittyäksesi rinkiin")

		}
		
		
	}
	
	const userList = context.rinkiUsers.map((item, i) =>  <Accordion key={i} header={item.user_email} icon={faUser}></Accordion>)

	// const addToRinki = () => { return ( context.rinkiUsers.map((item, i) => { if(item.user_email === !owner) return (<Button onClick={e => addUserToRinki(e)}>Liity rinkiin</Button>)
	// }))}
	
	
useEffect(() => {
	context.GetRinkiById(props.match.params.id)
	context.GetRinkiUsers(props.match.params.id)
	setOwner(context.rinki.owner)
	// setUserInRinki( context.rinkiUsers.map((item) => (item.user_email === !owner)) )
}, [])
	return(
			<Container>
				<h1>{ context.rinki.name || "" }</h1>
				<h5>{ context.rinki.description || ""  }</h5>
				<h5>{ context.rinki.location || "" }</h5>
				<Button onClick={e => addUserToRinki(e)}>Liity rinkiin</Button>
				<Reservation />
				<h4>Ringin jäsenet</h4>
				{userList}
				<h4>Asetukset</h4>
				<Accordion header="Poista Rinki" icon={faTrash}>
					<AccordionContainer>
						<p>Oletko varma että haluat poistaa ringin? Toimintoa ei voi perua ja kaikki ringin jäsenet poistetaan ringistä automaattisesti.</p>
						<Button onClick={e => handleClick(e)}>Poista rinki</Button>

					</AccordionContainer>
					</Accordion>
			</Container>
	)
}


  Rinki.propTypes = {
	props: PropTypes.any,
	rinki: PropTypes.any,
	router: PropTypes.any,
	rinkiusers: PropTypes.any

 };
export default Rinki
