import Avatar from './AvatarAndDescriptionComp/Avatar';
import  classes from './Profile.module.css'
import MyPost from './MyPostComponents/MyPost';
import NewPost from './NewPostComp/NewPost';
import Post from './PostsComp/Post';

type ProfileProps = {
  posts:Array<PostsItem>
  addPost: (value : string) => void
}

type PostsItem = {
  id:number
  likeNumber: number
  text:string
}

function Profile(props:ProfileProps) {
    return (
      <div className= {classes.content} >
        <img src="https://img.freepik.com/free-photo/abstract-grunge-decorative-relief-navy-blue-stucco-wall-texture-wide-angle-rough-colored-background_1258-28311.jpg?w=2000">
        </img>
        <Avatar/>
        <MyPost />
        <NewPost 
          addPost = {props.addPost}
        />
        {
          props.posts.map((postItem) => {
            return <Post
              likeNumber = {postItem.likeNumber} 
              text = {postItem.text} />
          })
        }
      </div>
    );
  }
  
  export default Profile;