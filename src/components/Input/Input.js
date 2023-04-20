import styled from "styled-components";

export const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 296px;
    gap: 15px;
    label{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 9.772px;
        color: #F8F9FA;
    }

    input{
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0px 13px;
        gap: 8.14px;
        width: 260px;
        height: 38.5px;
        background: #343B41;
        border: 0.9772px solid #F8F9FA;
        border-radius: 3.20867px;
        color: #F8F9FA;
    }
    
    p{
        font-family: 'Inter', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 10px;
        color: #F8F9FA;
    }
`