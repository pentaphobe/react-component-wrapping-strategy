import React from 'react'
import styled from 'styled-components'

import Input, { builder, LabelStyle } from './Input'

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
      components: { Wrapper, Label, Input },
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



export default CustomLayoutInput
