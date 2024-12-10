import { useEffect, useState } from "react";

const Q2 = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/users"
      //      {//user for other methods
      //     method: 'POST',
      //     headers: {
      //         "Content-Type": "application/json"
      //     }
      // }
    );
    const data = await res.json();
    console.log(data);
    setUsers(data);
  };
  return (
    <div>
      <h1>Question 2</h1>
      <h3 className="p-4">
        Q.2. How would you structure a React component that needs to fetch data
        from an API (e.g., https://jsonplaceholder.typicode.com/users ) and
        display a list of User Details?
      </h3>
      {users.map((item) => (
        <div key={item.id} className="mb-4 ms-14">
          <h2>
            <b>Name:</b> {item.name}
          </h2>
          <h2>
            <b>EMail:</b> {item.email}
          </h2>
          <h2>
            <b>Phone No.:</b> {item.phone}
          </h2>
          <h2>
            <b>City:</b> {item.address.city}
          </h2>
          <h2>
            <b>Comapany Name:</b> {item.company.name}
          </h2>
        </div>
      ))}
    </div>
  );
};

export default Q2;
