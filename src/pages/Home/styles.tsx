import styled from "styled-components";

export const HomeContainer = styled.div`

`

export const ListContainer = styled.div`
    margin: 20px 0px 40px;
    &:last-child{
        margin: 20px 0px 0px;
    }
    div.title{
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        h3{
            font-size: 1.66em;
        }
        span{
            color: blue;
            text-decoration: underline;
            font-size: 0.9em;
            cursor: pointer;
        }
    }
    div.content{
        padding: 5px;
        margin-top: 5px;
        display: flex;
        width: 100%;
        gap: 20px;
        overflow-x: scroll;
        
        ::-webkit-scrollbar {
            height: 6px;
        }

        ::-webkit-scrollbar-track {
            background: transparent;
        }

        ::-webkit-scrollbar-thumb {
            background: #B70569;
            border-radius: 3px;
            cursor: pointer;
        }

        ::-webkit-scrollbar-thumb:hover {
            background: #960457;
        }
    }
`

export const ListCard = styled.div`
    background-color: #FAFBFC;
    border-radius: 2px;
    box-shadow: 0px 0px 4px #C2C2C2;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-width: calc((100% - 60px) / 3.7);
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