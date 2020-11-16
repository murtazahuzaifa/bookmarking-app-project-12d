import styled from 'styled-components';

export const Form = styled.form`
    width: 100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content: center;
    padding: 10px 0;
`
export const InputWrap = styled.div`
    display:flex;
    width:90%;
    align-items:center;
    border: 2px solid brown;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 10px;
    >span{ }
    >input{
        width: 100%;
        margin-left: 10px; 
        background-color:transparent;
        font-size:15px;
        border:0;
    }
`
// export const Input = styled.input`
//     border: 1px solid lightgray;
//     padding: 10px;
//     border-radius: 15px 0px 0px 15px;
//     font-size:15px;
//     background-color: transparent;
//     transition: .15s ease-in-out;
//     &:focus{
//         border: 1px solid grey;
//     }
// `

export const Button = styled.button`
    background-color: 	#F5FFFA;
    border-radius: 8px;
    border: 1px solid lightgray;
    padding: 10px;
    font-size:15px;
    transition: .10s ease-in-out;
    &:focus{
        border: 1px solid grey;
    }
    &:active{
        background-color: #F0F8FF;
    }
`