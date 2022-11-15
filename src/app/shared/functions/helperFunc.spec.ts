import { isLocalLink } from './helperFuncs';

describe('Tests for isLocalLink', () => {
    it('/home should be local', () => {
        expect(isLocalLink('/home')).toEqual(true);
    });
    it('/kek should be local', () => {
        expect(isLocalLink('/kek')).toEqual(true);
    });
    it('#kek should be local', () => {
        expect(isLocalLink('#kek')).toEqual(true);
    });
    it('link with double / shouldnt be local', () => {
        expect(isLocalLink('//kek')).toEqual(false);
    });
    it('Link with https', () => {
        expect(isLocalLink('https://foobar.com')).toEqual(false);
        expect(isLocalLink('https://www.foobar.com/home')).toEqual(false);
    });
    it('Link with the same domain name should be local', () => {
        const domain = window.location.host;
        expect(isLocalLink(`https://${domain}`)).toEqual(true);
        expect(isLocalLink(`https://${domain}/home`)).toEqual(true);
    });
});
