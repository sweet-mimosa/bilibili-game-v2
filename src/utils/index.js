export const isPathPartlyExisted = (path) => {
    const arr = ['/search'];
    let paths = path.split('/');
    if (paths[1] && arr.indexOf(`/${paths[1]}`) != -1) return true;
    return false;
}