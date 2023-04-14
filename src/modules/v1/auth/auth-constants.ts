const authConstants = {
  jwt: {
    secret: 'BE_PROJECT',
    expirationTime: {
      accessToken: '1d',
      refreshToken: '14d',
    },
  },
  redis: {
    expirationTime: {
      jwt: {
        accessToken: 86400, // 1d
        refreshToken: 604800, // 7d
      },
    },
  },
};

export default authConstants;
