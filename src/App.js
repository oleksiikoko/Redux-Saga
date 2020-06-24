import React from "react";
import PostForm from "./components/PostForm";
import Posts from "./components/Posts";
import FetchedPosts from "./components/FetchedPosts";

function App() {
  return (
    <div className="container pt-3">
      <div className="row">
        <PostForm />
      </div>
      <div className="row">
        <div className="col">
          <h2>Sync Posts</h2>
          <Posts posts={[1, 2, 3]} />
        </div>
        <div className="col">
          <h2>Async Posts</h2>
          <FetchedPosts />
        </div>
      </div>
    </div>
  );
}

export default App;
