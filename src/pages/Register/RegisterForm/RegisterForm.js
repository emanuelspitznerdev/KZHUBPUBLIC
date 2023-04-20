import styled from "styled-components";

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 13px;
    button{
        background: #59323F;
        border: 1.2182px solid #59323F;
        border-radius: 4px;
        width: 270px;
        height: 38.5px;
        font-family: 'Inter', sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 12.7925px;
        line-height: 21px;
        color: #FFFFFF;
        cursor: pointer;
    }
`

export const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 10px;

    label{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 12.182px;
        color: #F8F9FA;
    }
    select{
        padding: 0px 12.9865px;
        gap: 8.12px;
        width: 287px;
        height: 38.38px;
        background: #343B41;
        border: 0.973988px solid #343B41;
        border-radius: 3.19812px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 12.9865px;
        line-height: 21px;
        color: #868E96;
    }
`