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

const Custom = builder({
  Layout: (props = {}) => {
    const {
      components: {Wrapper, Label, Input},
      children: label,
      ...otherProps
    } = props

    return (
      <Wrapper>        
        <Label>{label}</Label>
        <Input {...otherProps} />
      </Wrapper>
    )
  }
})


const NewLabelStyle = styled.label`
  color: #f0f;
`

const ReplaceQuark = (props) => (
  <Input
    {...props}
    components={{Label:NewLabelStyle}}
    />
)

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
        <Custom placeholder='placeholder'>
          Custom Input
        </Custom>
      </Col>
    </Row> 
    <Row xs={12}>
      <Col xs={12}>
        <ReplaceQuark placeholder='placeholder'>
          ReplaceQuark Input
        </ReplaceQuark>
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