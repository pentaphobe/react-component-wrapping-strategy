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
import CustomLayoutInput from './CustomLayoutInput'
import FullOverrideInput from './FullOverrideInput'

const Row = styled(RowBase)`
  padding: 10px;
`

const App = () => (
  <Grid>
    <Row>
      <Col xs={4}>
        <h3>Input</h3>
        The default component
      </Col>
      <Col xs={8}>
        <Input placeholder='placeholder'>
          Basic Input
        </Input>
      </Col>
    </Row>       
    <Row>
      <Col xs={4}>
        <h3>StyleOverrideInput</h3>
        Naïve override of styles using <code>styled(Input)`...`</code>
      </Col>
      <Col xs={8}>    
        <StyleOverrideInput placeholder='placeholder'>
          Input with style override
        </StyleOverrideInput>     
      </Col>
    </Row> 
    <Row>
      <Col xs={4}>
        <h3>QuarkOverrideInput</h3>
        <p>Replacing individual quarks, but retaining original structure.</p>
        <p>Simplest method to wrap, override, or replace quarks</p>
      </Col>    
      <Col xs={8}>        
        <QuarkOverrideInput placeholder='placeholder'>
          Input with quark override
        </QuarkOverrideInput>  
      </Col>
    </Row>  
    <Row>
      <Col xs={4}>
        <h3>CustomLayoutInput</h3>
        Overriding layout to inject an extra component (no change to existing quarks)
      </Col>
      <Col xs={8}>
        <CustomLayoutInput placeholder='placeholder'>
          Custom Input Layout
        </CustomLayoutInput>
      </Col>
    </Row>             
    <Row>
      <Col xs={4}>
        <p>The heaviest override method, uses the builder to potentially override layout, quarks, 
        and other logic</p>
      </Col>
      <Col xs={8}>
        <h3>FullOverrideInput</h3>
        <FullOverrideInput placeholder='placeholder'>
          Input with full override (structural changes)
        </FullOverrideInput>        
      </Col>
    </Row>    
  </Grid>
)

render(<App />, document.getElementById('root'))