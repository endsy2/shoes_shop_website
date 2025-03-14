import { Strategy } from 'passport-local';
import { AuthService } from '../auth.service';
declare const localStrategry_base: new (...args: [options: import("passport-local").IStrategyOptionsWithRequest] | [options: import("passport-local").IStrategyOptions] | []) => Strategy & {
    validate(...args: any[]): unknown;
};
export declare class localStrategry extends localStrategry_base {
    private authService;
    constructor(authService: AuthService);
    validate(username: string, password: string): Promise<any>;
}
export {};
