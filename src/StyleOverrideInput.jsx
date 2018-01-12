/**
 * 
 * Basic overriding only using `styled()`
 * 
 */

import React from 'react'
import styled from 'styled-components'

import Input from './Input'

const NewInput = styled(Input)`  
  background: #efc8b8;
  
  label {
    font-family: sans-serif;
    font-size: 1.5em;
    
    span {
      display: block;
      margin-bottom: 5px;
    }
  }

  input {
    font-family: sans-serif;        
    font-size: 1.5em;
  }
`

export default NewInput