import { useState } from 'react'
import DashboardNav from './DashboardNav';


const DashboardLayout = ({ children, page }) => {
  const [toggleSideBar, setToggleSideBar] = useState(false);

  return (
    <>
      <div className="relative">
        <DashboardNav
          // page={page}  
          toggleSideBar={toggleSideBar}
          setToggleSideBar={setToggleSideBar}
         />
        {children}
      </div>
    </>
  );
};

export default DashboardLayout;
