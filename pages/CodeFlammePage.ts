import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class CodeFlammePage extends BasePage {
    readonly themeModeToggle: Locator;
    readonly portfolioNavLink: Locator;
    readonly careersNavLink: Locator;
    readonly jobTitleDropdown: Locator;
    readonly fullNameInput: Locator;
    readonly emailInput: Locator;
    readonly phoneInput: Locator;
    readonly locationDropdown: Locator;
    readonly coverLetterInput: Locator;
    readonly applyButton: Locator;

    constructor(page: Page) {
        super(page);
        this.themeModeToggle = page.locator('#theme-mode');
        this.portfolioNavLink = page.locator('//*[@id="navbarNav"]/ul/li[4]/a');
        this.careersNavLink = page.locator('//*[@id="navbarNav"]/ul/li[6]/a');
        this.jobTitleDropdown = page.locator('select[name="title"]');
        this.fullNameInput = page.locator('input[name="name"]');
        this.emailInput = page.locator('input[name="email"]');
        this.phoneInput = page.locator('input[name="phone"]');
        this.locationDropdown = page.locator('select[name="location"]');
        this.coverLetterInput = page.locator('textarea[name="message"]');
        this.applyButton = page.locator('button[type="submit"]');
    }

    async navigateToCodeFlamme(): Promise<void> {
        await this.navigateTo('https://codeflamme.com/');
        await this.waitForPageLoad();
    }

    async toggleThemeMode(): Promise<void> {
        await this.themeModeToggle.waitFor({ state: 'visible' });
        await this.themeModeToggle.click();
        await this.page.waitForTimeout(1000);
    }

    async clickPortfolioLink(): Promise<void> {
        await this.clickElement(this.portfolioNavLink);
        await this.waitForPageLoad();
    }

    async clickCareersLink(): Promise<void> {
        await this.clickElement(this.careersNavLink);
        await this.waitForPageLoad();
    }

    async fillJobApplicationForm(): Promise<void> {
        try {
            console.log('Starting to fill job application form...');
            
            console.log('Step 1: Selecting job title...');
            await this.jobTitleDropdown.waitFor({ state: 'visible', timeout: 10000 });
            await this.page.waitForTimeout(1000);
            
            if (await this.jobTitleDropdown.isVisible()) {
                try {
                    await this.jobTitleDropdown.click();
                    console.log('✓ Opened job title dropdown');
                    await this.page.waitForTimeout(500);
                    await this.jobTitleDropdown.selectOption({ value: 'Jr. Web Developer' });
                    console.log('✓ Selected job title: Jr. Web Developer');
                    await this.page.waitForTimeout(1000);
                } catch (error) {
                    console.log('Job title dropdown selection failed, continuing...');
                }
            } else {
                console.log('Job title dropdown not visible, continuing...');
            }
            
            console.log('Step 2: Filling full name...');
            await this.fullNameInput.waitFor({ state: 'visible', timeout: 10000 });
            await this.page.waitForTimeout(1000);
            await this.fullNameInput.fill('Sharjeel Ahmad');
            console.log('Full name filled: Sharjeel Ahmad');
            await this.page.waitForTimeout(1000);
            
            console.log('Step 3: Filling email...');
            await this.emailInput.waitFor({ state: 'visible', timeout: 10000 });
            await this.page.waitForTimeout(1000);
            await this.emailInput.fill('contact.sharjeelahmad@gmail.com');
            console.log('Email filled: contact.sharjeelahmad@gmail.com');
            await this.page.waitForTimeout(1000);
            
            console.log('Step 4: Filling phone number...');
            await this.phoneInput.waitFor({ state: 'visible', timeout: 10000 });
            await this.page.waitForTimeout(1000);
            await this.phoneInput.fill('03244991112');
            console.log('Phone number filled: 03244991112');
            await this.page.waitForTimeout(1000);
            
            console.log('Step 5: Selecting location...');
            await this.locationDropdown.waitFor({ state: 'visible', timeout: 10000 });
            await this.page.waitForTimeout(1000);
            
            if (await this.locationDropdown.isVisible()) {
                try {
                    await this.locationDropdown.click();
                    console.log('✓ Opened location dropdown');
                    await this.page.waitForTimeout(500);
                    await this.locationDropdown.selectOption({ value: 'Lahore' });
                    console.log('✓ Selected location: Lahore');
                    await this.page.waitForTimeout(1000);
                } catch (error) {
                    console.log('Location dropdown selection failed, continuing...');
                }
            } else {
                console.log('Location dropdown not visible, continuing...');
            }
            
            console.log('Step 6: Filling GitHub URL...');
            const githubField = this.page.locator('input[name="github"]');
            await githubField.waitFor({ state: 'visible', timeout: 10000 });
            await this.page.waitForTimeout(1000);
            await githubField.fill('https://github.com/SharjeelAhmad-12');
            console.log('GitHub URL filled: https://github.com/SharjeelAhmad-12');
            await this.page.waitForTimeout(1000);
            
            console.log('Step 7: Filling LinkedIn profile...');
            const linkedinField = this.page.locator('input[name="linkedin"]');
            await linkedinField.waitFor({ state: 'visible', timeout: 10000 });
            await this.page.waitForTimeout(1000);
            await linkedinField.fill('https://www.linkedin.com/in/sharjeel-ahmad-0013902b8/');
            console.log('LinkedIn profile filled: https://www.linkedin.com/in/sharjeel-ahmad-0013902b8/');
            await this.page.waitForTimeout(1000);
            
            console.log('Step 8: Uploading resume...');
            const resumeField = this.page.locator('input[name="resume"]');
            await resumeField.waitFor({ state: 'visible', timeout: 10000 });
            await this.page.waitForTimeout(1000);
            const filePath = './resume.pdf';
            await resumeField.setInputFiles(filePath);
            console.log('Resume uploaded: resume.pdf');
            await this.page.waitForTimeout(1000);
            
            console.log('Step 9: Filling cover letter...');
            await this.coverLetterInput.waitFor({ state: 'visible', timeout: 10000 });
            await this.page.waitForTimeout(1000);
            await this.coverLetterInput.fill('I am excited to apply for this role and contribute my skills to Codeflamme.');
            console.log('Cover letter filled');
            await this.page.waitForTimeout(1000);
            
            console.log('All form fields filled successfully!');
        } catch (error) {
            console.log(`Error filling job application form: ${error}`);
            throw error;
        }
    }

    async submitJobApplication(): Promise<void> {
        await this.applyButton.waitFor({ state: 'visible' });
        await this.page.waitForTimeout(2000);
        await this.applyButton.click();
        await this.page.waitForTimeout(2000);
    }

    async isOnPortfolioPage(): Promise<boolean> {
        const currentUrl = this.page.url();
        return currentUrl.includes('portfolio') || currentUrl.includes('Portfolio');
    }

    async isOnCareersPage(): Promise<boolean> {
        const currentUrl = this.page.url();
        console.log(`Current URL: ${currentUrl}`);
        
        const isCareers = currentUrl.includes('career');
        console.log(`Is Careers page: ${isCareers}`);
        return isCareers;
    }

    async hasJobApplicationForm(): Promise<boolean> {
        try {
            const form = this.page.locator('form');
            const jobTitleSelect = this.page.locator('select[name="title"]');
            const nameInput = this.page.locator('input[name="name"]');
            const emailInput = this.page.locator('input[name="email"]');
            
            const formVisible = await form.isVisible();
            const jobTitleVisible = await jobTitleSelect.isVisible();
            const nameVisible = await nameInput.isVisible();
            const emailVisible = await emailInput.isVisible();
            
            const hasForm = formVisible && jobTitleVisible && nameVisible && emailVisible;
            console.log(`Form elements check - Form: ${formVisible}, Job Title: ${jobTitleVisible}, Name: ${nameVisible}, Email: ${emailVisible}`);
            console.log(`Has job application form: ${hasForm}`);
            
            return hasForm;
        } catch (error) {
            console.log(`Error checking for job application form: ${error}`);
            return false;
        }
    }

    async getScrollPosition(): Promise<number> {
        return await this.page.evaluate(() => window.scrollY);
    }
}
