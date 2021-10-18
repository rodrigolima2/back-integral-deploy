const knex = require('knex')({
    client: 'pg',
    connection: {
        user: 'dknwlkqirnwaue',
        host: 'ec2-52-70-107-254.compute-1.amazonaws.com',
        database: 'd923p3a7pphbod',
        password: 'c5e2844e7ac0421c88611e3a99f1759384aa852fa95ac8807939632a562f68f7',
        port: 5432,
        ssl: {
            rejectUnauthorized: false
        }
    }
});

module.exports = knex;