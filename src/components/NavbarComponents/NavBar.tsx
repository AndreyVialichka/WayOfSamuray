import { NavLink } from 'react-router-dom';
import classes from './NavBar.module.css'

function NavBar() {
    return (
      <div className={classes.sidebar}>
        <div>
          <div className={classes.link}>
            <NavLink to='/profile' activeClassName={classes.acitveLink}> Profile </NavLink>
          </div>

          <div className={classes.link}>
          <NavLink to='/dialogs' activeClassName={classes.acitveLink}> Messages </NavLink>
          </div>

          <div className={classes.link}>
          <NavLink to='/news' activeClassName={classes.acitveLink}> News </NavLink>
          </div>

          <div className={classes.link}>
          <NavLink to='/music' activeClassName={classes.acitveLink}> Music </NavLink>
          </div>

          <div className={classes.link}>
          <NavLink to='/settings' activeClassName={classes.acitveLink}> Settings </NavLink>
          </div>
        </div>
      </div>
    );
  }
  
  export default NavBar;