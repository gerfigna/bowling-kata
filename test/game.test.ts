import { Game } from "../src/Game";

describe('Bowling game test', () => {

    const game = new Game();

    it('should return 0 when no items are sent', () => {
        expect(game.roll(0).score()).toBe(0);
    });

});
