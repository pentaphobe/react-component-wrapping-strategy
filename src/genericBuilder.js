import React from 'react'


const DefaultLayout = () => (<div>Empty Layout</div>)

const genericBuilder = (props = {}) => {
  const {
    Layout = DefaultLayout,
    ...propsOuter
  } = props

  return (props = {}) => {
    const {
      // components = { ...propsOuter.components, ...(components || {}) },      
      components = {},
      ...otherProps
    } = props

    console.log({
      components,
      other: otherProps.components,
      outer: propsOuter.components
    })
    console.log('consolidated components prop', components)

    return (
      <Layout
        {...propsOuter}
        {...otherProps}
        {...components} />
    )
  }
}

export {
  genericBuilder as default
}