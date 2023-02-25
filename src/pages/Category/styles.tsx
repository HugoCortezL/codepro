import styled from "styled-components";

interface darkMode {
    darkMode: boolean;
}

export const CategoryContainer = styled.div<darkMode>`
    h1{
        color: ${props => props.darkMode ? "#FAFBFC" : "#464646"};
        transition: color 0.4s;
    }
`

export const ListContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    margin-top: 10px;
`

export const ListCard = styled.div<darkMode>`
    background-color: ${props => props.darkMode ? "#464646" : "#FAFBFC"};
    border-radius: 2px;
    box-shadow: 0px 0px 4px #C2C2C2;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: background-color 0.4s;
    div.text{
        padding: 10px;
        color: ${props => props.darkMode ? "#FAFBFC" : "#464646"};
        transition: color 0.4s;
        h4{
            color: ${props => props.darkMode ? "#FAFBFC" : "#464646"};
            transition: color 0.4s;
        }
    }
    div.options{
        div.divisor{
            padding: 0px;
            width: 100%;
            border: 1px solid ${props => props.darkMode ? "#5B5B5B" : "#E6E6E6"};
            transition: border 0.4s;
        }
        div.button{
            padding: 10px;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            button{
                background-color: ${props => props.darkMode ? "#BF5EFF" : "#5E36FF"};
                border-radius: 4px;
                border: none;
                padding: 6px 15px;
                color: #FAFBFC;
                transition: background-color 0.4s;
            }
        }
    }
    h4{
        font-size: 1.33em;
    }
`