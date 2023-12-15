"use client";
import React, { useState } from "react";
// Types
import { IUserRecordForm } from "@/types/userForm";
// Styles
import "./user-record-table.css";

const tableData = (
  editableUser: number | null,
  id: number | undefined,
  newValue: string,
  currentValue: string,
  setNewUser: React.Dispatch<any>,
  key: string,
  user: any,
) => {
  return (
    <>
      {editableUser === id ? (
        <input
          type="text"
          value={newValue || currentValue}
          onChange={(e) => setNewUser({ ...user, [key]: e.target.value })}
        />
      ) : (
        currentValue
      )}
    </>
  );
};

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
  const [newUser, setNewUser] = useState<any>({});

  const handleEdit = (user: IUserRecordForm) => {
    if (user?.id) {
      setNewUser(user);
      setEditableUser(user.id);
    }
  };

  const handleSave = (user: IUserRecordForm) => {
    setEditableUser(null);
    updateUser(user);
    setNewUser({});
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
                {tableData(
                  editableUser,
                  user.id,
                  newUser.name,
                  user.name,
                  setNewUser,
                  "name",
                  newUser,
                )}
              </td>
              <td>
                {tableData(
                  editableUser,
                  user.id,
                  newUser.dob,
                  user.dob,
                  setNewUser,
                  "dob",
                  newUser,
                )}
              </td>
              <td>
                {tableData(
                  editableUser,
                  user.id,
                  newUser.email,
                  user.email,
                  setNewUser,
                  "email",
                  newUser,
                )}
              </td>
              <td>
                {editableUser === user.id ? (
                  <input
                    type="number"
                    value={newUser.salary || user.salary}
                    onChange={(e) =>
                      setNewUser({ ...newUser, salary: e.target.value })
                    }
                  />
                ) : (
                  user.salary
                )}
              </td>
              <td>
                {tableData(
                  editableUser,
                  user.id,
                  newUser.gender,
                  user.gender,
                  setNewUser,
                  "gender",
                  newUser,
                )}
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
