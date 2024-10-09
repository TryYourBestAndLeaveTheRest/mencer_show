import React from 'react'



const HowItWorks = () => {
  return (
    <section className={`mt-14 grid md:grid-cols-2 sm:grid-cols-1 justify-items-center lg:grid-cols-3 xl:grid-cols-4 gap-6`}>
      <div className='flex flex-col items-start w-full space-y-4'>
        <div 
        className='px-[39px] py-3 rounded-lg bg-lightYellow text-black font-normal whitespace-nowrap focus:outline-none cursor-pointer'
        href="">
          How It Works
        </div>

        <div className='flex items-center gap-[6px] self-stretch'>
          <div className='rounded-full p-1.5 bg-[#EDF1FF] cursor-pointer'>
            <img src='/images/homepage/play.png' className='w-4 h-4'/>
          </div>
          <p className='text-[#00249A] text-sm'>
            Preview Our Program
          </p>
        </div>
      </div>
      <div className='flex flex-col gap-[21px] items-center sm:items-start'>
        <div className='border border-[#0030CF] w-[68px] h-[68px] flex items-center justify-center text-2xl text-[#0030CF] rounded-[100%]'>1</div>
        <p className='font-normal  text-[#6D6D6D]'>
        Lorem ipsum dolor sit amet consectetur. Turpis ultricies sagittis lacus tempor pellentesque nisl. Sem lobortis
        </p>
      </div>
      <div className='flex flex-col gap-[21px] items-center sm:items-start'>
        <div className='border border-[#000000] w-[68px] h-[68px] flex items-center justify-center text-2xl text-[#000] rounded-[100%]'>2</div>
        <p className='font-normal  text-[#6D6D6D]'>
        Lorem ipsum dolor sit amet consectetur. Turpis ultricies sagittis lacus tempor pellentesque nisl. Sem lobortis
        </p>
      </div>
      <div className='flex flex-col gap-[21px] items-center sm:items-start'>
        <div className='border border-[#000000] w-[68px] h-[68px] flex items-center justify-center text-2xl text-[#000] rounded-[100%]'>3</div>
        <p className='font-normal  text-[#6D6D6D]'>
        Lorem ipsum dolor sit amet consectetur. Turpis ultricies sagittis lacus tempor pellentesque nisl. Sem lobortis
        </p>
      </div>
    </section>
  )
}

export default HowItWorks
