const hash = (key) => {
    let hashCode = 0;

    const primeNumber = 31;
    // const maxInt = 2**31 - 1; // A large prime number (or another suitable large number)
    for (let i = 0; i < key.length; i++) {
        hashCode = primeNumber * hashCode + key.charCodeAt(i);
        // hashCode = hashCode & maxInt; // Limit the size of hashCode
        hashCode = hashCode % 16;
    }
    


    return hashCode;
}

// console.log(hash('test'));
console.log(hash('test12iejoifiagnjdnjndbguhgihsdasdsaaaaaaaaaaaaaaadasdasda893495743770235742328gbfsoifhds;ifidsafiohdnsi;f;iadbgiabdibsd;fnasoidbfiaubdgab;dfb4'));