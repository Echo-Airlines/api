import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { eachOfSeries } from 'async';
import { LoggerService } from '@/logger/logger.service';
import SeedData from './SeederData';
import { PrismaService } from '@prisma/prisma.service';
import { AppConfig, Job, Livery, Prisma } from 'generated/prisma';

@Injectable()
export class SeederService {
  private readonly logger = new LoggerService(SeederService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly configService: ConfigService,
  ) {
    this.logger.setContext(SeederService.name);
  }

  public async run() {
    const seedDatabase: string =
      this.configService.get<string>('SEED_DATABASE') || 'false';

    if (seedDatabase !== 'true') {
      this.logger.debug(
        'Database seeding is disabled. Set the SEED_DATABASE environment variable to true to enable seeding.',
      );
      return;
    // } else if (!SeedData.roles || !SeedData.users || !SeedData.permissions) {
    //   this.logger.debug('No roles, users, or permissions to seed.');
    //   return;
    } else {
      // first seed permissions
      // await this._seedPermissions(SeedData.permissions)
      //   .then(async (permissions: Permission[]) => {
      //     this.logger.debug(`${permissions.length} Permissions seeded.`);
      //   })
      //   .catch((err) => {
      //     this.logger.error('Error seeding permissions:', err);
      //   });
        
      // // seed userRoles, pass in the user roles to seed, and return the user roles that were created.
      // await this._seedRoles(SeedData.roles)
      //   .then(async (roles: Role[]) => {
      //     this.logger.debug(`${roles.length} Roles seeded.`);

      //     let users: User[] = await this._seedUsers(SeedData.users);
      //     this.logger.debug(`${users.length} Users seeded.`);
      //   })
      //   .catch((err) => {
      //     this.logger.error('Error seeding user roles:', err);
      //   });

      // then seed jobs
      await this._seedJobs(SeedData.jobs)
        .then(async (jobs: Job[]) => {
          this.logger.debug(`${jobs.length} Jobs seeded.`);
        })
        .catch((err) => {
          this.logger.error('Error seeding jobs:', err);
        });

      // then seed app config
      await this._seedAppConfig(SeedData.appConfig)
        .then(async (appConfig: AppConfig) => {
          this.logger.debug('App config seeded.');
        })
        .catch((err) => {
          this.logger.error('Error seeding app config:', err);
        });

      await this._seedLiveries(SeedData.liveries)
        .then(async (liveries: Livery[]) => {
          this.logger.debug(`${liveries.length} Liveries seeded.`);
        })
        .catch((err) => {
          this.logger.error('Error seeding liveries:', err);
        });

      // then print a message that seeding is complete with the number of users and roles created.
      this.logger.debug('Seeding complete.');
    }
  }

