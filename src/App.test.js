import { render, screen } from "@testing-library/react";
import BookingForm from "./booking/BookingForm";

const availableTimes=[]
const dispatch=() => {}
const submitForm=() => {}

test("Renders the BookingForm heading", () => {
    render(<BookingForm

        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}

         />);
const Element = screen.getByText("Choose date");
expect(Element).toBeInTheDocument();
});


test("Renders the BookingForm heading", () => {
    render(<BookingForm

        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}

         />);
const Element = screen.getByText("BOOK NOW");
expect(Element).toBeInTheDocument();
});