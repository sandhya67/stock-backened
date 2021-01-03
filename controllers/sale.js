const db = require('../util/database');
const { v4: uuidv4 } = require('uuid');

const checkSaleId = (req, res, next) => {
    const checkAvailability = `
        SELECT * FROM sale
        WHERE id = '${req.params.id}'
    `;
    console.log(req.params.sid);
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

const getAllSale = (req, res, next) => {
    const query = 'SELECT * FROM sale';
    db.query(query).then(dbRes => {
        res.json({
            error: false,
            sale: dbRes.rows
        });
    }).catch(dbErr => {
        next(dbErr);
    });
}


const addSale = (req, res, next) => {
    const query = `
        INSERT INTO sale
        VALUES (
            '${uuidv4()}', 
            '${req.body.name}',
            '${req.body.price}',
            '${req.body.quantity}'
            )`;
            console.log(req.body);
    db.query(query).then(dbRes => {
        res.json({
            error: false,
            message:'Inserted sale'
        });
    }).catch(dbErr => {
        next(dbErr);
    });
}


const deleteSale = (req, res, next) => {
    const query = `
        DELETE FROM sale
        WHERE id='${req.params.id}'
    `;
    db.query(query).then(dbRes => {
        res.json({
            error: false,
            message: 'sale Deleted Successfully'
        });
    }).catch(dbErr => {
        next(dbErr);
    });
}


module.exports = {
    checkSaleId,
    getAllSale,
    addSale,
    deleteSale
    
};