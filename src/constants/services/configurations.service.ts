import { Injectable, Inject } from '@nestjs/common';
import { UpdateConfigsDto } from '../dto/configurations/update-configs.dto';
import { Configurations } from '../entity/configurations.entity';

@Injectable()
export class ConfigsService {
  constructor(
    @Inject('CONFIG_REPOSITORY')
    private configsRepository: typeof Configurations
  ) {}

  async create(config: any): Promise<Configurations> {
    return this.configsRepository.create<Configurations>(config)
  }

  async findAll(): Promise<Configurations[]> {
    return this.configsRepository.findAll<Configurations>();
  }

  async findConfig(id: string): Promise<Configurations> { 
    return await this.configsRepository.findOne<Configurations>({ where: { id } });
  }

  async updateOne(config:  UpdateConfigsDto, id: string) {
    return this.configsRepository.update(
      config,
      {
        where: {
          id: id
        }
      })
  }

}