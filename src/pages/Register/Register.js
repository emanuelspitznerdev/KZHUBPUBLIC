import styled from "styled-components";

export const StyledMain = styled.main`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: fit-content;
    background-color: #121214;
    align-items: center;
    padding-top: 30px;
    padding-bottom: 40px;
    gap: 20px;
`

export const StyledHeader = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 120px;
    width: 285px;
    justify-content: space-between;

    button{
        background: #212529;
        border-radius: 4px;
        border: 1px solid #212529;
        width: 80px;
        height: 32px;
        font-family: 'Inter', sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 9.59437px;
        text-align: center;
        color: #F8F9FA;
    }
`

export const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    background: #212529;
    box-shadow: 0px 3.19812px 31.9812px -7.99531px rgba(0, 0, 0, 0.25);
    border-radius: 3.19812px;
    min-height: 720px;
    max-height: fit-content;
    padding-top: 35px;
`

export const StyledDiv = styled.div`
    display: flex;
    width: 170px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    h2{
        font-family: 'Inter', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        color: #F8F9FA;
    }
    span{
        font-family: 'Inter', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        color: #868E96;
    }
`