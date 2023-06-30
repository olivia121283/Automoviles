import makeSchema from '../model/make_model.mjs'

const showMakes = (req, res) => {
  const consulta = makeSchema.find({})
 
   consulta.exec()
   .then((marcas) => {
     //res.json(marcas);
     res.render('showMakes', {marcas});
   })
   .catch((error) => {
     res.json({'message':error})
   })
 };
const addMake = (req, res) => {
  const {make, surcursal, contact, address} = req.body

  const makeObject = new makeSchema({make, surcursal, contact, address})

  makeObject.save()
  .then((resultado) => {
    res.json({'message': resultado});
  })
  .catch((error) => {
    res.json({'message':error})
  })
};


export default {addMake, showMakes};
