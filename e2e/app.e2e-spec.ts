import { Angular2NewFormsPracticePage } from './app.po';

describe('angular2-new-forms-practice App', function() {
  let page: Angular2NewFormsPracticePage;

  beforeEach(() => {
    page = new Angular2NewFormsPracticePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
