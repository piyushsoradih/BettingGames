require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://samar0486:samar0486@allbackends.xm3hwao.mongodb.net/BetControl1", {
   useNewUrlParser: true,
   useUnifiedTopology: true,
 });
const NumberSchema = new mongoose.Schema({ value: Number });
const NumberModel = mongoose.model('Number', NumberSchema);

app.post('/send', async (req, res) => {
   const { number } = req.body;
   if (!number) return res.status(400).json({ error: 'Number is required' });

   try {
      const updatedNumber = await NumberModel.findOneAndUpdate({}, { value: number }, { upsert: true, new: true });
      res.json({ message: 'Number saved!', number: updatedNumber.value });
   } catch (error) {
      res.status(500).json({ error: 'Database error' });
   }
});
app.get('/fetch', async (req, res) => {
   try {
      const latestNumber = await NumberModel.findOne();
      res.json({ value: latestNumber ? latestNumber.value : null });
   } catch (error) {
      res.status(500).json({ error: 'Database error' });
   }
});

const PORT = process.env.PORT || 5300;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
