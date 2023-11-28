/* eslint-disable @typescript-eslint/no-var-requires */
import { AccountsService } from '../services/accounts.service.ts';

describe('AccountsService', () => {
    let accountsService;

    beforeEach(() => {
        // Reset the service before each test
        accountsService = AccountsService.getInstance();
    });

    test('Singleton pattern', () => {
        const anotherInstance = AccountsService.getInstance();
        expect(accountsService).toBe(anotherInstance);
    });

    test('Add new account', () => {
        const newAccount = 'new_account_address';
        accountsService.addAccount(newAccount);
        expect(accountsService.accounts.includes(newAccount)).toBeTruthy();
    });

    test('Remove account', () => {
        const accountToRemove = accountsService.accounts[0];
        accountsService.removeAccount(accountToRemove);
        expect(accountsService.accounts.includes(accountToRemove)).toBeFalsy();
    });

    // More tests...
});
