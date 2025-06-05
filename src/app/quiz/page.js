'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import QuestionCard from '../components/QuestionCard'
import { questions } from '../components/questions' // ✅ 如果你沒搬，就維持這樣

export default function QuizPage() {
  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState([])
  const router = useRouter()

  const handleSelect = (type) => {
    const newAnswers = [...answers, type]
    if (current + 1 < questions.length) {
      setAnswers(newAnswers)
      setCurrent(current + 1)
    } else {
      const result = mostFrequent(newAnswers)
      router.push(`/result?type=${result}`)
    }
  }

  const mostFrequent = (arr) => {
    const freq = {}
    arr.forEach((item) => {
      freq[item] = (freq[item] || 0) + 1
    })
    return Object.entries(freq).sort((a, b) => b[1] - a[1])[0][0]
  }

  return (
    <div className="min-h-screen flex justify-center items-center p-4">
      <QuestionCard question={questions[current]} onSelect={handleSelect} />
    </div>
  )
}
