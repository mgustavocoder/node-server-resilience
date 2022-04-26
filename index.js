import { createServer } from 'http';

const server = createServer((req, res) => {
    try {
        setTimeout(() => {
            throw new Error('Timeout Error');
        }, 1000);

        Promise.reject('Promise Error');

        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello World\n');
    } catch (error) {
        console.log(error);
    }
}).listen(3000);

server.on('listening', () => {
    console.log('Server is listening');
});

process.on('uncaughtException', (error) => {
    console.log(error);
});

process.on('unhandledRejection', (error) => {
    console.log(error);
});