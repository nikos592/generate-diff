import yaml from 'js-yaml';

const parseFile = (data, format) => {
  switch (format) {
    case '.json':
      return JSON.parse(data);
    case '.yaml':
    case '.yml':
      return yaml.load(data);
    default:
      throw new Error(`incorrect file extension: ${format}!`);
  }
};

export default parseFile;
