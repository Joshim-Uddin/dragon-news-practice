import React, { useEffect, useState } from "react";
import { Link, NavLink, useLoaderData } from "react-router-dom";

const LeftNav = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://dragon-news-server-joshim-uddin.vercel.app/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <h3>All Categories</h3>
      {categories.map((category) => (
        <p key={category.id} className="category p-2">
          <NavLink
            to={`/category/${category.id}`}
            className={({ isActive }) =>
              isActive
                ? "text-decoration-none text-white p-2 bg-secondary"
                : "text-decoration-none text-dark "
            }
          >
            {category.name}
          </NavLink>
        </p>
      ))}
    </div>
  );
};

export default LeftNav;
