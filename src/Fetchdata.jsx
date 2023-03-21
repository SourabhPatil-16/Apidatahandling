import React, { useState, useEffect } from 'react';
import './style.css';

function Fetchdata() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  console.log(data);

  function handleDelete(index) {
    // alert('200 ok');
    setData(data.filter((item, i) => i !== index));
  }

  return (
    <div className="main">
      <table border="2">
        <thead>
          <tr>
            <th>Post</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user, index) => (
            // <tr key={user.id}>
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Fetchdata;

{
  /* <ul>
        {data.map((item, index) => (
          <li key={index}>
            {item.name} - {item.degree}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul> */
}
