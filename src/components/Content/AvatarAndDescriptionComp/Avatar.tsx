import  classes from './Avatar.module.css'
function Avatar() {
    return (
        <div className={classes.avatar}>
           <img src='https://cdn5.vectorstock.com/i/1000x1000/01/69/businesswoman-character-avatar-icon-vector-12800169.jpg'></img> 
          <p>Avatar description</p>
        </div>
    );
  }
  
  export default Avatar;