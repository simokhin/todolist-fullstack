const Header = () => {
  return (
    <div className="w-6xl h-15 m-auto flex justify-between items-center">
      <h1 className="text-3xl uppercase font-bold text-primary">Todo</h1>
      <ul className="flex gap-5 text-md font-base text-primary">
        <li>
          <a href="#">О проекте</a>
        </li>
        <li>
          <a href="#">Вход</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
