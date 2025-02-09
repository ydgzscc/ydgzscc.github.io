import Link from "next/link" // Import Link component
import Button from "@/components/Button" // Assuming Button is a custom component

export default function Introduction() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center gap-8 text-white font-['Noto_Sans_SC']">
      <h1 className="text-6xl font-bold mb-8">简介</h1>
      <p className="text-2xl">陈飞鸣·2013.4.2 白羊座 12岁</p>
      <Link href="/" passHref>
        <Button className="bg-blue-500 hover:bg-blue-600 text-white text-xl px-8 py-6 mt-8">トップページに戻る</Button>
      </Link>
    </div>
  )
}

