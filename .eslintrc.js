export default {
  "parser": "@typescript-eslint/parser",
  "root": true,
  "env": {
    "es2020": true,
    "jasmine": true,
    "jest": true,
    "node": true
  },
  "parserOptions": {
    "sourceType": "module",
    "ecmaVersion": 2021,
    "ecmaFeatures": {
      "impliedStrict": true
    },
    "project": "tsconfig.json",
    "tsconfigRootDir": __dirname,
  },
  "settings": {
    "noInlineConfig": true,
    "node": {
      "tryExtensions": [".js", ".json", ".node", ".ts"]
    },
    "import/resolver": {
      "node": {
          "extensions": [".js", ".ts"],
          "moduleDirectory": ["node_modules", "src/"]
      }
    }
  },
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:node/recommended",
    "airbnb-base",
    "prettier"
  ],
  "rules": {
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": ["error"],
    "import/extensions": "off",
    "linebreak-style": "off",
    "node/no-unsupported-features/es-syntax": "off",
    "no-underscore-dangle": "off",
    "import/prefer-default-export": "off",
    "@typescript-eslint/no-explicit-any": "error",
    "tsdoc/syntax": "warn",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["error"],
    "class-methods-use-this": ["off"],
    "node/no-missing-import": ["error", {
      "tryExtensions": [".js", ".json", ".node", ".ts"]
    }]
  },
  "plugins": [
    "@typescript-eslint",
    "eslint-plugin-tsdoc"
  ]
}