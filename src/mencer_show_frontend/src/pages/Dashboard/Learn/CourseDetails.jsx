import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { courses } from "../../../lib/dashboardData";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "../../../components/ui/breadcrumb";
import LearnHeaderTab from "../../../components/dashboard/tabs/LearnHeaderTab";
import { Button } from "../../../components/ui/button";
import DashboardLayout from "../../../components/dashboard/layouts/DashboardLayout";
import DashboardSidebar from "../../../components/dashboard/layouts/DashboardSidebar";
import { Progress } from "../../../components/ui/progress";

const LearnCourseDetails = () => {
  const location = useLocation();
  const [course, setCourse] = useState(null);

  const courseId = location.pathname.split("/").pop();
//   const courseId = useParams()
  console.log(courseId)

  useEffect(() => {
    if (!courseId) return;

    const courseData = courses.find((c) => c.id === Number(courseId));
    if (courseData) {
      setCourse(courseData);
    }
  }, [courseId]);

  if (!course) return <div>Loading...</div>;

  return (
    <DashboardSidebar>
      <div className="flex-1 mt-20 ml-52">
        <div className="flex gap-3">
          <div className="w-2/3">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink to="/">Courses</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink to="/dashboard/learn">Web3</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>{course.title}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

            <div className="mt-4">
              <h3 className="text-[20px] font-bold md:text-left md:text-[40px] ">{course.title}</h3>
              <p className="py-3 text-[#707070] text-xs font-medium">
                {course.tutor.name}, {course.tutor.title} at {course.tutor.company}
              </p>
              <div className="aspect-w-16 aspect-h-9">
                <video
                  controls
                  poster="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg"
                  src={course.videoUrl}
                  className="w-full h-full rounded-lg"
                ></video>
              </div>

              <LearnHeaderTab course={course} />
            </div>
          </div>

          <div className="w-1/3">
            <Button variant="outline" style={{ color: "#FFDC16", border: "1px solid #FFDC16" }}>
              Back
            </Button>

            <h1 className="text-2xl md:text-3xl lg:text-[35px] font-bold font-['Familjen Grotesk']">{course.title}</h1>
            <Progress value={33} />
          </div>
        </div>
      </div>
    </DashboardSidebar>
  );
};

export default  LearnCourseDetails;
