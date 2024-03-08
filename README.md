## Installation

You can install this package via npm:

```
npm install generate-user-wallet
```

## Usage

```
const { fetchUserData } = require('generate-user-wallet');

(async () => {
  try {
    const userData = await fetchUserData();
    console.log(userData);
  } catch (error) {
    console.error('Error:', error.message);
  }
})();
```
