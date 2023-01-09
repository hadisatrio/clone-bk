import Product from "../../components/Product";
import { menu } from "../../data/menu";

export default function PageMenuById({ product }) {
  return (
    <div>
      <Product product={product} />
    </div>
  );
}

export async function getStaticPaths() {
  const products = menu;

  const paths = products?.map((product) => ({
    params: { id: String(product.id) },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const product = menu.find((item) => item.id === Number(context.params.id));

  return {
    props: {
      product: product,
    },
  };
}
