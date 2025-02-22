import React from 'react';
import styled from 'styled-components';

export default function MenuButton({item,index}) {
    return (
         <MenuItem title={item.title} key={index}>
                <img src={item.icon} alt={item.title} />

                {item.title}
              </MenuItem>
    )

    
}

const MenuItem = styled.div`
display: grid;
    grid-template-columns: 24px auto;
    gap: ${(props) => (props.title ? "10px" : "0px")};
    align-items: center;
    border-radius: 10px;
    padding: 10px;
    transition: 0.5s ease-out;
    color:white;

    :hover {
      background: rgba(255, 255, 255, 0.1);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1),
        inset 0 0 0 0.5px rgba(255, 255, 255, 0.2);
    }
`