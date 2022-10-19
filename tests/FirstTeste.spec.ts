import { User } from '../src/models/user';
test('it should be ok', () => {
    const userse = new User('Célio', 'Célio');
    console.log(userse.name);
    expect(userse.name).toEqual('Célio');
})