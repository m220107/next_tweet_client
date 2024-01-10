// csrにしたいとき↓を書く
"use client"

export default function Home() {
  console.log("hello")
  return (
    <div>
      <textarea className="resize-none w-full h-24 border rounded-md p-2"></textarea>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">Send</button>
    </div>
  )
}