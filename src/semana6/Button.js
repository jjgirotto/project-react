import styled from "styled-components";

const SButton = styled.button`
  cursor: pointer;
  padding: 18px 8px;
  width: 100%;
  color: #ffffff;
  background-color: #007bff; /* Consistent button color */
  font-size: 18px;
  border: 0;
  border-radius: 8px;
  transition: background-color 0.2s ease, opacity 0.2s ease;

  &:hover:not(:disabled) {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
    opacity: 0.8;
  }
`;

/**
*@param {HTMLCollection} children
*@param {Function} onClick
*@param {Boolean} isLoading
*/

function Button({ children, onClick, isLoading = false, disabled = false }) {
    return (
        <SButton onClick={onClick} disabled={isLoading || disabled}>
            {isLoading ? "Carregando..." : children} 
        </SButton>
    );
}

export default Button;