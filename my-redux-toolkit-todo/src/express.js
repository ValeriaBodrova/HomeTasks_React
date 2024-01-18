const express = require('express');
const cors = require('cors');
const app = express();

// Використовуємо cors() для додавання необхідних заголовків
app.use(cors());


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
