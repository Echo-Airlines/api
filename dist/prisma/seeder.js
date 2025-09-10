"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var SeederService_1;
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const logger_service_1 = require("../logger/logger.service");
const async_1 = require("async");
const SeederData_1 = require("./SeederData");
const hash_service_1 = require("../hash/hash.service");
const prisma_1 = require("../../prisma/generated/prisma/index.js");
const prisma = new prisma_1.PrismaClient();
let SeederService = SeederService_1 = class SeederService {
    logger = new logger_service_1.LoggerService(SeederService_1.name);
    prisma;
    constructor(_prisma) {
        this.prisma = _prisma;
        this.logger.setLogLevels(['error', 'warn', 'log']);
    }
    async run() {
        await this._seedPermissions(SeederData_1.default.permissions)
            .then(async (permissions) => {
            this.logger.debug(`${permissions.length} Permissions seeded.`);
        })
            .catch((err) => {
            this.logger.error('Error seeding permissions:', err);
        });
        await this._seedRoles(SeederData_1.default.roles)
            .then(async (roles) => {
            this.logger.debug(`${roles.length} Roles seeded.`);
            let users = await this._seedUsers(SeederData_1.default.users);
            this.logger.debug(`${users.length} Users seeded.`);
        })
            .catch((err) => {
            this.logger.error('Error seeding user roles:', err);
        });
        await this._seedWorlds(SeederData_1.default.worlds)
            .then(async (worlds) => {
            this.logger.debug(`${worlds.length} Worlds seeded.`);
        })
            .catch((err) => {
            this.logger.error('Error seeding worlds:', err);
        });
        await this._seedAircraftStatuses(SeederData_1.default.aircraftStatuses)
            .then(async (aircraftStatuses) => {
            this.logger.debug(`${aircraftStatuses.length} Aircraft statuses seeded.`);
        })
            .catch((err) => {
            this.logger.error('Error seeding aircraft statuses:', err);
        });
        await this._seedAircraftClasses(SeederData_1.default.aircraftClasses)
            .then(async (aircraftClasses) => {
            this.logger.debug(`${aircraftClasses.length} Aircraft classes seeded.`);
        })
            .catch((err) => {
            this.logger.error('Error seeding aircraft classes:', err);
        });
        await this._seedJobs(SeederData_1.default.jobs)
            .then(async (jobs) => {
            this.logger.debug(`${jobs.length} Jobs seeded.`);
        })
            .catch((err) => {
            this.logger.error('Error seeding jobs:', err);
        });
        await this._seedAppConfig(SeederData_1.default.appConfig)
            .then(async (appConfig) => {
            this.logger.debug('App config seeded.', appConfig);
        })
            .catch((err) => {
            this.logger.error('Error seeding app config:', err);
        });
        await this._seedLiveries(SeederData_1.default.liveries)
            .then(async (liveries) => {
            this.logger.debug(`${liveries.length} Liveries seeded.`);
        })
            .catch((err) => {
            this.logger.error('Error seeding liveries:', err);
        });
        if (SeederData_1.default.virtualAirline) {
            await this._seedVirtualAirline(SeederData_1.default.virtualAirline)
                .then(async (virtualAirline) => {
            })
                .catch((err) => {
                this.logger.error('Error seeding virtual airline:', err);
            });
        }
        await this._seedDiscordMessageTemplates(SeederData_1.default.discordMessageTemplates)
            .then(async (discordMessageTemplates) => {
            this.logger.debug(`${discordMessageTemplates.length} Discord message templates seeded.`);
        })
            .catch((err) => {
            this.logger.error('Error seeding discord message templates:', err);
        });
        this.logger.log('Seeding complete.');
    }
    async _seedPermissions(seedPermissions) {
        return new Promise(async (resolve, reject) => {
            if (!seedPermissions || seedPermissions.length === 0) {
                this.logger.debug('No permissions to seed.');
                return reject('no permissions to seed');
            }
            this.logger.debug(`There are ${seedPermissions.length} permissions to seed.`);
            const permissions = [];
            (0, async_1.eachOfSeries)(seedPermissions, async (createPermission, i) => {
                this.logger.debug(`Seeding permission ${i + 1} of ${seedPermissions.length}.`);
                const permission = await this._seedPermission(createPermission);
                permissions.push(permission);
                return permission;
            }, (err) => {
                if (err) {
                    this.logger.error('Error seeding user roles:', err);
                    return reject(err);
                }
                this.logger.debug('UserRole seeding complete.');
                return resolve(permissions);
            });
        });
    }
    async _seedRoles(userRoles) {
        return new Promise(async (resolve, reject) => {
            if (!userRoles || userRoles.length === 0) {
                this.logger.debug('No user roles to seed.');
                return reject('no user roles to seed');
            }
            this.logger.debug(`There are ${userRoles.length} user roles to seed.`);
            const roles = [];
            (0, async_1.eachOfSeries)(userRoles, async (userRole) => {
                const role = await this._seedRole(userRole);
                if (role) {
                    roles.push(role);
                }
                return role;
            }, (err) => {
                if (err) {
                    this.logger.error('Error seeding user roles:', err);
                    return reject(err);
                }
                this.logger.debug('UserRole seeding complete.');
                return resolve(roles);
            });
        });
    }
    async _seedUsers(seedUsers) {
        return new Promise(async (resolve, reject) => {
            if (!seedUsers || seedUsers.length === 0) {
                this.logger.debug('No users to seed.');
                return reject('no users to seed');
            }
            this.logger.debug(`There are ${seedUsers.length} Users to seed.`);
            const users = [];
            (0, async_1.eachOfSeries)(seedUsers, async (createUser, i) => {
                this.logger.debug(`Seeding user ${i + 1} of ${seedUsers.length}.`);
                const user = await this._seedUser(createUser);
                if (!user) {
                    this.logger.error('Error seeding user:', 'No user found.');
                    return reject('no user found');
                }
                users.push(user);
                return user;
            }, (err) => {
                if (err) {
                    this.logger.error('Error seeding users:', err);
                    return reject(err);
                }
                this.logger.debug('User seeding complete.');
                return resolve(users);
            });
        });
    }
    async _seedWorlds(seedWorlds) {
        return new Promise(async (resolve, reject) => {
            if (!seedWorlds || seedWorlds.length === 0) {
                this.logger.debug('No worlds to seed.');
                return reject('no worlds to seed');
            }
            this.logger.debug(`There are ${seedWorlds.length} worlds to seed.`);
            const worlds = [];
            (0, async_1.eachOfSeries)(seedWorlds, async (world) => {
                this.logger.debug(`Seeding world ${world.Name}.`);
                const worldEntity = await this._seedWorld(world);
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
    async _seedAircraftStatuses(seedAircraftStatuses) {
        return new Promise(async (resolve, reject) => {
            if (!seedAircraftStatuses || seedAircraftStatuses.length === 0) {
                this.logger.debug('No aircraft statuses to seed.');
                return reject('no aircraft statuses to seed');
            }
            this.logger.debug(`There are ${seedAircraftStatuses.length} aircraft statuses to seed.`);
            const aircraftStatuses = [];
            (0, async_1.eachOfSeries)(seedAircraftStatuses, async (aircraftStatus) => {
                this.logger.debug(`Seeding aircraft status ${aircraftStatus.Name}.`);
                const aircraftStatusEntity = await this._seedAircraftStatus(aircraftStatus);
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
    async _seedAircraftClasses(seedAircraftClasses) {
        return new Promise(async (resolve, reject) => {
            if (!seedAircraftClasses || seedAircraftClasses.length === 0) {
                this.logger.debug('No aircraft classes to seed.');
                return reject('no aircraft classes to seed');
            }
            this.logger.debug(`There are ${seedAircraftClasses.length} aircraft classes to seed.`);
            const aircraftClasses = [];
            (0, async_1.eachOfSeries)(seedAircraftClasses, async (aircraftClass) => {
                this.logger.debug(`Seeding aircraft class ${aircraftClass.Name}.`);
                const aircraftClassEntity = await this._seedAircraftClass(aircraftClass);
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
    async _seedJobs(seedJobs) {
        return new Promise(async (resolve, reject) => {
            if (!seedJobs || seedJobs.length === 0) {
                this.logger.debug('No jobs to seed.');
                return reject('no jobs to seed');
            }
            this.logger.debug(`There are ${seedJobs.length} jobs to seed.`);
            const jobs = [];
            (0, async_1.eachOfSeries)(seedJobs, async (job) => {
                this.logger.debug(`Seeding job ${job.Name}.`);
                const jobEntity = await this._seedJob(job);
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
    async _seedLiveries(seedLiveries) {
        return new Promise(async (resolve, reject) => {
            if (!seedLiveries || seedLiveries.length === 0) {
                this.logger.debug('No liveries to seed.');
                return reject('no liveries to seed');
            }
            this.logger.debug(`There are ${seedLiveries.length} liveries to seed.`);
            const liveries = [];
            (0, async_1.eachOfSeries)(seedLiveries, async (livery) => {
                this.logger.debug(`Seeding livery ${livery.Name}.`);
                const liveryEntity = await this._seedLivery(livery);
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
    async _seedDiscordMessageTemplates(seedDiscordMessageTemplates) {
        return new Promise(async (resolve, reject) => {
            if (!seedDiscordMessageTemplates || seedDiscordMessageTemplates.length === 0) {
                this.logger.debug('No discord message templates to seed.');
                return reject('no discord message templates to seed');
            }
            this.logger.debug(`There are ${seedDiscordMessageTemplates.length} discord message templates to seed.`);
            const discordMessageTemplates = [];
            (0, async_1.eachOfSeries)(seedDiscordMessageTemplates, async (discordMessageTemplate) => {
                this.logger.debug(`Seeding discord message template ${discordMessageTemplate.Name}.`);
                const discordMessageTemplateEntity = await this._seedDiscordMessageTemplate(discordMessageTemplate);
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
    async _seedPermission(createPermission) {
        return new Promise(async (resolve, reject) => {
            if (!createPermission) {
                this.logger.debug('No permission to seed.');
                return reject('no permission to seed');
            }
            this.logger.debug(`Seeding permission ${createPermission.Slug}.`);
            let permission = await this.prisma.permission.findFirst({
                where: {
                    Slug: createPermission.Slug,
                },
            });
            if (!permission) {
                permission = await this.prisma.permission.create({
                    data: createPermission,
                });
            }
            return resolve(permission);
        });
    }
    async _seedRole(userRoleDto) {
        this.logger.debug(`Checking if role '${userRoleDto.Slug}' exists in the database.`);
        let role = await this.prisma.role.findFirst({
            where: {
                Slug: userRoleDto.Slug,
            },
        });
        if (!role) {
            this.logger.debug(`Role '${userRoleDto.Slug}' does not exist in the database. Creating it now.`);
            role = await this.prisma.role.create({
                data: userRoleDto,
            });
        }
        this.logger.debug(`Role '${role?.Slug}' has been created.`);
        return role;
    }
    async _seedUser(user) {
        this.logger.debug(`Checking if user '${user.Username}' exists in the database.`);
        let dbUser = await this.prisma.user.findFirst({
            where: {
                Username: user.Username,
            },
        });
        if (!dbUser) {
            this.logger.debug(`User '${user.Username}' does not exist in the database. Creating it now.`);
            const hash = user.Password ? await new hash_service_1.HashService().hash(user.Password) : undefined;
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
                let roleSlugs = [];
                if (Array.isArray(rolesConnect)) {
                    roleSlugs = rolesConnect.map((role) => role.Slug).filter((slug) => !!slug);
                }
                else if (rolesConnect && typeof rolesConnect === 'object' && 'Slug' in rolesConnect) {
                    if (rolesConnect.Slug) {
                        roleSlugs = [rolesConnect.Slug];
                    }
                }
                if (roleSlugs.length > 0) {
                    rolesString = ` and roles ${roleSlugs.join(', ')}`;
                }
            }
            this.logger.log(`User '${dbUser?.Username}' has been created with password '${user.Password}'${rolesString}.`);
        }
        else {
            this.logger.debug(`User '${user.Username}' already exists in the database.`);
        }
        return dbUser;
    }
    async _seedAircraftStatus(dto) {
        return new Promise(async (resolve, reject) => {
            if (!dto) {
                this.logger.debug('No aircraft status to seed.');
                return reject('no aircraft status to seed');
            }
            this.logger.debug(`Seeding aircraft status ${dto.Name}.`);
            let aircraftStatusEntity = await this.prisma.aircraftStatus.findFirst({
                where: {
                    Name: dto.Name,
                },
            });
            if (!aircraftStatusEntity) {
                aircraftStatusEntity = await this.prisma.aircraftStatus.create({
                    data: dto,
                });
                this.logger.debug(`Aircraft status ${dto.Name} has been created.`);
            }
            else {
                this.logger.debug(`Aircraft status ${dto.Name} already exists in the database, skipping.`);
            }
            return resolve(aircraftStatusEntity);
        });
    }
    async _seedAircraftClass(dto) {
        return new Promise(async (resolve, reject) => {
            if (!dto) {
                this.logger.debug('No aircraft class to seed.');
                return reject('no aircraft class to seed');
            }
            this.logger.debug(`Seeding aircraft class ${dto.Name}.`);
            let aircraftClassEntity = await this.prisma.aircraftClass.findFirst({
                where: {
                    Name: dto.Name,
                },
            });
            if (!aircraftClassEntity) {
                aircraftClassEntity = await this.prisma.aircraftClass.create({
                    data: dto,
                });
                this.logger.debug(`Aircraft class ${dto.Name} has been created.`);
            }
            else {
                this.logger.debug(`Aircraft class ${dto.Name} already exists in the database, skipping.`);
            }
            return resolve(aircraftClassEntity);
        });
    }
    async _seedWorld(dto) {
        return new Promise(async (resolve, reject) => {
            if (!dto) {
                this.logger.debug('No world to seed.');
                return reject('no world to seed');
            }
            this.logger.debug(`Seeding world ${dto.Name}.`);
            let worldEntity = await this.prisma.world.findFirst({
                where: {
                    Slug: dto.Slug,
                },
            });
            if (!worldEntity) {
                worldEntity = await this.prisma.world.create({
                    data: dto,
                });
                this.logger.debug(`World ${dto.Name} has been created.`);
            }
            else {
                this.logger.debug(`World ${dto.Name} already exists in the database, skipping.`);
            }
            return resolve(worldEntity);
        });
    }
    async _seedLivery(dto) {
        return new Promise(async (resolve, reject) => {
            if (!dto) {
                this.logger.debug('No livery to seed.');
                return reject('no livery to seed');
            }
            this.logger.debug(`Seeding livery ${dto.Name}.`);
            let liveryEntity = await this.prisma.livery.findFirst({
                where: {
                    Name: dto.Name,
                },
            });
            if (!liveryEntity) {
                liveryEntity = await this.prisma.livery.create({
                    data: dto,
                });
                this.logger.debug(`Livery ${dto.Name} has been created.`);
            }
            else {
                this.logger.debug(`Livery ${dto.Name} already exists in the database, skipping.`);
            }
            return resolve(liveryEntity);
        });
    }
    async _seedJob(dto) {
        return new Promise(async (resolve, reject) => {
            if (!dto) {
                this.logger.debug('No job to seed.');
                return reject('no job to seed');
            }
            this.logger.debug(`Seeding job ${dto.Name}.`);
            let jobEntity = await this.prisma.job.findFirst({
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
    async _seedAppConfig(dto) {
        return new Promise(async (resolve, reject) => {
            if (!dto) {
                this.logger.debug('No app config to seed.');
                return reject('no app config to seed');
            }
            this.logger.debug(`Seeding app config.`);
            let entity = await this.prisma.appConfig.findFirst({
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
    async _seedVirtualAirline(dto) {
        return new Promise(async (resolve, reject) => {
            if (!dto) {
                this.logger.debug('No virtual airline to seed.');
                return reject('no virtual airline to seed');
            }
            this.logger.debug(`Seeding virtual airline ${dto.Name}.`);
            let entity = await this.prisma.virtualAirline.findFirst({
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
            }
            else {
                this.logger.debug(`Virtual airline ${dto.Id} already exists in the database, skipping.`);
            }
            return resolve(entity);
        });
    }
    async _seedDiscordMessageTemplate(dto) {
        return new Promise(async (resolve, reject) => {
            if (!dto) {
                this.logger.debug('No discord message template to seed.');
                return reject('no discord message template to seed');
            }
            this.logger.debug(`Seeding discord message template ${dto.Name}.`);
            let entity = await this.prisma.discordMessageTemplate.findFirst({
                where: {
                    Slug: dto.Slug,
                },
            });
            if (!entity) {
                entity = await this.prisma.discordMessageTemplate.create({
                    data: dto,
                });
                this.logger.debug(`Discord message template ${dto.Name} has been created.`);
            }
            else {
                this.logger.debug(`Discord message template ${dto.Name} already exists in the database, skipping.`);
            }
            return resolve(entity);
        });
    }
};
SeederService = SeederService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_1.PrismaClient])
], SeederService);
async function main() {
    const seeder = new SeederService(prisma);
    await seeder.run();
}
main().then(async () => {
    await prisma.$disconnect();
})
    .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
});
//# sourceMappingURL=seeder.js.map