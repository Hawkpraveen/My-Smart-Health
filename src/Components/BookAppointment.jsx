import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; 
import { useParams, useNavigate } from "react-router-dom";

const availableSlots = [
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "12:00 PM",
  "12:30 PM",
  "1:00 PM",
  "1:30 PM",
];

const BookAppointment = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);

  const handleBookAppointment = () => {
    navigate(`/patient-details/${id}`, {
      state: { date: selectedDate, time: selectedSlot },
    });
    //console.log('clicked');
    
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Book Appointment</h1>

      <div className="mb-4">
        <label className="block mb-2">Select Date:</label>
        <Calendar
          onChange={setSelectedDate}
          value={selectedDate}
          className="border rounded-md p-2 w-full"
          minDate={new Date()} 
        />
      </div>

      <h2 className="text-lg font-semibold mb-2">Available Time Slots</h2>
      <div className="grid grid-cols-2 gap-4">
        {availableSlots.map((slot) => (
          <div
            key={slot}
            className={`border p-4 rounded-lg text-center cursor-pointer 
              ${selectedSlot === slot ? "bg-blue-500 text-white" : "bg-white"}`}
            onClick={() => setSelectedSlot(slot)}
          >
            {slot}
          </div>
        ))}
      </div>

      <button
        onClick={handleBookAppointment}
        className="mt-4 bg-blue-800 text-white py-2 px-4 rounded-3xl hover:bg-blue-600 transition duration-200"
        disabled={!selectedDate || !selectedSlot}
      >
        Continue to Patient Details
      </button>
    </div>
  );
};

export default BookAppointment;
