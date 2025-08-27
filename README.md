# CodeFlamme Automation Project

A comprehensive end-to-end automation testing project built with Playwright and TypeScript for testing the CodeFlamme website functionality.

## 🎯 Project Overview

This project automates testing of the CodeFlamme website (https://codeflamme.com/) using Playwright, a modern web automation framework. The automation covers key user interactions including theme switching, navigation, portfolio viewing, and job application form submission.

## 🏗️ Project Structure

```
codeflamme-automation/
├── pages/                    # Page Object Model classes
│   ├── BasePage.ts          # Base page with common functionality
│   └── CodeFlammePage.ts    # CodeFlamme-specific page interactions
├── tests/                    # Test specifications
│   └── codeflamme.spec.ts   # Main test suite
├── playwright.config.ts      # Playwright configuration
├── tsconfig.json            # TypeScript configuration
├── package.json             # Project dependencies and scripts
├── resume.pdf               # Sample resume for form testing
└── README.md                # This file
```

## 🚀 Features

### Test Coverage
- **Website Navigation**: Launch and navigate to CodeFlamme website
- **Theme Toggle**: Test dark/light mode switching functionality
- **Portfolio Navigation**: Navigate to portfolio page and perform smooth scrolling
- **Careers Page**: Access careers section and test job application workflow
- **Form Automation**: Complete job application form with sample data
- **File Upload**: Test resume file upload functionality
- **Form Submission**: Submit job application and verify success

### Technical Features
- **Page Object Model**: Clean separation of test logic and page interactions
- **TypeScript**: Full type safety and modern JavaScript features
- **Comprehensive Logging**: Detailed console output for debugging
- **Error Handling**: Robust error handling with fallback mechanisms
- **Responsive Testing**: Tests work across different viewport sizes
- **Screenshot Capture**: Automatic screenshots on test completion

## 🛠️ Technology Stack

- **Playwright**: Modern web automation framework
- **TypeScript**: Type-safe JavaScript development
- **Node.js**: JavaScript runtime environment
- **Page Object Model**: Design pattern for test automation

## 📋 Prerequisites

Before running this project, ensure you have:

- **Node.js** (version 16 or higher)
- **npm** (comes with Node.js)
- **Git** (for cloning the repository)

## 🚀 Installation & Setup

### 1. Clone the Repository
```bash
git clone <repository-url>
cd codeflamme-automation
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Install Playwright Browsers
```bash
npx playwright install
```

## 🧪 Running Tests

### Run All Tests
```bash
npm test
```

### Run Tests in Headed Mode (Visible Browser)
```bash
npm run test:headed
```

### Run Specific Test File
```bash
npx playwright test tests/codeflamme.spec.ts
```

### Run Tests with Debug Mode
```bash
npx playwright test --debug
```

## 📁 Project Components

### 1. BasePage.ts
The foundation class that provides common functionality for all page objects:
- **Navigation**: `navigateTo(url)` - Navigate to specified URL
- **Page Loading**: `waitForPageLoad()` - Wait for page to fully load
- **Element Interaction**: `clickElement(locator)` - Click elements with visibility checks
- **Scrolling**: `smoothScrollToBottom()` - Perform smooth scrolling animation

### 2. CodeFlammePage.ts
Extends BasePage with CodeFlamme-specific functionality:
- **Theme Management**: Toggle between light/dark modes
- **Navigation**: Navigate to Portfolio and Careers pages
- **Form Handling**: Complete job application forms with sample data
- **File Upload**: Handle resume file uploads
- **Verification**: Check page states and form presence

### 3. Test Specification (codeflamme.spec.ts)
The main test suite that orchestrates the automation:
1. **Launch Website**: Navigate to CodeFlamme homepage
2. **Theme Testing**: Toggle theme mode
3. **Portfolio Testing**: Navigate to portfolio and scroll
4. **Careers Testing**: Access careers page
5. **Form Completion**: Fill and submit job application
6. **Verification**: Confirm successful form submission

## ⚙️ Configuration

### Playwright Configuration (playwright.config.ts)
- **Test Directory**: `./tests`
- **Timeout**: 120 seconds per test
- **Workers**: 1 (sequential execution)
- **Browser Mode**: Headed (visible browser)
- **Viewport**: Maximized window
- **Screenshots**: Enabled on test completion

### TypeScript Configuration (tsconfig.json)
- **Target**: ES2020
- **Module System**: CommonJS
- **Strict Mode**: Enabled
- **Output Directory**: `./dist`

## 📊 Test Data

The automation uses the following sample data for testing:

- **Name**: Sharjeel Ahmad
- **Email**: contact.sharjeelahmad@gmail.com
- **Phone**: 03244991112
- **Location**: Lahore
- **Job Title**: Jr. Web Developer
- **GitHub**: https://github.com/SharjeelAhmad-12
- **LinkedIn**: https://www.linkedin.com/in/sharjeel-ahmad-0013902b8/
- **Resume**: resume.pdf
- **Cover Letter**: "I am excited to apply for this role and contribute my skills to Codeflamme."

## 🔍 Test Execution Flow

1. **Initialization**: Launch browser and navigate to CodeFlamme
2. **Theme Testing**: Verify theme toggle functionality
3. **Portfolio Navigation**: Test portfolio page access and scrolling
4. **Careers Access**: Navigate to careers section
5. **Form Automation**: Complete job application form step-by-step
6. **File Upload**: Upload sample resume
7. **Submission**: Submit application and verify success
8. **Validation**: Confirm proper page state and form presence

## 📸 Test Results

After test execution, results are stored in:
- **Screenshots**: `test-results/` directory
- **Reports**: `playwright-report/` directory
- **Console Output**: Detailed logging of each test step

## 🐛 Troubleshooting

### Common Issues

1. **Browser Installation**
   ```bash
   npx playwright install
   ```

2. **Dependency Issues**
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

3. **Timeout Errors**
   - Increase timeout in `playwright.config.ts`
   - Check network connectivity
   - Verify website availability

4. **Element Not Found**
   - Check if website structure has changed
   - Update locators in page objects
   - Verify element visibility states

### Debug Mode
Run tests with debug mode to step through execution:
```bash
npx playwright test --debug
```

## 🔧 Customization

### Adding New Tests
1. Create new test file in `tests/` directory
2. Extend BasePage or CodeFlammePage as needed
3. Add test specifications following existing patterns

### Modifying Test Data
Update sample data in `CodeFlammePage.ts`:
- Form field values
- File paths
- URLs and navigation targets

### Configuration Changes
Modify `playwright.config.ts` for:
- Browser settings
- Timeout values
- Screenshot options
- Reporter configuration

## 📚 Best Practices

1. **Page Object Model**: Maintain separation between test logic and page interactions
2. **Explicit Waits**: Use proper wait conditions instead of hard delays
3. **Error Handling**: Implement robust error handling for flaky elements
4. **Logging**: Provide detailed logging for debugging and monitoring
5. **Data Management**: Use external data files for test data when possible

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Ensure all tests pass
6. Submit a pull request

## 📄 License

This project is licensed under the ISC License.

## 👥 Support

For questions or issues:
- Check the troubleshooting section
- Review test logs and screenshots
- Verify website availability
- Check Playwright documentation

## 🔗 Useful Links

- [Playwright Documentation](https://playwright.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/)
- [Node.js Documentation](https://nodejs.org/)
- [CodeFlamme Website](https://codeflamme.com/)

---

**Note**: This automation project is designed for testing and demonstration purposes. Always ensure you have permission to test websites and follow responsible automation practices.
