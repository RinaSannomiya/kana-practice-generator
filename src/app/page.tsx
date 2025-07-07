'use client'

import React, { useState } from 'react'
import { KanaSelector } from '@/components/KanaSelector'
import { PracticeSheet } from '@/components/PracticeSheet'
import { BatchGenerator } from '@/components/BatchGenerator'
import { getAllKana } from '@/data/kanaData'
import { Kana } from '@/types'

export default function Home() {
  const [selectedKana, setSelectedKana] = useState<Kana | null>(null)
  const [showStrokeOrder, setShowStrokeOrder] = useState(true)
  const [mode, setMode] = useState<'single' | 'batch'>('single')
  const kanaList = getAllKana()

  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">
          かな練習プリント生成
        </h1>

        <div className="no-print">
          {/* Mode selector */}
          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-lg shadow-md p-1 inline-flex">
              <button
                onClick={() => setMode('single')}
                className={`px-6 py-2 rounded-md transition-all ${
                  mode === 'single'
                    ? 'bg-blue-500 text-white'
                    : 'bg-transparent text-gray-700 hover:bg-gray-100'
                }`}
              >
                個別生成
              </button>
              <button
                onClick={() => setMode('batch')}
                className={`px-6 py-2 rounded-md transition-all ${
                  mode === 'batch'
                    ? 'bg-blue-500 text-white'
                    : 'bg-transparent text-gray-700 hover:bg-gray-100'
                }`}
              >
                一括生成
              </button>
            </div>
          </div>

          {mode === 'single' ? (
            <>
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-xl font-bold mb-4">文字を選択</h2>
                <KanaSelector
                  kanaList={kanaList}
                  selectedKana={selectedKana}
                  onSelect={setSelectedKana}
                />
              </div>

              {selectedKana && (
                <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">プレビュー</h2>
                    <div className="flex gap-4 items-center">
                      <label className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={showStrokeOrder}
                          onChange={(e) => setShowStrokeOrder(e.target.checked)}
                          className="w-4 h-4"
                        />
                        <span>筆順を表示</span>
                      </label>
                      <button
                        onClick={handlePrint}
                        className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                      >
                        印刷
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold mb-4">一括生成</h2>
              <BatchGenerator kanaList={kanaList} />
            </div>
          )}
        </div>

        {mode === 'single' && selectedKana && (
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <PracticeSheet kana={selectedKana} showStrokeOrder={showStrokeOrder} />
          </div>
        )}
      </div>
    </div>
  )
}