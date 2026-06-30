const axios = require('axios');

const checkVersion = async () => {
  try {
    const response = await axios.get('https://gitlab.com/api/v4/projects/40724347/releases');
    const latestRelease = response.data[0]; // Assumes releases are sorted by date
    const packageJson = require('./package.json');
    
    if (packageJson.version > latestRelease.tag_name) {
      console.log('New release needed.');
      process.exit(0);
    } else {
      console.log('No new release needed.');
      process.exit(1);
    }
  } catch (error) {
    console.error('Error checking release:', error);
    process.exit(1);
  }
};

checkVersion();