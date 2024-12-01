import bundleAnalyzer from '@next/bundle-analyzer';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// Bundle Analyzerの設定
const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

export default withBundleAnalyzer({
  // 静的ページ生成のタイムアウト設定
  staticPageGenerationTimeout: 300,

  // 画像設定
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'www.notion.so' },
      { protocol: 'https', hostname: 'notion.so' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'abs.twimg.com' },
      { protocol: 'https', hostname: 'pbs.twimg.com' },
      { protocol: 'https', hostname: 's3.us-west-2.amazonaws.com' },
    ],
    formats: ['image/avif', 'image/webp'],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // パッケージのトランスパイル設定
  transpilePackages: ['react-tweet'],

  // Webpackの設定
  webpack: (config, _context) => {
    // `react` と `react-dom` をローカルリンクされたバージョンで解決するためのワークアラウンド
    const dirname = path.dirname(fileURLToPath(import.meta.url));
    config.resolve.alias.react = path.resolve(dirname, 'node_modules/react');
    config.resolve.alias['react-dom'] = path.resolve(dirname, 'node_modules/react-dom');

    // `react-dom/server.edge` を外部モジュールとして設定
    config.externals = config.externals || [];
    config.externals.push({
      'react-dom/server.edge': 'commonjs react-dom/server.edge',
    });

    return config;
  },

  // esbuildのオーバーライド設定
  experimental: {
    esbuildOverride(config, { isServer }) {
      if (!isServer) {
        // `react-dom/server.edge` を外部モジュールとして設定
        config.external = config.external || [];
        config.external.push('react-dom/server.edge');
      }
      return config;
    },
  },
});
