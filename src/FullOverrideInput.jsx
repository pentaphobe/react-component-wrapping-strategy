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

const NewLayout = (props = {}) => {
  const {
    components: { Wrapper, Label, Input },
    children: label = '',
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

const NewInput = inputBuilder({
  components: {
    Input: NewInputStyle,
    Wrapper: NewWrapperStyle,
    // Label is automatically included from the defaults
  },
  Layout: NewLayout
})

export default NewInput