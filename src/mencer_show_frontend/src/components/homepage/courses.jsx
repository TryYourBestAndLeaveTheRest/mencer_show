"use client"
import React from 'react'
import Course from './ui/course'
import { courses } from '../../lib/data'
import { useLocation } from 'react-router-dom'


const Courses = () => {
  const location = useLocation()
  const { pathname } = location;
  return (
    <div className={`w-full grid grid-cols-1 ${pathname !== "/courses" ? 'gap-[26.5px]' : 'gap-0'} sm:grid-cols-2 min-[991px]:grid-cols-3 xl:grid-cols-4 justify-items-center `}>
      {
        courses.map(course=>(
          <Course
          key={course.id}
          course={course}
          />
        ))
      }
    </div>
  )
}

export default Courses
