import React from 'react'
import styled from 'styled-components'

// Overriding some Quarks (same structure)
import OldInput, { WrapperStyle, LabelStyle, InputStyle } from './Input'

const Wrapper = styled(WrapperStyle)`
  display: block;
  background: #f8f8c0;
  padding: 10px;  
`

const Label = styled(LabelStyle)`
  padding: 0;
  font-size: 1.2em;
`

const Input = styled(InputStyle)`
  display: block;
  padding: 5px;
  font-size: 1.2em;
  width: 100%;
`

const NewInput = (props) => (
  <OldInput    
    components={{Wrapper, Label, Input}}    
    {...props} 
  />
)

export default NewInput