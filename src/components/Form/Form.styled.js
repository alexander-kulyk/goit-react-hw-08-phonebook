import { MdClose } from "react-icons/md"
import styled from 'styled-components';


export const FormContact = styled.form`
    display: flex;
    flex-direction: column;
`;

export const Label = styled.label`

    padding-bottom: 5px;
    font-family: Verdana,Geneva,Tahoma,sans-serif;
    color: #aaa9a9;
`;

export const Input = styled.input`
   border: 1px solid #bfbebe;
   border-radius: ${p=>p.theme.space[1]}px;

   width:200px;
   height:30px;
   padding: 5px;
   margin-bottom:  10px;

   background-color: transparent;
`;

export const Button = styled.button`
    height: 30px;
    width: 200px;
    
    color: ${p=>p.theme.colors.secondText};
    background-color: ${p=>p.theme.colors.bcBtn};
    border: ${p=>p.theme.borders.border};
    border-radius: ${p=>p.theme.space[1]}px;

    &:hover{
        transform: scale(1.1);
    }

    cursor: pointer;
`;

export const CrossIcon = styled(MdClose)`
    margin-left: 5px;
    color: gray;

    :hover{
        color: red;
        cursor: pointer;

        transform: scale(1.3);
    }
`;