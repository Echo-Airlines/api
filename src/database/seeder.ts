import { Injectable } from '@nestjs/common';
import { LoggerService } from 'src/logger/logger.service';
import { eachOfSeries } from 'async';
import SeedData from './SeederData';
import { HashService } from 'src/hash/hash.service';
import { AircraftClass, AircraftStatus, AppConfig, Job, Livery, Permission, Prisma, Role, User, VirtualAirline, World, PrismaClient, DiscordMessageTemplate } from 'prisma/generated/prisma';

const prisma = new PrismaClient()

@Injectable()
class SeederService {
    private readonly logger = new LoggerService(SeederService.name);
    private readonly prisma: PrismaClient;

    constructor(_prisma: PrismaClient) {
        this.prisma = _prisma
        this.logger.setLogLevels(['error', 'warn', 'log']);
    }

    public async run() {
        // first seed permissions
        await this._seedPermissions(SeedData.permissions)
            .then(async (permissions: Permission[]) => {
                this.logger.debug(`${permissions.length} Permissions seeded.`);
            })
            .catch((err) => {
                this.logger.error('Error seeding permissions:', err);
            });

        // // seed userRoles, pass in the user roles to seed, and return the user roles that were created.
        await this._seedRoles(SeedData.roles)
            .then(async (roles: Role[]) => {
                this.logger.debug(`${roles.length} Roles seeded.`);

                let users: User[] = await this._seedUsers(SeedData.users);
                this.logger.debug(`${users.length} Users seeded.`);
            })
            .catch((err) => {
                this.logger.error('Error seeding user roles:', err);
            });

        // then seed worlds
        await this._seedWorlds(SeedData.worlds)
            .then(async (worlds: World[]) => {
                this.logger.debug(`${worlds.length} Worlds seeded.`);
            })
            .catch((err) => {
                this.logger.error('Error seeding worlds:', err);
            });

        // then seed aircraft statuses
        await this._seedAircraftStatuses(SeedData.aircraftStatuses)
            .then(async (aircraftStatuses: AircraftStatus[]) => {
                this.logger.debug(`${aircraftStatuses.length} Aircraft statuses seeded.`);
            })
            .catch((err) => {
                this.logger.error('Error seeding aircraft statuses:', err);
            });

        // then seed aircraft classes
        await this._seedAircraftClasses(SeedData.aircraftClasses)
            .then(async (aircraftClasses: AircraftClass[]) => {
                this.logger.debug(`${aircraftClasses.length} Aircraft classes seeded.`);
            })
            .catch((err) => {
                this.logger.error('Error seeding aircraft classes:', err);
            });

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
                this.logger.debug('App config seeded.', appConfig);
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

        if (SeedData.virtualAirline) {
            await this._seedVirtualAirline(SeedData.virtualAirline)
                .then(async (virtualAirline: VirtualAirline) => {

                })
                .catch((err) => {
                    this.logger.error('Error seeding virtual airline:', err);
                });
        }

        await this._seedDiscordMessageTemplates(SeedData.discordMessageTemplates)
            .then(async (discordMessageTemplates: DiscordMessageTemplate[]) => {
                this.logger.debug(`${discordMessageTemplates.length} Discord message templates seeded.`);
            })
            .catch((err) => {
                this.logger.error('Error seeding discord message templates:', err);
            });

        // then print a message that seeding is complete with the number of users and roles created.
        this.logger.log('Seeding complete.');
    }

