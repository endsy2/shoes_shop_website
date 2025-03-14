import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(request: any): Promise<{
        accessToken: string;
    }>;
    signUp(input: {
        username: string;
        password: string;
    }): Promise<{
        accessToken: string;
    }>;
    getUserInto(request: any): any;
}
