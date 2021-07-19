import { makeStyles } from '@material-ui/core/styles';

export default function useStyles(classes) {
  return makeStyles((theme) => classes(theme))();
}
