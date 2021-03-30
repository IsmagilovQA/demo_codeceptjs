const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: 'exampleTests/*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      url: 'https://s2.demo.opensourcecms.com/orangehrm/symfony/web/index.php/auth/login',
      show: false,
      browser: 'chromium',
      waitForNavigation: "networkidle",
      waitForTimeout: 10000,
      windowSize: '1000x700'
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'demo_codeceptjs',
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  }
}