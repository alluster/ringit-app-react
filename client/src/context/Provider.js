import React, { useState, useEffect } from 'react';
import { AppContext } from './Context';
import PropTypes from 'prop-types';
import axios from 'axios';
import {firebase} from '../firebase';

const Provider = ({children}) => {
	const [ isLoading, setIsLoading ] = useState(false);
	const [ loadingMessage, setLoadingMessage ] = useState();
	const [ ringit, setRingit ] = useState([]);
	const [ rinki, setRinki ] = useState([]);
	const [ rinkiUsers, setRinkiUsers ] = useState([]);
	const [ categories, setCategories ] = useState([]);
	const [ userEmail, setUserEmail ] = useState("")
	const [ userId, setUserId ] = useState("")
	const [	error, setError	] = useState("")
	const [ user, setUser ] = useState(firebase.currentUser)



 	const login = async (email, password) =>  { try {
		 
		await firebase.signInWithEmailAndPassword(email, password) 
		await setUserEmail(firebase.currentUser.email)
		await setUserId(firebase.currentUser.uid)
		console.log(firebase.currentUser)
		}catch(error){
			setError(error.message)
		}
	}	
	 const logout = async (props) => {
		 
		 try {
			await firebase.signOut()
			await alert("You have been logged out")
			await setUserEmail("")
		
	}catch(error) {
		alert(error.message)
	}
}
 	const register = async (email, password) => { await firebase.createUserWithEmailAndPassword(email, password) }
	const getCurrentUser = async () => { await firebase.currentUser() }
	const GetRingitByOwner = async (user) => {
		await axios.get(`/api/getringitbyowner/${user}`, {
		})
		.then(function (response) {
			let data = response.data
			setRingit(data)
		})
		.catch(function (error) {
			console.log(error);
		})
		.finally(function () {
		});
	}
	const GetRinkiUsers = async (id) => {
		await axios.get(`/api/getrinkiusers/${id}`, {
		})
		.then(function (response) {
			let data = response.data
			setRinkiUsers(data)
		})
		.catch(function (error) {
			console.log(error);
		})
		.finally(function () {
		});
	}
	const GetRinkiById = async (id) => {
		await axios.get(`/api/getrinkibyid/${id}`, {
		})
		.then(function (response) {
			let data = response.data[0]
			console.log(data)
			setRinki(data)
		})
		.catch(function (error) {
			console.log(error);
		})
		.finally(function () {
		});
	}
	const DeleteRinki = async (id) => {
		await axios.get(`/api/deleterinki/${id}`, {
		})

		.catch(function (error) {
			console.log(error);
		})
		.finally(function () {
		});
	}
	const getCategories = async () => {
		await axios.get('/api/getcategories')
		.then(function (response) {
			let data = response.data
			console.log(data)
			setCategories(data)
		})
	}
		useEffect(() => {
			const unsubscribe = firebase
			  .onAuthStateChanged((user) => setUser(user))
			return () => {
			  unsubscribe()
			};
		  }, []);
        return (
            <AppContext.Provider 
                value={{
					login,
					logout,
					register,
					getCurrentUser,
					GetRingitByOwner,
					GetRinkiById,
					DeleteRinki,
					rinki,
					ringit,                   
					setIsLoading,
					loadingMessage,
					categories,
					getCategories, 
					userEmail, 
					userId,
					setUserEmail,
					rinkiUsers,
					setRinkiUsers,
					GetRinkiUsers,
					error,
					setError
                }} 
            >
                {children}
            </AppContext.Provider>
        );
    }
    Provider.propTypes = {
        children: PropTypes.any
     };

     export default Provider;