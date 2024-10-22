import React, { useState } from "react";
import { Link } from "react-router-dom";

const doctors = [
  {
    id: 1,
    name: "Dr. Vijya Kumar",
    specialization: "Cardiologist",
    experience: "10 years",
    fees: " ₹ 400",
    availableTime: "10:00 AM - 2:00 PM",
    img: "doc-img.jpg",
  },
  {
    id: 2,
    name: "Dr. Swetha",
    specialization: "Dermatologist",
    experience: "8 years",
    fees: "₹ 400",
    availableTime: "1:00 PM - 5:00 PM",
    img: "doc-img.jpg",
  },
  {
    id: 3,
    name: "Dr. Hardin",
    specialization: "Pediatrician",
    experience: "12 years",
    fees: "₹ 500",
    availableTime: "9:00 AM - 1:00 PM",
    img: "doc-img.jpg",
  },
];

const OnlineConsultation = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredDoctors = doctors.filter((doctor) =>
    doctor.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-2xl mx-auto p-6 pb-5">
      <h1 className="text-2xl font-bold mb-4">Online Consultation</h1>
      <input
        type="text"
        placeholder="Search doctors..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-2 mb-4 border rounded-md"
      />
      <div className="space-y-4">
        {filteredDoctors.map((doctor) => (
          <div
            key={doctor.id}
            className="bg-white shadow rounded-lg p-4 flex items-start"
          >
            <img
              src={doctor.img}
              alt={doctor.name}
              className="w-20 h-20 rounded-full mr-4 object-cover"
            />
            <div className="flex-grow">
              <h2 className="text-xl font-semibold">{doctor.name}</h2>
              <p className="text-gray-700">{doctor.specialization}</p>
              <p className="text-blue-700 font-medium"> {doctor.experience}</p>
              <p className="text-gray-400">Fees: {doctor.fees}</p>
              <p className="text-gray-400">
                Available Time: {doctor.availableTime}
              </p>
              <div className="mt-4 flex justify-between items-center">
                <Link
                  to={`/doctor/${doctor.id}`}
                  className="text-blue-500 underline"
                >
                  View Profile
                </Link>
                <button className="bg-blue-800 text-white px-1 py-1 md:py-2 md:px-4 rounded-3xl hover:bg-blue-600 transition duration-200">
                  Book Appointment
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OnlineConsultation;
