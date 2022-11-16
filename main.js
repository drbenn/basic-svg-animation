import './style.css'
import javascriptLogo from './javascript.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
  <svg width="80" height="243" viewBox="0 0 80 243" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path 
    id="curlyArrow"
    d="M30 2C30 14.141 27.2126 26.9016 30.2222 38.6667C31.8668 45.0955 36 50.5742 36 57.5C36 59.8333 36 62.1667 36 64.5C36 69.2715 34.246 73.5721 34 78C33.739 82.6984 30.4926 86.5537 29.2222 91C27.9922 95.305 21.6899 96 17.5 96C11.4347 96 12.8559 81.5461 15 79C18.4461 74.9078 24.0934 69.1657 30.3889 72.5556C33.9898 74.4945 34.6065 81.4581 35 85C35.1844 86.66 38.6645 90.6645 40 92C42.712 94.712 42.9291 96.5554 47.0556 95.4444C55.0994 93.2788 63.2455 94 71.6111 94C74.7468 94 76.3168 93.7597 77.7778 91C80.3383 86.1635 72.544 79.6801 70 76.5C66.8451 72.5563 58.3456 83.0624 58 86C57.3907 91.1792 57 96.88 57 102.556C57 114.399 55.1278 125.709 53.2222 137.333C52.6276 140.96 50.4777 143.832 49.2222 147.222C47.7959 151.073 45.4604 150.264 42 151.5C37.0275 153.276 27.6549 152.324 23.5 149C19.9277 146.142 16.7336 139.528 17 135C17.3067 129.785 27.2271 127 31.5 127C38.3691 127 60 130.248 60 139C60 147.428 58.0792 150.573 51.7778 156.222C45.3028 162.027 38.0146 164 29.6111 164C25.2185 164 20.8311 162.518 16.5556 161.5C15.063 161.145 11.8348 158.771 10.2222 160.222C5.20799 164.735 -0.145977 172.185 3.05556 179.389C4.25074 182.078 5.53408 184.879 7 187.444C7.66606 188.61 10.0686 189.153 11.1667 189.556C15.567 191.169 19.449 193.795 24 195C27.1141 195.824 40.4546 196.796 41.0556 199.5C42.0566 204.005 43.4904 208.887 45.2222 213C47.3733 218.109 46 225.927 46 231.5C46 233.833 46 236.167 46 238.5C46 244.596 39.9852 235.985 38.4444 234.444C36.3925 232.392 33.7165 233 31 233C27.8518 233 37.3104 233.243 40.4444 232.944C43.2764 232.675 45.5634 231 48.5 231C49.7167 231 58.8988 229.982 56.7778 230.778C53.6018 231.969 53.9172 234.157 51.5 235.5C49.5606 236.577 48 236.258 48 239" stroke="#484848" stroke-width="3" stroke-linecap="round"/>
    </svg>

    




    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`
// 1.create svg path that is styled with a stroke and then exported to html(Figma, export svg)
// 2. add svg to doc, add id in svg path (in example "curlyArrow")
// 3. In css add #curlyArrow stroke-dasharray with value the same length as the path itself
//  3a. To find length in local server, go to console, run "p = document.getElementById('curlyArrow')" then "p.getTotalLength()"
// 4. make svg invisible by adding css stroke-dashoffset = to same total length
// 5. create keyframes animation
setupCounter(document.querySelector('#counter'))
