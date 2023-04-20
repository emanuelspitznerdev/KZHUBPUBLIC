import styled from "styled-components";

export const StyledApp = styled.div`
    display: flex;
    flex-direction: column;
    width: 88%;
    height: fit-content;
    position: fixed;
    top: 220px;
    gap: 20px;
    align-items: center;
`
export const StyledAdd = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    max-width: 400px;
    h2{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 18px;
        color: #F8F9FA;
    }
    button{
        cursor: pointer;
        background: #212529;
        border-radius: 4px;
        width: 32px;
        height: 32px;
        border: 1px solid #212529;
    }
`
