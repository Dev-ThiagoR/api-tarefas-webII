const express = require('express');
const tarefasRoutes = require('./routes/tarefasRoutes');
const morgan = require('morgan');

const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use('/api', tarefasRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
