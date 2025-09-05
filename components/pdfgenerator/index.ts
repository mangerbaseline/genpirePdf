import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";



export const generatePdffromTechpack = async () => {
  const page1 = document.createElement("div");
  const page2 = document.createElement("div");
  const page3 = document.createElement("div");

  // Basic styles for PDF pages
  [page1, page2, page3].forEach((page) => {
    page.style.width = "1000px";
    page.style.padding = "20px";
    page.style.backgroundColor = "white";
    page.style.position = "fixed";
    page.style.left = "-10000px";
    // page.style.height="1123px"
  });

  //   page1.innerHTML = `
  //    <div class="max-w-6xl mx-auto bg-white p-6 shadow-lg border border-[#001F54]">
  //         <header class="grid grid-cols-3 gap-1 pb-3 mb-6 text-xs font-semibold uppercase">
  //             <div class="border border-[#001F54] p-2">BRAND: <span class="font-normal normal-case">THE BRAND NAME</span>
  //             </div>
  //             <div class="border border-[#001F54] p-2">DESIGNER: <span class="font-normal normal-case">CLIENT NAME
  //                     HERE</span></div>
  //             <div class="border border-[#001F54] p-2">DESCRIPTION: <span class="font-normal normal-case">WOMENS
  //                     JACKET</span></div>
  //             <div class="border border-[#001F54] p-2">DATE: 12/10/25</div>
  //             <div class="border border-[#001F54] p-2">SIZE RANGE & [SAMPLE SIZE]: <span class="font-normal normal-case">CLIENT NAME
  //                     HERE</span></div>
  //             <div class="border border-[#001F54] p-2">SIZE RANGE & [SAMPLE SIZE]:<span class="font-normal normal-case">CLIENT NAME
  //                     HERE</span></div>
  //             <div class="border border-[#001F54] p-2">SIZE RANGE & [SAMPLE SIZE]: <span class="font-normal normal-case">CLIENT NAME
  //                     HERE</span></div>
  //             <div class="border border-[#001F54] p-2">SIZE RANGE & [SAMPLE SIZE]: <span class="font-normal normal-case">CLIENT NAME
  //                     HERE</span></div>
  //             <div class="border border-[#001F54] p-2">SIZE RANGE & [SAMPLE SIZE]: <span class="font-normal normal-case">CLIENT NAME
  //                     HERE</span></div>
  //         </header>

  //         <section class="grid grid-cols-10 mb-6 border-2 border-[#001F54]">
  //             <div class="col-span-3  border-r-2 border-[#001F54]">
  //                 <h3 class="font-semibold mb-2 text-xs uppercase border-[#001F54] border-b-2 tracking-wide p-2">FABRIC
  //                     SWATCH</h3>
  //                 <div class="flex justify-center">
  //                     <div class="border shadow-lg w-full">
  //                         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc9APxkj0xClmrU3PpMZglHQkx446nQPG6lA&s"
  //                             alt="Fabric Swatch" class=" object-cover w-full">
  //                     </div>
  //                 </div>
  //             </div>
  //             <div class="col-span-7">
  //                 <h3 class="font-semibold mb-2 text-xs uppercase tracking-wide border-[#001F54] border-b-2 p-2">SKETCH
  //                 </h3>
  //                 <div class="flex space-x-6 justify-center">
  //                     <div class=" p-2 shadow w-full">
  //                         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc9APxkj0xClmrU3PpMZglHQkx446nQPG6lA&s"
  //                             alt="Jacket Front" class=" object-contain w-full">
  //                     </div>
  //                     <div class=" p-2 shadow w-full">
  //                         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc9APxkj0xClmrU3PpMZglHQkx446nQPG6lA&s"
  //                             alt="Jacket Back" class=" object-contain w-full">
  //                     </div>
  //                 </div>
  //             </div>
  //         </section>
  //            <!-- Bill of Materials (BOM) -->
  //         <div class="mb-6">
  //             <div class="flex justify-start items-center bg-[#001F54] text-white ">
  //                 <p class="text-xl font-bold pl-4 py-1">Bill of Materials (BOM)</p>
  //             </div>
  //             <div class="border border-t-0 overflow-x-auto">
  //                 ${
  //                   materials && materials.length > 0
  //                     ? `
  //                 <table class="min-w-full text-sm">
  //                     <thead class="bg-gray-100">
  //                         <tr>
  //                             <th class="text-left py-2 px-4 font-semibold">Component</th>
  //                             <th class="text-left py-2 px-4 font-semibold">Material</th>
  //                             <th class="text-left py-2 px-4 font-semibold">Specification</th>
  //                             <th class="text-left py-2 px-4 font-semibold">Qty</th>
  //                             <th class="text-left py-2 px-4 font-semibold">Unit Cost</th>
  //                             <th class="text-left py-2 px-4 font-semibold">Notes</th>
  //                         </tr>
  //                     </thead>
  //                     <tbody>
  //                         ${materials
  //                           .map(
  //                             (material: any) => `
  //                         <tr class="border-b">
  //                             <td class="py-2 px-4">${material.component || ""}</td>
  //                             <td class="py-2 px-4">${material.material || ""}</td>
  //                             <td class="py-2 px-4">${material.specification || ""}</td>
  //                             <td class="py-2 px-4">${material.quantityPerUnit || ""}</td>
  //                             <td class="py-2 px-4">${material.unitCost || ""}</td>
  //                             <td class="py-2 px-4">${material.notes || ""}</td>
  //                         </tr>
  //                         `
  //                           )
  //                           .join("")}
  //                     </tbody>
  //                 </table>
  //                 `
  //                     : `<p class="text-gray-500 p-4">No materials specified.</p>`
  //                 }
  //             </div>
  //         </div>
  //     </div>
  // `; 
// ✅ JSON Data
const techPackData = {
  title: "Running Shoe Tech Pack",
  productDetails: {
    description: "A lightweight, breathable running shoe designed for comfort and performance.",
    notes: "Reinforced stitching at stress points. Waterproof upper mesh.",
    category: "Footwear / Sports",
    marketAgeRange: "18–35 years"
  },
  measurementsAndTolerance: [
    { measurement: "Length", value: "28", unit: "cm", tolerance: "±0.5cm" },
    { measurement: "Width", value: "10", unit: "cm", tolerance: "±0.2cm" },
    { measurement: "Height", value: "12", unit: "cm", tolerance: "±0.3cm" }
  ],
  packaging: {
    packagingType: "Box",
    materialSpec: "Recycled Cardboard",
    closureType: "Magnetic Flap",
    artworkFileReference: "artwork_v1.ai",
    innerPackaging: "Tissue Wrap",
    barcodeLabelPlacement: "Bottom-right corner"
  },
  colorways: {
    primaryColors: [
      { name: "Navy Blue", hex: "#001F54" },
      { name: "White", hex: "#FFFFFF" }
    ],
    accentColors: [
      { name: "Orange", hex: "#FF5733" },
      { name: "Gray", hex: "#C0C0C0" }
    ]
  },
  qualityStandards: "Meets ISO 9001:2015 standards. Tested for durability and comfort.",
  sizes: {
    note: "Increment of 0.5cm for each size up.",
    availableSizes: ["US 7", "US 8", "US 9", "US 10", "US 11"]
  },
  logo: "/favicon.png"
};

// ✅ Insert into page1

page1 .innerHTML = `
  <div class="p-2">
    <div class="border-2 border-[#001F54] border-solid relative p-4 min-h-[1123px] min-w-[794px]">
      <div class="bg-white border-b-4 border-[#001F54] text-center mb-4">
        <h1 class="text-2xl font-bold py-3">Running Shoe Tech Pack</h1>
      </div>

      <!-- Product Details Grid -->
      <div>
        <h1 class="text-xl font-bold pl-4 py-6 bg-[#001F54] text-[#fff]">Product Details</h1>
        <div class="grid grid-cols-2 gap-x-10 border-b-2 border-[#001F54] pb-4 p-3">
          <div class="border-b-2 border-gray-300 pb-2">
            <p class="font-bold text-sm text-gray-800">Product Description</p>
            <p class="text-gray-700 text-sm">A lightweight, breathable running shoe designed for comfort and performance.</p>
          </div>
          <div class="border-b-2 border-gray-300 pb-2">
            <p class="font-bold text-sm text-gray-800">Product Notes</p>
            <p class="text-gray-700 text-sm">Reinforced stitching at stress points. Waterproof upper mesh.</p>
          </div>
          <div class="pt-2">
            <p class="font-bold text-sm text-gray-800">Product Category</p>
            <p class="text-gray-700 text-sm">Footwear / Sports</p>
          </div>
          <div class="pt-2">
            <p class="font-bold text-sm text-gray-800">Intended Market Age Range</p>
            <p class="text-gray-700 text-sm">18–35 years</p>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-2 gap-x-4 pt-4">
        <!-- Left Column -->
        <div>
          <!-- Measurements & Tolerance -->
          <div class="mb-6">
            <div class="flex justify-start items-center bg-[#001F54] h-[40px]">
              <p class="text-xl font-bold pl-4 pb-4 text-[#fff]">Measurements & Tolerance</p>
            </div>
            <div class="border border-t-0 overflow-x-auto">
              <table class="min-w-full text-sm">
                <thead class="bg-gray-100">
                  <tr>
                    <th class="text-left py-2 px-4 font-semibold">Measurement</th>
                    <th class="text-left py-2 px-4 font-semibold">Value</th>
                    <th class="text-left py-2 px-4 font-semibold">Unit</th>
                    <th class="text-left py-2 px-4 font-semibold">Tolerance</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="border-b">
                    <td class="py-2 pr-2 text-center">Length</td>
                    <td class="py-2 pr-2 text-center">28</td>
                    <td class="py-2 pr-2 text-center">cm</td>
                    <td class="py-2 pr-2 text-center">±0.5cm</td>
                  </tr>
                  <tr class="border-b">
                    <td class="py-2 pr-2 text-center">Width</td>
                    <td class="py-2 pr-2 text-center">10</td>
                    <td class="py-2 pr-2 text-center">cm</td>
                    <td class="py-2 pr-2 text-center">±0.2cm</td>
                  </tr>
                  <tr class="border-b">
                    <td class="py-2 pr-2 text-center">Height</td>
                    <td class="py-2 pr-2 text-center">12</td>
                    <td class="py-2 pr-2 text-center">cm</td>
                    <td class="py-2 pr-2 text-center">±0.3cm</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <!-- Packaging -->
          

        <!-- Right Column -->
     
  <!-- Colorways -->
 
 
<div class="mb-6">
            <div class="flex justify-start items-center bg-[#001F54] h-[40px]">
              <p class="text-xl font-bold pl-4 pb-4 text-[#fff]">Packaging</p>
            </div>
            <div class="border border-t-0 p-4 text-sm">
  <ul class="list-disc list-inside ">
    <li><strong>Packaging Type:</strong> Box</li>
    <li><strong>Material Spec:</strong> Recycled Cardboard</li>
    <li><strong>Closure Type:</strong> Magnetic Flap</li>
    <li><strong>Artwork File Reference:</strong> artwork_v1.ai</li>
    <li><strong>Inner Packaging:</strong> Tissue Wrap</li>
    <li><strong>Barcode & Label Placement:</strong> Bottom-right corner</li>
  </ul>
</div>
          </div>
        </div>



 <div class="mb-6 grid grid-cols-2">
    <!-- Heading bar -->
    <div class="flex justify-start items-center bg-[#001F54] h-[40px]">
      <p class="text-xl font-bold pl-4 pb-4 text-[#fff]">Colorways</p>
    </div>

    <!-- First block -->
    <div class="border border-t-0 p-4 space-y-3">
      <div>
        <h3 class="font-semibold text-gray-700">Primary Colors</h3>
        <div class="flex flex-wrap items-center gap-4 mt-1">
          <div class="flex items-center gap-2">
            <span class="w-4 h-4 mt-4 rounded-full border flex-shrink-0" style="background-color:#001F54;"></span>
            <span class="text-sm">Navy Blue (#001F54)</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="w-4 h-4 mt-4 rounded-full border flex-shrink-0" style="background-color:#FFFFFF;"></span>
            <span class="text-sm">White (#FFFFFF)</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Second block -->
    <div class="border border-t-0 p-4 space-y-3">
      <div>
        <h3 class="font-semibold text-gray-700">Secondary Colors</h3>
        <div class="flex flex-wrap items-center gap-4 mt-1">
          <div class="flex items-center gap-2">
            <span class="w-4 h-4 mt-4 rounded-full border flex-shrink-0" style="background-color:#001F54;"></span>
            <span class="text-sm">Navy Blue (#001F54)</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="w-4 h-4 mt-4 rounded-full border flex-shrink-0" style="background-color:#FFFFFF;"></span>
            <span class="text-sm">White (#FFFFFF)</span>
          </div>
        </div>
      </div>
    </div>

  </div>
</div> 

        <!-- Quality Standards -->
          <div class="mb-6">
            <div class="flex justify-start items-center bg-[#001F54] h-[40px]">
              <p class="text-xl font-bold pl-4 pb-4 text-[#fff] ">Quality Standards</p>
            </div>
            <div class="border border-t-0 p-4 text-sm">
              <p>Meets ISO 9001:2015 standards. Tested for durability and comfort.</p>
            </div>
          </div>

          <!-- Sizes -->
          <div class="mb-6">
            <div class="flex justify-start items-center bg-[#001F54] h-[40px]">
              <p class="text-xl font-bold pl-4 pb-4 text-[#fff]">Sizes</p>
            </div>
            <div class="border border-t-0 p-4 text-sm">
              <p>Increment of 0.5cm for each size up.</p>
              <div class="mt-2 font-semibold">US 7, US 8, US 9, US 10, US 11</div>
            </div>
          </div>
        </div>
      </div>

      <div class="absolute bottom-4 right-4 h-12 w-12">
        <img src="/favicon.png" alt="Logo" class="h-full w-full object-contain" />
      </div>
    </div>
  </div>
`;

page2 .innerHTML = `
 <div class="p-4">
  <div class="border-2 border-[#001F54] border-solid relative p-4 min-h-[1123px]">

    <!-- Product Photos Section -->
    <div class="mt-8">
    <div class="text-xl font-bold pl-4 py-1 bg-[#001F54] text-white mb-4 h-[40px]>
      <h1 class="pb-4">Product Photos</h1>
      </div>
      <div class="flex gap-4 mt-4">
        <!-- Left info box -->
        <div class="rounded-[12px] border border-black bg-[#f2aa83] w-[150px] p-4 flex items-center justify-center text-center">
          <p>Add text where relevant directly from the tech-specs</p>
        </div>

        <!-- Images -->
        <div class="flex gap-4 bg-[#f6f2ef] p-4 flex-1 justify-center">
          <div class="rounded-lg bg-white p-2 flex items-center justify-center">
            <img class="w-[200px] h-[200px] object-cover" src="/favicon.ico" alt="Front" />
          </div>
          <div class="rounded-lg bg-white p-2 flex items-center justify-center">
            <img class="w-[200px] h-[200px] object-cover" src="/favicon.ico" alt="Back" />
          </div>
          <div class="rounded-lg bg-white p-2 flex items-center justify-center">
            <img class="w-[200px] h-[200px] object-cover" src="/favicon.ico" alt="Side" />
          </div>
        </div>
      </div>
    </div>

    <!-- Sketches and Measurements Section -->
    <div class="mt-8">
    <div class="text-xl font-bold pl-4 py-1 bg-[#001F54] text-white mb-4">
      <h1 class="pb-4">Sketches and Measurements</h1>
      </div>
      <div class="flex gap-4 mt-4">
        <!-- Left info box -->
        <div class="rounded-[12px] border border-black bg-[#f2aa83] w-[150px] p-4 flex items-center justify-center text-center">
          <p>Add text where relevant directly from the tech-specs</p>
        </div>

        <!-- Images -->
        <div class="flex gap-4 bg-[#f6f2ef] p-4 flex-1 justify-center">
          <div class="rounded-lg bg-white p-2 flex items-center justify-center">
            <img class="w-[200px] h-[200px] object-cover" src="/favicon.ico" alt="Sketch 1" />
          </div>
          <div class="rounded-lg bg-white p-2 flex items-center justify-center">
            <img class="w-[200px] h-[200px] object-cover" src="/favicon.ico" alt="Sketch 2" />
          </div>
          <div class="rounded-lg bg-white p-2 flex items-center justify-center">
            <img class="w-[200px] h-[200px] object-cover" src="/favicon.ico" alt="Sketch 3" />
          </div>
        </div>
      </div>
    </div>

     <div class="mt-8">
    <div class="text-xl font-bold pl-4 py-1 bg-[#001F54] text-white mb-4">
      <h1 class="pb-4">Technical Specification View</h1>
      </div>
      <div class="flex gap-4 mt-4">
        <!-- Left info box -->
        <div class="rounded-[12px] border border-black bg-[#f2aa83] w-[150px] p-4 flex items-center justify-center text-center">
          <p>Add text where relevant directly from the tech-specs</p>
        </div>

        <!-- Images -->
        <div class="flex gap-4 bg-[#f6f2ef] p-4 flex-1 justify-center">
          <div class="rounded-lg bg-white p-2 flex items-center justify-center">
            <img class="w-auto h-[200px] object-cover" src="/favicon.ico" alt="Sketch 1" />
          </div>
        </div>
      </div>
    </div>

     <div class="mt-8">
    <div class="text-xl font-bold pl-4 py-1 bg-[#001F54] text-white mb-4">
      <h1 class="pb-4">Construction View</h1>
      </div>
      <div class="flex gap-4 mt-4">
        <!-- Left info box -->
        <div class="rounded-[12px] border border-black bg-[#f2aa83] w-[150px] p-4 flex items-center justify-center text-center">
          <p>Add text where relevant directly from the tech-specs</p>
        </div>

        <!-- Images -->
        <div class="flex gap-4 bg-[#f6f2ef] p-4 flex-1 justify-center">
          <div class="rounded-lg bg-white p-2 flex items-center justify-center">
            <img class="w-auto h-[200px] object-cover" src="/favicon.ico" alt="Sketch 1" />
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom logo -->
    <div class="absolute bottom-4 right-4 h-12 w-12">
      <img src="/favicon.png" alt="Logo" class="h-full w-full object-contain" />
    </div>
  </div>
</div>
`
page3.innerHTML=`
 <div class="p-4">
   <div class="border-2 border-[#001F54] border-solid relative p-4 min-h-[1123px]">
<div class="grid grid-cols-1 gap-4 p-4 w-full">
  <div class="w-full">
    <!-- Bill of Materials (BOM) -->
    <div class="border border-gray-300 rounded-lg overflow-x-auto w-full">
      
      <!-- Header -->
      <div class="flex items-center bg-[#001F54] h-12 px-4 w-full">
        <p class="text-xl font-bold text-white">Bill of Materials (BOM)</p>
      </div>
      
      <!-- Table Wrapper -->
      <div class="w-full overflow-x-auto">
        <table class="min-w-full text-sm w-full border-collapse">
          <thead class="bg-gray-100">
            <tr>
              <th class="text-left py-2 px-4 font-semibold border-b">Components</th>
              <th class="text-left py-2 px-4 font-semibold border-b">Materials</th>
              <th class="text-left py-2 px-4 font-semibold border-b">Specification</th>
              <th class="text-left py-2 px-4 font-semibold border-b">Quantity</th>
              <th class="text-left py-2 px-4 font-semibold border-b">Unit cost</th>
              <th class="text-left py-2 px-4 font-semibold border-b">Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b text-center">
              <td class="py-2 px-2">Body</td>
              <td class="py-2 px-2">Cotton Canvas</td>
              <td class="py-2 px-2">12 oz heavyweight</td>
              <td class="py-2 px-2">05m2</td>
              <td class="py-2 px-2">3.00 USD/m2</td>
              <td class="py-2 px-2">Durable and sustainable</td>
            </tr>
            <tr class="border-b text-center">
              <td class="py-2 px-2">Body</td>
              <td class="py-2 px-2">Cotton Canvas</td>
              <td class="py-2 px-2">12 oz heavyweight</td>
              <td class="py-2 px-2">05m2</td>
              <td class="py-2 px-2">3.00 USD/m2</td>
              <td class="py-2 px-2">Durable and sustainable</td>
            </tr>
            <tr class="border-b text-center">
              <td class="py-2 px-2">Body</td>
              <td class="py-2 px-2">Cotton Canvas</td>
              <td class="py-2 px-2">12 oz heavyweight</td>
              <td class="py-2 px-2">05m2</td>
              <td class="py-2 px-2">3.00 USD/m2</td>
              <td class="py-2 px-2">Durable and sustainable</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>


<!-- cost -->
<div class="grid grid-cols-2 gap-4 p-4">

  <!-- Production Cost -->
  <div class="border border-gray-300 rounded-lg p-4 space-y-3">
    <div class="bg-[#001F54]  flex items-center px-4 rounded-t h-[40px]">
      <p class="text-white pb-4 font-bold text-lg">Production Cost</p>
    </div>
    <ul class="list-disc list-inside text-sm space-y-1">
      <li><strong>Packaging:</strong> $2.50 per unit</li>
      <li><strong>Labor per Unit:</strong> $3.00</li>
      <li><strong>Order Quantity:</strong> 500 units</li>
      <li><strong>Quality Control:</strong> $1.00 per unit</li>
      <li><strong>Overhead:</strong> $0.75 per unit</li>
    </ul>
  </div>

  <!-- Sample Cost -->
  <div class="border border-gray-300 rounded-lg p-4 space-y-3">
    <div class="bg-[#001F54] h-[40px] flex items-center px-4 rounded-t">
      <p class="text-white font-bold pb-4 text-lg">Sample Cost</p>
    </div>
    <ul class="list-disc list-inside text-sm space-y-1">
      <li><strong>Labor:</strong> $50</li>
      <li><strong>Overhead:</strong> $20</li>
      <li><strong>Shipping:</strong> $15</li>
      <li><strong>Materials:</strong> $30</li>
      <li><strong>Tooling Setup:</strong> $100</li>
    </ul>
  </div>

  <!-- Compliance Cost -->
  <div class="border border-gray-300 rounded-lg p-4 space-y-3">
    <div class="bg-[#001F54] h-[40px] flex items-center px-4 rounded-t">
      <p class="text-white font-bold pb-4 text-lg">Compliance Cost</p>
    </div>
    <ul class="list-disc list-inside text-sm space-y-1">
      <li><strong>Testing:</strong> $200</li>
      <li><strong>Labeling:</strong> $50</li>
      <li><strong>Certification:</strong> $300</li>
      <li><strong>Documentation:</strong> $100</li>
    </ul>
  </div>

  <!-- Logistics Cost -->
  <div class="border border-gray-300 rounded-lg  p-4 space-y-3">
    <div class="bg-[#001F54] h-[40px] flex items-center px-4 rounded-t">
      <p class="text-white font-bold pb-4 text-lg">Logistics Cost</p>
    </div>
    <ul class="list-disc list-inside text-sm space-y-1">
      <li><strong>Warehousing:</strong> $1.50/unit</li>
      <li><strong>Domestic Shipping:</strong> $2.00/unit</li>
      <li><strong>Insurance:</strong> 1.5%</li>
      <li><strong>Customs Duties:</strong> 5%</li>
      <li><strong>International Shipping:</strong> $5/unit</li>
    </ul>
  </div>

  <!-- Pricing Strategy -->
  <div class="border border-gray-300 rounded-lg p-4 space-y-3 col-span-2">
    <div class="bg-[#001F54] h-[40px] flex items-center px-4 rounded-t">
      <p class="text-white font-bold pb-4 text-lg">Pricing Strategy</p>
    </div>
    <ul class="list-disc list-inside text-sm space-y-1">
      <li><strong>Retail Markup:</strong> 40%</li>
      <li><strong>Wholesale Markup:</strong> 25%</li>
    </ul>
  </div>

  <!-- Income Estimation -->
  <div class="border border-gray-300 rounded-lg p-4 space-y-3 col-span-2">
    <div class="bg-[#001F54] h-[40px] flex items-center px-4 rounded-t">
      <p class="text-white font-bold pb-4 text-lg">Income Estimation</p>
    </div>
    <ul class="list-disc list-inside text-sm space-y-1">
      <li><strong>Monthly Units:</strong> 1000</li>
      <li><strong>Growth Rate:</strong> 5%</li>
      <li><strong>Seasonality Factor:</strong> 1.2</li>
      <li><strong>Market Penetration:</strong> 10%</li>
    </ul>
  </div>

  <!-- Total Estimated Cost -->
  <div class="border border-gray-300 rounded-lg p-4 space-y-3 col-span-2">
    <div class="bg-[#001F54] h-[40px] flex items-center px-4 rounded-t">
      <p class="text-white font-bold pb-4 text-lg">Total Estimated Cost</p>
    </div>
    <p class="text-sm">This is a combined estimate of production, logistics, compliance, and sampling costs. Actual costs may vary.</p>
  </div>

</div>

<div class="grid grid-cols-2 gap-4 p-4">

  <!-- Bulk Production 1000 Units -->
  <div class="border border-gray-300 rounded-lg p-4 space-y-3">
    <div class="bg-[#001F54] h-[40px] flex items-center px-4 rounded-t">
      <p class="text-white font-bold pb-4 text-lg">Bulk Production (1000 Units)</p>
    </div>
    <ul class="list-disc list-inside text-sm space-y-1">
      <li><strong>Material Cost:</strong> $3000 - $4000</li>
      <li><strong>Total Cost for 1000 Units:</strong> $6200 - $8800</li>
      <li><strong>Unit Cost Breakdown:</strong> $6.20 - $8.80 per unit</li>
      <li><strong>Economies of Scale Note:</strong> Bulk production benefits from volume discounts, significantly lowering per-unit cost compared to sampling.</li>
      <li><strong>Quality & Compliance:</strong> $400 - $600</li>
    </ul>
  </div>

  <!-- Sample Creation -->
  <div class="border border-gray-300 rounded-lg p-4 space-y-3">
    <div class="bg-[#001F54] h-[40px] flex items-center px-4 rounded-t">
      <p class="text-white font-bold pb-4 text-lg">Sample Creation</p>
    </div>
    <ul class="list-disc list-inside text-sm space-y-1">
      <li><strong>Notes:</strong> Sample creation cost is typically higher per unit due to small batch sizes, international logistics, and development fees.</li>
      <li><strong>Sample Cost:</strong> $110 - $160</li>
      <li><strong>Material Cost:</strong> $20 - $30</li>
      <li><strong>Shipping & Logistics:</strong> $10 - $20</li>
    </ul>
  </div>

  <!-- Total Estimated Income / Cost Summary (Full Width) -->
  <div class="border border-gray-300 rounded-lg p-4 space-y-3 col-span-2">
    <div class="bg-[#001F54] h-[40px] flex items-center px-4 rounded-t">
      <p class="text-white font-bold pb-6 text-lg">Cost & Income Summary</p>
    </div>
    <p class="text-sm">
      This summary includes bulk production and sample creation costs. Unit costs are lower in bulk due to economies of scale, whereas samples are more expensive per unit due to smaller batches and additional logistics.
    </p>
  </div>
</div>

          </div>
          </div`
// page1.innerHTML=`<div class="border-2 border-[#001F54] border-solid relative p-4'>
// <p class="text-green-400">elwfh9werhf phwerfhweqrh</p></div>`

  // --- Page 2 HTML (BOM and Product Photos) ---
//  page2.innerHTML = `
// <div class="p-2">
//   <div class="border-2 border-[#001F54] border-solid relative p-4">
//     <!-- Header -->>
//     <div class="bg-white border-b-4 border-[#001F54] text-center mb-4 -mt-4 -mx-4">
//       <h1 class="text-2xl font-bold py-3">Running Shoe Tech Pack</h1>
//     </div>

//     <!-- Bill of Materials (BOM) -->
//     <div class="mb-6">
//       <div class="flex justify-start items-center bg-[#001F54] text-white ">
//         <p class="text-xl font-bold pl-4 py-1">Bill of Materials (BOM)</p>
//       </div>
//       <div class="border border-t-0 overflow-x-auto">
//         <table class="min-w-full text-sm">
//           <thead class="bg-gray-100">
//             <tr>
//               <th class="text-left py-2 px-4 font-semibold">Component</th>
//               <th class="text-left py-2 px-4 font-semibold">Material</th>
//               <th class="text-left py-2 px-4 font-semibold">Specification</th>
//               <th class="text-left py-2 px-4 font-semibold">Qty</th>
//               <th class="text-left py-2 px-4 font-semibold">Unit Cost</th>
//               <th class="text-left py-2 px-4 font-semibold">Notes</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr class="border-b">
//               <td class="py-2 px-4">Upper</td>
//               <td class="py-2 px-4">Mesh Fabric</td>
//               <td class="py-2 px-4">Breathable, lightweight</td>
//               <td class="py-2 px-4">1</td>
//               <td class="py-2 px-4">$3.50</td>
//               <td class="py-2 px-4">Waterproof coating applied</td>
//             </tr>
//             <tr class="border-b">
//               <td class="py-2 px-4">Sole</td>
//               <td class="py-2 px-4">EVA Foam</td>
//               <td class="py-2 px-4">High cushioning</td>
//               <td class="py-2 px-4">1</td>
//               <td class="py-2 px-4">$5.00</td>
//               <td class="py-2 px-4">Durability tested</td>
//             </tr>
//             <tr class="border-b">
//               <td class="py-2 px-4">Laces</td>
//               <td class="py-2 px-4">Polyester</td>
//               <td class="py-2 px-4">Flat, 120cm</td>
//               <td class="py-2 px-4">2</td>
//               <td class="py-2 px-4">$0.50</td>
//               <td class="py-2 px-4">Color-matched to upper</td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//     </div>

//     <!-- Product Photos -->
//     <div class="mb-4">
//       <div class="flex justify-start items-center bg-[#001F54] text-white ">
//         <p class="text-xl font-bold pl-4 py-1">Product Photos</p>
//       </div>
//       <div class="border border-t-0 p-4">
//         <div class="grid grid-cols-3 gap-6">
//           <div class="border rounded-lg overflow-hidden flex items-center justify-center bg-gray-200 aspect-[2/3]">
//             <img src="https://via.placeholder.com/200x300?text=Front+View" alt="front view" class="w-full h-full object-contain">
//           </div>
//           <div class="border rounded-lg overflow-hidden flex items-center justify-center bg-gray-200 aspect-[2/3]">
//             <img src="https://via.placeholder.com/200x300?text=Back+View" alt="back view" class="w-full h-full object-contain">
//           </div>
//           <div class="border rounded-lg overflow-hidden flex items-center justify-center bg-gray-200 aspect-[2/3]">
//             <img src="https://via.placeholder.com/200x300?text=Side+View" alt="side view" class="w-full h-full object-contain">
//           </div>
//         </div>
//       </div>
//     </div>

//     <!-- Footer with Logo -->
//     <div class="absolute bottom-4 right-4 h-12 w-12">
//       <img src="/favicon.png" alt="Logo" class="h-full w-full object-contain"/>
//     </div>
//   </div>
// </div>
// `;


  //   page3.innerHTML = `
  //     <div class="py-2">

  //         ${
  //           image_data && Object.values(image_data).length > 0
  //             ? `
  //           <div class="md:col-span-2 border p-4 rounded shadow image-container">
  //             <h2 class="text-xl font-semibold">Product Images</h2>
  //             <div class="flex flex-wrap gap-4 mt-4" style="page-break-inside: avoid;">
  //               ${(() => {
  //                 const hasOnlyFrontImage = !image_data.back && image_data.front?.url;

  //                 if (hasOnlyFrontImage) {
  //                   return `
  //                     <div class="w-full flex justify-center">
  //                       <div class="flex-shrink-0" style="width: 100%; max-width: 500px;">
  //                         <img
  //                           src="${image_data.front.url}"
  //                           alt="${tech_pack?.name || "Product"} - front view"
  //                           class="w-full h-auto max-h-[120mm] object-contain mx-auto"
  //                           onerror="this.onerror=null;this.src='/placeholder.svg';this.alt='Image failed to load'"
  //                           style="page-break-inside: avoid;"
  //                         />
  //                       </div>
  //                     </div>
  //                   `;
  //                 } else {
  //                   return Object.entries(image_data)
  //                     .filter(([_, imageData]: any) => imageData?.url)
  //                     .map(
  //                       ([key, imageData]) => `
  //                       <div class="flex-shrink-0" style="width: calc(50% - 0.5rem);">
  //                         <img
  //                           src="${(imageData as { url: string }).url}"
  //                           alt="${tech_pack?.name || "Product"} - ${key} view"
  //                           class="w-full h-auto max-h-[120mm] object-contain"
  //                           onerror="this.onerror=null;this.src='/placeholder.svg';this.alt='Image failed to load'"
  //                           style="page-break-inside: avoid;"
  //                         />
  //                       </div>
  //                     `
  //                     )
  //                     .join("");
  //                 }
  //               })()}
  //             </div>
  //           </div>
  //         `
  //             : ""
  //         }

  //     </div>
  //   `;
  document.body.appendChild(page1);
  document.body.appendChild(page2);
    document.body.appendChild(page3);

  //   let includePage3 = false;

  //   if (image_data && Object.keys(image_data).length > 0) {
  //   document.body.appendChild(page3);
  //     includePage3 = true;
  //   }

  try {
    const pdf = new jsPDF("p", "mm", "a4");
    const options = {
      scale: 2,
      logging: false,
      useCORS: true,
      scrollX: 0,
      scrollY: 0,
    };
    const pages = [page1, page2,page3];
    for (let i = 0; i < pages.length; i++) {
      const canvas = await html2canvas(pages[i], options);
      const imgData = canvas.toDataURL("image/jpeg", 1);

      if (i > 0) {
        pdf.addPage();
      }
      pdf.addImage(imgData, "JPEG", 10, 10, 190, 0, undefined, "FAST");
    }

    pdf.save("dummy" + ".pdf");
  } catch (error) {
    console.error("PDF generation failed:", error);
    throw error;
  } finally {
    [page1, page2,page3].forEach((page) => {
      if (page.parentNode) {
        document.body.removeChild(page);
      }
    });

    // if (includePage3 && page3.parentNode) {
    //   document.body.removeChild(page3);
    // }
  }
};

