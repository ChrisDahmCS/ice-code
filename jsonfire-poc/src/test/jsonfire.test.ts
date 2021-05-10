import jsonFire from '../jsonfire';
import * as fs from 'fs';
import * as path from 'path';
import SingleRequiredSchema from './test-files/single-required-prop-only/schema.json';

describe('jsonFire', () => {
    describe('generate rules for single simple schema', () => {
        it('should turn a basic object definition into a firestore rule', () => {
            const schema = SingleRequiredSchema;
            const rulesFile = path.join(__dirname, 'test-files/single-required-prop-only/firestore.rules');
            const expectedRules = fs.readFileSync(rulesFile, 'utf8');
            expect(jsonFire(schema)).toEqual(expectedRules);
        });
    });
});
