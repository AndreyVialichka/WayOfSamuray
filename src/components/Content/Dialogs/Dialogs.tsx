
import DialogsMessage from './DialogMessage/DialogMessage';
import DialogsName from './DialogName/DialogName';
import  classes from './Dialogs.module.css'


const Dialogs: React.FC = (props) => {
    return (
        <div className={classes.dialogs}>
          <div className={classes.items}>
            <DialogsName name ="Alex"/>
            <DialogsName name ="Alex"/>
            <DialogsName name ="Alex"/>
            <DialogsName name ="Alex"/>
          </div>
          <div className={classes.messages} >
            <DialogsMessage message='hi' />
            <DialogsMessage message='hi' />
            <DialogsMessage message='hi' />
            <DialogsMessage message='hi' />
            <DialogsMessage message='hi' />
          </div>
        </div>
    );
  }
  
  export default Dialogs;