import fs from 'fs';
const packageJson = JSON.parse(fs.readFileSync('./package.json', 'utf8'));

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',

  reactCompiler: true,
  // Note: 'output: export' and 'basePath' were removed to support Vercel and API routes.
  images: {
    unoptimized: true,
  },
  webpack: (config, { webpack }) => {
    config.plugins.push(
      new webpack.DefinePlugin({
        __APP_VERSION: JSON.stringify(packageJson.version),
      })
    );
    return config;
  },
};

export default nextConfig;
