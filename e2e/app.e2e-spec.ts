import { DevWebEvalPage } from './app.po';

describe('dev-web-eval App', () => {
  let page: DevWebEvalPage;

  beforeEach(() => {
    page = new DevWebEvalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('pr works!');
  });
});
