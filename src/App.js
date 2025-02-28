import Nav from './Nav';
import HomePage from './home/HomePage';
import Bookingpage from './booking/Bookingpage';
import ConfirmedBooking from './booking/ConfirmedBooking';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
    <Router>
      <header>
      <nav>
      <Nav/>
      </nav>
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/reservation" element={<Bookingpage/>} />
        <Route path="/confirmation" element={<ConfirmedBooking/>}/>
      </Routes>
    </Router>
    </>
  );
}
export default App;