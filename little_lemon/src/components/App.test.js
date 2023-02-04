import { fireEvent, render, screen } from "@testing-library/react";
import BookingPage from "./BookingPage";
import BookingForm from "./BookingForm";

test('Renders the BookingForm heading', () => {
    render(<BookingPage />);
    const headingElement = screen.getByText("Choose date");
    expect(headingElement).toBeInTheDocument();
})

test('initializeTime returns correct expected value', () => {
    render(<BookingPage/>);
    const hour = "18:00";
    const time = screen.getByLabelText("Choose time");
    fireEvent.change(time, {target: {value: hour}});
}
)

test('updateTimes returns the same value as provided by state', () => {
    render(<BookingPage/>);
    const availableTimes = BookingForm.availableTimes;
    const updateTimes = BookingPage.updateTimes;
}
)