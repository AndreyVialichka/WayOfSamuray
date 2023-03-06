
import  classes from './Post.module.css'

type PropsType = {
    text: string,
    likeNumber: number
}

const Post: React.FC<PropsType> = (props) => {
    return (
        <div>
          <p>{props.text}</p>
          <span>Like{props.likeNumber}</span>
        </div>
    );
  }
  
  export default Post;