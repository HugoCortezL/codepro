import styled from "styled-components";


interface darkMode {
    darkMode: boolean;
}

export const HomeContainer = styled.div<darkMode>`
    h1{
        color: ${props => props.darkMode ? "#FAFBFC" : "#464646"};
        transition: color 0.4s;
    }
`

export const ListContainer = styled.div<darkMode>`
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
            color: ${props => props.darkMode ? "#FAFBFC" : "#464646"};
            transition: color 0.4s;
        }
        span{
            color: ${props => props.darkMode ? "#BF5EFF" : "#5E36FF"};
            text-decoration: underline;
            font-size: 0.9em;
            cursor: pointer;
            transition: color 0.4s;
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
            background: ${props => props.darkMode ? "#4e47db" : "#B70569"};
            border-radius: 3px;
            cursor: pointer;
        }

        ::-webkit-scrollbar-thumb:hover {
            background: ${props => props.darkMode ? "#3e38b0" : "#960457"};
        }
    }
`

export const ListCard = styled.div<darkMode>`
    background-color: ${props => props.darkMode ? "#464646" : "#FAFBFC"};
    border-radius: 2px;
    box-shadow: 0px 0px 4px #C2C2C2;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-width: calc((100% - 60px) / 3.7);
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