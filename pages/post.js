import React, { Component, Fragment } from 'react'
import fetch from 'isomorphic-unfetch';

const WP_URL = 'http://178.62.114.149'

export default class extends Component {
  static async getInitialProps (ctx) {
    const { slug } = ctx.query
    const post = await fetch(
      `${WP_URL}/wp-json/wp/v2/posts?slug=${slug}`
    ).then(res => res.json())
     .catch(err => console.log(err));
    return { post: post[0] }
  }

  render () {
    const { post } = this.props
    console.log(this.props)
    return (
      <div>
        {post && 
          <Fragment>
            <h1>{post.title && post.title.rendered}</h1>
            <div
              dangerouslySetInnerHTML={{
                __html: post.content && post.content.rendered
              }}
            />
          </Fragment>
        }
      </div>
    )
  }
}
