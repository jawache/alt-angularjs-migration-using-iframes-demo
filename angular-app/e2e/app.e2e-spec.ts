import { HostAppPage } from './app.po';

describe('host-app App', function() {
  let page: HostAppPage;

  beforeEach(() => {
    page = new HostAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
