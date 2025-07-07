import { Kana } from '@/types'

export const katakanaData: Kana[] = [
  // ア行
  {
    id: 'a-kata',
    character: 'ア',
    type: 'katakana',
    romaji: 'a',
    strokes: [
      { id: 1, path: 'M 30 35 Q 40 30, 55 30 Q 65 30, 70 35' },
      { id: 2, path: 'M 50 25 Q 50 40, 50 55 Q 50 65, 45 75' }
    ],
    example: { word: 'アイス', reading: 'aisu' }
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
    example: { word: 'イヌ', reading: 'inu' }
  },
  {
    id: 'u-kata',
    character: 'ウ',
    type: 'katakana',
    romaji: 'u',
    strokes: [
      { id: 1, path: 'M 35 30 Q 45 30, 55 30 Q 65 30, 70 35' },
      { id: 2, path: 'M 50 35 Q 50 50, 50 65' },
      { id: 3, path: 'M 35 65 Q 45 65, 55 65 Q 65 65, 70 70' }
    ],
    example: { word: 'ウシ', reading: 'ushi' }
  },
  {
    id: 'e-kata',
    character: 'エ',
    type: 'katakana',
    romaji: 'e',
    strokes: [
      { id: 1, path: 'M 30 35 Q 45 35, 60 35 Q 70 35, 75 40' },
      { id: 2, path: 'M 50 25 Q 50 40, 50 55 Q 50 65, 50 75' }
    ],
    example: { word: 'エビ', reading: 'ebi' }
  },
  {
    id: 'o-kata',
    character: 'オ',
    type: 'katakana',
    romaji: 'o',
    strokes: [
      { id: 1, path: 'M 30 35 Q 40 35, 50 35 Q 60 35, 65 40' },
      { id: 2, path: 'M 45 25 Q 45 40, 45 55 Q 45 65, 40 70' },
      { id: 3, path: 'M 60 50 Q 65 55, 70 65 Q 72 70, 70 75' }
    ],
    example: { word: 'オニ', reading: 'oni' }
  },
  // カ行
  {
    id: 'ka-kata',
    character: 'カ',
    type: 'katakana',
    romaji: 'ka',
    strokes: [
      { id: 1, path: 'M 35 30 Q 45 35, 55 40 Q 65 45, 70 55' },
      { id: 2, path: 'M 50 25 Q 50 40, 50 55 Q 50 65, 45 75' }
    ],
    example: { word: 'カメラ', reading: 'kamera' }
  },
  {
    id: 'ki-kata',
    character: 'キ',
    type: 'katakana',
    romaji: 'ki',
    strokes: [
      { id: 1, path: 'M 30 35 Q 45 35, 60 35 Q 70 35, 75 40' },
      { id: 2, path: 'M 30 50 Q 45 50, 60 50 Q 70 50, 75 55' },
      { id: 3, path: 'M 50 25 Q 50 40, 50 55 Q 50 65, 50 75' }
    ],
    example: { word: 'キツネ', reading: 'kitsune' }
  },
  {
    id: 'ku-kata',
    character: 'ク',
    type: 'katakana',
    romaji: 'ku',
    strokes: [
      { id: 1, path: 'M 35 30 Q 45 35, 55 40 Q 65 45, 70 55' },
      { id: 2, path: 'M 50 35 Q 50 50, 50 65 Q 50 70, 45 75' }
    ],
    example: { word: 'クマ', reading: 'kuma' }
  },
  {
    id: 'ke-kata',
    character: 'ケ',
    type: 'katakana',
    romaji: 'ke',
    strokes: [
      { id: 1, path: 'M 35 30 Q 45 35, 55 40 Q 65 45, 70 55' },
      { id: 2, path: 'M 50 25 Q 50 40, 50 55 Q 50 65, 50 75' },
      { id: 3, path: 'M 35 65 Q 45 65, 55 65 Q 65 65, 70 70' }
    ],
    example: { word: 'ケーキ', reading: 'keeki' }
  },
  {
    id: 'ko-kata',
    character: 'コ',
    type: 'katakana',
    romaji: 'ko',
    strokes: [
      { id: 1, path: 'M 30 35 Q 45 35, 60 35 Q 70 35, 75 40' },
      { id: 2, path: 'M 30 65 Q 45 65, 60 65 Q 70 65, 75 70' }
    ],
    example: { word: 'コップ', reading: 'koppu' }
  },
  // サ行
  {
    id: 'sa-kata',
    character: 'サ',
    type: 'katakana',
    romaji: 'sa',
    strokes: [
      { id: 1, path: 'M 30 40 Q 40 40, 50 40' },
      { id: 2, path: 'M 40 30 Q 40 45, 40 60 Q 40 70, 35 75' },
      { id: 3, path: 'M 55 35 Q 65 40, 70 50 Q 70 60, 65 70' }
    ],
    example: { word: 'サカナ', reading: 'sakana' }
  },
  {
    id: 'shi-kata',
    character: 'シ',
    type: 'katakana',
    romaji: 'shi',
    strokes: [
      { id: 1, path: 'M 35 35 Q 40 40, 45 50 Q 50 60, 50 70' },
      { id: 2, path: 'M 50 30 Q 50 35, 50 40' },
      { id: 3, path: 'M 65 45 Q 65 50, 65 55' }
    ],
    example: { word: 'シカ', reading: 'shika' }
  },
  {
    id: 'su-kata',
    character: 'ス',
    type: 'katakana',
    romaji: 'su',
    strokes: [
      { id: 1, path: 'M 30 35 Q 45 35, 60 35 Q 70 35, 75 40' },
      { id: 2, path: 'M 50 35 Q 45 50, 35 65 Q 30 70, 35 75 Q 45 75, 55 70 Q 65 65, 70 55' }
    ],
    example: { word: 'スイカ', reading: 'suika' }
  },
  {
    id: 'se-kata',
    character: 'セ',
    type: 'katakana',
    romaji: 'se',
    strokes: [
      { id: 1, path: 'M 30 40 Q 45 40, 60 40 Q 70 40, 75 45' },
      { id: 2, path: 'M 50 25 Q 50 40, 50 55 Q 50 65, 50 75' },
      { id: 3, path: 'M 35 60 Q 40 65, 45 70' }
    ],
    example: { word: 'セミ', reading: 'semi' }
  },
  {
    id: 'so-kata',
    character: 'ソ',
    type: 'katakana',
    romaji: 'so',
    strokes: [
      { id: 1, path: 'M 40 30 Q 35 40, 30 55 Q 28 65, 25 75' },
      { id: 2, path: 'M 60 35 Q 60 40, 60 45' }
    ],
    example: { word: 'ソラ', reading: 'sora' }
  },
  // タ行
  {
    id: 'ta-kata',
    character: 'タ',
    type: 'katakana',
    romaji: 'ta',
    strokes: [
      { id: 1, path: 'M 35 35 Q 45 40, 55 45 Q 65 50, 70 60' },
      { id: 2, path: 'M 50 30 Q 50 45, 50 60 Q 50 70, 45 75' },
      { id: 3, path: 'M 35 55 Q 30 60, 25 70' }
    ],
    example: { word: 'タコ', reading: 'tako' }
  },
  {
    id: 'chi-kata',
    character: 'チ',
    type: 'katakana',
    romaji: 'chi',
    strokes: [
      { id: 1, path: 'M 30 40 Q 45 40, 60 40 Q 70 40, 75 45' },
      { id: 2, path: 'M 50 25 Q 50 40, 50 55' },
      { id: 3, path: 'M 35 55 Q 45 60, 55 65 Q 65 70, 70 75' }
    ],
    example: { word: 'チョウ', reading: 'chou' }
  },
  {
    id: 'tsu-kata',
    character: 'ツ',
    type: 'katakana',
    romaji: 'tsu',
    strokes: [
      { id: 1, path: 'M 35 35 Q 40 40, 45 50' },
      { id: 2, path: 'M 50 30 Q 50 35, 50 40' },
      { id: 3, path: 'M 60 35 Q 65 40, 70 50' },
      { id: 4, path: 'M 30 65 Q 40 65, 50 65 Q 60 65, 70 65' }
    ],
    example: { word: 'ツキ', reading: 'tsuki' }
  },
  {
    id: 'te-kata',
    character: 'テ',
    type: 'katakana',
    romaji: 'te',
    strokes: [
      { id: 1, path: 'M 30 35 Q 45 35, 60 35 Q 70 35, 75 40' },
      { id: 2, path: 'M 50 25 Q 50 40, 50 55 Q 50 65, 50 75' },
      { id: 3, path: 'M 35 55 Q 45 55, 55 55 Q 65 55, 70 60' }
    ],
    example: { word: 'テレビ', reading: 'terebi' }
  },
  {
    id: 'to-kata',
    character: 'ト',
    type: 'katakana',
    romaji: 'to',
    strokes: [
      { id: 1, path: 'M 45 25 Q 45 40, 45 55 Q 45 65, 40 75' },
      { id: 2, path: 'M 55 45 Q 60 50, 65 60 Q 70 65, 70 70' }
    ],
    example: { word: 'トマト', reading: 'tomato' }
  },
  // ナ行
  {
    id: 'na-kata',
    character: 'ナ',
    type: 'katakana',
    romaji: 'na',
    strokes: [
      { id: 1, path: 'M 30 40 Q 45 40, 60 40 Q 70 40, 75 45' },
      { id: 2, path: 'M 50 25 Q 50 40, 50 55 Q 50 65, 45 75' },
      { id: 3, path: 'M 60 60 Q 65 65, 70 70' }
    ],
    example: { word: 'ナス', reading: 'nasu' }
  },
  {
    id: 'ni-kata',
    character: 'ニ',
    type: 'katakana',
    romaji: 'ni',
    strokes: [
      { id: 1, path: 'M 30 40 Q 45 40, 60 40 Q 70 40, 75 45' },
      { id: 2, path: 'M 30 60 Q 45 60, 60 60 Q 70 60, 75 65' }
    ],
    example: { word: 'ニジ', reading: 'niji' }
  },
  {
    id: 'nu-kata',
    character: 'ヌ',
    type: 'katakana',
    romaji: 'nu',
    strokes: [
      { id: 1, path: 'M 35 30 Q 45 35, 55 40 Q 65 45, 70 55' },
      { id: 2, path: 'M 50 35 Q 45 50, 35 65 Q 30 70, 35 75 Q 45 75, 55 70 Q 65 65, 70 55' }
    ],
    example: { word: 'ヌイグルミ', reading: 'nuigurumi' }
  },
  {
    id: 'ne-kata',
    character: 'ネ',
    type: 'katakana',
    romaji: 'ne',
    strokes: [
      { id: 1, path: 'M 35 25 Q 35 40, 35 55 Q 35 65, 30 75' },
      { id: 2, path: 'M 30 40 Q 40 35, 50 35 Q 60 35, 65 40 Q 70 45, 65 55 Q 60 65, 50 70' },
      { id: 3, path: 'M 50 55 Q 60 60, 70 65' },
      { id: 4, path: 'M 50 70 Q 50 73, 50 75' }
    ],
    example: { word: 'ネコ', reading: 'neko' }
  },
  {
    id: 'no-kata',
    character: 'ノ',
    type: 'katakana',
    romaji: 'no',
    strokes: [
      { id: 1, path: 'M 45 25 Q 40 40, 35 55 Q 30 65, 25 75' }
    ],
    example: { word: 'ノート', reading: 'nooto' }
  },
  // ハ行
  {
    id: 'ha-kata',
    character: 'ハ',
    type: 'katakana',
    romaji: 'ha',
    strokes: [
      { id: 1, path: 'M 40 30 Q 35 45, 30 60 Q 28 70, 25 75' },
      { id: 2, path: 'M 60 30 Q 65 45, 70 60 Q 72 70, 75 75' }
    ],
    example: { word: 'ハナ', reading: 'hana' }
  },
  {
    id: 'hi-kata',
    character: 'ヒ',
    type: 'katakana',
    romaji: 'hi',
    strokes: [
      { id: 1, path: 'M 35 35 Q 35 45, 35 55 Q 35 65, 40 70 Q 50 75, 60 70 Q 65 65, 65 55' },
      { id: 2, path: 'M 45 40 Q 55 40, 65 40' }
    ],
    example: { word: 'ヒコウキ', reading: 'hikouki' }
  },
  {
    id: 'fu-kata',
    character: 'フ',
    type: 'katakana',
    romaji: 'fu',
    strokes: [
      { id: 1, path: 'M 30 35 Q 45 35, 60 35 Q 70 35, 75 40' },
      { id: 2, path: 'M 50 40 Q 45 50, 40 60 Q 35 70, 35 75' }
    ],
    example: { word: 'フネ', reading: 'fune' }
  },
  {
    id: 'he-kata',
    character: 'ヘ',
    type: 'katakana',
    romaji: 'he',
    strokes: [
      { id: 1, path: 'M 35 50 Q 45 40, 55 35 Q 65 40, 70 50' }
    ],
    example: { word: 'ヘビ', reading: 'hebi' }
  },
  {
    id: 'ho-kata',
    character: 'ホ',
    type: 'katakana',
    romaji: 'ho',
    strokes: [
      { id: 1, path: 'M 30 35 Q 45 35, 60 35 Q 70 35, 75 40' },
      { id: 2, path: 'M 50 25 Q 50 40, 50 55 Q 50 65, 50 75' },
      { id: 3, path: 'M 35 50 Q 40 50, 45 50' },
      { id: 4, path: 'M 55 50 Q 60 50, 65 50' },
      { id: 5, path: 'M 35 65 Q 45 65, 55 65 Q 65 65, 70 70' }
    ],
    example: { word: 'ホシ', reading: 'hoshi' }
  },
  // マ行
  {
    id: 'ma-kata',
    character: 'マ',
    type: 'katakana',
    romaji: 'ma',
    strokes: [
      { id: 1, path: 'M 30 35 Q 45 35, 60 35 Q 70 35, 75 40' },
      { id: 2, path: 'M 35 40 Q 40 50, 45 60 Q 50 70, 50 75' },
      { id: 3, path: 'M 65 40 Q 60 50, 55 60 Q 50 70, 50 75' }
    ],
    example: { word: 'マツ', reading: 'matsu' }
  },
  {
    id: 'mi-kata',
    character: 'ミ',
    type: 'katakana',
    romaji: 'mi',
    strokes: [
      { id: 1, path: 'M 30 35 Q 45 35, 60 35 Q 70 35, 75 40' },
      { id: 2, path: 'M 30 50 Q 45 50, 60 50 Q 70 50, 75 55' },
      { id: 3, path: 'M 30 65 Q 45 65, 60 65 Q 70 65, 75 70' }
    ],
    example: { word: 'ミカン', reading: 'mikan' }
  },
  {
    id: 'mu-kata',
    character: 'ム',
    type: 'katakana',
    romaji: 'mu',
    strokes: [
      { id: 1, path: 'M 35 30 Q 35 45, 35 60 Q 35 70, 40 75 Q 50 75, 60 70 Q 65 65, 65 55 Q 65 45, 65 35' },
      { id: 2, path: 'M 50 25 Q 50 35, 50 45' }
    ],
    example: { word: 'ムシ', reading: 'mushi' }
  },
  {
    id: 'me-kata',
    character: 'メ',
    type: 'katakana',
    romaji: 'me',
    strokes: [
      { id: 1, path: 'M 40 30 Q 35 40, 30 55 Q 28 65, 25 75' },
      { id: 2, path: 'M 60 35 Q 55 45, 45 60 Q 40 70, 45 75 Q 55 75, 65 70 Q 70 65, 70 55' }
    ],
    example: { word: 'メガネ', reading: 'megane' }
  },
  {
    id: 'mo-kata',
    character: 'モ',
    type: 'katakana',
    romaji: 'mo',
    strokes: [
      { id: 1, path: 'M 30 40 Q 45 40, 60 40 Q 70 40, 75 45' },
      { id: 2, path: 'M 50 30 Q 50 45, 50 60 Q 50 70, 50 75' },
      { id: 3, path: 'M 35 55 Q 45 55, 55 55 Q 65 55, 70 60' }
    ],
    example: { word: 'モモ', reading: 'momo' }
  },
  // ヤ行
  {
    id: 'ya-kata',
    character: 'ヤ',
    type: 'katakana',
    romaji: 'ya',
    strokes: [
      { id: 1, path: 'M 35 35 Q 45 40, 50 50 Q 50 60, 45 70' },
      { id: 2, path: 'M 50 25 Q 50 35, 50 45' },
      { id: 3, path: 'M 65 40 Q 60 50, 55 60 Q 50 70, 50 75' }
    ],
    example: { word: 'ヤマ', reading: 'yama' }
  },
  {
    id: 'yu-kata',
    character: 'ユ',
    type: 'katakana',
    romaji: 'yu',
    strokes: [
      { id: 1, path: 'M 30 40 Q 45 40, 60 40 Q 70 40, 75 45' },
      { id: 2, path: 'M 30 65 Q 45 65, 60 65 Q 70 65, 75 70' },
      { id: 3, path: 'M 65 40 Q 65 50, 65 60 Q 65 65, 65 70' }
    ],
    example: { word: 'ユキ', reading: 'yuki' }
  },
  {
    id: 'yo-kata',
    character: 'ヨ',
    type: 'katakana',
    romaji: 'yo',
    strokes: [
      { id: 1, path: 'M 30 35 Q 45 35, 60 35 Q 70 35, 75 40' },
      { id: 2, path: 'M 30 50 Q 45 50, 60 50 Q 70 50, 75 55' },
      { id: 3, path: 'M 30 65 Q 45 65, 60 65 Q 70 65, 75 70' },
      { id: 4, path: 'M 60 35 Q 60 50, 60 65 Q 60 70, 60 75' }
    ],
    example: { word: 'ヨル', reading: 'yoru' }
  },
  // ラ行
  {
    id: 'ra-kata',
    character: 'ラ',
    type: 'katakana',
    romaji: 'ra',
    strokes: [
      { id: 1, path: 'M 30 35 Q 45 35, 60 35 Q 70 35, 75 40' },
      { id: 2, path: 'M 50 40 Q 45 50, 35 65 Q 30 70, 35 75 Q 45 75, 55 70' }
    ],
    example: { word: 'ライオン', reading: 'raion' }
  },
  {
    id: 'ri-kata',
    character: 'リ',
    type: 'katakana',
    romaji: 'ri',
    strokes: [
      { id: 1, path: 'M 40 25 Q 40 40, 40 55 Q 40 65, 35 75' },
      { id: 2, path: 'M 60 25 Q 60 40, 60 55 Q 60 65, 65 75' }
    ],
    example: { word: 'リンゴ', reading: 'ringo' }
  },
  {
    id: 'ru-kata',
    character: 'ル',
    type: 'katakana',
    romaji: 'ru',
    strokes: [
      { id: 1, path: 'M 35 25 Q 35 40, 35 55 Q 35 65, 35 75' },
      { id: 2, path: 'M 65 25 Q 65 40, 65 55 Q 65 70, 60 75 Q 50 80, 40 75 Q 35 70, 35 65' }
    ],
    example: { word: 'ルビー', reading: 'rubii' }
  },
  {
    id: 're-kata',
    character: 'レ',
    type: 'katakana',
    romaji: 're',
    strokes: [
      { id: 1, path: 'M 45 25 Q 45 40, 45 55 Q 45 65, 45 75' },
      { id: 2, path: 'M 45 65 Q 55 65, 65 65 Q 70 65, 75 70' }
    ],
    example: { word: 'レモン', reading: 'remon' }
  },
  {
    id: 'ro-kata',
    character: 'ロ',
    type: 'katakana',
    romaji: 'ro',
    strokes: [
      { id: 1, path: 'M 35 35 Q 35 45, 35 55 Q 35 65, 35 70' },
      { id: 2, path: 'M 35 35 Q 45 35, 55 35 Q 65 35, 65 35' },
      { id: 3, path: 'M 65 35 Q 65 45, 65 55 Q 65 65, 65 70' },
      { id: 4, path: 'M 35 70 Q 45 70, 55 70 Q 65 70, 65 70' }
    ],
    example: { word: 'ロボット', reading: 'robotto' }
  },
  // ワ行
  {
    id: 'wa-kata',
    character: 'ワ',
    type: 'katakana',
    romaji: 'wa',
    strokes: [
      { id: 1, path: 'M 30 35 Q 45 35, 60 35 Q 70 35, 75 40' },
      { id: 2, path: 'M 50 35 Q 50 50, 50 65 Q 50 75, 45 80 Q 35 80, 25 75' }
    ],
    example: { word: 'ワニ', reading: 'wani' }
  },
  {
    id: 'wo-kata',
    character: 'ヲ',
    type: 'katakana',
    romaji: 'wo',
    strokes: [
      { id: 1, path: 'M 30 35 Q 45 35, 60 35 Q 70 35, 75 40' },
      { id: 2, path: 'M 35 50 Q 40 50, 45 50' },
      { id: 3, path: 'M 50 40 Q 45 55, 35 70 Q 30 75, 35 80 Q 45 80, 55 75 Q 65 70, 70 60' }
    ],
    example: { word: 'ヲトコ', reading: 'otoko' }
  },
  {
    id: 'n-kata',
    character: 'ン',
    type: 'katakana',
    romaji: 'n',
    strokes: [
      { id: 1, path: 'M 40 30 Q 35 40, 30 55 Q 28 65, 25 75' },
      { id: 2, path: 'M 60 40 Q 65 50, 70 65 Q 72 70, 70 75' }
    ],
    example: { word: 'パン', reading: 'pan' }
  }
]