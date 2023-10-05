import { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { cellFormater } from "../../functions/cellFormater";
//Templates
import HeaderBasic from "./templates/headerBasic";
import HeaderNoSearch from "./templates/headerNoSearch";
import HeaderPlus from "./templates/headerPlus";

const Table = ({
  data,
  columns,
  loading,
  title,
  subTitle,
  size,
  headerType,
  headerContent,
  plusClick,
  className,
  noTdBtns,
  selectionMode,
  ...props
}) => {
  //FILTER
  const [search, setSearch] = useState("");
  const filteredData = data.filter((d) => {
    const lowerCasedValue = search.toLowerCase();
    return Object.keys(d).some((key) =>
      d[key]?.toString()?.toLowerCase()?.includes(lowerCasedValue)
    );
  });
  //HEADER
  const HEADER_TYPE = {
    basic: (
      <HeaderBasic
        title={title}
        subTitle={subTitle}
        search={search}
        setSearch={setSearch}
        headerContent={headerContent}
      />
    ),
    noSearch: <HeaderNoSearch title={title} subTitle={subTitle} />,
    plus: (
      <HeaderPlus
        title={title}
        subTitle={subTitle}
        onClick={plusClick}
        search={search}
        setSearch={setSearch}
        headerContent={headerContent}
      />
    ),
  };
  const header = HEADER_TYPE[headerType] ? HEADER_TYPE[headerType] : null;
  return (
    <div className="mb-2">
      <DataTable
        {...props}
        value={filteredData}
        header={header}
        tableStyle={{ minWidth: "100%" }}
        loading={loading}
        size={size ? size : "normal"}
        selectionMode={selectionMode ? selectionMode : "single"}
        className={`${className} ${noTdBtns ? "no-buttons" : "buttons"}`}
        removableSort
        rowHover
      >
        {columns.map((col, i) =>
          !col.hide ? (
            <Column
              key={i}
              field={col.field}
              header={col.header}
              body={
                col.formater
                  ? (t) => cellFormater(t[col.field], col.formater)
                  : col.body
              }
              sortable={col.sort ? true : null}
            />
          ) : null
        )}
      </DataTable>
    </div>
  );
};

export default Table;
