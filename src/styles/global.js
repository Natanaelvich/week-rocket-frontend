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
        -webkit-font-smoothing : antialiased !important;
    }
    body,input,button{
        font : 14px Roboto, sans-serif;
    }
    #root{
        max-width : 1202px;
        margin : 0 auto;
        padding : 0 20px 50px; 
    }
    button{
        cursor: pointer;
    }
`;
