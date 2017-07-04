import { DomainShortlistPage } from './app.po';

describe('domain-shortlist App', function() {
  let page: DomainShortlistPage;

  beforeEach(() => {
    page = new DomainShortlistPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
