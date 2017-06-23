import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions';

class PostsShow extends Component {
  componentDidMount() {

    // optional if statment if we don't want to fetch the post to data
    // to care more about network
    if (!this.props.post) { // post here map to the state, see
      // mapStatetoProps below
      // this.props.match.params.id; // params from url /posts/:id
      const { id } = this.props.match.params;
      this.props.fetchPost(id);
    }
  }
  // posts[this.props.match.params.id]; this is ok, but not good style
  // here is the trick, right below in mapStatetoProps function

  onDeleteClick() {
    const { id } = this.props.match.params; //this.props.match.params.id
    this.props.deletePost(id, () => { // need to know id of the post to delete
      this.props.history.push('/'); // back to index after delete a post
    });
  }


  render() {
    const { post } = this.props; // this.props.post

    if(!post) {
      return <div>Loading...</div>;
    };

    return (
      <div>
        <h3 >{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
        <Link to="/" className="btn btn-primary">Back to Index</Link>
        <button className="btn btn-danger btn-cancel"
          onClick={this.onDeleteClick.bind(this)}
          >
            Delete Post
        </button>
      </div>
    );
  }
}

function mapStatetoProps({ posts }, ownProps) { // ownProps === this.props
  return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStatetoProps,{ fetchPost, deletePost })(PostsShow);
