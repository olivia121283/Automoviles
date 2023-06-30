import autosModel from '../model/auto_model.mjs'
import makeModel from '../model/make_model.mjs'
//import aws  from 
//import multer
//import multerS3



const showAutos = (req, res) => {
 const consulta = autosModel.find({})

  consulta.exec()
  .then((autos) => {
   // res.json(autos)
    res.render('index', {autos});
  })
  .catch((error) => {
    res.json({'message':error})
  })
};
const showAuto = (req, res) => {
  const consulta = autosModel.find( )
  .populate('make')
 
   consulta.exec()
   .then((autos) => {
     res.json(autos);
   })
   .catch((error) => {
     res.json({'message':error})
   })
 };
/* aws.config.update({
  accesKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION
 })

const s3 = new aws.S3();

const upload = multer({
  Storage: multerS3({
    s3: s3
    bucket: process.AWS_BUCKET_NAME,
    acl: 'public-read',
    contentType: multerS3.AUTO_CONTENT_TYPE,
    metadata: function (req, res, cb){
      cb(null, {filename: file.originalname})
    },
    key: function (req, res, cb){
      cb(null, file.originalname)
    }
  })


})*/

const addAuto = async (req, res) => {
  const {make, model, version, price, imagen} = req.body 
  const makeObj = await makeModel.findById({_id: make});

  if(!makeObj) return res.status(400).json({ error: 'Make no encontrado'})
  
  const auto = new autosModel ({make: makeObj, model, version, price, imagen})

  auto.save()
  .then((resultado) => {
    res.json({'message': resultado});
  })
  .catch((error) => {
    res.json({'message':error})
  })
};

const deleteAuto = (req, res)=> {
  const { id } = req.params

  autosModel.findByIdAndRemove(id)
  .then((resultado) => {
    res.json({'message': resultado});
  })
  .catch((error) => {
    res.json({'message':error})
  })
};

const deleteAutoV2 = async (req, res) =>{
  const { id } = req.params

  const result = await autosModel.deleteOne({ _id: id })
  if(result.deletedCount == 1) {
    res.status(200).json({message: 'objetc deleted'})
  }
  if (result.deletedCount == 0) {
    res.status(400).json({message: 'item not found'})
  }
};

const updateCar = (req, res) => {
  const { id } = req.params;
  const { make, model, imagen, price } = req.body
  let query = autosModel.findByIdAndUpdate(id, {make, model, imagen, price})
  query.exec()
  .then((resultado) => {
    res.json({'message': resultado});
  })
  .catch((error) => {
    res.json({'message':error})
  })
}

export {showAutos, showAuto, addAuto,updateCar, deleteAuto, deleteAutoV2}
