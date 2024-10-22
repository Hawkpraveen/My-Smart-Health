import React from "react";
import { BsWatch } from "react-icons/bs";
import { FaBell, FaFile, FaHome, FaUser, FaUserCircle } from "react-icons/fa";
import { FiFile } from "react-icons/fi";

import { Link } from "react-router-dom";

const HomePage = () => {
  const services = ["Find a Doctor", "Book Labset", "Find a Device"];
  return (
    <div className="flex overflow-y-auto h-screen">
      <div className="hidden md:flex flex-col w-[200px] bg-gray-200 p-4 h-screen">
        <h1 className="text-lg text-center">My smart Health </h1>
        <Link to="/" className="p-2 flex flex-wrap">
          <FaHome className="mt-1" /> <span className="ml-2 mb-0">Home</span>
        </Link>
        <Link to="/record" className="p-2 flex flex-wrap">
          <FiFile className="mt-1" /> <span className="ml-2 mb-0">Record</span>
        </Link>
        <Link to="/device" className="p-2 flex flex-wrap">
          <BsWatch className="mt-1" /> <span className="ml-2 mb-0">Device</span>
        </Link>
        <Link to="/profile" className="p-2 flex flex-wrap">
          <FaUserCircle className="mt-1" />{" "}
          <span className="ml-2 mb-0">Profile</span>
        </Link>
      </div>

      <div className="flex-1 p-4 overflow-y-auto pb-10">
        <header className="flex justify-evenly items-center mb-0 text-white bg-blue-700 md:w-1/2 mx-auto h-40 rounded-b-[60px]">
          <h2 className="text-xl font-semibold">hey Username !</h2>
          <div className="flex items-center">
            <FaUserCircle
              className="text-2xl mr-4 cursor-pointer hover:scale-105"
              onClick={() => {
                alert("Navigate to profile page");
              }}
            />
            <FaBell
              className="text-2xl cursor-pointer hover:scale-105"
              onClick={() => {
                alert("Navigate to notification page");
              }}
            />
          </div>
        </header>

        <hr className="border-neutral-200 border-2 max-w-6xl mx-auto mb-4" />
        <div className="bg-white shadow-md rounded-lg p-4 mb-4 flex w-full mt-3 ">
          <div className="flex flex-col md:w-3/4 w-1/2 justify-center text-center">
            <h3 className="text-xl font-semibold text-ellipsis ">
              Individual Plan
            </h3>
            <p className="text-sm py-2">Book your health checkup</p>
            <div>
              <button className="mt-2 text-blue-600">
                Know the benefits{" >"}
              </button>
            </div>
          </div>
          <div className="flex justify-center md:w-1/4 w-1/2 ">
            <img
              src="data:image/jpeg;base64,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"
              alt="Individual Plan"
              className="md:w-1/2 w-full h-full p-2 rounded-xl"
            />
          </div>
        </div>
        <hr className="border-neutral-200 border-2 max-w-6xl mx-auto mb-4" />
        <h1 className="text-lg font-semibold mb-2 mt-2">Our Services</h1>
        <div className="flex flex-row overflow-y-auto md:w-full gap-4 mb-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center mx-auto "
            >
              <img
                src="data:image/png;base64,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"
                alt="Service"
                className="w-full h-full h mb-2"
              />
              <p>{service}</p>
            </div>
          ))}
        </div>

        <hr className="border-neutral-200 border-2 max-w-6xl mx-auto mb-4" />
        <div className="bg-white shadow-md rounded-lg p-4 mb-4 flex">
          <div className="flex-1">
            <h3 className="text-xl font-semibold ">
              Book annual health checkups
            </h3>
            <ul className="grid grid-cols-2 mt-2">
              <li className="p-1">Heart </li>
              <li className="p-1">Kideny</li>
              <li className="p-1">Skin</li>
              <li className="p-1">Full Body</li>
            </ul>
          </div>
          <div className="md:w-1/5 w-1/2">
            <img
              src="data:image/jpeg;base64,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"
              alt="Info"
              className="w-44 h-44 rounded-lg"
            />
          </div>
        </div>
        <hr className="border-neutral-200 border-2 max-w-6xl mx-auto mb-4" />
        <h1 className="text-lg font-semibold p-2">Quick Access</h1>
        <div className="md:grid flex flex-row md:grid-cols-3 gap-4 mb-4">
          {[
            { name: "My Doctors", path: "/my-doctors" },
            { name: "Create Appointment", path: "/create-appointment" },
            { name: "My Report", path: "/my-report" },
          ].map((item, index) => (
            <Link
              to={item.path}
              key={index}
              className="bg-blue-100 w-32 h-20 text-blue-900 font-medium text-center text-ellipsis rounded-lg p-4 flex items-center justify-center hover:bg-blue-200"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>

      <div className="md:hidden fixed bottom-0 left-0 right-0 flex justify-around bg-gray-200 p-3">
        <Link to="/" className="text-center">
          <FaHome />
        </Link>
        <Link to="/record" className="text-center">
          <FaFile />
        </Link>
        <Link to="/device" className="text-center">
          <BsWatch />
        </Link>
        <Link to="/profile" className="text-center">
          <FaUser />
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
