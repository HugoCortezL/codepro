import styled from "styled-components";

export const CategoryContainer = styled.div`

`

export const ListContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    margin-top: 10px;
`

export const ListCard = styled.div`
    background-color: #FAFBFC;
    border-radius: 2px;
    box-shadow: 0px 0px 4px #C2C2C2;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    div.text{
        padding: 10px;
    }
    div.options{
        div.divisor{
            padding: 0px;
            width: 100%;
            border:1px solid #E6E6E6;
        }
        div.button{
            padding: 10px;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            button{
                background: #5E36FF;
                border-radius: 4px;
                border: none;
                padding: 6px 15px;
                color: #FAFBFC;
            }
        }
    }
    h4{
        font-size: 1.33em;
    }
`