import { Angular2BasicV1Page } from './app.po';

describe('angular2-basic-v1 App', function() {
  let page: Angular2BasicV1Page;

  beforeEach(() => {
    page = new Angular2BasicV1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
