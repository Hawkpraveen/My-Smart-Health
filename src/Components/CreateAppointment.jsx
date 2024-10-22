import React from "react";
import { Link } from "react-router-dom";

const CreateAppointment = () => {
  return (
    <div className="w-fit mx-auto p-10 bg-blue-50 mt-10 ">
      <h1 className="text-2xl font-bold mb-4 text-center">
        List of Appointments
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Link
          to="/online-consultation"
          className="bg-blue-100 p-6 rounded-lg shadow hover:bg-blue-200 transition duration-200"
        >
          <h2 className="text-xl font-semibold text-blue-900">
            Online Consultation
          </h2>
          <p className="mt-2 text-gray-600">
            Book your online appointment with doctors.
          </p>
        </Link>

        <Link
          to="/offline-consultation"
          className="bg-blue-100 p-6 rounded-lg shadow hover:bg-blue-200 transition duration-200"
        >
          <h2 className="text-xl font-semibold text-blue-900">
            Offline Consultation
          </h2>
          <p className="mt-2 text-gray-600">
            Schedule an offline visit with doctors.
          </p>
        </Link>
      </div>
    </div>
  );
};

export default CreateAppointment;
