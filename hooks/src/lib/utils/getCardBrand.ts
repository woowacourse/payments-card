const VISA_START_NUMBER = 4;
const MASTERCARD_START_NUMBER = {
  min: 51,
  max: 55,
};
const DINERS_START_NUMBER = 36;
const AMEX_START_NUMBERS = [34, 37];
const UNIONPAY_START_RANGES = [
  { min: 622126, max: 622925 },
  { min: 624, max: 626 },
  { min: 6282, max: 6288 },
];

const isVisa = (cardNumbers: string[]) => {
  return cardNumbers[0].startsWith(`${VISA_START_NUMBER}`);
};

const isMasterCard = (cardNumbers: string[]) => {
  const firstTwoDigits = Number(cardNumbers[0].slice(0, 2));

  return (
    firstTwoDigits >= MASTERCARD_START_NUMBER.min && firstTwoDigits <= MASTERCARD_START_NUMBER.max
  );
};

const isDiners = (cardNumbers: string[]) => {
  return cardNumbers[0].startsWith(`${DINERS_START_NUMBER}`);
};

const isAMEX = (cardNumbers: string[]) => {
  return AMEX_START_NUMBERS.some((startNumber) => cardNumbers[0].startsWith(`${startNumber}`));
};

const isUnionPay = (cardNumbers: string[]) => {
  return cardNumbers.some((cardNumber) => {
    const number = Number(cardNumber.slice(0, 6));
    return UNIONPAY_START_RANGES.some((range) => number >= range.min && number <= range.max);
  });
};

const getCardBrand = (cardNumbers: string[]) => {
  if (isVisa(cardNumbers)) {
    return "visa";
  }

  if (isMasterCard(cardNumbers)) {
    return "mastercard";
  }

  if (isDiners(cardNumbers)) {
    return "diners";
  }

  if (isAMEX(cardNumbers)) {
    return "amex";
  }

  if (isUnionPay(cardNumbers)) {
    return "unionpay";
  }

  return "";
};

export default getCardBrand;
