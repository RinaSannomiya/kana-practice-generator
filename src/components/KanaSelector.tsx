'use client'

import React from 'react'
import { Kana } from '@/types'

interface KanaSelectorProps {
  kanaList: Kana[]
  selectedKana: Kana | null
  onSelect: (kana: Kana) => void
}

export const KanaSelector: React.FC<KanaSelectorProps> = ({
  kanaList,
  selectedKana,
  onSelect
}) => {
  const hiraganaList = kanaList.filter(k => k.type === 'hiragana')
  const katakanaList = kanaList.filter(k => k.type === 'katakana')

  // 五十音順に並び替える関数
  const arrangeGojuon = (kanaArray: Kana[]) => {
    const gojuonOrder = [
      'a', 'ka', 'sa', 'ta', 'na', 'ha', 'ma', 'ya', 'ra', 'wa',
      'i', 'ki', 'shi', 'chi', 'ni', 'hi', 'mi', 'ri',
      'u', 'ku', 'su', 'tsu', 'nu', 'fu', 'mu', 'yu', 'ru',
      'e', 'ke', 'se', 'te', 'ne', 'he', 'me', 're',
      'o', 'ko', 'so', 'to', 'no', 'ho', 'mo', 'yo', 'ro', 'wo', 'n'
    ]
    
    const result: (Kana | null)[][] = []
    for (let col = 0; col < 10; col++) {
      result[col] = []
      for (let row = 0; row < 5; row++) {
        result[col][row] = null
      }
    }
    
    kanaArray.forEach(kana => {
      const index = gojuonOrder.indexOf(kana.romaji)
      if (index !== -1) {
        const col = Math.floor(index / 5)
        const row = index % 5
        if (col < 10 && row < 5) {
          result[col][row] = kana
        }
      }
    })
    
    // 特殊な位置の文字
    const n = kanaArray.find(k => k.romaji === 'n')
    if (n) result[9][4] = n
    
    return result
  }

  const hiraganaGrid = arrangeGojuon(hiraganaList)
  const katakanaGrid = arrangeGojuon(katakanaList)

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-bold mb-3">ひらがな</h3>
        <div className="inline-block">
          <div className="flex flex-row-reverse gap-2">
            {hiraganaGrid.map((col, colIndex) => (
              <div key={colIndex} className="flex flex-col gap-2">
                {col.map((kana, rowIndex) => (
                  <button
                    key={`${colIndex}-${rowIndex}`}
                    onClick={() => kana && onSelect(kana)}
                    disabled={!kana}
                    className={`
                      w-12 h-12 text-2xl border-2 rounded-lg transition-all
                      ${!kana 
                        ? 'invisible' 
                        : selectedKana?.id === kana.id 
                          ? 'border-blue-500 bg-blue-50' 
                          : 'border-gray-300 hover:border-gray-400'
                      }
                    `}
                  >
                    {kana?.character || ''}
                  </button>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-bold mb-3">カタカナ</h3>
        <div className="inline-block">
          <div className="flex flex-row-reverse gap-2">
            {katakanaGrid.map((col, colIndex) => (
              <div key={colIndex} className="flex flex-col gap-2">
                {col.map((kana, rowIndex) => (
                  <button
                    key={`${colIndex}-${rowIndex}`}
                    onClick={() => kana && onSelect(kana)}
                    disabled={!kana}
                    className={`
                      w-12 h-12 text-2xl border-2 rounded-lg transition-all
                      ${!kana 
                        ? 'invisible' 
                        : selectedKana?.id === kana.id 
                          ? 'border-blue-500 bg-blue-50' 
                          : 'border-gray-300 hover:border-gray-400'
                      }
                    `}
                  >
                    {kana?.character || ''}
                  </button>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}