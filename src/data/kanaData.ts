import { Kana } from '@/types'

export const hiraganaData: Kana[] = [
  {
    id: 'a',
    character: 'あ',
    type: 'hiragana',
    romaji: 'a',
    strokes: [
      { id: 1, path: 'M 40 30 Q 45 40, 35 55 Q 30 65, 25 70' },
      { id: 2, path: 'M 55 25 Q 57 35, 58 45 Q 58 55, 55 65 Q 52 72, 45 75' },
      { id: 3, path: 'M 35 40 Q 45 42, 55 45 Q 65 47, 70 50' }
    ],
    example: {
      word: 'あめ',
      reading: 'ame',
      imagePath: '/images/ame.png'
    }
  },
  {
    id: 'i',
    character: 'い',
    type: 'hiragana',
    romaji: 'i',
    strokes: [
      { id: 1, path: 'M 35 25 Q 35 35, 35 50 Q 35 65, 30 75' },
      { id: 2, path: 'M 55 30 Q 60 40, 62 55 Q 60 65, 55 70' }
    ],
    example: {
      word: 'いちご',
      reading: 'ichigo',
      imagePath: '/images/ichigo.png'
    }
  },
  {
    id: 'u',
    character: 'う',
    type: 'hiragana',
    romaji: 'u',
    strokes: [
      { id: 1, path: 'M 40 25 Q 50 25, 60 30' },
      { id: 2, path: 'M 50 35 Q 45 45, 40 55 Q 38 65, 40 70 Q 45 73, 55 72 Q 65 70, 70 65' }
    ],
    example: {
      word: 'うさぎ',
      reading: 'usagi',
      imagePath: '/images/usagi.png'
    }
  },
  {
    id: 'e',
    character: 'え',
    type: 'hiragana',
    romaji: 'e',
    strokes: [
      { id: 1, path: 'M 40 30 Q 50 30, 60 35' },
      { id: 2, path: 'M 50 25 Q 50 40, 45 55 Q 40 65, 35 70 Q 33 72, 35 73 Q 40 75, 50 73 Q 60 70, 65 65' }
    ],
    example: {
      word: 'えんぴつ',
      reading: 'enpitsu',
      imagePath: '/images/enpitsu.png'
    }
  },
  {
    id: 'o',
    character: 'お',
    type: 'hiragana',
    romaji: 'o',
    strokes: [
      { id: 1, path: 'M 35 35 Q 45 30, 55 30 Q 60 32, 60 38' },
      { id: 2, path: 'M 45 40 Q 45 50, 45 60 Q 45 68, 40 72' },
      { id: 3, path: 'M 30 55 Q 35 58, 45 60 Q 55 62, 65 65 Q 70 67, 70 70' }
    ],
    example: {
      word: 'おにぎり',
      reading: 'onigiri',
      imagePath: '/images/onigiri.png'
    }
  }
]

export const katakanaData: Kana[] = [
  {
    id: 'a-kata',
    character: 'ア',
    type: 'katakana',
    romaji: 'a',
    strokes: [
      { id: 1, path: 'M 30 35 Q 40 30, 55 30 Q 65 30, 70 35' },
      { id: 2, path: 'M 50 25 Q 50 40, 50 55 Q 50 65, 45 75' }
    ],
    example: {
      word: 'アイス',
      reading: 'aisu',
      imagePath: '/images/ice.png'
    }
  },
  {
    id: 'i-kata',
    character: 'イ',
    type: 'katakana',
    romaji: 'i',
    strokes: [
      { id: 1, path: 'M 35 25 Q 35 40, 32 60 Q 30 70, 25 75' },
      { id: 2, path: 'M 55 30 Q 60 40, 65 55 Q 68 65, 70 75' }
    ],
    example: {
      word: 'イヌ',
      reading: 'inu',
      imagePath: '/images/dog.png'
    }
  }
]

export const getAllKana = (): Kana[] => {
  return [...hiraganaData, ...katakanaData]
}