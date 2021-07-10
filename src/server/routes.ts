import * as express from 'express';
const fs = require('fs');
const cheeses = require('./data/cheeses.json');

// To keep things simple, we are using a JSON file to store purchases
const purchases = require('./data/purchases.json');

const router = express.Router();

router.get('/api/cheeses', (req, res, next) => {

    res.json(cheeses);
});

router.post('/api/buy', (req, res, next) => {
    const currentPurchase = req.body;
    // Setting purchaseId based on number of purchases already existing
    const purchaseId = purchases.length + 1;
    
    const purchaseInfo = {
        id: purchaseId,
        items: currentPurchase.items,
        total: currentPurchase.total
    };

    // Adding current purchase to start of existing purchases
    // This way the most recent purchase is at the beginning
    purchases.unshift(purchaseInfo);

    // Updating database ie. purchases.json
    try {
        fs.writeFileSync('./src/server/data/purchases.json', JSON.stringify(purchases));
        res.status(200).json("Success");
    } catch (error) {
        console.log("could not complete purchase", error);
        res.status(400).json("could not complete purchase");
    }
});

export default router;