import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.jonathansblog.app',
  appName: 'Jonathans Blog App',
  webDir: 'out',
  server: {
    androidScheme: 'https'
  }
};

export default config;
