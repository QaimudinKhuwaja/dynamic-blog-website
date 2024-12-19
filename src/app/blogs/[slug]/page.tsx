import React from 'react'
import { data } from '@/app/data/blog'

const dynamic = ({ params }: { params: { slug: string } }) => {
  const blog = data.find((b) => b.slug === params.slug)

  return (
    <>
      <div className="max-w-4xl mx-auto mt-[40px] px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl text-white bg-blue-950 py-3 px-3 font-bold underline mb-4">
          {blog?.name}
        </h1>

        {/* Blog Content Section */}
        <div className="prose max-w-full mb-8 text-gray-700">
          <p>{blog?.content}</p>
        </div>

        {/* Author Section */}
        <h2 className="text-lg sm:text-xl md:text-2xl mb-[50px] mt-[20px]">
          Written by: <span className="text-blue-950 text-xl sm:text-2xl font-medium underline">{blog?.Author}</span>
        </h2>
      </div>
    </>
  )
}

export default dynamic
