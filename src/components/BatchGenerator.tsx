'use client'

import React, { useState, useRef } from 'react'
import { Kana } from '@/types'
import { PracticeSheet } from './PracticeSheet'
import { generateBatchPDF, generateImages } from '@/utils/pdfGenerator'

interface BatchGeneratorProps {
  kanaList: Kana[]
}

export const BatchGenerator: React.FC<BatchGeneratorProps> = ({ kanaList }) => {
  const [selectedKana, setSelectedKana] = useState<Set<string>>(new Set())
  const [isGenerating, setIsGenerating] = useState(false)
  const [showStrokeOrder, setShowStrokeOrder] = useState(true)
  const sheetsRef = useRef<HTMLDivElement>(null)
  
  const hiraganaList = kanaList.filter(k => k.type === 'hiragana')
  const katakanaList = kanaList.filter(k => k.type === 'katakana')
  
  const toggleKana = (id: string) => {
    const newSet = new Set(selectedKana)
    if (newSet.has(id)) {
      newSet.delete(id)
    } else {
      newSet.add(id)
    }
    setSelectedKana(newSet)
  }
  
  const selectAll = (type: 'hiragana' | 'katakana') => {
    const targetList = type === 'hiragana' ? hiraganaList : katakanaList
    const newSet = new Set(selectedKana)
    targetList.forEach(kana => newSet.add(kana.id))
    setSelectedKana(newSet)
  }
  
  const clearAll = (type: 'hiragana' | 'katakana') => {
    const targetList = type === 'hiragana' ? hiraganaList : katakanaList
    const newSet = new Set(selectedKana)
    targetList.forEach(kana => newSet.delete(kana.id))
    setSelectedKana(newSet)
  }
  
  const generatePDF = async () => {
    if (selectedKana.size === 0) {
      alert('文字を選択してください')
      return
    }
    
    setIsGenerating(true)
    
    try {
      const elements: { element: HTMLElement; kana: Kana }[] = []
      const selectedKanaList = kanaList.filter(k => selectedKana.has(k.id))
      
      // Create temporary container for rendering
      const container = document.createElement('div')
      container.style.position = 'absolute'
      container.style.left = '-9999px'
      document.body.appendChild(container)
      
      for (const kana of selectedKanaList) {
        const wrapper = document.createElement('div')
        container.appendChild(wrapper)
        
        // Render React component to DOM
        const { createRoot } = await import('react-dom/client')
        const root = createRoot(wrapper)
        
        await new Promise<void>((resolve) => {
          root.render(
            <PracticeSheet kana={kana} showStrokeOrder={showStrokeOrder} />
          )
          setTimeout(resolve, 100) // Wait for render
        })
        
        elements.push({ element: wrapper.firstChild as HTMLElement, kana })
      }
      
      await generateBatchPDF(elements, 'kana_practice_sheets.pdf')
      
      // Cleanup
      document.body.removeChild(container)
    } catch (error) {
      console.error('PDF generation failed:', error)
      alert('PDF生成に失敗しました')
    } finally {
      setIsGenerating(false)
    }
  }
  
  const generateJPEGs = async () => {
    if (selectedKana.size === 0) {
      alert('文字を選択してください')
      return
    }
    
    setIsGenerating(true)
    
    try {
      const elements: { element: HTMLElement; kana: Kana }[] = []
      const selectedKanaList = kanaList.filter(k => selectedKana.has(k.id))
      
      // Create temporary container for rendering
      const container = document.createElement('div')
      container.style.position = 'absolute'
      container.style.left = '-9999px'
      document.body.appendChild(container)
      
      for (const kana of selectedKanaList) {
        const wrapper = document.createElement('div')
        container.appendChild(wrapper)
        
        // Render React component to DOM
        const { createRoot } = await import('react-dom/client')
        const root = createRoot(wrapper)
        
        await new Promise<void>((resolve) => {
          root.render(
            <PracticeSheet kana={kana} showStrokeOrder={showStrokeOrder} />
          )
          setTimeout(resolve, 100) // Wait for render
        })
        
        elements.push({ element: wrapper.firstChild as HTMLElement, kana })
      }
      
      await generateImages(elements)
      
      // Cleanup
      document.body.removeChild(container)
    } catch (error) {
      console.error('Image generation failed:', error)
      alert('画像生成に失敗しました')
    } finally {
      setIsGenerating(false)
    }
  }
  
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4 mb-4">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={showStrokeOrder}
            onChange={(e) => setShowStrokeOrder(e.target.checked)}
            className="w-4 h-4"
          />
          <span>筆順を表示</span>
        </label>
      </div>
      
      {/* Hiragana section */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-bold">ひらがな</h3>
          <div className="flex gap-2">
            <button
              onClick={() => selectAll('hiragana')}
              className="text-sm px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
            >
              すべて選択
            </button>
            <button
              onClick={() => clearAll('hiragana')}
              className="text-sm px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
            >
              選択解除
            </button>
          </div>
        </div>
        <div className="grid grid-cols-10 gap-2">
          {hiraganaList.map(kana => (
            <button
              key={kana.id}
              onClick={() => toggleKana(kana.id)}
              className={`
                p-3 text-2xl border-2 rounded-lg transition-all
                ${selectedKana.has(kana.id)
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
      
      {/* Katakana section */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-bold">カタカナ</h3>
          <div className="flex gap-2">
            <button
              onClick={() => selectAll('katakana')}
              className="text-sm px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
            >
              すべて選択
            </button>
            <button
              onClick={() => clearAll('katakana')}
              className="text-sm px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
            >
              選択解除
            </button>
          </div>
        </div>
        <div className="grid grid-cols-10 gap-2">
          {katakanaList.map(kana => (
            <button
              key={kana.id}
              onClick={() => toggleKana(kana.id)}
              className={`
                p-3 text-2xl border-2 rounded-lg transition-all
                ${selectedKana.has(kana.id)
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
      
      {/* Action buttons */}
      <div className="flex gap-4 justify-center mt-8">
        <button
          onClick={generatePDF}
          disabled={isGenerating || selectedKana.size === 0}
          className={`
            px-8 py-3 rounded-lg font-bold transition-all
            ${isGenerating || selectedKana.size === 0
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-blue-500 text-white hover:bg-blue-600'
            }
          `}
        >
          {isGenerating ? '生成中...' : `PDFで一括生成 (${selectedKana.size}文字)`}
        </button>
        
        <button
          onClick={generateJPEGs}
          disabled={isGenerating || selectedKana.size === 0}
          className={`
            px-8 py-3 rounded-lg font-bold transition-all
            ${isGenerating || selectedKana.size === 0
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-green-500 text-white hover:bg-green-600'
            }
          `}
        >
          {isGenerating ? '生成中...' : `画像で一括生成 (${selectedKana.size}文字)`}
        </button>
      </div>
      
      {/* Hidden container for preview sheets */}
      <div ref={sheetsRef} className="hidden" />
    </div>
  )
}