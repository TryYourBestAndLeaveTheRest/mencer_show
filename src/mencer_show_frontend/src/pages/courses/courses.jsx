import React from 'react'
import Header from '../../components/header'
import Footer from '../../components/footer'
import Courses from '../../components/homepage/courses'
import Sidebar from '../../components/courses/coursesidebar'


const AllCourses = () => {
  return (
    <div className="w-full max-w-[1440px] min-h-screen mx-auto px-2">
      <div className="w-full mx-auto max-w-[1280px] min-h-screen">
        <Header />
        <div className='flex flex-row w-full h-full'>
          <Sidebar />
          <Courses />
        </div>
        <Footer />
      </div>
    </div >
  )
}

export default AllCourses
