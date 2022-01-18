import React, { useState } from 'react';
import {
  useQuery,
  gql,useMutation} from "@apollo/client";
// import {}from 'graphql';
import 'bootstrap/dist/css/bootstrap.min.css';

function Addboo(addBookQuery) {
    
    const { loading, error, data } = useMutation(addBookQuery);
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    console.log(data);
  }
function AddBook() {
    const [namee,setnamee] = useState(null)
    const [genre,setgenre] = useState(null)
    const [author,setauthor] = useState(null)
    const addBookQuery=gql`
    mutation{
        addBook(name:${namee},genre:${genre},authorId:${author}) {
          id
        }
      }
    `
  

  const getAuthordata =gql`
  {
      authors{
      name
      id
    }
  }`
  const { loading, error, data } = useQuery(getAuthordata);
 
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  console.log(data);
  return (
    <div>
        <input type ="text" name ="BookName" onChange={setnamee}/>
        <input type ="text" name ="Genre" onChange={setgenre}/>
        <select className="browser-default custom-select" onChange={setauthor}>
        {
        data.authors.map(((val, index)=>{
          return (    
            <option key={val.id}>{val.name}</option>
       );
        }))
        }

        </select>
        <br/>
        <button onClick={()=>Addboo(addBookQuery)}>Submit</button>
    </div>
  )
}
export default AddBook;