  /**
  private async _seedPermissions(seedPermissions: CreatePermissionDto[]) {
    return new Promise(async (resolve, reject) => {
      if (!seedPermissions || seedPermissions.length === 0) {
        this.logger.debug('No permissions to seed.');
        return reject('no permissions to seed');
      }

      this.logger.debug(`There are ${seedPermissions.length} permissions to seed.`);
      const permissions: Permission[] = [];

      // iterate over the permissions and seed them one by one.
      eachOfSeries(
        seedPermissions,
        async (createPermission: CreatePermissionDto, i: number) => {
          this.logger.debug(`Seeding permission ${i + 1} of ${seedPermissions.length}.`);
          const permission: Permission = await this._seedPermission(createPermission);
          permissions.push(permission);
          return permission;
        },
        (err) => {
          if (err) {
            this.logger.error('Error seeding user roles:', err);
            return reject(err);
          }

          this.logger.debug('UserRole seeding complete.');
          return resolve(permissions);
        });
    });
  }
  
  private async _seedPermission(createPermission: CreatePermissionDto): Promise<Permission> {
    return new Promise(async (resolve, reject) => {
      if (!createPermission) {
        this.logger.debug('No permission to seed.');
        return reject('no permission to seed');
      }

      this.logger.debug(`Seeding permission ${createPermission.slug}.`);
      let permission: Permission|null = await this.permissionRepo.findOne({
        where: {
          slug: createPermission.slug,
        },
      });

      if (!permission) {
        permission = new Permission(createPermission);
        permission = await this.permissionRepo.save(permission);
      }

      return resolve(permission);
    });
  }

  private async _seedRoles(userRoles: CreateRoleDto[]): Promise<Role[]> {
    return new Promise(async (resolve, reject) => {
    if (!userRoles || userRoles.length === 0) {
      this.logger.debug('No user roles to seed.');
      return reject('no user roles to seed');
    }

    this.logger.debug(`There are ${userRoles.length} user roles to seed.`);
    const roles: Role[] = [];
      // iterate over the user roles and seed them one by one.
      eachOfSeries(
        userRoles,
        async (userRole: CreateRoleDto) => {
          const role: Role|null = await this._seedRole(userRole);
          if (role) {
            roles.push(role);
          }

          return role;
        },
        (err) => {
          if (err) {
            this.logger.error('Error seeding user roles:', err);
            return reject(err);
          }

          this.logger.debug('UserRole seeding complete.');
          return resolve(roles);
        },
      );
    })
  }

  private async _seedUsers(seedUsers: CreateUserDto[]): Promise<User[]> {
    return new Promise(async (resolve, reject) => {
      if (!seedUsers || seedUsers.length === 0) {
        this.logger.debug('No users to seed.');
        return reject('no users to seed');
      }

      this.logger.debug(`There are ${seedUsers.length} Users to seed.`);
      const users: User[] = [];

      // iterate over the user roles and seed them one by one.
      eachOfSeries(
        seedUsers,
        async (createUser: CreateUserDto, i: number) => {
          this.logger.debug(`Seeding user ${i + 1} of ${seedUsers.length}.`);

          const user: User = await this._seedUser(createUser);

          users.push(user);

          return user;
        },
        (err) => {
          if (err) {
            this.logger.error('Error seeding users:', err);
            return reject(err);
          }

          this.logger.debug('User seeding complete.');
          return resolve(users);
        },
      );
    });
  }

  private async _seedRole(userRoleDto: CreateRoleDto) {
    // see if the role exists in the database.
    this.logger.debug(
      `Checking if role '${userRoleDto.slug}' exists in the database.`,
    );
    let role: Role | null = await this.roleRepo.findOne({
      where: {
        slug: userRoleDto.slug,
      },
    });

    if (!role) {
      this.logger.debug(
        `Role '${userRoleDto.slug}' does not exist in the database. Creating it now.`,
      );
      role = new Role(userRoleDto);

      if (userRoleDto.permissions) {
        const permissions = await this.permissionRepo.find({
          where: {
            slug: In(userRoleDto.permissions),
          },
        });

        role.permissions = permissions;
      }

      role = await this.roleRepo.save(role);
    }

    this.logger.debug(`Role '${role.slug}' has been created.`);

    return role;
  }

  private async _seedUser(user: CreateUserDto) {
    this.logger.debug(
      `Checking if user '${user.username}' exists in the database.`,
    );
    // see if the user exists in the database.
    let dbUser: User | null = await this.userRepo.findOne({
      where: {
        username: user.username,
      },
    });

    // if the user does not exist, create it.
    if (!dbUser) {
      this.logger.debug(
        `User '${user.username}' does not exist in the database. Creating it now.`,
      );
      const hash = user.password ? await this.hashService.hash(user.password) : undefined;
      const roles = await this.roleRepo
        .createQueryBuilder('roles')
        .where('roles.slug IN (:...slugs)', { slugs: user.roles })
        .getMany();

      console.log(roles);

      dbUser = this.userRepo.create({
        username: user.username,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        password: hash,
        firstLoginCompleted: user.firstLoginCompleted || false,
        roles: roles,
      });

      dbUser = await this.userRepo.save(dbUser);
      this.logger.log(
        `User '${dbUser.username}' has been created with password '${user.password}'${(user.roles && user.roles.length > 0) ? ` and roles ${user.roles.join(', ')}` : ''}.`,
      );
    } else {
      this.logger.debug(
        `User '${user.username}' already exists in the database.`,
      );
    }

    return dbUser;
  }
 */

