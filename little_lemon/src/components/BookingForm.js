import React from "react"
import {useState} from "react"

function BookingForm({AvailableTimes}, dispatch){
    const [Date, setDate] = useState()
    const [Time, setTime] = useState()
    const [Guest, setGuest] = useState()
    const [Occasion, setOccasion] = useState()

    function handleDateChange(e){
        setDate(e.target.value);
        dispatch()
    }

    return(
    <form className="Form">
        <label for="res-date">Choose date</label>
        <input type="date" id="res-date" value={Date} onChange={handleDateChange}/>
        <label for="res-time">Choose time</label>
        <select id="res-time" value={Time} onChange={e => setTime(e.target.value)}>
            {AvailableTimes.map((time)=> <option value={time.option}>{time.option}</option>)}
        </select>
        <label for="guests">Number of guests</label>
        <input type="number" placeholder="1" min="1" max="10" id="guests" value={Guest} onChange={e => setGuest(e.target.value)}/>
        <label for="occasion">Occasion</label>
        <select id="occasion" value={Occasion} onChange={e => setOccasion(e.target.value)}>
            <option>Birthday</option>
            <option>Anniversary</option>
        </select>
        <input type="submit" value="Make Your reservation" id="Button"/>
    </form>
    )
}

export default BookingForm