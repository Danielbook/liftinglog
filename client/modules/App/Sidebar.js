import React from "react";
import Drawer from "material-ui/Drawer";
import MenuItem from "material-ui/MenuItem";

class Sidebar extends React.Component {

  constructor(props) {
    super(props);
    console.log(this.props);
  }

  render() {
    return (
      <Drawer open={this.props.open}>
        <MenuItem>Menu Item</MenuItem>
        <MenuItem>Menu Item 2</MenuItem>
      </Drawer>
    );
  }
}
export default Sidebar;
