import { makeStyles } from '@material-ui/core/styles';

const stylesWithObj = (classes) => makeStyles(classes);
const stylesWithFunc = (classes) => makeStyles((theme) => classes(theme));

export default function useStyles(classes) {
  if (typeof classes === 'function') {
    return stylesWithFunc(classes)();
  }
  return stylesWithObj(classes)();
}
