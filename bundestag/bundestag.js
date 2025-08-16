import pool from "../main";
import { query } from "../main";

document.getElementById('bt-btn').addEventListener('click', function() {
    window.location.href = '/bundestag/'; // Passe den Pfad ggf. an
});
document.getElementById('login-btn').addEventListener('click', function() {
    window.location.href = '/bundestag/login'; // Passe den Pfad ggf. an
});