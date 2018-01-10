import React from 'react'
import styled from 'styled-components'

import Input from './Input'

const NewInput = styled(Input)`  
  background: #f0f;
  
  label {
    font-family: sans-serif;
    font-size: 1.5em;    
  }

  input {
    font-family: sans-serif;        
    font-size: 2.5em;
  }
`

export default NewInput