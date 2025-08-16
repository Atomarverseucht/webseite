document.getElementById('bt-btn').addEventListener('click', function() {
    window.location.href = '/bundestag/'; // Passe den Pfad ggf. an
});
document.getElementById('mdbReg-btn').addEventListener('click', function() {
    window.location.href = '/bundestag/login/mdbReg'; // Passe den Pfad ggf. an
});
document.getElementById('commit-btn').addEventListener('click', commit());

function commit() {
    const firstName = document.getElementById('firstName').value;
    // Hier kannst du den Code hinzufügen, um die Daten an den Server zu senden
    await pool.query('INSERT INTO mdb (name_) VALUES '+ $(name-txt.txt) +')');
    await pool.end();
    console.log(`Committed`);
    window.location.href = '/bundestag/';
);

await pool.end();
    console.log(`Commit to server: ${name-txt.txt}`);
    
});