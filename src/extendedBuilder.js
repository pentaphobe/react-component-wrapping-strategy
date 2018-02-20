import React from 'react'

const DefaultLayout = () => <div>Empty Layout</div>

// each entry is a list of props to assign from parent to quark
const defaultQuarkProps = {
  Layout: ['className']
}

// filter object entries by a function
const filterEntries = fn => obj =>
  Object.entries(obj).reduce((newObj, [key, val]) => {
    if (fn(key, val, obj)) newObj[key] = obj[key]

    return newObj
  }, {})

const gatherProps = props => (propList = []) => {
  const gatherFn = filterEntries((k, val, obj) => propList.indexOf(k) !== -1)

  return gatherFn(props)
}

const extendedBuilder = (props = {}) => {
  const {
    Layout = DefaultLayout,
    components: defaultComponents,
    quarkProps = defaultQuarkProps,
    ...propsOuter
  } = props

  return (props = {}) => {
    const { components, ...otherProps } = props

    const allComponents = {
      ...defaultComponents,
      ...components
    }

    // make a function which gathers props from a collection
    // of all props
    const gather = gatherProps({ ...propsOuter, ...otherProps })

    Object.entries(allComponents).map(([k, V]) => {
      // just the props requested for this quark
      const filteredProps = gather(quarkProps[k])

      allComponents[k] = <V {...filteredProps} />
    })

    return <Layout {...propsOuter} {...otherProps} components={allComponents} />
  }
}

/**
 * Example usage
 */
const builder = ({ components, Layout, quarkProps } = {}) => {
  return extendedBuilder({
    components: {
      ...{
        Wrapper: WrapperStyle,
        Label: LabelStyle,
        Input: InputStyle
      },
      ...components
    },
    // TODO: consider automagically inserting props
    quarkProps: {
      Wrapper: ['className'],
      Label: ['className']
    },
    Layout: Layout || DefaultLayout
  })
}

export { extendedBuilder as default }
