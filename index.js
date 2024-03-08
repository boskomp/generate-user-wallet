const { getUsersData } = require("fake-user-wallet");

async function fetchUserData() {
  try {
    const userData = await getUsersData();
    return userData;
  } catch (error) {
    throw new Error("Error fetching user data: " + error.message);
  }
}

module.exports = {
  fetchUserData,
};
