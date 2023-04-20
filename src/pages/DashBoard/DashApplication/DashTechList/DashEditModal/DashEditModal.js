import styled from "styled-components";

export const StyledModal = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 400px;
    position: absolute;
`

export const StyledDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: #343B41;
    border-radius: 3.19783px 3.19783px 0px 0px;
    width: 100%;
    max-width: 400px;
    padding: 20px;
    height: 45px;
    h2{
        font-family: 'Inter', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 11.1924px;
        line-height: 19px;
        color: #F8F9FA;
    }
    button{
        width: 25px;
        height: 25px;
        background: #343B41;
        border: 1px solid #343B41;
        cursor: pointer;
    }
`

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    background-color: #212529;
    gap: 18px;
    padding: 10px;
    background: #212529;
    box-shadow: 0px 3.19783px 31.9783px -7.99458px rgba(0, 0, 0, 0.25);
    border-radius: 3.19783px;
    gap: 15px;
    label{
        font-family: 'Inter', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 9.73899px;
        color: #F8F9FA;
    }
    span{
        height: 38.37px;
        background: #343B41;
        border: 0.973899px solid #343B41;
        border-radius: 3.19783px;
        color: #868E96;
        padding-left: 20px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 12.9853px;
        line-height: 21px;
        color: #868E96;
        display: flex;
        align-items: center;
    }
    select{
        height: 38.37px;
        background: #343B41;
        border: 0.973899px solid #343B41;
        border-radius: 3.19783px;
        color: #868E96;
        padding-left: 20px;
        option{
            color: #F8F9FA;
        }
    }
`

export const StyledDivSelect = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export const StyledDivButtons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .button-save{
        width: 163.09px;
        height: 38.37px;
        background: #59323F;
        border: 1.2182px solid #59323F;
        border-radius: 4px;font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size: 12.7913px;
        line-height: 21px;
        color: #FFFFFF;
        cursor: pointer;
    }

    .button-exclude{
        width: 78.35px;
        height: 38.37px;
        background: #868E96;
        border: 1.2182px solid #868E96;
        border-radius: 4px;
        font-family: 'Inter', sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 12.7913px;
        line-height: 21px;
        color: #FFFFFF;
        cursor: pointer;
    }
`