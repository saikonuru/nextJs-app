import { sort } from "fast-sort";
import Link from "next/link";

interface User {
  id: number;
  name: string;
  firstName: string;
  lastName: string;
  email: string;
}

interface Props {
  sortBy: string;
}

const columns: { label: string; value: keyof User }[] = [
  { label: "Name", value: "name" },
  { label: "Email", value: "email" },
  { label: "First Name", value: "firstName" },
  { label: "Last Name", value: "lastName" },
];

const validSortKeys = columns.map((column) => column.value);
const defaultSortKey: keyof User = "name";

const UsersTable = async ({ sortBy }: Props) => {
  const res = await fetch("https://dummyjson.com/users", {
    cache: "no-store",
    // next: { revalidate: 10 },
  });
  const data = await res.json();
  let users: User[] = data.users.map((user: User) => ({
    ...user,
    name: `${user.firstName} ${user.lastName}`,
  }));

  const sortKey = validSortKeys.includes(sortBy as keyof User)
    ? (sortBy as keyof User)
    : defaultSortKey;

  const sortedUsers = sort(users).asc(sortKey);

  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.value}>
              <Link href={`/users/?sortOrder=${column.value}`}>
                {column.label}
              </Link>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {sortedUsers.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UsersTable;
