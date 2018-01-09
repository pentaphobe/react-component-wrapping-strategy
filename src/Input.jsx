import React from 'react'
import styled, { css } from 'styled-components'

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

// const InputBase = (props = {}) => {
//   const {
//     children: label = '',
//     type = 'text',
//     placeholder = label || '',
//     Label = LabelStyle,
//     Input = InputStyle,
//     Wrapper = WrapperStyle
// 	} = props

//   return (
//     <Wrapper>
//       <Label>
//         <span>{label}</span>
//         <Input
//           type={type}
//           placeholder={placeholder}
//         />
//       </Label>
//     </Wrapper>
//   )
// }


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

const builder = (props = {}) => {
  const {
    Label = LabelStyle,
    Input = InputStyle,
    Wrapper = WrapperStyle,
    Base = DefaultBase,
  } = props

  return (props = {}) => {
    const {
      Label = Label,
      Input = Input,
      Wrapper = Wrapper,
      ...otherProps
    } = props

    return (
      <Base
        Label={Label}
        Input={Input}
        Wrapper={Wrapper}
        {...otherProps} />
    )
  }
}

const InputBase = builder({
  Base: DefaultBase
})


export {
  InputBase as default,

  LabelStyle, InputStyle, WrapperStyle,

  builder,
}
