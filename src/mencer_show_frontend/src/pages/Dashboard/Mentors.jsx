import React from "react";
import MentorsHeaderTab from "../../components/dashboard/tabs/MentorsHeaderTab";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";
import MentorsComp from "../../components/dashboard/mentors/MentorsComp";
import { mentors } from "../../lib/dashboardData";
import DashboardSidebar from "../../components/dashboard/layouts/DashboardSidebar";
import DashboardLayout from "../../components/dashboard/layouts/DashboardLayout";

const TAB_CATEGORIES = [
  { value: "all", label: "All" },
  { value: "toprated", label: "Top Rated" },
  { value: "solidity", label: "Solidity" },
  { value: "solana", label: "Solana" },
  { value: "blockchain", label: "Blockchain" },
  { value: "python", label: "Python" },
  { value: "web3", label: "Web3" },
  { value: "design", label: "Design" },
  { value: "talent", label: "Talent Acquisition" },
];

const Mentors = () => {
  return (
    <DashboardSidebar>
      <div className="flex-1 mt-20 px-4 md:px-8 lg:ml-52">
        {/* Header Tab */}
        <MentorsHeaderTab currentTab="mentors" />

        {/* Tabs Section */}
        <Tabs defaultValue="all" className="w-full pb-10">
          <TabsList className="flex overflow-x-auto">
            {TAB_CATEGORIES.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="whitespace-nowrap text-sm md:text-base"
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Content Section */}
          <div className="mt-6">
            {TAB_CATEGORIES.map((tab) => (
              <TabsContent key={tab.value} value={tab.value}>
                <MentorsComp value={tab.value} mentors={mentors} />
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </DashboardSidebar>
  );
};

export default Mentors;

Mentors.getLayout = function getLayout(page) {
  return <DashboardLayout page={"mentors"}>{page}</DashboardLayout>;
};