// export const generatePdffromtechPackData = async ({ tech_pack }: { tech_pack: any }) => {
//   const page1 = document.createElement("div");
//   const page2 = document.createElement("div");
//   const page3 = document.createElement("div");
//   [page1, page2, page3].forEach((page) => {
//     page.style.width = "794px";
//     page.style.padding = "20px";
//     page.style.backgroundColor = "white";
//     page.style.position = "fixed";
//     page.style.left = "-10000px";
//   });

//   page1.innerHTML = `
//     <div class="container mx-auto py-8">
//       <div class="grid gap-6 md:grid-cols-2">
//         <!-- Product Details -->
//         <div class="border p-4 rounded shadow">
//           <h2 class="text-xl font-semibold">Product Details</h2>
//           <p class="text-gray-600">Basic information about the product</p>
//           <div class="space-y-4 mt-2">
//             <div>
//               <h3 class="font-medium text-gray-500">Description</h3>
//               <p>${productOverview || "No description provided"}</p>
//             </div>
//             <div>
//               <h3 class="font-medium text-gray-500">Product Notes</h3>
//               <p>${productionNotes || "Not specified"}</p>
//             </div>
//           </div>
//         </div>

//         <div class="border p-4 rounded shadow">
//           <h2 class="text-xl font-semibold">Materials</h2>
//           ${
//             materials && materials.length > 0
//               ? `
//             <ul class="space-y-4 mt-2">
//               ${materials
//                 .map(
//                   (material: any) => `
//                 <li class="border p-4 rounded-md shadow-sm bg-gray-50">
//                   <p class="font-semibold">${material.name}</p>
//                   <p class="text-sm text-gray-600 mt-1">Reason: ${material.reason}</p>
//                   <p class="text-sm text-gray-600">Cost Score: ${material.costScore}/100</p>
//                   <p class="text-sm text-gray-600">Sustainability Score: ${material.sustainabilityScore}/100</p>
//                   ${
//                     material.alternatives?.length > 0
//                       ? `
//                     <p class="text-sm text-gray-600">Alternatives: ${material.alternatives.join(", ")}</p>
//                   `
//                       : ""
//                   }
//                 </li>
//               `
//                 )
//                 .join("")}
//             </ul>
//           `
//               : `<p class="text-gray-500 mt-2">No materials specified</p>`
//           }
//         </div>

