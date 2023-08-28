import { Link, useLocation } from "react-router-dom";

const ItemsAuth = ({ routes, onClick }) => {
  const location = useLocation();
  const isActive = (path) => {
    return location.pathname === path;
  };

  let content = [];
  for (var key in routes) {
    content.push(
      <div key={key} className="pr-1">
        <p className="py-2 pr-2 pl-3 text-primary font-bold select-none capitalize">
          {key}
        </p>
        <ul>
          {routes[key].map((r) => {
            if (r.display) {
              return (
                <Link
                  to={r.path ? r.path : "/"}
                  key={r.id}
                  style={{ textDecoration: "none" }}
                  onClick={onClick}
                >
                  <li
                    className={`py-2 pr-1 pl-4 hover:bg-green-100 border-round-right ${
                      isActive(r.path) ? "bg-green-100" : ""
                    }`}
                  >
                    <p
                      className={`font-${
                        isActive(r.path) ? "bold" : "medium"
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
    );
  }

  return content;
};

export default ItemsAuth;
