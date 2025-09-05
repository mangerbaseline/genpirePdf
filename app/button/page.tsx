'use client'
import { generatePdffromTechpack } from "@/components/pdfgenerator"
const downloadpdf = async() => {
  await generatePdffromTechpack(); // your function should return a jsPDF / pdf-lib / pdfkit client output

  // If your function gives `jsPDF` instance:
//   doc.save("report.pdf"); // directly downloads

  // OR if your function returns a Blob/Uint8Array:
  // const blob = new Blob([doc], { type: "application/pdf" });
  // const url = URL.createObjectURL(blob);
  // const a = document.createElement("a");
  // a.href = url;
  // a.download = "report.pdf";
  // a.click();
  // URL.revokeObjectURL(url);
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