const Joi = require('joi');

const validateTarefa = (req, res, next) => {
  const schema = Joi.object({
    titulo: Joi.string().min(3).required(),
    descricao: Joi.string().required(),
    concluida: Joi.boolean().required(),
  });

  const { error } = schema.validate(req.body);

  if (error) {
    return res.status(400).json({ erro: 'Dados inválidos.', detalhes: error.details });
  }

  next();
};

module.exports = validateTarefa;
