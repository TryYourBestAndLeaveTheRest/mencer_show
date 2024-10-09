
import React from 'react'
// import { poppins } from '../fonts'
import { Menu } from 'lucide-react'

const Header = () => {
  return (
    <header className={`flex items-center justify-between text-black py-3`}>
      <div className=''>
        <img
        src="/images/logo.svg"
        alt='logo'
        width={196}
        height={66}
        className=''
        // quality={100}
        />
      </div>

      <div className='min-[991px]:flex items-center space-x-[48px] text-[1rem] leading-[140%] hidden'>
        {
          [
            [ 'Academy', 'courses'],
            [ 'Hackathon', ''],
            [ 'Build', ''],
            [ 'Career', ''],
            [ 'Community', ''],
          ].map(([ title, url ]) => (
            <div
            className={``}
            // href={`/${url}`} 
            key={title}>
              { title   }
            </div>
          ))
        }
      </div>
      <div className="flex items-center gap-2">
        <div className='py-3 px-6 bg-[#FFDC16] rounded-[6px]'>
          Get Started
        </div>
        <div className="block min-[991px]:hidden">
          <Menu className="cursor-pointer" />
        </div>
      </div>
    </header>
  )
}

export default Header