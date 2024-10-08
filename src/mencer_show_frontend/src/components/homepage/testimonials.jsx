"use client"
import React from 'react'
// import { poppins } from '@/fonts'
// import TypographyH6 from '../Typography/TypograpyH6'
// import { TypographyH2 } from '../Typography'


const testimonials = [
  {
    name : "Anjalli D.",
    position : "Smart Contract",
    imgUrl : "/images/homepage/test_image.png",
    content : "It was difficult for me to locate any useful Blockchain resources at the beginning of 2021. I became a better developer and gained a better understanding of Solidity thanks to Mencer's programs and community. Shortly afterward, I was hired as a smart contract developer at Ethereum.",
  },
  {
    name : "Anjalli D.",
    position : "Smart Contract",
    imgUrl : "/images/homepage/test_image.png",
    content : "It was difficult for me to locate any useful Blockchain resources at the beginning of 2021. I became a better developer and gained a better understanding of Solidity thanks to Mencer's programs and community. Shortly afterward, I was hired as a smart contract developer at Ethereum.",
  },
  {
    name : "Anjalli D.",
    position : "Smart Contract",
    imgUrl : "/images/homepage/test_image.png",
    content : "It was difficult for me to locate any useful Blockchain resources at the beginning of 2021. I became a better developer and gained a better understanding of Solidity thanks to Mencer's programs and community. Shortly afterward, I was hired as a smart contract developer at Ethereum.",
  },
  {
    name : "Anjalli D.",
    position : "Smart Contract",
    imgUrl : "/images/homepage/test_image.png",
    content : "It was difficult for me to locate any useful Blockchain resources at the beginning of 2021. I became a better developer and gained a better understanding of Solidity thanks to Mencer's programs and community. Shortly afterward, I was hired as a smart contract developer at Ethereum.",
  },
  {
    name : "Anjalli D.",
    position : "Smart Contract",
    imgUrl : "/images/homepage/test_image.png",
    content : "It was difficult for me to locate any useful Blockchain resources at the beginning of 2021. I became a better developer and gained a better understanding of Solidity thanks to Mencer's programs and community. Shortly afterward, I was hired as a smart contract developer at Ethereum.",
  },
  {
    name : "Anjalli D.",
    position : "Smart Contract",
    imgUrl : "/images/homepage/test_image.png",
    content : "It was difficult for me to locate any useful Blockchain resources at the beginning of 2021. I became a better developer and gained a better understanding of Solidity thanks to Mencer's programs and community. Shortly afterward, I was hired as a smart contract developer at Ethereum.",
  },
]


const Testimonials = () => {
  return (
    <div className="w-full gap-64 my-20">
      <div className='flex gap-2 flex-col max-w-[520px]'>
        {/* <TypographyH2 className="!text-[44px]">
          Testimonials
        </TypographyH2>
        <TypographyH6 className={`${poppins.className} font-normal text-[#757575]`}>
          Lorem ipsum dolor sit amet consectetur. Turpis ultricies sagittis lacus tempor pellentesque nisl. 
        </TypographyH6> */}
      </div>

      <div className='grid w-full grid-cols-1 sm:grid-cols-2 min-[991px]:grid-cols-3 xl:grid-cols-4 gap-12 mt-12 justify-items-center'>
        {
          testimonials.map((item, index) => (
            <div className='p-6 rounded-[12px] border border-[#D9D9D9] w-full flex flex-col gap-6' key={index}>
              {/* <TypographyH6 className={`!text-[13px] !font-semibold ${poppins.className} !leading-[1.3]`}>
                { item.content }
              </TypographyH6> */}
              <div className='flex space-x-2'>
                <img src={item.imgUrl} alt="avatar" className='rounded-full w-[40px] h-[40px]'/>
                <div className='flex flex-col'>
                  <p className="text-[#757575] text-base font-semibold">
                    {item.name}
                  </p>
                  <p className='text-[#B3B3B3] font-normal text-base'>
                    { item.position }
                  </p>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Testimonials
