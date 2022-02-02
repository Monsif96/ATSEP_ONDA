
function email(pp){


  Email.send({
  Host: "smtp.gmail.com",
  Username : "agadiratsep@gmail.com",
  Password : "hiadmlqihmgvwcrz",
  To : 'khalidbaaziz@gmail.com',
  From : "agadiratsep@gmail.com",
  Subject : "Wa khdem ",
  Body : "Bonne Réception !",
  Attachments : [
    {
      name : "rj.pdf",
      data:  `${pp}`
    }
  ]
  }).then(
      function(err, info) {
        if (err) {
          console.error(err);
        } else {
          console.log(info);
        }
      }

    );
}

async function data() {
  const { PDFDocument } = PDFLib;
  console.log("Let's send Mail");

  // Fetch the PDF with form fields
  const url = './RJ.pdf';
  const existingPdfBytes = await fetch(url).then(res => res.arrayBuffer())

  // Load a PDF with form fields
  const pdfDoc = await PDFDocument.load(existingPdfBytes)
  
  const form = pdfDoc.getForm()

  // PAGE 1: Get all fields in the PDF by their names & Fill in the basic info fields
  const dateField = form.getTextField('date')
    dateField.setText("01/01/2022")

  const pdfBytes = await pdfDoc.save();

  const pdfDataUri = await pdfDoc.saveAsBase64({ dataUri: true });
  var base64 = pdfDataUri.slice(28)

  //var a=document.getElementById('123');
  //a.download='FileName.pdf';
  //a.href=pdfDataUri;
  //a.click();

  //const reader = new FileReader();
  //reader.readAsBinaryString(url);
  
  const binaryString = window.atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; ++i) {
    bytes[i] = binaryString.charCodeAt(i);
  }

  var file = new Blob([bytes], { type: 'application/pdf;base64,' });
  console.log(file);

  email(base64);

}
