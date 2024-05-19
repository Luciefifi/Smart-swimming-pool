/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
// /* eslint-disable no-unused-vars */
// import React, { useState, useEffect } from 'react';

// const images = [
//   '/assets/image1.jpg',
//   '/assets/image2.jpg',
//   '/assets/image3.jpg', // Add your image paths here
// ];

// function LoginPage() {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 3000); // Change image every 3 seconds

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="h-screen bg-cover bg-center" style={{ backgroundImage: `url('/assets/pexels-enginakyurt-2531180.jpg')` }}>
//       <div className=" flex flex-row  ">
//         <div className=" w-[50%]">
        

//         </div>
//         <div className=" w-[50%]">
        
//           <img src={images[currentImageIndex]} alt="Changing visual" />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default LoginPage;


import React from 'react';

export default function LoginPage() {
  return (
  
         <div className="h-screen bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: `url('/assets/pexels-pixabay-261411.jpg')` }}>
     
      <div className="w-full p-8 md:w-1/2">
          <h2 className="text-2xl font-semibold text-black text-center">Welcome back</h2>
          <div className="mt-4">
            <form action="">
              <div className="mb-4">
                <label htmlFor="email" className="block text-black">
                  Email
                </label>
                <input
                  type="text"
                  placeholder="email@gmail.com"
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-black">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>
     
              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
                >
                  Sign in
                </button>
              </div>
            </form>
           
          </div>
        </div>
   
    </div>
  );
}
