'use client'

import React from 'react'
import { Kana } from '@/types'

interface PracticeSheetProps {
  kana: Kana
  showStrokeOrder?: boolean
}

const getDefaultEmoji = (kana: Kana): string => {
  const emojiMap: { [key: string]: string } = {
    'あ': '🍬', 'い': '🍓', 'う': '🐰', 'え': '✏️', 'お': '🍙',
    'か': '☂️', 'き': '🦊', 'く': '🚗', 'け': '🧶', 'こ': '🎯',
    'さ': '🌸', 'し': '🦌', 'す': '🍉', 'せ': '🦗', 'そ': '☁️',
    'た': '🥁', 'ち': '🦋', 'つ': '🌙', 'て': '✉️', 'と': '🕐',
    'な': '🍆', 'に': '🌈', 'ぬ': '🧸', 'ね': '🐱', 'の': '🍙',
    'は': '🌼', 'ひ': '✈️', 'ふ': '🚢', 'へ': '🐍', 'ほ': '⭐',
    'ま': '🌲', 'み': '🍊', 'む': '🐛', 'め': '👓', 'も': '🍑',
    'や': '⛰️', 'ゆ': '❄️', 'よ': '🌃',
    'ら': '🦁', 'り': '🍎', 'る': '🏠', 'れ': '🧊', 'ろ': '🕯️',
    'わ': '🐊', 'を': '👨', 'ん': '🍊',
    'ア': '🍦', 'イ': '🐕', 'ウ': '🐄', 'エ': '🦐', 'オ': '👹',
    'カ': '📷', 'キ': '🦊', 'ク': '🐻', 'ケ': '🍰', 'コ': '☕',
    'サ': '🐟', 'シ': '🦌', 'ス': '🍉', 'セ': '🦗', 'ソ': '☁️',
    'タ': '🐙', 'チ': '🦋', 'ツ': '🌙', 'テ': '📺', 'ト': '🍅',
    'ナ': '🍆', 'ニ': '🌈', 'ヌ': '🧸', 'ネ': '🐱', 'ノ': '📓',
    'ハ': '🌼', 'ヒ': '✈️', 'フ': '🚢', 'ヘ': '🐍', 'ホ': '⭐',
    'マ': '🌲', 'ミ': '🍊', 'ム': '🐛', 'メ': '👓', 'モ': '🍑',
    'ヤ': '⛰️', 'ユ': '❄️', 'ヨ': '🌃',
    'ラ': '🦁', 'リ': '🍎', 'ル': '💎', 'レ': '🍋', 'ロ': '🤖',
    'ワ': '🐊', 'ヲ': '👨', 'ン': '🍞'
  }
  return emojiMap[kana.character] || '📝'
}

export const PracticeSheet: React.FC<PracticeSheetProps> = ({ 
  kana, 
  showStrokeOrder = true 
}) => {
  return (
    <div className="w-[210mm] h-[297mm] mx-auto bg-white p-12 print:p-12 shadow-lg">
      <div className="h-full flex flex-col">
        {/* Header section with main character and example */}
        <div className="flex items-start justify-between mb-8">
          {/* Main character with stroke order */}
          <div className="w-40 h-40 border-[3px] border-gray-800 relative">
            {/* Dotted guide lines */}
            <div className="absolute inset-0">
              <div className="absolute top-1/2 left-0 right-0 border-t-2 border-dotted border-gray-300" />
              <div className="absolute top-0 bottom-0 left-1/2 border-l-2 border-dotted border-gray-300" />
            </div>
            
            {/* Character display */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-[120px] text-gray-300">{kana.character}</span>
            </div>
            {showStrokeOrder && (
              <div className="absolute top-2 left-2 text-lg font-bold">
                {kana.strokes.map((_, index) => (
                  <span key={index} className="mr-1">{index + 1}</span>
                ))}
              </div>
            )}
          </div>

          {/* Example word and illustration */}
          <div className="flex flex-col items-center">
            <div className="w-36 h-36 flex items-center justify-center mb-3">
              {kana.example.imagePath ? (
                <img 
                  src={kana.example.imagePath} 
                  alt={kana.example.word}
                  className="max-w-full max-h-full object-contain"
                />
              ) : (
                <div className="text-7xl">{getDefaultEmoji(kana)}</div>
              )}
            </div>
            <div className="text-2xl font-bold">{kana.example.word}</div>
          </div>
        </div>

        {/* Practice grid - 2x2 layout */}
        <div className="flex-1 grid grid-cols-2 gap-8">
          {/* First row with guide characters */}
          {[...Array(2)].map((_, index) => (
            <div key={`guide-${index}`} className="border-[3px] border-gray-800 relative" style={{ height: '45%' }}>
              <div className="absolute inset-0">
                <div className="absolute top-1/2 left-0 right-0 border-t-[3px] border-dotted border-gray-400" />
                <div className="absolute top-0 bottom-0 left-1/2 border-l-[3px] border-dotted border-gray-400" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[200px] text-gray-200">{kana.character}</span>
              </div>
            </div>
          ))}
          
          {/* Second row - empty practice squares */}
          {[...Array(2)].map((_, index) => (
            <div key={`practice-${index}`} className="border-[3px] border-gray-800 relative" style={{ height: '45%' }}>
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