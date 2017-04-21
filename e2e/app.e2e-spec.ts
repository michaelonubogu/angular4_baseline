import { OvsPage } from './app.po';

describe('ovs App', () => {
  let page: OvsPage;

  beforeEach(() => {
    page = new OvsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
