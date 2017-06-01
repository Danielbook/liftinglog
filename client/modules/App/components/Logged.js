import React from 'react';
import NavigationMoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router';

const Logged = (props) => (
  <IconMenu
    {...props}
    iconButtonElement={
      <IconButton><NavigationMoreVertIcon /></IconButton>
    }
    targetOrigin={{ horizontal: 'right', vertical: 'top' }}
    anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
  >
    <MenuItem primaryText="Login" containerElement={<Link to="/login" />} />
    <MenuItem primaryText="Sign up" containerElement={<Link to="/signup" />} />
  </IconMenu>
);

Logged.muiName = 'IconMenu';

export default Logged;
