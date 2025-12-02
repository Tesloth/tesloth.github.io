var roleHarvester = require('role.harvester');

module.exports.loop = function () {
    if (Game.rooms.sim.energyAvailable >= roleHarvester.bodyArray.default.reduce((acc, item) => acc + BODYPART_COST[item], 0)) {
        if (Object.keys(Game.creeps).length >= 50)  return;
        Game.spawns['Spawn1'].spawnCreep( roleHarvester.bodyArray.default, `harvester${Object.keys(Game.creeps).length + 1}` );
    }

    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(name.match(/[H|h]arvester/)) {
            roleHarvester.run(creep);
        }
    }
}

var roleHarvester = {
    
    // turn this into getBodyArray function for easier default value
    bodyArray: {
        lv1: [WORK, CARRY, MOVE],
        lv2: [WORK, WORK, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE],
        get default() { return this.lv1; }
    },

    /** @param {Creep} creep **/
    run: function(creep) {
	    if(creep.store.getFreeCapacity() > 0) {
            var sources = creep.room.find(FIND_SOURCES);
            if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[0]);
            }
        }
        else {
            if(creep.transfer(Game.spawns['Spawn1'], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(Game.spawns['Spawn1']);
            }
        }
	}
};

module.exports = roleHarvester;