"use client";
import styles from "./styles.module.css";
import { Product } from "@/types/product.type";
import {
  StarIcon,
  ShoppingCartIcon,
  HeartIcon
} from "@heroicons/react/24/outline";
import Link from "next/link";

import { useSelector, useDispatch } from "react-redux";
import { ProductState } from "@/types/product.type";
import {
  addCart, 
 
} from "@/features/products/productsSlice";
interface ProductPageProps {
  item: Product;
}

const ProductPage: React.FC<ProductPageProps> = ({ item }) => {
    const dispatch = useDispatch<any>();
  const { userId, carts } = useSelector((state: ProductState) => state.product);
 
  const findCartItem = false;



   const addToCart = () => {
     const id = item?.id;
     const name = item?.title;
     const price = item.price.toFixed(2);
     const images = item.image;
     dispatch(
       addCart({
         id,
         name,
         quantity: 0,
         //@ts-ignore
         price: price,
         images
       })
     );
   };
  return (
    <div key={`${item.id}-item`} className={styles.card} title={item.title}>
      <div className={styles.cardLink}>
        <button className={styles.favButton}>
          <HeartIcon className={styles.heartIcon} />
        </button>
        <Link href={`/product/${item.id}`}>
          <div className={styles.cardHeader}>
            <img className={styles.cardImg} src={item.image} alt="" />
          </div>
        </Link>
        <div className={styles.cardBody}>
          <div>
            <p className={styles.cardTitle} title={item.title}>
              <span className={styles.brand} title="Brand">
                Brand,
              </span>{" "}
              {item.title}
            </p>
          </div>
          <div className={styles.rating}>
            {[...Array(Math.round(item.rating.rate))].map((e, i) => (
              <StarIcon
                key={`star-${i}`}
                className={styles.starIcon}
                aria-hidden="true"
              />
            ))}
            {[...Array(5 - Math.round(item.rating.rate))].map((e, i) => (
              <StarIcon
                key={`empty-star-${i}`}
                className={styles.emptyStarIcon}
                aria-hidden="true"
              />
            ))}
            <p className="text-xs ml-1 font-light mt-0.5">
              ({item.rating.count})
            </p>
          </div>
          <div>
            <div className="my-auto" title={`$${item.price}`}>
              <span className={styles.priceSub}>$</span>
              <span className={styles.priceTop}>{Math.trunc(item.price)}</span>
              {parseInt((item.price % 1).toFixed(2).substring(2)) !== 0 ? (
                <span className={styles.priceSub}>
                  {parseInt((item.price % 1).toFixed(2).substring(2))}
                </span>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className={styles.addToCart}>
            <button
              className={
                !findCartItem ? styles.addToCartButton : styles.removeButton
              }
              onClick={addToCart}>
              <ShoppingCartIcon
                className={styles.shoppingCartIcon}
                aria-hidden="true"
              />
              <div className="flex flex-col self-center">
                <span className={styles.buttonText}>
                  {findCartItem ? "Remove from cart" : "Add to Cart"}
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
