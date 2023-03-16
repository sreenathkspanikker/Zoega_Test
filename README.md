# My Blog

This is a simple blog application built with React.js, TypeScript, and Tailwind CSS. It allows users to create, read, update, and delete blog posts using the JsonPlaceHolder API.

## Getting Started

To get started, clone the repository and install the dependencies:

`git clone https://github.com/your-username/my-blog.git`
`cd my-blog`
`npm install`

Then, start the development server:

`npm start`

This will start the development server at http://localhost:3000. Open this URL in your browser to view the application.

## Features

### List Posts

The home page displays a list of blog posts fetched from the JsonPlaceHolder API. Each post shows its title, body, and author. The post list is responsive and works on both desktop and mobile devices.

Each post in the list has a delete button. Clicking this button sends a DELETE request to the API to delete the post. If the request is successful, the post is removed from the list.

### Create Post

The home page also includes a form to create a new post. The form has input fields for the title and body of the post, and a submit button. The user can enter the post details and submit the form to add a new post to the list.

### Edit Post

Each post in the list also has an edit button. Clicking this button takes the user to a page with a form to edit the post. The form has input fields for the title and body of the post, and a submit button. The user can edit the post details and submit the form to update the post.

### Delete Post

Each post in the list has a delete button (as mentioned above under "List Posts").


## Technologies Used

This application was built with the following technologies:

1. React.js
2. TypeScript
3. Tailwind CSS
4. Axios
