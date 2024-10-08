import { Calendar } from "lucide-react";
import { Clock } from "lucide-react";
import { Ellipsis } from "lucide-react";


const NotificationCard = ({ notificationsData }) => {
  return (
    <div className="bg-[#f9faf5]  p-6 rounded-lg flex flex-col gap-3">
      <div className="flex justify-between">
        <div className="inline-flex items-center gap-1">
          <h4 className="text-xs font-semibold font-['Familjen Grotesk']">{notificationsData.title}</h4>
          <div className="w-[5px] h-[5px] bg-[#00ff37] rounded-full" />
        </div>
        <Ellipsis className="w-4 h-4" />
      </div>
      <div className="text-[#707070] text-[10px] font-normal">
        {notificationsData.subtitle} | Time: {notificationsData.time}
      </div>
      <div className="flex gap-8">
        <div className="inline-flex items-center gap-3">
          <Calendar className="w-3 h-3 text-[#707070]" />
          <p className="text-black text-[10px] font-normal">{notificationsData.date}</p>
        </div>
        <div className="inline-flex items-center gap-3">
          <Clock className="w-3 h-3 text-[#707070]"/>
          <p className="text-black text-[10px] font-normal">{notificationsData.timeRange}</p>
        </div>
      </div>
    </div>
  );
};

export default NotificationCard;
