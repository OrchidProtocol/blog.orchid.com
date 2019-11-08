import React from 'react'
import { Link } from 'gatsby'
import { Layout } from '../components/common'

const NotFoundPage = () => (
    <Layout>
        <div className="container">
            <article className="content" style={{ textAlign: `center` }}>
                <h2>Error 404</h2>
                <section className="content-body">
                    Page not found, <a href="https://www.orchid.com/">return home</a> to start over
                </section>
            </article>
        </div>
    </Layout>
)

export default NotFoundPage
