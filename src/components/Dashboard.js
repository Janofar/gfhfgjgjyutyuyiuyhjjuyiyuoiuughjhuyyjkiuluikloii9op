import React, { useEffect, useState } from "react";
import { PlusIcon } from "@heroicons/react/solid";
import { PlayIcon } from "@heroicons/react/outline";
import strawberryIcon from "../assets/img/Layer_1.png";
import blueBerryIcon from "../assets/img/Group 2370.png";
import PatientDetailForm from "../components/PatientDetailForm";
import { Patientlist } from "./common/Patientlist";

const defaultPatientData = [
  {
    name : "Carl Driffth",
    phone: "9847474738",
    email: "carl@gmail.com",
    gender : "Male",
    age : 23,
    isResponsibleParty: false,
  },
  {
    name : "Evelyn Leger",
    phone: "3842784782",
    email: "evenly@gmail.com",
    gender : "Male",
    age : 23,
    isResponsibleParty: false,
  },
  {
    name :"Michael Hoover",
    phone: "8483738383",
    email: "micheal@gmail.com",
    gender : "Male",
    age : 23,
    isResponsibleParty: false,
  }
];

function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [patientData,setPatientData] = useState([]);

  useEffect(()=>{
    const storedData = JSON.parse(localStorage.getItem("patientData"));

    if (storedData) {
      setPatientData(storedData);
    }else{
      setPatientData(defaultPatientData);
    }
    
  },[]);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
 
  return (
    <main className="p-6 space-y-6">
      <div className="flex justify-between items-center p-4">
        <span className="text-lg font-semibold">Patients</span>
        <div className="flex items-center space-x-2">
          <select
            id="options"
            className="mt-1 block rounded-lg border border-gray-300 bg-white p-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
          >
            <option value="">All patients</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
          <button
            onClick={toggleModal}
            className="bg-black text-white rounded-lg px-4 py-2 flex items-center hover:bg-gray-800 transition duration-200"
          >
            <PlusIcon className="h-5 w-5 mr-2" />
            New Patient
          </button>
        </div>
      </div>

      {isModalOpen && <PatientDetailForm toggleModal={toggleModal} patientData={patientData}  setPatientData={setPatientData}/>}

      {/* Stats Cards */}
      <div className="flex space-x-6">
        <div className="flex-1 p-6 bg-yellow-100 rounded-lg flex justify-between  items-center space-x-4">
          <div className="flex flex-col">
            <div className="text-4xl font-bold text-yellow-600 text-start">
              1384
            </div>
            <div>
              <p className="text-lg  text-start font-semibold">patients</p>
              <p className="text-sm text-gray-500">added in last month</p>
            </div>
          </div>

          <img
            src={strawberryIcon}
            alt="Strawberry Icon"
            className="w-12 h-24"
          />
        </div>
        <div className="flex-1 p-6 bg-pink-100 rounded-lg flex justify-between items-center">
          <div className="flex flex-col">
            <div className="text-4xl font-bold text-pink-600 text-start">
              46
            </div>
            <div>
              <p className="text-lg font-semibold text-start">wishlinks</p>
              <p className="text-sm text-gray-500 text-start">
                sent in last month
              </p>
            </div>
          </div>

          <img
            src={blueBerryIcon}
            alt="Blueberry Icon"
            className="w-12 h-100"
          />
        </div>

        <div className="flex-1 p-6 bg-teal-200 rounded-lg flex items-center justify-between">
          <div>
            <p className="text-lg font-semibold">Learn how to send Wishlinks</p>
            <button className="flex items-center space-x-2 text-black bg-white px-4 py-2 rounded-full border mt-5">
              <PlayIcon className="w-5 h-5" />
              <span>Play Video</span>
            </button>
          </div>
        </div>
      </div>

      {/* Patient List */}
      <Patientlist patientData={patientData}/>
    </main>
  );
}

export default Dashboard;
