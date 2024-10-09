import React from 'react'
import { Progress } from '../../ui/progress'
// import { Progress } from "../../../components/ui/progress"


const Card = ({ position, title, text, icon, progress }) => {
  return (
    <div className={`flex ${ position === "start" ? 'justify-start' : 'justify-end' } w-full`}>
      <div className={`max-w-xs rounded-[6px] px-6 py-4 w-full h-20 flex ${ position === "start" ? 'flex-row gap-2' : 'flex-row-reverse gap-6' } items-center justify-between bg-white`}>
        <div className='flex flex-col'>
          <h1 className='font-[500] text-black'>
            { title }
          </h1>
          {
            text && text !== "" && (
              <p className='!text-xs text-[#6D6D6D] '>
                { text }
              </p>    
            )
          }
          {
            progress && (
              <Progress
              value={60} 
              barColor="bg-[#FFA902]"
              className="w-full mt-4 !h-[8px]" 
              />
            )
          }
        </div>

        <div className="">
          <img
          src={icon}
          width={40}
          height={40}
          alt='icon'
          // quality={100}
          />
        </div>
      </div>  
    </div>
  )
}

export default Card
