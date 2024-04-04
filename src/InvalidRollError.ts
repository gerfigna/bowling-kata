export class InvalidRollError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'InvalidRollError';
    }
}
