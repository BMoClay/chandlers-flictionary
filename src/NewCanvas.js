// import React, { useEffect, useRef } from 'react';
// // import './NewCanvas.scss';
// // import SmoothScroll from 'smooth-scroll';


// function NewCanvas() {
//     console.log("works")
    
//     // const playRef = React.useRef();
//     // const demoRef = React.useRef();

//     var canvas, ctx, flag = false,
//        prevX = 0,
//        currX = 0,
//        prevY = 0,
//        currY = 0,
//        dot_flag = false;

//    var x = "black",
//        y = 2;

//    function init() {
//        let canvas = document.getElementById('can');
//        let ctx = canvas.getContext("2d");
//        let w = canvas.width;
//        let h = canvas.height;

//        canvas.addEventListener("mousemove", function (e) {
//            findxy('move', e)
//        }, false);
//        canvas.addEventListener("mousedown", function (e) {
//            findxy('down', e)
//        }, false);
//        canvas.addEventListener("mouseup", function (e) {
//            findxy('up', e)
//        }, false);
//        canvas.addEventListener("mouseout", function (e) {
//            findxy('out', e)
//        }, false);
//    }

//    function color(obj) {
//      let x = "black";
//    }

//    function draw() {
//        ctx.beginPath();
//        ctx.moveTo(prevX, prevY);
//        ctx.lineTo(currX, currY);
//        ctx.strokeStyle = x;
//        ctx.lineWidth = y;
//        ctx.stroke();
//        ctx.closePath();
//    }

// //    function erase() {
// //        let m = confirm("Clear canvas?");
// //        if (m) {
// //            ctx.clearRect(0, 0, w, h);
// //            document.getElementById("canvasimg").style.display = "none";
// //        }
// //    }

//     function save() {
//        var dataURL = canvas.toDataURL();
//        // get base64 string from dataUrl
//        dataURL = dataURL.split(",")[1];
//        //  replace base64 characters '+/=' with '._-'
//        while (dataURL.indexOf('+') > 0) {
//           dataURL  = dataURL.replace('+', '.');
//        }
//        while (dataURL.indexOf('/') > 0) {
//           dataURL  = dataURL.replace('/', '_');
//        }
//        while (dataURL.indexOf('=') > 0) {
//           dataURL  = dataURL.replace('=', '-');
//        }

//        window.location.href = '/go/' + dataURL;
//     }

//    function findxy(res, e) {
//        if (res == 'down') {
//            prevX = currX;
//            prevY = currY;
//            currX = e.clientX - canvas.offsetLeft;
//            currY = e.clientY - canvas.offsetTop;

//            flag = true;
//            dot_flag = true;
//            if (dot_flag) {
//                ctx.beginPath();
//                ctx.fillStyle = x;
//                ctx.fillRect(currX, currY, 2, 2);
//                ctx.closePath();
//                dot_flag = false;
//            }
//        }
//        if (res == 'up' || res == "out") {
//            flag = false;
//        }
//        if (res == 'move') {
//            if (flag) {
//                prevX = currX;
//                prevY = currY;
//                currX = e.clientX - canvas.offsetLeft;
//                currY = e.clientY - canvas.offsetTop;
//                draw();
//            }
//        }
//    }
    
   
//     return (
//         <div>
//              <div onLoad="init()"></div>
//         </div>
//     )
// }
// export default NewCanvas