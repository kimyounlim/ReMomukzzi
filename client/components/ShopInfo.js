import styled from "styled-components";
import { useEffect } from "react";

const ShopDetailInfo = styled.div`
  margin: 30px 0px 30px 30px;
  min-height: 200px;
  width: 60%;

  & > table > tbody {
    display: table-row-group;
    vertical-align: middle;
    border-color: inherit;
  }

  & > table > tbody > tr {
    display: table-row;
    vertical-align: inherit;
    border-color: inherit;
  }

  & > table > tbody > tr > th {
    width: 110px;
    font-size: 1rem;
    color: rgba(79, 79, 79, 0.6);
    line-height: 1.7;
    text-align: left;
    vertical-align: top;
    padding-right: 10px;
    padding-bottom: 5px;
  }

  & > table > tbody > tr > td {
    font-size: 1rem;
    color: #4f4f4f;
    line-height: 1.7;
    text-align: left;
    vertical-align: middle;
    padding-bottom: 5px;
  }
`;

const ShopInfo = ({ shopInfo }) => {
  return (
    <ShopDetailInfo>
      <table>
        <tbody>
          <tr>
            <th>이름</th>
            <td>{shopInfo[0].shopinfo.shopinfo.place_name}</td>
          </tr>
          <tr>
            <th>주소</th>
            <td>{shopInfo[0].shopinfo.shopinfo.road_address_name}</td>
          </tr>
          <tr>
            <th>음식 종류</th>
            <td>{shopInfo[0].shopinfo.shopinfo.category_name}</td>
          </tr>
          <tr>
            <th>전화번호</th>
            <td>{shopInfo[0].shopinfo.shopinfo.phone}</td>
          </tr>
          <tr>
            <th>메뉴</th>
            <td>
              <ul style={{ margin: 0, padding: 0 }}>
                {shopInfo[0].menulist.menulist.map((item, idx) => {
                  return (
                    <li key={idx}>
                      {item[0]} : {item[1]}원
                    </li>
                  );
                })}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </ShopDetailInfo>
  );
};

export default ShopInfo;
