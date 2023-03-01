import classes from './NavBar.module.css'

function NavBar() {
    return (
      <div className={classes.sidebar}>
        <div>
          <div>Profile</div>
          <div>Messages</div>
          <div>News</div>
          <div>Music</div>
          <div>Settings</div>
        </div>
      </div>
    );
  }
  
  export default NavBar;