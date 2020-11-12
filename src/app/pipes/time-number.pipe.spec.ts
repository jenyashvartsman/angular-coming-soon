import { TimeNumberPipe } from './time-number.pipe';

describe('TimeNumberPipe', () => {
  it('create an instance', () => {
    const pipe = new TimeNumberPipe();
    expect(pipe).toBeTruthy();
  });
});
