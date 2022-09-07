const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.status(200).json({ message: 'Get notes' })
})
router.post('/', (req, res) => {
    res.status(200).json({ message: 'Create note' })
})
router.put('/:id', (req, res) => {
    res.status(200).json({ message: `Update note ${req.params.id}` })
})
router.delete('/:id', (req, res) => {
    res.status(200).json({ message: `Delete note ${req.params.id}` })
})

module.exports = router