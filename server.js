import Fastify from "fastify";
import {readFileSync} from "node:fs";
import * as path from "node:path";
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const fastify = Fastify({
    logger:true,
    http2: true,
    https: {
        key: readFileSync(path.join(__dirname,  'Key', 'server.key')),
        cert: readFileSync(path.join(__dirname, 'Key', 'server.crt')),
        allowHTTP1: true
    }
})

fastify.register(import("./OperationDatabase/route.js"));

fastify.listen({ port: 3000 }, function (err, address) {
    if (err) {
        fastify.log.error(err)
        process.exit(1)
    }
    console.log(address);
})