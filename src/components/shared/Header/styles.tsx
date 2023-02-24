import styled from "styled-components";

export const HeaderContainer = styled.div`
    width: 100vw;
    height: 60px;
    background-color: #FAFBFC;
    box-shadow: 0px 2px 4px #BBAAFF;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 30px;
    h1{
        color: #5E36FF;
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

export const OptionsContainer = styled.div`
    height: 123px;
    width: 167px;
    background-color: #FAFBFC;
    box-shadow: 0px 0px 4px #C2C2C2;
    border-radius: 5px;
    position: absolute;
    top: 30px;
    right: 0px;
    display: flex;
    flex-direction: column;
    & > div{
        padding: 10px;
        input[type="checkbox"]{
            cursor: pointer;
        }
        &.divisor{
            padding: 0px;
            width: 100%;
            height: 2px;
            background-color: #E6E6E6;
        }
        div.language-buttons{
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-top: 5px;
            button{
                padding: 5px 14px;
                background-color: #FAFBFC;
                border: 1px solid #5E36FF;
                border-radius: 5px;
                color: #5E36FF;
                cursor: pointer;
                &.active{
                    background-color: #5E36FF;
                    color: #FAFBFC;
                }
            }
        }
    }
`

export const ContentContainer = styled.div`
    width: 60vw;
    margin: 15px auto;
`