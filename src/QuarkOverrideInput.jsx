import React from 'react'
import styled from 'styled-components'

// Overriding some Quarks (same structure)
import Input, { WrapperStyle, LabelStyle, InputStyle } from './Input'

const NewWrapperStyle = styled(WrapperStyle)`
  display: block;
  background: #f8f8c0;
  padding: 10px;  
`

const NewLabelStyle = styled(LabelStyle)`
  padding: 0;
  font-size: 1.2em;
`

const NewInputStyle = styled(InputStyle)`
  display: block;
  padding: 5px;
  font-size: 1.2em;
  width: 100%;
`

const NewInput = (props) => (
  <Input    
    Wrapper={NewWrapperStyle}
    Label={NewLabelStyle}
    Input={NewInputStyle}
    {...props} />
)

export default NewInput