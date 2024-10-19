// const express = require('express');
// const db = require('../db');
// const router = express.Router();


// router.post('/', (req, res) => {
//     const { Name, Email, DateOfBirth, Phone } = req.body;

//     if (!Name || !Email || !DateOfBirth || !Phone) {
//         return res.status(400).json({ error: 'All fields are required' });
//     }

//     const query = `INSERT INTO Registration (Name, Email, DateOfBirth, Phone) VALUES (?, ?, ?, ?)`;

//     db.query(query, [Name, Email, DateOfBirth, Phone], (err, result) => {
//         if (err) {
//             console.error('Database error:', err);
//             return res.status(500).json({ error: 'Database error' });
//         }
//         res.status(201).json({ message: 'Registration added', id: result.insertId });
//     });
// });

// router.get('/', (req, res) => {
//     db.query('SELECT * FROM Registration', (err, rows) => {
//         if (err) {
//             console.error('Database error:', err);
//             return res.status(500).json({ error: 'Database error' });
//         }
//         res.status(200).json(rows);
//     });
// });

// router.put('/:id', (req, res) => {
//     const { id } = req.params;
//     const { Name, Email, DateOfBirth, Phone } = req.body;

//     if (!Name || !Email || !DateOfBirth || !Phone) {
//         return res.status(400).json({ error: 'All fields are required' });
//     }

//     const query = `UPDATE Registration SET Name = ?, Email = ?, DateOfBirth = ?, Phone = ? WHERE ID = ?`;

//     db.query(query, [Name, Email, DateOfBirth, Phone, id], (err, result) => {
//         if (err) {
//             console.error('Database error:', err);
//             return res.status(500).json({ error: 'Database error' });
//         }
//         if (result.affectedRows === 0) {
//             return res.status(404).json({ message: 'No record found to update' });
//         }
//         res.status(200).json({ message: 'Updated record successfully' });
//     });
// });

// router.delete('/:id', (req, res) => {
//     const { id } = req.params;

//     db.query('DELETE FROM Registration WHERE ID = ?', [id], (err, result) => {
//         if (err) {
//             console.error('Database error:', err);
//             return res.status(500).json({ error: 'Database error' });
//         }
//         if (result.affectedRows === 0) {
//             return res.status(404).json({ message: 'No record found to delete' });
//         }
//         res.status(200).json({ message: 'Deleted record successfully' });
//     });
// });

// module.exports = router;
////////////////////////////
const express = require('express');
const db = require('../db');
const router = express.Router();

// Create a new registration
router.post('/', (req, res) => {
    const { Name, Email, DateOfBirth, Phone } = req.body;

    if (!Name || !Email || !DateOfBirth || !Phone) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    const query = `INSERT INTO Registration (Name, Email, DateOfBirth, Phone) VALUES (?, ?, ?, ?)`;

    db.query(query, [Name, Email, DateOfBirth, Phone], (err, result) => {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ error: 'Database error' });
        }
        res.status(201).json({ message: 'Registration added', id: result.insertId });
    });
});

// Get all registrations
router.get('/', (req, res) => {
    db.query('SELECT * FROM Registration', (err, rows) => {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ error: 'Database error' });
        }
        res.status(200).json(rows);
    });
});

// Update a registration by ID
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { Name, Email, DateOfBirth, Phone } = req.body;

    if (!Name || !Email || !DateOfBirth || !Phone) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    const query = `UPDATE Registration SET Name = ?, Email = ?, DateOfBirth = ?, Phone = ? WHERE ID = ?`;

    db.query(query, [Name, Email, DateOfBirth, Phone, id], (err, result) => {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ error: 'Database error' });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'No record found to update' });
        }
        res.status(200).json({ message: 'Updated record successfully' });
    });
});

// Delete a registration by ID
router.delete('/:id', (req, res) => {
    const { id } = req.params;

    db.query('DELETE FROM Registration WHERE ID = ?', [id], (err, result) => {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ error: 'Database error' });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'No record found to delete' });
        }
        res.status(200).json({ message: 'Deleted record successfully' });
    });
});

module.exports = router;
