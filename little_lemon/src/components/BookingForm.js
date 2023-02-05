import React from "react"
import {useState} from "react"

function BookingForm({AvailableTimes}, dispatch){
    const [DateComponent, setDate] = useState()
    const [Time, setTime] = useState()
    const [Guest, setGuest] = useState()
    const [Occasion, setOccasion] = useState()

    const current = new Date()
    function currentMonth() {
        if (current.getMonth()<10) {
            return `0${current.getMonth()}`
        }
        else {return `${current.getMonth()}`}
    }
    function nextMonth() {
        if (current.getMonth()<9) {
            return `0${current.getMonth()+1}`
        }
        else {return `${current.getMonth()+1}`}
    }
    function currentDate() {
        if (current.getDate()<10) {
            return `0${current.getDate()}`
        }
        else {return `${current.getDate()}`}
    }
    const currentDateString =
    `${current.getFullYear()}-${currentMonth()}-${currentDate()}`;

    const nextMonthDateString =
    `${current.getFullYear()}-${nextMonth()}-${currentDate()}`;

    function handleDateChange(e){
        setDate(e.target.value);
        console.log(currentDateString)
        console.log(DateComponent)
    }

    function isDisabled(){
        if (Guest>0 && Guest<11 && DateComponent!==undefined){
            return false
        }
        else {
            return true
        }
    }

    return(
    <form className="Form">
        <label for="res-date">Choose date</label>
        <input type="date" id="res-date" value={DateComponent} onChange={handleDateChange} required={true} min={currentDateString} max={nextMonthDateString}/>
        <label for="res-time">Choose time</label>
        <select id="res-time" value={Time} onChange={e => setTime(e.target.value)} required={true}>
            {AvailableTimes.map((time)=> <option value={time.option}>{time.option}</option>)}
        </select>
        <label for="guests">Number of guests</label>
        <input type="number" placeholder="1" min="1" max="10" id="guests" value={Guest} onChange={e => setGuest(e.target.value)} required={true}/>
        <label for="occasion">Occasion</label>
        <select id="occasion" value={Occasion} onChange={e => setOccasion(e.target.value)} required={true} min="1" max="20">
            <option>Birthday</option>
            <option>Anniversary</option>
        </select>
        <input type="submit" value="Make Your reservation" id="Button" disabled={isDisabled()}/>
    </form>
    )
}

export default BookingForm