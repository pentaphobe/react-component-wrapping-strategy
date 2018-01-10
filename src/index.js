/**
 * 
 * Currently doesn't have sugar or automation in place
 * 
 * Just exploring the core viability of this approach
 */


import React from 'react'
import { render } from 'react-dom'

import styled from 'styled-components'
import { Grid, Row as RowBase, Col } from 'react-styled-flexboxgrid'

import Input, {builder, LabelStyle} from './Input'
import StyleOverrideInput from './StyleOverrideInput'
import QuarkOverrideInput from './QuarkOverrideInput'
import FullOverrideInput from './FullOverrideInput'

const CustomInputHolder = styled.span`
  background: #eee;
  padding: 5px;
  border-radius: 3px;
  display: table;

  span[data-beer] {
    font-size: 28px;
    line-height: 48px;
  }
`

const CustomLayoutInput = builder({
  Layout: (props = {}) => {
    const {
      components: {Wrapper, Label, Input},
      children: label,

      className = '',
      ...otherProps
    } = props

    return (
      <Wrapper className={className}>        
        <Label>
          <span>{label}</span>
          <CustomInputHolder>
            <span data-beer>&#x1f37a;</span>
            <Input {...otherProps} />            
          </CustomInputHolder>
        </Label>
      </Wrapper>
    )
  }
})

const Row = styled(RowBase)`
  padding: 10px;
`
 
const App = () => (
  <Grid>
    <Row xs={12}>
      <Col  xs={12}>
        <Input placeholder='placeholder'>
          Basic Input
        </Input>
      </Col>
    </Row>
    <Row xs={12}>
      <Col xs={12}>
        <CustomLayoutInput placeholder='placeholder'>
          Custom Input Layout
        </CustomLayoutInput>
      </Col>
    </Row>         
    <Row xs={12}>
      <Col  xs={12}>    
        <StyleOverrideInput placeholder='placeholder'>
          Input with style override
        </StyleOverrideInput>     
      </Col>
    </Row> 
    <Row xs={12}>
      <Col  xs={12}>        
        <QuarkOverrideInput placeholder='placeholder'>
          Input with quark override
        </QuarkOverrideInput>  
      </Col>
    </Row>         
    <Row xs={12}>
      <Col  xs={12}>
        <FullOverrideInput placeholder='placeholder'>
          Input with full override (structural changes)
        </FullOverrideInput>        
      </Col>
    </Row>    
  </Grid>
)

render(<App />, document.getElementById('root'))