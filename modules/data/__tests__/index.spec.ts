import { getName } from '../'

describe('data', () => {
    it('can fetch the current name', async () => {
        const name = await getName()
        expect(name).toBe('Maarten')
    })
})
