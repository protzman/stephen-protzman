import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Img from "gatsby-image"
import { StaticQuery, graphql } from "gatsby"
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import Link from '@material-ui/core/Link'
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader'
import Container from '@material-ui/core/Container'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
}));

function createData(name, position, timeframe) {
  return { name, position, timeframe };
}

const rows = [
  createData('XOR Security', 'Full Stack Engineer', 'MAR 2018 - Present'),
  createData('General Dynamics Mission Systems', 'Full Stack Engineer', 'FEB 2015 - MAR 2018'),
  createData('Ferguson Enterprises', 'Full Stack Intern', 'APR 2014 - JAN 2015'),
];

function Experience() {
  const classes = useStyles();
  return (
    <div>
      <Container maxWidth="md">
        <Card classes={{ root: classes.root }}>
          <CardHeader title="EXPERIENCE" />
          <CardContent>
            <div style={{ marginTop: '1em' }}>
              <Table className={classes.table}>
                <TableBody>
                  {rows.map(row => (
                    <TableRow key={row.name}>
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="center">{row.position}</TableCell>
                      <TableCell align="center">{row.timeframe}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </Container >
    </div >
  )
}

export default Experience