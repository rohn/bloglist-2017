import React, { PropTypes } from 'react';
import moment from 'moment';
import _ from 'lodash';

const formatDate = date => moment(date).format('D MMM YYYY');
const formatAuthor = author => _.trimEnd(author.split('(').pop(), ')');

class BlogPost extends React.Component {
  render() {
    const { post } = this.props;
    const { author, date, link, title } = post;

    return (
      <li>
        <div className="blogTitle"><a href={link}>{title}</a></div>
        <div className="blogDate">
          <time>{formatDate(date)}</time> by <span className="blogAuthor">{formatAuthor(author)}</span>
        </div>
      </li>
    );
  }
}

BlogPost.propTypes = {
  post: PropTypes.shape({
    author: PropTypes.string,
    date: PropTypes.string,
    link: PropTypes.string,
    title: PropTypes.string
  }).isRequired
};

export default BlogPost;
