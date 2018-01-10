import React from 'react'
import styled, { css } from 'styled-components'

import genericBuilder from './genericBuilder'

/**
 * 
 * Base style definitions
 * 
 */
const LabelStyle = styled.label`
  padding: 5px;
  display: block;

  span { 
    margin-right: 5px;
  }
`

const InputStyle = styled.input`
`

const WrapperStyle = styled.div`
`


/**
 * 
 * default "layout"
 * 
 * Allows a component's structure to be defined as a function of
 * passed sub-components or "quarks"
 */
const DefaultLayout = (props = {}) => {
  const {
    // needed to conform to our extensible API
    components: { Wrapper, Label, Input },
    // needed to assure styled-components can extend
    className = '',
    
    // the following are the component-specific props
    children: label,
    type = '',
    placeholder = '',
    ...otherProps
    } = props

  return (
    <Wrapper className={className}>
      <Label>
        <span>{label}</span>
        <Input
          type={type}
          placeholder={placeholder}
          {...otherProps}
        />
      </Label>
    </Wrapper>
  )
}

/**
 * 
 * Each compound component should define a `builder` function 
 * using `genericBuilder`
 * 
 * This glues the Layout and passed components together into a final
 * component so that we can [somewhat] control customisation
 * 
 * 
 */
const builder = ({components, Layout} = {}) => {
  return genericBuilder({
    components: {
      ...{
        Wrapper: WrapperStyle,
        Label: LabelStyle,
        Input: InputStyle
      },
      ...components,      
    },
    Layout: Layout || DefaultLayout,
  })
}

/**
 * 
 * Definition of our top-level component, should always be an
 * empty call to builder()
 */
const Input = builder()


export {
  Input as default,

  LabelStyle, InputStyle, WrapperStyle,

  builder as builder,
}
