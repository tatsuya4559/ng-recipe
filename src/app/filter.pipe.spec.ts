import { FilterPipe } from './filter.pipe';

describe('FilterPipe', () => {
  it('create an instance', () => {
    const pipe = new FilterPipe();
    expect(pipe).toBeTruthy();
  });

  it('filter status', () => {
    const pipe = new FilterPipe();
    const result = pipe.transform([{status: 'active'},{status:  'inactive'},{status:  'terminated'}], 'active', 'status')
    expect(result).toContain({status: 'active'})
    expect(result.length).toBe(1)
  });
});
