import { useReducer } from "react";
import BookingForm from "./BookingForm";
import {fetchAPI, submitAPI} from './Api';
import { useNavigate } from "react-router-dom";
import FooterSection from '../home/FooterSection';

export const initializeTimes = () =>fetchAPI(new Date());

export const updateTimes = (state, action) => {
    if(action.type==='UPDATE')
        {
    return fetchAPI(action.value)
    }
    return state
};

function Bookingpage() {
const [availableTimes, dispatch] = useReducer(updateTimes,[],initializeTimes);

const navigate=useNavigate()

function submitForm(data){
    if(submitAPI(data))
    {
    navigate("/confirmation")
    }
}

return (
<>
<main className="booking">
    <BookingForm
    availableTimes={availableTimes}
    dispatch={dispatch}
    submitForm={submitForm}
    />
</main>
<footer>
<FooterSection/>
</footer>
</>
);
}
export default Bookingpage;