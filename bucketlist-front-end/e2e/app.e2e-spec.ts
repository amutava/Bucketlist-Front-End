import { BucketlistFrontEndPage } from './app.po';

describe('bucketlist-front-end App', function() {
  let page: BucketlistFrontEndPage;

  beforeEach(() => {
    page = new BucketlistFrontEndPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
