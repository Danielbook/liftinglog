import React from "react";
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from "material-ui/Table";

const StatsPage = (props) => {
  return (
    <Table fixedHeader={true}>
      <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
        <TableRow>
          <TableHeaderColumn colSpan="3" style={{textAlign: 'center'}}>
            Exercise
          </TableHeaderColumn>
        </TableRow>
        <TableRow>
          <TableHeaderColumn>Reps</TableHeaderColumn>
          <TableHeaderColumn>Weight</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody displayRowCheckbox={false}>
        <TableRow>
          <TableRowColumn>1</TableRowColumn>
          <TableRowColumn>100</TableRowColumn>
        </TableRow>
        <TableRow>
          <TableRowColumn>2</TableRowColumn>
          <TableRowColumn>100</TableRowColumn>
        </TableRow>
        <TableRow>
          <TableRowColumn>3</TableRowColumn>
          <TableRowColumn>100</TableRowColumn>
        </TableRow>
        <TableRow>
          <TableRowColumn>4</TableRowColumn>
          <TableRowColumn>100</TableRowColumn>
        </TableRow>
        <TableRow>
          <TableRowColumn>5</TableRowColumn>
          <TableRowColumn>100</TableRowColumn>
        </TableRow>
      </TableBody>
    </Table>

  );
};

export default StatsPage
