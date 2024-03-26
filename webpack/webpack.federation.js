const { dependencies } = require('../package.json');

const federationConfig = ({ APP1, APP2 }) => {
  return {
    name: 'mainApp',
    filename: 'mainEntry.js',
    exposes: {
      './MainData': './src/Observable.ts'
    },
    remotes: {
      counter: `counter@${APP1}/remoteEntry.js`,
      sharedComponent: `sharedComponent@${APP2}/remoteEntry.js`,
    },
    shared: {
      ...dependencies,
      react: {
        eager: true,
        singleton: true,
        requiredVersion: dependencies['react'],
      },
      'react-dom': {
        eager: true,
        singleton: true,
        requiredVersion: dependencies['react-dom'],
      },
      'rxjs': {
        eager: true,
        singleton: true,
        requiredVersion: dependencies['rxjs'],
      },
    },
  };
};

module.exports = federationConfig;