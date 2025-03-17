declare const JwtStrategy_base: new (...args: any) => any;
export declare class JwtStrategy extends JwtStrategy_base {
    constructor();
    validate(payload: {
        sub: string;
        email: string;
    }): Promise<{
        userId: string;
        email: string;
    }>;
}
export {};
