"use client";
import React, { useState } from "react";
// Components
import UserForm from "@/components/UserForm";
import UserRecordTable from "@/components/UserRecordTable";
// Types
import { IUserRecordForm } from "@/types/userForm";

export default function Home() {
  const [users, setUsers] = useState<IUserRecordForm[]>([]);

  const addUser = (user: any) => {
    setUsers([...users, { ...user, id: Math.round(Math.random() * 100) }]);
  };

  const updateUser = (updatedUser: any) => {
    setUsers(
      users.map((user) => (user.id === updatedUser.id ? updatedUser : user)),
    );
  };

  const deleteUser = (id: any) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p className="font-bold text-3xl mb-5">User Record Form</p>
      <UserForm addUser={addUser} key={Math.random()}/>
      <UserRecordTable
        users={users}
        deleteUser={deleteUser}
        updateUser={updateUser}
      />
    </main>
  );
}
