const Trade = require('../model/model');
const fs = require('fs');
const csv = require('csv-parser');

// Parse CSV file and save trades to DB
const saveFromCSV = async (filePath) => {
    const results = [];

    return new Promise((resolve, reject) => {
        fs.createReadStream(filePath)
            .pipe(csv())
            .on('data', (data) => {
                const [baseCoin, quoteCoin] = data['Market'].split('/');
                results.push({
                    userId: data['User_ID'],
                    utcTime: new Date(data['UTC_Time']),
                    operation: data['Operation'],
                    baseCoin: baseCoin,
                    quoteCoin: quoteCoin,
                    amount: parseFloat(data['Buy/Sell Amount']),
                    price: parseFloat(data['Price'])
                });
            })
            .on('end', async () => {
                try {
                    await Trade.insertMany(results);
                    resolve();
                } catch (error) {
                    reject(error);
                }
            })
            .on('error', (error) => reject(error));
    });
};

// Get balances
const getBalanceTS = async (timestamp) => {
    const date = new Date(timestamp);

    const trades = await Trade.find({ utcTime: { $lte: date } });

    const bal = {};

    trades.forEach((trade) => {
        const { baseCoin, operation, amount } = trade;

        if (!bal[baseCoin]) {
            bal[baseCoin] = 0;
        }

        // Adjust the balance
        if (operation === 'Buy') {
            bal[baseCoin] += amount;
        } else if (operation === 'Sell') {
            bal[baseCoin] -= amount;
        }
    });

    return bal;
};
module.exports={
    saveFromCSV,
    getBalanceTS,
}