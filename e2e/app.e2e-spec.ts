import { NgsamplePage } from './app.po';

describe('ngsample App', function() {
  let page: NgsamplePage;

  beforeEach(() => {
    page = new NgsamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
