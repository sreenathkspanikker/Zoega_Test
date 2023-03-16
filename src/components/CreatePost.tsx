import React, { useState } from "react";
import axios from "axios";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const CreatePost: React.FC = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    axios
      .post<Post>("https://jsonplaceholder.typicode.com/posts", {
        title,
        body,
        userId: 1, // set the userId to 1 by default
      })
      .then((response) => {
        console.log(response.data);
        setTitle("");
        setBody("");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold my-4">Create Post</h1>
      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-4 w-full md:w-2/2">
        <div className="my-2">
          <label htmlFor="title" className="block font-bold">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            className="border rounded-lg w-full py-2 px-3"
            required
          />
        </div>
        <div className="my-2">
          <label htmlFor="body" className="block font-bold">
            Body
          </label>
          <textarea
            id="body"
            name="body"
            value={body}
            onChange={(event) => setBody(event.target.value)}
            className="border rounded-lg w-full py-2 px-3"
            rows={5}
            required
          ></textarea>
        </div>
        <button type="submit" className="bg-green-500 text-white rounded-lg mt-4 py-1 px-2">
          Create
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
