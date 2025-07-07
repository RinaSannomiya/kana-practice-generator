import { hiraganaData } from './hiraganaData'
import { katakanaData } from './katakanaData'

export { hiraganaData, katakanaData }

export const getAllKana = () => {
  return [...hiraganaData, ...katakanaData]
}