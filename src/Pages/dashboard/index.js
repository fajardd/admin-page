import React from "react";
import bgDashboard from "../../assets/Images/bgPetcare.png";

const Dashboard = () => {
  return (
    <div className="flex justify-center items-center">
      <div>
        <img
          src={bgDashboard}
          alt="imageDashboard"
          className="w-auto h-[300px]"
        />
        <p className="text-center text-[24px] font-medium">
          Welcome To Dashboard
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
