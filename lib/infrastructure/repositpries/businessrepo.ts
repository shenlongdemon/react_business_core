import {BaseRepository} from './baserepository';
import {IBusinessRepo, GoodsListSdo, LoginSdo, ProcessListSdo} from '../../repositories';
import {inject, injectable} from "inversify";
import {IWebApi, ApiResult} from '../../webapi';
import {PUBLIC_TYPES, PRIVATE_TYPES} from '../identifiers';
import {STORAGE_KEYS, CONSTANTS, API} from '../../common';


@injectable()
export class BusinessRepo extends BaseRepository implements IBusinessRepo {
    
    @inject(PUBLIC_TYPES.IWebApi) private api!: IWebApi;
    
    getGoodses = async (userId: string): Promise<GoodsListSdo> => {
        const res: ApiResult = await this.api.get(API.GET_GOODSES(userId));
        let gdodsListSdo: GoodsListSdo = {
            ...this.transform(res),
            goodses: res.Data ? res.Data : []
        };
        return gdodsListSdo;
    }
    
    getProcesses = async (userId: string): Promise<ProcessListSdo> => {
        const res: ApiResult = await this.api.get(API.GET_PROCESSES(userId));
        let processListSdo: ProcessListSdo = {
            ...this.transform(res),
            processes: res.Data ? res.Data : []
        };
        return processListSdo;
    }
}
