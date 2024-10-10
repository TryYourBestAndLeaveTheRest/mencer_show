import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ChevronUp } from 'lucide-react';
import { TypographyH5 } from '../Typography';
import { Checkbox } from '../ui/checkbox';




const Sidebar = () => {
  const timeline = React.useRef();
  const containerRef = React.useRef(null)
  const [ coursesAccordion, setCoursesAccordion ] = React.useState(false);
  const [ languageAccordion, setLanguageAccordion ] = React.useState(false);
  const { context, contextSafe } = useGSAP(() => {
    timeline.current = gsap.timeline({
      defaults : {
        duration : .2
      }
    })
  }, {
    scope : containerRef
  })
  const setAccordion1 = contextSafe(() => {
    setCoursesAccordion(prevState=>!prevState)
    gsap.to("#chevron1", {
      rotate : !coursesAccordion ? 180 : 0,
    })
  })
  
  const setAccordion2 = contextSafe(() => {
    setLanguageAccordion(prevState=>!prevState)
    gsap.to("#chevron2", {
      rotate : !languageAccordion ? 180 : 0,
    })
  })
  return (
    <div className='h-full w-[250px]'>
      <TypographyH5>
        Filter by
      </TypographyH5>
      <div 
      ref={containerRef}
      className="flex flex-col p-2 space-y-6">
        <div className="flex flex-col">
          <div 
          className='flex flex-row items-center justify-between w-full cursor-pointer' 
          onClick={setAccordion1}
          >
            <p className='font-medium'>Courses</p>
            <ChevronUp id='chevron1'/>
          </div>
          {
            coursesAccordion && (
              <div className='flex flex-col px-2 mt-2 space-y-2 text-sm'>
                <div className="flex space-x-3">
                  <Checkbox
                  className="border !border-[#00249A] !rounded-none w-5 h-5"/>
                  <p>Aptos</p>
                </div>
                <div className="flex space-x-3">
                  <Checkbox className="border !border-[#00249A] !rounded-none w-5 h-5"/>
                  <p>Core Web3</p>
                </div>
                <div className="flex space-x-3">
                  <Checkbox className="border !border-[#00249A] !rounded-none w-5 h-5"/>
                  <p>MANTRA Chain</p>
                </div>
                <div className="flex space-x-3">
                  <Checkbox className="border !border-[#00249A] !rounded-none w-5 h-5"/>
                  <p>SUI</p>
                </div>
              </div>
            )
          }
        </div>
        
        <div className="flex flex-col">
          <div 
          className='flex flex-row items-center justify-between w-full cursor-pointer' 
          onClick={setAccordion2}
          >
            <p className='font-medium'>Language</p>
            <ChevronUp id='chevron2'/>
          </div>
          {
            languageAccordion && (
              <div className='flex flex-col px-2 mt-2 space-y-2 text-sm'>
                <div className="flex space-x-3">
                  <Checkbox className="border !border-[#00249A] !rounded-none w-5 h-5"/>
                  <p>English</p>
                </div>
                <div className="flex space-x-3">
                  <Checkbox className="border !border-[#00249A] !rounded-none w-5 h-5"/>
                  <p>French</p>
                </div>
                <div className="flex space-x-3">
                  <Checkbox className="border !border-[#00249A] !rounded-none w-5 h-5"/>
                  <p>Spanish</p>
                </div>
                <div className="flex space-x-3">
                  <Checkbox className="border !border-[#00249A] !rounded-none w-5 h-5"/>
                  <p>German</p>
                </div>
              </div>
            )
          }
        </div>
        
      </div>
    </div>
  )
}

export default Sidebar
