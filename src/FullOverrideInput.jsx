import React from 'react'
import styled from 'styled-components'

// Overriding all Quarks (same structure)
import { builder as inputBuilder, WrapperStyle, LabelStyle, InputStyle } from './Input'

const NewWrapperStyle = styled(WrapperStyle) `
  padding: 10px;
  margin: 5px;
  background: #e8e8e8;
  border-radius: 3px;
  display: inline-block;
  font-family: sans-serif;
`

const NewInputStyle = styled(InputStyle)`
  padding: 15px;
  display: block;
  border-radius: 3px;
  border: none;
`

const NewLabelStyle = styled(LabelStyle)`
`

const NewInput = inputBuilder({
  Label: NewLabelStyle,
  Input: NewInputStyle,
  Wrapper: NewWrapperStyle,
  Base: (props = {}) => {
    const {
      Wrapper = NewWrapperStyle,
      Input = NewInputStyle,
      Label = NewLabelStyle, 
      children:label = '',
      placeholder = label || '',
      type = 'text'
    } = props
    
    return (
      <Wrapper>
        <h3>Input using builder()</h3>        
        <Label>
          <Input
            placeholder={placeholder}
            type={type}
          />
          <span>{label}</span>
        </Label>
      </Wrapper>
    )
  }
})

export default NewInput