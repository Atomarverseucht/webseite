document.getElementById('bt-btn').addEventListener('click', function() {
    window.location.href = '../'; // Passe den Pfad ggf. an
});
// Frontend code: keine Node-Imports im Browser

const btBtn = document.getElementById('bt-btn');
if (btBtn) btBtn.addEventListener('click', () => { window.location.href = '../'; });

const mdbRegBtn = document.getElementById('mdbReg-btn');
if (mdbRegBtn) mdbRegBtn.addEventListener('click', () => { window.location.href = '../login/mdbReg.html'; });

const commitBtn = document.getElementById('commit-btn');
if (commitBtn) commitBtn.addEventListener('click', commit);

async function commit() {
    const nameInput = document.getElementById('name-txt');
    if (!nameInput) {
        console.warn('name input not found');
        return;
    }
    const name = (nameInput.value || '').trim();
    if (!name) {
        alert('Bitte Namen eingeben.');
        return;
    }

    try {
        const resp = await fetch('/api/mdb', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name })
        });
        if (!resp.ok) {
            const err = await resp.json().catch(() => ({ error: 'unknown' }));
            alert('Fehler: ' + (err.error || resp.statusText));
            return;
        }
        console.log('Committed');
        window.location.href = '../'; // Zurück zur Hauptseite
    } catch (err) {
        console.error('Commit failed', err);
        alert('Netzwerkfehler beim Senden.');
    }
}