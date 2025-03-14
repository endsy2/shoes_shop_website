import { PassportLocalGuard } from './passport-local.guard';

describe('PassportLocalGuard', () => {
  it('should be defined', () => {
    expect(new PassportLocalGuard()).toBeDefined();
  });
});
