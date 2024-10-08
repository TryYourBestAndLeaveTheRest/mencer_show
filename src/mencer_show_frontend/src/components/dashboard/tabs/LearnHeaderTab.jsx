import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../ui/tabs";
import { Button } from "../../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../../ui/avatar";

const LearnHeaderTab = ({ course }) => {
  if (!course) return null;

  return (
    <>
      <div className="flex justify-between gap-4 mt-8">
        <div>
          <Tabs defaultValue="notes" className="w-[400px] pb-10">
            <TabsList>
              <TabsTrigger value="notes">Notes</TabsTrigger>
              <TabsTrigger value="resources">Resources</TabsTrigger>
              <TabsTrigger value="discussion">Discussion</TabsTrigger>
              <TabsTrigger value="quiz">Quiz</TabsTrigger>
            </TabsList>

            <div>
              <TabsContent value="notes">
                <p className="text-sm font-normal text-[#434343]">{course.content.notes}</p>
              </TabsContent>

              <TabsContent value="resources">
                {course.content.resources.map((resource) => (
                  <div key={resource.title}>
                    <h2>{resource.title}</h2>
                  </div>
                ))}
              </TabsContent>

              <TabsContent value="discussion">
                {course.content.discussion.map((discussion) => (
                  <div key={discussion.user}>
                    <p>{discussion.comment}</p>
                    <p>{discussion.user}</p>
                  </div>
                ))}
              </TabsContent>

              <TabsContent value="quiz">
                {course.content.quiz.map((quiz) => (
                  <div key={quiz.question}>
                    <p>{quiz.question}</p>
                    <ul>
                      {quiz.options.map((option) => (
                        <li key={option}>{option}</li>
                      ))}
                    </ul>
                    <p>{quiz.answer}</p>
                  </div>
                ))}
              </TabsContent>
            </div>
          </Tabs>
        </div>
        <div className="flex flex-col gap-4">
          <Button
            variant="outline"
            style={{ color: "#FFDC16", border: "1px solid #FFDC16" }}
          >
            Next Chapter
          </Button>
          <div className="bg-[#fff6f6] rounded-[9px] flex-col justify-center gap-4 px-6 py-4 flex">
            <h6 className="text-base font-semibold font-['Familjen Grotesk']">About Instructor</h6>
            <div className="inline-flex gap-3 items-center">
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  className="rounded-full"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="inline-flex flex-col gap-1">
                <h4 className="text-xs font-semibold">{course.tutor.name}</h4>
                <p className="text-[#707070] text-xs font-normal font-['Familjen Grotesk']">{course.tutor.company}</p>
              </div>
            </div>
            <div className="text-[#353535] text-xs font-normal font-['Poppins']">{course.tutor.about}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LearnHeaderTab;
