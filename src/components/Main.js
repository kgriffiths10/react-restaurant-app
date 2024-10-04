import React, { useReducer } from 'react';
import { Routes, Route } from "react-router-dom";

import Header from './Header';
import Booking from './Booking';
import ConfirmedBooking from './ConfirmedBooking';

const initializeTimes = () => {
    return ['12:00', '13:00', '14:00', '15:00', '16:00'];
};

// Reducer function to handle the state change based on the selected date
const updateTimes = (state, action) => {
    if (action.type === 'UPDATE_TIMES') {
        return initializeTimes(); 
    }
    return state;
};

function Main() {
    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

    return (
        <Routes>
            <Route path="/" element={<Header />} />
            <Route path='/booking' element={<Booking availableTimes={availableTimes} dispatch={dispatch} />} />
            <Route path='/confirmed' element={<ConfirmedBooking />} />
        </Routes>
    );
}

export default Main;
