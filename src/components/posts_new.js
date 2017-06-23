import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'; // alow our component to
// talk redirect to the redux reducers ( reducers/index.js)
// ReduxForm is responsible for hanlding state and validation form

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions';

class PostsNew extends Component {
  renderField(field) { // field argument here is to wire up to
    //the Field(form) because anything changes in this
    //rednerTitleField, will also change in the Field.

    const { meta: { touched, error } } = field;
    //field.meta.touched, field.meta.error

    const className= `form-group
    ${ touched && error ? 'has-danger' : '' }`;

    return (
      <div className={className}>
        <label>{field.label}</label>
        <input className="form-control"
          type="text"
          {...field.input}
        />
        <div className="text-danger">
          {touched ? error : ''}
        </div>
      </div>
    );
  }

  onSubmit(values){
    // this === component
    // console.log(values);
    // Object {title: "sdfsdf", categories: "sdsdf", content: "sdfsf"}
    this.props.createPost(values, () => {
      this.props.history.push('/'); // this function will navigate
      // back to root(home, index)
    });
  }


  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label="Title for Post"
          name="title"
          component={this.renderField}
        />

        <Field
          label="Categories"
          name="categories"
          component={this.renderField}
        />

        <Field
          label="Post Content"
          name="content"
          component={this.renderField}
        />

        <button type="submit" className="btn btn-primary btn-lg">
          Submit
        </button>

        <Link to="/" className="btn btn-danger btn-lg ">
          Cancel
        </Link>
      </form>
    );
  }
}
// component here is a function that return amount of jsx to show on
// screen

function validate(values) {
  //console.log(values) --> {title: 'adsf', categories: 'sdfsd',
  // content: 'sdfd' }
  const errors = {};

  // validate the inputs from 'values'
  if (!values.title) {
    errors.title = "Enter a title!";
  }
  if(!values.categories) {
    errors.categories = "Enter some categories";
  }
  if(!values.content) {
    errors.content = 'Enter some content please';
  }

  // If errors is empty, the form is fine to submit
  // If errors has *any* properties, redux form assumes form is invalid
  return errors;
}

export default reduxForm({
  validate, // validate: validate, cause key and value are identical
  // the string that you assign to this form
  // is unique.   form: '123109uosdf' (anything here)
  form: 'PostsNewForm' // form here is the name of the form
})(
  connect(null, { createPost })(PostsNew)
); // connect this Postsnew to the action createPost
// so that we can call this.props.createPost
