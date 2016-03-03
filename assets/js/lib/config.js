const cache = new Map();


cache.set('isProduction', process.env.NODE_ENV==='production');

export default {
    get(key){
        if (cache.has(key)) {
            return cache.get(key);
        } else  {
            throw new Error('Missing config value for key:' + key);
        }
    },
    set(key){
        if (!cache.has(key)){
            cache.set(key, value);
        } else {
            throw new Error('Attempting to redefine config value for key: ' + key);
        }
    }
}
