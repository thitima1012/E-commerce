import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
const Index = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
  <div className="bg-white bg-opacity-90 rounded-3xl shadow-2xl p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-3xl">
    <div className="flex flex-col items-center">
      <div className="relative">
        <img 
          src={user?.photoURL || "https://via.placeholder.com/150"} 
          alt="Profile" 
          className="w-32 h-32 rounded-full border-4 border-white transition-transform duration-300 hover:rotate-6"
        />
        <span className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></span>
      </div>
      <h3 className="mt-4 text-2xl font-bold text-gray-800">
        {user?.displayName || "Your Name"}
      </h3>
      <p className="mt-2 text-gray-600">ยินดีต้อนรับสู่โปรไฟล์ของคุณ</p>
      {/* <div className="mt-4 flex space-x-4">
        <a href="#" className="text-blue-600 transition transform hover:scale-110">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="#" className="text-pink-500 transition transform hover:scale-110">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="#" className="text-blue-400 transition transform hover:scale-110">
          <i className="fab fa-twitter"></i>
        </a>
      </div> */}
    </div>
  </div>
</div>



  );
};

export default Index;