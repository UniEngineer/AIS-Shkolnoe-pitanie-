const express = require('express');
const app = express();
const PORT = 3000;

// Раздаём файлы из папки public
app.use(express.static('../public'));

// Простой API
app.get('/api/menu', (req, res) => {
    res.json([
        { id: 1, name: "Завтрак", price: 100 },
        { id: 2, name: "Обед", price: 150 }
    ]);
});

app.listen(PORT, () => {
    console.log(`Сервер запущен: http://localhost:${PORT}`);
});
