export const filterRoutes = (routes) => {
  /*
    Las rutas del usuario llegan seccionadas segun su categoria.
    Con esta funcion quitamos las secciones y guardamos en un nuevo 
    arreglo solo los objetos que representan rutas.
  */
  const filterRoutes = (obj) => {
    const result = [];
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        result.push(...obj[key]);
      }
    }
    return result;
  };
  const filteredRoutes = filterRoutes(routes);
  return filteredRoutes;
};

