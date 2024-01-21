import { Link, useParams } from "react-router-dom";

export default function ProductDetailPage() {
  const params = useParams();

  return (
    <>
      <h1>Product Details!</h1>
      <p>{params.id}</p>
      <button>
        <Link to=".." relative="path">
          Back
        </Link>
      </button>
    </>
  );
}
