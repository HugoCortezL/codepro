import styled from "styled-components";

interface darkModeProp {
    darkMode: boolean
}
export const HeaderContainer = styled.div<darkModeProp>`
    width: 100vw;
    height: 60px;
    background-color: ${props => props.darkMode ? "#464646" : "#FAFBFC"};
    box-shadow: 0px 2px 4px #BBAAFF;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 30px;
    color: ${props => props.darkMode ? "#FAFBFC" : "#464646"};
    h1{
        color: ${props => props.darkMode ? "#BF5EFF" : "#5E36FF"};
    }
    .options {
        position: relative;
        .click{
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            cursor: pointer;
        }
    }
`

export const OptionsContainer = styled.div<darkModeProp>`
    height: 123px;
    width: 167px;
    background-color: ${props => props.darkMode ? "#464646" : "#FAFBFC"};
    box-shadow: 0px 0px 4px #C2C2C2;
    border-radius: 5px;
    position: absolute;
    top: 30px;
    right: 0px;
    display: flex;
    flex-direction: column;
    & > div{
        padding: 10px;
        label.switch{
            position: relative;
            display: inline-block;
            width: 40px;
            height: 22.67px;
            margin-left: 5px;
            input { 
                opacity: 0;
                width: 0;
                height: 0;
                &:checked + .slider {
                    background-color: #BF5EFF;
                }
                &:focus + .slider {
                    box-shadow: 0 0 1px #BF5EFF;
                }
                &:checked + .slider:before {
                    -webkit-transform: translateX(17.33px);
                    -ms-transform: translateX(17.33px);
                    transform: translateX(17.33px);
                }
            }
            .slider {
                position: absolute;
                cursor: pointer;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background-color: #E6E6E6;
                -webkit-transition: .4s;
                transition: .4s;
                border-radius: 34px;
                &:before {
                    position: absolute;
                    content: "";
                    height: 17.33px;
                    width: 17.33px;
                    left: 2.67px;
                    bottom: 2.67px;
                    background-color: white;
                    -webkit-transition: .4s;
                    transition: .4s;
                    border-radius: 50%;
                }
            }
        }
        &.divisor{
            padding: 0px;
            width: 100%;
            height: 2px;
            background-color: ${props => props.darkMode ? "#5B5B5B" : "#E6E6E6"};
        }
        div.language-buttons{
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-top: 5px;
            button{
                padding: 5px 14px;
                background-color: ${props => props.darkMode ? "#464646" : "#FAFBFC"};
                border: 1px solid ${props => props.darkMode ? "#BF5EFF" : "#5E36FF"};
                border-radius: 5px;
                color: ${props => props.darkMode ? "#BF5EFF" : "#5E36FF"};
                cursor: pointer;
                &.active{
                    background-color: ${props => props.darkMode ? "#BF5EFF" : "#5E36FF"};
                    color: ${props => props.darkMode ? "#464646" : "#FAFBFC"};
                }
            }
        }
    }
`

export const ContentContainer = styled.div`
    width: 60vw;
    margin: 15px auto;
`