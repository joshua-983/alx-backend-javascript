export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
    const key = JSON.stringify(endpoint);
    let count = weakMap.get(key) || 0;
    count++;
    if (count > 5) {
        throw new Error('Endpoint load is high');
    }
    weakMap.set(key, count);
}

