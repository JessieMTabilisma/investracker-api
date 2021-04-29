export const createMessageTable = `
DROP TABLE IF EXISTS STOCKS;
CREATE TABLE IF NOT EXISTS STOCKS (
  id int NOT NULL,
  code varchar(255) NOT NULL,
  unit_price double(2) NOT NULL,
  no_of_shares integer NOT NULL,
  amount integer NOT NULL,
  PRIMARY KEY (code)
  )
  `;

export const insertMessages = `
INSERT INTO STOCKS(id, code, unit_price, no_of_shares, amount)
VALUES ('1', 'ACEN', 10.000, 2000, 6000)
`;

export const dropMessagesTable = 'DROP TABLE messages';
