import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { Card, CardText, CardTitle } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { Row } from 'react-flexbox-grid';


const LoginForm = ({
                     onSubmit,
                     onChange,
                     errors,
                     successMessage,
                     user,
                   }) => (
  <Card>
    <form action="/" onSubmit={onSubmit}>
      <CardTitle title="Login" />
      <CardText>

        {successMessage && <p className="success-message">{successMessage}</p>}
        {errors.summary && <p className="error-message">{errors.summary}</p>}

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

        <Row>
          <RaisedButton type="submit" label="Log in" primary />
        </Row>
        <Row>
          <CardText>Don't have an account? <Link to={'/signup'}>Create one</Link>.</CardText>
        </Row>
      </CardText>
    </form>
  </Card>
);

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  successMessage: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired,
};

export default LoginForm;
