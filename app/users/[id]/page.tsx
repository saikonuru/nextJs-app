import { notFound } from "next/navigation";

interface Props {
  params: { id: number };
}

const UserDetailsPage = ({ params: { id } }: Props) => {
  if (id > 10) return notFound();

  return <div>User Details Page</div>;
};

export default UserDetailsPage;
