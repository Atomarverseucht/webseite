document.getElementById('bt-btn').addEventListener('click', function() {
    window.location.href = '../'; // Passe den Pfad ggf. an
});
document.getElementById('mdbReg-btn').addEventListener('click', function() {
    window.location.href = '../login/mdbReg.html/'; // Passe den Pfad ggf. an
});
document.getElementById('commit-btn').addEventListener('click', commit);

async function commit() {
    await registerMdB(document.getElementById('name-txt').value);
    window.location.href = '../'; // Zurück zur Hauptseite
}