//         <div class="border p-4 rounded shadow">
//           <h2 class="text-xl font-semibold">Colorways</h2>
//           ${
//             colors
//               ? `
//             <div class="space-y-4 mt-2">
//               ${
//                 colors.styleNotes
//                   ? `
//                 <p class="text-sm text-gray-700 italic">"${colors.styleNotes}"</p>
//               `
//                   : ""
//               }
//               ${
//                 colors.trendAlignment
//                   ? `
//                 <p class="text-sm text-gray-500">Trend Alignment: ${colors.trendAlignment}</p>
//               `
//                   : ""
//               }

//               <div>
//                 <h4 class="font-semibold text-gray-800">Primary Colors</h4>
//                 ${
//                   colors.primaryColors?.length > 0
//                     ? `
//                   <div class="flex flex-wrap gap-3 mt-2">
//                     ${colors.primaryColors
//                       .map(
//                         (color: any) => `
//                       <div class="flex items-center">
//                         <div class="h-6 w-6 rounded-full mr-2 border border-gray-200" style="background-color: ${color.hex}"></div>
//                         <span>${color.name}</span>
//                       </div>
//                     `
//                       )
//                       .join("")}
//                   </div>
//                 `
//                     : `<p class="text-gray-500 text-sm">No primary colors specified</p>`
//                 }
//               </div>

