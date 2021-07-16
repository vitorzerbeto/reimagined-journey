import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import './App.css';
import CategoryList from './Categories/CategoryList/CategoryList';

function App() {
  return (
    <div className="App">
      <header>
        <Container maxWidth="xl">
          <Typography component="h1">Remagined Journey</Typography>
        </Container>
      </header>
      <CategoryList />
    </div>
  );
}

export default App;
