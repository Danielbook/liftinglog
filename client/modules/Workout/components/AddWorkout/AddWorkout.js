/**
 * Created by Daniel on 2017-04-11.
 */
// import React from "react";
// import {connect} from "react-redux";
// import {addWorkout} from "../../WorkoutActions";
// import FloatingActionButton from "material-ui/FloatingActionButton";
// import ContentAdd from "material-ui/svg-icons/content/add";
// import TextField from "material-ui/TextField";
// import {browserHistory} from "react-router";
//
// let AddWorkout = ({dispatch}) => {
//   return (
//     <form onSubmit={e => {
//       e.preventDefault();
//       dispatch(addWorkout("New Workout", Date.now()));
//       {/*browserHistory.push('/workout');*/}
//     }}>
//       <h1>
//         New Workout
//       </h1>
//       <div>
//         <TextField
//           floatingLabelText="Workout Name"
//         />
//         <FloatingActionButton
//           style={{marginLeft: 20}}
//           type="submit"
//         >
//           <ContentAdd />
//         </FloatingActionButton>
//       </div>
//     </form>
//   )
// };
//
// AddWorkout = connect()(AddWorkout);
//
// export default AddWorkout;


import React, { Component } from 'react';
import PropTypes from "prop-types";
import FloatingActionButton from "material-ui/FloatingActionButton";
import ContentAdd from "material-ui/svg-icons/content/add";
import TextField from "material-ui/TextField";

export class AddWorkout extends Component {
  addWorkout = () => {
    // const nameRef = this.refs.name;
    // const titleRef = this.refs.title;
    // const contentRef = this.refs.content;
    // if (nameRef.value && titleRef.value && contentRef.value) {
    //   this.props.addPost(nameRef.value, titleRef.value, contentRef.value);
    //   nameRef.value = titleRef.value = contentRef.value = '';
    // }
    const titleRef = this.refs.title;

    if (titleRef.value) {
      this.props.addPost(titleRef.value);
      titleRef.value = '';
    }
  };

  render() {
    // const cls = `${styles.form} ${(this.props.showAddPost ? styles.appear : '')}`;
    return (
      <div>
        {/*<div className={styles['form-content']}>*/}
          {/*<h2 className={styles['form-title']}><FormattedMessage id="createNewPost" /></h2>*/}
          {/*<input placeholder={this.props.intl.messages.authorName} className={styles['form-field']} ref="name" />*/}
          {/*<input placeholder={this.props.intl.messages.postTitle} className={styles['form-field']} ref="title" />*/}
          {/*<textarea placeholder={this.props.intl.messages.postContent} className={styles['form-field']} ref="content" />*/}
          {/*<a className={styles['post-submit-button']} href="#" onClick={this.addWorkout}><FormattedMessage id="submit" /></a>*/}
        {/*</div>*/}
        <div>
          <TextField
            floatingLabelText="Workout Name"
            ref="title"
          />
          <FloatingActionButton
            style={{marginLeft: 20}}
            type="submit"
            onClick={this.addWorkout}
          >
            <ContentAdd />
          </FloatingActionButton>
        </div>
      </div>
    );
  }
}

// AddWorkout.propTypes = {
//   addWorkout: PropTypes.func.isRequired,
// };

export default AddWorkout;

