const { cloudinary } = require('./utils/cloudinary');
const requireAuth = require("./Middleware/token");
const adminAuth = require("./Middleware/token_admin")
const express = require("express")
const cors = require("cors")
const authroutes = require("./Routes/authroutes")
const Carroutes = require("./Routes/carroutes")
const bookingroutes = require("./Routes/bookingroutes")
require("./db/dbconnection")
const cookieParser = require('cookie-parser');

const app = express()
const port = 5000
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));
app.use(cors({
  origin: ['http://localhost:3000','https://648a7098d54dfb2919ecd51b--bright-monstera-08a3af.netlify.app'],
  credentials: true
}));

app.use(express.urlencoded({ extended: true }))
app.use(cookieParser());

const session = require("express-session");
app.use(session({
  secret: 'save-me-god',
  resave: false,
  saveUninitialized: true
}));

// app.post('/api/upload', adminAuth, async (req, res) => {
//   try {
//     const fileStr = req.body[0]

//     console.log(fileStr);
//     for (let i = 0; i < fileStr.length; i++) {
//       const uploadResponse = await cloudinary.uploader.upload(fileStr, {
//         // Upload_presets: 'anandhu_image',
//         folder: 'car',
//         tags: req.session.userId,
//         context: `name=${req.query.name}|model=${req.query.model}`
//       });

//       console.log(uploadResponse);
//     }
//     res.json({ msg: 'yaya' });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ err: 'Something went wrong' });
//   }

// });
app.post('/api/upload', adminAuth, async (req, res) => {
  try {
    const fileStr = req.body[0]
    const uploadResponse = await cloudinary.uploader.upload(fileStr, {
      // Upload_presets: 'anandhu_image',
      folder: 'car',
      tags: req.session.userId,
      context: `name=${req.query.name}|model=${req.query.model}`
    });
    console.log(uploadResponse);
    res.json( uploadResponse.public_id);
  }
  catch (err) {
    console.error(err);
    res.status(500).json({ err: 'Something went wrong' });
  }
});

app.get('/api/images', async (req, res) => {
  console.log("req.query.name",req.query.name,req.query.model,req.query.id)
  

  try {
  const { resources } = await cloudinary.search
  .expression(`folder:car AND tags:${req.query.id}`)
  .with_field('context')
  .sort_by('public_id', 'desc')
  .max_results(30)
  .execute();

    console.log("resources", resources);

    const filteredResources = resources.filter((resource) => {
      const { context } = resource;
      console.log("context", context);
      const modelName = context.model;
      const name = context.name;

      return modelName === `${req.query.model}` && name === `${req.query.name}`;
    });



    console.log("filteredResources", filteredResources);

    const publicIds = filteredResources.map((file) => file.public_id);
    console.log("publicIds", publicIds)
    res.status(201).send(publicIds);
  }
  catch (error) {
    console.log("backend", error)
  }

});


app.get('/api/allimages', async (req, res) => {


  console.log("req.query.name", req.query.name, req.query.model)

  try {
    const { resources } = await cloudinary.search
      .expression(`folder:car `)
      .with_field('context')
      .sort_by('public_id', 'desc')
      .max_results(30)
      .execute();

    console.log("resources", resources);

    const filteredResources = resources.filter((resource) => {
      const { context } = resource;
      console.log("context", context);
      const modelName = context.model;
      const name = context.name;

      return modelName === `${req.query.model}` && name === `${req.query.name}`;
    });



    console.log("filteredResources", filteredResources);

    const publicIds = filteredResources.map((file) => file.public_id);
    console.log("publicIds", publicIds)
    res.status(201).send(publicIds);
  }
  catch (error) {
    console.log("backend", error)
  }

});

app.use(authroutes);
app.use(Carroutes);
app.use(bookingroutes);


app.listen(port, () => {
  console.log(`server running at ${port}`)
})

