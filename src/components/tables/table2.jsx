import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { cellFormater } from "../../functions/cellFormater";

const Table2 = ({
  data,
  columns,
  loading,
  header,
  rowHeaderNone,
  footer,
  size,
  className,
  noTdBtns,
  selectionMode,
  ...props
}) => {
  return (
    <div className="mb-2">
      <DataTable
        {...props}
        value={data}
        header={header}
        footer={footer}
        tableStyle={{ minWidth: "100%" }}
        loading={loading}
        size={size ? size : "small"}
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
              align={col.align}
              sortable={col.sort ? true : null}
              body={
                col.formater
                  ? (t) => cellFormater(t[col.field], col.formater)
                  : col.body
              }
              headerStyle={{
                display: rowHeaderNone ? "none" : "",
                fontSize: 14,
              }}
              style={{fontSize: 14}}
            />
          ) : null
        )}
      </DataTable>
    </div>
  );
};

export default Table2;
