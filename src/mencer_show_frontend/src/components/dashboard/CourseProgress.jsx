import React from "react";
import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts";
import { Card } from "../../components/ui/card";
import { ChartContainer } from "../../components/ui/chart";
import { courses } from "../../lib/dashboardData";
import { useNavigate } from "react-router-dom";

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--chart-2))",
  },
};

console.log(courses);

const CourseProgress = ({ coursesData }) => {
  const navigate = useNavigate();
  console.log(coursesData);

  const handleCardClick = () => {
    const courseId = coursesData.id;
    navigate(`/dashboard/learn/${courseId}`);
    console.log(courseId);
  };

  return (
    <Card className="bg-white p-4 rounded-lg shadow-md flex flex-col gap-4">
      <div className="flex gap-2">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <RadialBarChart
            data={coursesData}
            startAngle={0}
            endAngle={250}
            innerRadius={80}
            outerRadius={110}
          >
            <PolarGrid
              gridType="circle"
              radialLines={false}
              stroke="none"
              className="first:fill-muted last:fill-background"
              polarRadius={[86, 74]}
            />
            <RadialBar dataKey="visitors" background cornerRadius={10} />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-4xl font-bold"
                        >
                          {courses.progress}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Visitors
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </PolarRadiusAxis>
          </RadialBarChart>
        </ChartContainer>
        <div>
          <h4
            className={`text-xs font-normal font-['Familjen Grotesk'] ${
              coursesData.progress >= 80 ? "text-[#4cdb00]" : "text-[#ffa902]"
            }`}
          >
            {coursesData.title}
          </h4>
          <h3 className="text-black text-sm font-bold font-['Familjen Grotesk']">
            {coursesData.subtitle}
          </h3>
        </div>
      </div>

      <div className="text-[#707070] text-[10px] font-normal">
        <p className="">You marked {coursesData.mark}/5</p>
        <div className="flex justify-between items-center">
          <p>
            {coursesData.assignmentLeft === 0
              ? "All assignments are done"
              : coursesData.assignmentLeft + " Assignments left"}
          </p>
          <div
            className={`text-xs font-normal font-['Familjen Grotesk'] h-5 px-2.5 inline-flex items-center rounded-xl text-black cursor-pointer ${
              coursesData.status === "done"
                ? "hidden"
                : "block bg-[#ffdc16]"
            }`}
            onClick={handleCardClick}
          >
            {coursesData.status}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CourseProgress;
