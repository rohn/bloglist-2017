import React, { PropTypes } from 'react';
import { getPosts } from '../services/blog-service';
import BlogPost from './blogpost';

class BlogList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blogposts: []
    }
  }

  componentDidMount() {
    // it's not expected that the props on this component will change,
    // otherwise componentWillReceiveProps() would be used to update
    const { url, posts } = this.props;
    getPosts(url, posts).then(blogposts => {
      this.setState({ blogposts });
    });
  }

  render() {
    const { blogposts } = this.state;
    return (
      <div className="bloglist">
        <ul>
          {blogposts.map(post => <BlogPost post={post} key={post.guid} />)}
        </ul>
      </div>
    );
  }
}

BlogList.propTypes = {
  url: PropTypes.string.isRequired,
  posts: PropTypes.number
};

BlogList.defaultProps = {
  posts: 5
}

export default BlogList;
