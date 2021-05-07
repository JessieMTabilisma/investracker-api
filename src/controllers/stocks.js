import Model from '../models/model';

const stockModel = new Model('"stocks"');
export const stocksPage = async (req, res) => {
  try {
    const data = await stockModel.select(
      'transaction_id, transaction_date, name, code, unit_price, no_of_shares, amount'
    );
    res.status(200).json({ stocks: data.rows });
  } catch (err) {
    res.status(200).json({ stocks: err.stack });
  }
};
export const addStock = async (req, res) => {
  const {
    transaction_id,
    transaction_date,
    name,
    code,
    unit_price,
    no_of_shares,
    amount,
  } = req.body;
  const columns = 'transaction_id, transaction_date, name, code, unit_price, no_of_shares, amount';
  const values = `'${transaction_id}', '${transaction_date}', '${name}', '${code}', '${unit_price}', '${no_of_shares}', '${amount}'`;
  try {
    const data = await stockModel.insertWithReturn(columns, values);
    res.status(200).json({ stocks: data.rows });
  } catch (err) {
    res.status(200).json({ stocks: err.stack });
  }
};
