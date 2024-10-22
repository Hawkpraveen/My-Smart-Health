import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const doctors = [
  {
    id: 1,
    name: "Dr. Vijya Kumar",
    specialization: "Cardiologist",
    experience: "10 years",
    fees: "$100",
    availableTime: "10:00 AM - 2:00 PM",
    img: "/public/doc-img.jpg",
    rating: 4.5,
    languages: ["English", "Hindi"],
    intro: "Dr. Vijya Kumar is a renowned cardiologist with extensive experience in treating heart diseases.",
    degree: "MBBS, MD (Cardiology)",
    reviews: [
      "Excellent doctor, very attentive!",
      "Helped me a lot with my heart condition.",
      "Would highly recommend to anyone."
    ]
  },
  {
    id: 2,
    name: "Dr. Swetha",
    specialization: "Dermatologist",
    experience: "8 years",
    fees: "$80",
    availableTime: "1:00 PM - 5:00 PM",
    img: "/public/doc-img.jpg",
    rating: 4.7,
    languages: ["English", "Tamil"],
    intro: "Dr. Swetha specializes in skin conditions and has a passion for helping her patients achieve healthy skin.",
    degree: "MBBS, MD (Dermatology)",
    reviews: [
      "Amazing results with my skin treatment!",
      "Very professional and knowledgeable.",
      "Fantastic experience overall."
    ]
  },
  {
    id: 3,
    name: "Dr. Hardin",
    specialization: "Pediatrician",
    experience: "12 years",
    fees: "$90",
    availableTime: "9:00 AM - 1:00 PM",
    img: "/public/doc-img.jpg",
    rating: 4.8,
    languages: ["English", "Spanish"],
    intro: "Dr. Hardin is dedicated to providing compassionate care for children of all ages.",
    degree: "MBBS, MD (Pediatrics)",
    reviews: [
      "Great with kids, very patient.",
      "Highly recommend for pediatric care.",
      "Knowledgeable and friendly."
    ]
  },
];

const DoctorProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate(); 
  const doctor = doctors.find((doc) => doc.id === parseInt(id));

  if (!doctor) {
    return <div>Doctor not found</div>;
  }

  const handleBookAppointment = () => {
    navigate(`/book-appointment/${doctor.id}`); 
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="flex flex-col items-center mb-6">
        <img
          src={doctor.img}
          alt={doctor.name}
          className="w-40 h-40 rounded-full object-cover mb-4"
        />
        <div className="flex justify-between w-full">
          <h1 className="text-2xl font-bold">{doctor.name}</h1>
          <span
            className={`text-lg font-semibold ${
              doctor.availableTime.includes("AM") ? "text-green-600" : "text-red-600"
            }`}
          >
            {doctor.availableTime.includes("AM") ? "Online" : "Offline"}
          </span>
        </div>
      </div>

      <p className="text-gray-700 mb-2">Specialization: {doctor.specialization}</p>
      <p className="text-gray-700 mb-2">Rating: {doctor.rating} ⭐</p>
      <p className="text-gray-700 mb-4">{doctor.intro}</p>

      <div className="border p-4 rounded-lg mb-4">
        <h2 className="font-bold mb-2">Specializations</h2>
        <ul className="list-disc ml-5">
          <li>Cardiology</li>
          <li>Heart Health</li>
          <li>Hypertension</li>
        </ul>
      </div>

      <div className="border p-4 rounded-lg mb-4">
        <h2 className="font-bold mb-2">Experience & Languages</h2>
        <p className="text-gray-700">Experience: {doctor.experience}</p>
        <p className="text-gray-700">Languages: {doctor.languages.join(", ")}</p>
      </div>

      <div className="flex justify-between mb-4">
        <button
          onClick={handleBookAppointment} 
          className="bg-blue-800 text-white py-2 px-4 rounded-3xl hover:bg-blue-600 transition duration-200"
        >
          Book Appointment
        </button>
        <p className="text-gray-700">Degree: {doctor.degree}</p>
      </div>

      <div className="border p-4 rounded-lg">
        <h2 className="font-bold mb-2">Reviews</h2>
        {doctor.reviews.map((review, index) => (
          <p key={index} className="text-gray-700 mb-1">- {review}</p>
        ))}
      </div>
    </div>
  );
};

export default DoctorProfile;
