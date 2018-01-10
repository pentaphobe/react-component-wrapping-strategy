import React from 'react'
import styled from 'styled-components'

import Input from './Input'

const NewInput = styled(Input)`  
  div {
    font-size: 1.5em;
    font-family: sans-serif;    
    background: #e80000;
  }

  label {
    font-family: sans-serif;
  }

  input {
    font-size: 2.5em;
  }
`

export default NewInput