import styled from "styled-components";
import Link from "next/link";
import React from "react";

const IntroImage = styled.img`
  width: 200px;
  height: 200px;
  cursor: pointer;
`;

const IntroImageSet = ({ imageInfo }) => {
  const imageInfoCut = imageInfo.slice(0, 9);
  return (
    <>
      {imageInfoCut.map((el) => {
        return (
          <React.Fragment key={el.shopinfo.shop_id}>
            <Link
              href="/shopdetail/[id]"
              as={`/shopdetail/${el.shopinfo.shop_id}`}
            >
              <IntroImage
                key={el.shopinfo.shop_id}
                src={el.shoppic.photodatas[0]}
              />
            </Link>
          </React.Fragment>
        );
      })}
    </>
  );
};

export default IntroImageSet;