import React from "react";
import AuthorSelector from "./author-selector";
import { useState } from "react";
import { useFormik } from "formik";
import { gql, useMutation } from "@apollo/client";
import { AddBookMutation, getBooksQuery } from "../../queries";

const AddBook = () => {
  const [author, setAuthor] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [mutateFunction, { data, loading, error }] =
    useMutation(AddBookMutation);

  const formik = useFormik({
    initialValues: {
      name: "",
      genre: "",
      authorId: author,
    },
    onSubmit: async (values) => {
      setIsLoading(true);
      await mutateFunction({
        variables: {
          name: values.name,
          genre: values.genre,
          authorId: values.authorId,
        },
        refetchQueries: [{ query: getBooksQuery }],
      });
      setIsLoading(false);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      AddBook
      <div>
        <label>name</label>
        <input
          type="text"
          name="name"
          onChange={(e) => {
            formik.handleChange(e);
          }}
        />
      </div>
      <div>
        <label>genre</label>
        <input
          type="text"
          name="genre"
          onChange={(e) => {
            formik.handleChange(e);
          }}
        />
      </div>
      <AuthorSelector setAuthor={setAuthor} formik={formik} />
      <button type="submit">{isLoading ? "Loading..." : "Add"}</button>
    </form>
  );
};

export default AddBook;
