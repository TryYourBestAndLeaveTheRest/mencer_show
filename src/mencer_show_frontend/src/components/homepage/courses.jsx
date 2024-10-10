"use client"
import React from 'react'
import Course from './ui/course'
import { courses } from '../../lib/data'


const Courses = () => {
  return (
    <div className='w-full grid grid-cols-1 sm:grid-cols-2 min-[991px]:grid-cols-3 xl:grid-cols-4  gap-[26.5px] justify-items-center'>
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
