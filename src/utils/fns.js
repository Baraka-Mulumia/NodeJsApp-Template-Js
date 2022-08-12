//execute function every x seconds with nested setTimeout
export const executeService = async (service, interval) => {
    let timerId = setTimeout(async function refresh() {
        await service();
        timerId = setTimeout(refresh, interval);
    }, 0);
};
