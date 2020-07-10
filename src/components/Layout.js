import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import NavBar from './NavBar';
import PersonalInfo from './PersonalInfo';
import Footer from './Footer';

const useStyles = makeStyles(() => ({
    vertical: {
      maxWidth: '900px',
      width: '100%',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      minHeight: 'calc(100vh - 54px)',
    },
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'row',
      flexGrow: 1,
    },
    personalContainer: {
      minWidth: '300px',
      maxWidth: '300px',
      justifyContent: 'center',
      display: 'flex',
      marginTop: '25px',
    },
    contentContainer: {
      // backgroundColor: 'yellow',
      padding: '24px 0',
      flexGrow: 1,
      maxWidth: '600px',
    }
  }));

export default function Layout(props) {
  const classes = useStyles();
  return (
    <Fragment>
      <NavBar />
      <div className={classes.vertical}>
      <div className={classes.container}>
        <div className={classes.personalContainer}>
          <PersonalInfo />
        </div>
        <div className={classes.contentContainer}>
          {props.children}
        </div>
      </div>
      <Footer />
      </div>
    </Fragment>
  );
}