import React from 'react'
import Quest from './ui/question';
import { TypographyH2, TypographyH5 } from './Typography';
import { X } from 'lucide-react';


const questions = [
  {
    "question" : "How do i start learning?",
    "list" : false,
    "answer" : [
      "A concept is an idea wrapped in a design. Depending on the complexity of the product, it’s either 3-5 informational blocks (landing page), 2-5 mobile screens (mobile app), or 2 primary screens (dashboard). If to be recognized the idea requires animation — it can be added free of charge.",
      "It can be used as promo materials, you can showcase them to stakeholders and investors, and it can be easily scalable to your project MVP. It can be used by: first-time entrepreneurs, developers in need of UI design, tech professionals looking to venture out, side hustlers, founders looking for VC, designers who need a detached view, look, and everyone who could use a great design concept.",
      "Webflow implementation allows you to get a fully functional and deployed website developed by our team on Webflow.",
      "One of the main requirements allowing us to charge such a competitive price is limited edits per concept. We can do small changes to the copy and layouts but every significant pivot should happen on terms different from the initial agreement."
    ]
  },
  {
    "question" : "What is Mencer?",
    "list" : false,
    "answer" : [
      "Conceptzilla is a team of designers from Shakuro. Shakuro is a design and development agency that’s building websites and apps since 2006. This initiative is our way of giving back to the community. Having launched our own startups and with 500+ successful projects on our resume, we know exactly how to make ideas shine. The world is full of ideas that stay undiscovered. Conceptzilla is on a mission to give them wings. And drop shadows."
    ]
  },
  {
    "question" : "What do Mencer Courses include?",
    "list" : false,
    "answer" : [
      "It can be used as a promo materials, you can showcase them to stakeholders and investors, it can be easily scalable to your project MVP. It can be used by: first-time entrepreneurs, developers in need of UI design, tech professionals looking to venture out, side hustlers, founders looking for VC, designers who need a detached view, look and everyone who could use a great design concept."
    ]
  },
  {
    "question" : "Where can i access Mencer",
    "list" : false,
    "answer" : [
      "If you work with us, you will save time on formalities, long calls and emails typical for a design studio. The production of the same number of assets may take months that way. Our framework crystalizes the idea to just the most important features, which saves time, cost, and delivers tight concepts. An app startup design cost may reach $50,000 we can design a quick and powerful concept of the same product for $3,000."
    ]
  },
]

const FreQuestions = () => {
  const [ cancelQuestion, setCanceQuestion ] = React.useState(true);
  const container = React.useRef();
  return (
    <div className={`px-3 text-black max-w-4xl tab:max-w-7xl min-h-screen w-full mx-auto space-y-6 mt-6`}>
      <div className='text-center'>
        <TypographyH2 className='!text-center'>
          Frequently Asked Questions
        </TypographyH2>
      </div>

      <div className='flex flex-col space-y-6'>
        {
          cancelQuestion && (
            <div 
            className="w-full rounded-[14px] bg-[#F3F3F3] px-5 py-3 sm:px-10 sm:py-5 flex flex-col space-y-3 relative">
              <X 
              onClick={() => setCanceQuestion(false) } 
              className='absolute cursor-pointer right-10'/>
              <TypographyH5>
                How long will it take for me to learn Blockchain here?
              </TypographyH5>
              <p className="text-xs sm:text-sm">The time it will take for you to learn Blockchain is dependent on how many hours you're willing to put in as well as any previous experience you may have. So this varies from person to person.</p>
            </div>
          )
        }
        <div className='flex flex-col space-y-3 text-black' ref={container}>
          {
            questions && questions.map((item, index)=>(
              <Quest key={index} item={item} index={index} ref={container}/>
            ))
          }
        </div>  
      </div>
    </div>
  )
}

export default FreQuestions
