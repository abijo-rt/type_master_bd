


const generatedRoomIds = new Set(); // This is temparoy solution, we should use a database to store room ids

const generateRandomRoomId = (length = 5) => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let roomId = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        roomId += characters[randomIndex];
    }

    return roomId;
};

const createUniqueRoomId = () => {
    let roomId;

    do {
        roomId = generateRandomRoomId();
    } while (generatedRoomIds.has(roomId)); // Check for uniqueness

    generatedRoomIds.add(roomId); // Store the unique room ID
    return roomId;
};

module.exports = createUniqueRoomId ;