import { useState, useEffect } from "react";
import {useParams} from 'react-router-dom';


const PersonalInfo = () => {

    const [details, setDetails] = useState("");

    const params= useParams();
    console.log(params)

    const getDetails = async () => {
        try{
            const response = await fetch(`${import.meta.env.VITE_APP_API_URL as string}/api/data/instructor/${params.id}`,{
              method: "GET",
    
            });
    
            if(response.ok){
              const data = await response.json()
              console.log(data)
              setDetails(data)
            }
        }catch(error){
        console.log(`services error: ${error}`)
        }
      }
    
      useEffect(()=>{
        getDetails();
      }, [])

      console.log(details);
    return (
        <div className="flex h-screen">
          {/* Main Content */}
          
          <main className="w-3/4 bg-blue-100 p-8">
           
            <div className="grid grid-cols-2 gap-6">
              {/* Fields */}
              <div className="space-y-4">
                
                <label className="block">
                  <span className="block text-sm font-medium text-gray-700">First Name</span>
                  <input
                    type="text"
                    value={details.firstName}
                    readOnly
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </label>
                <label className="block">
                  <span className="block text-sm font-medium text-gray-700">Last Name</span>
                  <input
                    type="text"
                    value={details.lastName}
                    readOnly
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </label>
                <label className="block">
                  <span className="block text-sm font-medium text-gray-700">Email</span>
                  <input
                    type="email"
                    value={details.email}
                    readOnly
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </label>
                <label className="block">
                  <span className="block text-sm font-medium text-gray-700">Gender</span>
                  <input
                    type="text"
                    value={details.gender}
                    readOnly
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </label>
                <label className="block">
                  <span className="block text-sm font-medium text-gray-700">District of Domicile</span>
                  <input
                    type="text"
                    value={details.districtOfDomicile}
                    readOnly
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </label>
              </div>
    
              {/* Second Column of Fields */}
              <div className="space-y-4">
                <label className="block">
                  <span className="block text-sm font-medium text-gray-700">CNIC Number</span>
                  <input
                    type="text"
                    value={details.cnicNumber}
                    readOnly
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </label>
                <label className="block">
                  <span className="block text-sm font-medium text-gray-700">Contact Number</span>
                  <input
                    type="text"
                    value={details.contactNumber}
                    readOnly
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </label>
                <label className="block">
                  <span className="block text-sm font-medium text-gray-700">Date of Birth</span>
                  <input
                    type="text"
                    value={details.dateOfBirth}
                    readOnly
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-5dateOfBirth
00 focus:border-blue-500"
                  />
                </label>
                <label className="block">
                  <span className="block text-sm font-medium text-gray-700">City</span>
                  <input
                    type="text"
                    value={details.city}
                    readOnly
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </label>
                
              </div>
            </div>
    
            {/* Bottom Row */}
            <div className="mt-6 grid grid-cols-2 gap-6">
              <label className="block">
                <span className="block text-sm font-medium text-gray-700">Office Number</span>
                <input
                  type="text"
                  value={details.officeNumber}
                    readOnly
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </label>
              <label className="block">
                <span className="block text-sm font-medium text-gray-700">Office Location</span>
                <input
                  type="text"
                  value={details.officeLocation}
                    readOnly
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </label>
            </div>
    
            {/* Buttons */}
            <div className="flex space-x-4 mt-6">
              <button className="px-4 py-2 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600">
                Edit
              </button>
              <button className="px-4 py-2 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600">
                Delete
              </button>
            </div>
          </main>
        </div>
      );
}
    
  
  const ResearchInfo = () => {

    const [researchPapers, setresearchPapers] = useState([]);

    const params= useParams();
    console.log(params)

    const getresearchPapers = async () => {
        try{
            const response = await fetch(`${import.meta.env.VITE_APP_API_URL as string}/api/data/research/${params.id}`,{
              method: "GET",
    
            });
    
            if(response.ok){
              const data = await response.json()
              console.log(data)
              setresearchPapers(data)
            }
        }catch(error){
        console.log(`services error: ${error}`)
        }
      }
    
      useEffect(()=>{
        getresearchPapers();
      }, [])

      console.log(researchPapers);

   return(
      <div className="px-8 py-0 bg-blue-100">
     
    
        {/* Research Articles */}
        <div className="space-y-6 h-screen">
          {/* Research Article 1 */}
          {researchPapers.map((research, index) => (
        <div key={research.paperId} className="bg-white p-6 rounded-md shadow-md mb-4">
          <div className="flex justify-between items-center">
            <div className="text-gray-800 font-medium">S.No: {index + 1}</div>
            <div className="text-gray-800 font-medium">Paper ID: {research.paperId}</div>
            <div className="text-lg font-semibold text-gray-900">{research.paperTitle}</div>
          </div>
          <div className="flex justify-between items-center mt-4">
            <p className="text-blue-600 underline">{research.ResearchGateLink}</p>
            <div className="flex space-x-4 mt-4">
              <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600">
                Download
              </button>
              <button className="px-4 py-2 bg-green-500 text-white font-semibold rounded hover:bg-green-600">
                Edit
              </button>
              <button className="px-4 py-2 bg-red-500 text-white font-semibold rounded hover:bg-red-600">
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    
    
        {/* Add New Research Article Button */}
        <div className="mt-8">
          <button className="px-6 py-3 bg-black text-white font-semibold rounded hover:bg-gray-800">
            Add New Research Article
          </button>
        </div>
      </div>
      </div>
    );
    
};
  
  const Courses = () => (
    <div>
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Courses</h3>
      {/* Courses fields go here */}
      <p>Courses-related data input fields...</p>
    </div>
  );

const Instructor = () => {

      const [selectedSection, setSelectedSection] = useState("personalInfo");
  
      const renderSection = () => {
        switch (selectedSection) {
          case "personalInfo":
            return <PersonalInfo />;
          case "researchInfo":
            return <ResearchInfo />;
          case "courses":
            return <Courses />;
          default:
            return <PersonalInfo />;
        }
    }
    
      return(

        <div className="flex">
        {/* Sidebar */}
        <aside className="w-1/4 bg-gray-100 p-5 border-r">
          <ul className="space-y-4">
            <li>
              <button
                onClick={() => setSelectedSection("personalInfo")}
                className={`w-full py-2 px-4 text-left ${
                  selectedSection === "personalInfo" ? "text-white bg-black" : "text-gray-700 bg-blue-100"
                } rounded hover:bg-gray-800`}
              >
                Personal Information
              </button>
            </li>
            <li>
              <button
                onClick={() => setSelectedSection("researchInfo")}
                className={`w-full py-2 px-4 text-left ${
                  selectedSection === "researchInfo" ? "text-white bg-black" : "text-gray-700 bg-blue-100"
                } rounded hover:bg-blue-200`}
              >
                Research Information
              </button>
            </li>
            <li>
              <button
                onClick={() => setSelectedSection("courses")}
                className={`w-full py-2 px-4 text-left ${
                  selectedSection === "courses" ? "text-white bg-black" : "text-gray-700 bg-blue-100"
                } rounded hover:bg-blue-200`}
              >
                Courses
              </button>
            </li>
          </ul>
        </aside>
  
        {/* Main Content */}
        <main className="w-3/4 bg-blue-100 p-8">
          
          {renderSection()}
  
        </main>
      </div>

  );
};

                




export default Instructor;
