import React from "react";
import { useLocation } from "react-router-dom";

const patientData = {
  vijay: {
    age: 30,
    gender: "Male",
    relationship: "Brother",
    dob: "1994-05-15",
    email: "vijay@example.com",
    condition: "Healthy",
  },
  surya: {
    age: 25,
    gender: "Male",
    relationship: "Friend",
    dob: "1999-03-10",
    email: "surya@example.com",
    condition: "Flu",
  },
  ranjith: {
    age: 28,
    gender: "Male",
    relationship: "Cousin",
    dob: "1996-08-20",
    email: "ranjith@example.com",
    condition: "Allergy",
  },
};

const PatientDetails = () => {
  const location = useLocation();
  const { date, time } = location.state || {};
  const [selectedPatient, setSelectedPatient] = React.useState("");
  const [bookingSuccess, setBookingSuccess] = React.useState(false);

  const handlePatientChange = (event) => {
    setSelectedPatient(event.target.value);
    setBookingSuccess(false);
  };

  const handleContinue = () => {
    if (selectedPatient) {
      setBookingSuccess(true);
    }
  };

  const patientInfo = patientData[selectedPatient];

  return (
    <div className="max-w-2xl mx-auto p-6 bg-blue-50 mt-10 rounded-xl ">
      <h1 className="text-2xl font-bold mb-4">Patient Details</h1>

      <div className="mb-4">
        <label className="block mb-2">Select Patient:</label>
        <select
          value={selectedPatient}
          onChange={handlePatientChange}
          className="border rounded-md p-2 w-full"
        >
          <option value="">Select a patient</option>
          <option value="vijay">Vijay</option>
          <option value="surya">Surya</option>
          <option value="ranjith">Ranjith</option>
        </select>
      </div>

      {patientInfo && (
        <div className="mt-6 p-4 border rounded-lg shadow-md bg-white">
          <h2 className="text-xl font-semibold mb-2">
            {selectedPatient.charAt(0).toUpperCase() + selectedPatient.slice(1)}
            's Details
          </h2>
          <p>
            <strong>Age:</strong> {patientInfo.age}
          </p>
          <p>
            <strong>Gender:</strong> {patientInfo.gender}
          </p>
          <p>
            <strong>Relationship:</strong> {patientInfo.relationship}
          </p>
          <p>
            <strong>DOB:</strong> {patientInfo.dob}
          </p>
          <p>
            <strong>Email:</strong> {patientInfo.email}
          </p>
          <p>
            <strong>Condition:</strong> {patientInfo.condition}
          </p>
          <p>
            <strong>Appointment Date:</strong>{" "}
            {date ? new Date(date).toLocaleDateString() : "N/A"}
          </p>
          <p>
            <strong>Time:</strong> {time || "N/A"}
          </p>
        </div>
      )}

      {selectedPatient && (
        <button
          onClick={handleContinue}
          className="mt-4 bg-blue-800 text-white py-2 px-4 rounded-3xl hover:bg-blue-600 transition duration-200"
        >
          Continue
        </button>
      )}

      {bookingSuccess && (
        <div className="mt-6 p-4 border rounded-lg bg-green-100 text-green-700">
          <h2 className="font-bold">Booking Successful!</h2>
          <p>
            {selectedPatient.charAt(0).toUpperCase() + selectedPatient.slice(1)}{" "}
            has an appointment with the doctor at {time} on{" "}
            {new Date(date).toLocaleDateString()}.
          </p>
        </div>
      )}
    </div>
  );
};

export default PatientDetails;
