const HeaderNoSearch = ({
  title,
  subTitle,
}) => {
  return (
    <div className="flex flex-wrap align-items-center justify-content-between gap-2">
      <div>
        <span className="text-lg text-900 font-bold">{title ? title : ""}</span>
        {subTitle ? <p className="text-sm font-light">{subTitle}</p> : null}
      </div>
      <div />
    </div>
  );
};

export default HeaderNoSearch;
