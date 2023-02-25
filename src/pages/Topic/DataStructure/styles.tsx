import styled from "styled-components";

export const DataStructureContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    div.image {
        display: flex;
        align-items: center;
        justify-content: center;
        img{
            width: 80%;
        }
    }
`

export const DescriptionContainer = styled.div`
    background-color: #F7EFF5;
    border-radius: 8px;
    box-shadow: 0px 0px 4px #B70569;
    padding: 15px;
    text-align: justify;
`

export const ExplicationContainer = styled.div`
    border-radius: 5px;
    box-shadow: 0px 0px 4px #C2C2C2;
    padding: 15px;
    text-align: justify;
    ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 5px;
        margin-top: 10px;
        li:before{
            content: "•";
            margin-right: 10px;
        }
    }
`
