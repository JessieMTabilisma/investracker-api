export const createMessageTable = `
DROP TABLE IF EXISTS STOCKS;
CREATE TABLE IF NOT EXISTS STOCKS (
  transaction_id varchar(255),
  transaction_date date NOt NULL,
  code varchar(255) NOT NULL,
  unit_price FLOAT(4) NOT NULL,
  no_of_shares integer NOT NULL,
  amount FLOAT(4) NOT NULL,
  PRIMARY KEY (code)
  )
  `;

export const insertMessages = `
INSERT INTO STOCKS(transaction_id, transaction_date, code, unit_price, no_of_shares, amount)
VALUES ('1', '02-11-1999', 'ACEN', 10.000, 2000, 6000)
`;

export const dropMessagesTable = 'DROP TABLE messages';