    private async _seedPermissions(seedPermissions: Prisma.PermissionCreateInput[]) {
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
                async (createPermission: Prisma.PermissionCreateInput, i: number) => {
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

    private async _seedRoles(userRoles: Prisma.RoleCreateInput[]): Promise<Role[]> {
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
                async (userRole: Prisma.RoleCreateInput) => {
                    const role: Role | null = await this._seedRole(userRole);
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

    private async _seedUsers(seedUsers: Prisma.UserCreateInput[]): Promise<User[]> {
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
                async (createUser: Prisma.UserCreateInput, i: number) => {
                    this.logger.debug(`Seeding user ${i + 1} of ${seedUsers.length}.`);

                    const user: User | null = await this._seedUser(createUser);
                    if (!user) {
                        this.logger.error('Error seeding user:', 'No user found.');
                        return reject('no user found');
                    }

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

    private async _seedWorlds(seedWorlds: Prisma.WorldCreateInput[]): Promise<World[]> {
        return new Promise(async (resolve, reject) => {
            if (!seedWorlds || seedWorlds.length === 0) {
                this.logger.debug('No worlds to seed.');
                return reject('no worlds to seed');
            }

            this.logger.debug(`There are ${seedWorlds.length} worlds to seed.`);
            const worlds: World[] = [];

            // iterate over the worlds and seed them one by one.
            eachOfSeries(seedWorlds, async (world: Prisma.WorldCreateInput) => {
                this.logger.debug(`Seeding world ${world.Name}.`);
                const worldEntity: World = await this._seedWorld(world);
                worlds.push(worldEntity);
                return worldEntity;
            }, (err) => {
                if (err) {
                    this.logger.error('Error seeding worlds:', err);
                    return reject(err);
                }

                this.logger.debug('World seeding complete.');
                return resolve(worlds);
            });
        });
    }

    private async _seedAircraftStatuses(seedAircraftStatuses: Prisma.AircraftStatusCreateInput[]): Promise<AircraftStatus[]> {
        return new Promise(async (resolve, reject) => {
            if (!seedAircraftStatuses || seedAircraftStatuses.length === 0) {
                this.logger.debug('No aircraft statuses to seed.');
                return reject('no aircraft statuses to seed');
            }

            this.logger.debug(`There are ${seedAircraftStatuses.length} aircraft statuses to seed.`);
            const aircraftStatuses: AircraftStatus[] = [];

            // iterate over the aircraft statuses and seed them one by one.
            eachOfSeries(seedAircraftStatuses, async (aircraftStatus: Prisma.AircraftStatusCreateInput) => {
                this.logger.debug(`Seeding aircraft status ${aircraftStatus.Name}.`);

                const aircraftStatusEntity: AircraftStatus = await this._seedAircraftStatus(aircraftStatus);

                aircraftStatuses.push(aircraftStatusEntity);

                return aircraftStatusEntity;
            }, (err) => {
                if (err) {
                    this.logger.error('Error seeding aircraft statuses:', err);
                    return reject(err);
                }

                this.logger.debug('Aircraft status seeding complete.');
                return resolve(aircraftStatuses);
            });
        });
    }

    private async _seedAircraftClasses(seedAircraftClasses: Prisma.AircraftClassCreateInput[]): Promise<AircraftClass[]> {
        return new Promise(async (resolve, reject) => {
            if (!seedAircraftClasses || seedAircraftClasses.length === 0) {
                this.logger.debug('No aircraft classes to seed.');
                return reject('no aircraft classes to seed');
            }

            this.logger.debug(`There are ${seedAircraftClasses.length} aircraft classes to seed.`);
            const aircraftClasses: AircraftClass[] = [];

            // iterate over the aircraft classes and seed them one by one.
            eachOfSeries(seedAircraftClasses, async (aircraftClass: Prisma.AircraftClassCreateInput) => {
                this.logger.debug(`Seeding aircraft class ${aircraftClass.Name}.`);
                const aircraftClassEntity: AircraftClass = await this._seedAircraftClass(aircraftClass);

                aircraftClasses.push(aircraftClassEntity);

                return aircraftClassEntity;
            }, (err) => {
                if (err) {
                    this.logger.error('Error seeding aircraft classes:', err);
                    return reject(err);
                }

                this.logger.debug('Aircraft class seeding complete.');
                return resolve(aircraftClasses);
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

    private async _seedDiscordMessageTemplates(seedDiscordMessageTemplates: Prisma.DiscordMessageTemplateCreateInput[]): Promise<DiscordMessageTemplate[]> {

        return new Promise(async (resolve, reject) => {
            if (!seedDiscordMessageTemplates || seedDiscordMessageTemplates.length === 0) {
                this.logger.debug('No discord message templates to seed.');
                return reject('no discord message templates to seed');
            }

            this.logger.debug(`There are ${seedDiscordMessageTemplates.length} discord message templates to seed.`);
            const discordMessageTemplates: DiscordMessageTemplate[] = [];

            // iterate over the discord message templates and seed them one by one.
            eachOfSeries(seedDiscordMessageTemplates, async (discordMessageTemplate: Prisma.DiscordMessageTemplateCreateInput) => {
                this.logger.debug(`Seeding discord message template ${discordMessageTemplate.Name}.`);
                const discordMessageTemplateEntity: DiscordMessageTemplate = await this._seedDiscordMessageTemplate(discordMessageTemplate);
                discordMessageTemplates.push(discordMessageTemplateEntity);
                return discordMessageTemplateEntity;
            }, (err) => {
                if (err) {
                    this.logger.error('Error seeding discord message templates:', err);
                    return reject(err);
                }

                this.logger.debug('Discord message template seeding complete.');
                return resolve(discordMessageTemplates);
            });
        });
    }

    private async _seedPermission(createPermission: Prisma.PermissionCreateInput): Promise<Permission> {
        return new Promise(async (resolve, reject) => {
            if (!createPermission) {
                this.logger.debug('No permission to seed.');
                return reject('no permission to seed');
            }

            this.logger.debug(`Seeding permission ${createPermission.Slug}.`);
            let permission: Permission | null = await this.prisma.permission.findFirst({
                where: {
                    Slug: createPermission.Slug,
                },
            });

            if (!permission) {
                permission = await this.prisma.permission.create({
                    data: createPermission,
                });
            }

            return resolve(permission as Permission);
        });
    }

    private async _seedRole(userRoleDto: Prisma.RoleCreateInput) {
        // see if the role exists in the database.
        this.logger.debug(
            `Checking if role '${userRoleDto.Slug}' exists in the database.`,
        );

        let role: Role | null = await this.prisma.role.findFirst({
            where: {
                Slug: userRoleDto.Slug,
            },
        });

        if (!role) {
            this.logger.debug(
                `Role '${userRoleDto.Slug}' does not exist in the database. Creating it now.`,
            );
            role = await this.prisma.role.create({
                data: userRoleDto,
            });
        }

        this.logger.debug(`Role '${role?.Slug}' has been created.`);

        return role as Role;
    }

    private async _seedUser(user: Prisma.UserCreateInput) {
        this.logger.debug(
            `Checking if user '${user.Username}' exists in the database.`,
        );
        // see if the user exists in the database.
        let dbUser: User | null = await this.prisma.user.findFirst({
            where: {
                Username: user.Username,
            },
        });

        // if the user does not exist, create it.
        if (!dbUser) {
            this.logger.debug(
                `User '${user.Username}' does not exist in the database. Creating it now.`,
            );
            const hash = user.Password ? await new HashService().hash(user.Password) : undefined;

            if (!hash) {
                this.logger.error('Error seeding user:', 'No password hash found.');
                return Promise.reject('no password hash found');
            }

            dbUser = await this.prisma.user.create({
                data: {
                    Username: user.Username,
                    FirstName: user.FirstName,
                    LastName: user.LastName,
                    Email: user.Email,
                    Password: hash,
                    FirstLoginCompleted: user.FirstLoginCompleted || false,
                    Roles: {
                        connect: user.Roles?.connect,
                    },
                    PrivacySettings: {
                        create: user.PrivacySettings?.create,
                    },
                },
            });

            let rolesString = '';
            if (user.Roles && user.Roles.connect) {
                const rolesConnect = user.Roles.connect;
                let roleSlugs: string[] = [];
                if (Array.isArray(rolesConnect)) {
                    roleSlugs = rolesConnect.map((role) => role.Slug).filter((slug): slug is string => !!slug);
                } else if (rolesConnect && typeof rolesConnect === 'object' && 'Slug' in rolesConnect) {
                    if (rolesConnect.Slug) {
                        roleSlugs = [rolesConnect.Slug];
                    }
                }
                if (roleSlugs.length > 0) {
                    rolesString = ` and roles ${roleSlugs.join(', ')}`;
                }
            }

            this.logger.log(
                `User '${dbUser?.Username}' has been created with password '${user.Password}'${rolesString}.`,
            );
        } else {
            this.logger.debug(
                `User '${user.Username}' already exists in the database.`,
            );
        }

        return dbUser;
    }

    private async _seedAircraftStatus(dto: Prisma.AircraftStatusCreateInput): Promise<AircraftStatus> {
        return new Promise(async (resolve, reject) => {
            if (!dto) {
                this.logger.debug('No aircraft status to seed.');
                return reject('no aircraft status to seed');
            }

            this.logger.debug(`Seeding aircraft status ${dto.Name}.`);
            let aircraftStatusEntity: AircraftStatus | null = await this.prisma.aircraftStatus.findFirst({
                where: {
                    Name: dto.Name,
                },
            });

            if (!aircraftStatusEntity) {
                aircraftStatusEntity = await this.prisma.aircraftStatus.create({
                    data: dto,
                });

                this.logger.debug(`Aircraft status ${dto.Name} has been created.`);
            } else {
                this.logger.debug(`Aircraft status ${dto.Name} already exists in the database, skipping.`);
            }

            return resolve(aircraftStatusEntity as AircraftStatus);
        });
    }

    private async _seedAircraftClass(dto: Prisma.AircraftClassCreateInput): Promise<AircraftClass> {

        return new Promise(async (resolve, reject) => {
            if (!dto) {
                this.logger.debug('No aircraft class to seed.');
                return reject('no aircraft class to seed');
            }

            this.logger.debug(`Seeding aircraft class ${dto.Name}.`);

            let aircraftClassEntity: AircraftClass | null = await this.prisma.aircraftClass.findFirst({
                where: {
                    Name: dto.Name,
                },
            });

            if (!aircraftClassEntity) {
                aircraftClassEntity = await this.prisma.aircraftClass.create({
                    data: dto,
                });

                this.logger.debug(`Aircraft class ${dto.Name} has been created.`);
            } else {
                this.logger.debug(`Aircraft class ${dto.Name} already exists in the database, skipping.`);
            }

            return resolve(aircraftClassEntity as AircraftClass);
        });
    }

    private async _seedWorld(dto: Prisma.WorldCreateInput): Promise<World> {
        return new Promise(async (resolve, reject) => {
            if (!dto) {
                this.logger.debug('No world to seed.');
                return reject('no world to seed');
            }

            this.logger.debug(`Seeding world ${dto.Name}.`);
            let worldEntity: World | null = await this.prisma.world.findFirst({
                where: {
                    Slug: dto.Slug,
                },
            });

            if (!worldEntity) {
                worldEntity = await this.prisma.world.create({
                    data: dto,
                });

                this.logger.debug(`World ${dto.Name} has been created.`);
            } else {
                this.logger.debug(`World ${dto.Name} already exists in the database, skipping.`);
            }

            return resolve(worldEntity as World);
        });
    }

    private async _seedLivery(dto: Prisma.LiveryCreateInput): Promise<Livery> {
        return new Promise(async (resolve, reject) => {
            if (!dto) {
                this.logger.debug('No livery to seed.');
                return reject('no livery to seed');
            }

            this.logger.debug(`Seeding livery ${dto.Name}.`);
            let liveryEntity: Livery | null = await this.prisma.livery.findFirst({
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

            return resolve(liveryEntity as Livery);
        });
    }

    private async _seedJob(dto: Prisma.JobCreateInput): Promise<Job> {
        return new Promise(async (resolve, reject) => {
            if (!dto) {
                this.logger.debug('No job to seed.');
                return reject('no job to seed');
            }

            this.logger.debug(`Seeding job ${dto.Name}.`);
            let jobEntity: Job | null = await this.prisma.job.findFirst({
                where: {
                    Name: dto.Name,
                },
            });

            if (!jobEntity) {
                jobEntity = await this.prisma.job.create({
                    data: dto,
                });
            }

            return resolve(jobEntity as Job);
        });
    }

    private async _seedAppConfig(dto: Prisma.AppConfigCreateInput): Promise<AppConfig> {
        return new Promise(async (resolve, reject) => {
            if (!dto) {
                this.logger.debug('No app config to seed.');
                return reject('no app config to seed');
            }

            this.logger.debug(`Seeding app config.`);
            let entity: AppConfig | null = await this.prisma.appConfig.findFirst({
                where: {
                    Id: 1,
                },
            });

            if (!entity) {
                entity = await this.prisma.appConfig.create({
                    data: dto,
                });
            }

            return resolve(entity as AppConfig);
        });
    }

    private async _seedVirtualAirline(dto: Prisma.VirtualAirlineCreateInput): Promise<VirtualAirline> {
        return new Promise(async (resolve, reject) => {
            if (!dto) {
                this.logger.debug('No virtual airline to seed.');
                return reject('no virtual airline to seed');
            }

            this.logger.debug(`Seeding virtual airline ${dto.Name}.`);

            let entity: VirtualAirline | null = await this.prisma.virtualAirline.findFirst({
                where: {
                    Id: dto.Id,
                },
            });

            if (!entity) {
                entity = await this.prisma.virtualAirline.create({
                    data: dto,
                });

                await this.prisma.appConfig.update({
                    where: {
                        Id: 1,
                    },
                    data: {
                        VirtualAirlineInitiated: true,
                    },
                });

                this.logger.debug(`Virtual airline ${dto.Id} has been created.`);
            } else {
                this.logger.debug(`Virtual airline ${dto.Id} already exists in the database, skipping.`);
            }

            return resolve(entity as VirtualAirline);
        });
    }

    private async _seedDiscordMessageTemplate(dto: Prisma.DiscordMessageTemplateCreateInput): Promise<DiscordMessageTemplate> {
        return new Promise(async (resolve, reject) => {
            if (!dto) {
                this.logger.debug('No discord message template to seed.');
                return reject('no discord message template to seed');
            }

            this.logger.debug(`Seeding discord message template ${dto.Name}.`);
            let entity: DiscordMessageTemplate | null = await this.prisma.discordMessageTemplate.findFirst({
                where: {
                    Slug: dto.Slug,
                },
            });

            if (!entity) {
                entity = await this.prisma.discordMessageTemplate.create({
                    data: dto,
                });

                this.logger.debug(`Discord message template ${dto.Name} has been created.`);
            } else {
                this.logger.debug(`Discord message template ${dto.Name} already exists in the database, skipping.`);
            }

            return resolve(entity as DiscordMessageTemplate);
        });
    }
}

async function main() {
    const seeder = new SeederService(prisma);

    await seeder.run();
}

main().then(async () => {
    await prisma.$disconnect()
})
.catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
})