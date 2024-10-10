import React from 'react'
import { TiArrowRightOutline } from "react-icons/ti";
import Quest from './ui/question';


const questions = [
  {
    "question" : "What is a concept, and what does it include?",
    "list" : false,
    "answer" : [
      "A concept is an idea wrapped in a design. Depending on the complexity of the product, it’s either 3-5 informational blocks (landing page), 2-5 mobile screens (mobile app), or 2 primary screens (dashboard). If to be recognized the idea requires animation — it can be added free of charge.",
      "It can be used as promo materials, you can showcase them to stakeholders and investors, and it can be easily scalable to your project MVP. It can be used by: first-time entrepreneurs, developers in need of UI design, tech professionals looking to venture out, side hustlers, founders looking for VC, designers who need a detached view, look, and everyone who could use a great design concept.",
      "Webflow implementation allows you to get a fully functional and deployed website developed by our team on Webflow.",
      "One of the main requirements allowing us to charge such a competitive price is limited edits per concept. We can do small changes to the copy and layouts but every significant pivot should happen on terms different from the initial agreement."
    ]
  },
  {
    "question" : "Who is Conceptzilla",
    "list" : false,
    "answer" : [
      "Conceptzilla is a team of designers from Shakuro. Shakuro is a design and development agency that’s building websites and apps since 2006. This initiative is our way of giving back to the community. Having launched our own startups and with 500+ successful projects on our resume, we know exactly how to make ideas shine. The world is full of ideas that stay undiscovered. Conceptzilla is on a mission to give them wings. And drop shadows."
    ]
  },
  {
    "question" : "What's the concept for",
    "list" : false,
    "answer" : [
      "It can be used as a promo materials, you can showcase them to stakeholders and investors, it can be easily scalable to your project MVP. It can be used by: first-time entrepreneurs, developers in need of UI design, tech professionals looking to venture out, side hustlers, founders looking for VC, designers who need a detached view, look and everyone who could use a great design concept."
    ]
  },
  {
    "question" : "Why conceptzilla",
    "list" : false,
    "answer" : [
      "If you work with us, you will save time on formalities, long calls and emails typical for a design studio. The production of the same number of assets may take months that way. Our framework crystalizes the idea to just the most important features, which saves time, cost, and delivers tight concepts. An app startup design cost may reach $50,000 we can design a quick and powerful concept of the same product for $3,000."
    ]
  },
  {
    "question" : "What are design Add-ons?",
    "list" : true,
    "answer" : [
      "The Pitch Deck add-on delivers a compact, compelling presentation tailored to highlight your product's value and appeal to your key audience. Up to 20 slides.",
      "The Branding add-on includes a logo, a typographical pair, and a set of brand colors",
      "Webflow implementation allows you to get a fully functional and deployed website developed by our team on Webflow.",
      "The Extended concept add-on allows us to cover more features with an increased number of screens.",
      "The Illustration add-on puts in a custom 2D or 3D illustration capturing the essence of the concept or a specific feature.",
      "Dark/Light theme is an add-on that allows us to design a contrasting dark or light extra theme for the initial set of screens.",
      "Revision introduces an intermediary design hand-off for you to suggest specific changes if required.",
      "Responsive includes versions of the concept for different screen sizes. Included by default in the Webflow implementation add-on."
    ],
    "note" : "Adding these design add-ons will bring a lot of visual value to the concept but will also affect delivery time and budget. We’ll discuss the exact overage on a call with you."
  },
  {
    "question" : "What if i want to change something?",
    "list" : false,
    "answer" : [
      "One of the main requirements allowing us to charge such a competitive price is limited edits per concept. We can do small changes of the copy and layouts but every significant pivot should happen on terms different from the initial agreement."
    ]
  },
  {
    "question" : "What if i want to continue working with the concept to finish it?",
    "list" : false,
    "answer" : [
      "A concept is just the beginning. If it does what it’s supposed to and the project kicks off, we’ll gladly continue developing the idea and designing it into a complete product using the significant resources that Shakuro Agency has to offer."
    ]
  }
]

const FreQuestions = () => {
  // const [ questions, setQuestions ] = React.useState([])
  const container = React.useRef();
  return (
    <div className={`px-3 text-white max-w-4xl tab:max-w-7xl min-h-screen w-full mx-auto space-y-10 sm:space-y-28`}>
      <div className='max-w-[16rem] xs:max-w-xs sm:max-w-sm text-4xl xs:text-5xl md:text-7xl tracking-wider'>
        <h1>
          FREQUENTLY ASKED
            <TiArrowRightOutline className='inline-block mb-3' />
           QUESTIONS
        </h1>
      </div>
      <div className='text-white' ref={container}>
        {
          questions && questions.map((item, index)=>(
            <Quest key={index} item={item} index={index} ref={container}/>
          ))
        }
      </div>
    </div>
  )
}

export default FreQuestions
