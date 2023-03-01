import Avatar from './AvatarAndDescriptionComp/Avatar';
import  classes from './Content.module.css'
import MyPost from './MyPostComponents/MyPost';
import NewPost from './NewPostComp/NewPost';
import Post from './PostsComp/Post';
function Content() {
    return (
      <div className= {classes.content} >
        <img src="https://img.freepik.com/free-photo/abstract-grunge-decorative-relief-navy-blue-stucco-wall-texture-wide-angle-rough-colored-background_1258-28311.jpg?w=2000">
        </img>
        <Avatar/>
        <MyPost />
        <NewPost />
        <Post
          likeNumber = {14} 
          text = {"Some Text Description"}/>
      </div>
    );
  }
  
  export default Content;