import { Link } from "react-router-dom";
import classes from "./navigationBarStyle.module.css";

export default function NavigationBar() {
  return (
    <div className={classes.navigationBar}>
      <div>Logo</div>
      <div>
        <span><Link to={`home`}>Home</Link></span>
        <span>Browse</span>
        <span>About</span>
      </div>
    </div>
  );
}
