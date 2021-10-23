import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.json(['Emojis are stupid']);
});

export default router;
