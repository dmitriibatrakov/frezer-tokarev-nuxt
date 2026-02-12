<template>
  <svg xmlns="http://www.w3.org/2000/svg" style="display: none">
    <symbol id="FT-logo" viewBox="0 0 320 320">
      <g>
        <path
          id="svg_3"
          stroke="null"
          d="m109.34546,60.71818c-8.3,3.2 -17.6,12.6 -17.6,17.8c0,2.6 2.3,5.1 5.8,6.1c1.2,0.4 2.2,1.2 2.2,1.8c0,1.2 -14.7,29.8 -16,31.1c-0.4,0.5 -1.9,0.1 -3.3,-0.8c-7.4,-4.8 -12.9,2.4 -12.8,16.6c0,6.8 0.5,9.2 2.6,13.6c1.5,2.9 3.8,6.2 5.3,7.4l2.7,2.1l-4.8,9.1c-19.3,36.8 -24.7,48.4 -24.7,53.1c0,10.1 7.3,17.7 17.2,17.8c6.1,0.1 10.4,-1.8 14,-6c1.3,-1.6 8.7,-15.3 16.3,-30.4l13.9,-27.5l10,4.8c12.2,6 16.5,6.3 25.2,1.9c11.7,-6 19,-15.6 15.6,-20.6c-0.4,-0.6 -10.5,-6.2 -22.4,-12.3c-12,-6.2 -21.8,-11.7 -21.8,-12.2c0,-1.3 14.9,-30.9 15.5,-30.9c0.3,0 10.5,5 22.7,11.1c25,12.5 25.7,12.6 29.2,5.4c2.7,-5.7 2.7,-16.5 -0.1,-22.7c-5,-11 -5.6,-11.4 -36.1,-26.8c-19.2,-9.6 -20.8,-10.2 -27.5,-10.6c-4.9,-0.3 -8.5,0.1 -11.1,1.1z"
        />
        <path
          id="svg_4"
          stroke="null"
          d="m260.64546,122.31818c-5.5,0.4 -21.5,1.5 -35.5,2.4c-28.6,1.8 -50.9,4.1 -55.7,5.6c-6.7,2.1 -10.8,10.8 -8.3,17c2,4.7 7.3,8.3 11.2,7.5c3.9,-0.7 34.1,-3.6 34.4,-3.3c0.1,0.1 -1.1,5.1 -2.6,11.2c-1.5,6 -8,31.8 -14.4,57.2c-6.4,25.3 -11.6,47.5 -11.6,49.2c0,2 1,4.2 2.8,6.2c2.7,3.1 3.2,3.2 10.4,3.3c13.3,0.1 15.8,-3.4 22.6,-32.4c4.5,-18.8 12.5,-52.4 17.8,-74.4c2.5,-10.3 3.4,-16 3,-18.7c-0.6,-3.5 -0.4,-3.8 2.2,-4.3c1.5,-0.3 10.1,-0.8 19.2,-1.1c18.7,-0.8 22.7,-1.9 28,-8.3c4,-4.8 3.4,-9.1 -1.8,-14.5c-4,-4.1 -3.4,-4.1 -21.7,-2.6z"
        />
        <path
          id="svg_28"
          stroke-width="3"
          d="m10,10l300,0"
          opacity="undefined"
          stroke="#000000"
          fill="none"
        />
        <line
          id="svg_32"
          stroke-width="3"
          y2="310"
          x2="307"
          y1="310"
          x1="10"
          stroke="#000000"
          fill="none"
        />
        <line
          id="svg_34"
          y2="311"
          x2="11"
          y1="9"
          x1="11"
          stroke-width="3"
          stroke="#000000"
          fill="none"
        />
        <line
          id="svg_35"
          y2="311.40816"
          x2="308.55105"
          y1="9.40816"
          x1="308.55105"
          stroke-width="3"
          stroke="#000000"
          fill="none"
        />
      </g>
    </symbol>
    <symbol id="ix-pen" viewBox="0 0 512 512">
      <path
        fill="currentColor"
        fill-rule="evenodd"
        d="M469.334 426.667v42.667H42.667v-42.667zM320 42.667l106.667 106.667L192 384H85.334V277.334zM249.747 173.25L128 294.998v46.336h46.336l121.747-121.748zM320 102.998l-40.083 40.082l46.336 46.336l40.083-40.082z"
      ></path>
    </symbol>
    <symbol id="clipboard-check" viewBox="0 0 24 24">
      <!-- Icon from Material Design Icons by Pictogrammers - https://github.com/Templarian/MaterialDesign/blob/master/LICENSE -->
      <path
        fill="currentColor"
        d="M19 3h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-7 0a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1M7 7h10V5h2v14H5V5h2zm.5 6.5L9 12l2 2l4.5-4.5L17 11l-6 6z"
      ></path>
    </symbol>
    <symbol id="chart" viewBox="0 0 24 24">
      <!-- Icon from Material Symbols by Google - https://github.com/google/material-design-icons/blob/master/LICENSE -->
      <path
        fill="currentColor"
        d="M7.4 22L6 20.6l6.9-6.925l3.5 3.5L21.575 12L23 13.425L16.4 20l-3.5-3.5zM4 21q-.825 0-1.412-.587T2 19V5q0-.825.588-1.412T4 3h14q.825 0 1.413.588T20 5v4.2H4zM4 7.2h14V5H4zm0 0V5z"
      ></path>
    </symbol>
    <symbol id="handshake" viewBox="0 0 24 24">
      <!-- Icon from Material Symbols by Google - https://github.com/google/material-design-icons/blob/master/LICENSE -->
      <path
        fill="currentColor"
        d="M11.875 20q.1 0 .2-.05t.15-.1l8.2-8.2q.3-.3.438-.675t.137-.75q0-.4-.137-.763t-.438-.637l-4.25-4.25q-.275-.3-.638-.437T14.776 4q-.375 0-.75.138t-.675.437l-.275.275l1.85 1.875q.375.35.55.8t.175.95q0 1.05-.712 1.763t-1.763.712q-.5 0-.962-.175t-.813-.525L9.525 8.4L5.15 12.775q-.075.075-.112.163T5 13.125q0 .2.15.363t.35.162q.1 0 .2-.05t.15-.1l2.7-2.7q.275-.275.688-.288t.712.288q.275.275.275.7t-.275.7l-2.675 2.7q-.075.075-.112.163t-.038.187q0 .2.15.35t.35.15q.1 0 .2-.05t.15-.1l2.7-2.675q.275-.275.688-.288t.712.288q.275.275.275.7t-.275.7l-2.675 2.7q-.075.05-.112.15t-.038.2q0 .2.15.35t.35.15q.1 0 .188-.038t.162-.112l2.7-2.675q.275-.275.688-.288t.712.288q.275.275.275.7t-.275.7l-2.7 2.7q-.075.075-.112.163t-.038.187q0 .2.163.35t.362.15m-.025 2q-.925 0-1.637-.612t-.838-1.538q-.85-.125-1.425-.7t-.7-1.425q-.85-.125-1.412-.712T5.15 15.6q-.95-.125-1.55-.825t-.6-1.65q0-.5.188-.962t.537-.813L8.1 6.975Q8.675 6.4 9.513 6.4t1.412.575L12.8 8.85q.05.075.15.113t.2.037q.225 0 .375-.137t.15-.363q0-.1-.038-.2t-.112-.15L9.95 4.575q-.275-.3-.637-.437T8.55 4q-.375 0-.75.138t-.675.437L3.6 8.125q-.35.35-.5.825t-.075.95q.075.425-.175.75t-.675.375t-.75-.188t-.375-.662q-.15-.95.138-1.862T2.175 6.7L5.7 3.175Q6.3 2.6 7.038 2.3T8.55 2t1.513.3t1.312.875l.275.275l.275-.275q.6-.575 1.338-.875t1.512-.3t1.513.3t1.312.875L21.825 7.4q.575.575.875 1.325t.3 1.525t-.3 1.513t-.875 1.312l-8.2 8.175q-.35.35-.812.55t-.963.2M9.4 8"
      ></path>
    </symbol>
    <symbol id="gear-perfect" viewBox="0 0 24 24">
      <!-- Icon from Material Symbols by Google - https://github.com/google/material-design-icons/blob/master/LICENSE -->
      <path
        fill="currentColor"
        d="m18.525 9l-1.1-2.4l-2.4-1.1l2.4-1.1l1.1-2.4l1.1 2.4l2.4 1.1l-2.4 1.1l-1.1 2.4Zm2 7l-.8-1.7l-1.7-.8l1.7-.8l.8-1.7l.8 1.7l1.7.8l-1.7.8l-.8 1.7Zm-13 6l-.3-2.35q-.2-.075-.387-.2t-.313-.25l-2.2.95L1.85 15.8l1.875-1.4v-.8L1.85 12.2l2.475-4.35l2.2.95q.125-.125.313-.25t.387-.2l.3-2.35h5l.3 2.35q.2.075.388.2t.312.25l2.2-.95L18.2 12.2l-1.875 1.4v.8l1.875 1.4l-2.475 4.35l-2.2-.95q-.125.125-.312.25t-.388.2l-.3 2.35h-5Zm2.5-5q1.25 0 2.125-.875T13.025 14q0-1.25-.875-2.125T10.025 11q-1.25 0-2.125.875T7.025 14q0 1.25.875 2.125t2.125.875Zm0-2q-.425 0-.713-.288T9.025 14q0-.425.288-.713t.712-.287q.425 0 .713.288t.287.712q0 .425-.288.713t-.712.287Zm-.75 5h1.5l.2-1.8q.725-.2 1.238-.513t1.012-.837l1.65.75l.7-1.25l-1.45-1.1q.2-.575.2-1.25t-.2-1.25l1.45-1.1l-.7-1.25l-1.65.75q-.5-.525-1.012-.837T10.975 9.8l-.2-1.8h-1.5l-.2 1.8q-.725.2-1.237.513t-1.013.837l-1.65-.75l-.7 1.25l1.45 1.1q-.2.575-.213 1.25t.213 1.25l-1.45 1.1l.7 1.25l1.65-.75q.5.525 1.012.838t1.238.512l.2 1.8Zm.75-6Z"
      ></path>
    </symbol>
    <symbol id="ruler" viewBox="0 0 24 24">
      <!-- Icon from Tabler Icons by Paweł Kuna - https://github.com/tabler/tabler-icons/blob/master/LICENSE -->
      <path
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M12 19.875c0 .621-.512 1.125-1.143 1.125H5.143A1.134 1.134 0 0 1 4 19.875V4a1 1 0 0 1 1-1h5.857C11.488 3 12 3.504 12 4.125zM12 9h-2m2-3H9m3 6H9m3 6H9m3-3h-2M21 3h-4m2 0v18m2 0h-4"
      ></path>
    </symbol>
    <symbol id="puzzle" viewBox="0 0 24 24">
      <!-- Icon from Material Design Icons by Pictogrammers - https://github.com/Templarian/MaterialDesign/blob/master/LICENSE -->
      <path
        fill="currentColor"
        d="M13.2 22v-.3c0-1.49-1.2-2.7-2.7-2.7s-2.7 1.21-2.7 2.7v.3H4a2 2 0 0 1-2-2v-3.8h.3C3.79 16.2 5 15 5 13.5s-1.21-2.7-2.7-2.7H2V7c0-1.1.9-2 2-2h3.04c.24-1.7 1.7-3 3.46-3s3.22 1.3 3.46 3H17a2 2 0 0 1 2 2v3.04c1.45.21 2.61 1.3 2.91 2.72A5.95 5.95 0 0 0 19 12h-2V7h-5V5.5c0-.83-.67-1.5-1.5-1.5S9 4.67 9 5.5V7H4v2.12c1.76.68 3 2.38 3 4.38s-1.25 3.7-3 4.38V20h2.12a4.7 4.7 0 0 1 4.38-3c.93 0 1.79.28 2.5.74V18c0 1.54.58 2.94 1.54 4zm5.8-1.91l-2.5 1.49l.68-2.81L15 16.89l2.87-.25L19 14l1.11 2.64l2.89.25l-2.2 1.88l.65 2.81z"
      ></path>
    </symbol>
    <symbol id="tool" viewBox="0 0 24 24">
      <!-- Icon from Material Symbols by Google - https://github.com/google/material-design-icons/blob/master/LICENSE -->
      <path
        fill="currentColor"
        d="m19.275 19.8l.7-.7L12 11.125q.475-.575.738-1.3T13 8.3q0-1.875-1.313-3.175T8.5 3.825h-.25L11.325 6.9l-4.25 4.225L4 8.05v.275Q4 10.2 5.312 11.5T8.5 12.8q.8 0 1.513-.263T11.3 11.8l7.975 8ZM5.375 3.25q0-.725.775-1.088T8.5 1.8q2.725 0 4.612 1.888T15 8.3q0 .65-.125 1.288T14.5 10.8l6.875 6.875q.575.575.588 1.413T21.4 20.5l-.675.7q-.575.6-1.413.613t-1.437-.588l-6.9-6.9q-.575.25-1.2.363t-1.25.112q-2.725 0-4.612-1.887T2.025 8.3q0-1.6.35-2.363t1.075-.762q.25 0 .463.088t.387.262L7.075 8.3L8.5 6.9L5.725 4.125q-.175-.175-.263-.4t-.087-.475ZM9.2 9Z"
      ></path>
    </symbol>
    <symbol id="telegram" viewBox="0 0 24 24" ><!-- Icon from Material Line Icons by Vjacheslav Trushkin - https://github.com/cyberalien/line-md/blob/master/license.txt --><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="20" stroke-dashoffset="20" d="M21 5l-2.5 15M21 5l-12 8.5"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="20;0"></animate></path><path stroke-dasharray="24" stroke-dashoffset="24" d="M21 5l-19 7.5"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="24;0"></animate></path><path stroke-dasharray="14" stroke-dashoffset="14" d="M18.5 20l-9.5 -6.5"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.3s" values="14;0"></animate></path><path stroke-dasharray="10" stroke-dashoffset="10" d="M2 12.5l7 1"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.3s" values="10;0"></animate></path><path stroke-dasharray="8" stroke-dashoffset="8" d="M12 16l-3 3M9 13.5l0 5.5"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.3s" values="8;0"></animate></path></g></symbol>
    <symbol id="copy" viewBox="0 0 24 24" ><!-- Icon from Material Symbols by Google - https://github.com/google/material-design-icons/blob/master/LICENSE --><path fill="currentColor" d="M9 18q-.825 0-1.412-.587T7 16V4q0-.825.588-1.412T9 2h9q.825 0 1.413.588T20 4v12q0 .825-.587 1.413T18 18zm0-2h9V4H9zm-4 6q-.825 0-1.412-.587T3 20V6h2v14h11v2zm4-6V4z"></path></symbol>
    <symbol id="email" viewBox="0 0 24 24" ><!-- Icon from Material Symbols by Google - https://github.com/google/material-design-icons/blob/master/LICENSE --><path fill="currentColor" d="M12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12v1.45q0 1.475-1.012 2.513T18.5 17q-.875 0-1.65-.375t-1.3-1.075q-.725.725-1.638 1.088T12 17q-2.075 0-3.537-1.463T7 12t1.463-3.537T12 7t3.538 1.463T17 12v1.45q0 .65.425 1.1T18.5 15t1.075-.45t.425-1.1V12q0-3.35-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20h4q.425 0 .713.288T17 21t-.288.713T16 22zm0-7q1.25 0 2.125-.875T15 12t-.875-2.125T12 9t-2.125.875T9 12t.875 2.125T12 15"></path></symbol>
  </svg>
</template>
