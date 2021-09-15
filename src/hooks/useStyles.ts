import { makeStyles, Theme } from '@material-ui/core/styles';

type IClasses = (theme: Theme) => {};

export default function useStyles(classes: IClasses) {
  return makeStyles((theme) => classes(theme))();
}
