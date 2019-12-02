export const TIME_SECOND = 1000;
export const TIME_MINUTE = 60 * TIME_SECOND;
export const TIME_HOUR = 60 * TIME_MINUTE;
export const TIME_DAY = 24 * TIME_HOUR;

export const CACHE_DEFAULT_TIMEOUT = TIME_HOUR / 2;

const CACHE_NS = "com.zackguard.cachedget";

type GetOptions = {
    timeout?: number,
    json?: boolean,
    headers?: Headers,
}

const store = browser.storage.local;

function makeCacheKey(subkey: string) {
    return `${CACHE_NS}_${subkey}`;
}

export async function cacheAdd(subkey: string, data: any) {
    const cacheEntry = {
        data,
        time: Date.now()
    };
    await store.set({
        [makeCacheKey(subkey)]: cacheEntry
    });
}

export async function cacheGet(subkey: string, timeout: number) {
    const r = await store.get(makeCacheKey(subkey));
    const cacheKey = makeCacheKey(subkey);
    if (cacheKey in r && Date.now() - r[cacheKey].time < timeout)
        return r[cacheKey].data;
    else
        throw new Error("Not found");
}

export default async function get(url: string, options?: GetOptions) {
    try {
        return await cacheGet(url, options?.timeout || CACHE_DEFAULT_TIMEOUT);
    } catch (exp) {
        const body = await fetch(url, {
            ...options?.headers && {
                headers: options.headers
            },
        });

        let data: string | object;
        if (options?.json) data = await body.json();
        else data = await body.text();
        
        await cacheAdd(url, data);
        return data;
    }
}
