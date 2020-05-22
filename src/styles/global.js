import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';
import '~/assets/fonts/roboto.css';

export default createGlobalStyle`
    *{
        margin :0;
        padding : 0;
        outline : 0;
        box-sizing : border-box;
    } 
    body {
        background : #353940;
        color : #fff;
        text-rendering : optimizeLegibility !important;
        -webkit-font-smoothing : antialiased !important;
    }

    html, body, #root{
        height : 100%;
    }
    
    body,input,button{
        font : 14px Roboto, sans-serif;
    }
  
    button{
        cursor: pointer;
    }
`;
