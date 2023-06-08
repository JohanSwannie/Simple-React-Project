const Page = () => {
  const changeThemAll1 = () => {
    document.querySelectorAll(".liman").forEach((boelie) => {
      boelie.style.backgroundColor = "pink";
      boelie.style.color = "rebeccapurple";
      boelie.style.border = "1px solid rebeccapurple";
    });
  };
  const changeThemAll2 = () => {
    document.querySelectorAll(".liman").forEach((boelie) => {
      boelie.style.backgroundColor = "rebeccapurple";
      boelie.style.color = "white";
    });
  };
  const changeThemAll3 = () => {
    document.querySelectorAll(".liman").forEach((boelie) => {
      boelie.style.backgroundColor = "darkgreen";
      boelie.style.color = "white";
    });
  };
  return (
    <div>
      <header>
        <nav>
          <div className="top">
            <h1>Swannie's Clothing Company</h1>
            <ul>
              <div className="li__bunch">
                <li className="liman" onClick={changeThemAll1}>
                  Pricing
                </li>
                <li className="liman" onClick={changeThemAll2}>
                  About
                </li>
                <li className="liman" onClick={changeThemAll3}>
                  Contact
                </li>
              </div>
            </ul>
          </div>
        </nav>
      </header>
      <main>
        <p>This is the main element with some text 1</p>
        <p>This is the main element with some text 2</p>
        <p>This is the main element with some text 3</p>
        <p>This is the main element with some text 4</p>
        <p>This is the main element with some text 5</p>
        <p>This is the main element with some text 6</p>
      </main>
      <footer>
        <p>
          <small>
            Swannie's Clothing Company - Copyright &copy;{" "}
            {new Date().getFullYear()}
          </small>
        </p>
      </footer>
    </div>
  );
};

ReactDOM.render(<Page />, document.getElementById("root"));
