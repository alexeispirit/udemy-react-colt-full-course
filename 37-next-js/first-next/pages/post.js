import axios from "axios";
// import { withRouter } from "next/router";

// const Post = props => {
//   return <h1>Post #{props.router.query.id}</h1>;
// };

const Post = ({ id, comments }) => {
  return (
    <div>
      <h1>Comments from Post #{id}</h1>
      {comments.map(comment => (
        <Comment {...comment} key={comment.id} />
      ))}
    </div>
  );
};

const Comment = ({ email, body }) => (
  <div>
    <h5>{email}</h5>
    <p>{body}</p>
  </div>
);

Post.getInitialProps = async ({ query }) => {
  const res = await axios.get(
    `http://jsonplaceholder.typicode.com/comments?postId=${query.id}`
  );
  const { data } = res;
  return { ...query, comments: data };
};

// export default withRouter(Post);
export default Post;
