
import  classes from './DialogName.module.css'

type PropsType = {
  name: string
}

const DialogsName: React.FC<PropsType> = (props) => {
    return (
            <div className={classes.item + " " + classes.active}>{props.name}</div>
    );
  }
  
  export default DialogsName;