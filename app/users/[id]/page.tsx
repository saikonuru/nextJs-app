import UsersTable from "../UsersTable";

interface Props {
  params: { id: number };
  searchParams: { sortOrder: string };
}

const UserDetailsPage = ({
  params: { id },
  searchParams: { sortOrder },
}: Props) => {
  return (
    <div>
      User Details Page :{id} <br />
      Sort by : {sortOrder}
      <UsersTable sortBy={sortOrder} id={id} />
    </div>
  );
};

export default UserDetailsPage;
