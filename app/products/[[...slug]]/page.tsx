interface Props {
  params: { slug: string[] };
  searchParams: { sortOrder: string };
}

const ProductsPage = ({
  params: { slug },
  searchParams: { sortOrder },
}: Props) => {
  return (
    <div>
      Products Page <br />
      Sort by : {sortOrder} <br />
      {slug.map((item) => (
        <h4 key={item}>{item}</h4>
      ))}
    </div>
  );
};

export default ProductsPage;