  private async _seedLiveries(seedLiveries: Prisma.LiveryCreateInput[]): Promise<Livery[]> {
    return new Promise(async (resolve, reject) => {
      if (!seedLiveries || seedLiveries.length === 0) {
        this.logger.debug('No liveries to seed.');
        return reject('no liveries to seed');
      }

      this.logger.debug(`There are ${seedLiveries.length} liveries to seed.`);
      const liveries: Livery[] = [];

      // iterate over the liveries and seed them one by one.
      eachOfSeries(seedLiveries, async (livery: Prisma.LiveryCreateInput) => {
        this.logger.debug(`Seeding livery ${livery.Name}.`);
        const liveryEntity: Livery = await this._seedLivery(livery);
        liveries.push(liveryEntity);
        return liveryEntity;
      }, (err) => {
        if (err) {
          this.logger.error('Error seeding liveries:', err);
          return reject(err);
        }

        this.logger.debug('Livery seeding complete.');
        return resolve(liveries);
      });
    });
  }

  private async _seedJobs(seedJobs: Prisma.JobCreateInput[]): Promise<Job[]> {
    return new Promise(async (resolve, reject) => {
      if (!seedJobs || seedJobs.length === 0) {
        this.logger.debug('No jobs to seed.');
        return reject('no jobs to seed');
      }

      this.logger.debug(`There are ${seedJobs.length} jobs to seed.`);
      const jobs: Job[] = [];

      // iterate over the jobs and seed them one by one.
      eachOfSeries(seedJobs, async (job: Prisma.JobCreateInput) => {
        this.logger.debug(`Seeding job ${job.Name}.`);
        const jobEntity: Job = await this._seedJob(job);
        jobs.push(jobEntity);
        return jobEntity;
      }, (err) => {
        if (err) {
          this.logger.error('Error seeding jobs:', err);
          return reject(err);
        }

        this.logger.debug('Job seeding complete.');
        return resolve(jobs);
      });
    });
  }

  private async _seedLivery(dto: Prisma.LiveryCreateInput): Promise<Livery> {
    return new Promise(async (resolve, reject) => {
      if (!dto) {
        this.logger.debug('No livery to seed.');
        return reject('no livery to seed');
      }

      this.logger.debug(`Seeding livery ${dto.Name}.`);
      let liveryEntity: Livery|null = await this.prisma.livery.findFirst({
        where: {
          Name: dto.Name,
        },
      });

      if (!liveryEntity) {
        liveryEntity = await this.prisma.livery.create({
          data: dto,
        });

        this.logger.debug(`Livery ${dto.Name} has been created.`);
      } else {
        this.logger.debug(`Livery ${dto.Name} already exists in the database, skipping.`);
      }

      return resolve(liveryEntity);
    });
  }

  private async _seedJob(dto: Prisma.JobCreateInput): Promise<Job> {
    return new Promise(async (resolve, reject) => {
      if (!dto) {
        this.logger.debug('No job to seed.');
        return reject('no job to seed');
      }

      this.logger.debug(`Seeding job ${dto.Name}.`);
      let jobEntity: Job|null = await this.prisma.job.findFirst({
        where: {
          Name: dto.Name,
        },
      }); 

      if (!jobEntity) {
        jobEntity = await this.prisma.job.create({
          data: dto,
        });
      }

      return resolve(jobEntity);
    });
  }

  private async _seedAppConfig(dto: Prisma.AppConfigCreateInput): Promise<AppConfig> {
    return new Promise(async (resolve, reject) => {
      if (!dto) {
        this.logger.debug('No app config to seed.');
        return reject('no app config to seed');
      }

      this.logger.debug(`Seeding app config.`);
      let entity: AppConfig|null = await this.prisma.appConfig.findFirst({
        where: {
          Id: 1,
        },
      });

      if (!entity) {
        entity = await this.prisma.appConfig.create({
          data: dto,
        });
      }

      return resolve(entity);
    });
  }
}
