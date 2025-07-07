'use client'

import React, { useState } from 'react'
import { useKana } from '@/contexts/KanaContext'

export const KanaEditor: React.FC = () => {
  const { kanaList, updateKana, resetToDefault, exportToCSV, importFromCSV } = useKana()
  const [editingId, setEditingId] = useState<string | null>(null)
  const [editWord, setEditWord] = useState('')
  const [editImage, setEditImage] = useState('')
  const [filterType, setFilterType] = useState<'all' | 'hiragana' | 'katakana'>('all')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredKana = kanaList.filter(kana => {
    if (filterType !== 'all' && kana.type !== filterType) return false
    if (searchQuery && !kana.character.includes(searchQuery) && !kana.example.word.includes(searchQuery)) return false
    return true
  })

  const startEdit = (kana: any) => {
    setEditingId(kana.id)
    setEditWord(kana.example.word)
    setEditImage(kana.example.imagePath || '')
  }

  const saveEdit = () => {
    if (editingId) {
      updateKana(editingId, {
        example: {
          word: editWord,
          reading: editWord, // 簡略化のため
          imagePath: editImage || undefined
        }
      })
      setEditingId(null)
    }
  }

  const cancelEdit = () => {
    setEditingId(null)
    setEditWord('')
    setEditImage('')
  }

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        const csvData = event.target?.result as string
        importFromCSV(csvData)
      }
      reader.readAsText(file)
    }
  }

  const downloadTemplate = () => {
    const templateContent = [
      ['文字', 'タイプ', 'ローマ字', '用例単語', '読み方', '画像パス'],
      ['あ', 'hiragana', 'a', 'あめ', 'ame', ''],
      ['い', 'hiragana', 'i', 'いちご', 'ichigo', ''],
      ['ア', 'katakana', 'a', 'アイス', 'aisu', '']
    ].map(row => row.join(',')).join('\n')

    const blob = new Blob(['\ufeff' + templateContent], { type: 'text/csv;charset=utf-8;' })
    const link = document.createElement('a')
    link.href = URL.createObjectURL(blob)
    link.download = 'kana_template.csv'
    link.click()
  }

  return (
    <div className="space-y-6">
      {/* Controls */}
      <div className="flex flex-wrap gap-4 items-center">
        <div className="flex gap-2">
          <button
            onClick={() => setFilterType('all')}
            className={`px-4 py-2 rounded ${filterType === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            すべて
          </button>
          <button
            onClick={() => setFilterType('hiragana')}
            className={`px-4 py-2 rounded ${filterType === 'hiragana' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            ひらがな
          </button>
          <button
            onClick={() => setFilterType('katakana')}
            className={`px-4 py-2 rounded ${filterType === 'katakana' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            カタカナ
          </button>
        </div>
        
        <input
          type="text"
          placeholder="文字や単語で検索..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="px-4 py-2 border rounded-lg"
        />
        
        <div className="flex gap-2 ml-auto">
          <button
            onClick={downloadTemplate}
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
          >
            テンプレートCSV
          </button>
          <label className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 cursor-pointer">
            CSVアップロード
            <input
              type="file"
              accept=".csv"
              onChange={handleFileUpload}
              className="hidden"
            />
          </label>
          <button
            onClick={exportToCSV}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            CSVエクスポート
          </button>
          <button
            onClick={resetToDefault}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            初期値に戻す
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2 text-left">文字</th>
              <th className="border p-2 text-left">タイプ</th>
              <th className="border p-2 text-left">用例単語</th>
              <th className="border p-2 text-left">画像</th>
              <th className="border p-2 text-left">操作</th>
            </tr>
          </thead>
          <tbody>
            {filteredKana.map(kana => (
              <tr key={kana.id} className="hover:bg-gray-50">
                <td className="border p-2 text-2xl">{kana.character}</td>
                <td className="border p-2">{kana.type}</td>
                <td className="border p-2">
                  {editingId === kana.id ? (
                    <input
                      type="text"
                      value={editWord}
                      onChange={(e) => setEditWord(e.target.value)}
                      className="w-full px-2 py-1 border rounded"
                    />
                  ) : (
                    kana.example.word
                  )}
                </td>
                <td className="border p-2">
                  {editingId === kana.id ? (
                    <input
                      type="text"
                      value={editImage}
                      onChange={(e) => setEditImage(e.target.value)}
                      placeholder="画像URL（オプション）"
                      className="w-full px-2 py-1 border rounded"
                    />
                  ) : (
                    <div className="flex items-center gap-2">
                      {kana.example.imagePath ? (
                        <>
                          <span className="text-green-600">✓</span>
                          <span className="text-sm text-gray-600">{kana.example.imagePath}</span>
                        </>
                      ) : (
                        <span className="text-gray-400">なし</span>
                      )}
                    </div>
                  )}
                </td>
                <td className="border p-2">
                  {editingId === kana.id ? (
                    <div className="flex gap-2">
                      <button
                        onClick={saveEdit}
                        className="px-3 py-1 bg-green-500 text-white rounded text-sm hover:bg-green-600"
                      >
                        保存
                      </button>
                      <button
                        onClick={cancelEdit}
                        className="px-3 py-1 bg-gray-500 text-white rounded text-sm hover:bg-gray-600"
                      >
                        キャンセル
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => startEdit(kana)}
                      className="px-3 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600"
                    >
                      編集
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}