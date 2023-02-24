import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body{
        font-size: 15px;
        font-family: "Poppins";
        color: #464646;
        -webkit-font-smoothing: antialiased !important;
        -webkit-text-size-adjust: 100% !important;
        overflow-x: hidden;
        ::-webkit-scrollbar {
            width: 6px;
        }

        ::-webkit-scrollbar-track {
            background: transparent;
        }

        ::-webkit-scrollbar-thumb {
            background: #5E36FF;
            border-radius: 3px;
            cursor: pointer;
        }

        ::-webkit-scrollbar-thumb:hover {
            background: #4E2CD7;
        }
    }
    
    a{
        text-decoration: none;
        color: inherit;
    }
    
    h1, h2, h3, h4, h5, h6 {
        font-family: "Lato";
        color: #464646;
    }

    button{
        cursor: pointer;
    }
`