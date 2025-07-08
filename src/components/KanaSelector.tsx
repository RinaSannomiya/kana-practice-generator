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

  // 五十音順に並び替える関数（縦書き用）
  const arrangeGojuon = (kanaArray: Kana[]) => {
    // 縦書き五十音表の順序（右から左へ表示するため、配列の順序を逆にする）
    const gojuonMap: { [key: string]: [number, number] } = {
      // わ行（配列では最初だが、表示は一番右）
      'wa': [0, 0], 'wo': [0, 4], 'n': [0, 4],
      // ら行
      'ra': [1, 0], 'ri': [1, 1], 'ru': [1, 2], 're': [1, 3], 'ro': [1, 4],
      // や行
      'ya': [2, 0], 'yu': [2, 2], 'yo': [2, 4],
      // ま行
      'ma': [3, 0], 'mi': [3, 1], 'mu': [3, 2], 'me': [3, 3], 'mo': [3, 4],
      // は行
      'ha': [4, 0], 'hi': [4, 1], 'fu': [4, 2], 'he': [4, 3], 'ho': [4, 4],
      // な行
      'na': [5, 0], 'ni': [5, 1], 'nu': [5, 2], 'ne': [5, 3], 'no': [5, 4],
      // た行
      'ta': [6, 0], 'chi': [6, 1], 'tsu': [6, 2], 'te': [6, 3], 'to': [6, 4],
      // さ行
      'sa': [7, 0], 'shi': [7, 1], 'su': [7, 2], 'se': [7, 3], 'so': [7, 4],
      // か行
      'ka': [8, 0], 'ki': [8, 1], 'ku': [8, 2], 'ke': [8, 3], 'ko': [8, 4],
      // あ行（配列では最後だが、表示は一番左）
      'a': [9, 0], 'i': [9, 1], 'u': [9, 2], 'e': [9, 3], 'o': [9, 4]
    }
    
    const result: (Kana | null)[][] = []
    for (let col = 0; col < 10; col++) {
      result[col] = []
      for (let row = 0; row < 5; row++) {
        result[col][row] = null
      }
    }
    
    kanaArray.forEach(kana => {
      const position = gojuonMap[kana.romaji]
      if (position) {
        const [col, row] = position
        result[col][row] = kana
      }
    })
    
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