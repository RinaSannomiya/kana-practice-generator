import { Kana } from '@/types'

export const hiraganaData: Kana[] = [
  // あ行
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
    example: { word: 'あめ', reading: 'ame' }
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
    example: { word: 'いちご', reading: 'ichigo' }
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
    example: { word: 'うさぎ', reading: 'usagi' }
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
    example: { word: 'えんぴつ', reading: 'enpitsu' }
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
    example: { word: 'おにぎり', reading: 'onigiri' }
  },
  // か行
  {
    id: 'ka',
    character: 'か',
    type: 'hiragana',
    romaji: 'ka',
    strokes: [
      { id: 1, path: 'M 35 30 Q 35 45, 35 60 Q 35 70, 30 75' },
      { id: 2, path: 'M 45 35 Q 55 35, 65 40 Q 70 45, 65 55 Q 60 60, 50 60' },
      { id: 3, path: 'M 55 50 Q 55 60, 55 70' }
    ],
    example: { word: 'かさ', reading: 'kasa' }
  },
  {
    id: 'ki',
    character: 'き',
    type: 'hiragana',
    romaji: 'ki',
    strokes: [
      { id: 1, path: 'M 30 35 Q 40 35, 60 35' },
      { id: 2, path: 'M 30 50 Q 40 50, 55 50 Q 60 52, 55 60 Q 50 65, 40 65' },
      { id: 3, path: 'M 45 25 Q 45 40, 45 55' },
      { id: 4, path: 'M 45 65 Q 45 70, 45 75' }
    ],
    example: { word: 'きつね', reading: 'kitsune' }
  },
  {
    id: 'ku',
    character: 'く',
    type: 'hiragana',
    romaji: 'ku',
    strokes: [
      { id: 1, path: 'M 55 30 Q 45 45, 35 60 Q 35 65, 40 70 Q 50 75, 60 70' }
    ],
    example: { word: 'くるま', reading: 'kuruma' }
  },
  {
    id: 'ke',
    character: 'け',
    type: 'hiragana',
    romaji: 'ke',
    strokes: [
      { id: 1, path: 'M 35 25 Q 35 40, 35 55 Q 35 65, 30 75' },
      { id: 2, path: 'M 45 35 Q 55 35, 65 40 Q 70 45, 65 55 Q 60 65, 50 70' },
      { id: 3, path: 'M 55 55 Q 55 65, 55 75' }
    ],
    example: { word: 'けいと', reading: 'keito' }
  },
  {
    id: 'ko',
    character: 'こ',
    type: 'hiragana',
    romaji: 'ko',
    strokes: [
      { id: 1, path: 'M 35 40 Q 45 40, 60 40' },
      { id: 2, path: 'M 35 60 Q 40 60, 50 60 Q 60 60, 65 65 Q 65 70, 55 75' }
    ],
    example: { word: 'こま', reading: 'koma' }
  },
  // さ行
  {
    id: 'sa',
    character: 'さ',
    type: 'hiragana',
    romaji: 'sa',
    strokes: [
      { id: 1, path: 'M 30 35 Q 40 35, 60 35' },
      { id: 2, path: 'M 45 25 Q 45 40, 45 55 Q 45 65, 40 70' },
      { id: 3, path: 'M 55 55 Q 55 65, 55 75' }
    ],
    example: { word: 'さくら', reading: 'sakura' }
  },
  {
    id: 'shi',
    character: 'し',
    type: 'hiragana',
    romaji: 'shi',
    strokes: [
      { id: 1, path: 'M 50 30 Q 45 40, 40 55 Q 38 65, 40 70 Q 45 75, 55 70' }
    ],
    example: { word: 'しか', reading: 'shika' }
  },
  {
    id: 'su',
    character: 'す',
    type: 'hiragana',
    romaji: 'su',
    strokes: [
      { id: 1, path: 'M 30 35 Q 40 35, 60 35' },
      { id: 2, path: 'M 45 25 Q 45 40, 45 55 Q 45 60, 40 65 Q 35 70, 40 73 Q 50 75, 60 70' }
    ],
    example: { word: 'すいか', reading: 'suika' }
  },
  {
    id: 'se',
    character: 'せ',
    type: 'hiragana',
    romaji: 'se',
    strokes: [
      { id: 1, path: 'M 30 35 Q 40 30, 50 30' },
      { id: 2, path: 'M 40 30 Q 40 45, 40 60 Q 40 70, 35 75' },
      { id: 3, path: 'M 55 40 Q 60 45, 60 55 Q 60 65, 55 70' }
    ],
    example: { word: 'せみ', reading: 'semi' }
  },
  {
    id: 'so',
    character: 'そ',
    type: 'hiragana',
    romaji: 'so',
    strokes: [
      { id: 1, path: 'M 35 30 Q 40 35, 40 45 Q 38 55, 30 60' },
      { id: 2, path: 'M 50 25 Q 50 40, 45 55 Q 40 65, 45 70 Q 55 75, 65 70' }
    ],
    example: { word: 'そら', reading: 'sora' }
  },
  // た行
  {
    id: 'ta',
    character: 'た',
    type: 'hiragana',
    romaji: 'ta',
    strokes: [
      { id: 1, path: 'M 30 35 Q 40 35, 50 35' },
      { id: 2, path: 'M 40 25 Q 40 40, 40 55 Q 40 65, 35 70' },
      { id: 3, path: 'M 55 40 Q 60 45, 60 55 Q 60 65, 55 70' },
      { id: 4, path: 'M 50 55 Q 55 60, 65 65' }
    ],
    example: { word: 'たいこ', reading: 'taiko' }
  },
  {
    id: 'chi',
    character: 'ち',
    type: 'hiragana',
    romaji: 'chi',
    strokes: [
      { id: 1, path: 'M 30 35 Q 40 35, 60 35' },
      { id: 2, path: 'M 45 25 Q 45 40, 45 55 Q 45 60, 40 65 Q 35 70, 40 73 Q 50 75, 60 70' }
    ],
    example: { word: 'ちょう', reading: 'chou' }
  },
  {
    id: 'tsu',
    character: 'つ',
    type: 'hiragana',
    romaji: 'tsu',
    strokes: [
      { id: 1, path: 'M 35 40 Q 45 35, 55 35 Q 65 35, 70 45 Q 70 55, 60 65 Q 50 70, 40 65' }
    ],
    example: { word: 'つき', reading: 'tsuki' }
  },
  {
    id: 'te',
    character: 'て',
    type: 'hiragana',
    romaji: 'te',
    strokes: [
      { id: 1, path: 'M 30 35 Q 45 35, 65 35' },
      { id: 2, path: 'M 45 30 Q 45 45, 45 60 Q 45 70, 50 75 Q 60 75, 65 70' }
    ],
    example: { word: 'てがみ', reading: 'tegami' }
  },
  {
    id: 'to',
    character: 'と',
    type: 'hiragana',
    romaji: 'to',
    strokes: [
      { id: 1, path: 'M 40 25 Q 40 40, 40 55 Q 40 65, 35 70' },
      { id: 2, path: 'M 55 40 Q 60 50, 55 60 Q 50 65, 40 60' }
    ],
    example: { word: 'とけい', reading: 'tokei' }
  },
  // な行
  {
    id: 'na',
    character: 'な',
    type: 'hiragana',
    romaji: 'na',
    strokes: [
      { id: 1, path: 'M 35 30 Q 35 40, 35 50' },
      { id: 2, path: 'M 30 40 Q 40 35, 50 35 Q 60 35, 65 40' },
      { id: 3, path: 'M 50 40 Q 50 50, 50 60 Q 50 65, 45 70' },
      { id: 4, path: 'M 40 55 Q 45 58, 55 60 Q 65 62, 70 65' }
    ],
    example: { word: 'なす', reading: 'nasu' }
  },
  {
    id: 'ni',
    character: 'に',
    type: 'hiragana',
    romaji: 'ni',
    strokes: [
      { id: 1, path: 'M 35 25 Q 35 40, 35 55 Q 35 65, 30 75' },
      { id: 2, path: 'M 50 40 Q 55 40, 60 40' },
      { id: 3, path: 'M 50 55 Q 55 55, 60 55 Q 65 55, 65 60 Q 65 65, 60 70' }
    ],
    example: { word: 'にじ', reading: 'niji' }
  },
  {
    id: 'nu',
    character: 'ぬ',
    type: 'hiragana',
    romaji: 'nu',
    strokes: [
      { id: 1, path: 'M 35 30 Q 45 30, 55 35 Q 60 40, 55 50 Q 50 55, 40 55 Q 35 55, 35 60 Q 35 65, 40 70 Q 50 75, 60 70' },
      { id: 2, path: 'M 50 45 Q 60 50, 70 55' }
    ],
    example: { word: 'ぬいぐるみ', reading: 'nuigurumi' }
  },
  {
    id: 'ne',
    character: 'ね',
    type: 'hiragana',
    romaji: 'ne',
    strokes: [
      { id: 1, path: 'M 35 30 Q 45 30, 55 35 Q 60 40, 55 50 Q 50 60, 40 65 Q 30 70, 25 65' },
      { id: 2, path: 'M 50 35 Q 50 45, 50 55 Q 50 65, 55 70 Q 60 75, 70 70' }
    ],
    example: { word: 'ねこ', reading: 'neko' }
  },
  {
    id: 'no',
    character: 'の',
    type: 'hiragana',
    romaji: 'no',
    strokes: [
      { id: 1, path: 'M 40 35 Q 50 30, 60 35 Q 65 45, 60 55 Q 50 65, 40 65 Q 30 65, 25 55 Q 25 45, 30 35 Q 40 25, 50 30' }
    ],
    example: { word: 'のり', reading: 'nori' }
  },
  // は行
  {
    id: 'ha',
    character: 'は',
    type: 'hiragana',
    romaji: 'ha',
    strokes: [
      { id: 1, path: 'M 35 25 Q 35 40, 35 55 Q 35 65, 30 75' },
      { id: 2, path: 'M 50 30 Q 50 40, 50 50' },
      { id: 3, path: 'M 45 40 Q 55 35, 65 35 Q 70 35, 70 40 Q 70 50, 65 60 Q 60 65, 50 65' }
    ],
    example: { word: 'はな', reading: 'hana' }
  },
  {
    id: 'hi',
    character: 'ひ',
    type: 'hiragana',
    romaji: 'hi',
    strokes: [
      { id: 1, path: 'M 40 30 Q 35 40, 35 50 Q 35 60, 40 65 Q 50 70, 60 65 Q 65 60, 65 50 Q 65 40, 60 35 Q 50 30, 40 35' }
    ],
    example: { word: 'ひこうき', reading: 'hikouki' }
  },
  {
    id: 'fu',
    character: 'ふ',
    type: 'hiragana',
    romaji: 'fu',
    strokes: [
      { id: 1, path: 'M 35 30 Q 45 25, 55 25 Q 65 25, 70 30' },
      { id: 2, path: 'M 50 30 Q 50 40, 50 50' },
      { id: 3, path: 'M 40 45 Q 45 50, 45 60 Q 45 70, 50 75' },
      { id: 4, path: 'M 55 50 Q 60 55, 60 65 Q 60 70, 55 75' }
    ],
    example: { word: 'ふね', reading: 'fune' }
  },
  {
    id: 'he',
    character: 'へ',
    type: 'hiragana',
    romaji: 'he',
    strokes: [
      { id: 1, path: 'M 35 50 Q 45 40, 55 35 Q 65 40, 70 50' }
    ],
    example: { word: 'へび', reading: 'hebi' }
  },
  {
    id: 'ho',
    character: 'ほ',
    type: 'hiragana',
    romaji: 'ho',
    strokes: [
      { id: 1, path: 'M 35 25 Q 35 40, 35 55 Q 35 65, 30 75' },
      { id: 2, path: 'M 50 30 Q 50 40, 50 50' },
      { id: 3, path: 'M 45 40 Q 55 35, 65 35 Q 70 35, 70 40 Q 70 50, 65 60 Q 60 65, 50 65' },
      { id: 4, path: 'M 50 50 Q 50 60, 50 70' }
    ],
    example: { word: 'ほし', reading: 'hoshi' }
  },
  // ま行
  {
    id: 'ma',
    character: 'ま',
    type: 'hiragana',
    romaji: 'ma',
    strokes: [
      { id: 1, path: 'M 30 35 Q 40 35, 60 35' },
      { id: 2, path: 'M 45 25 Q 45 40, 45 55 Q 45 65, 40 70' },
      { id: 3, path: 'M 50 50 Q 55 55, 60 60 Q 65 65, 65 70' }
    ],
    example: { word: 'まつ', reading: 'matsu' }
  },
  {
    id: 'mi',
    character: 'み',
    type: 'hiragana',
    romaji: 'mi',
    strokes: [
      { id: 1, path: 'M 40 30 Q 40 40, 35 50 Q 30 60, 35 65 Q 45 70, 55 65 Q 60 60, 60 50' },
      { id: 2, path: 'M 50 40 Q 60 45, 70 50' }
    ],
    example: { word: 'みかん', reading: 'mikan' }
  },
  {
    id: 'mu',
    character: 'む',
    type: 'hiragana',
    romaji: 'mu',
    strokes: [
      { id: 1, path: 'M 35 30 Q 35 40, 35 50' },
      { id: 2, path: 'M 30 40 Q 40 35, 50 35 Q 60 35, 65 40 Q 65 50, 60 60 Q 55 65, 45 65 Q 40 65, 40 70 Q 40 75, 50 75' },
      { id: 3, path: 'M 55 55 Q 60 60, 70 65' }
    ],
    example: { word: 'むし', reading: 'mushi' }
  },
  {
    id: 'me',
    character: 'め',
    type: 'hiragana',
    romaji: 'me',
    strokes: [
      { id: 1, path: 'M 35 30 Q 45 30, 55 35 Q 60 40, 55 50 Q 50 60, 40 65 Q 30 70, 25 65' },
      { id: 2, path: 'M 50 45 Q 60 50, 70 55' }
    ],
    example: { word: 'めがね', reading: 'megane' }
  },
  {
    id: 'mo',
    character: 'も',
    type: 'hiragana',
    romaji: 'mo',
    strokes: [
      { id: 1, path: 'M 30 35 Q 40 35, 50 35' },
      { id: 2, path: 'M 40 25 Q 40 40, 40 55 Q 40 65, 35 70' },
      { id: 3, path: 'M 55 40 Q 60 45, 60 55 Q 60 65, 55 70' }
    ],
    example: { word: 'もも', reading: 'momo' }
  },
  // や行
  {
    id: 'ya',
    character: 'や',
    type: 'hiragana',
    romaji: 'ya',
    strokes: [
      { id: 1, path: 'M 30 35 Q 35 40, 35 50 Q 35 60, 30 65' },
      { id: 2, path: 'M 45 30 Q 50 35, 50 45 Q 50 55, 45 65 Q 40 70, 35 70' },
      { id: 3, path: 'M 55 40 Q 60 45, 65 55 Q 70 65, 70 70' }
    ],
    example: { word: 'やま', reading: 'yama' }
  },
  {
    id: 'yu',
    character: 'ゆ',
    type: 'hiragana',
    romaji: 'yu',
    strokes: [
      { id: 1, path: 'M 35 30 Q 45 30, 55 35 Q 60 40, 60 50 Q 60 60, 55 65 Q 45 70, 35 65' },
      { id: 2, path: 'M 50 50 Q 55 55, 65 60 Q 70 65, 70 70' }
    ],
    example: { word: 'ゆき', reading: 'yuki' }
  },
  {
    id: 'yo',
    character: 'よ',
    type: 'hiragana',
    romaji: 'yo',
    strokes: [
      { id: 1, path: 'M 30 35 Q 40 35, 55 35' },
      { id: 2, path: 'M 45 30 Q 45 40, 45 50 Q 45 60, 40 65' },
      { id: 3, path: 'M 55 50 Q 60 55, 65 65 Q 70 70, 70 75' }
    ],
    example: { word: 'よる', reading: 'yoru' }
  },
  // ら行
  {
    id: 'ra',
    character: 'ら',
    type: 'hiragana',
    romaji: 'ra',
    strokes: [
      { id: 1, path: 'M 35 30 Q 40 35, 40 45 Q 40 55, 35 60' },
      { id: 2, path: 'M 50 35 Q 55 40, 55 50 Q 55 60, 50 65 Q 45 70, 50 73 Q 60 75, 70 70' }
    ],
    example: { word: 'らいおん', reading: 'raion' }
  },
  {
    id: 'ri',
    character: 'り',
    type: 'hiragana',
    romaji: 'ri',
    strokes: [
      { id: 1, path: 'M 40 25 Q 40 35, 40 45' },
      { id: 2, path: 'M 55 30 Q 55 40, 55 50 Q 55 60, 50 65 Q 45 70, 50 73 Q 60 75, 70 70' }
    ],
    example: { word: 'りんご', reading: 'ringo' }
  },
  {
    id: 'ru',
    character: 'る',
    type: 'hiragana',
    romaji: 'ru',
    strokes: [
      { id: 1, path: 'M 45 25 Q 50 30, 55 40 Q 60 50, 60 60 Q 60 70, 55 75 Q 45 80, 35 75 Q 30 70, 35 65 Q 45 60, 55 65' }
    ],
    example: { word: 'るすばん', reading: 'rusuban' }
  },
  {
    id: 're',
    character: 'れ',
    type: 'hiragana',
    romaji: 're',
    strokes: [
      { id: 1, path: 'M 35 30 Q 45 30, 55 35 Q 60 40, 55 50 Q 50 60, 40 65 Q 30 70, 25 65' },
      { id: 2, path: 'M 50 35 Q 50 45, 50 55 Q 50 65, 55 70 Q 60 75, 70 70' }
    ],
    example: { word: 'れいぞうこ', reading: 'reizouko' }
  },
  {
    id: 'ro',
    character: 'ろ',
    type: 'hiragana',
    romaji: 'ro',
    strokes: [
      { id: 1, path: 'M 45 25 Q 50 30, 55 40 Q 60 50, 60 60 Q 60 70, 55 75 Q 45 80, 35 75 Q 30 70, 35 65' }
    ],
    example: { word: 'ろうそく', reading: 'rousoku' }
  },
  // わ行
  {
    id: 'wa',
    character: 'わ',
    type: 'hiragana',
    romaji: 'wa',
    strokes: [
      { id: 1, path: 'M 35 30 Q 45 30, 55 35 Q 60 40, 55 50 Q 50 60, 40 65 Q 30 70, 25 65' },
      { id: 2, path: 'M 50 35 Q 50 45, 50 55 Q 50 65, 55 70' }
    ],
    example: { word: 'わに', reading: 'wani' }
  },
  {
    id: 'wo',
    character: 'を',
    type: 'hiragana',
    romaji: 'wo',
    strokes: [
      { id: 1, path: 'M 30 35 Q 40 35, 50 35' },
      { id: 2, path: 'M 40 25 Q 40 40, 40 55' },
      { id: 3, path: 'M 55 40 Q 60 45, 60 55 Q 60 65, 55 70 Q 45 75, 35 70' }
    ],
    example: { word: 'をとこ', reading: 'otoko' }
  },
  {
    id: 'n',
    character: 'ん',
    type: 'hiragana',
    romaji: 'n',
    strokes: [
      { id: 1, path: 'M 35 35 Q 40 30, 50 30 Q 60 30, 65 35 Q 70 40, 65 50 Q 60 60, 50 65 Q 40 70, 30 65' }
    ],
    example: { word: 'みかん', reading: 'mikan' }
  }
]