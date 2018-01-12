/**
 * 
 * Only overriding quarks
 * 
 */

import React from 'react'
import styled from 'styled-components'

// Overriding some Quarks (same structure)
import OldInput, { WrapperStyle, LabelStyle, InputStyle } from './Input'

const Wrapper = styled(WrapperStyle)`
  display: block;
  background: #f8f8c0;
  padding: 10px;  
`

// TODO: make this a wrapper of multiple elements to distinguish from StyledOverride
const LabelElement = styled.label`
  font-size: 1.2em;
  background: rgba(255, 255, 0, 0.5);
  padding: 5px;
  border-radius: 6px 0 6px 0;
  display: block;
`

const LabelContainer = styled.div`
  padding: 5px;
  background: rgba(0, 0, 0, 0.2);
`

const LabelReplacement = (props) => (
  <LabelContainer>  
    <p>This is an extra container wrapping an overridden label</p>
    <LabelElement {...props} />    
  </LabelContainer>
)

const Input = styled(InputStyle)`
  display: block;
  padding: 5px;
  font-size: 1.2em;
  width: 100%;
`

const NewInput = (props) => (
  <OldInput    
    components={{Wrapper, Label:LabelReplacement, Input}}    
    {...props} 
  />
)

export default NewInput