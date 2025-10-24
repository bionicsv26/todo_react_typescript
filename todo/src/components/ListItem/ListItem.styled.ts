import { Link } from "react-router-dom"
import styled from "styled-components"

interface ListItemProps {
    $isDone: boolean
}

export const ListItemLink = styled(Link) <ListItemProps>`
  text-decoration: none;
  padding: 10px;
  color: ${props => props.$isDone ? 'green' : 'red'};
  transition: color 0.3s ease;
  
  &:hover {
    opacity: 0.8;
  }
`