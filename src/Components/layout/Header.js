import React,{useState} from 'react'
import styled from "styled-components"
import Logo from '../../../static/images/logos/logo.svg'
import { menuData } from '../../data/menuData'
import MenuButton from '../buttons/MenuButton'
import MenuTooltip from '../tooltips/MenuTooltip'



const Header = () => {

     const [isOpen, setIsOpen] = useState(false)
  return (
    <Wrapper>
      <img src={Logo} alt="" />
      <MenuWrapper count={menuData.length} onClick={() => setIsOpen(!isOpen)}>
        {menuData.map((item, index) => {
          return <MenuButton item={item} key={index} />
        })}
      </MenuWrapper>

     
      <MenuTooltip isOpen={isOpen} />
    </Wrapper>
  )
}

export default Header

const Wrapper = styled.div`
  position: absolute;
  top: 60px;
  display: grid;
  grid-template-columns: 44px auto;
  justify-content: space-around;
  padding: 0 30px;
  align-items: center;
  width: 100%;

  @media (max-width: 768px) {
    align-items: center;
    justify-content: center;
  }
`

const MenuWrapper = styled.div`
  display: grid;
  gap: 30px;
  cursor:pointer;
  grid-template-columns: repeat(${props => props.count}, auto);

  
  @media (max-width: 768px) {
      display: none;
  }
`




