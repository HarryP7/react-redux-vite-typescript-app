import { getGreeting } from '../support/app.po';

describe('react-vite-typescript-app', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    // Function helper example, see `../support/app.po.ts` file
    getGreeting().contains('Welcome react-vite-typescript-app');
  });
});
