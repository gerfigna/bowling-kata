import { Game } from "../src/Game";
import {InvalidRollError} from "../src/InvalidRollError";
import {invalidGames, incompleteGames, completeGames} from "./provider/gamesProvider";

describe('Bowling game test', () => {

    const game = new Game();

    it('should return 0 when no items are sent', () => {
        expect(game.roll(0).score()).toBe(0);
    });

});

describe.each(incompleteGames)(`An incomplete game`, (line) => {
    const game = new Game();

    it(`With rolls ${line.rolls} => score should be ${line.score}`, () => {

        line.rolls.forEach((b) => game.roll(b));

        expect(game.score()).toBe(line.score);
    });
});

describe.each(completeGames)(`A complete game`, (line) => {
    const game = new Game();


    it(`With rolls ${line.rolls} => score should be ${line.score}`, () => {

        line.rolls.forEach((b) => game.roll(b));

        expect(game.score()).toBe(line.score);
    });
});

describe.each(invalidGames)(`An invalid game`, (line) => {
    const game = new Game();

    it(`With rolls ${line.rolls} => should be throw an error`, () => {

        line.rolls.forEach((b) => game.roll(b));

        expect(() => {
            game.roll(7).roll(4)
        }).toThrow(new InvalidRollError('Invalid roll value'));
    });
});
