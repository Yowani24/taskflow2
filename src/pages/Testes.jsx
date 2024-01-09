import { Input } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";

const users = [
  { id: 1, name: "Alice", age: 25, role: "Developer", country: "USA" },
  { id: 2, name: "Bob", age: 30, role: "Designer", country: "Canada" },
  { id: 3, name: "Charlie", age: 28, role: "Manager", country: "UK" },
  { id: 4, name: "David", age: 35, role: "Engineer", country: "Australia" },
  { id: 5, name: "Emma", age: 22, role: "Analyst", country: "Germany" },
  { id: 6, name: "Frank", age: 27, role: "Tester", country: "France" },
  { id: 7, name: "Grace", age: 32, role: "Product Manager", country: "Japan" },
  { id: 8, name: "Tenry", age: 29, role: "Marketing", country: "Brazil" },
  { id: 9, name: "Ivy", age: 31, role: "HR", country: "India" },
  { id: 10, name: "Jack", age: 26, role: "Sales", country: "Spain" },
  { id: 11, name: "Kate", age: 33, role: "Customer Support", country: "Italy" },
  {
    id: 12,
    name: "Leo",
    age: 24,
    role: "Data Scientist",
    country: "South Korea",
  },
  { id: 13, name: "Nia", age: 36, role: "Finance", country: "Mexico" },
  { id: 14, name: "Noah", age: 23, role: "Architect", country: "Argentina" },
  { id: 15, name: "Olivia", age: 34, role: "Writer", country: "Russia" },
  { id: 16, name: "Peter", age: 28, role: "Artist", country: "China" },
  {
    id: 17,
    name: "Quinn",
    age: 29,
    role: "UX Designer",
    country: "Netherlands",
  },
  { id: 18, name: "Ryan", age: 31, role: "SysAdmin", country: "Sweden" },
  { id: 19, name: "Sofia", age: 27, role: "Consultant", country: "Norway" },
  { id: 20, name: "Tom", age: 30, role: "Project Manager", country: "Denmark" },
  { id: 21, name: "Hom", age: 30, role: "Project Manager", country: "Denmark" },
];

export default function Testes() {
  const [userData, setUserData] = useState([]);
  const [user_filter, setUser_filter] = useState("");

  useEffect(() => {
    if (users) {
      setUserData(
        users.filter((user) =>
          user.name?.toLowerCase().startsWith(user_filter.toLowerCase())
        )
      );
    }
  }, [user_filter]);

  return (
    <div>
      <h1>Usuários</h1>
      <div className="w-[200px]">
        <Input
          className="my-5 w-[200px]"
          placeholder="Search user..."
          onChange={(e) => setUser_filter(e.target.value)}
        />
      </div>
      <div className="mt-10">
        {userData.map((user) => {
          return <p key={user.id}>{user.name}</p>;
        })}
      </div>
    </div>
  );
}
