module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'body-max-length': [1, 'always', 600],
    'scope-enum': [2, 'always', ['core', 'elements', 'forms', 'http', 'router', 'lib', 'package']],
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'docs',
        'chore',
        'style',
        'refactor',
        'ci',
        'test',
        'perf',
        'revert',
        'vercel',
        'wip',
      ],
    ],
  },
};
