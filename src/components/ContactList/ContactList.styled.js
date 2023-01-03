
import styled from 'styled-components';

export const ContactList = styled.ul`
  margin: 10px 0 10px 0;
  padding: 0;
`;

export const ItemsContact = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;

    font-family: ${p=>p.theme.fonts.monospace};
    padding: 5px;

  :hover{
    cursor: pointer;
    background-color: #ededf0;

    border-radius: 5px;
  }

`;

export const DeleteBtn = styled.button`

    
    background-color: transparent;
    border: none;

    height:25px;

    &:hover{
        transform: scale(1.3);
        color: red;
        cursor: pointer;
    }
`;


export const EditBtn = styled.button`

    background-color: transparent;
    margin-left: 15px;

    border: none;
    border-radius: ${p=>p.theme.space[1]}px;

    height:25px;

    &:hover{
        transform: scale(1.3);
        cursor: pointer;
    }
`;
export const Notification = styled.p`
    padding: 0;
    margin:0;
    text-align: center;

    color: ${p=>p.theme.colors.delBtn};
    font-family: ${p=>p.theme.fonts.gillSans};
`;
