import { createGlobalStyle } from 'styled-components';

const w1 = Math.ceil((1 / window.devicePixelRatio) * 10) / 10;
const CommonStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Inter';
        font-size: 62.5%;

        @media (max-width:992px){
          font-size :55% ;
          }

        @media (max-width:768px){
          font-size :45% ;
        }

        @media (max-width:546px){
          font-size :40% ;
        }
    }

    body {
        width: var(--width);
        height: var(--height);
        -webkit-font-smoothing: antialiased;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        --w1: ${w1}px;
        --_w1: ${-w1}px;
        background-color: var(--win-bg-color);
        overflow-x: hidden;
        font-size: 1.6rem !important;
    }

    input, button, select , textarea{
        border: none;
        outline: none;
        font-size: inherit;
        color: inherit;
        background: transparent;
    }

    input::placeholder , textarea::placeholder{
        color: inherit;
    }   

    .ReactModal__Overlay{
        background-color: #121212CC !important;
    }

    input , select , textarea{
    font-size: 1.6rem;
    border: 1px solid #E2E8F0;
    padding: 1.5rem;
    color: var(--text);
    width: 100%;
    border-radius: 1rem;
    }



    h1{
      font-size: 2rem;
      font-weight: 500;

    }

    h2{
      font-size: 1.8rem;
      font-weight: 500;

    }

    p{
      font-size: 1.6rem;
      font-weight: 400;
      color:var(--text) ;

    }

    h3{
      font-size: 2.4rem;

    }

    h4{
      font-size: 2.2rem;

    }

    h5{
      font-size: 1.4rem;
      font-weight: 500;

    }


    .button-fields{
        display: flex;
        gap: 1.5rem;
    }
    button{
        color:var(--white);
        border-radius: 0.5rem;
        width: 16rem;
        height: 5rem;
        font-size: 1.6rem;        
        cursor: pointer;

      &:disabled{
          background: var(--gray-medium);
          color: var(--black-text);
      }
    }

    .add-button{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 3rem 0;
    }


    .model-container{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100%;
        gap: 2rem;
    }
    .add-ingredient-container{
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        margin-top: 1.5rem;
        width: 51.2rem;

        input , select , textarea{
            height: 5.2rem;
            background-color: var(--light-gray);
            border-radius: 5px;
            outline-style: none;
            border: none;
        }
    }
    .add-term-condition-container{
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        margin-top: 1.5rem;
        height: 35rem;
        width: 76.5rem;


    }


    /* .p-custom-scrollbar-8{
            &::-webkit-scrollbar {
                width: 8px;
              }
              &::-webkit-scrollbar-thumb {
                background-color: var(--primary);
                border-radius: 200px;
              }
        } */

    .custom-scrollbar {
      overflow-y: scroll;
      /* height: 400px; Adjust height as needed */
    }

    .custom-scrollbar::-webkit-scrollbar {
    border-radius: 50%;
    height: 8px;
        width: 8px; /* Adjust width as needed */
    }

    .custom-scrollbar::-webkit-scrollbar-track {
      background: #f1f1f1; /* Track color */
    }

    .custom-scrollbar::-webkit-scrollbar-thumb {
      background: #888; /* Thumb color */
      border-radius: 10px; /* Rounded corners */
    }

    .custom-scrollbar::-webkit-scrollbar-thumb:hover {
      background: #555; /* Thumb color on hover */
    }


    .toggle-button {
      position: relative;
      display: inline-block;
      width: 57px;
      height: 30px;

      @media (max-width:992px) {
        width: 50px;
        height: 23px;
      }
    }

    .toggle-button input { 
      opacity: 0;
      width: 0;
      height: 0;
    }

    .slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #ccc;
      -webkit-transition: .4s;
      transition: .4s;
    }

    .slider:before {
      position: absolute;
      content: "";
      height: 23px;
      width: 23px;
      left: 4px;
      top: 3px;
      background-color:var(--white);
      -webkit-transition: .4s;
      transition: .4s;

      @media (max-width:992px) {    
        width: 18px;
        height: 18px;
      }
    }

    input:checked + .slider {
      background-color: #77C23E;
    }

    input:focus + .slider {
      box-shadow: 0 0 1px #77C23E;
    }

    input:checked + .slider:before {
      -webkit-transform: translateX(26px);
      -ms-transform: translateX(26px);
      transform: translateX(26px);

      @media (max-width:992px) {
        transform: translateX(24px);
      }
    }

    /* Rounded sliders */
    .slider.round {
      border-radius: 34px;
    }

    .slider.round:before {
      border-radius: 50%;
    }


    .actions{
      gap: .5rem !important;
    }


    .session-amount{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .text-editor{
        height: 30rem;
    }

    .close-button{
        position: relative;
        float: inline-end; 
        text-align: end;
        width: 3rem;
    }


    .image-container{

    display: flex;
    align-items: center;
    background-color: #f8f9fa;
    border-radius: 10px;
    padding: 5px;
    }

    .image-input-wrapper{
    position: relative;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f1f1f1;
    border-radius: 5px;
    cursor: pointer;
    margin-right: 10px;

    }

    .hidden-input{
    display: none;
    }

    .uploaded-image{
    width: 30px;
    height: 30px;
    object-fit: cover;
    border-radius: 5px;
    }

    .close-icon{
    position: absolute;
    top: -10px;
    right: -10px;
    width: 20px;
    height: 20px;
    cursor: pointer;

    }


    @media print {
        /* Styles for print */
        body {
            font-size: 20px;
            color: #000;
            background: none;
            width: 100%;
            height: 100%;
        }

        .no-print {
            display: none;
        }

        .print-only {
            display: block;
            font-size: large;
            width: 100%;
        }

        header, footer, nav, .sidebar {
            display: none;
        }

        .content {
            width: 100%;
            overflow: visible;
        }

        @page {
            margin: 1cm;
            width: 100%;
        }
    }
    .input-wrap{
      padding: 1.4rem;
        width: 100%;
        height: 5.6rem;
        display: flex;
        gap: .5rem;
        align-items: center;
        background-color:#FFFFFF1A;
        border-radius: 1rem;
    }

    .auth-input{
      width: 91.666667%;
        outline: none;
        font-size: 1.6rem;
        color: #94A3B8;
        border: none;
    }

    div:where(.swal2-container) div:where(.swal2-popup){
      font-size: 1.6rem;
      button{
        font-size: 1.6rem !important;
      }
    }

    .view-container{
      width: 31px;
      height: 32px;
      border-radius: .5rem;
      background-color: var(--primary);
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .delete-container{
      width: 31px;
      height: 32px;
      border-radius: .5rem;
      background-color: #FF0000;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .edit-container{
      width: 32px;
      height: 32px;
      border-radius: .5rem;
      background-color: var(--light-brown);
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .tooltip {
  position: relative;
  display: inline-block;
}

.tooltip .tooltiptext {
  visibility: hidden;
  width: 90px;
  background-color: #000000;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 8px;
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  margin-left: -45px;
  opacity: 0;
  transition: opacity 0.3s;
}

.tooltip .tooltiptext::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: 0px;
  border-width: 5px;
  border-style: solid;
  border-color: #000000 transparent transparent transparent;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
  opacity: 1;
}

`;


export default CommonStyles;