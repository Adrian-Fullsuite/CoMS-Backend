const getAllRecords = async (req, res) => {
  res.send("get all record");
};
const createRecord = async (req, res) => {
  res.send("create record");
};
const updateRecord = async (req, res) => {
  res.send("update record");
};
const deleteRecord = async (req, res) => {
  res.send("delete record");
};

export { getAllRecords, createRecord, updateRecord, deleteRecord };
