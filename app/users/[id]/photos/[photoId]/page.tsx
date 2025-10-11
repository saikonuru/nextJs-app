interface Props {
  params: { id: number; photoId: number };
}
//params is necessary
const PhotoPage = ({ params: { id, photoId } }: Props) => {
  return (
    <div>
      Photo Page <br />
      User Id : {id} <br />
      Photo Id : {photoId}
    </div>
  );
};

export default PhotoPage;
