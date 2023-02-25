import styled from "styled-components";


export const AdvantageAndDisadvantageContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
`

export const AdvantageContainer = styled.div`
    .header{
        background-color: #02C29F;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px 0px;
        h2{
            color: #FAFBFC;
        }
    }
    .content{
        padding: 15px;
        background-color: #E9FDF4;
        display: flex;
        flex-direction: column;
        gap: 15px;
        height: calc(100% - 47px); // 100% - header height
        div{
            display: flex;
            align-items: flex-start;
            gap: 5px;
            p{
                text-align: justify;
            }
        }
    }
    `

export const DisadvantageContainer = styled.div`
    .header{
        background-color: #EA3846;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px 0px;
        h2{
            color: #FAFBFC;
        }
    }
    .content{
        padding: 15px;
        background-color: #FEE9EC;
        display: flex;
        flex-direction: column;
        gap: 15px;
        height: calc(100% - 47px);
        div{
            display: flex;
            align-items: flex-start;
            gap: 5px;
            p{
                text-align: justify;
            }
        }
    }
`