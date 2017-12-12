export default function getBaseUrl() {
    const inDevelopment = window.location.hostname == 'localhost';
    console.log(`inDevelopment = ${inDevelopment}`);
    return inDevelopment ? 'http://localhost:3001/' : '/';
}
