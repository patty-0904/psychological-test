'use client'

import React from 'react'
import { useRouter } from 'next/navigation'

export default function ResultCard({ type }) {
  const router = useRouter()

  const resultMap = {
    cat: {
      title: '你是靜謐的貓',
      image: '/images/cat.png',
      description: '你喜歡獨處、享受自己的節奏。'
    },
    dog: {
      title: '你是忠誠的狗',
      image: '/images/dog.png',
      description: '你開朗外向，喜歡團體生活。'
    },
    fox: {
      title: '你是聰明的狐狸',
      image: '/images/fox.png',
      description: '你機智反應快，懂得掌握局勢。'
    },
    owl: {
      title: '你是智慧的貓頭鷹',
      image: '/images/owl.png',
      description: '你理性冷靜，是天生的思考者。'
    }
  }

  const result = resultMap[type]

  if (!result) {
    return (
      <div className="w-screen h-screen flex justify-center items-center text-center p-8 text-red-500">
        找不到對應的結果。
      </div>
    )
  }

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center text-center p-4">
      <img
        src={result.image}
        alt={type}
        className="w-full max-w-md rounded-lg mb-4"
      />
      <h2 className="text-[5vw] md:text-3xl font-bold mb-2 text-[#355545]">
        {result.title}
      </h2>
      <p className="text-[4.5vw] md:text-xl text-[#5a7867] mb-6">
        {result.description}
      </p>
      
      <button
        onClick={() => router.push('/')}
        className="bg-[#A5A58D] hover:bg-[#6B705C] text-white hover:text-[#FDF9F2] font-semibold px-6 py-3 rounded transition duration-300 text-[4vw] md:text-base"
      >
        再次測驗
      </button>
    </div>
  )
}
