import React from 'react';
import PropTypes from 'prop-types';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';

const Stats = (props) => {
  return (
    <Table fixedHeader>
      <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
        <TableRow>
          <TableHeaderColumn colSpan="3" style={{ textAlign: 'center' }}>
            {props.exercise}
          </TableHeaderColumn>
        </TableRow>
        <TableRow>
          <TableHeaderColumn>Reps</TableHeaderColumn>
          <TableHeaderColumn>Weight</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody displayRowCheckbox={false}>
        {props.maxes.map((max, index) =>
          <TableRow key={index}>
            <TableRowColumn>{index + 1}</TableRowColumn>
            <TableRowColumn>{max} kg</TableRowColumn>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

Stats.propTypes = {
  exercise: PropTypes.string.isRequired,
};

export default Stats;
