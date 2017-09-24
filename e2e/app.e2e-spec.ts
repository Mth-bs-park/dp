import { RxServiceTestPage } from './app.po';

describe('rx-service-test App', () => {
  let page: RxServiceTestPage;

  beforeEach(() => {
    page = new RxServiceTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
