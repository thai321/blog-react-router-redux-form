import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import { Link } from 'react-router-dom';

class PostsIndex extends Component {

  // componentDidMount would be called after component was mounted into
  //browser DOM (it would be called after first render and it would not
  //be called if you are rendering server-side(to string)
  componentDidMount() { //
    this.props.fetchPosts(); // 1st time render, state is {}
  }

  renderPosts() {
    return _.map(this.props.posts, post => {
      return (
        <li className="list-group-item" key={post.id}>
          {post.title}
        </li>
      );
    });
  }

  render() {
    // console.log(this.props.posts); // an Object {1213: Object, 23423: Object}
    return (
      <div>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/posts/new">
            Add a Post
          </Link>
        </div>

        <h3>Posts</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

function mapStatetoProps(state) {
  return { posts: state.posts };
}


export default connect(mapStatetoProps, { fetchPosts })(PostsIndex);
