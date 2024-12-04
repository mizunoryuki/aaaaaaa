import { Icon } from "@iconify/react";
export const Book = () => {
  return (
    <>
      <div
        style={{
          borderRadius: "12px",
          color: "#FFC80B",
          border: "solid 3px #FFC80B",
          width: "48px",
          height: "48px",
          background: "#FFF6D6",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Icon icon="heroicons:book-open" height="26px" />
      </div>
    </>
  );
};
