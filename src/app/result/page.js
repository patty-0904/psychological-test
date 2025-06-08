// src/app/result/page.js
'use client'

import { useSearchParams } from 'next/navigation'
import ResultCard from '../components/ResultCard'

export default function ResultPage() {
  const searchParams = useSearchParams()
  const type = searchParams.get('type') || 'cat'

  return (
    <div className="min-h-screen flex justify-center items-center p-4">
      <ResultCard type={type} />
    </div>
  )
}
