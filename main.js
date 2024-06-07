function createHashMap() {
    const hash = (key) => {
        let hashCode = 0;

        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
            hashCode = hashCode % 16;
        }

        return hashCode;
    }

    return {
        hash,
    };
}

const hashMap = createHashMap();