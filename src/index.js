export function getHealth(person) {
    if (!(person.name && typeof person.name === 'string')) {
        throw ('Wrong name')
    }

    if (typeof person.health !== 'number') {
        throw ('Health should be type of number')
    }

    if (person.health > 50) {
        return 'healthy';
    }

    if (person.health < 15) {
        return 'critical';
    }

    return 'wounded';
}

getHealth({ name: 'test', health: 20 })