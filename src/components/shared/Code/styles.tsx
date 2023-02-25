import styled from "styled-components";


export const CodeContainer = styled.div`
    width: 100%;
`

export const CodeHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 40px;
    padding: 0px 20px;
    box-shadow: inset 0 -3px 0 #E6E6E6;
    button{
        color: #464646;
        background-color: transparent;
        border: none;
        line-height: 40px;
        font-size: 15px;
        border-bottom: 3px solid transparent;
        transition: color 0.2s, border 0.2s;
        &.active{
            color: #5E36FF;
            font-weight: bold;
            border-bottom: 3px solid #5E36FF;
            transition: color 0.2s, border 0.2s;
        }
    }
`

export const CodesTextContainer = styled.div`
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