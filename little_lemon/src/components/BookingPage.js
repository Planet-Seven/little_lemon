import BookingForm from "./BookingForm"
import React from "react"
import {useReducer} from "react"

function updateTimes(AvailableTimes){
    return AvailableTimes
}

const initialTimes = [
    {id:1, option: "17:00"},
    {id:2, option: "18:00"},
    {id:3, option: "19:00"},
    {id:4, option: "20:00"},
    {id:5, option: "21:00"},
    {id:6, option: "22:00"}]

function BookingPage(){
    const [state, dispatch] = useReducer(updateTimes, initialTimes);

    return(
        <div className="BookingFormContainer">
            <h1>Book your table:</h1>
            <BookingForm AvailableTimes={state} dispatch={dispatch}/>
        </div>
    )
}

export default BookingPage