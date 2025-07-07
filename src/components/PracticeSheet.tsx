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
    <div className="w-[210mm] h-[297mm] mx-auto bg-white px-16 py-20 print:px-16 print:py-20">
      <div className="h-full flex flex-col">
        {/* Header section with main character and example */}
        <div className="flex items-start gap-8 mb-12">
          {/* Main character with stroke order */}
          <div className="w-52 h-52 border-[3px] border-gray-800 relative">
            {/* Dotted guide lines */}
            <div className="absolute inset-0">
              <div className="absolute top-1/2 left-0 right-0 border-t-2 border-dotted border-gray-300" />
              <div className="absolute top-0 bottom-0 left-1/2 border-l-2 border-dotted border-gray-300" />
            </div>
            
            {/* Character display */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-[140px] text-gray-300">{kana.character}</span>
            </div>
            {showStrokeOrder && (
              <div className="absolute top-4 left-4 text-2xl font-bold">
                {kana.strokes.map((_, index) => (
                  <span key={index} className="mr-2">{index + 1}</span>
                ))}
              </div>
            )}
          </div>

          {/* Example word and illustration */}
          <div className="flex-1 flex flex-col items-center justify-start">
            <div className="w-48 h-48 flex items-center justify-center mb-4">
              {kana.example.imagePath ? (
                <img 
                  src={kana.example.imagePath} 
                  alt={kana.example.word}
                  className="max-w-full max-h-full object-contain"
                />
              ) : (
                <div className="text-8xl">🐥</div>
              )}
            </div>
            <div className="text-3xl font-bold">{kana.example.word}</div>
          </div>
        </div>

        {/* Practice grid - 2x2 layout */}
        <div className="grid grid-cols-2 gap-12">
          {/* First row with guide characters */}
          {[...Array(2)].map((_, index) => (
            <div key={`guide-${index}`} className="aspect-square border-[3px] border-gray-800 relative">
              <div className="absolute inset-0">
                <div className="absolute top-1/2 left-0 right-0 border-t-[3px] border-dotted border-gray-400" />
                <div className="absolute top-0 bottom-0 left-1/2 border-l-[3px] border-dotted border-gray-400" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[180px] text-gray-200">{kana.character}</span>
              </div>
            </div>
          ))}
          
          {/* Second row - empty practice squares */}
          {[...Array(2)].map((_, index) => (
            <div key={`practice-${index}`} className="aspect-square border-[3px] border-gray-800 relative">
              <div className="absolute inset-0">
                <div className="absolute top-1/2 left-0 right-0 border-t-[3px] border-dotted border-gray-400" />
                <div className="absolute top-0 bottom-0 left-1/2 border-l-[3px] border-dotted border-gray-400" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}