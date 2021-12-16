import React from "react";
import "./reposContainer.scss";

// Components;
import CloseContainerButton from "../closeContainerButton/CloseContainerButton";
import ExitRouteButton from "../exitRouteButton/ExitRouteButton";

const ReposContainer = ({ repos, userData }) => {

  return (
    <>
      {userData.login ? (
        <div className="route repos-container">
          <div className="repos-container-content">
            <div className="repos-container-content-title">
              <h1>Repos from <span>#{userData.login}</span></h1>
            </div>
            <ul className="route-list repos-container-content-list">
              {repos?.map((repo) => (
                <li className="repo" key={repo.id}>
                  <p className="repo-name">{repo?.name}</p>
                  <p className="repo-description">
                    {repo?.description ?? "no description"}
                  </p>
                  <a className="repo-link" href={repo.html_url} target="_blank">
                    Access repository
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <CloseContainerButton />
        </div>
      ) : (
        <ExitRouteButton />
      )}
    </>
  );
};

export default ReposContainer;
