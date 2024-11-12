import React from "react";
import { getBookDetailsQuery } from "../../queries";
import { useQuery } from "@apollo/client";

const BookDetails = ({ bookId }) => {
  const { loading, error, data } = useQuery(getBookDetailsQuery, {
    variables: { id: bookId },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    data && (
      <div>
        <div>name:{data?.book?.name}</div>
        <div>genre:{data?.book?.genre}</div>
        <div>author:{data?.book?.author?.name}</div>
        <div>author age:{data?.book?.author?.age}</div>
        <div>
          author books:
          {data?.book?.author?.books?.map((item, idx) => (
            <div>{item?.name}</div>
          ))}
        </div>
      </div>
    )
  );
};

export default BookDetails;
