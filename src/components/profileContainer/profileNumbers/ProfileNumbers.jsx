import React from "react";
import { useNavigate } from "react-router-dom";

const ProfileNumbers = ({ repos, followers, following }) => {
  const navigate = useNavigate();

  const handleRoutes = (route) => {
    navigate(route);
  };

  const numbers = [
    {
      id: 1,
      value: repos ?? "-",
      description: "Repositories",
      openRoute: () => handleRoutes("/repos")
    },
    {
      id: 2,
      value: followers ?? "-",
      description: "Followers",
      openRoute: () => handleRoutes("/followers")
    },
    {
      id: 3,
      value: following ?? "-",
      description: "Following",
      openRoute: () => handleRoutes("/following")
    },
  ];

  return (
    <ul>
      {numbers.map((li) => (
        <li
          key={li.id}
          onClick={li.openRoute}
        >
          <span>{li.value}</span>
          <p>{li.description}</p>
        </li>
      ))}
    </ul>
  );
};

export default ProfileNumbers;
