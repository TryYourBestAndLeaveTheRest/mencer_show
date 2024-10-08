import React from 'react'
import MentorsHeaderTab from '../../components/dashboard/tabs/MentorsHeaderTab';
import DashboardSidebar from "../../components/dashboard/layouts/DashboardSidebar";
import DashboardLayout from '../../components/dashboard/layouts/DashboardLayout';

const Trending = () => {
  return (
    <DashboardSidebar>
    <div className="flex-1 ml-52 mt-20">
      <MentorsHeaderTab
        currentTab="trending"
      />
      <h2>Trending</h2>
      </div>
      </DashboardSidebar>
  )
}

export default Trending

Trending.getLayout = function getLayout(page) {
    return <DashboardLayout page={"mentors"}>{page}</DashboardLayout>;
  };
