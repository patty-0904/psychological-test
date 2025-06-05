'use client'
import React from 'react'

export default function ResultCard({ type }) {
  const resultMap = {
    cat: {
      title: "你是靜謐的貓",
      image: "/images/cat.jpg",
      description: "你喜歡獨處、享受自己的節奏。"
    },
    dog: {
      title: "你是忠誠的狗",
      image: "/images/dog.jpg",
      description: "你開朗外向，喜歡團體生活。"
    },
    fox: {
      title: "你是聰明的狐狸",
      image: "/images/fox.jpg",
      description: "你機智反應快，懂得掌握局勢。"
    },
    owl: {
      title: "你是智慧的貓頭鷹",
      image: "/images/owl.jpg",
      description: "你理性冷靜，是天生的思考者。"
    }
  }

  const result = resultMap[type]

  return (
    <div className="flex flex-col items-center">
      <img src={result.image} alt={type} className="w-full max-w-md rounded-lg mb-4" />
      <h2 className="text-2xl font-bold mb-2">{result.title}</h2>
      <p className="text-center">{result.description}</p>
    </div>
  )
}
