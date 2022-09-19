const products = require('../data/products')


module.exports = {
    detail : (req, res) => {
        res.render('detalleMenu')

        /* let product = products.find(product => product.id === +req.params.id)
      
        return res.render('detalleMenu', {
            product
        }) */
    }
}