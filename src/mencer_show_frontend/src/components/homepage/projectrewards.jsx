"use client"
import React from 'react'
import Card from './ui/card'

const ProjectRewards = () => {
  return (
    <section className="flex flex-col min-[991px]:flex-row items-center w-full gap-[25px] mt-12 mb-20 max-w-7xl mx-auto">
      <div className='bg-[#F5F5F5] max-w-full min-[991px]:max-w-[60%] h-[520px] sm:h-[480px] overflow-hidden rounded-[20px] w-full'>
        {/* main */}
        <div className={`ml-[60px] mt-12 font-semibold flex flex-col space-y-1`}>
          <h1 className='text-[32px] text-black'>
            Hands On Projects
          </h1>
          <p className={`text-[#6D6D6D] text-xs font-normal`}>
            Never forget you’re just one skill away
          </p>
        </div>  

        {/* services */}
        <div className={`flex justify-end w-full h-fit mt-[77px] gap-7`}>
          
          {/* left */}
          <div className='flex flex-col w-[220px] gap-6 items-start h-[400px]'>
            {/* item 1 */}
            <div className='bg-white rounded-[12px] w-full px-6 py-4 flex flex-col gap-4 items-start'>
              <div className='px-[10px] py-2 bg-[#FFF8CF] rounded-[8px]'>
                <img
                src={'/images/homepage/banrisul.png'}
                // width={20}
                // height={20}
                className=''
                alt='file'
                // quality={100}
                />
              </div>
              <div className='space-y-1'>
                <h1 className='font-medium text-black'>Smart Contract Development</h1>
                <p className="text-xs text-[#6D6D6D]">Build and deploy a simple smart contract on Ethereum using Solidity</p>
              </div>
            </div>
            
            {/* item 2 */}
            <div className='bg-white rounded-[12px] w-full px-6 py-4 flex flex-col gap-4 items-start'>
              <div className='px-[10px] py-2 bg-[#94DBFB] rounded-[8px]'>
                <img
                src={'/images/homepage/coin.png'}
                // width={20}
                // height={20}
                className=''
                alt='file'
                // quality={100}
                />
              </div>
              <div className='space-y-1'>
                <h1 className='font-medium text-black'>Smart Contract Development</h1>
                <p className="text-xs text-[#6D6D6D]">Build and deploy a simple smart contract on Ethereum using Solidity</p>
              </div>
            </div>
          </div>
          
          {/* right */}
          <div className='flex flex-col w-[220px] gap-6 items-start h-[400px] -mt-[75px] sm:-mt-[100px] mr-[52px]'>
            {/* item 1 */}
            <div className='bg-white rounded-[12px] w-full px-6 py-4 flex flex-col gap-4 items-start'>
              <div className='px-[4px] py-1 bg-[#00249A] rounded-[8px]'>
                <img
                src={'/images/homepage/cube.png'}
                width={30}
                height={30}
                className=''
                alt='file'
                // quality={100}
                />
              </div>
              <div className='space-y-1'>
                <h1 className='font-medium text-black'>Decentralized Application (DApp)</h1>
                <p className="text-xs text-[#6D6D6D]">Create a basic DApp that interacts with a blockchain, such as a voting system</p>
              </div>
            </div>
            
            {/* item 2 */}
            <div className='bg-white rounded-[12px] w-full px-6 py-4 flex flex-col gap-4 items-start'>
              <div className='px-[4px] py-1 bg-[#C2D0FF] rounded-[8px]'>
                <img
                src={'/images/homepage/key.png'}
                width={30}
                height={30}
                className=''
                alt='file'
                // quality={100}
                />
              </div>
              <div className='space-y-1'>
                <h1 className='font-medium text-black'>Blockchain Explorer</h1>
                <p className="text-xs text-[#6D6D6D]">Build a mini blockchain explorer that allows users to search for blocks, and transactions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className='bg-[#F5F5F5] max-w-full min-[991px]:max-w-[40%] h-[480px] rounded-[20px] w-full overflow-y-hidden overflow-x-hidden'>
        {/* main */}
        <div className={`mt-12 font-semibold flex flex-col space-y-1 min-[991px]:w-fit w-full min-[991px]:ml-[40px] items-center`}>
          <h1 className='text-[32px] text-black'>
          Earn Rewards
          </h1>
          <p className={`text-[#6D6D6D] text-xs font-normal`}>
            Effort is the seed; reward is the harvest
          </p>
        </div>

        <div className='min-[991px]:ml-[40px] mt-[46px] h-full relative space-y-4 min-[991px]:mr-[50px] max-w-xl mx-auto'>
          <Card
          key={1}
          position={"start"}
          title={"Congratulations"}
          text={"You have earned 150 Xp"}
          icon={"/images/homepage/gift.png"}
          />
          <Card
          key={2}
          position={"reverse"}
          title={"Your NFT Certificate has been minted Successfully"}
          icon={"/images/homepage/cap.png"}
          />
          <Card
          key={3}
          position={"start"}
          title={"You are the Champion"}
          text={"Top leader for this week Tasks"}
          icon={"/images/homepage/trophy.png"}
          />
        </div>          
      </div>
    </section>
  )
}

export default ProjectRewards
