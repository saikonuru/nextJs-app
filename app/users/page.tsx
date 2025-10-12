import Link from "next/link";
import UsersTable from "./UsersTable";

interface Props {
  params: { id: number };
  searchParams: { sortOrder: string };
}

const UsersPage = ({ params: { id }, searchParams: { sortOrder } }: Props) => {
  return (
    <div>
      Users Page :{id} <br />
      {/* Sort by :{" "}
      {sortOrder
        ? sortOrder.charAt(0).toUpperCase() + sortOrder.slice(1)
        : "Name"} */}
      <br />
      <Link href="/users/new" className="btn">
        New User
      </Link>
      {/* <Suspense fallback={<p>Loading...</p>}> */}
      <UsersTable sortBy={sortOrder} />
      {/* </Suspense> */}
    </div>
  );
};

export default UsersPage;
