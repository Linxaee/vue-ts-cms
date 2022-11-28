class LocalCache {
    setCache(key: string, value: any) {
        window.localStorage.setItem(key, JSON.stringify(value));
    }
    // 获取缓存
    getCache(key: string) {
        // obj => string => obj
        const value = window.localStorage.getItem(key);
        // 解析再返回
        if (value) {
            return JSON.parse(value);
        }
    }
    // 删除缓存
    deleteCache(key: string) {
        window.localStorage.removeItem(key);
    }
    // 清除缓存
    clearCache() {
        window.localStorage.clear();
    }
}

// 拿出new的对象暴露，外界直接调用
export default new LocalCache();
