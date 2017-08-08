import { AstroAppPage } from './app.po';

describe('astro-app App', () => {
  let page: AstroAppPage;

  beforeEach(() => {
    page = new AstroAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
