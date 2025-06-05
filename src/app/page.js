'use client' // ⚠️ 必須是整個檔案的第一行！

import { useRouter } from 'next/navigation'

export default function HomePage() {
  const router = useRouter()

  const startQuiz = () => {
    router.push('/quiz')
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-[#F3EAC2] p-6 text-center">
      <h1 className="text-4xl font-bold mb-4">動物個性心理測驗</h1>
      <p className="text-lg mb-6">回答幾個問題，看看你是哪種動物吧！</p>
      <img
        src="/images/q0.png"
        alt="Quiz Intro"
        className="w-full max-w-md rounded-lg shadow mb-6"
      />
      <button
        onClick={startQuiz}
        className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition"
      >
        開始測驗
      </button>
    </div>
  )
}
