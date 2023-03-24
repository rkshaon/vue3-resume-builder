<template>
  <nav-bar />
  <div class="d-flex justify-content-center" style="margin: 10px 0px;">
    <button class="btn btn-secondary" @click="downloadResume">Download</button>
  </div>
  <router-view />
</template>

<script>

import NavBar from './components/NavBar.vue'
// import jsPDF from 'jspdf'
// import html2canvas from 'html2canvas'
import html2pdf from 'html2pdf.js';

export default {
  name: 'App',
  components: {
    NavBar
  },
  methods: {
    downloadResume() {
      // const pdfDoc = new html2pdf();
      const pdfDoc = new html2pdf();
      // Get the HTML element that you want to convert to a PDF document
      const resume = document.getElementsByClassName("resume")[0];

      // Define the options for the PDF document
      const options = {
        margin: [0, 0, 0, 0], // top, right, bottom, left margins
        filename: 'resume.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
      };

      // Convert the HTML element to a PDF document
      // html2pdf().set(options).from(resume).save();
      pdfDoc.set(options).from(resume).save();

    }
    // downloadResume() {
    //   const doc = new jsPDF({
    //     orientation: "portrait",
    //     unit: "pt",
    //     // format: "letter"
    //     format: "a4"
    //   });
    //   const resume = document.getElementsByClassName("resume")[0];

    //   html2canvas(resume, {
    //     dpi: 300,
    //     type: "JPEG",
    //     scale: 0.75 // Scale down the content to fit in a single page
    //     // scale: 0.75 * 595 / resume.offsetWidth // Scale down the content to fit in a single page
    //   }).then(canvas => {
    //     // const imgData = canvas.toDataURL("image/png");
    //     const imgData = canvas.toDataURL("image/jpeg");
    //     const pdfWidth = doc.internal.pageSize.getWidth();
    //     const pdfHeight = doc.internal.pageSize.getHeight();
    //     const imgWidth = canvas.width;
    //     const imgHeight = canvas.height;
    //     const x = (pdfWidth - imgWidth) / 2; // center the image horizontally
    //     const y = (pdfHeight - imgHeight) / 2; // center the image vertically

    //     // doc.addImage(imgData, "PNG", x, y, imgWidth, imgHeight);
    //     doc.addImage(imgData, "JPEG", x, y, imgWidth, imgHeight);

    //     doc.save('resume.pdf');
    //   });
    // }
  }
}
</script>

<style>
@font-face {
  font-family: 'AkcelerA';
  src: url('@/assets/fonts/AkcelerA.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'AkcelerA-Medium';
  src: url('@/assets/fonts/AkcelerA-Medium.ttf') format('truetype');
  font-weight: bold;
}
@font-face {
  font-family: 'CityBoysSoft-Light';
  src: url('@/assets/fonts/CityBoysSoft-Light.otf') format('opentype');
}
@font-face {
  font-family: 'CityBoysSoft-Regular';
  src: url('@/assets/fonts/CityBoysSoft-Regular.otf') format('opentype');
}
@font-face {
  font-family: 'CityBoysSoft-Bold';
  src: url('@/assets/fonts/CityBoysSoft-Bold.otf') format('opentype');
}
@font-face {
  font-family: 'CityBoysSoft-SemiBold';
  src: url('@/assets/fonts/CityBoysSoft-SemiBold.otf') format('opentype');
}
/* Font */
.akceler-a-font {
  font-family: 'AkcelerA';
}
.akceler-a-medium-font {
  font-family: 'AkcelerA-Medium';
}
.city-boys-soft-light-font {
  font-family: 'CityBoysSoft-Light';
}
.city-boys-soft-regular-font {
  font-family: 'CityBoysSoft-Regular';
}
.city-boys-soft-bold-font {
  font-family: 'CityBoysSoft-Bold';
}
.city-boys-soft-semibold-font {
  font-family: 'CityBoysSoft-SemiBold';
}
/* Font Size */
.font-size-18 {
  font-size: 18px;
}
.font-size-14 {
  font-size: 14px;
}
/* List */
.list-style-type-none {
  list-style-type: none;
}
.list-style-type-circle {
  list-style-type:circle;
}
/* Font Weight */
.font-weight-bold {
  font-weight: bold;
}
/* Margin */
.margin-bottom-0 {
  margin-bottom: 0px;
}
/* Resume Size */
.resume {
  height: 297mm; /* A4 height in millimeters */
  width: 210mm; /* A4 width in millimeters */
  border: 1px solid rgb(63, 62, 60);
}
</style>
