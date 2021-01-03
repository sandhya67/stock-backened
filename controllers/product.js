const db = require('../util/database');
const { v4: uuidv4 } = require('uuid');

const checkProductId = (req, res, next) => {
    const checkAvailability = `
        SELECT * FROM product
        WHERE pid = '${req.params.pid}'
    `;
    console.log(req.params.pid);
    db.query(checkAvailability).then(dbRes => {
        if (dbRes.rows.length > 0) {
            next();
        } else {
            res.json({
                error: true,
                message: 'No user found with the ID'
            });
        }
    });
}

const getAllProduct = (req, res, next) => {
    const query = 'SELECT * FROM product';
    db.query(query).then(dbRes => {
        res.json({
            error: false,
            product: dbRes.rows
        });
    }).catch(dbErr => {
        next(dbErr);
    });
}


const addProduct = (req, res, next) => {
    const query = `
        INSERT INTO product
        VALUES (
            '${uuidv4()}', 
            '${req.body.pname}',
            '${req.body.price}',
            '${req.body.quantity}'
            )`;
            console.log(req.body);
    db.query(query).then(dbRes => {
        res.json({
            error: false,
            message:'Inserted product'
        });
    }).catch(dbErr => {
        next(dbErr);
    });
}

const getProduct = (req, res, next) => {
    const query=`SELECT * FROM product WHERE  pid = '${req.params.pid}' `;
    db.query(query).then(dbRes => {
        res.json({
            error: false,
            product: dbRes.rows
                });
    }).catch(dbErr => {
        next(dbErr);
    });
}


const updateProduct= (req, res, next) => {
    const updateQuery = `
        UPDATE product SET  
        pname = '${req.body.pname}', 
        price = '${req.body.price}',
        quantity = '${req.body.quantity}'
         WHERE pid = '${req.params.pid}'
    `;
        console.log(req.body.pname, req.body.price, req.body.quantity, req.params.pid);
        db.query(updateQuery).then(dbRes => {
        res.json({
            error: false,
            message: 'product details updated successfully'
        });
    }).catch(dbErr => {
        next(dbErr);
    });
}


const deleteProduct = (req, res, next) => {
    const query = `
        DELETE FROM product
        WHERE pid='${req.params.pid}'
    `;
    db.query(query).then(dbRes => {
        res.json({
            error: false,
            message: 'product Deleted Successfully'
        });
    }).catch(dbErr => {
        next(dbErr);
    });
}


module.exports = {
    checkProductId,
    getAllProduct,
    addProduct,
    getProduct,
    updateProduct,
    deleteProduct
    
};