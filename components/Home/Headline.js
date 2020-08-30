import React from 'react'
import { RichText, Elements } from 'prismic-reactjs'

const htmlRender = (type, element, content, children, key) => {
  if (type === Elements.paragraph) {
    return React.createElement(
      'h2',
      {
        key,
        className:
          'text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl',
      },
      children,
    )
  }
  if (type === Elements.em) {
    return React.createElement(
      'span',
      { key, className: 'text-indigo-600' },
      children,
    )
  }
  return null
}

const Headline = ({ headline }) => {
  return <RichText htmlSerializer={htmlRender} render={headline} />
}
export default Headline
