import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Theme } from '@mui/material';

function Header() {
  return (
    <header>
      <Container maxWidth="xl">
        <Typography component="h1" variant="h1">
          Remagined Journey
        </Typography>
      </Container>
    </header>
  );
}

export default Header;
