import React, { useState,useEffect } from "react";
import Bookingslot from "./Bookingslot";
export const validateForm = (date,time,guest) => {
  return ((date !== "" && time !== "") && (guest > 0 && guest <= 10));
}
function BookingForm({availableTimes,dispatch,submitForm})
{
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guest, setGuest] = useState("");
    const [occasion,setOccasion] = useState("");
    const [isValid,setIsValid]=useState(false)


    useEffect(() => {
    setIsValid(validateForm(date, time, guest));
    }, [date, time, guest]);


const handleDateChange = (e) => {
      setDate(e.target.value);
      dispatch(
        {
          type: "UPDATE",
          value:new Date(e.target.value),
        });
      };

const handleSubmit = (e) => {
      e.preventDefault();
      const data={date,time,guest,occasion};
      console.log(data)
      submitForm(data)
};
    return (
      <form className="form-style" onSubmit={handleSubmit}>
        <h1>BOOK NOW</h1>

        <label htmlFor="res-date">Choose date</label>
        <input type="date" id="res-date" value={date}  required min="1900-01-01" max="2024-12-31" aria-required="true" onChange={handleDateChange} />

        <label htmlFor="res-time">Choose time</label>
        <select id="res-time" value={time} className="time" required onChange={(e) =>setTime(e.target.value)}>
        <option value="">select time</option>
            <Bookingslot availableTimes={availableTimes}/>
        </select>

        <label htmlFor="guest">Number of guests</label>
        <input type="number" placeholder="number of guests" id="guest" min="1" max="10" value={guest} required aria-required="true"
        onChange={(e) => setGuest(e.target.value)} />

        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" value={occasion} onChange={(e) =>setOccasion(e.target.value)}>
        <option value="">Select occasion</option>
        <option>Birthday</option>
        <option>Anniversary</option>
        </select>

        <button type="submit"  disabled={!isValid} aria-label="Submit Reservation">Submit Reservation</button>
      </form>
    );
  }
  export default BookingForm;