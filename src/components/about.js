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
import Avatar from '@material-ui/core/Avatar'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles({
  avatar: {
    width: 180,
    height: 180
  }
});


function About() {
  const classes = useStyles();
  return (
    <div>
      <Container maxWidth="md">
        <Card classes={{ root: classes.root }}>
          <CardHeader title="ABOUT ME" />
          <CardContent>
            <Grid container justify="center" alignItems="center">
            <StaticQuery
              query={graphql`
                query {
                  placeholderImage: file(relativePath: { eq: "portrait.jpg" }) {
                    childImageSharp {
                      fluid(quality: 90) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                }
              `}
              render={data => <Avatar alt="portrait" className={classes.avatar} src={data.placeholderImage.childImageSharp.fluid.src} />} />
            </Grid>
            <div style={{ marginTop: '1em' }}>
              <Typography variant="h6">Stephen Protzman</Typography>
            </div>
            <div style={{ marginTop: '1em' }}>
              <Typography variant="headline">
                <p>
                  Currently working as a full stack engineer at <Link href="https://www.xorsecurity.com/">Xor Security</Link> focusing
                  on web application development for cyber platforms. Though I am more than comfortable on all
                  ends of the software development spectrum, I tend to shine with my pixel perfect user experiences. My appetite for
                  front end technologies is bottomless, and I am always looking for a new challenge with new technology.
              </p>
              </Typography>
            </div>
          </CardContent>
        </Card>
      </Container >
    </div >
  )
}

export default About