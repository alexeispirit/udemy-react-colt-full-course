import { withRouter } from "next/router";

const Post = props => {
  return <h1>Post #{props.router.query.id}</h1>;
};

// Post.getInitialProps = async ({ query }) => {
//   return { id: query.id };
// };

export default withRouter(Post);
