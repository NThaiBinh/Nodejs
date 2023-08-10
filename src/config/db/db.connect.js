import { Connection } from 'tedious';

const config = {
    server: 'localhost',
    authentication: {
        type: 'default',
        options: {
            userName: 'sa',
            password: '12345'
        }
    },
    options: {
        database: 'FullstackAZ',
        port: 1433,
        trustServerCertificate: true
    }
};

const connection = new Connection(config);

export { connection };