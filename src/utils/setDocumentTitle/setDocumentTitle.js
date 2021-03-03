import defineDocumentTitle from '../defineDocumentTitle/defineDocumentTitle';

const setDocumentTitle = (text, separator = ' - ') => {
  document.title = defineDocumentTitle(text, separator);
};

export default setDocumentTitle;
