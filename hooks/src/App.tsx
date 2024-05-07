import "./App.css";

import {
  useCardBrand,
  useCardCVC,
  useCardExpiryDate,
  useCardHolder,
  useCardNumbers,
  useCardPassword,
} from "@cys4585/card-validation";

import React from "react";

const cardBrands = ["신한카드", "현대카드", "카카오뱅크"];

function App() {
  const {
    cardNumbers,
    validationResult: cardNumbersValidationResult,
    validStates,
    handleUpdateCardNumbers,
  } = useCardNumbers(["", "", "", ""]);
  const {
    brand,
    validationResult: brandValidationResult,
    handleUpdateBrand,
  } = useCardBrand("", cardBrands);
  const {
    expiryDate,
    validationResult: expiryDateValidationResult,
    handleUpdateExpiryDate,
  } = useCardExpiryDate({
    month: "",
    year: "",
  });
  const {
    cardHolder,
    validationResult: cardHolderValidationResult,
    handleUpdateCardHolder,
  } = useCardHolder("");
  const { CVC, validationResult, handleUpdateCVC } = useCardCVC("");
  const {
    password,
    validationResult: passwordValidationResult,
    handleUpdatePassword,
  } = useCardPassword("");

  return (
    <>
      <h1>Hooks Modules</h1>
      <section>
        <h2>useCardNumbers</h2>
        <div className="input-container">
          <input
            type="text"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              handleUpdateCardNumbers(0, event.target.value)
            }
            placeholder="1234"
          />
          <input
            type="text"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              handleUpdateCardNumbers(1, event.target.value)
            }
            placeholder="1234"
          />
          <input
            type="text"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              handleUpdateCardNumbers(2, event.target.value)
            }
            placeholder="1234"
          />
          <input
            type="text"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              handleUpdateCardNumbers(3, event.target.value)
            }
            placeholder="1234"
          />
        </div>
        <div className="output-container">
          <p>cardNumbers: {cardNumbers.join(" ")}</p>
          <p>validStates: {validStates.join(" ")}</p>
          <p>isValid: {cardNumbersValidationResult.isValid.toString()}</p>
          <p>
            errorMessage:{" "}
            {cardNumbersValidationResult.isValid ||
              cardNumbersValidationResult.errorMessage}
          </p>
        </div>
      </section>

      <section>
        <h2>useCardBrand</h2>
        <div className="input-container">
          <select
            onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
              handleUpdateBrand(event.target.value)
            }
          >
            {cardBrands.map((brand) => (
              <option key={brand} value={brand}>
                {brand}
              </option>
            ))}
          </select>
        </div>
        <div className="output-container">
          <p>brand: {brand}</p>
          <p>isValid: {brandValidationResult.isValid.toString()}</p>
          <p>
            errorMessage:{" "}
            {brandValidationResult.isValid ||
              brandValidationResult.errorMessage}
          </p>
        </div>
      </section>

      <section>
        <h2>useExpiryDate</h2>
        <div className="input-container">
          <input
            type="text"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              handleUpdateExpiryDate({
                month: event.target.value,
                year: expiryDate.year,
              })
            }
            placeholder="MM"
          />
          <input
            type="text"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              handleUpdateExpiryDate({
                month: expiryDate.month,
                year: event.target.value,
              })
            }
            placeholder="YY"
          />
        </div>
        <div className="output-container">
          <p>
            ExpiryDate: {expiryDate.month} / {expiryDate.year}
          </p>
          <p>isValid: {expiryDateValidationResult.isValid.toString()}</p>
          <p>
            errorMessage:{" "}
            {expiryDateValidationResult.isValid ||
              expiryDateValidationResult.errorMessage}
          </p>
        </div>
      </section>

      <section>
        <h2>useCardHolder</h2>
        <div className="input-container">
          <input
            type="text"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              handleUpdateCardHolder(event.target.value)
            }
            placeholder="HONG GIL DONG"
          />
        </div>
        <div className="output-container">
          <p>cardHolder: {cardHolder}</p>
          <p>isValid: {cardHolderValidationResult.isValid.toString()}</p>
          <p>
            errorMessage:{" "}
            {cardHolderValidationResult.isValid ||
              cardHolderValidationResult.errorMessage}
          </p>
        </div>
      </section>

      <section>
        <h2>useCVC</h2>
        <div className="input-container">
          <input
            type="text"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              handleUpdateCVC(event.target.value)
            }
            placeholder="123"
          />
        </div>
        <div className="output-container">
          <p>CVC: {CVC}</p>
          <p>isValid: {validationResult.isValid.toString()}</p>
          <p>
            errorMessage:{" "}
            {validationResult.isValid || validationResult.errorMessage}
          </p>
        </div>
      </section>

      <section>
        <h2>useCardPassword</h2>
        <div className="input-container">
          <input
            type="password"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              handleUpdatePassword(event.target.value)
            }
            placeholder="12"
          />
        </div>
        <div className="output-container">
          <p>password: {password}</p>
          <p>isValid: {passwordValidationResult.isValid.toString()}</p>
          <p>
            errorMessage:{" "}
            {passwordValidationResult.isValid ||
              passwordValidationResult.errorMessage}
          </p>
        </div>
      </section>
    </>
  );
}

export default App;
