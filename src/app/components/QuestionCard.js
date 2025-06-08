'use client'
import React from 'react'

export default function QuestionCard({ question, onSelect }) {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center text-center">
      <img src={question.image} alt={`Question ${question.id}`} className="w-full max-w-md rounded-lg mb-4" />
      <h2 className="text-[5vw] md:text-2xl font-bold mb-4 text-[#355545]">{question.text}</h2>
      <div className="grid grid-cols-2 gap-4 w-full max-w-md">
        {question.options.map((opt, idx) => (
          <button
            key={idx}
            className="bg-[#A5A58D] hover:bg-[#6B705C] text-white hover:text-[#FDF9F2] font-semibold p-3 rounded transition duration-300 text-[4vw] md:text-base"
            onClick={() => onSelect(opt.type)}
          >
            {opt.text}
          </button>
        ))}
      </div>
    </div>
  )
}
