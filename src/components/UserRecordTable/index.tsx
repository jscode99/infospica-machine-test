"use client";
import React, { useState } from "react";
// Types
import { IUserRecordForm } from "@/types/userForm";
// Components
import TableData from "./TableData";
// Styles
import "./user-record-table.css";

const UserRecordTable = ({
  users,
  deleteUser,
  updateUser,
}: {
  users: IUserRecordForm[];
  deleteUser: (id: number | undefined) => void;
  updateUser: (user: IUserRecordForm) => void;
}) => {
  const [editableUser, setEditableUser] = useState<null | number>(null);
  const [newUser, setNewUser] = useState<IUserRecordForm | null>(null);

  const handleOnChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    key: string,
  ) => {
    setNewUser((prev: any) => ({ ...prev, [key]: e.target.value }));
  };

  const handleEdit = (user: IUserRecordForm) => {
    if (user?.id) {
      setNewUser(user);
      setEditableUser(user.id);
    }
  };

  const handleSave = (user: IUserRecordForm | null) => {
    if (user) {
      setEditableUser(null);
      updateUser(user);
      setNewUser(null);
    }
  };

  const handleCancel = () => {
    setEditableUser(null);
  };

  return (
    <div className="w-full">
      <table className="table-contianer">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Date of Birth</th>
            <th>Email</th>
            <th>Salary</th>
            <th>Gender</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>
                <TableData
                  id={user.id}
                  propertyName={"name"}
                  newValue={newUser?.name}
                  currentValue={user.name}
                  editableUser={editableUser}
                  handleOnChange={handleOnChange}
                />
              </td>
              <td>
                <TableData
                  id={user.id}
                  propertyName={"dob"}
                  newValue={newUser?.dob}
                  currentValue={user.dob}
                  editableUser={editableUser}
                  handleOnChange={handleOnChange}
                />
              </td>
              <td>
                <TableData
                  id={user.id}
                  propertyName={"email"}
                  newValue={newUser?.email}
                  currentValue={user.email}
                  editableUser={editableUser}
                  handleOnChange={handleOnChange}
                />
              </td>
              <td>
                <TableData
                  id={user.id}
                  propertyName={"salary"}
                  newValue={newUser?.salary}
                  currentValue={user.salary}
                  editableUser={editableUser}
                  handleOnChange={handleOnChange}
                />
              </td>
              <td>
                <TableData
                  id={user.id}
                  propertyName={"gender"}
                  newValue={newUser?.gender}
                  currentValue={user.gender}
                  editableUser={editableUser}
                  handleOnChange={handleOnChange}
                />
              </td>
              <td>
                {editableUser === user.id ? (
                  <div className="btn-group">
                    <button
                      className="action-btn"
                      onClick={() => handleSave(newUser)}
                    >
                      Save
                    </button>
                    <button
                      className="action-btn"
                      onClick={handleCancel}
                      style={{ backgroundColor: "red" }}
                    >
                      Cancel
                    </button>
                  </div>
                ) : (
                  <div className="btn-group">
                    <button
                      className="action-btn"
                      onClick={() => handleEdit(user)}
                    >
                      Edit
                    </button>
                    <button
                      className="action-btn"
                      onClick={() => deleteUser(user.id)}
                      style={{ backgroundColor: "red" }}
                    >
                      Delete
                    </button>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {users.length === 0 ? (
        <div className="no-data-container">No Data Available.</div>
      ) : (
        false
      )}
    </div>
  );
};

export default UserRecordTable;
