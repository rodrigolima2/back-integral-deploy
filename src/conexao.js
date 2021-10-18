const knex = require('knex')({
    client: 'pg',
    connection: {
        host: 'ec2-52-70-107-254.compute-1.amazonaws.com',
        user: 'dknwlkqirnwaue',
        password: 'c5e2844e7ac0421c88611e3a99f1759384aa852fa95ac8807939632a562f68f7',
        database: 'd923p3a7pphbod',
        port: 5432,
        ssl: {
            rejectUnauthorized: false
        }
    }
});

module.exports = knex;