module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv:['<rootDir>/src/config/importJestDOM.ts'],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/src/config/fileMock.ts",
    "\\.(css|less)$": "<rootDir>/src/config/styleMock.ts"
  }
};