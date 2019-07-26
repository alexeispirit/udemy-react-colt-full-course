import axios from "axios";
// import React, { Component } from "react";

// class Index extends Component {
//   constructor(props) {
//     super(props);
//   }

//   static async getInitialProps() {
//     const res = await axios.get("http://jsonplaceholder.typicode.com/posts");
//     const { data } = res;
//     return { posts: data };
//   }

//   render() {
//     const { posts } = this.props;
//     return (
//       <div>
//         <h1>NEXT Index Page!</h1>
//         <ul>
//           {posts.map(post => (
//             <li key={post.id}>{post.title}</li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }

function Index({ posts }) {
  return (
    <div>
      <h1>NEXT Index Page!</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

Index.getInitialProps = async () => {
  const res = await axios.get("http://jsonplaceholder.typicode.com/posts");
  const { data } = res;
  return { posts: data };
};

export default Index;
