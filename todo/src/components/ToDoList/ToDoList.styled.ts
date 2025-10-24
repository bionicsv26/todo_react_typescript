import styled, { css } from "styled-components"

export const TodoListBlock = styled.div`
  width: 100%;
  padding: 15px;
`

const baseListStyles = css`
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
  padding-left: 0;
  list-style: none;

  &:empty:after {
    width: 100%;
    display: block;
    text-align: center;
    font-size: 12px;
    color: #aaa;
  }
`

export const TodoFailedList = styled.ul`
  ${baseListStyles}
  
  &:empty:after {
    content: 'Нет задач на выполнение';
  }
`

export const TodoCompletedList = styled.ul`
  ${baseListStyles}
  position: relative;
  padding: 60px 0 0 0;

  &:empty:after {
    content: 'Нет выполненых задач';
  }

  &:before {
    content: '';
    width: 150px;
    height: 1px;
    background: #d8e5e0;
    position: absolute;
    top: 25px;
    left: calc(50% - 75px);
  }
`