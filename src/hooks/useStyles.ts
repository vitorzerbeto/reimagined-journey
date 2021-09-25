import { makeStyles } from '@material-ui/styles';
import { Theme } from '@mui/material';

type IClasses = (theme: Theme) => {};

export default function useStyles(classes: IClasses) {
  return makeStyles((theme: Theme) => classes(theme))();
}
