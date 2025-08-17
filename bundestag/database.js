import pool from '../main.js';

// Funktion zum Registrieren eines MdB
async function registerMdB(name) {
    try {
        const query = 'INSERT INTO mdb (name) VALUES ($1) RETURNING *';
        const values = [name];
        const res = await pool.query(query, values);
        console.log('MdB registriert:', res.rows[0]);
        return res.rows[0];
    } catch (err) {
        console.error('Fehler beim Registrieren des MdB:', err);
        throw err;
    }
}