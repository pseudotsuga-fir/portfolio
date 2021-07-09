import React from 'react'

function Icon(props) {
    const icon = props.icon

    if (icon === "projects") {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"> <path id="Imported Path" fill="currentColor" stroke="none" d="M 278.90,511.50 C 278.90,511.50 217.90,493.80 217.90,493.80 211.50,492.00 207.90,485.30 209.70,478.90 209.70,478.90 346.20,8.70 346.20,8.70 348.00,2.30 354.70,-1.30 361.10,0.50 361.10,0.50 422.10,18.20 422.10,18.20 428.50,20.00 432.10,26.70 430.30,33.10 430.30,33.10 293.80,503.30 293.80,503.30 291.90,509.70 285.30,513.40 278.90,511.50 278.90,511.50 278.90,511.50 278.90,511.50 Z M 164.90,399.30 C 164.90,399.30 208.40,352.90 208.40,352.90 213.00,348.00 212.70,340.20 207.60,335.70 207.60,335.70 117.00,256.00 117.00,256.00 117.00,256.00 207.60,176.30 207.60,176.30 212.70,171.80 213.10,163.20 190.40,163.20 190.40,163.20 146.90,116.80 146.90,116.80 142.40,112.00 134.80,111.70 129.90,116.30 129.90,116.30 3.80,247.20 3.80,247.20 -1.30,251.90 -1.30,260.00 3.80,264.70 3.80,264.70 147.90,399.80 147.90,399.80 152.80,404.40 160.40,404.20 164.90,399.30 164.90,399.30 164.90,399.30 164.90,399.30 Z M 492.70,399.30 C 492.70,399.30 636.80,264.20 636.80,264.20 641.90,259.50 641.90,251.40 636.80,246.70 636.80,246.70 492.10,112.10 492.10,112.10 487.30,107.60 479.70,107.80 475.10,111.60 475.10,111.60 431.60,159.00 431.60,159.00 427.00,163.90 427.30,172.50 448.80,172.50 448.80,172.50 523.00,256.00 523.00,256.00 523.00,256.00 432.40,335.70 432.40,335.70 427.30,340.20 426.90,348.00 431.60,352.90 431.60,352.90 475.10,399.30 475.10,399.30 479.60,404.20 487.20,404.40 492.10,399.90 492.10,399.90 492.70,399.30 492.70,399.30 Z" /> </svg>
        )
    }

    else if (icon === "home") {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"> <path id="Imported Path" fill="currentColor" stroke="none" d="M 280.37,148.26 C 280.37,148.26 96.00,300.11 96.00,300.11 96.00,300.11 96.00,464.00 96.00,464.00 96.00,472.84 103.16,480.00 112.00,480.00 112.00,480.00 224.06,479.71 224.06,479.71 232.86,479.67 239.98,472.52 239.98,463.71 239.98,463.71 239.98,463.71 239.98,463.71 239.98,463.71 239.98,368.00 239.98,368.00 239.98,359.16 247.14,352.00 255.98,352.00 255.98,352.00 319.98,352.00 319.98,352.00 328.82,352.00 335.98,359.16 335.98,368.00 335.98,368.00 335.98,463.64 335.98,463.64 335.98,463.66 335.98,463.67 335.98,463.69 335.98,472.53 343.14,479.69 351.98,479.69 351.98,479.69 351.98,479.69 351.98,479.69 351.98,479.69 464.00,480.00 464.00,480.00 472.84,480.00 480.00,472.84 480.00,464.00 480.00,464.00 480.00,300.00 480.00,300.00 480.00,300.00 295.67,148.26 295.67,148.26 293.58,146.57 290.92,145.56 288.02,145.56 285.12,145.56 282.46,146.57 280.37,148.26 280.37,148.26 280.37,148.26 280.37,148.26 Z M 571.60,251.47 C 571.60,251.47 488.00,182.56 488.00,182.56 488.00,182.56 488.00,44.05 488.00,44.05 488.00,37.42 482.63,32.05 476.00,32.05 476.00,32.05 420.00,32.05 420.00,32.05 413.37,32.05 408.00,37.42 408.00,44.05 408.00,44.05 408.00,116.66 408.00,116.66 408.00,116.66 318.47,43.00 318.47,43.00 310.18,36.17 299.55,32.06 287.97,32.06 276.39,32.06 265.76,36.17 257.47,43.00 257.47,43.00 4.34,251.47 4.34,251.47 1.68,253.67 -0.01,257.00 -0.01,260.72 -0.01,263.63 1.02,266.29 2.74,268.37 2.74,268.37 28.24,299.37 28.24,299.37 30.44,302.04 33.78,303.75 37.51,303.75 40.41,303.75 43.07,302.72 45.15,301.00 45.15,301.00 280.37,107.26 280.37,107.26 282.46,105.57 285.12,104.56 288.02,104.56 290.92,104.56 293.58,105.57 295.67,107.26 295.67,107.26 530.90,301.00 530.90,301.00 532.98,302.72 535.64,303.75 538.55,303.75 542.27,303.75 545.60,302.06 547.80,299.40 547.80,299.40 573.30,268.40 573.30,268.40 575.01,266.33 576.03,263.67 576.03,260.78 576.03,257.02 574.30,253.67 571.60,251.47 571.60,251.47 571.60,251.47 571.60,251.47 Z" /> </svg>
        )
    }

    else if (icon === "resume") {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-55 0 500 512"> <path id="Imported Path" fill="currentColor" stroke="none" d="M 288.00,248.00 C 288.00,248.00 288.00,276.00 288.00,276.00 288.00,282.60 282.60,288.00 276.00,288.00 276.00,288.00 108.00,288.00 108.00,288.00 101.40,288.00 96.00,282.60 96.00,276.00 96.00,276.00 96.00,248.00 96.00,248.00 96.00,241.40 101.40,236.00 108.00,236.00 108.00,236.00 276.00,236.00 276.00,236.00 282.60,236.00 288.00,241.40 288.00,248.00 Z M 276.00,320.00 C 276.00,320.00 108.00,320.00 108.00,320.00 101.40,320.00 96.00,325.40 96.00,332.00 96.00,332.00 96.00,360.00 96.00,360.00 96.00,366.60 101.40,372.00 108.00,372.00 108.00,372.00 276.00,372.00 276.00,372.00 282.60,372.00 288.00,366.60 288.00,360.00 288.00,360.00 288.00,332.00 288.00,332.00 288.00,325.40 282.60,320.00 276.00,320.00 Z M 384.00,131.90 C 384.00,131.90 384.00,464.00 384.00,464.00 384.00,490.50 362.50,512.00 336.00,512.00 336.00,512.00 48.00,512.00 48.00,512.00 21.50,512.00 0.00,490.50 0.00,464.00 0.00,464.00 0.00,48.00 0.00,48.00 0.00,21.50 21.50,0.00 48.00,0.00 48.00,0.00 252.10,0.00 252.10,0.00 264.80,0.00 277.00,5.10 286.00,14.10 286.00,14.10 369.90,98.00 369.90,98.00 378.90,106.90 384.00,119.20 384.00,131.90 Z M 256.00,51.90 C 256.00,51.90 256.00,128.00 256.00,128.00 256.00,128.00 332.10,128.00 332.10,128.00 332.10,128.00 256.00,51.90 256.00,51.90 256.00,51.90 256.00,51.90 256.00,51.90 Z M 336.00,464.00 C 336.00,464.00 336.00,176.00 336.00,176.00 336.00,176.00 232.00,176.00 232.00,176.00 218.70,176.00 208.00,165.30 208.00,152.00 208.00,152.00 208.00,48.00 208.00,48.00 208.00,48.00 48.00,48.00 48.00,48.00 48.00,48.00 48.00,464.00 48.00,464.00 48.00,464.00 336.00,464.00 336.00,464.00 Z" /> </svg>
        )
    }

    else if (icon === "contact") {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"> <path id="Imported Path" fill="currentColor" stroke="none" d="M 464.00,64.00 C 464.00,64.00 48.00,64.00 48.00,64.00 21.49,64.00 0.00,85.49 0.00,112.00 0.00,112.00 0.00,400.00 0.00,400.00 0.00,426.51 21.49,448.00 48.00,448.00 48.00,448.00 464.00,448.00 464.00,448.00 490.51,448.00 512.00,426.51 512.00,400.00 512.00,400.00 512.00,112.00 512.00,112.00 512.00,85.49 490.51,64.00 464.00,64.00 Z M 464.00,112.00 C 464.00,112.00 464.00,152.81 464.00,152.81 441.58,171.06 405.83,199.46 329.41,259.30 312.57,272.54 279.21,304.37 256.00,304.00 187.00,275.00 193.00,265.00 147.00,231.00 65.00,162.00 70.42,171.07 48.00,152.81 48.00,152.81 48.00,112.00 48.00,112.00 48.00,112.00 464.00,112.00 464.00,112.00 Z M 48.00,400.00 C 48.00,400.00 48.00,214.40 48.00,214.40 70.91,232.65 103.41,258.26 152.94,297.04 174.79,314.25 256.00,410.00 362.00,293.00 412.00,259.00 431.00,242.00 464.00,218.00 465.00,248.00 463.00,368.00 461.00,400.00 461.00,400.00 118.40,400.00 118.40,400.00 118.40,400.00 48.00,400.00 48.00,400.00 Z M 712.00,537.00M -93.00,241.00" /> </svg>
        )
    }

    else if (icon === "desktop") {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"> <path id="Imported Path" fill="currentColor" stroke="none" stroke-width="1" d="M 528.00,0.00 C 528.00,0.00 48.00,0.00 48.00,0.00 21.50,0.00 0.00,21.50 0.00,48.00 0.00,48.00 0.00,368.00 0.00,368.00 0.00,394.50 21.50,416.00 48.00,416.00 48.00,416.00 240.00,416.00 240.00,416.00 240.00,416.00 224.00,464.00 224.00,464.00 224.00,464.00 152.00,464.00 152.00,464.00 138.70,464.00 128.00,474.70 128.00,488.00 128.00,501.30 138.70,512.00 152.00,512.00 152.00,512.00 424.00,512.00 424.00,512.00 437.30,512.00 448.00,501.30 448.00,488.00 448.00,474.70 437.30,464.00 424.00,464.00 424.00,464.00 352.00,464.00 352.00,464.00 352.00,464.00 336.00,416.00 336.00,416.00 336.00,416.00 528.00,416.00 528.00,416.00 554.50,416.00 576.00,394.50 576.00,368.00 576.00,368.00 576.00,48.00 576.00,48.00 576.00,21.50 554.50,0.00 528.00,0.00 Z M 512.00,352.00 C 512.00,352.00 64.00,352.00 64.00,352.00 64.00,352.00 64.00,64.00 64.00,64.00 64.00,64.00 512.00,64.00 512.00,64.00 512.00,64.00 512.00,352.00 512.00,352.00 Z" /> </svg>
        )
    }

    else if (icon === "docx") {
        return (
            <svg class="doc-type" id="docx-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path id="Imported Path" fill="currentColor" stroke="none" d="M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM332.1 128H256V51.9l76.1 76.1zM48 464V48h160v104c0 13.3 10.7 24 24 24h104v288H48zm220.1-208c-5.7 0-10.6 4-11.7 9.5-20.6 97.7-20.4 95.4-21 103.5-.2-1.2-.4-2.6-.7-4.3-.8-5.1.3.2-23.6-99.5-1.3-5.4-6.1-9.2-11.7-9.2h-13.3c-5.5 0-10.3 3.8-11.7 9.1-24.4 99-24 96.2-24.8 103.7-.1-1.1-.2-2.5-.5-4.2-.7-5.2-14.1-73.3-19.1-99-1.1-5.6-6-9.7-11.8-9.7h-16.8c-7.8 0-13.5 7.3-11.7 14.8 8 32.6 26.7 109.5 33.2 136 1.3 5.4 6.1 9.1 11.7 9.1h25.2c5.5 0 10.3-3.7 11.6-9.1l17.9-71.4c1.5-6.2 2.5-12 3-17.3l2.9 17.3c.1.4 12.6 50.5 17.9 71.4 1.3 5.3 6.1 9.1 11.6 9.1h24.7c5.5 0 10.3-3.7 11.6-9.1 20.8-81.9 30.2-119 34.5-136 1.9-7.6-3.8-14.9-11.6-14.9h-15.8z" /></svg>
        )
    }

    else if (icon === "pdf") {
        return (
            <svg className="doc-type" id="pdf-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path id="Imported Path" fill="currentColor" stroke="none" d="M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM332.1 128H256V51.9l76.1 76.1zM48 464V48h160v104c0 13.3 10.7 24 24 24h104v288H48zm250.2-143.7c-12.2-12-47-8.7-64.4-6.5-17.2-10.5-28.7-25-36.8-46.3 3.9-16.1 10.1-40.6 5.4-56-4.2-26.2-37.8-23.6-42.6-5.9-4.4 16.1-.4 38.5 7 67.1-10 23.9-24.9 56-35.4 74.4-20 10.3-47 26.2-51 46.2-3.3 15.8 26 55.2 76.1-31.2 22.4-7.4 46.8-16.5 68.4-20.1 18.9 10.2 41 17 55.8 17 25.5 0 28-28.2 17.5-38.7zm-198.1 77.8c5.1-13.7 24.5-29.5 30.4-35-19 30.3-30.4 35.7-30.4 35zm81.6-190.6c7.4 0 6.7 32.1 1.8 40.8-4.4-13.9-4.3-40.8-1.8-40.8zm-24.4 136.6c9.7-16.9 18-37 24.7-54.7 8.3 15.1 18.9 27.2 30.1 35.5-20.8 4.3-38.9 13.1-54.8 19.2zm131.6-5s-5 6-37.3-7.8c35.1-2.6 40.9 5.4 37.3 7.8z" /></svg> 
        )
    }

    else if (icon === "download") {
        return (
            <svg id="download-svg" viewBox="0 0 58.0634 47.795361" xmlns="http://www.w3.org/2000/svg"><g transform="translate(-70.648933,-40.962442)"> <path id="Imported Path" fill="currentColor" stroke="none" d="m 73.996094,81.642578 c -5.729491,0.367213 -3.317949,8.146568 1.35575,7 16.650295,0 33.300586,0 49.950886,0 5.33891,-0.02574 3.88381,-7.998555 -0.75319,-7 -16.85115,0 -33.702299,0 -50.553446,0 z M 100.27148,40.962891 c -3.338659,-0.02626 -3.663304,3.434498 -3.499996,5.910222 0,7.17641 0,14.352821 0,21.529231 -3.317057,-2.23763 -6.634115,-4.475261 -9.951172,-6.712891 -4.954735,-2.901185 -7.308281,4.897299 -2.792122,6.56097 4.762088,3.21275 9.524175,6.425499 14.286263,9.638249 2.151837,0.513033 4.190847,0.178958 5.789097,-1.263837 4.65981,-3.185699 9.40197,-6.260092 14.00944,-9.51653 3.53336,-3.424044 -2.2781,-8.157156 -5.3874,-4.744868 -2.9847,2.01362 -5.96941,4.02724 -8.95411,6.04086 -0.0348,-8.182311 0.0701,-16.370723 -0.0532,-24.549175 -0.25995,-1.635843 -1.79033,-2.920226 -3.44683,-2.892231 z"/></g></svg> 
        )
    }

    else if (icon === "printer") {
        return ( 
        <svg id="print-icon" className="doc-type" viewBox="0 0 101.1619 100.99261" xmlns="http://www.w3.org/2000/svg"><g transform="translate(-41.375084,-40.918226)"><path fill="none" stroke="#000000" stroke-width="6"  stroke-linejoin="round" stroke-miterlimit="4" stroke-dasharray="none" stroke-opacity="1" d="m 99.327349,45.755169 c -0.0064,4.99868 -0.01273,9.997361 -0.0191,14.996041 5.742951,0.100557 11.485891,0.201113 17.228841,0.30167 m -43.113776,66.14707 c 11.040729,0 22.081457,0 33.122186,0 m -33.292968,-9.34333 c 8.659391,0 17.318782,0 25.978173,0 M 73.77132,109.03593 c 11.040727,0 22.081453,0 33.12218,0 M 66.456541,74.729802 c 16.999666,10e-7 33.999329,2e-6 50.998999,3e-6 m 22.08145,25.978175 c 0,-8.659392 0,-17.318783 0,-25.978175 -7.36048,0 -14.72097,0 -22.08145,0 m 22.08145,14.53528 c 0,8.659392 0,17.318785 0,25.978175 -7.36048,0 -14.72097,0 -22.08145,0 m 0.45925,-40.97269 c 0,-5.018211 1e-5,-10.036422 1e-5,-15.054633 -5.95491,-4.931332 -11.50419,-10.58451 -17.49563,-15.297711 -2.821043,0 -5.642085,0 -8.463128,0 m -25.4995,30.811576 c 0,-10.270525 0,-20.541051 0,-30.811576 8.499833,0 16.999667,0 25.4995,0 m 25.416698,86.055504 c 0,-10.27052 0,-20.54105 0,-30.811571 -8.49983,0 -16.99966,0 -25.499493,0 M 66.373746,129.97373 c 0,-10.27052 0,-20.54105 0,-30.811571 8.499834,0 16.999667,0 25.499501,0 m 25.582293,8.937111 c 0,10.27052 0,20.54105 0,30.81157 -8.49983,0 -16.99966,0 -25.499497,0 M 66.456542,108.09927 c 0,10.27052 0,20.54105 0,30.81157 8.499834,0 16.999667,0 25.499501,0 M 44.375084,100.70798 c 0,-8.659393 0,-17.318785 0,-25.978178 7.360486,0 14.720972,0 22.081458,0 m -22.081458,14.53528 c 0,8.659393 0,17.318788 0,25.978178 7.360486,0 14.720972,0 22.081458,0" /></g></svg>
        )
    }

}

export default Icon