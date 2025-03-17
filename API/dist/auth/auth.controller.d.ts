import { AuthService } from './auth.service';
import { SignUpDto } from './DTO/signUp.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(request: any): Promise<{
        accessToken: string;
    }>;
    signUp(input: SignUpDto): Promise<{
        accessToken: {
            accessToken: string;
        };
    }>;
    getUserInto(request: any): any;
}
