import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Theme } from '@mui/material';

import useStyles from '@/hooks/useStyles';

function Header() {
  const classes = useStyles((theme: Theme) => ({
    h1: {
      fontFamily: theme.typography.fontFamily,
      color: theme.palette.primary.main,
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
