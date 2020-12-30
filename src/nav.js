import React from 'react'
import './index.css'
import {NavLink} from 'react-router-dom'

function Nav(props)  {
    return (
      <nav class="navbar">
        <ul class="nav-list">
          <li class="nav-item" id="logo">
            <NavLink exact to="/" activeClassName="nav-link active" className="nav-link" id="logo-link">
              <p id="a">A<br /><br /></p>
              <p id="h"><br />H</p>
            </NavLink>
          </li>          

          <li class="nav-item">
            <NavLink exact to="/" activeClassName="nav-link active" className="nav-link">
              <span class="link-text">Home</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"> <path id="Imported Path" fill="currentColor" stroke="none" stroke-width="1" d="M 280.37,148.26 C 280.37,148.26 96.00,300.11 96.00,300.11 96.00,300.11 96.00,464.00 96.00,464.00 96.00,472.84 103.16,480.00 112.00,480.00 112.00,480.00 224.06,479.71 224.06,479.71 232.86,479.67 239.98,472.52 239.98,463.71 239.98,463.71 239.98,463.71 239.98,463.71 239.98,463.71 239.98,368.00 239.98,368.00 239.98,359.16 247.14,352.00 255.98,352.00 255.98,352.00 319.98,352.00 319.98,352.00 328.82,352.00 335.98,359.16 335.98,368.00 335.98,368.00 335.98,463.64 335.98,463.64 335.98,463.66 335.98,463.67 335.98,463.69 335.98,472.53 343.14,479.69 351.98,479.69 351.98,479.69 351.98,479.69 351.98,479.69 351.98,479.69 464.00,480.00 464.00,480.00 472.84,480.00 480.00,472.84 480.00,464.00 480.00,464.00 480.00,300.00 480.00,300.00 480.00,300.00 295.67,148.26 295.67,148.26 293.58,146.57 290.92,145.56 288.02,145.56 285.12,145.56 282.46,146.57 280.37,148.26 280.37,148.26 280.37,148.26 280.37,148.26 Z M 571.60,251.47 C 571.60,251.47 488.00,182.56 488.00,182.56 488.00,182.56 488.00,44.05 488.00,44.05 488.00,37.42 482.63,32.05 476.00,32.05 476.00,32.05 420.00,32.05 420.00,32.05 413.37,32.05 408.00,37.42 408.00,44.05 408.00,44.05 408.00,116.66 408.00,116.66 408.00,116.66 318.47,43.00 318.47,43.00 310.18,36.17 299.55,32.06 287.97,32.06 276.39,32.06 265.76,36.17 257.47,43.00 257.47,43.00 4.34,251.47 4.34,251.47 1.68,253.67 -0.01,257.00 -0.01,260.72 -0.01,263.63 1.02,266.29 2.74,268.37 2.74,268.37 28.24,299.37 28.24,299.37 30.44,302.04 33.78,303.75 37.51,303.75 40.41,303.75 43.07,302.72 45.15,301.00 45.15,301.00 280.37,107.26 280.37,107.26 282.46,105.57 285.12,104.56 288.02,104.56 290.92,104.56 293.58,105.57 295.67,107.26 295.67,107.26 530.90,301.00 530.90,301.00 532.98,302.72 535.64,303.75 538.55,303.75 542.27,303.75 545.60,302.06 547.80,299.40 547.80,299.40 573.30,268.40 573.30,268.40 575.01,266.33 576.03,263.67 576.03,260.78 576.03,257.02 574.30,253.67 571.60,251.47 571.60,251.47 571.60,251.47 571.60,251.47 Z" /> </svg>
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink to="/projects"  activeClassName="nav-link active" className="nav-link">
              <span class="link-text">Projects</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"> <path id="Imported Path" fill="currentColor" stroke="none" stroke-width="1" d="M 278.90,511.50 C 278.90,511.50 217.90,493.80 217.90,493.80 211.50,492.00 207.90,485.30 209.70,478.90 209.70,478.90 346.20,8.70 346.20,8.70 348.00,2.30 354.70,-1.30 361.10,0.50 361.10,0.50 422.10,18.20 422.10,18.20 428.50,20.00 432.10,26.70 430.30,33.10 430.30,33.10 293.80,503.30 293.80,503.30 291.90,509.70 285.30,513.40 278.90,511.50 278.90,511.50 278.90,511.50 278.90,511.50 Z M 164.90,399.30 C 164.90,399.30 208.40,352.90 208.40,352.90 213.00,348.00 212.70,340.20 207.60,335.70 207.60,335.70 117.00,256.00 117.00,256.00 117.00,256.00 207.60,176.30 207.60,176.30 212.70,171.80 213.10,163.20 190.40,163.20 190.40,163.20 146.90,116.80 146.90,116.80 142.40,112.00 134.80,111.70 129.90,116.30 129.90,116.30 3.80,247.20 3.80,247.20 -1.30,251.90 -1.30,260.00 3.80,264.70 3.80,264.70 147.90,399.80 147.90,399.80 152.80,404.40 160.40,404.20 164.90,399.30 164.90,399.30 164.90,399.30 164.90,399.30 Z M 492.70,399.30 C 492.70,399.30 636.80,264.20 636.80,264.20 641.90,259.50 641.90,251.40 636.80,246.70 636.80,246.70 492.10,112.10 492.10,112.10 487.30,107.60 479.70,107.80 475.10,111.60 475.10,111.60 431.60,159.00 431.60,159.00 427.00,163.90 427.30,172.50 448.80,172.50 448.80,172.50 523.00,256.00 523.00,256.00 523.00,256.00 432.40,335.70 432.40,335.70 427.30,340.20 426.90,348.00 431.60,352.90 431.60,352.90 475.10,399.30 475.10,399.30 479.60,404.20 487.20,404.40 492.10,399.90 492.10,399.90 492.70,399.30 492.70,399.30 Z" /> </svg>
            </NavLink>
          </li>
          
          <li class="nav-item">
            <NavLink to="/resume" activeClassName="nav-link active" className="nav-link">
              <span class="link-text">Resume</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"> <path id="Imported Path" fill="currentColor" stroke="none" stroke-width="1" d="M 288.00,248.00 C 288.00,248.00 288.00,276.00 288.00,276.00 288.00,282.60 282.60,288.00 276.00,288.00 276.00,288.00 108.00,288.00 108.00,288.00 101.40,288.00 96.00,282.60 96.00,276.00 96.00,276.00 96.00,248.00 96.00,248.00 96.00,241.40 101.40,236.00 108.00,236.00 108.00,236.00 276.00,236.00 276.00,236.00 282.60,236.00 288.00,241.40 288.00,248.00 Z M 276.00,320.00 C 276.00,320.00 108.00,320.00 108.00,320.00 101.40,320.00 96.00,325.40 96.00,332.00 96.00,332.00 96.00,360.00 96.00,360.00 96.00,366.60 101.40,372.00 108.00,372.00 108.00,372.00 276.00,372.00 276.00,372.00 282.60,372.00 288.00,366.60 288.00,360.00 288.00,360.00 288.00,332.00 288.00,332.00 288.00,325.40 282.60,320.00 276.00,320.00 Z M 384.00,131.90 C 384.00,131.90 384.00,464.00 384.00,464.00 384.00,490.50 362.50,512.00 336.00,512.00 336.00,512.00 48.00,512.00 48.00,512.00 21.50,512.00 0.00,490.50 0.00,464.00 0.00,464.00 0.00,48.00 0.00,48.00 0.00,21.50 21.50,0.00 48.00,0.00 48.00,0.00 252.10,0.00 252.10,0.00 264.80,0.00 277.00,5.10 286.00,14.10 286.00,14.10 369.90,98.00 369.90,98.00 378.90,106.90 384.00,119.20 384.00,131.90 Z M 256.00,51.90 C 256.00,51.90 256.00,128.00 256.00,128.00 256.00,128.00 332.10,128.00 332.10,128.00 332.10,128.00 256.00,51.90 256.00,51.90 256.00,51.90 256.00,51.90 256.00,51.90 Z M 336.00,464.00 C 336.00,464.00 336.00,176.00 336.00,176.00 336.00,176.00 232.00,176.00 232.00,176.00 218.70,176.00 208.00,165.30 208.00,152.00 208.00,152.00 208.00,48.00 208.00,48.00 208.00,48.00 48.00,48.00 48.00,48.00 48.00,48.00 48.00,464.00 48.00,464.00 48.00,464.00 336.00,464.00 336.00,464.00 Z" /> </svg>
            </NavLink>
          </li>
        </ul>
      </nav>
    );
}

export default Nav;