import http from 'http';
import fs from 'fs';
import path from 'path';
import pkg from 'pg';
const { Pool } = pkg;

// Load environment variables from .env file
const hostname = process.env.HOST;
const port = process.env.PORT;

const server = http.createServer((req, res) => {

    let filePath = '.' + (req.url === '/' ? '/index.html' : req.url);
    // Wenn der Pfad ein Verzeichnis ist, hänge /index.html an
    if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
        if (!filePath.endsWith('/')) filePath += '/';
        filePath += 'index.html';
    }

    const extname = String(path.extname(filePath)).toLowerCase();
    const mimeTypes = {
        '.html': 'text/html',
        '.js': 'text/javascript',
        '.css': 'text/css',
        '.json': 'application/json',
        '.png': 'image/png',
        '.jpg': 'image/jpg',
        '.gif': 'image/gif',
        '.svg': 'image/svg+xml',
        '.wav': 'audio/wav',
        '.mp4': 'video/mp4',
        '.woff': 'application/font-woff',
        '.ttf': 'application/font-ttf',
        '.eot': 'application/vnd.ms-fontobject',
        '.otf': 'application/font-otf',
        '.wasm': 'application/wasm'
    };

    const contentType = mimeTypes[extname] || 'application/octet-stream';

    fs.readFile(filePath, (error, content) => {
        if (error) {
            if (error.code === 'ENOENT') {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end('<h1>404 Not Found</h1>', 'utf-8');
            } else {
                res.writeHead(500);
                res.end('Sorry, there was an error: ' + error.code + ' ..\n');
            }
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
});

// Am besten aus einer Umgebungsvariable lesen
const pool = new Pool({
  connectionString: 'postgresql://btd_user:djfRtFfGzdCUOjK2MABJP3ldzboK6NdC@dpg-d2da81idbo4c73b89a4g-a.frankfurt-postgres.render.com/btd', // Render Connection String
  ssl: { rejectUnauthorized: false } // nötig für Render
});

export default pool;

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});