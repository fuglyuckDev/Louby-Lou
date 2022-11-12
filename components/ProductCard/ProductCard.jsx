import React, { useState, useEffect } from "react";
import styles from "./ProductCard.module.scss";
import { useBasket } from "../Basket/BasketManager";

const ProductCard = ({ image, title, desc, price, keySet, merch, sizing }) => {
  const [count, setCount] = useState(0);

  const { contents, setContents } = useBasket();

  const [toggle, setToggle] = useState(false);

  const [countPrice, setCountPrice] = useState(0);

  useEffect(() => {
    if (contents?.length > 0) {
      window.sessionStorage.setItem("Cart", JSON.stringify(contents));
    }
  }, [toggle]);

  useEffect(() => {
    setToggle(false);
    setCount(0);
  }, []);

  const addToBasket = () => {
    if (count > 0) {
      setContents([
        ...contents,
        {
          productName: title,
          total: countPrice,
          ammount: count,
          id: Math.floor(Math.random() * 10000),
        },
      ]);
      setToggle((prevToggle) => !prevToggle);
    } else {
      null;
    }
  };

  useEffect(() => {
    let x = count * price;
    setCountPrice(x);
  }, [addToBasket]);

  return (
    <div className={styles.productContainer} key={keySet}>
      <div className={styles.productDetails}>
        <img className={styles.productImage} src={image} />
        <div className={styles.productInfo}>
          <p>£{price}</p> <h1>{title}</h1> <p>{desc}</p>
        </div>
        <div className={styles.productControls}>
          <div className={styles.productAmount}>
            <button
              onClick={() => {
                count === 0 ? null : setCount(count - 1);
              }}
            >
              -
            </button>
            <p>{count}</p>
            <button
              onClick={() => {
                setCount(count + 1);
              }}
            >
              +
            </button>
          </div>
          {merch === true ? (
            <>
              <select id="merch">
                {sizing.map((item, idx) => (
                  <option key={idx} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </>
          ) : null}
          <div>
            <button className={styles.addToCart} onClick={() => addToBasket()}>
              add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

// ,
//         {
//             "id":3,
//             "attributes":
//             {
//                 "productName":"Merch test item 1",
//                 "productDescription":"test description for merch",
//                 "productPrice":20,
//                 "productImageURL": "/images/shop/roger_rabbit_doll.jpg",
//                 "merch": true,
//                 "sizing": ["XS", "S", "M", "L", "XL"]
//             }
//         }
