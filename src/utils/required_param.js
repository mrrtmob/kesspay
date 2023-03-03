const required = (varName) => {
    throw new Error(`${varName} is required. `);
}

module.exports = required