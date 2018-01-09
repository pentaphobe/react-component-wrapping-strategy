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

import Input from './Input'
import StyleOverrideInput from './StyleOverrideInput'
import QuarkOverrideInput from './QuarkOverrideInput'
import FullOverrideInput from './FullOverrideInput'

const Row = styled(RowBase)`
  padding: 10px;

`
 
const App = () => (
  <Grid>
    <Row xs={12}>
      <Col  xs={12}>
        <Input>
          Basic Input
        </Input>
      </Col>
    </Row>
    <Row xs={12}>
      <Col  xs={12}>    
        <StyleOverrideInput>
          Input with style override
        </StyleOverrideInput>     
      </Col>
    </Row> 
    <Row xs={12}>
      <Col  xs={12}>        
        <QuarkOverrideInput>
          Input with quark override
        </QuarkOverrideInput>  
      </Col>
    </Row>         
    <Row xs={12}>
      <Col  xs={12}>
        <FullOverrideInput>
          Input with full override (structural changes)
        </FullOverrideInput>        
      </Col>
    </Row>       
  </Grid>
)

render(<App />, document.getElementById('root'))