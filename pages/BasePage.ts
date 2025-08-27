import { Page, Locator } from '@playwright/test';

export class BasePage {
    protected page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigateTo(url: string): Promise<void> {
        await this.page.goto(url);
    }

    async waitForPageLoad(): Promise<void> {
        await this.page.waitForLoadState('domcontentloaded');
        await this.page.waitForTimeout(1000);
    }

    async clickElement(locator: Locator): Promise<void> {
        await locator.waitFor({ state: 'visible' });
        await locator.click();
    }

    async smoothScrollToBottom(): Promise<void> {
        console.log('Starting fast step-by-step scroll to bottom...');
        
        await this.page.evaluate(async () => {
            const scrollStep = 160;
            const scrollDelay = 20;
            const currentPosition = window.scrollY;
            const targetPosition = document.body.scrollHeight - window.innerHeight;
            
            console.log(`Starting fast scroll from ${currentPosition} to bottom at ${targetPosition}`);
            
            for (let position = currentPosition; position <= targetPosition; position += scrollStep) {
                window.scrollTo(0, position);
                await new Promise(resolve => setTimeout(resolve, scrollDelay));
            }
            
            window.scrollTo(0, targetPosition);
        });
        
        console.log('Waiting for fast scroll animation to complete...');
        await this.page.waitForTimeout(2000);
        console.log('Fast scroll to bottom completed');
    }
}
