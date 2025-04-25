import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.birthdaywishes.app',
  appName: 'Birthday Wishes',
  webDir: 'out',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    // Add plugin configurations here
  }
};

export default config;