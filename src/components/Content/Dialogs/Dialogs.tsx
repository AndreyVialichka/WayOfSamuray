
import DialogsMessage from './DialogMessage/DialogMessage';
import DialogsName from './DialogName/DialogName';
import  classes from './Dialogs.module.css'

type PropsType = {
  names: Array<NamesType>
  messages: Array<MessagesType>
}


type NamesType = {
  id: number
  name : string
}

type MessagesType = {
  id: number
  Message : string
}

const Dialogs: React.FC<PropsType> = (props) => {
    return (
        <div className={classes.dialogs}>
          <div className={classes.items}>
            {
              props.names.map(nameItem => {
                return <DialogsName name = {nameItem.name} />
              })
            }
          </div>
          <div className={classes.messages} >
            {
              props.messages.map(messageItem => {
                return <DialogsMessage message={messageItem.Message} />
              })
            }
          </div>
        </div>
    );
  }
  
  export default Dialogs;