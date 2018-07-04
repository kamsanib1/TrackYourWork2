import { HeaderFooterModule } from './header-footer.module';

describe('HeaderFooterModule', () => {
  let headerFooterModule: HeaderFooterModule;

  beforeEach(() => {
    headerFooterModule = new HeaderFooterModule();
  });

  it('should create an instance', () => {
    expect(headerFooterModule).toBeTruthy();
  });
});
