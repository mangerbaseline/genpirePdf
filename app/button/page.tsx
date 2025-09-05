'use client'
import { generatePdffromTechpack } from "@/components/pdfgenerator"
const downloadpdf = async() => {
  await generatePdffromTechpack(); // your function should return a jsPDF / pdf-lib / pdfkit client output

 
};
export default function PdfDownload(){
  return(  <main>
        <div>
            <button onClick={downloadpdf}>
                Download pdf
            </button>
        </div>
    </main>
  )
}