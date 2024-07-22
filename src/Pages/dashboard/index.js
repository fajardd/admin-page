import React from "react";
import bgDashboard from "../../assets/Images/bg-dashboard.png";

const Dashboard = () => {
  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="p-6">
        <div className="flex justify-center">
          <img
            src={bgDashboard}
            alt="imageDashboard"
            className="w-auto h-[300px]"
          />
        </div>

        <p className="text-center font-semibold text-[18px] mt-6">
          Welcome to the medical record application
        </p>
        <p>
          Application for recording documents containing information related to
          customer service
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
