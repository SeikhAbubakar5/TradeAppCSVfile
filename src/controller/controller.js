const tradeService = require('../service/service');

//CSV file upload and store in DB
const uploadCSV = async (req, res) => {
    try {
        const filePath = req.file.path;
        await tradeService.saveFromCSV(filePath);
        res.status(200).json({message:'CSV file uploaded successfully.'});
    } catch (error) {
        res.status(500).json({error:'CSV file uplaod Error'});
    }
};

//balance calculation
const getBalanceTS = async (req, res) => {
    const { timestamp } = req.body;
    try {
        const balances = await tradeService.getBalanceTS(timestamp);
        res.status(200).json(balances);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching balance' });
    }
};
module.exports ={
    uploadCSV,
    getBalanceTS,
}
