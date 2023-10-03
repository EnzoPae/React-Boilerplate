import { Link, useLocation } from "react-router-dom";

const ItemsAuth = ({ routes, onClick }) => {
  const location = useLocation();
  const isActive = (path) => {
    return location.pathname === path;
  };

  return routes.map((category, i) => (
    <div key={i} className="pr-1">
      <p className="py-1 pr-2 pl-3 text-primary font-bold select-none capitalize">
        {category.cat}
      </p>
      <ul>
        {category.routes.map((r) => {
          if (r.d) {
            return (
              <Link
                to={r.path ? r.path : "/"}
                key={`${r.path}`}
                style={{ textDecoration: "none" }}
                onClick={onClick}
              >
                <li
                  className={`py-1 pr-1 pl-4 hover:bg-green-50 border-round-right ${
                    isActive(r.path) ? "" : ""
                  }`}
                >
                  <p
                    className={`font-${
                      isActive(r.path) ? "bold" : ""
                    } select-none text-sm text-color`}
                  >
                    {r.desc}
                  </p>
                </li>
              </Link>
            );
          }
        })}
      </ul>
    </div>
  ));
};

export default ItemsAuth;
