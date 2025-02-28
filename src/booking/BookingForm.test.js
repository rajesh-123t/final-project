import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

const availableTimes=[]
const dispatch=() => {}
const submitForm=() => {}


test("Date input has required attribute", () => {
render(<BookingForm
    availableTimes={availableTimes}
    dispatch={dispatch}
    submitForm={submitForm}
     />);
const dateInput = screen.getByLabelText(/Choose date/i);
expect(dateInput).toHaveAttribute("required");
})

test("Time select has required attribute", () => {
    render
    (<BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
    submitForm={submitForm}
    />);
    const timeinput = screen.getByLabelText(/Choose time/i);
    expect(timeinput).toHaveAttribute("required");
});



test("Guest input has min and max attributes", () => {
    render
    (<BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
    submitForm={submitForm}
    />)


    const guestInput = screen.getByLabelText(/Number of guests/i);
    expect(guestInput).toHaveAttribute("min", "1");
    expect(guestInput).toHaveAttribute("max", "10");
});
