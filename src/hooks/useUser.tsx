import { useEffect, useRef, useState } from "react";
import type { User } from "../interfaces/reqres.response";
import { loadUserActions } from "../actions/load-users.actions";

export const useUser = () => {
  const [users, setUsers] = useState<User[]>([]);
  const currentPageRef = useRef(1);

  useEffect(() => {
    loadUserActions(1).then(setUsers);
  }, []);

  const nextPage = async () => {
    currentPageRef.current++;
    const users = await loadUserActions(currentPageRef.current);

    if (users.length > 0) {
      setUsers(users);
    } else {
      currentPageRef.current--;
    }
  };

  const prevPage = async () => {
    if (currentPageRef.current < 1) return;

    currentPageRef.current--;
    const users = await loadUserActions(currentPageRef.current);
    setUsers(users);
  };

  return {
    users,
    nextPage,
    prevPage,
  };
};
