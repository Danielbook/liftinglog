import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import TextField from "material-ui/TextField";

// Import Actions
import { fetchWorkout } from '../../WorkoutActions';

// Import Selectors
import { getWorkout } from '../../WorkoutReducer';

export function WorkoutDetailPage(props) {
  return (
    <div>
      <Helmet title={props.workout.title} />
      <TextField
        hintText=""
        floatingLabelText={props.workout.title}/>
      {/*<div className={`${styles['single-post']} ${styles['post-detail']}`}>*/}
        {/*<h3 className={styles['post-title']}>{props.post.title}</h3>*/}
        {/*<p className={styles['author-name']}><FormattedMessage id="by" /> {props.post.name}</p>*/}
        {/*<p className={styles['post-desc']}>{props.post.content}</p>*/}
      {/*</div>*/}
    </div>
  );
}

// Actions required to provide data for this component to render in sever side.
WorkoutDetailPage.need = [params => {
  return fetchWorkout(params.cuid);
}];

// Retrieve data from store as props
function mapStateToProps(state, props) {
  return {
    workout: getWorkout(state, props.params.cuid),
  };
}

WorkoutDetailPage.propTypes = {
  workout: PropTypes.shape({
    title: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps)(WorkoutDetailPage);
