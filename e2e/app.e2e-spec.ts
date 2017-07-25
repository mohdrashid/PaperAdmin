import { AdminPage } from './app.po';

describe('admin App', () => {
  let page: AdminPage;

  beforeEach(() => {
    page = new AdminPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
