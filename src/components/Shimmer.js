import React from 'react'

const Shimmer = () => {
  return Array(15).fill(0).map((item) => (
    <div className="w-64 border rounded-lg border-gray-200 shadow-lg p-2 my-4"> 
        <div className="h-60 w-60 bg-gray-200" ></div>
    </div>
  ))
}

export default Shimmer