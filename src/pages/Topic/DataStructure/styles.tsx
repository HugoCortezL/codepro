import styled from "styled-components";

interface darkMode {
    darkMode: boolean;
}

export const DataStructureContainer = styled.div<darkMode>`
    display: flex;
    flex-direction: column;
    gap: 20px;
    h1{
        color: ${props => props.darkMode ? "#FAFBFC" : "#464646"};
        transition: color 0.4s;
    }
    div.image {
        display: flex;
        align-items: center;
        justify-content: center;
        img{
            width: 80%;
        }
    }
`

export const DescriptionContainer = styled.div<darkMode>`
    background-color: ${props => props.darkMode ? "#29293a" : "#F7EFF5"};
    border-radius: 8px;
    box-shadow: 0px 0px 4px ${props => props.darkMode ? "#4e47db" : "#B70569"};
    padding: 15px;
    text-align: justify;
    transition: background-color 0.4s, box-shadow 0.4s;
    p{
        color: ${props => props.darkMode ? "#FAFBFC" : "#464646"};
        transition: color 0.4s;
    }
`

export const ExplicationContainer = styled.div<darkMode>`
    border-radius: 5px;
    box-shadow: 0px 0px 4px #C2C2C2;
    padding: 15px;
    text-align: justify;
    background-color: ${props => props.darkMode ? "#464646" : "#FAFBFC"};
    transition: background-color 0.4s;
    h2{
        color: ${props => props.darkMode ? "#FAFBFC" : "#464646"};
        transition: color 0.4s;
    }
    ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 5px;
        margin-top: 10px;
        li{
            color: ${props => props.darkMode ? "#FAFBFC" : "#464646"};
            transition: color 0.4s;
            &:before{
                content: "•";
                margin-right: 10px;
            }
        }
    }
`
