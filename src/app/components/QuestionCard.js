'use client'
import React from 'react'

export default function QuestionCard({ question, onSelect }) {
  return (
    <div className="flex flex-col items-center">
      <img src={question.image} alt={`Question ${question.id}`} className="w-full max-w-md rounded-lg mb-4" />
      <h2 className="text-xl font-bold mb-4">{question.text}</h2>
      <div className="grid grid-cols-2 gap-4">
        {question.options.map((opt, idx) => (
          <button
            key={idx}
            className="bg-blue-200 p-3 rounded hover:bg-blue-400"
            onClick={() => onSelect(opt.type)} // ✅ 這要從 props 傳入
          >
            {opt.text}
          </button>
        ))}
      </div>
    </div>
  )
}
