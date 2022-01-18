import React from 'react';
import {
  useQuery,
  gql} from "@apollo/client";
// import {}from 'graphql';
import 'bootstrap/dist/css/bootstrap.min.css';

const getBooksQuery=gql`
{
  books{
    name
    id
    genre
    author{
      name
    }
  }
}
`

function BookList() {
  const { loading, error, data } = useQuery(getBooksQuery);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  console.log(data);
  return (
<div>

      {
        data.books.map(((val, index)=>{
          return (    <tr>
            <td key={val.id}>{val.name}</td>
          <td key={val.id}> {val.genre}</td>
          <td key={val.id}> {val.id}</td>
          </tr>);
        }))
        }
        </div>
  )
}
export default BookList;