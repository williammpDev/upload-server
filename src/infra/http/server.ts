import {fastify} from 'fastify';
import { fastifyCors} from '@fastify/cors';

const server = fastify();

server.register(fastifyCors, {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
});

server.listen({ port: 3333, host: '0.0.0.0' }).then(() => {
    console.log('HTTP server is running on port 3333');
})