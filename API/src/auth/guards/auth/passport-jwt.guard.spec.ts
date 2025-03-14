import { PassportJwtGuard } from './passport-jwt.guard';

describe('PassportJwtGuard', () => {
  it('should be defined', () => {
    expect(new PassportJwtGuard()).toBeDefined();
  });
});
