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
  id: number;
}

const UsersTable = async ({ sortBy, id }: Props) => {
  const res = await fetch("https://dummyjson.com/users", {
    cache: "no-store",
    // next: { revalidate: 10 },
  });
  const data = await res.json();
  let users: User[] = data.users.map((user: User) => ({
    ...user,
    name: `${user.firstName} ${user.lastName}`,
  }));

  const sortedUsers = sort(users).asc(sortBy as keyof User);

  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>
            <Link href={`/users/${id}?sortOrder=name`}>Name</Link>
          </th>
          <th>
            <Link href={`/users/${id}?sortOrder=email`}>Email</Link>
          </th>
          <th>
            <Link href={`/users/${id}?sortOrder=firstName`}>First Name</Link>
          </th>
          <th>
            <Link href={`/users/${id}?sortOrder=lastName`}>Last Name</Link>
          </th>
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
