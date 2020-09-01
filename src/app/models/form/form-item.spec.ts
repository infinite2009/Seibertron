import FormItem from './form-item';

describe('FormItem', () => {
  it('should create an instance', () => {
    expect(
      new FormItem({
        desc: '',
        label: '',
        name: '',
        value: undefined,
      })
    ).toBeTruthy();
  });
});
