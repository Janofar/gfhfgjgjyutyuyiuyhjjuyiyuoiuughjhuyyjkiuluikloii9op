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
    <main className="px-5">
      <div className="flex justify-between items-baseline my-[2.12rem]">
        <span className="font-bold text-left w-[8.5rem] h-[2.5rem] text-[2.25rem]">Patients</span>
        <div className="flex items-center justify-between gap-2">
          <select
            id="options"
            className="mt-1 block rounded-[2.19rem] text-[1rem] text-[#283342] border border-gray-300 w-[10rem] h-[2.5rem] bg-white text-center p-2 font-medium"
          >
            <option value="">All patients</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
          <button
            onClick={toggleModal}
            className="bg-black text-white rounded-[2.19rem] px-4 py-2 w-[10rem] h-[2.5rem] flex items-center hover:bg-gray-800 transition duration-200"
          >
            <PlusIcon className="h-5 w-5 mr-2 font-medium" />
            New Patient
          </button>
        </div>
      </div>

      {isModalOpen && <PatientDetailForm toggleModal={toggleModal} patientData={patientData}  setPatientData={setPatientData}/>}

      {/* Stats Cards */}
      <div className="flex space-x-6 ">
        <div className="flex-1 w-[23rem] h-[12.19rem] p-6 bg-[#FCEBD0] rounded-lg flex justify-between  items-center space-x-4">
          <div className="flex flex-col">
              <div>
                <p className="text-start font-bold text-[4.625rem] text-[#FFB800]">1384</p>
              </div>

            <div>
              <p className="text-start text-[1.625rem]">patients</p>
              <p className="text-start text-gray-500 text-[0.87rem]">added in last month</p>
            </div>
          </div>

          <img
            src={strawberryIcon}
            alt="Strawberry Icon"
            className="w-[7.8rem] h-[10.35rem] -mt-12"
          />
        </div>
        <div className="flex-1 w-[23rem] h-[12.19rem] p-6 bg-[#FCD8D8] rounded-lg flex justify-between items-center">
          <div className="flex flex-col">
            <div className="font-bold text-pink-600 text-start">
              <p className="text-start font-bold text-[4.625rem] text-[#FF5E48]">46</p>
              
            </div>
            <div>
              <p className="text-start text-[1.625rem]">wishlinks</p>
              <p className="text-start text-gray-500 text-[0.87rem]">
                sent in last month
              </p>
            </div>
          </div>

          <img
            src={blueBerryIcon}
            alt="Blueberry Icon"
            className="w-[6.7rem] h-[9.85rem] -mt-12"
          />
        </div>

        <div className="flex-1 w-[23rem] h-[12.19rem] p-6 bg-[#6AC7B5] rounded-lg flex items-center justify-between">
          <div>
            <p className="text-[#FFFFFF] text-[1.62rem] font-bold text-left">Learn how to send Wishlinks</p>
            <button className="flex items-center space-x-2 text-black bg-white px-4 py-2 rounded-full border mt-5">
              <PlayIcon className="w-5 h-5" />
              <span className="text-[1rem] text-[#171717]">Play Video</span>
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
