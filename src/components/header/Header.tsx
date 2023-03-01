import classes from './header.module.css'
function Header() {
  return (
    <div className= {classes.header}> 
      <div className={classes.logo} >
        <img src="https://logos-world.net/wp-content/uploads/2020/10/Free-Emblem.png"></img>
      </div>
    </div>
  );
}

export default Header;