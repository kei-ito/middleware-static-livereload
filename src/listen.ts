import * as http from 'http';

export const listenPort = (
    server: http.Server,
    port: number,
) => new Promise((resolve, reject) => {
    server
    .once('error', (error: NodeJS.ErrnoException) => {
        if (error.code === 'EADDRINUSE' || error.code === 'EADDRNOTAVAIL') {
            resolve();
        } else {
            reject(error);
        }
    })
    .once('listening', () => {
        server.removeListener('error', reject);
        resolve();
    })
    .listen(port);
});

export const listen = async (
    server: http.Server,
    port: number,
) => {
    let result = port;
    while (1) {
        await listenPort(server, result);
        if (server.listening) {
            break;
        } else {
            result++;
        }
    }
    return result;
};