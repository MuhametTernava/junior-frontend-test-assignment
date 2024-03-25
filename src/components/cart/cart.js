import React, { useEffect, useState } from "react";
import Image from "../image";
import cartImg from "../../assets/svg/cart.svg";
import { Seperator } from "../../assets/layouts/seperator";
import { Flex, Paragraph } from "../../assets/layouts/layouts";
import { useCart } from "react-use-cart";
import {
  CartContainer,
  CardList,
  ClearButton,
  ProductCartTitle,
  ProductCartPrice,
  CloseButton,
  CartIcon,
  CardItemsCount,
} from "./cartLayouts";

const Cart = () => {
  const [cartClick, setCartClick] = useState(false);
  const { items, emptyCart } = useCart();
  const [cartCount, setCartCount] = useState(items.length);

  useEffect(() => {
    setCartCount(items.length);
  }, [items]);

  function toggleCart() {
    setCartClick(!cartClick);
  }

  function closeCart() {
    setCartClick(false);
  }

  return (
    <CartContainer>
      <CartIcon onClick={toggleCart}>
        <Image
          source={cartImg}
          alt="cart"
          classList="h-100"
          aspectratio="1x1"
        />
        {cartCount > 0 && (
          <CardItemsCount>
            <Paragraph className="text-center lh-1">{cartCount}</Paragraph>
          </CardItemsCount>
        )}
      </CartIcon>
      <CardList className={`${cartClick && "active"}`}>
        <Flex className="justify-content-end mb-2">
          <CloseButton onClick={closeCart} className="p-2">
            X
          </CloseButton>
        </Flex>
        <Flex className="mb-3 flex-column">
          {items.map((item) => {
            const currency = item.currency === "USD" ? "$" : "€";

            return (
              <div key={item.id} className="position-relative">
                <Flex className="mb-2">
                  <Flex key={item.id} className="flex-column w-75">
                    <ProductCartTitle className="font-bold">
                      {item.name}
                    </ProductCartTitle>
                    <ProductCartPrice className="font-grey">
                      {currency}
                      {item.price}
                    </ProductCartPrice>
                  </Flex>
                  {/* <Image
                    classList="w-25"
                    source={item.image.url}
                    alt={item.image.alt}
                  /> */}
                </Flex>
                <Seperator className="mb-2" />
              </div>
            );
          })}
        </Flex>
        <ClearButton onClick={emptyCart}>Clear</ClearButton>
      </CardList>
    </CartContainer>
  );
};

export default Cart;
