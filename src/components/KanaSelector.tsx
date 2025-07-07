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

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-bold mb-3">ひらがな</h3>
        <div className="grid grid-cols-10 gap-2">
          {hiraganaList.map(kana => (
            <button
              key={kana.id}
              onClick={() => onSelect(kana)}
              className={`
                p-3 text-2xl border-2 rounded-lg transition-all
                ${selectedKana?.id === kana.id 
                  ? 'border-blue-500 bg-blue-50' 
                  : 'border-gray-300 hover:border-gray-400'
                }
              `}
            >
              {kana.character}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-bold mb-3">カタカナ</h3>
        <div className="grid grid-cols-10 gap-2">
          {katakanaList.map(kana => (
            <button
              key={kana.id}
              onClick={() => onSelect(kana)}
              className={`
                p-3 text-2xl border-2 rounded-lg transition-all
                ${selectedKana?.id === kana.id 
                  ? 'border-blue-500 bg-blue-50' 
                  : 'border-gray-300 hover:border-gray-400'
                }
              `}
            >
              {kana.character}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}