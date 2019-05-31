import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'

const useStyles = makeStyles(theme => ({
  text: {
    padding: theme.spacing(2, 2, 0),
  },
  paper: {
    paddingBottom: 50,
  },
  list: {
    marginBottom: theme.spacing(2),
  },
  subheader: {
    backgroundColor: theme.palette.background.paper,
  },
  appBar: {
    top: 'auto',
    bottom: 0,
    background: 'transparent',
    color: theme.palette.text.primary,
  },
  grow: {
    flexGrow: 1,
  },
}));

function SocialIcons() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <AppBar position="absolute" color="primary" className={classes.appBar}>
      <Toolbar>
        <div className={classes.grow} />

        <IconButton color="inherit" aria-label="Open drawer">
          <FontAwesomeIcon icon={faLinkedin} />
        </IconButton>
        <IconButton color="inherit">
          <FontAwesomeIcon icon={faGithub} />
        </IconButton>
        <IconButton color="inherit">
          <FontAwesomeIcon icon={faInstagram} />
        </IconButton>
        <div className={classes.grow} />

      </Toolbar>
    </AppBar>
  );
}

export default SocialIcons;