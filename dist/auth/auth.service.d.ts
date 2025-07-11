export declare class AuthService {
    validateUser(email: string, senha: string): Promise<unknown>;
    login(user: any): Promise<{
        access_token: any;
    }>;
}
