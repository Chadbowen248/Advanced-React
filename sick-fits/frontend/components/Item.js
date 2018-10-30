import React from 'react';
import Title from './styles/Title';
import ItemStyles from './styles/ItemStyles';
import PriceTag from './styles/PriceTag';

const Item = (props) => {
    return (
        <ItemStyles>
          <Title>
              {props.title}
          </Title>
        </ItemStyles>
    );
};

export default Item;