//               <div>
//                 <h4 class="font-semibold text-gray-800">Accent Colors</h4>
//                 ${
//                   colors.accentColors?.length > 0
//                     ? `
//                   <div class="flex flex-wrap gap-3 mt-2">
//                     ${colors.accentColors
//                       .map(
//                         (color: any) => `
//                       <div class="flex items-center">
//                         <div class="h-6 w-6 rounded-full mr-2 border border-gray-200" style="background-color: ${color.hex}"></div>
//                         <span>${color.name}</span>
//                       </div>
//                     `
//                       )
//                       .join("")}
//                   </div>
//                 `
//                     : `<p class="text-gray-500 text-sm">No accent colors specified</p>`
//                 }
//               </div>
//             </div>
//           `
//               : `<p class="text-gray-500 mt-2">No colorways specified</p>`
//           }
//         </div>

//         <div class="border p-4 rounded shadow">
//           <h2 class="text-xl font-semibold">Hardware</h2>
//           ${
//             hardwareComponents?.hardware?.length > 0
//               ? `
//             <div class="space-y-2 mt-2">
//               ${
//                 hardwareComponents.description
//                   ? `
//                 <p class="text-sm text-gray-700 italic mb-2">${hardwareComponents.description}</p>
//               `
//                   : ""
//               }
//               <ul class="list-inside list-disc space-y-1">
//                 ${hardwareComponents.hardware
//                   .map(
//                     (item: any) => `
//                   <li>${item}</li>
//                 `
//                   )
//                   .join("")}
//               </ul>
//             </div>
//           `
//               : `<p class="text-gray-500 mt-2">No hardware specified</p>`
//           }
//         </div>
//       </div>
//     </div>
//   `;

