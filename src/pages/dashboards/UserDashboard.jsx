import React from "react";

import DashboardNavbar from "../../components/dashboard/dashboard-navbar.component";
import SideNavbar from "../../components/dashboard/sidenavbar.component";
import DashboardFooter from "../../components/dashboard/dashboard-footer.component";

const UserDashboard = () => {
  return (
    <>
      <SideNavbar />
      <div className="relative md:ml-64 bg-gray-200">
        <DashboardNavbar />
        {/* Header */}
        <div className="relative bg-primary-mid md:pt-32 pb-32 pt-12">
          <div className="px-4 md:px-10 mx-auto w-full">
            <div className="flex flex-col">
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                {/* This is where cards would come in i guess */}
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                {/* This is where cards would come in i guess */}
              </div>
            </div>
          </div>
        </div>
        <DashboardFooter />
      </div>
    </>
  );
};

export default UserDashboard;