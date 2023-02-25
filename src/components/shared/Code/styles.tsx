import styled from "styled-components";

interface darkMode {
    darkMode: boolean;
}

export const CodeContainer = styled.div`
    width: 100%;
`

export const CodeHeader = styled.div<darkMode>`
    display: flex;
    align-items: center;
    gap: 40px;
    padding: 0px 20px;
    box-shadow: inset 0 -3px 0 ${props => props.darkMode ? "#5B5B5B" : "#E6E6E6"};
    transition: box-shadow 0.4s;
    button{
        color: ${props => props.darkMode ? "#FAFBFC" : "#464646"};
        background-color: transparent;
        border: none;
        line-height: 40px;
        font-size: 15px;
        border-bottom: 3px solid transparent;
        transition: color 0.4s, border 0.4s;
        &.active{
            color: ${props => props.darkMode ? "#BF5EFF" : "#5E36FF"};
            font-weight: bold;
            border-bottom: 3px solid ${props => props.darkMode ? "#BF5EFF" : "#5E36FF"};
            transition: color 0.4s, border 0.4s;
        }
    }
`

export const CodesTextContainer = styled.div<darkMode>`
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 15px;
        margin-top: 10px;
        div [class*="c"]{
                color: red;
            }
        div.code{
            background-color: #191622;
            border-radius: 8px;
            padding: 15px;
            p{
                white-space: pre-wrap;
                color: #FAFBFC;
                
            }
        }
        
    `