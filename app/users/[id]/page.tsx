interface Props {
  params: { id: number };
}

const UserDetailsPage = ({ params: { id } }: Props) => {
  return <div>User Details Page :{id} </div>;
};

export default UserDetailsPage;
