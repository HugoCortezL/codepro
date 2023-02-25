import styled from "styled-components";

interface OperationContainerProps {
    width: string;
    darkMode: boolean
}

export const OperationContainer = styled.div<OperationContainerProps>`
    width: 100%;
    h2{
        color: ${props => props.darkMode ? "#FAFBFC" : "#464646"};
        transition: color 0.4s;
    }
    div.options{
        margin-top: 10px;
        height: 96px;
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
            transition: background-color 0.4s;
        }
        
        ::-webkit-scrollbar-thumb:hover {
            background: ${props => props.darkMode ? "#3e38b0" : "#960457"};
            transition: background-color 0.4s;
        }
        .container {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            width: ${props => props.width};
            min-width: 100%;
            button{
                width: 100px;
                height: 38px;
                background-color: ${props => props.darkMode ? "#464646" : "#FAFBFC"};
                border: 1px solid ${props => props.darkMode ? "#BF5EFF" : "#5E36FF"};
                color: ${props => props.darkMode ? "#BF5EFF" : "#5E36FF"};
                padding: 10px 0;
                border-radius: 5px;
                transition: color 0.4s, border 0.4s, background-color 0.4s;
                &:hover{
                    border: 1px solid transparent;
                    background-color: ${props => props.darkMode ? "#BF5EFF" : "#5E36FF"};
                    color: ${props => props.darkMode ? "#464646" : "#FAFBFC"};
                    transition: color 0.4s, border 0.4s, background-color 0.4s;
                }
            }
        }
    }
`
