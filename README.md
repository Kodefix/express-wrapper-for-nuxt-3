# Express wrapper for Nuxt 3

Express wrapper for Nuxt 3 output with support for CloudLinux Passenger

## Setup

### Local

```bash
#install depedencies
npm install

#run node app
npm run start
```

### CloudLinux Passenger

- setup new Node.js app
- choose Node.js version (recommended >= 16)
- upload `package.json` to your application root directory provided in Passenger
- upload `src` to your application root directory provided in Passenger
- choose `entry.js` as application startup file
- start your app

## TODO

- [x] Support for express.js
- [x] Support for CloudLinux Passenger
- [ ] Test if it works with Phussion Passenger

# Authors

- [Grzegorz Kubiszyn](https://github.com/grygork)
