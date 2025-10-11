interface User {
  id: number;
  name: string;
  email: string;
}

const UsersTable = async () => {
  const users: User[] = await fetch(
    "https://jsonplaceholder.typicode.com/users",
    {
      // cache:'no-store'
      next: { revalidate: 10 },
    }
  ).then((u) => u.json());

  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <th>{user.email}</th>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UsersTable;
