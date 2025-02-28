import { validateForm } from "./BookingForm";

test("validateForm returns true for valid inputs", () => {
expect(validateForm("2024-05-01", "13:00", 4)).toBe(true);
});
test("validateForm returns false for missing date", () => {
expect(validateForm("", "17:00", 4)).toBe(false);
});
test("validateForm returns false for missing time", () => {
expect(validateForm("2014-06-01", "", 4)).toBe(false);
});
test("validateForm returns false for guests less than 1", () => {
expect(validateForm("2024-06-01", "10:00", 0)).toBe(false);
});
test("validateForm returns false for guests greater than 10", () => {
expect(validateForm("2024-01-04", "18:00", 11)).toBe(false);
});