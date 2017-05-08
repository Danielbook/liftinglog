/**
 * Created by Daniel on 2017-04-13.
 */
import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router";
import {Card, CardText, CardTitle} from "material-ui/Card";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import {Row} from "react-flexbox-grid";

const SignUpForm = ({
                      onSubmit,
                      onChange,
                      errors,
                      user,
                    }) => (
  <Card>
    <form action="/" onSubmit={onSubmit}>
      <CardTitle title="Welcome! Please sign up to start using the app"/>
      <CardText>
        {errors.summary && <p className="error-message">{errors.summary}</p>}
        <Row>
          <TextField
            floatingLabelText="Name"
            name="name"
            errorText={errors.name}
            onChange={onChange}
            value={user.name}
          />
        </Row>

        <Row>
          <TextField
            floatingLabelText="Email"
            name="email"
            errorText={errors.email}
            onChange={onChange}
            value={user.email}
          />
        </Row>

        <Row>
          <TextField
            floatingLabelText="Password"
            type="password"
            name="password"
            onChange={onChange}
            errorText={errors.password}
            value={user.password}
          />
        </Row>
          <RaisedButton type="submit" label="Create New Account" primary/>
          <CardText>Already have an account? <Link to={'/login'}>Log in</Link></CardText>

      </CardText>
    </form>
  </Card>
);

SignUpForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors:   PropTypes.object.isRequired,
  user:     PropTypes.object.isRequired
};

export default SignUpForm;
