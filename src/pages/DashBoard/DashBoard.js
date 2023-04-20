import styled from "styled-components";

export const StyledMain = styled.main`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    align-items: center;
    background-color: #121214;
    padding: 0px;
    margin: 0px;
    
    header{
        width: 90%;
        height: 73px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        
        button{
            background: #212529;
            border-radius: 4px;
            border: 1px solid #212529;
            height: 32px;
            width: 55px;
            font-family: 'Inter', sans-serif;
            font-style: normal;
            font-weight: 600;
            font-size: 12px;
            line-height: 28px;
            text-align: center;
            color: #F8F9FA;
            cursor: pointer;
        }
    }
`

export const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100vw;
`

export const StyledPersonal = styled.div`
    display: flex;
    background: #121214;
    border-top: 2px solid #212529;
    border-bottom: 2px solid #212529;
    padding-left: 20px;
    padding-right: 20px;
    max-width: 90%;
    height: 130px;
    flex-direction: column;
    justify-content: center;

    h2{
        width: 290px;
        height: 28px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        color: #F8F9FA;
    }

    span{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 22px;
        color: #868E96;
    }
`

export const StyledApllication = styled.div`
    display: flex;
    padding-left: 20px;
    padding-right: 20px;
    max-width: 90%;
    height: 130px;
    flex-direction: column;
    justify-content: center;
    padding-top: 20px;
    

`