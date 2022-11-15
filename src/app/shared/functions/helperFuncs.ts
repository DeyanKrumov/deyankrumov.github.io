export function isLocalLink(url: string) {
    const tmp = document.createElement('a'); //By using this approach it would automatically resolve the hostname for relative paths and fragments
    tmp.href = url;
    return tmp.host === window.location.host;
}
