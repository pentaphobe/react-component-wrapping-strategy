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
 * Base "layout"
 * 
 */
const DefaultBase = ({
    Wrapper=WrapperStyle, 
    Label=LabelStyle, 
    Input=InputStyle, 
    children: label = '',
    type = 'text',
    placeholder = label || '',    
    ...props} = {}
  ) => (
  <Wrapper>
    <Label>
      <span>{label}</span>
      <Input
        type={type}
        placeholder={placeholder}
        {...props}
      />
    </Label>
  </Wrapper>
)


// const builder = (propsOuter = {}) => {
//   const {
//     LabelOuter = LabelStyle,
//     InputOuter = InputStyle,
//     WrapperOuter = WrapperStyle,
//     Base = DefaultBase,
//   } = propsOuter

//   return (props = {}) => {
//     const {
//       Label = LabelOuter,
//       Input = InputOuter,
//       Wrapper = WrapperOuter,
//       ...otherProps
//     } = props

//     return (
//       <Base
//         Label={Label}
//         Input={Input}
//         Wrapper={Wrapper}
//         {...otherProps} />
//     )
//   }
// }

const builder = ({components, Layout}) => {
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


/** LOOK AT ME TOMORROW */

// const builder = (propsOuter = {}) => {
//   return (props = {}) => {
//     const {
//       Label = Label || propsOuter.LabelStyle,
//       Input = Input || propsOuter.InputStyle,
//       Wrapper = Wrapper || propsOuter.WrapperStyle,
//       ...propsOuter
//     } = props

//     return (
//       <Base
//         Label={Label}
//         Input={Input}
//         Wrapper={Wrapper}
//         {...otherProps} />
//     )
//   }
// }

const InputBase = builder({
  Layout: (props) => {
    const {
      components: { Wrapper, Label, Input },
      children: label,
      type = '',
      placeholder = '',
      ...otherProps
    } = props

    return (
      <Wrapper>
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
})


export {
  InputBase as default,

  LabelStyle, InputStyle, WrapperStyle,

  builder as builder,
}
