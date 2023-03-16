import React from "react";
import PostList from "./components/PostList";
import CreatePost from "./components/CreatePost";

const App: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold my-4">My Blog</h1>
      <div className="flex flex-col md:flex-row gap-4 w-full md:w-3/4">
        <PostList />
        <CreatePost />
      </div>
    </div>
  );
};

export default App;
