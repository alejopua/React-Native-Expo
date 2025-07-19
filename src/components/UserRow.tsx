import type { User } from "../interfaces/reqres.response";

interface Props {
  user: User;
}

export const UserRow = ({ user }: Props) => {
  return (
    <>
      <tr>
        <td className="p-2 align-middle whitespace-nowrap ">
          <img
            src={user.avatar}
            className="rounded-full w-14"
            alt="User Avatar"
          ></img>
        </td>
        <td className="p-2 align-middle whitespace-nowrap ">
          {user.first_name} {user.last_name}
        </td>
        <td className="p-2 align-middle whitespace-nowrap">{user.email}</td>
      </tr>
    </>
  );
};
