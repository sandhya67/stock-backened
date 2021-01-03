const db = require('../util/database');
const { v4: uuidv4 } = require('uuid');

const checkInvestorId = (req, res, next) => {
    const checkAvailability = `
        SELECT * FROM investor
        WHERE id = '${req.params.id}'
    `;
    console.log(req.params.id);
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

const getAllInvestor = (req, res, next) => {
    const query = 'SELECT * FROM investor';
    db.query(query).then(dbRes => {
        res.json({
            error: false,
            investor: dbRes.rows
        });
    }).catch(dbErr => {
        next(dbErr);
    });
}

const addInvestor = (req, res, next) => {
    const query = `
        INSERT INTO investor
        VALUES (
            '${uuidv4()}', 
            '${req.body.iname}'
            )`;
            console.log(req.body);
    db.query(query).then(dbRes => {
        res.json({
            error: false,
            message:'Inserted Investor'
        });
    }).catch(dbErr => {
        next(dbErr);
    });
}

const getInvestor = (req, res, next) => {
    const query=`SELECT * FROM Investor WHERE  id = '${req.params.id}' `;
    db.query(query).then(dbRes => {
        res.json({
            error: false,
            investor: dbRes.rows
                });
    }).catch(dbErr => {
        next(dbErr);
    });
}


const updateInvestor= (req, res, next) => {
    const updateQuery = `
        UPDATE investor SET  
        pname = '${req.body.iname}'
         WHERE id = '${req.params.id}'
    `;
        console.log(req.body.iname, req.params.id);
        db.query(updateQuery).then(dbRes => {
        res.json({
            error: false,
            message: 'Investor details updated successfully'
        });
    }).catch(dbErr => {
        next(dbErr);
    });
}


const deleteInvestor = (req, res, next) => {
    const query = `
        DELETE FROM investor
        WHERE id='${req.params.id}'
    `;
    db.query(query).then(dbRes => {
        res.json({
            error: false,
            message: 'Investor Deleted Successfully'
        });
    }).catch(dbErr => {
        next(dbErr);
    });
}


module.exports = {
    checkInvestorId,
    getAllInvestor,
    addInvestor,
    getInvestor,
    updateInvestor,
    deleteInvestor
    
};