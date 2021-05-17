/* eslint-disable no-undef */
import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'

const NODE_ENV = process.env.NODE_ENV
const GA_MEASUREMENT_ID = process.env.REACT_APP_GA_MEASUREMENT_ID


const Page = (props) => {
  const { title, children, ...rest } = props
  return (
    <div {...rest}>
      <Helmet>
        <title>{title} | Manufatto Admin </title>
      </Helmet>
      {children}
    </div>
  )
}

export default Page
