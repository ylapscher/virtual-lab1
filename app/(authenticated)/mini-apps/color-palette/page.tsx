'use client'

import { useState } from 'react'

function generateRandomColor() {
  return '#' + Math.floor(Math.random()*16777215).toString(16)
}

export default function ColorPaletteGenerator() {
  const [colors, setColors] = useState(Array(5).fill('').map(generateRandomColor))

  const regeneratePalette = () => {
    setColors(colors.map(() => generateRandomColor()))
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Color Palette Generator</h1>
      <div className="flex space-x-4">
        {colors.map((color, index) => (
          <div key={index} className="flex flex-col items-center">
            <div
              className="w-24 h-24 rounded-lg shadow-md"
              style={{ backgroundColor: color }}
            ></div>
            <span className="mt-2 text-sm font-mono">{color}</span>
          </div>
        ))}
      </div>
      <button
        onClick={regeneratePalette}
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Generate New Palette
      </button>
    </div>
  )
}

