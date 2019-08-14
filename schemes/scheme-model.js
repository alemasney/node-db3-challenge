const db = require('../data/db-config.js');

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove
}

function find() {
    return db('schemes');
}

function findById(id) {
    return db('schemes')
        .where({id});
}

function findSteps(id) {
    return db('steps as s')
        .where('s.scheme_id', id);
}

async function add(scheme) {
    const [id] = await db('schemes').insert(scheme)

    return findById(id);
}

function update(changes, id) {
    
    console.log(changes);
    return db('schemes')
        .where({id})
        .update('schemes.scheme_name', changes);
}

function remove(id) {
    return db('schemes')
        .where({id})
        .del();
}