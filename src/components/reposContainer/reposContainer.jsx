import "./reposContainer.scss";

const ReposContainer = ({ repos, userData }) => {
  return (
    <div className="repos-container">
      <div className="repos-container-content">
        <div className="repos-container-content-title">
          <h1>Repositories from #{userData.login}</h1>
        </div>
        <ul className="repos-container-content-list">
          {repos?.map((repo) => (
            <li>
              <p className="repo-name">{repo?.name}</p>
              <p className="repo-description">
                {repo?.description ?? "no description"}
              </p>
              <a className="repo-link" href={repo.html_url}>
                Access repository
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ReposContainer;
