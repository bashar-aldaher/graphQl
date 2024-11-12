import React from "react";
import { useQuery, gql } from "@apollo/client";
import { getAuthorsQuery } from "../../../queries";

const AuthorSelector = ({ setAuthor, formik }) => {
  const { loading, error, data } = useQuery(getAuthorsQuery);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <section id="book-list">
      <select
        onChange={(e) => {
          setAuthor(e?.target?.value);
          formik.setFieldValue("authorId", e.target?.value);
        }}
      >
        {data?.authors?.map((item, index) => (
          <option key={index} value={item?.id}>
            {item?.name}
          </option>
        ))}
      </select>
    </section>
  );
};

export default AuthorSelector;
