import StyleFormItem from './style-form-item';

describe('StyleFormItem', () => {
  it('should create an instance', () => {
    expect(
      new StyleFormItem({
        desc: '',
        label: '',
        name: '',
        unit: undefined,
        value: undefined,
      })
    ).toBeTruthy();
  });
});
