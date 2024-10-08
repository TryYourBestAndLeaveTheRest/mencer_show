import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "../ui/table";
  import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
  import { Paperclip, Calendar } from "lucide-react";
  import { mentorsData } from "../../lib/dashboardData";

  const MentorCard = () => {
    return (
      <div className="w-full overflow-x-auto">
        <Table className="min-w-[600px] md:min-w-[700px] lg:min-w-full">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[120px] text-left">Name</TableHead>
              <TableHead className="text-left">Industry</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {mentorsData.map((mentor, index) => {
              return (
                <TableRow key={index} className="hover:bg-gray-50 transition-colors">
                  <TableCell className="flex items-center gap-2 py-4">
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" className="w-7 h-7 rounded-full" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <p className="text-[#010101] text-sm font-bold truncate max-w-[100px] md:max-w-none">
                      {mentor.name}
                    </p>
                  </TableCell>
                  <TableCell className="py-4">
                    <span
                      className={`font-['Familjen Grotesk'] rounded h-8 py-[7px] px-4 text-xs font-medium ${
                        mentor.industry === "Blockchain"
                          ? "bg-[#d8e4f8] text-[#002564]"
                          : "bg-[#fcf1e4] text-[#be6700]"
                      }`}
                    >
                      {mentor.industry}
                    </span>
                  </TableCell>
                  <TableCell className="text-right py-4">
                    <ul className="flex gap-2 justify-end text-[#707070]">
                      <li className="flex items-center gap-1">
                        <img src="/images/chat.svg" alt="chat icon" className="w-3.5 h-3.5" /> 4
                      </li>
                      <li className="flex items-center gap-1">
                        <Paperclip className="w-3.5 h-3.5" /> 16
                      </li>
                      <li className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" /> Sep
                      </li>
                    </ul>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    );
  };

  export default MentorCard;
