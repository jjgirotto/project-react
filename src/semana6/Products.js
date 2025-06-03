import styled from "styled-components";

const SDiv = styled.div`
  height: 280px;
  padding: 15px;
  border-radius: 12px;
  background: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column; 
  justify-content: space-between; 
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }

  img {
    width: 100%;
    height: 140px;
    border-radius: 8px;
    object-fit: cover;
    margin-bottom: 10px; 
`;

const SDivInfo = styled.div`
  padding: 0 5px;
  flex-grow: 1;

  p {
    font-size: 16px;
    margin-bottom: 5px;
    color: #555;
  }

  span {
    font-size: 22px;
    font-weight: bold;
    color: #333;
  }
`;

const SAddButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  margin-top: 15px; 

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

/**
 * @param {Object} product
 * @param {Function} onClick
 */
function Product({ product, onClick }) {
  return (
    <SDiv>
      <img src={product.image} alt={product.name} />
      <SDivInfo>
        <p>{product.name}</p>
        <span>R${product.price.toFixed(2)}</span>
      </SDivInfo>
      <SAddButton onClick={() => onClick(product)}>
        Adicionar ao Carrinho
      </SAddButton>
    </SDiv>
  );
}

const SSection = styled.section`
  overflow-y: auto;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  grid-auto-rows: minmax(280px, auto);
  gap: 20px; 
  background-color: #f8f8f8;
`;

const SLoading = styled.p`
  text-align: center;
  font-size: 18px;
  color: #666;
  margin-top: 50px;
`;

const SNoProducts = styled.p`
  text-align: center;
  font-size: 18px;
  color: #666;
  margin-top: 50px;
`;

/**
 * @param {Object[]} products
 * @param {Function} onClick
 */
function Products({ products, onClick, isLoading = false }) {
  return (
    <SSection>
      {isLoading ? (
        <SLoading>Carregando produtos...</SLoading>
      ) : products.length > 0 ? (
        products.map((product) => (
          <Product key={product.id} product={product} onClick={onClick} />
        ))
      ) : (
        <SNoProducts>Nenhum produto encontrado!</SNoProducts>
      )}
    </SSection>
  );
}

export default Products;