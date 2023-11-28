import { fetchData } from '../utils/fetchData';
import { sendWsMessage } from '../utils/webSocket';
import { AccountsService } from './accounts.service';

jest.mock('../utils/fetchData', () => ({
    fetchData: jest.fn().mockResolvedValue({ amount: 10000 }),
}));

jest.mock('../utils/webSocket', () => ({
    sendWsMessage: jest.fn(),
}));

describe('AccountsService', () => {
    let service: AccountsService;

    beforeEach(() => {
        jest.clearAllMocks();
        service = AccountsService.getInstance();
    });

    test('singleton instance', () => {
        const anotherInstance = AccountsService.getInstance();
        expect(service).toBe(anotherInstance);
    });

    test('initial accounts', () => {
        expect(service.accounts).toHaveLength(6);
    });

    test('addAccount adds an account', () => {
        const newAccount = 'NEW_ACCOUNT_ADDRESS';
        service.addAccount(newAccount);
        expect(service.accounts).toContain(newAccount);
    });

    test('removeAccount removes an account', () => {
        const accountToRemove = service.accounts[0];
        service.removeAccount(accountToRemove);
        expect(service.accounts).not.toContain(accountToRemove);
    });

    test('checkAccountsStates updates state correctly', async () => {
        await service.checkAccountsStates();
        // Add assertions relevant to the state update logic
        // For example, check if accountsState has been updated as expected
    });

    // Add more tests as needed
});
