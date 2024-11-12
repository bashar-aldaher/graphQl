import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { getBooksQuery } from "../../queries";
import BookDetails from "../book-details";

const BookList = () => {
  const { loading, error, data } = useQuery(getBooksQuery);
  const [bookId, setBookId] = useState();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <section id="book-list">
      <ul>
        {data?.books?.map((item, index) => (
          <li
            key={index}
            onClick={() => {
              setBookId(item?.id);
            }}
          >
            {item?.name}
          </li>
        ))}
      </ul>
      <BookDetails bookId={bookId} />
    </section>
  );
};

export default BookList;
