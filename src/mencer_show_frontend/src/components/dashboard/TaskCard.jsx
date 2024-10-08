import { Card, CardContent } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const TaskCard = ({ tasksData }) => {
  return (
    <Card
      className={`py-4 rounded-lg shadow-md flex justify-between items-center w-full ${
        tasksData.priority === "low" ? "bg-black" : "bg-[#f9faf5]"
      }`}
    >
      <CardContent>
        <div className="flex flex-col gap-4">
          <div className="flex">
            <h3 className={` text-lg font-medium font-['Familjen Grotesk'] ${
              tasksData.priority ==="low"
              ? "text-white" : "text-black"
            }`}>
              {tasksData.title}
            </h3>
            <div
              className={`text-[#707070] text-[10px] font-normal py-1 px-4 capitalize h-fit w-fit rounded-[100px] ${
                tasksData.priority === "low"
                  ? "bg-gray-300 text-black"
                  : "bg-[#fcf1e4] text-[#be6700]"
              }`}
            >
              {tasksData.priority}
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div
              className={`text-xs font-medium py-1 px-2 h-fit w-fit rounded-sm ${
                tasksData.tag === "Ethereum"
                  ? "bg-[#fdfcd9] text-[#474500] "
                  : "bg-[#d8e4f8] text-[#002564]"
              }`}
            >
              {tasksData.tag}
            </div>
            <div className="flex items-center gap-2">
            <p className={`text-[10px] font-medium mt-2 ${
              tasksData.priority === "low" ? "text-white" : "text-[#707070]"
            }`}>{tasksData.user}</p>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TaskCard;
