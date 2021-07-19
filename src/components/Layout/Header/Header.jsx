import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import useStyles from '../../../hooks/useStyles';

function Header() {
  const classes = useStyles((theme) => ({
    h1: {
      fontFamily: theme.fonts.Festive,
      color: theme.palette.primary.red,
      fontSize: '3em',
    },
  }));

  return (
    <header>
      <Container maxWidth="xl">
        <Typography
          component="h1"
          variant="h1"
          align="center"
          classes={classes}
          gutterBottom
        >
          Remagined Journey
        </Typography>
      </Container>
    </header>
  );
}

export default Header;
