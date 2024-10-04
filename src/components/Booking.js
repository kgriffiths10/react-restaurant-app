import React from 'react';
import BookingForm from './BookingForm';

const Booking = ({ availableTimes, dispatch }) => {
    return(
        <>
            <h1>Reserve a Table</h1>
            <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
        </>
    );
}

export default Booking;
