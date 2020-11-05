
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class CreateAvengerInput {
    name: string;
    age: number;
    universe: string;
}

export abstract class IQuery {
    abstract getAvengers(): Avenger[] | Promise<Avenger[]>;

    abstract avenger(id: string): Avenger | Promise<Avenger>;
}

export class Avenger {
    _id?: string;
    name?: string;
    age?: number;
    universe?: string;
    createdAt?: string;
}

export abstract class IMutation {
    abstract createAvenger(input?: CreateAvengerInput): Avenger | Promise<Avenger>;
}
