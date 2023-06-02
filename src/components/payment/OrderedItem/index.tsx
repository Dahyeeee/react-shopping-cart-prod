import React from 'react';
import * as S from './OrderedItem.styles';
import ProductItemInOrder from '../ProductItemInOrder';
import { Order, OrderDetail } from 'types/api/orders';

const OrderedItem = ({ order }: { order: Order | OrderDetail | undefined }) => {
  if (!order) return null;

  const { id, orderedItems } = order;

  return (
    <S.Wrapper>
      <S.OrderHeader>
        <S.OrderNumber>주문번호 : {id}</S.OrderNumber>
        <S.LinkToOrderDetail to={`/order_detail/${id}`}>
          상세보기 ▶
        </S.LinkToOrderDetail>
      </S.OrderHeader>
      <S.Divider />
      <S.Container>
        {orderedItems.map((orderedItem, ind) => (
          <>
            <ProductItemInOrder orderedItem={{ ...orderedItem }} />
            {ind !== orderedItems.length - 1 ? <S.Divider /> : null}
          </>
        ))}
      </S.Container>
    </S.Wrapper>
  );
};

export default OrderedItem;
