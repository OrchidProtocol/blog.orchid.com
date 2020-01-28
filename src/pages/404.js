import React from 'react'
import Layout from '../components/common/Layout'
import { css } from '@emotion/core'

const NotFoundPage = () => (
  <Layout>
    <div css="text-align:center">
      <h1>NOT FOUND - 404</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </div>
  </Layout>
)

export default NotFoundPage
