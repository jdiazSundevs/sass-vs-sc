import "./style.scss";
export const AuthorBox = ({ isPrimary }) => {
  const background = `${isPrimary ? "bg-primary" : "bg-secondary"}`;
  return (
    <div className={`wrapper wrapper-border ${background}`}>
      <img src="https://picsum.photos/id/237/200/200" alt="" />
      <h3 className="author-name">Author name</h3>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, et.
      </p>
      <a href="#socialURL" className="author-socialUrl">
        Social URL
      </a>
    </div>
  );
};
