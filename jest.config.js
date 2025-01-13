export default {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },
  moduleNameMapper: {
    "\\.(css|scss)$": "identity-obj-proxy",
    "\\.(png|jpg|jpeg|gif|svg)$":
      "<rootDir>/src/components/__mocks__/fileMock.js", // Mock static assets
    "^/assets/(.*)$": "<rootDir>/public/assets/$1", // Update this line to map to public/assets
  },
};
