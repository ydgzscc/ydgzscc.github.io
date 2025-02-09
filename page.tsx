"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const Firework = ({ className }: { className?: string }) => (
  <svg className={`w-16 h-16 ${className}`} viewBox="0 0 100 100">
    <circle className="animate-firework fill-yellow-300" cx="50" cy="50" r="2">
      <animate attributeName="r" values="0;40;0" dur="2s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="1;0" dur="2s" repeatCount="indefinite" />
    </circle>
    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
      <line
        key={angle}
        x1="50"
        y1="50"
        x2={50 + 40 * Math.cos((angle * Math.PI) / 180)}
        y2={50 + 40 * Math.sin((angle * Math.PI) / 180)}
        stroke="yellow"
        strokeWidth="2"
        className="animate-firework"
      >
        <animate attributeName="opacity" values="1;0" dur="2s" repeatCount="indefinite" />
      </line>
    ))}
  </svg>
)

export default function Page() {
  const [scale, setScale] = useState(1)
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => {
      setScale((s) => (s === 1 ? 1.1 : 1))
      setCurrentTime(new Date())
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <div className="flex-grow flex flex-col items-center justify-center gap-8">
        <div className="absolute top-4 left-4 text-white text-xl font-['Noto_Sans_SC']">
          {currentTime.toLocaleString("ja-JP", { timeZone: "Asia/Tokyo" })}
        </div>
        <div className="flex items-center justify-center">
          <Firework className="mr-4" />
          <h1
            className="text-red-500 text-6xl font-bold"
            style={{
              transform: `scale(${scale})`,
              transition: "transform 0.5s ease-in-out",
            }}
          >
            新年好
          </h1>
          <Firework className="ml-4" />
        </div>

        <Button
          className="bg-red-500 hover:bg-red-600 text-white text-xl px-8 py-6 font-['Noto_Sans_SC']"
          onClick={() => (window.location.href = "https://ydgzsc.github.io")}
        >
          点击跳转学习机打开网站
        </Button>
        <Link href="/introduction" passHref>
          <Button className="bg-blue-500 hover:bg-blue-600 text-white text-xl px-8 py-6 font-['Noto_Sans_SC']">
            简介
          </Button>
        </Link>
      </div>
      <footer className="text-white text-center py-4 font-['Noto_Sans_SC']">©版权2025归 云顶工作室（陈飞鸣）.保留所有权利.</footer>
    </div>
  )
}

