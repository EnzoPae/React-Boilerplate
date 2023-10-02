import { InputText } from "primereact/inputtext";

const HeaderBasic = ({title, subTitle, search, setSearch, headerContent}) => {
  return (
    <div className="flex flex-wrap align-items-center justify-content-between gap-2">
      <div>
        <span className="text-lg text-900 font-bold">{title ? title : ""}</span>
        {subTitle ? <p className="text-sm font-light">{subTitle}</p> : null}
      </div>
      <div>
        {headerContent}
        <span className="p-input-icon-left">
          <i className="pi pi-search" />
          <InputText
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar"
          />
        </span>
      </div>
    </div>
  );
};

export default HeaderBasic;
