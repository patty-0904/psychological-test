// src/app/result/ResultClient.js（client component）
'use client'

import { useSearchParams } from 'next/navigation'
import ResultCard from '../components/ResultCard'

export default function ResultClient() {
  const searchParams = useSearchParams()
  const type = searchParams.get('type') || 'cat'

  return (
    <div className="min-h-screen flex justify-center items-center p-4">
      <ResultCard type={type} />
    </div>
  )
}
