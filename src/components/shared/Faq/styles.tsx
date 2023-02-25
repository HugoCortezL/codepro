import styled from "styled-components";

interface darkMode {
    darkMode: boolean;
}

export const FaqContainer = styled.div<darkMode>`
    width: 100%;
    h2{
        color: ${props => props.darkMode ? "#FAFBFC" : "#464646"};
        transition: color 0.4s;
    }
    div.questions{
        margin-top: 10px;
        display: flex;
        flex-direction: column;
        gap: 15px;
    }
`

export const FaqCard = styled.details<darkMode>`
    width: 100%;
    color: ${props => props.darkMode ? "#FAFBFC" : "#464646"};
    border: 1px solid ${props => props.darkMode ? "#5B5B5B" : "#E6E6E6"};
    box-shadow: 0px 0px 4px #C2C2C2;
    border-radius: 5px;
    padding: 15px;
    cursor: pointer;
    max-height: 62px;
    overflow: hidden;
    transition: max-height 0.5s, color 0.4s, border 0.4s;
    &[open] {
        max-height: 1000px;
        transition: max-height 0.5s ;
    }   
    summary{
        font-size: 1.33em;
    }
    div.divisor{
        margin: 15px 0;
        border: 1px solid ${props => props.darkMode ? "#5B5B5B" : "#E6E6E6"};
        transition: border 0.4s;
    }
    p.answer{
        white-space: pre-wrap;
        text-align: justify;
    }
`
