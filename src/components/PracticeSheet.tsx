'use client'

import React from 'react'
import { Kana } from '@/types'

interface PracticeSheetProps {
  kana: Kana
  showStrokeOrder?: boolean
}

export const PracticeSheet: React.FC<PracticeSheetProps> = ({ 
  kana, 
  showStrokeOrder = true 
}) => {
  return (
    <div className="w-[210mm] h-[297mm] mx-auto bg-white p-8 print:p-0">
      <div className="h-full flex flex-col">
        {/* Header section with main character and example */}
        <div className="flex justify-between items-start mb-8">
          {/* Main character with stroke order */}
          <div className="w-48 h-48 border-2 border-gray-400 relative">
            {/* Dotted guide lines */}
            <div className="absolute inset-0">
              <div className="absolute top-1/2 left-0 right-0 border-t-2 border-dotted border-gray-300" />
              <div className="absolute top-0 bottom-0 left-1/2 border-l-2 border-dotted border-gray-300" />
            </div>
            
            {/* Character display */}
            <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full">
              {kana.strokes.map((stroke, index) => (
                <g key={stroke.id}>
                  <path
                    d={stroke.path}
                    fill="none"
                    stroke="#666"
                    strokeWidth="2"
                    opacity="0.3"
                  />
                  {showStrokeOrder && (
                    <text
                      x={stroke.path.match(/M\s*(\d+)/)?.[1] || '50'}
                      y={stroke.path.match(/M\s*\d+\s+(\d+)/)?.[1] || '50'}
                      fontSize="12"
                      fill="#333"
                      textAnchor="middle"
                    >
                      {index + 1}
                    </text>
                  )}
                </g>
              ))}
            </svg>
          </div>

          {/* Example word and illustration */}
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 border-2 border-gray-300 rounded-lg mb-2 flex items-center justify-center">
              {kana.example.imagePath ? (
                <img 
                  src={kana.example.imagePath} 
                  alt={kana.example.word}
                  className="max-w-full max-h-full object-contain"
                />
              ) : (
                <div className="text-4xl">🍓</div>
              )}
            </div>
            <div className="text-2xl font-bold">{kana.example.word}</div>
          </div>
        </div>

        {/* Practice rows */}
        <div className="flex-1 space-y-4">
          {/* Row with lighter guide character */}
          <div className="flex gap-4">
            {[...Array(2)].map((_, index) => (
              <div key={`guide-${index}`} className="w-36 h-36 border-2 border-gray-400 relative">
                <div className="absolute inset-0">
                  <div className="absolute top-1/2 left-0 right-0 border-t-2 border-dotted border-gray-300" />
                  <div className="absolute top-0 bottom-0 left-1/2 border-l-2 border-dotted border-gray-300" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-8xl text-gray-200">{kana.character}</span>
                </div>
              </div>
            ))}
            
            {[...Array(2)].map((_, index) => (
              <div key={`empty-guide-${index}`} className="w-36 h-36 border-2 border-gray-400 relative">
                <div className="absolute inset-0">
                  <div className="absolute top-1/2 left-0 right-0 border-t-2 border-dotted border-gray-300" />
                  <div className="absolute top-0 bottom-0 left-1/2 border-l-2 border-dotted border-gray-300" />
                </div>
              </div>
            ))}
          </div>

          {/* Empty practice row */}
          <div className="flex gap-4">
            {[...Array(4)].map((_, index) => (
              <div key={`practice-${index}`} className="w-36 h-36 border-2 border-gray-400 relative">
                <div className="absolute inset-0">
                  <div className="absolute top-1/2 left-0 right-0 border-t-2 border-dotted border-gray-300" />
                  <div className="absolute top-0 bottom-0 left-1/2 border-l-2 border-dotted border-gray-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}