import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex h-16 w-full mx-auto bg-primary-color">
      <div className="container flex flex-row items-center">
        <div className="flex flex-1 justify-start">
          <h1 className="text-white font-bold text-3xl">Meu Menu</h1>
        </div>
        <div className="flex flex-1 justify-end">
          <nav>
            <ul className="flex flex-row space-x-5">
              <li>
                <NavLink to="/" className="text-white font-normal">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className="text-white font-normal">
                  Restaurantes
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className="text-white font-normal">
                  Contato
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
