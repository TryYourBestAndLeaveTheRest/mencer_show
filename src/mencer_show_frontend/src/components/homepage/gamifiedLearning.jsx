import React from 'react'
import Card from './ui/card'


const GamifiedLearning = () => {
  return (
    <section className="flex items-center w-full gap-[25px] mt-12 mb-20 flex-col-reverse min-[991px]:flex-row-reverse max-w-7xl mx-auto">
      <div className='bg-[#F5F5F5] max-w-full min-[991px]:max-w-[60%] h-[480px] rounded-[20px] w-full sm:px-[59px] px-5 py-4 sm:py-8 flex flex-col gap-7'>
        {/* main */}
        <div className='flex flex-col max-w-[525px] gap-2'>
          <h1 className={`text-[32px] font-semibold text-black`}>
            Learn From Top Leaders
          </h1>
          <p className={`text-[#6D6D6D] text-xs`}>
          Connect with leading professionals in your field and tap from their wealth of knowledge. It’s just as Albert Einstein says, “The only source of knowledge is experience.”
          </p>
        </div>

        <div className=''>
          <img
          src="/images/homepage/media_growth.jpeg"
          width={620}
          height={100}
          alt='media growth'
          // quality={100}
          className='rounded-[12px] object-cover !h-[290px] !w-full'
          />
        </div>
      </div>
      
      <div className='bg-[#F5F5F5] max-w-full min-[991px]:max-w-[40%] h-[480px] rounded-[20px] w-full overflow-hidden'>
        {/* main */}
        <div className={`mt-12 font-semibold flex flex-col space-y-1 w-fit ml-[40px]`}>
          <h1 className='text-[32px] text-black'>
            Gamified Learning
          </h1>
          <p className={`text-[#6D6D6D] text-xs font-normal`}>
            Turning lessons into games makes every achievement a win.
          </p>
        </div>

        <div className='min-[991px]:ml-[40px] mt-[46px] h-full relative space-y-4 mx-auto max-w-xl min-[991px]:mr-[50px]'>
          <Card
          key={1}
          position={"start"}
          title={"10 Days Streak"}
          text={"You are Absolutely Crushing It"}
          icon={"/images/homepage/trophy1.png"}
          />
          <Card
          key={1}
          position={"reverse"}
          title={"Get More Rewards"}
          text={"Unlock new lessons and Earn More Xp"}
          icon={"/images/homepage/star.png"}
          />
          <Card
          key={1}
          position={"start"}
          title={"Get a Prize when you surpass 100 Tasks"}
          progress={true}
          icon={"/images/homepage/confetti.png"}
          />
        </div>          
      </div>
    </section>
  )
}

export default GamifiedLearning
