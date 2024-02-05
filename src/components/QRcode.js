// import React from 'react'
// import  QRCode  from 'qrcode'
// const QRcode = ({texToEncode}) => {
//   return (
//     <div id="container"> 
//         {QRCode.toCanvas(texToEncode, { errorCorrectionLevel: 'H' }).then((err , canvas)=>{
//            var container = document.getElementById('container')
//            container.innerHTML = '';
//            if(canvas){
//            container.appendChild(canvas)
//            }
//         })}
//     </div>
//   )
// }

// export default QRcode


import React, { useEffect, useRef } from 'react';
import QRCode from 'qrcode';

const QRcode = ({ texToEncode }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const renderCanvas = async () => {
      try {
        // Generate the QR code and get the canvas
        const canvas = await QRCode.toCanvas(texToEncode, {
          errorCorrectionLevel: 'H',
        });

        // Clear the canvas
        // const context = canvas.getContext('2d');
        // context.clearRect(0, 0, canvas.width, canvas.height);

        // Append the canvas to the container
        const container = canvasRef.current;
        container.innerHTML = '';
        container.appendChild(canvas);
      } catch (error) {
        console.error('Error rendering QR code:', error);
      }
    };

    renderCanvas();
  }, [texToEncode]);

  return <div className="flex justify-center"ref={canvasRef} id="container" />;
};

export default QRcode;
