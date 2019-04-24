import React from 'react';
import fetch from 'isomorphic-unfetch';
import Link from 'next/link';

const WP_URL = 'http://178.62.114.149';

class Index extends React.Component {
  static async getInitialProps() {
    const posts = await fetch(
      `${WP_URL}/wp-json/wp/v2/posts/`,
    ).then(res => res.json())
      .catch(err => console.log(err));

    return { posts };
  }

  render() {
    console.log(this.props);
    const { posts } = this.props;
    return (
      <div>
        <h1>Posts:</h1>
        {posts.map(post => (
          <div key={post.slug}>
            <Link href={`/post/${post.slug}`}>
              <a>
                {post.title.rendered}
              </a>
            </Link>
          </div>
        ))}
      </div>
    );
  }
}

export default Index;
