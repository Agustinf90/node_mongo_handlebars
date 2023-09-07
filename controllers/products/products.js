const {Router} = require('express')
const Product = require('../../models/products')
const router = Router()


router.get('/', async (req, res) => {
  try {
    const products = await Product.find({});
   console.log(products)
   console.log(users)
    res.render('products', { products }); 
  } catch (error) {
    res.json({ error })
  }
})

router.post('/', async (req, res) => {
    try{
        const {name, lastname, email, age, password} = req.body
        const userCreated = {
            name,
            lastname,
            email,
            age,
            password
        }

        const newUserCreated = await Users.create(userCreated) 

        res.redirect('/login');

    }catch(error)
    {
        res.json({message: error})
    }
})

module.exports = router;