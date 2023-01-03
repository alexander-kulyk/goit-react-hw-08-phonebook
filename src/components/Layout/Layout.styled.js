import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const LinkPages = styled(NavLink)`
    
    font-family:Verdana, Geneva, Tahoma, sans-serif;
    color: #c7bcbc;

    :hover{
        color: white;
    }

    &.active{
        padding: 5px;
        border: 1px solid white;

        border-radius: 5px;
    };
  
`;

