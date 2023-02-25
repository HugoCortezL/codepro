import styled from "styled-components";


export const FaqContainer = styled.div`
    width: 100%;
    div.questions{
        margin-top: 10px;
        display: flex;
        flex-direction: column;
        gap: 15px;
    }
`

export const FaqCard = styled.details`
    width: 100%;
    border: 1px solid #E6E6E6;
    box-shadow: 0px 0px 4px #C2C2C2;
    border-radius: 5px;
    padding: 15px;
    cursor: pointer;
    max-height: 62px;
    overflow: hidden;
    transition: max-height 2s;
    &[open] {
        max-height: 1000px;
        transition: max-height 2s ;
    }   
    summary{
        font-size: 1.33em;
    }
    div.divisor{
        margin: 15px 0;
        border: 1px solid #E6E6E6;
    }
    p.answer{
        white-space: pre-wrap;
        text-align: justify;
    }
`
