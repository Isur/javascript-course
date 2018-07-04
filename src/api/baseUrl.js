export default function getBaseUrl(){
    const inDevelopment = window.location.hostname === 'localhots';
    return inDevelopment ? 'http://localhost:3001' : '/' ;
}
