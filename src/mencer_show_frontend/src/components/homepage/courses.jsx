"use client"
import React from 'react'
import Course from './ui/course'

const courses = [
  {

    id : 1,
    title : "Introduction to Solidity",
    authors : [ "Jane Federicks", "Google" ],
    rating : 4.8,
    reviews : 120,
    categories : [ 'Beginner', 'NFT Certificate', '3-6 Months' ],
    imgUrl : "/images/courses/course1.jpeg"
  },
  {
    id : 2,
    title : "Build on Polkadot",
    authors : [ "Jane Federicks", "Google" ],
    rating : 4.8,
    reviews : 120,
    categories : [ 'Beginner', 'NFT Certificate', '3-6 Months' ],
    imgUrl : "/images/courses/course2.jpeg"
  },
  {
    id : 3,
    title : "Blockchain and Real Estate",
    authors : [ "Jane Federicks", "Google" ],
    rating : 4.8,
    reviews : 120,
    categories : [ 'Beginner', 'NFT Certificate', '3-6 Months' ],
    imgUrl : "/images/courses/course3.jpeg"
  },
  {
    id : 4,
    title : "Supply blockchain finance",
    authors : [ "Jane Federicks", "Google" ],
    rating : 4.8,
    reviews : 120,
    categories : [ 'Beginner', 'NFT Certificate', '3-6 Months' ],
    imgUrl : "/images/courses/course4.jpeg"
  },
  {
    id : 5,
    title : "Introduction To Solidity",
    authors : [ "Jane Federicks", "Google" ],
    rating : 4.8,
    reviews : 120,
    categories : [ 'Beginner', 'NFT Certificate', '3-6 Months' ],
    imgUrl : "/images/courses/course5.jpeg"
  },
  {
    id : 6,
    title : "Beginner Web3 Technology",
    authors : [ "Jane Federicks", "Google" ],
    rating : 4.8,
    reviews : 120,
    categories : [ 'Beginner', 'NFT Certificate', '3-6 Months' ],
    imgUrl : "/images/courses/course1.jpeg"
  },
  {
    id : 7,
    title : "Beginner Web3 Technology",
    authors : [ "Jane Federicks", "Google" ],
    rating : 4.8,
    reviews : 120,
    categories : [ 'Beginner', 'NFT Certificate', '3-6 Months' ],
    imgUrl : "/images/courses/course4.jpeg"
  },
  {
    id : 8,
    title : "Introduction to Solidity",
    authors : [ "Jane Federicks", "Google" ],
    rating : 4.8,
    reviews : 120,
    categories : [ 'Beginner', 'NFT Certificate', '3-6 Months' ],
    imgUrl : "/images/courses/course3.jpeg"
  },
]


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
