let activeRoom = new Map();

const getRoom = (roomid) => {
    // console.log(activeRoom)
    return activeRoom.get(roomid)
} 

const log = (roomid) => {
    console.log(activeRoom)
} 

const setRoom = (roomid, room) => {
    return activeRoom.set(roomid, room)
}

module.exports = {
    activeRoom,
    getRoom,
    log,
    setRoom
};