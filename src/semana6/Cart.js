import styled from "styled-components";
import Button from "./Button";

const SLi = styled.li`
  margin-bottom: 12px;
  padding: 10px;
  border-radius: 8px;
  background: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SDivInfo = styled.div`
  p {
    font-size: 16px;
    margin-bottom: 4px;
    color: #555;
  }

  span {
    font-size: 18px;
    font-weight: bold;
    color: #333;
  }
`;

const SDivUnits = styled.div`
  width: 100px;
  display: flex;
  justify-content: space-between;
  align-items: left;

  button {
    padding: 2px 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    background-color: #f2f2f2;
    font-size: 16px;
    font-weight: bold;
    color: #555;
    transition: background-color 0.2s ease;

    &:hover:not(:disabled) {
      background-color: #e0e0e0;
    }

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  }

  p {
    font-size: 16px;
    font-weight: bold;
    color: #333;
  }
`;

/**
 * @param {Object} product
 */
function CartProduct({ product, onChange, isLoading }) {
  return (
    <SLi>
      <SDivInfo>
        <p>{product.name}</p>
        <span>R${product.price.toFixed(2)}</span>
      </SDivInfo>
      <SDivUnits>
        <button disabled={isLoading} onClick={() => onChange(product, -1)}>
          -
        </button>
        <p>{product.units}</p>
        <button disabled={isLoading} onClick={() => onChange(product, +1)}>
          +
        </button>
      </SDivUnits>
    </SLi>
  );
}

const SSection = styled.section`
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr auto; 
  gap: 20px;
  background-color: #f2f2f2;
  border-right: 1px solid #eee;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.05);
`;

const SUl = styled.ul`
  list-style-type: none;
  overflow-y: auto;
  padding-right: 10px; 
`;

const SEmptyCart = styled.p`
    text-align: center;
    color: #777;
    font-style: italic;
    margin-top: 50px;
`;


/**
 * @param {Object[]} products
 * @param {Function} onClick
 * @param {Boolean} isLoading
 */

function Cart({ products, onChange, onClick, isLoading = false }) {
  const totalPrice = products.reduce((sum, product) => sum + product.price * product.units, 0);

  return (
    <SSection>
      <SUl>
        {products.length > 0 ? (
          products.map((product) => (
            <CartProduct
              key={product.id}
              product={product}
              onChange={onChange}
              isLoading={isLoading}
            />
          ))
        ) : (
          <SEmptyCart>Seu carrinho está vazio.</SEmptyCart>
        )}
      </SUl>
      {products.length > 0 && (
        <p style={{textAlign: 'right', fontSize: '20px', fontWeight: 'bold', marginBottom: '10px'}}>
            Total: R${totalPrice.toFixed(2)}
        </p>
      )}
      <Button onClick={onClick} isLoading={isLoading} disabled={products.length === 0}>
        Finalizar Compra
      </Button>
    </SSection>
  );
}

export default Cart;