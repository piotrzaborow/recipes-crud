import React, {Fragment} from 'react'
import styled from 'styled-components'

const NavigationWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0,0,0,0.15);
  height: 80px;
  background-color: #fff;
  width: 100vw;
  position: fixed;
  top:0;
  left: 0;
`

const Title = styled.div`
  font-weight: bold;
  font-size: ${props => props.bc ? '24px' : '32px'};
  padding: 5px 15px;
`

const Placeholder = styled.div`
  width: 42px;
  height: 42px;
`

const Navigation = ({title, BackComponent, children}) => (
    <NavigationWrapper>
        {BackComponent && <Fragment>{BackComponent}</Fragment>}
        <Title bc={BackComponent}>{title}</Title>
        {children && <Fragment>{children}</Fragment>}
        {!children && <Placeholder/>}
    </NavigationWrapper>
)

export default Navigation