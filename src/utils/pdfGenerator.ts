import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'
import { Kana } from '@/types'

export const generateSinglePDF = async (element: HTMLElement, kana: Kana) => {
  const canvas = await html2canvas(element, {
    scale: 2,
    backgroundColor: '#ffffff'
  })
  
  const imgData = canvas.toDataURL('image/png')
  const pdf = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  })
  
  pdf.addImage(imgData, 'PNG', 0, 0, 210, 297)
  pdf.save(`${kana.character}_practice.pdf`)
}

export const generateBatchPDF = async (
  elements: { element: HTMLElement; kana: Kana }[],
  filename: string = 'kana_practice_all.pdf'
) => {
  const pdf = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  })
  
  for (let i = 0; i < elements.length; i++) {
    const { element, kana } = elements[i]
    
    const canvas = await html2canvas(element, {
      scale: 2,
      backgroundColor: '#ffffff'
    })
    
    const imgData = canvas.toDataURL('image/png')
    
    if (i > 0) {
      pdf.addPage()
    }
    
    pdf.addImage(imgData, 'PNG', 0, 0, 210, 297)
  }
  
  pdf.save(filename)
}

export const generateImages = async (
  elements: { element: HTMLElement; kana: Kana }[]
) => {
  for (const { element, kana } of elements) {
    const canvas = await html2canvas(element, {
      scale: 2,
      backgroundColor: '#ffffff'
    })
    
    // Create download link
    const link = document.createElement('a')
    link.download = `${kana.character}_practice.png`
    link.href = canvas.toDataURL()
    link.click()
  }
}