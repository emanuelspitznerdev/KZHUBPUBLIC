import styled from "styled-components";

export const StyledModal = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    position: absolute;
    max-width: 400px;
`

export const StyledClose = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background: #343B41;
    border-radius: 3.20867px 3.20867px 0px 0px;
    padding: 10px;
    align-items: center;
    h2{
        font-family: 'Inter', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 11.2304px;
        line-height: 19px;
        color: #F8F9FA;
    }
    button{
        width: 25px;
        height: 25px;
        border: 1px solid #343B41;
        background-color: #343B41;
        cursor: pointer;
    }
`

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    background-color: #212529;
    gap: 18px;
    padding: 10px;
    label{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 9.772px;
        color: #F8F9FA;
    }
    input{
        background: #343B41;
        border: 0.9772px solid #F8F9FA;
        border-radius: 3.20867px;
        height: 38px;
        padding-left: 10px;
        font-family: 'Inter', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 13.0293px;
        line-height: 21px;
        color: #F8F9FA;
    }
    select{
        background: #343B41;
        border: 0.9772px solid #F8F9FA;
        border-radius: 3.20867px;
        height: 38px;
        padding-left: 10px;
        font-family: 'Inter', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 13.0293px;
        line-height: 21px;
        color: #F8F9FA;
    }
    button{
        cursor: pointer;
        background: #FF577F;
        border: 1.2182px solid #FF577F;
        border-radius: 4.06066px;
        height: 38px;
        font-family: 'Inter', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 13.0293px;
        line-height: 21px;
        color: #F8F9FA;
    }
`

export const StyledSelectDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 18px;
`