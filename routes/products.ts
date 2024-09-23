import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({ success: true, message: 'Show all products' });
});

router.get('/:id', (req, res) => {
    res.status(200).json({ success: true, message: `Show product ${req.params.id}` });
});

router.post('/', (req, res) => {
    res.status(200).json({ success: true, message: 'Create new product' });
});

router.put('/:id', (req, res) => {
    res.status(200).json({ success: true, message: `Update product ${req.params.id}` });
});

router.delete('/:id', (req, res) => {
    res.status(200).json({ success: true, message: `Delete product ${req.params.id}` });
});

export default router;