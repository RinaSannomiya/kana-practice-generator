'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import { Kana } from '@/types'
import { hiraganaData as defaultHiragana } from '@/data/hiraganaData'
import { katakanaData as defaultKatakana } from '@/data/katakanaData'

interface KanaContextType {
  kanaList: Kana[]
  updateKana: (id: string, updates: Partial<Kana>) => void
  updateMultipleKana: (updates: { id: string; word: string; imagePath?: string }[]) => void
  resetToDefault: () => void
  exportToCSV: () => void
  importFromCSV: (csvData: string) => void
}

const KanaContext = createContext<KanaContextType | undefined>(undefined)

export const useKana = () => {
  const context = useContext(KanaContext)
  if (!context) {
    throw new Error('useKana must be used within KanaProvider')
  }
  return context
}

export const KanaProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [kanaList, setKanaList] = useState<Kana[]>([])

  useEffect(() => {
    // Load from localStorage or use default
    const savedData = localStorage.getItem('kanaData')
    if (savedData) {
      setKanaList(JSON.parse(savedData))
    } else {
      setKanaList([...defaultHiragana, ...defaultKatakana])
    }
  }, [])

  useEffect(() => {
    // Save to localStorage whenever kanaList changes
    if (kanaList.length > 0) {
      localStorage.setItem('kanaData', JSON.stringify(kanaList))
    }
  }, [kanaList])

  const updateKana = (id: string, updates: Partial<Kana>) => {
    setKanaList(prev => prev.map(kana => 
      kana.id === id 
        ? { ...kana, ...updates, example: { ...kana.example, ...updates.example } }
        : kana
    ))
  }

  const updateMultipleKana = (updates: { id: string; word: string; imagePath?: string }[]) => {
    setKanaList(prev => {
      const updateMap = new Map(updates.map(u => [u.id, u]))
      return prev.map(kana => {
        const update = updateMap.get(kana.id)
        if (update) {
          return {
            ...kana,
            example: {
              ...kana.example,
              word: update.word,
              imagePath: update.imagePath || kana.example.imagePath
            }
          }
        }
        return kana
      })
    })
  }

  const resetToDefault = () => {
    setKanaList([...defaultHiragana, ...defaultKatakana])
    localStorage.removeItem('kanaData')
  }

  const exportToCSV = () => {
    const csvContent = [
      ['文字', 'タイプ', 'ローマ字', '用例単語', '読み方', '画像パス'],
      ...kanaList.map(kana => [
        kana.character,
        kana.type,
        kana.romaji,
        kana.example.word,
        kana.example.reading,
        kana.example.imagePath || ''
      ])
    ].map(row => row.join(',')).join('\n')

    const blob = new Blob(['\ufeff' + csvContent], { type: 'text/csv;charset=utf-8;' })
    const link = document.createElement('a')
    link.href = URL.createObjectURL(blob)
    link.download = 'kana_data.csv'
    link.click()
  }

  const importFromCSV = (csvData: string) => {
    const lines = csvData.trim().split('\n')
    const headers = lines[0].split(',')
    
    if (headers.length < 6) {
      alert('CSVフォーマットが正しくありません')
      return
    }

    const updates: { id: string; word: string; imagePath?: string }[] = []

    for (let i = 1; i < lines.length; i++) {
      const values = lines[i].split(',')
      const character = values[0]
      const word = values[3]
      const imagePath = values[5]

      const kana = kanaList.find(k => k.character === character)
      if (kana) {
        updates.push({
          id: kana.id,
          word: word,
          imagePath: imagePath || undefined
        })
      }
    }

    updateMultipleKana(updates)
  }

  return (
    <KanaContext.Provider value={{
      kanaList,
      updateKana,
      updateMultipleKana,
      resetToDefault,
      exportToCSV,
      importFromCSV
    }}>
      {children}
    </KanaContext.Provider>
  )
}