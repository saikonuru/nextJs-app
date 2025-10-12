import Link from "next/link";
import UsersTable from "./UsersTable";

interface Props {
  params: { id: number };
  searchParams: { sortOrder: string };
}

const UserPage = ({ params: { id }, searchParams: { sortOrder } }: Props) => {
  return (
    <div>
      User Details Page :{id} <br />
      {/* Sort by :{" "}
      {sortOrder
        ? sortOrder.charAt(0).toUpperCase() + sortOrder.slice(1)
        : "Name"} */}
      <br />
      <Link href="/users/new" className="btn">
        New User
      </Link>
      <UsersTable sortBy={sortOrder} />
    </div>
  );
};

export default UserPage;
