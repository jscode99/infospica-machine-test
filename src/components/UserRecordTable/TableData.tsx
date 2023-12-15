// Types
import { ITableDataProps } from "@/types/userForm";

const TableData = ({
  editableUser,
  id,
  newValue,
  currentValue,
  handleOnChange,
  propertyName,
}: ITableDataProps) => {
  return (
    <>
      {editableUser === id ? (
        <input
          type={propertyName !== "salary" ? "text" : "number"}
          value={newValue || currentValue}
          onChange={(e) => handleOnChange(e, propertyName)}
        />
      ) : (
        currentValue
      )}
    </>
  );
};

export default TableData;