//   page2.innerHTML = `
//     <div class="container mx-auto py-8">
//       <div class="grid gap-6 md:grid-cols-2">
//         <!-- Construction Details -->
//         <div class="border p-4 rounded shadow md:col-span-2">
//           <h2 class="text-xl font-semibold">Construction Details</h2>
//           ${
//             constructionDetails
//               ? `
//             <div class="space-y-3 mt-2">
//               ${
//                 constructionDetails.description
//                   ? `
//                 <p class="whitespace-pre-line text-sm text-gray-700">
//                   ${constructionDetails.description}
//                 </p>
//               `
//                   : ""
//               }
//               ${
//                 constructionDetails.construction?.length > 0
//                   ? `
//                 <ul class="list-inside list-disc space-y-1">
//                   ${constructionDetails.construction
//                     .map(
//                       (item: any) => `
//                     <li>${item}</li>
//                   `
//                     )
//                     .join("")}
//                 </ul>
//               `
//                   : ""
//               }
//             </div>
//           `
//               : `<p class="text-gray-500 mt-2">No construction details provided</p>`
//           }
//         </div>

//         <div class="border p-4 rounded shadow md:col-span-2">
//   <h2 class="text-xl font-semibold">Measurements</h2>
//   ${
//     dimensions &&
//     (dimensions.weight ||
//       dimensions.industryComparison ||
//       (Array.isArray(dimensions.dimensionDetails) &&
//         dimensions.dimensionDetails.length > 0))
//       ? `
//     <div class="overflow-x-auto mt-2">
//       <table class="w-full border-collapse">
//         <thead>
//           <tr class="border-b">
//             <th class="py-2 text-left">Measurement</th>
//             <th class="py-2 text-left">Value</th>
//           </tr>
//         </thead>
//         <tbody>
//           ${
//             dimensions.weight
//               ? `
//             <tr class="border-b">
//               <td class="py-2 capitalize">Weight</td>
//               <td class="py-2">${dimensions.weight}</td>
//             </tr>
//           `
//               : ""
//           }

