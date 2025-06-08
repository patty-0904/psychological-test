'use client' // ⚠️ 必須是整個檔案的第一行！

import { useRouter } from 'next/navigation'

export default function HomePage() {
  const router = useRouter()

  const startQuiz = () => {
    router.push('/quiz')
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-[#ddd7c0] p-6 text-center">
      <h1 className="text-[6vw] md:text-4xl font-bold mb-4 text-[#355545]">
        動物個性心理測驗
      </h1>
      <p className="text-[4.5vw] md:text-lg mb-6 text-[#5a7867]">
        回答幾個問題，看看你是哪種動物吧！
      </p>
      <img
        src="/images/q0.png"
        alt="Quiz Intro"
        className="w-full max-w-md rounded-lg shadow mb-6"
      />
      <button
        onClick={startQuiz}
        className="bg-[#A5A58D] hover:bg-[#6B705C] text-white hover:text-[#FDF9F2] px-6 py-3 rounded-lg transition duration-300 text-[4.5vw] md:text-base font-semibold"
      >
        開始測驗
      </button>
    </div>
  )
}
