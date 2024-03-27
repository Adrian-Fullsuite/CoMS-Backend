const getAllAccounts = async (req, res) => {
  res.send("get all account");
};
const createAccount = async (req, res) => {
  res.send("create account");
};
const updateAccount = async (req, res) => {
  res.send("update account");
};
const deleteAccount = async (req, res) => {
  res.send("delete account");
};

export { getAllAccounts, createAccount, updateAccount, deleteAccount };
