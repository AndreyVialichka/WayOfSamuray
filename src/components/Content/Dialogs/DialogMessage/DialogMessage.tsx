
import  classes from './DialogMessage.module.css'

type PropsType = {
  message: string
}

const DialogsMessage: React.FC<PropsType> = (props) => {
    return (
      <div className={classes.message}>{props.message}</div>
    );
  }
  
  export default DialogsMessage;