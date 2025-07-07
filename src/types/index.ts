export interface Kana {
  id: string
  character: string
  type: 'hiragana' | 'katakana'
  romaji: string
  strokes: Stroke[]
  example: {
    word: string
    reading: string
    imagePath?: string
  }
}

export interface Stroke {
  id: number
  path: string
  delay?: number
}

export interface PracticeSheet {
  kana: Kana
  showStrokeOrder: boolean
  practiceRows: number
}