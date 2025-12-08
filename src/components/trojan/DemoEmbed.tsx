import React from 'react'

export default function DemoEmbed() {
  return (
    <div className="w-full h-[calc(100vh-200px)] bg-black/20">
      <iframe
        src="/demo101.html"
        title="Demo101"
        className="w-full h-full border-0"
      />
    </div>
  )
}