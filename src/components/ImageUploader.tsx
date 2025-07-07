'use client'

import React, { useState, useRef } from 'react'
import { useKana } from '@/contexts/KanaContext'

export const ImageUploader: React.FC = () => {
  const { kanaList, updateKana } = useKana()
  const [uploadMode, setUploadMode] = useState<'single' | 'batch'>('single')
  const [selectedKanaId, setSelectedKanaId] = useState<string>('')
  const fileInputRef = useRef<HTMLInputElement>(null)
  const batchInputRef = useRef<HTMLInputElement>(null)
  
  // 画像ファイル名の規則に基づいてかなを特定
  const findKanaByFileName = (fileName: string): string | null => {
    // ファイル名から拡張子を除去
    const baseName = fileName.replace(/\.[^/.]+$/, '')
    
    // ひらがなパターン: h_a_ahiru
    if (baseName.startsWith('h_')) {
      const parts = baseName.split('_')
      if (parts.length >= 2) {
        const romaji = parts[1]
        const kana = kanaList.find(k => k.type === 'hiragana' && k.romaji === romaji)
        return kana?.id || null
      }
    }
    
    // カタカナパターン: k_a_aisukuri-mu
    if (baseName.startsWith('k_')) {
      const parts = baseName.split('_')
      if (parts.length >= 2) {
        const romaji = parts[1]
        const kana = kanaList.find(k => k.type === 'katakana' && k.romaji === romaji)
        return kana?.id || null
      }
    }
    
    return null
  }
  
  // 個別アップロード
  const handleSingleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file || !selectedKanaId) return
    
    try {
      // 画像をBase64に変換
      const reader = new FileReader()
      reader.onload = (event) => {
        const base64 = event.target?.result as string
        updateKana(selectedKanaId, {
          example: {
            imagePath: base64
          }
        })
        alert('画像をアップロードしました')
      }
      reader.readAsDataURL(file)
    } catch (error) {
      console.error('Upload failed:', error)
      alert('アップロードに失敗しました')
    }
  }
  
  // 一括アップロード
  const handleBatchUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files || files.length === 0) return
    
    let successCount = 0
    let failedFiles: string[] = []
    
    for (const file of Array.from(files)) {
      const kanaId = findKanaByFileName(file.name)
      
      if (kanaId) {
        try {
          // 画像をBase64に変換
          const reader = new FileReader()
          await new Promise<void>((resolve) => {
            reader.onload = (event) => {
              const base64 = event.target?.result as string
              updateKana(kanaId, {
                example: {
                  imagePath: base64
                }
              })
              successCount++
              resolve()
            }
            reader.readAsDataURL(file)
          })
        } catch (error) {
          failedFiles.push(file.name)
        }
      } else {
        failedFiles.push(file.name)
      }
    }
    
    // 結果を表示
    let message = `${successCount}個の画像をアップロードしました。`
    if (failedFiles.length > 0) {
      message += `\n\n以下のファイルは処理できませんでした:\n${failedFiles.join('\n')}`
    }
    alert(message)
  }
  
  const selectedKana = kanaList.find(k => k.id === selectedKanaId)
  
  return (
    <div className="space-y-6">
      {/* モード選択 */}
      <div className="flex gap-4">
        <button
          onClick={() => setUploadMode('single')}
          className={`px-4 py-2 rounded ${
            uploadMode === 'single' ? 'bg-blue-500 text-white' : 'bg-gray-200'
          }`}
        >
          個別アップロード
        </button>
        <button
          onClick={() => setUploadMode('batch')}
          className={`px-4 py-2 rounded ${
            uploadMode === 'batch' ? 'bg-blue-500 text-white' : 'bg-gray-200'
          }`}
        >
          一括アップロード
        </button>
      </div>
      
      {uploadMode === 'single' ? (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">
              文字を選択
            </label>
            <select
              value={selectedKanaId}
              onChange={(e) => setSelectedKanaId(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg"
            >
              <option value="">選択してください</option>
              <optgroup label="ひらがな">
                {kanaList.filter(k => k.type === 'hiragana').map(kana => (
                  <option key={kana.id} value={kana.id}>
                    {kana.character} - {kana.example.word}
                  </option>
                ))}
              </optgroup>
              <optgroup label="カタカナ">
                {kanaList.filter(k => k.type === 'katakana').map(kana => (
                  <option key={kana.id} value={kana.id}>
                    {kana.character} - {kana.example.word}
                  </option>
                ))}
              </optgroup>
            </select>
          </div>
          
          {selectedKana && (
            <div className="flex items-center gap-4">
              <div className="flex-1">
                <p className="text-sm text-gray-600 mb-2">
                  現在の画像: {selectedKana.example.imagePath ? '設定済み' : 'なし'}
                </p>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleSingleUpload}
                  className="hidden"
                />
                <button
                  onClick={() => fileInputRef.current?.click()}
                  disabled={!selectedKanaId}
                  className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 disabled:bg-gray-300"
                >
                  画像を選択
                </button>
              </div>
              
              {selectedKana.example.imagePath && (
                <div className="w-24 h-24 border rounded overflow-hidden">
                  <img
                    src={selectedKana.example.imagePath}
                    alt={selectedKana.example.word}
                    className="w-full h-full object-contain"
                  />
                </div>
              )}
            </div>
          )}
        </div>
      ) : (
        <div className="space-y-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-bold mb-2">ファイル名規則</h3>
            <ul className="text-sm space-y-1">
              <li>ひらがな: h_[ローマ字]_[単語].png (例: h_a_ahiru.png)</li>
              <li>カタカナ: k_[ローマ字]_[単語].png (例: k_a_aisukuri-mu.png)</li>
            </ul>
          </div>
          
          <div>
            <input
              ref={batchInputRef}
              type="file"
              accept="image/*"
              multiple
              onChange={handleBatchUpload}
              className="hidden"
            />
            <button
              onClick={() => batchInputRef.current?.click()}
              className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600"
            >
              画像を一括選択
            </button>
            <p className="text-sm text-gray-600 mt-2">
              複数の画像ファイルを選択できます
            </p>
          </div>
          
          {/* 現在の設定状況 */}
          <div className="mt-6">
            <h3 className="font-bold mb-2">画像設定状況</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="text-sm font-medium mb-1">ひらがな</h4>
                <div className="text-sm">
                  設定済み: {kanaList.filter(k => k.type === 'hiragana' && k.example.imagePath).length} / 
                  {kanaList.filter(k => k.type === 'hiragana').length}
                </div>
              </div>
              <div>
                <h4 className="text-sm font-medium mb-1">カタカナ</h4>
                <div className="text-sm">
                  設定済み: {kanaList.filter(k => k.type === 'katakana' && k.example.imagePath).length} / 
                  {kanaList.filter(k => k.type === 'katakana').length}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}