import { useEffect, useState } from "react";
import type { User } from "../interfaces/reqres.response";
import { loadUserActions } from "../actions/load-users.actions";

export const useUser = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    loadUserActions(1).then(setUsers);
  }, []);

  return {
    users,
  };
};
