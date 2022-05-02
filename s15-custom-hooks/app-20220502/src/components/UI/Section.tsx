import classes from "./Section.module.css";

type Props = {
  children: JSX.Element | JSX.Element[];
};
const Section = (props: Props) => {
  return <section className={classes.section}>{props.children}</section>;
};

export default Section;
