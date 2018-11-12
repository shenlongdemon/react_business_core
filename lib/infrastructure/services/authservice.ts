import {IAuthService, User} from '../../services';
import {IStore} from '../../repositories';
import {IAuthRepo, LoginSdo} from '../../repositories';
import {injectable, inject} from 'inversify';
import {PUBLIC_TYPES, PRIVATE_TYPES} from '../identifiers';
import {CONSTANTS, API_STATUS_CODE} from '../../common';
import {ApiResult} from '../../webapi';
import {BaseService} from './baseservice';
import {BaseDto} from '../../services';

@injectable()
export class AuthService extends BaseService implements IAuthService {

    @inject(PRIVATE_TYPES.IAuthRepo) private authRepo!: IAuthRepo;
    @inject(PUBLIC_TYPES.IStore) private store!: IStore;


    login = async (username: string, password: string): Promise<BaseDto> => {
        let res: LoginSdo = await this.authRepo.login(username, password);



        if (res.isSuccess && res.user) {

            let user: User|null = this.mappingUser(res.user);
            if (user) {
                this.store.saveUser(user);
            }
        }

        let loginDto: BaseDto = this.transformLogin(res);

        return loginDto
    }

    isLoggedIn = async (): Promise<boolean> => {
        let user: User | null = await this.store.getUser();

        var isLogged: boolean = false;
        if (user) {
            isLogged = true;
        }

        return isLogged;

    }
}
