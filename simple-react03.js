const Page = () => {
  const changeThemAll = () => {
    document.querySelectorAll(".liman").forEach((boelie) => {
      boelie.style.backgroundColor = "pink";
      boelie.style.color = "rebeccapurple";
      boelie.style.border = "4px solid rebeccapurple";
    });
  };
  return (
    <nav>
      <div className="top">
        <h1>Swannie's Clothing Company</h1>
        <ul>
          <div className="li__bunch">
            <li className="liman" onClick={changeThemAll}>
              Pricing
            </li>
            <li className="liman" onClick={changeThemAll}>
              About
            </li>
            <li className="liman" onClick={changeThemAll}>
              Contact
            </li>
          </div>
        </ul>
      </div>
    </nav>
  );
};

ReactDOM.render(<Page />, document.getElementById("root"));
