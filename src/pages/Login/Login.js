import styled from "styled-components";

export const StyledMain = styled.main`
    display: flex;
    flex-direction: column;
    background-color: #121214;
    width: 100vw;
    height: 100vh;
    align-items: center;
    padding: 0;
    margin: 0;
`

export const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    flex-direction: row;
    width: 0 auto;
    height: 70px;
`
export const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    width: 280px;
    height: 405px;
    background: #212529;
    box-shadow: 0px 3.20867px 32.0867px -8.02168px rgba(0, 0, 0, 0.25);
    border-radius: 3.20867px;
    padding-top: 20px;
    padding-left: 10px;
    padding-right: 10px;

    h2{
        font-family: 'Inter', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 28px;
        color: #F8F9FA;
    }

    span{
        font-family: 'Inter', sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 12px;
        line-height: 18px;
        color: #868E96;
    }
`

export const StyledButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 260px;
    height: 38.5px;
    background: #868E96;
    border: 1.2182px solid #868E96;
    border-radius: 4px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    color: #F8F9FA;
    cursor: pointer;
`