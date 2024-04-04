import {InvalidRollError} from "./InvalidRollError";

export class Game {

    private _rolls: number[] = [];

    public roll(value: number): Game {

        // @todo: implement
        if (value < 0 || value > 10) {
            throw new InvalidRollError('Invalid roll value');
        }

        this._rolls.push(value);

        return this;
    }

    public score(): number {
        // @todo: implement
        return this._rolls.reduce((acc, curr) => acc + curr, 0);
    }
}
