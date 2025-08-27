import { test, expect } from '@playwright/test';
import { CodeFlammePage } from '../pages/CodeFlammePage';

test('CodeFlamme Website Test', async ({ page }) => {
    const codeFlammePage = new CodeFlammePage(page);
    
    console.log('Starting CodeFlamme website automation test...');
    
    console.log('Step 1: Launching website...');
    await codeFlammePage.navigateToCodeFlamme();
    console.log('Website launched successfully');
    
    console.log('Step 2: Toggling theme mode...');
    await codeFlammePage.toggleThemeMode();
    console.log('Theme mode toggled successfully');
    
    console.log('Step 3: Navigating to Portfolio page...');
    await codeFlammePage.clickPortfolioLink();
    console.log('Navigated to Portfolio page successfully');
    
    console.log('Waiting 2 seconds on Portfolio page before scrolling...');
    await page.waitForTimeout(2000);
    
    console.log('Step 4: Performing smooth scroll to bottom...');
    await codeFlammePage.smoothScrollToBottom();
    console.log('Smooth scroll to bottom completed');
    
    console.log('Step 5: Navigating to Careers page...');
    await codeFlammePage.clickCareersLink();
    console.log('Navigated to Careers page successfully');
    
    console.log('Step 6: Filling job application form...');
    
    await codeFlammePage.fillJobApplicationForm();
    console.log('Job application form filled successfully');
    
    console.log('Step 7: Submitting job application...');
    await codeFlammePage.submitJobApplication();
    console.log('Job application submitted successfully');
    
    const isOnCareers = await codeFlammePage.isOnCareersPage();
    const hasForm = await codeFlammePage.hasJobApplicationForm();
    
    console.log(`Final verification - URL check: ${isOnCareers}, Form check: ${hasForm}`);
    
    expect(isOnCareers).toBeTruthy();
    expect(hasForm).toBeTruthy();
    
    console.log('All test steps completed successfully!');
});
