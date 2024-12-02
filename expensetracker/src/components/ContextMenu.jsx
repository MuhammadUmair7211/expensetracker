import React from "react";

export default function ContextMenu({
  menuPosition,
  setMenuPosition,
  setExpenses,
  rowId,
}) {
  if (!menuPosition.top) return;
  return (
    <div className="context-menu border" style={menuPosition}>
      <div
        className="px-4 rounded"
        onClick={() => {
          console.log("Editing");
          setMenuPosition({});
        }}
      >
        Edit
      </div>
      <div
        className="px-4 rounded"
        onClick={() => {
          setExpenses((prevState) =>
            prevState.filter((expense) => expense.id !== rowId)
          );
          setMenuPosition({});
        }}
      >
        Delete
      </div>
    </div>
  );
}
