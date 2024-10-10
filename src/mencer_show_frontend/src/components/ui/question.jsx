import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'


const Quest = ({ item, index, ref }) => {
  const timeline = React.useRef();
  const { context, contextSafe } = useGSAP(()=>{
    timeline.current = gsap.timeline({
      defaults : {
        duration : 1
      }
    })
  }, {
    scope : ref
  })
  const [ accordionState, setAccordionState ] = React.useState(false)
  const contentRef = React.useRef()
  const rotateElement1Ref = React.useRef()
  const rotateElement2Ref = React.useRef()
  console.log(accordionState)

  const accordion = contextSafe((i)=>{
    console.log(index)
    setAccordionState(prevState=>!prevState)
    gsap.to(rotateElement1Ref.current, {
      rotate : !accordionState ? 360 : 0,
      opacity : !accordionState ? 0 : 1,
      duration : .5
    })
    gsap.to(rotateElement2Ref.current, {
      rotate : !accordionState ? 360 : 0,
      duration : .5
    })
  })

  return (
    <div 
    className={`py-5 sm:py-10 font-light tracking-wider text-lg sm:text-2xl tab:text-4xl px-2 border-[#4F4D4A] border-b ${index === 0 && 'border-t'} flex flex-col`} 
    // key={index}
    >
      <div 
      className='flex items-center justify-between w-full grid-x-3' 
      onClick={()=>accordion(index)}
      >
        <h1 className='circle w-fit'>
          {
            item.question
          }
        </h1>
        <div className="plus group w-[25px] h-[25px] xs:w-[32px] xs:h-[32px] relative circle">
          <div className='absolute top-0 left-[45%] h-full w-1 bg-white group-hover:bg-yellow-500 shadow-white shadow-lg duration-200 transition-colors rounded vertical' ref={rotateElement1Ref}/>
          <div className='absolute top-[45%] left-[0] w-full h-1 bg-white group-hover:bg-yellow-500 shadow-white shadow-lg duration-200 transition-colors rounded horizontal' ref={rotateElement2Ref}/>
        </div>
      </div>
      {
        !item.list ? (
          <div className={`space-y-8 mt-8 transition duration-200 ${accordionState ? 'block' : 'hidden'}`} ref={contentRef}>
            {
              item.answer.map((ans, i)=>(
                <p className='text-lg tracking-widest sm:text-xl tab:text-2xl w-fit font-extralight' key={i}>
                  { ans }
                </p>
              ))
            }
          </div>
        ) : (
          <ul className={`space-y-8 mt-8 transition duration-200 px-7 ${accordionState ? 'block' : 'hidden'} list-disc`} ref={contentRef}>
            {
              item.answer.map((ans, i)=>(
                <li className='text-lg tracking-widest sm:text-xl tab:text-2xl w-fit font-extralight' key={i}>
                  { ans }
                </li>
              ))
            }
          </ul>
        )
      }
    </div>
  )
}

export default Quest
