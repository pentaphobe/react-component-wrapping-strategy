import React from 'react'


const DefaultLayout = () => (<div>Empty Layout</div>)

const genericBuilder = (props = {}) => {
  const {
    Layout = DefaultLayout,
    components: defaultComponents,
    ...propsOuter
  } = props

  return (props = {}) => {
    const {      
      components,
      ...otherProps
    } = props

    return (
      <Layout
        {...propsOuter}
        {...otherProps}

        components={{...defaultComponents, ...components}} />
    )
  }
}

export {
  genericBuilder as default
}