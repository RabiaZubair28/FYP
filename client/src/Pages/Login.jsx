// import { useState } from 'react';
// import './app.css';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate hook for redirection

// function Login() {
//   const [isOpen, setIsOpen] = useState(true);
//   const [userID, setUserID] = useState('');
//   const [password, setPassword] = useState('');
//   const [message, setMessage] = useState('');
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitSuccess, setSubmitSuccess] = useState(null);

//   const navigate = useNavigate(); // Initialize navigate

//   // Handler for form submission
//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setIsSubmitting(true);

//     try {
//       // Make POST request to backend API
//       const response = await axios.post('http://localhost:3500/api/auth/login', { userID, password });

//       // Log the backend response for debugging
//       console.log(response.data);

//       if (response.data.success) {
//         setSubmitSuccess(true);
//         setMessage(`Logged in as ${response.data.role}`);
      
//         // if (response.data.role === 'Instructor') {
//         //   navigate('/instructor'); 
//         // } else if (response.data.role === 'Student') {
//         //   navigate('/student'); 
//         // } else if (response.data.role === 'HOD') {
//         //   navigate('/hod'); 
//         // }
//       } else {
//         setSubmitSuccess(false);
//         setMessage('Invalid credentials');
//       }
//     } catch (error) {
//       setSubmitSuccess(false);
//       setMessage('Error submitting form');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen relative">
//       {/* Background Blur Layer */}
//       <div className="absolute inset-0 backdrop-blur"></div>

//       {/* Modal Container */}
//       {isOpen && (
//         <div className="relative z-10 bg-white rounded-lg shadow-lg p-8 w-96 fade-in">
//           <button
//             className="cross-button"
//             onClick={() => setIsOpen(false)}
//           >
//             &times;
//           </button>
//           <div className="flex justify-center mb-4">
//             <img
//               src="https://liamcrest.com/assets/static/CONTACT%20US%20IMAGE-N1-01.png"
//               alt="Illustration of people communicating"
//               className="w-full h-auto"
//             />
//           </div>
//           <h2 className="text-2xl font-bold text-center text-blue-900 mb-4">Login</h2>
          
//           <form onSubmit={handleSubmit}>
//             <div className="mb-4">
//               <input
//                 type="text"
//                 placeholder="UserID"
//                 value={userID}
//                 onChange={(e) => setUserID(e.target.value)}
//                 className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 required
//               />
//             </div>
//             <div className="mb-4">
//               <input
//                 type="password"
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 required
//               />
//             </div>
//             <button
//               type="submit"
//               className="btn-talk"
//               disabled={isSubmitting}
//             >
//               {isSubmitting ? 'Submitting...' : 'Login'}
//             </button>
//           </form>

//           {submitSuccess === true && (
//             <p className="text-green-500 mt-4">{message}</p>
//           )}
//           {submitSuccess === false && (
//             <p className="text-red-500 mt-4">{message}</p>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }

// export default Login;
