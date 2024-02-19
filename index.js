const qrText = document.getElementById("qr-text");
const sizes = document.getElementById("sizes");
const downloadBtn = document.getElementById("downloadBtn");


function isEmptyInput(){
    qrText.value.length > 0 ? generateQRCode() : alert("Enter the text or URL to generate your QR code");;
}

let size = sizes.value;

function generateQRCode() {
    
    let website = qrText.value;
    
    


      let qrcodeContainer2 = document.getElementById("qr-body");
      qrcodeContainer2.innerHTML = "";
      new QRCode(qrcodeContainer2, {
        text: website,
        width: size,
        height: size,
        colorDark: "#0d0d0d",
        colorLight: "#f7f5f5",
        correctLevel: QRCode.CorrectLevel.H
      });

     

    //   document.getElementById("qrcode-container").style.display = "block";
    
     
}


downloadBtn.addEventListener('click', ()=>{
    let img = document.querySelector('qr-body img');

    if(img !== null){
        let imgAtrr = img.getAttribute('src');
        downloadBtn.setAttribute("href", imgAtrr);
    }
    else{
        downloadBtn.setAttribute("href", `${document.querySelector('canvas').toDataURL()}`);
    }
});


