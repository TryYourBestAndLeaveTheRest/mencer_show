import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/header";
import { courses } from "../../lib/data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";
import { Button } from "../../components/ui/button";

const CourseDetails = () => {
  const [course, setCourse] = useState(null);
  const courseId = location.pathname.split("/").pop();
  //   const courseId = useParams()
  console.log(courseId);

  useEffect(() => {
    if (!courseId) return;

    const courseData = courses.find((c) => c.id === Number(courseId));
    if (courseData) {
      setCourse(courseData);
    }
  }, [courseId]);

  if (!course) return <div>Loading...</div>;

  return (
    <>
      <Header />
      <div className="px-16">
        <img
          src="/images/single-course-banner.png"
          alt="mencer banner"
          className="w-full h-[300px] object-cover rounded-[16px]"
        />

        {/* Course Title */}
        <div className="py-8">
          <div className="flex justify-between">
            <h1 className="text-3xl md:text-[56px] font-bold mb-6">
              {course.title}
            </h1>
            <Button
              className=" text-black bg-[#FFDC16]"
              style={{ borderRadius: "20px" }}
            >
              Reward Points
            </Button>
          </div>
          <div>
            <div className="space-y-2">
              <h2 className="text-[28px] font-semibold">What You Will Learn</h2>
              <ul className="list-none space-y-2">
                {course.details.whatYouWillLearn.map((point, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <span className="text-green-500">✔️</span>
                    <p className="text-xl font-normal">{point}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="py-8 flex justify-between flex-col md:flex-row items-center space-y-6 md:space-y-0">
              <div className="md:w-2/3 space-y-4">
                <h2 className="text-4xl font-semibold">About The Course</h2>
                <p className="text-[#6D6D6D] w-[800px]">
                  {course.details.aboutTheCourse}
                </p>
              </div>
              <div className="md:w-1/3">
                <img
                  src="/images/single-course-img.png"
                  alt="students learning"
                  className="rounded-md"
                />
              </div>
            </div>
          </div>
          {/* Syllabus */}
          <div className="py-8">
            <h2 className="text-[28px] font-semibold mb-4">Syllabus</h2>
            {course.details.syllabus.map((item, index) => (
              <Accordion key={index} collapsible className="">
                <AccordionItem value="" className="flex flex-col gap-2">
                  <AccordionTrigger className="w-full text-left text-[28px] px-4 py-2 bg-gray-100 rounded-md shadow-sm font-medium">
                    {item}
                  </AccordionTrigger>
                  <AccordionContent className="w-full px-4 py-2 bg-gray-50 rounded-md shadow-sm">
                    {/* <p>Hello</p> */}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </div>

          {/* Call to action */}
          <div className="flex justify-center py-8">
            <Button className="bg-[#FFDC16] text-black py-6 px-6 rounded-lg hover:bg-yellow-600 text-base font-normal">
              Start Your Course
            </Button>
          </div>

          <div>
            <h1>FRequently Asked Question</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseDetails;
