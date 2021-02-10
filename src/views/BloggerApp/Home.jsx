import React from "react";
import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";
export default function BloggerHome(props) {
  const booksList = [
    {id:101, name: "Master React", price: 670 },
    {id:102, name: "Deep Dive into Angular 11", price: 800 },
    {id:103, name: "Mongo Essentials", price: 450 },
  ];

  const courseList = [
    { name: "Angular", date: "4/5/2021" },
    { name: "React", date: "6/2021" },
  ];

  const blogList = [
    {
      name: "React Learning",
      author: "Stephen Biz",
      content: "Welcome to learning React!!",
    },
    {
      name: "Installation",
      author: "schewzdenier",
      content: "You can install React from npm",
    },
  ];

  let CourseDetails = courseList.map((course) => (
    <div>
      <h3>{course.name}</h3>
      <h4>{course.date}</h4>
    </div>
  ));

  let BookDetails = booksList.map((book) => (
    <div key={book.id}>
      <h3>{book.name}</h3>
      <h4>{book.price}</h4>
    </div>
  ));

  let BlogDetails = blogList.map((blog) => (
    <div>
      <h3>{blog.name}</h3>
      <h3>{blog.author}</h3>
      <h4>{blog.content}</h4>
    </div>
  ));

  return (
    <div>
      <Grid
        container
        spacing={1}
        direction="row"
        justify="center"
        style={{ textAlign: "center" }}
      >
        <Grid item xs={4} sm={3}>
          <h2>Course Details</h2>
          {CourseDetails}
        </Grid>
        <Grid item xs={4} sm={3}>
          <h2>Book Details</h2>
          {BookDetails}
        </Grid>
        <Grid item xs={4} sm={3}>
          <h2>Blog Details</h2>
          {BlogDetails}
        </Grid>
      </Grid>
    </div>
  );
}
