
import {compare} from "../../helpers/checker";

describe('compare function', () => {
    it('returns proper values if anagram', () => {
        expect(compare('dada', 'adad')).toEqual(true);
    });
    it('returns proper values if not anagram', () => {
        expect(compare('dadaw', 'dadaf')).toEqual(false);
    });
    it('returns nothing if empty inputs', () => {
        expect(compare('', '')).toEqual(false);
    });
});
