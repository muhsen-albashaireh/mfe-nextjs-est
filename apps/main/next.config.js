//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { composePlugins, withNx } = require('@nx/next');
const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    const location = isServer ? 'ssr' : 'chunks';

    config.plugins.push(
      new NextFederationPlugin({
        name: 'main',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {},
        remotes: {
          landing: `landing@http://localhost:3000/static-pages/_next/static/${location}/remoteEntry.js`,
        },
        extraOptions: {
          enableImageLoaderFix: true,
          enableUrlLoaderFix: true,
        },
      }),
    );

    return config;
  },
  rewrites: async () => {
    return [
      {
        source: '/static-pages/:path*',
        destination: 'http://localhost:3001/static-pages/:path*',
      },
    ];
  },
};

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
];

module.exports = composePlugins(...plugins)(nextConfig);
