module.exports = {
  transform: {
    "^.+\\.tsx?$": "babel-jest", // Transpile TypeScript and JSX
  },
  testEnvironment: "jsdom", // Required for React components testing
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  moduleNameMapper: {
    "\\.(css|less|sass|scss)$": "identity-obj-proxy", // Mock CSS modules
  },
  collectCoverage: true,
  coverageDirectory: "coverage",
};
