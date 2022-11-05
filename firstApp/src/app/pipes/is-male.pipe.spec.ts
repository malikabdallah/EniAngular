import { IsMalePipe } from './is-male.pipe';

describe('IsMalePipe', () => {
  it('create an instance', () => {
    const pipe = new IsMalePipe();
    expect(pipe).toBeTruthy();
  });
});
