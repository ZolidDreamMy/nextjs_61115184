import SetHead from "../components/head/index";
import Footer from "../components/footer/index";
import Product from "../components/Product/index";

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'CHANEL',
    image:
      'https://images.ulta.com/is/image/Ulta/2269167?op_sharpen=1&resMode=bilin&qlt=85&wid=800&hei=800&fmt=jpg',
    address: 'specialises in haute couture, ready-to-wear, beauty, fragrance, and luxury accessories.',
    price: 5900,
  },
  {
    id: 'm2',
    title: 'OUD',
    image:
      'https://images-na.ssl-images-amazon.com/images/I/51NNMXDUAdL._SL1100_.jpg',
    address: 'Amber Oud Gold Edition by Al Haramain Perfumes is a Oriental Vanilla fragrance for women and men.',
    price: 6800,
  },
  {
    id: 'm3',
    title: 'GUCCI',
    image:
      'https://assets.goldenscent.com/catalog/product/cache/6/image/9df78eab33525d08d6e5fb8d27136e95/g/o/golden_scent_perfume_gucci_perfumes_gucci_intense_oud_for_men_eau_de_parfum.jpg',
    address: ' A distinctive amber floral accord, Gucci Guilty Eau de Toilette pour Femme is defined by the light.',
    price: 3600,
  },
  {
    id: 'm4',
    title: 'DIOR',
    image:
      'https://a.cdnsbn.com/images/products/l/24127580106.jpg',
    address: 'Miss Dior Eau de Parfum celebrates the beauty of a sensual Grasse Rose enveloped in fresh notes and woven with a lively Rosewood.',
    price: 5000,
  },
  {
    id: 'm5',
    title: 'BURBERRY',
    image:
      'https://cdn.shopify.com/s/files/1/0269/7763/2389/products/Burberry-Brit-Sheer-Women-Eau-de-Toilette-Spray-3.4-Unboxed-Best-Price-Fragrance-Parfume-FragranceOutlet.com-Main_1024x1024.jpg?v=1579723670',
    address: 'Lo que caracteriza al Perfume Burberry Brit Eau De Toilette 100 ml Mujer es su inigualable mezcla de aromas.  ',
    price: 4200,
  },
  {
    id: 'm6',
    title: 'MADAME FIN',
    image:
      'https://backend.central.co.th/media/catalog/product/5/9/59c057145197c6a47d4f21b271b16df56ed34a57_mkp0723762dummy.jpg',
    address: 'Madame Fin fragrant quickening charming to attract the opposite sex. And emotional love sensual fragrance.',
    price: 3520,
  },
  {
    id: 'm7',
    title: 'CALVIN KLEIN',
    image:
      'https://images-na.ssl-images-amazon.com/images/I/71P7JQl--jL._SL1500_.jpg',
    address: 'ck one Eau de Toilette can literally be splashed all over the body. It is an intimate fragrance, one that you need to be near to smell.',
    price: 4750,
  },
  {
    id: 'm8',
    title: 'YVES SAINT LAURENT',
    image:
      'https://www.yslbeautyth.com/en/media/catalog/product/cache/7d86ac68bc3a2bf6c73d7a710cc55f48/y/s/ysl-libre-edp-30ml-3614272648401-1_1.jpg',
    address: 'This women fragrance combines sweet notes of red berries and datura flower.',
    price: 5450,
  },
  {
    id: 'm9',
    title: 'JO MALONE',
    image:
      'https://www.jeban.com/uploads/reviews/product/5228/203533_e79a44eb5e.jpg',
    address: 'A playful, fun fragrance, its peppery basil notes combine with elegant orange flower and base tones.',
    price: 3200,
  },
  {
    id: 'm10',
    title: 'VERSACE',
    image:
      'https://images.ulta.com/is/image/Ulta/2243847?op_sharpen=1&resMode=bilin&qlt=85&wid=800&hei=800&fmt=jpg',
    address: 'Inspired by a mixture of Donatella Versace favorite floral fragrances, Bright Crystal is a fresh.',
    price: 6550,
  },
];

export default function Home(props) {
  const { data } = props;
  return (
    <>
      <SetHead />
      <Product data={data} />
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  // fetch data from an API
  return {
    props: {
      data: DUMMY_MEETUPS,
    },
  };
}