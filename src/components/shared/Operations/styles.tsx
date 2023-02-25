import styled from "styled-components";

interface OperationContainerProps {
    width: string;
}
export const OperationContainer = styled.div<OperationContainerProps>`
    width: 100%;
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
            background: #B70569;
            border-radius: 3px;
            cursor: pointer;
        }

        ::-webkit-scrollbar-thumb:hover {
            background: #960457;
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
                background-color: #FAFBFC;
                border: 1px solid #5E36FF;
                color: #5E36FF;
                padding: 10px 0;
                border-radius: 5px;
                transition: background-color 0.3s, color 0.3s;
                &:hover{
                    border: 1px solid transparent;
                    background-color: #5E36FF;
                    color: #FAFBFC;
                    transition: background-color 0.3s, color 0.3s;
                }
            }
        }
    }
`
