export const createStocksTable = `
DROP TABLE IF EXISTS stocks;
CREATE TABLE IF NOT EXISTS stocks (
  transaction_id varchar(255),
  transaction_date date NOT NULL,
  name varchar(255) NOT NULL,
  code varchar(255) NOT NULL,
  unit_price FLOAT(4) NOT NULL,
  no_of_shares integer NOT NULL,
  amount FLOAT(4) NOT NULL,
  PRIMARY KEY (transaction_id)
  )
  `;

export const insertStocks = `
INSERT INTO STOCKS(transaction_id, transaction_date, name,  code, unit_price, no_of_shares, amount)
VALUES ('1', '02-11-1999', 'AC Energy', 'ACEN', 10.000, 2000, 6000)
`;

export const dropStocksTable = 'DROP TABLE stocks';
