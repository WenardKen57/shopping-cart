import { Link } from "react-router-dom";
import classes from "./navigationBarStyle.module.css";

export default function NavigationBar() {
  return (
    <div className={classes.navigationBar}>
      <div>Logo</div>
      <div className={classes.linkSection}>
        <span>
          <Link to={`home`}>Home</Link>
        </span>
        <span>
          <Link to={`browse`}>Browse</Link>
        </span>
        <span>About</span>
      </div>
    </div>
  );
}
