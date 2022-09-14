import express from 'express';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { handler } from './.output/server/index.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
app.use(
    '/_nuxt',
    express.static(__dirname + '/.output/public/_nuxt', {
        immutable: true,
        maxAge: '1y',
    })
);
app.use(express.static(__dirname + '/.output/public'));
app.use(handler);
app.listen(9001);
