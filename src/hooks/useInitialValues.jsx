const useInitialValues = (arr, entity) => {
    //Filtramos la prop id/key condicionalmente segun el valor de entity
    const filterKey = entity ? arr : arr.filter((item) => item.keyProp !== true);
    //Funcion para formatear un value
    const format = (value, format) => {
      switch (format) {
        case "date":
          return value.slice(0, 10);
        default:
          return value;
      }
    };
    //Funcion que construye el objeto que sera usado como initialValues
    const newObj = filterKey.reduce((acc, curr) => {
      if (entity) {
        acc[curr.name] = entity[curr.u]
          ? format(entity[curr.u], curr.format)
          : curr.n;
      } else {
        acc[curr.name] = curr.n;
      }
      return acc;
    }, {});
  
    const initialValues = newObj;
    return { initialValues };
  };
  
  export default useInitialValues;