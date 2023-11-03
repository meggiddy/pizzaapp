import { useRouter } from "next/navigation";

export const metadata = {
  title: "Product",
  description: "Our Products",
};

const ProductDetail = () => {
  const navigation = useRouter();
  const { id } = navigation.query;
};

export default ProductDetail;

