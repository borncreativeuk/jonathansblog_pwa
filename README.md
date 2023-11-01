this is a capacitor skeleton for building quick apps:

it has:
react
nextjs
react-iframe
capacitor - android, ios

how to set up:

1) clone the repo
2) change the name of your project in the package.json
3) change the .env (add your url)
4) change the values in capacitor.config.ts [appName, appId]
5) npm run build (this will export your app)
6) npx cap sync (this will sync into ios and android projects)
7) open ios or android folder in xcode or android-studio
