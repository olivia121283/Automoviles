
const AutosModel = require('../model/auto_model.js')

module.exports.showAutos = (req, res) => {
 const consulta = AutosModel.find({})

  consulta.exec()
  .then((autos) => {
    res.json(autos);
  })
  .catch((error) => {
    res.json({'message':error})
  })
};
module.exports.createAuto = (req, res) => {
  const {make, model, version, price} = req.body
  const auto = new AutosModel({make, model, version, price})

  auto.save()
  .then((resultado) => {
    res.json({'message': resultado});
  })
  .catch((error) => {
    res.json({'message':error})
  })
};