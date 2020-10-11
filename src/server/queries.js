if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}

const Pool = require("pg").Pool;
const pool = new Pool({
    host: process.env.HOST,
    user: process.env.USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT,
});

//get all players
const getPlayers = (request, response) => {
    pool.query(
        "SELECT * FROM players ORDER BY player_id ASC",
        (error, results) => {
            if (error) {
                throw error;
            }
            response.status(200).json(results.rows);
        }
    );
};

//get player by ID
const getPlayerById = (request, response) => {
    const id = parseInt(request.params.id);

    pool.query("SELECT * FROM users WHERE id = $1", [id], (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).json(results.rows);
    });
};

//create player
const createPlayer = (request, response) => {
    const { playerName, charName, playerEmail } = request.body;

    pool.query(
        "INSERT INTO players (player_name, character_name, email) VALUES ($1, $2, $3)",
        [playerName, charName, playerEmail],
        (error, results) => {
            if (error) {
                throw error;
            }
            response.status(201).send(`User added with ID: ${result.insertId}`);
        }
    );
};
//create player
const createCharacter = (request, response) => {
    const { playerName, charName, playerEmail } = request.body;

    pool.query(
        "INSERT INTO players (player_name, character_name, email) VALUES ($1, $2, $3)",
        [playerName, charName, playerEmail],
        (error, results) => {
            if (error) {
                throw error;
            }
            response.status(201).send(`User added with ID: ${result.insertId}`);
        }
    );
};

//update player
const updatePlayer = (request, response) => {
    const id = parseInt(request.params.id);
    const { name, email } = request.body;

    pool.query(
        "UPDATE players SET name = $1, email = $2 WHERE id = $3",
        [name, email, id],
        (error, results) => {
            if (error) {
                throw error;
            }
            response.status(200).send(`User modified with ID: ${id}`);
        }
    );
};

//delete players
const deletePlayer = (request, response) => {
    const id = parseInt(request.params.id);

    pool.query("DELETE FROM users WHERE id = $1", [id], (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).send(`User deleted with ID: ${id}`);
    });
};

module.exports = {
    getPlayers,
    getPlayerById,
    createPlayer,
    createCharacter,
    updatePlayer,
    deletePlayer,
};