//           ${
//             dimensions.industryComparison
//               ? `
//             <tr class="border-b">
//               <td class="py-2 capitalize">Industry Comparison</td>
//               <td class="py-2">${dimensions.industryComparison}</td>
//             </tr>
//           `
//               : ""
//           }

//           ${
//             Array.isArray(dimensions.dimensionDetails)
//               ? dimensions.dimensionDetails
//                   .map(
//                     (item: any) => `
//               <tr class="border-b">
//                 <td class="py-2 capitalize">${item.name}</td>
//                 <td class="py-2">${item.value}</td>
//               </tr>
//             `
//                   )
//                   .join("")
//               : ""
//           }
//         </tbody>
//       </table>
//     </div>
//   `
//       : `<p class="text-gray-500 mt-2">No measurements provided</p>`
//   }
// </div>

//         <div class="border p-4 rounded shadow">
//           <h2 class="text-xl font-semibold">Care Instructions</h2>
//           ${
//             careInstructions
//               ? `
//             <p class="whitespace-pre-line mt-2">${careInstructions}</p>
//           `
//               : `<p class="text-gray-500 mt-2">No Care Instructions information provided</p>`
//           }
//         </div>

//         <div class="border p-4 rounded shadow">
//           <h2 class="text-xl font-semibold">Packaging</h2>
//           ${
//             packaging
//               ? `
//             <div class="space-y-3 mt-2">
//               ${
//                 packaging.description
//                   ? `
//                 <p class="whitespace-pre-line text-sm text-gray-700">${packaging.description}</p>
//               `
//                   : ""
//               }
//               ${
//                 packaging.dimensions
//                   ? `
//                 <p class="text-sm text-gray-600">
//                   <strong>Dimensions:</strong> ${packaging.dimensions}
//                 </p>
//               `
//                   : ""
//               }
//               ${
//                 packaging.materials?.length > 0
//                   ? `
//                 <div>
//                   <p class="text-sm text-gray-600 font-medium">Materials:</p>
//                   <ul class="list-disc list-inside text-sm text-gray-700">
//                     ${packaging.materials
//                       .map(
//                         (item: any) => `
//                       <li>${item}</li>
//                     `
//                       )
//                       .join("")}
//                   </ul>
//                 </div>
//               `
//                   : ""
//               }
//             </div>
//           `
//               : `<p class="text-gray-500 mt-2">No packaging details provided</p>`
//           }
//         </div>
//       </div>
//     </div>
//   `;

//   page3.innerHTML = `
//     <div class="container mx-auto py-8">
//       <div class="grid gap-6 md:grid-cols-2">
//         <div class="border p-4 rounded shadow">
//           <h2 class="text-xl font-semibold">Quality Standards</h2>
//           ${
//             qualityStandards
//               ? `
//             <p class="whitespace-pre-line mt-2">${qualityStandards}</p>
//           `
//               : `<p class="text-gray-500 mt-2">No Quality Standards information provided</p>`
//           }
//         </div>

//         <div class="border p-4 rounded shadow">
//           <h2 class="text-xl font-semibold">Cost Estimate</h2>
//           ${
//             price
//               ? `
//             <p class="whitespace-pre-line mt-2">${price}</p>
//           `
//               : `<p class="text-gray-500 mt-2">No cost estimate provided</p>`
//           }
//         </div>

//         ${
//           image_data && Object.values(image_data).length > 0
//             ? `
//           <div class="md:col-span-2 border p-4 rounded shadow image-container">
//             <h2 class="text-xl font-semibold">Product Images</h2>
//             <div class="flex flex-wrap gap-4 mt-4" style="page-break-inside: avoid;">
//               ${(() => {
//                 const hasOnlyFrontImage = !image_data.back && image_data.front?.url;

//                 if (hasOnlyFrontImage) {
//                   return `
//                     <div class="w-full flex justify-center">
//                       <div class="flex-shrink-0" style="width: 100%; max-width: 500px;">
//                         <img
//                           src="${image_data.front.url}"
//                           alt="${tech_pack?.name || "Product"} - front view"
//                           class="w-full h-auto max-h-[120mm] object-contain mx-auto"
//                           onerror="this.onerror=null;this.src='/placeholder.svg';this.alt='Image failed to load'"
//                           style="page-break-inside: avoid;"
//                         />
//                       </div>
//                     </div>
//                   `;
//                 } else {
//                   return Object.entries(image_data)
//                     .filter(([_, imageData]: any) => imageData?.url)
//                     .map(
//                       ([key, imageData]) => `
//                       <div class="flex-shrink-0" style="width: calc(50% - 0.5rem);">
//                         <img
//                           src="${(imageData as { url: string }).url}"
//                           alt="${tech_pack?.name || "Product"} - ${key} view"
//                           class="w-full h-auto max-h-[120mm] object-contain"
//                           onerror="this.onerror=null;this.src='/placeholder.svg';this.alt='Image failed to load'"
//                           style="page-break-inside: avoid;"
//                         />
//                       </div>
//                     `
//                     )
//                     .join("");
//                 }
//               })()}
//             </div>
//           </div>
//         `
//             : ""
//         }
//       </div>
//     </div>
//   `;

