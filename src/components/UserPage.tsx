import { useUser } from "../hooks/useUser";
import { UserRow } from "./UserRow";

export const UserPage = () => {
  const { users, prevPage, nextPage } = useUser();
  console.log(users);
  return (
    <div
      data-slot="card"
      className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm"
    >
      <div className="flex flex-col items-center px-6">
        <div className="font-semibold text-xl">User data base</div>
        <div className="text-muted-foreground text-sm">React + TS</div>
      </div>
      <div className="px-6 flex flex-col gap-4">
        <div className="rounded-md border">
          <div className="relative w-full overflow-x-auto">
            <table className="w-full caption-bottom text-sm">
              <thead>
                <tr className="hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors">
                  <th className="text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap ">
                    Avatar
                  </th>
                  <th className="text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap ">
                    Nombre
                  </th>
                  <th className="text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap ">
                    Email
                  </th>
                </tr>
              </thead>
              <tbody className="border-0">
                {users.map((user) => (
                  <UserRow key={user.id} user={user} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex items-center justify-end gap-2">
          <div className="flex gap-2">
            <button
              onClick={prevPage}
              className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium border bg-background hover:bg-gray-100 h-8 rounded-md gap-1.5 px-3"
            >
              Previous
            </button>
            <button
              onClick={nextPage}
              className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium border bg-background hover:bg-gray-100 h-8 rounded-md gap-1.5 px-3"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
