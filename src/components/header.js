import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import scrollToElement from "scroll-to-element";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  appbar: {
    background: 'transparent',
    color: theme.palette.text.primary,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function Header({ siteTitle }) {
  const classes = useStyles();
  return (
    <AppBar position="absolute" classes={{ root: classes.appbar }}>
      <Toolbar className={classes.appbar}>
        <Typography variant="h6" className={classes.title}>
          Stephen Protzman
        </Typography>
        <Button color="inherit" onClick={() => (scrollToElement("#about_me"))}>about me</Button>
        <Button color="inherit">portfolio</Button>
        <Button color="inherit" onClick={() => (scrollToElement("#experience"))}>experience</Button>
        <Button color="inherit">tech</Button>
        <Button color="inherit">education</Button>
      </Toolbar>
    </AppBar>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
