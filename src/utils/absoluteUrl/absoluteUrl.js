import trimStart from '../trimStart/trimStart';

const absoluteUrl = (path) => window.baseurl + '/' + trimStart(path, '/');

export default absoluteUrl;
