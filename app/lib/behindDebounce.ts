
export const useDebouncedCallback = function (func: (...params: any[]) => void, delay: number) {
    let timer: NodeJS.Timeout
    return (...params: any[]) => {
        clearTimeout(timer)
        timer = setTimeout(() => {
            func(...params)
        }, delay)
    }
}