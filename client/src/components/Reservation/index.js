import React, { useEffect, useState } from 'react';
// import { AppContext } from '../../context/Context';
// import styled from 'styled-components';
// import PropTypes from 'prop-types';
import WeekCalendar from 'react-week-calendar';
import * as moment from 'moment';

const InitialInterval = [{
	uid: null,
	start: moment({h: null, m: null}),
	end: moment({h: null, m: null}),
	value: ""
}]
const Reservation = () => {
	// const context = useContext(AppContext);
	const [ selectedIntervals, setSelectedIntervals ] = useState(InitialInterval)
	useEffect(() => {
		setSelectedIntervals(
			[
				{
					uid: 1,
					start: moment({h: 10, m: 0}),
					end: moment({h: 11, m: 0}),
					value: "Hello"	
				}
			]
		)
	}, []);

	return(
			<div>
				<h3>Tee varaus</h3>
				<WeekCalendar 
					selectedIntervals = { selectedIntervals }
					startTime = { moment({h: 6, m: 0}) }
					endTime = { moment({h: 23, m: 0}) }
					numberOfDays = { 1 }	
					scaleUnit = { 60 }
					useModal={true}
				/>
			</div>
	)
}
Reservation.propTypes = {

	
 };	



export default Reservation;