//   document.body.appendChild(page1);
//   document.body.appendChild(page2);
//   document.body.appendChild(page3);

//   try {
//     const pdf = new jsPDF("p", "mm", "a4");
//     const options = {
//       scale: 2,
//       logging: false,
//       useCORS: true,
//       scrollX: 0,
//       scrollY: 0,
//     };
//     const pages = [page1, page2, page3];
//     for (let i = 0; i < pages.length; i++) {
//       const canvas = await html2canvas(pages[i], options);
//       const imgData = canvas.toDataURL("image/jpeg", 1);

//       if (i > 0) {
//         pdf.addPage();
//       }
//       pdf.addImage(imgData, "JPEG", 10, 10, 190, 0, undefined, "FAST");
//     }

//     pdf.save(productName + ".pdf");
//   } catch (error) {
//     console.error("PDF generation failed:", error);
//     throw error;
//   } finally {
//     [page1, page2, page3].forEach((page) => {
//       if (page.parentNode) {
//         document.body.removeChild(page);
//       }
//     });
//   }
// };

export const generatePdfBase64 = async ({ tech_pack }: { tech_pack: any }) => {
  const page1 = document.createElement("div");
  const page2 = document.createElement("div");

  [page1, page2].forEach((page) => {
    page.style.width = "1000px";
    page.style.padding = "4px";
    page.style.backgroundColor = "white";
    page.style.position = "fixed";
    page.style.left = "-10000px";
  });

//   page1.innerHTML = `
// <div class="p-2">
//     <div class="border-2 border-[#001F54] border-solid ">
//         <!-- Header -->
//         <div class="bg-white border-b-4 border-[#001F54] p-3 text-center">
//             <h1 class="text-2xl font-bold">${productName || "Product Name"} Tech Pack</h1>
//         </div>

//         <!-- Product Details -->
//         <div class="mb-6">
//             <div class="flex justify-start items-center bg-[#001F54] text-white ">
//                 <p class="text-2xl font-bold  pl-4 pb-2">Product Details</p>
//             </div>
//             <div class="border border-t-0 divide-y divide-blue-200">
//                 <div class="p-4">
//                     <p class="font-semibold  text-sm text-gray-800">Product Description</p>
//                     <p class="text-gray-700">${productOverview || "No description provided"}</p>
//                 </div>
//                 <div class="p-4">
//                     <p class="font-semibold  text-sm text-gray-800">Product Notes</p>
//                     <p class="text-gray-700">${productionNotes || "No notes provided"}</p>
//                 </div>
//                 <div class="p-4">
//                     <p class="font-semibold  text-sm text-gray-800">Product Category</p>
//                     <p class="text-gray-700">${category_Subcategory || "Not specified"}</p>
//                 </div>
//                 <div class="p-4">
//                     <p class="font-semibold  text-sm text-gray-800">Intended Market Age Range</p>
//                     <p class="text-gray-700">${intendedMarket_AgeRange || "Not specified"}</p>
//                 </div>
//             </div>
//         </div>


//         <!-- BOM -->
//         <div class="mb-6">
//              <div class="flex justify-start items-center bg-[#001F54] text-white ">
//                 <p class="text-2xl font-bold  pl-4 pb-2">Bill of Materials (BOM)</p>
//             </div>
//             <div class="border border-t-0 overflow-x-auto">
//                 ${
//                   materials && materials.length > 0
//                     ? `
//                 <table class="min-w-full text-sm">
//                     <thead class="bg-gray-100">
//                         <tr>
//                             <th class="text-left py-2 px-4 font-semibold">Component Name</th>
//                             <th class="text-left py-2 px-4 font-semibold">Material</th>
//                             <th class="text-left py-2 px-4 font-semibold">Specification</th>
//                             <th class="text-left py-2 px-4 font-semibold">Qty per unit</th>
//                             <th class="text-left py-2 px-4 font-semibold">Unit Cost</th>
//                             <th class="text-left py-2 px-4 font-semibold">Notes</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         ${materials
//                           .map(
//                             (material: any) => `
//                         <tr class="border-b">
//                             <td class="py-2 px-4">${material.component || ""}</td>
//                             <td class="py-2 px-4">${material.material || ""}</td>
//                             <td class="py-2 px-4">${material.specification || ""}</td>
//                             <td class="py-2 px-4">${material.quantityPerUnit || ""}</td>
//                             <td class="py-2 px-4">${material.unitCost || ""}</td>
//                             <td class="py-2 px-4">${material.notes || ""}</td>
//                         </tr>
//                         `
//                           )
//                           .join("")}
//                     </tbody>
//                 </table>
//                 `
//                     : `<p class="text-gray-500 p-4">No materials specified</p>`
//                 }
//             </div>
//         </div>

//         <div class="mb-6">
//             <div class="grid grid-cols-1 md:grid-cols-2 gap-4">

//                 <!-- Measurements & Tolerance -->
//                 <div>
//                      <div class="flex justify-start items-center bg-[#001F54] text-white ">
//                 <p class="text-2xl font-bold  pl-4 pb-2">Measurements & Tolerance</p>
//             </div>
//                     <div class="border border-t-0 p-4 overflow-x-auto">
//                         ${
//                           dimensions &&
//                           Array.isArray(dimensions.details) &&
//                           dimensions.details.length > 0
//                             ? `
//                         <table class="w-full border border-collapse text-sm">
//                             <thead class="bg-gray-100">
//                                 <tr>
//                                     <th class="border px-4 py-2 text-left font-semibold">Measurement</th>
//                                     <th class="border px-4 py-2 text-left font-semibold">Value</th>
//                                     <th class="border px-4 py-2 text-left font-semibold">Tolerance</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 ${dimensions.details
//                                   .map((detail: any) =>
//                                     Object.entries(detail)
//                                       .map(([key, val]: [string, any]) => {
//                                         const value = val?.value || "-";
//                                         const tolerance = val?.tolerance || "-";
//                                         return `
//                                 <tr>
//                                     <td class="border px-4 py-2 capitalize">${key}</td>
//                                     <td class="border px-4 py-2">${value}</td>
//                                     <td class="border px-4 py-2">${tolerance}</td>
//                                 </tr>
//                                 `;
//                                       })
//                                       .join("")
//                                   )
//                                   .join("")}
//                             </tbody>
//                         </table>
//                         `
//                             : `<p class="text-gray-500 ">No measurements provided.</p>`
//                         }
//                     </div>
//                 </div>

//                 <!-- Colorways -->
//                 <div>
//                     <div class="flex justify-start items-center bg-[#001F54] text-white ">
//                         <p class="text-2xl font-bold  pl-4 pb-2">Colorways</p>
//                     </div>
//                     <div class="border border-t-0 p-4 space-y-4 bg-gray-50">

//                         <!-- Primary Colors -->
//                         ${
//                           colors.primaryColors?.length > 0
//                             ? `
//                         <div>
//                             <h3 class="font-semibold text-gray-700 ">Primary Colors</h3>
//                             <div class="flex flex-wrap items-center gap-4 mt-2">
//                                 ${colors.primaryColors
//                                   .map(
//                                     (color: any) => `
//                                 <div class="flex items-center">
//                                     <span class="w-5 h-5 rounded-full mr-2 border"
//                                         style="background-color:${color.hex};"></span>
//                                     <span>${color.name} <span class="text-xs text-gray-500">(${color.hex})</span></span>
//                                 </div>
//                                 `
//                                   )
//                                   .join("")}
//                             </div>
//                         </div>`
//                             : `<p class="text-gray-500 text-sm ">No primary colors specified</p>`
//                         }

//                         <!-- Accent Colors -->
//                         ${
//                           colors.accentColors?.length > 0
//                             ? `
//                         <div>
//                             <h3 class="font-semibold text-gray-700 ">Accent Colors</h3>
//                             <div class="flex flex-wrap items-center gap-4 mt-2">
//                                 ${colors.accentColors
//                                   .map(
//                                     (color: any) => `
//                                 <div class="flex items-center">
//                                     <span class="w-5 h-5 rounded-full mr-2 border"
//                                         style="background-color:${color.hex};"></span>
//                                     <span>${color.name} <span class="text-xs text-gray-500">(${color.hex})</span></span>
//                                 </div>
//                                 `
//                                   )
//                                   .join("")}
//                             </div>
//                         </div>`
//                             : `<p class="text-gray-500 text-sm ">No accent colors specified</p>`
//                         }

//                     </div>
//                 </div>
//             </div>
//         </div>

//         <div class="mb-4">
//             <div class="flex justify-start items-center bg-[#001F54] text-white ">
//                 <p class="text-2xl font-bold  pl-4 pb-2">Quality Standards</p>
//             </div>
//             <div class="border border-t-0 p-4">
//                 ${
//                   qualityStandards
//                     ? `
//                 <p class="text-gray-700">${qualityStandards}</p>
//                 `
//                     : `<p class="text-gray-700">No Quality Standards information provided</p>`
//                 }
//             </div>
//         </div>
//     </div>
// </div>
// `;

//   page2.innerHTML = `
// <div class="p-2">
//     <div class="border-2 border-[#001F54] border-solid ">

//         <!-- Header -->
//         <div class="bg-white border-b-4 border-[#001F54] p-3 text-center">
//             <h1 class="text-2xl font-bold">${productName || "Product Name"} Tech Pack</h1>
//         </div>

//         <div class="mb-6">
//             <div class="flex justify-start items-center bg-[#001F54] text-white ">
//                 <p class="text-2xl font-bold  pl-4 pb-2">Packaging</p>
//             </div>
//             <div class="border border-t-0 p-4 text-sm leading-6">
//                 <ul class="list-disc pl-6 space-y-1">
//                     <li><strong>Packaging Type:</strong> ${
//                       packaging?.packagingDetails?.packagingType || ""
//                     }</li>
//                     <li><strong>Material Spec:</strong>
//                         ${packaging?.packagingDetails?.materialSpec || ""}</li>
//                     <li><strong>Closure Type:</strong> ${
//                       packaging?.packagingDetails?.closureType || ""
//                     }
//                     </li>
//                     <li><strong>Artwork File Reference:</strong>
//                         ${packaging?.packagingDetails?.artworkFileReference || ""}</li>
//                     <li><strong>Inner Packaging:</strong> ${
//                       packaging?.packagingDetails?.innerPackaging || ""
//                     }</li>
//                     <li><strong>Barcode & Label Placement:</strong>
//                         ${packaging?.packagingDetails?.barcodeAndLabelPlacement || ""}</li>
//                 </ul>
//             </div>
//         </div>

//         <!-- Sizes Section -->
//         <div class="mb-6">
//             <div class="flex justify-start items-center bg-[#001F54] text-white ">
//                 <p class="text-2xl font-bold  pl-4 pb-2">Sizes</p>
//             </div>
//             <div class="border border-t-0 p-4 text-sm">
//                 ${sizeRange?.gradingLogic || ""}
//                 <div class="mt-2 font-semibold">
//                     ${sizeRange?.sizes?.join(", ") || ""}
//                 </div>
//             </div>
//         </div>

//         <!-- Construction Details -->
//         <div class="mb-6">
//             <div class="flex justify-start items-center bg-[#001F54] text-white ">
//                 <p class="text-2xl font-bold  pl-4 pb-2">Construction Details</p>
//             </div>
//             <div class="border border-t-0 p-4 text-sm leading-6">
//                 <p class="mb-2 text-gray-700">
//                     ${constructionDetails?.description || ""}
//                 </p>
//                 ${
//                   constructionDetails.constructionFeatures?.length > 0
//                     ? `
//                 <ul class="list-disc pl-6 space-y-1">
//                     ${constructionDetails.constructionFeatures
//                       .map(
//                         (item: any) => `
//                     <li>
//                         <p class="text-sm text-gray-600"><strong>${item.featureName || "Not specified"}</strong>: ${
//                           item.details || "Not specified"
//                         }</p>
//                     </li>
//                     `
//                       )
//                       .join("")}
//                 </ul>
//                 `
//                     : ""
//                 }
//             </div>
//         </div>

//         <div class="mb-4">
//             <div class="flex justify-start items-center bg-[#001F54] text-white ">
//                 <p class="text-2xl font-bold  pl-4 pb-2">Quality Standards</p>
//             </div>
//             <div class="border border-t-0 p-4 text-sm">
//                 ${qualityStandards || ""}
//             </div>
//         </div>

//         <!-- Product Photos -->
//         <div class="mb-4">
//   <div class="flex justify-start items-center bg-[#001F54] text-white ">
//     <p class="text-2xl font-bold pl-4 pb-2">Product Photos</p>
//   </div>
//   <div class="border border-t-0 p-4">
//     <div class="grid grid-cols-1 md:grid-cols-3 gap-6">

//       <!-- Front -->
//       <div class="border rounded-2xl overflow-hidden flex items-center justify-center  aspect-[2/3]">
//         ${
//           image_data?.front?.url
//             ? `<img src="${image_data.front.url}" alt="Front view"
//                 class="w-full h-auto object-contain">`
//             : `<span class="text-white font-bold text-lg">Front</span>`
//         }
//       </div>

//       <!-- Back -->
//       <div class="border rounded-2xl overflow-hidden flex items-center justify-center  aspect-[2/3]">
//         ${
//           image_data?.back?.url
//             ? `<img src="${image_data.back.url}" alt="Back view"
//                 class="w-full h-auto object-contain">`
//             : `<span class="text-white font-bold text-lg">Back</span>`
//         }
//       </div>

//       <!-- Side -->
//       <div class="border rounded-2xl overflow-hidden flex items-center justify-center  aspect-[2/3]">
//         ${
//           image_data?.side?.url
//             ? `<img src="${image_data.side.url}" alt="Side view"
//                 class="w-full h-auto object-contain">`
//             : `<span class="text-white font-bold text-lg">Side</span>`
//         }
//       </div>

//     </div>
//   </div>
// </div>


//     </div>
// </div>
//   `;
  document.body.appendChild(page1);
  document.body.appendChild(page2);

  try {
    const pdf = new jsPDF("p", "mm", "a4");
    const options = {
      scale: 2,
      logging: false,
      useCORS: true,
      scrollX: 0,
      scrollY: 0,
      dpi: 300,
    };

    const pages = [page1, page2];
    for (let i = 0; i < pages.length; i++) {
      const canvas = await html2canvas(pages[i], options);
      const imgData = canvas.toDataURL("image/jpeg", 1.0);
      if (i > 0) pdf.addPage();
      pdf.addImage(imgData, "PNG", 10, 10, 190, 0);
    }

    // Create base64 from Blob
    const pdfBlob = pdf.output("blob");
    const buffer = await pdfBlob.arrayBuffer();
    const uint8Array = new Uint8Array(buffer);
    let binaryString = "";
    const chunkSize = 8192;

    for (let i = 0; i < uint8Array.length; i += chunkSize) {
      const chunk = uint8Array.slice(i, i + chunkSize);
      binaryString += String.fromCharCode.apply(null, [...chunk]);
    }

    const base64 = btoa(binaryString);
    return base64;
  } catch (error) {
    console.error("PDF generation failed:", error);
    throw error;
  } finally {
    // Clean up DOM
    [page1, page2].forEach((page) => {
      if (page.parentNode) document.body.removeChild(page);
    });
  }
};
