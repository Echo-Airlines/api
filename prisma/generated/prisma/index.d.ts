
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model AppConfig
 * 
 */
export type AppConfig = $Result.DefaultSelection<Prisma.$AppConfigPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model UserPrivacySettings
 * 
 */
export type UserPrivacySettings = $Result.DefaultSelection<Prisma.$UserPrivacySettingsPayload>
/**
 * Model Role
 * 
 */
export type Role = $Result.DefaultSelection<Prisma.$RolePayload>
/**
 * Model Permission
 * 
 */
export type Permission = $Result.DefaultSelection<Prisma.$PermissionPayload>
/**
 * Model Livery
 * 
 */
export type Livery = $Result.DefaultSelection<Prisma.$LiveryPayload>
/**
 * Model VirtualAirline
 * 
 */
export type VirtualAirline = $Result.DefaultSelection<Prisma.$VirtualAirlinePayload>
/**
 * Model VirtualAirlineRole
 * 
 */
export type VirtualAirlineRole = $Result.DefaultSelection<Prisma.$VirtualAirlineRolePayload>
/**
 * Model World
 * 
 */
export type World = $Result.DefaultSelection<Prisma.$WorldPayload>
/**
 * Model Member
 * 
 */
export type Member = $Result.DefaultSelection<Prisma.$MemberPayload>
/**
 * Model Job
 * 
 */
export type Job = $Result.DefaultSelection<Prisma.$JobPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const JobType: {
  VIRTUAL_AIRLINE_SYNC: 'VIRTUAL_AIRLINE_SYNC',
  VIRTUAL_AIRLINE_MEMBERS_SYNC: 'VIRTUAL_AIRLINE_MEMBERS_SYNC'
};

export type JobType = (typeof JobType)[keyof typeof JobType]


export const JobStatus: {
  INACTIVE: 'INACTIVE',
  ACTIVE: 'ACTIVE',
  RUNNING: 'RUNNING',
  COMPLETED: 'COMPLETED',
  FAILED: 'FAILED'
};

export type JobStatus = (typeof JobStatus)[keyof typeof JobStatus]


export const CronExpression: {
  EVERY_30_SECONDS: 'EVERY_30_SECONDS',
  EVERY_MINUTE: 'EVERY_MINUTE',
  EVERY_5_MINUTES: 'EVERY_5_MINUTES',
  EVERY_10_MINUTES: 'EVERY_10_MINUTES',
  EVERY_30_MINUTES: 'EVERY_30_MINUTES',
  EVERY_HOUR: 'EVERY_HOUR',
  EVERY_6_HOURS: 'EVERY_6_HOURS',
  EVERY_12_HOURS: 'EVERY_12_HOURS',
  EVERY_DAY: 'EVERY_DAY',
  EVERY_WEEK: 'EVERY_WEEK',
  EVERY_MONTH: 'EVERY_MONTH'
};

export type CronExpression = (typeof CronExpression)[keyof typeof CronExpression]

}

export type JobType = $Enums.JobType

export const JobType: typeof $Enums.JobType

export type JobStatus = $Enums.JobStatus

export const JobStatus: typeof $Enums.JobStatus

export type CronExpression = $Enums.CronExpression

export const CronExpression: typeof $Enums.CronExpression

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more AppConfigs
 * const appConfigs = await prisma.appConfig.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more AppConfigs
   * const appConfigs = await prisma.appConfig.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.appConfig`: Exposes CRUD operations for the **AppConfig** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AppConfigs
    * const appConfigs = await prisma.appConfig.findMany()
    * ```
    */
  get appConfig(): Prisma.AppConfigDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userPrivacySettings`: Exposes CRUD operations for the **UserPrivacySettings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserPrivacySettings
    * const userPrivacySettings = await prisma.userPrivacySettings.findMany()
    * ```
    */
  get userPrivacySettings(): Prisma.UserPrivacySettingsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.role`: Exposes CRUD operations for the **Role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.role.findMany()
    * ```
    */
  get role(): Prisma.RoleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.permission`: Exposes CRUD operations for the **Permission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Permissions
    * const permissions = await prisma.permission.findMany()
    * ```
    */
  get permission(): Prisma.PermissionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.livery`: Exposes CRUD operations for the **Livery** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Liveries
    * const liveries = await prisma.livery.findMany()
    * ```
    */
  get livery(): Prisma.LiveryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.virtualAirline`: Exposes CRUD operations for the **VirtualAirline** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VirtualAirlines
    * const virtualAirlines = await prisma.virtualAirline.findMany()
    * ```
    */
  get virtualAirline(): Prisma.VirtualAirlineDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.virtualAirlineRole`: Exposes CRUD operations for the **VirtualAirlineRole** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VirtualAirlineRoles
    * const virtualAirlineRoles = await prisma.virtualAirlineRole.findMany()
    * ```
    */
  get virtualAirlineRole(): Prisma.VirtualAirlineRoleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.world`: Exposes CRUD operations for the **World** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Worlds
    * const worlds = await prisma.world.findMany()
    * ```
    */
  get world(): Prisma.WorldDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.member`: Exposes CRUD operations for the **Member** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Members
    * const members = await prisma.member.findMany()
    * ```
    */
  get member(): Prisma.MemberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.job`: Exposes CRUD operations for the **Job** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Jobs
    * const jobs = await prisma.job.findMany()
    * ```
    */
  get job(): Prisma.JobDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.12.0
   * Query Engine version: 8047c96bbd92db98a2abc7c9323ce77c02c89dbc
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    AppConfig: 'AppConfig',
    User: 'User',
    UserPrivacySettings: 'UserPrivacySettings',
    Role: 'Role',
    Permission: 'Permission',
    Livery: 'Livery',
    VirtualAirline: 'VirtualAirline',
    VirtualAirlineRole: 'VirtualAirlineRole',
    World: 'World',
    Member: 'Member',
    Job: 'Job'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "appConfig" | "user" | "userPrivacySettings" | "role" | "permission" | "livery" | "virtualAirline" | "virtualAirlineRole" | "world" | "member" | "job"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      AppConfig: {
        payload: Prisma.$AppConfigPayload<ExtArgs>
        fields: Prisma.AppConfigFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AppConfigFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppConfigPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AppConfigFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppConfigPayload>
          }
          findFirst: {
            args: Prisma.AppConfigFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppConfigPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AppConfigFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppConfigPayload>
          }
          findMany: {
            args: Prisma.AppConfigFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppConfigPayload>[]
          }
          create: {
            args: Prisma.AppConfigCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppConfigPayload>
          }
          createMany: {
            args: Prisma.AppConfigCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AppConfigCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppConfigPayload>[]
          }
          delete: {
            args: Prisma.AppConfigDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppConfigPayload>
          }
          update: {
            args: Prisma.AppConfigUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppConfigPayload>
          }
          deleteMany: {
            args: Prisma.AppConfigDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AppConfigUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AppConfigUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppConfigPayload>[]
          }
          upsert: {
            args: Prisma.AppConfigUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppConfigPayload>
          }
          aggregate: {
            args: Prisma.AppConfigAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAppConfig>
          }
          groupBy: {
            args: Prisma.AppConfigGroupByArgs<ExtArgs>
            result: $Utils.Optional<AppConfigGroupByOutputType>[]
          }
          count: {
            args: Prisma.AppConfigCountArgs<ExtArgs>
            result: $Utils.Optional<AppConfigCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      UserPrivacySettings: {
        payload: Prisma.$UserPrivacySettingsPayload<ExtArgs>
        fields: Prisma.UserPrivacySettingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserPrivacySettingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPrivacySettingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserPrivacySettingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPrivacySettingsPayload>
          }
          findFirst: {
            args: Prisma.UserPrivacySettingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPrivacySettingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserPrivacySettingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPrivacySettingsPayload>
          }
          findMany: {
            args: Prisma.UserPrivacySettingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPrivacySettingsPayload>[]
          }
          create: {
            args: Prisma.UserPrivacySettingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPrivacySettingsPayload>
          }
          createMany: {
            args: Prisma.UserPrivacySettingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserPrivacySettingsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPrivacySettingsPayload>[]
          }
          delete: {
            args: Prisma.UserPrivacySettingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPrivacySettingsPayload>
          }
          update: {
            args: Prisma.UserPrivacySettingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPrivacySettingsPayload>
          }
          deleteMany: {
            args: Prisma.UserPrivacySettingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserPrivacySettingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserPrivacySettingsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPrivacySettingsPayload>[]
          }
          upsert: {
            args: Prisma.UserPrivacySettingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPrivacySettingsPayload>
          }
          aggregate: {
            args: Prisma.UserPrivacySettingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserPrivacySettings>
          }
          groupBy: {
            args: Prisma.UserPrivacySettingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserPrivacySettingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserPrivacySettingsCountArgs<ExtArgs>
            result: $Utils.Optional<UserPrivacySettingsCountAggregateOutputType> | number
          }
        }
      }
      Role: {
        payload: Prisma.$RolePayload<ExtArgs>
        fields: Prisma.RoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findFirst: {
            args: Prisma.RoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findMany: {
            args: Prisma.RoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          create: {
            args: Prisma.RoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          createMany: {
            args: Prisma.RoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          delete: {
            args: Prisma.RoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          update: {
            args: Prisma.RoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          deleteMany: {
            args: Prisma.RoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          upsert: {
            args: Prisma.RoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          aggregate: {
            args: Prisma.RoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRole>
          }
          groupBy: {
            args: Prisma.RoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoleCountArgs<ExtArgs>
            result: $Utils.Optional<RoleCountAggregateOutputType> | number
          }
        }
      }
      Permission: {
        payload: Prisma.$PermissionPayload<ExtArgs>
        fields: Prisma.PermissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PermissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PermissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          findFirst: {
            args: Prisma.PermissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PermissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          findMany: {
            args: Prisma.PermissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>[]
          }
          create: {
            args: Prisma.PermissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          createMany: {
            args: Prisma.PermissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PermissionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>[]
          }
          delete: {
            args: Prisma.PermissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          update: {
            args: Prisma.PermissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          deleteMany: {
            args: Prisma.PermissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PermissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PermissionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>[]
          }
          upsert: {
            args: Prisma.PermissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          aggregate: {
            args: Prisma.PermissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePermission>
          }
          groupBy: {
            args: Prisma.PermissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<PermissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.PermissionCountArgs<ExtArgs>
            result: $Utils.Optional<PermissionCountAggregateOutputType> | number
          }
        }
      }
      Livery: {
        payload: Prisma.$LiveryPayload<ExtArgs>
        fields: Prisma.LiveryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LiveryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiveryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LiveryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiveryPayload>
          }
          findFirst: {
            args: Prisma.LiveryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiveryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LiveryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiveryPayload>
          }
          findMany: {
            args: Prisma.LiveryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiveryPayload>[]
          }
          create: {
            args: Prisma.LiveryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiveryPayload>
          }
          createMany: {
            args: Prisma.LiveryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LiveryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiveryPayload>[]
          }
          delete: {
            args: Prisma.LiveryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiveryPayload>
          }
          update: {
            args: Prisma.LiveryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiveryPayload>
          }
          deleteMany: {
            args: Prisma.LiveryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LiveryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LiveryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiveryPayload>[]
          }
          upsert: {
            args: Prisma.LiveryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiveryPayload>
          }
          aggregate: {
            args: Prisma.LiveryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLivery>
          }
          groupBy: {
            args: Prisma.LiveryGroupByArgs<ExtArgs>
            result: $Utils.Optional<LiveryGroupByOutputType>[]
          }
          count: {
            args: Prisma.LiveryCountArgs<ExtArgs>
            result: $Utils.Optional<LiveryCountAggregateOutputType> | number
          }
        }
      }
      VirtualAirline: {
        payload: Prisma.$VirtualAirlinePayload<ExtArgs>
        fields: Prisma.VirtualAirlineFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VirtualAirlineFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VirtualAirlinePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VirtualAirlineFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VirtualAirlinePayload>
          }
          findFirst: {
            args: Prisma.VirtualAirlineFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VirtualAirlinePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VirtualAirlineFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VirtualAirlinePayload>
          }
          findMany: {
            args: Prisma.VirtualAirlineFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VirtualAirlinePayload>[]
          }
          create: {
            args: Prisma.VirtualAirlineCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VirtualAirlinePayload>
          }
          createMany: {
            args: Prisma.VirtualAirlineCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VirtualAirlineCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VirtualAirlinePayload>[]
          }
          delete: {
            args: Prisma.VirtualAirlineDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VirtualAirlinePayload>
          }
          update: {
            args: Prisma.VirtualAirlineUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VirtualAirlinePayload>
          }
          deleteMany: {
            args: Prisma.VirtualAirlineDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VirtualAirlineUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VirtualAirlineUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VirtualAirlinePayload>[]
          }
          upsert: {
            args: Prisma.VirtualAirlineUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VirtualAirlinePayload>
          }
          aggregate: {
            args: Prisma.VirtualAirlineAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVirtualAirline>
          }
          groupBy: {
            args: Prisma.VirtualAirlineGroupByArgs<ExtArgs>
            result: $Utils.Optional<VirtualAirlineGroupByOutputType>[]
          }
          count: {
            args: Prisma.VirtualAirlineCountArgs<ExtArgs>
            result: $Utils.Optional<VirtualAirlineCountAggregateOutputType> | number
          }
        }
      }
      VirtualAirlineRole: {
        payload: Prisma.$VirtualAirlineRolePayload<ExtArgs>
        fields: Prisma.VirtualAirlineRoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VirtualAirlineRoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VirtualAirlineRolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VirtualAirlineRoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VirtualAirlineRolePayload>
          }
          findFirst: {
            args: Prisma.VirtualAirlineRoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VirtualAirlineRolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VirtualAirlineRoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VirtualAirlineRolePayload>
          }
          findMany: {
            args: Prisma.VirtualAirlineRoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VirtualAirlineRolePayload>[]
          }
          create: {
            args: Prisma.VirtualAirlineRoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VirtualAirlineRolePayload>
          }
          createMany: {
            args: Prisma.VirtualAirlineRoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VirtualAirlineRoleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VirtualAirlineRolePayload>[]
          }
          delete: {
            args: Prisma.VirtualAirlineRoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VirtualAirlineRolePayload>
          }
          update: {
            args: Prisma.VirtualAirlineRoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VirtualAirlineRolePayload>
          }
          deleteMany: {
            args: Prisma.VirtualAirlineRoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VirtualAirlineRoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VirtualAirlineRoleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VirtualAirlineRolePayload>[]
          }
          upsert: {
            args: Prisma.VirtualAirlineRoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VirtualAirlineRolePayload>
          }
          aggregate: {
            args: Prisma.VirtualAirlineRoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVirtualAirlineRole>
          }
          groupBy: {
            args: Prisma.VirtualAirlineRoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<VirtualAirlineRoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.VirtualAirlineRoleCountArgs<ExtArgs>
            result: $Utils.Optional<VirtualAirlineRoleCountAggregateOutputType> | number
          }
        }
      }
      World: {
        payload: Prisma.$WorldPayload<ExtArgs>
        fields: Prisma.WorldFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorldFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorldPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorldFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorldPayload>
          }
          findFirst: {
            args: Prisma.WorldFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorldPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorldFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorldPayload>
          }
          findMany: {
            args: Prisma.WorldFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorldPayload>[]
          }
          create: {
            args: Prisma.WorldCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorldPayload>
          }
          createMany: {
            args: Prisma.WorldCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorldCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorldPayload>[]
          }
          delete: {
            args: Prisma.WorldDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorldPayload>
          }
          update: {
            args: Prisma.WorldUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorldPayload>
          }
          deleteMany: {
            args: Prisma.WorldDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorldUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorldUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorldPayload>[]
          }
          upsert: {
            args: Prisma.WorldUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorldPayload>
          }
          aggregate: {
            args: Prisma.WorldAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorld>
          }
          groupBy: {
            args: Prisma.WorldGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorldGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorldCountArgs<ExtArgs>
            result: $Utils.Optional<WorldCountAggregateOutputType> | number
          }
        }
      }
      Member: {
        payload: Prisma.$MemberPayload<ExtArgs>
        fields: Prisma.MemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MemberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MemberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          findFirst: {
            args: Prisma.MemberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MemberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          findMany: {
            args: Prisma.MemberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>[]
          }
          create: {
            args: Prisma.MemberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          createMany: {
            args: Prisma.MemberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MemberCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>[]
          }
          delete: {
            args: Prisma.MemberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          update: {
            args: Prisma.MemberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          deleteMany: {
            args: Prisma.MemberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MemberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MemberUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>[]
          }
          upsert: {
            args: Prisma.MemberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          aggregate: {
            args: Prisma.MemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMember>
          }
          groupBy: {
            args: Prisma.MemberGroupByArgs<ExtArgs>
            result: $Utils.Optional<MemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.MemberCountArgs<ExtArgs>
            result: $Utils.Optional<MemberCountAggregateOutputType> | number
          }
        }
      }
      Job: {
        payload: Prisma.$JobPayload<ExtArgs>
        fields: Prisma.JobFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JobFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JobFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>
          }
          findFirst: {
            args: Prisma.JobFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JobFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>
          }
          findMany: {
            args: Prisma.JobFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>[]
          }
          create: {
            args: Prisma.JobCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>
          }
          createMany: {
            args: Prisma.JobCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.JobCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>[]
          }
          delete: {
            args: Prisma.JobDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>
          }
          update: {
            args: Prisma.JobUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>
          }
          deleteMany: {
            args: Prisma.JobDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JobUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.JobUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>[]
          }
          upsert: {
            args: Prisma.JobUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>
          }
          aggregate: {
            args: Prisma.JobAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJob>
          }
          groupBy: {
            args: Prisma.JobGroupByArgs<ExtArgs>
            result: $Utils.Optional<JobGroupByOutputType>[]
          }
          count: {
            args: Prisma.JobCountArgs<ExtArgs>
            result: $Utils.Optional<JobCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    appConfig?: AppConfigOmit
    user?: UserOmit
    userPrivacySettings?: UserPrivacySettingsOmit
    role?: RoleOmit
    permission?: PermissionOmit
    livery?: LiveryOmit
    virtualAirline?: VirtualAirlineOmit
    virtualAirlineRole?: VirtualAirlineRoleOmit
    world?: WorldOmit
    member?: MemberOmit
    job?: JobOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    Roles: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Roles?: boolean | UserCountOutputTypeCountRolesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleWhereInput
  }


  /**
   * Count Type RoleCountOutputType
   */

  export type RoleCountOutputType = {
    Permissions: number
    Users: number
  }

  export type RoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Permissions?: boolean | RoleCountOutputTypeCountPermissionsArgs
    Users?: boolean | RoleCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleCountOutputType
     */
    select?: RoleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountPermissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PermissionWhereInput
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type PermissionCountOutputType
   */

  export type PermissionCountOutputType = {
    Roles: number
  }

  export type PermissionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Roles?: boolean | PermissionCountOutputTypeCountRolesArgs
  }

  // Custom InputTypes
  /**
   * PermissionCountOutputType without action
   */
  export type PermissionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionCountOutputType
     */
    select?: PermissionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PermissionCountOutputType without action
   */
  export type PermissionCountOutputTypeCountRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleWhereInput
  }


  /**
   * Count Type VirtualAirlineCountOutputType
   */

  export type VirtualAirlineCountOutputType = {
    VARoles: number
    Members: number
  }

  export type VirtualAirlineCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    VARoles?: boolean | VirtualAirlineCountOutputTypeCountVARolesArgs
    Members?: boolean | VirtualAirlineCountOutputTypeCountMembersArgs
  }

  // Custom InputTypes
  /**
   * VirtualAirlineCountOutputType without action
   */
  export type VirtualAirlineCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VirtualAirlineCountOutputType
     */
    select?: VirtualAirlineCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VirtualAirlineCountOutputType without action
   */
  export type VirtualAirlineCountOutputTypeCountVARolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VirtualAirlineRoleWhereInput
  }

  /**
   * VirtualAirlineCountOutputType without action
   */
  export type VirtualAirlineCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MemberWhereInput
  }


  /**
   * Count Type VirtualAirlineRoleCountOutputType
   */

  export type VirtualAirlineRoleCountOutputType = {
    Members: number
  }

  export type VirtualAirlineRoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Members?: boolean | VirtualAirlineRoleCountOutputTypeCountMembersArgs
  }

  // Custom InputTypes
  /**
   * VirtualAirlineRoleCountOutputType without action
   */
  export type VirtualAirlineRoleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VirtualAirlineRoleCountOutputType
     */
    select?: VirtualAirlineRoleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VirtualAirlineRoleCountOutputType without action
   */
  export type VirtualAirlineRoleCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MemberWhereInput
  }


  /**
   * Count Type WorldCountOutputType
   */

  export type WorldCountOutputType = {
    VirtualAirlines: number
  }

  export type WorldCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    VirtualAirlines?: boolean | WorldCountOutputTypeCountVirtualAirlinesArgs
  }

  // Custom InputTypes
  /**
   * WorldCountOutputType without action
   */
  export type WorldCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorldCountOutputType
     */
    select?: WorldCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WorldCountOutputType without action
   */
  export type WorldCountOutputTypeCountVirtualAirlinesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VirtualAirlineWhereInput
  }


  /**
   * Models
   */

  /**
   * Model AppConfig
   */

  export type AggregateAppConfig = {
    _count: AppConfigCountAggregateOutputType | null
    _avg: AppConfigAvgAggregateOutputType | null
    _sum: AppConfigSumAggregateOutputType | null
    _min: AppConfigMinAggregateOutputType | null
    _max: AppConfigMaxAggregateOutputType | null
  }

  export type AppConfigAvgAggregateOutputType = {
    Id: number | null
  }

  export type AppConfigSumAggregateOutputType = {
    Id: number | null
  }

  export type AppConfigMinAggregateOutputType = {
    Id: number | null
    OnAirSyncEnabled: boolean | null
    OnAirVASyncEnabled: boolean | null
    OnAirVAMembersSyncEnabled: boolean | null
    OnAirCompanySyncEnabled: boolean | null
    DiscordServerInviteLink: string | null
    DiscordServerInviteLinkEnabled: boolean | null
    AcceptingNewMembers: boolean | null
    DiscordAuthEnabled: boolean | null
    LocalAuthEnabled: boolean | null
    VirtualAirlineInitiated: boolean | null
    CreatedAt: Date | null
    UpdatedAt: Date | null
  }

  export type AppConfigMaxAggregateOutputType = {
    Id: number | null
    OnAirSyncEnabled: boolean | null
    OnAirVASyncEnabled: boolean | null
    OnAirVAMembersSyncEnabled: boolean | null
    OnAirCompanySyncEnabled: boolean | null
    DiscordServerInviteLink: string | null
    DiscordServerInviteLinkEnabled: boolean | null
    AcceptingNewMembers: boolean | null
    DiscordAuthEnabled: boolean | null
    LocalAuthEnabled: boolean | null
    VirtualAirlineInitiated: boolean | null
    CreatedAt: Date | null
    UpdatedAt: Date | null
  }

  export type AppConfigCountAggregateOutputType = {
    Id: number
    OnAirSyncEnabled: number
    OnAirVASyncEnabled: number
    OnAirVAMembersSyncEnabled: number
    OnAirCompanySyncEnabled: number
    DiscordServerInviteLink: number
    DiscordServerInviteLinkEnabled: number
    AcceptingNewMembers: number
    DiscordAuthEnabled: number
    LocalAuthEnabled: number
    VirtualAirlineInitiated: number
    CreatedAt: number
    UpdatedAt: number
    _all: number
  }


  export type AppConfigAvgAggregateInputType = {
    Id?: true
  }

  export type AppConfigSumAggregateInputType = {
    Id?: true
  }

  export type AppConfigMinAggregateInputType = {
    Id?: true
    OnAirSyncEnabled?: true
    OnAirVASyncEnabled?: true
    OnAirVAMembersSyncEnabled?: true
    OnAirCompanySyncEnabled?: true
    DiscordServerInviteLink?: true
    DiscordServerInviteLinkEnabled?: true
    AcceptingNewMembers?: true
    DiscordAuthEnabled?: true
    LocalAuthEnabled?: true
    VirtualAirlineInitiated?: true
    CreatedAt?: true
    UpdatedAt?: true
  }

  export type AppConfigMaxAggregateInputType = {
    Id?: true
    OnAirSyncEnabled?: true
    OnAirVASyncEnabled?: true
    OnAirVAMembersSyncEnabled?: true
    OnAirCompanySyncEnabled?: true
    DiscordServerInviteLink?: true
    DiscordServerInviteLinkEnabled?: true
    AcceptingNewMembers?: true
    DiscordAuthEnabled?: true
    LocalAuthEnabled?: true
    VirtualAirlineInitiated?: true
    CreatedAt?: true
    UpdatedAt?: true
  }

  export type AppConfigCountAggregateInputType = {
    Id?: true
    OnAirSyncEnabled?: true
    OnAirVASyncEnabled?: true
    OnAirVAMembersSyncEnabled?: true
    OnAirCompanySyncEnabled?: true
    DiscordServerInviteLink?: true
    DiscordServerInviteLinkEnabled?: true
    AcceptingNewMembers?: true
    DiscordAuthEnabled?: true
    LocalAuthEnabled?: true
    VirtualAirlineInitiated?: true
    CreatedAt?: true
    UpdatedAt?: true
    _all?: true
  }

  export type AppConfigAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AppConfig to aggregate.
     */
    where?: AppConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppConfigs to fetch.
     */
    orderBy?: AppConfigOrderByWithRelationInput | AppConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AppConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AppConfigs
    **/
    _count?: true | AppConfigCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AppConfigAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AppConfigSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AppConfigMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AppConfigMaxAggregateInputType
  }

  export type GetAppConfigAggregateType<T extends AppConfigAggregateArgs> = {
        [P in keyof T & keyof AggregateAppConfig]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAppConfig[P]>
      : GetScalarType<T[P], AggregateAppConfig[P]>
  }




  export type AppConfigGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppConfigWhereInput
    orderBy?: AppConfigOrderByWithAggregationInput | AppConfigOrderByWithAggregationInput[]
    by: AppConfigScalarFieldEnum[] | AppConfigScalarFieldEnum
    having?: AppConfigScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AppConfigCountAggregateInputType | true
    _avg?: AppConfigAvgAggregateInputType
    _sum?: AppConfigSumAggregateInputType
    _min?: AppConfigMinAggregateInputType
    _max?: AppConfigMaxAggregateInputType
  }

  export type AppConfigGroupByOutputType = {
    Id: number
    OnAirSyncEnabled: boolean
    OnAirVASyncEnabled: boolean
    OnAirVAMembersSyncEnabled: boolean
    OnAirCompanySyncEnabled: boolean
    DiscordServerInviteLink: string | null
    DiscordServerInviteLinkEnabled: boolean
    AcceptingNewMembers: boolean
    DiscordAuthEnabled: boolean
    LocalAuthEnabled: boolean
    VirtualAirlineInitiated: boolean
    CreatedAt: Date
    UpdatedAt: Date
    _count: AppConfigCountAggregateOutputType | null
    _avg: AppConfigAvgAggregateOutputType | null
    _sum: AppConfigSumAggregateOutputType | null
    _min: AppConfigMinAggregateOutputType | null
    _max: AppConfigMaxAggregateOutputType | null
  }

  type GetAppConfigGroupByPayload<T extends AppConfigGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AppConfigGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AppConfigGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AppConfigGroupByOutputType[P]>
            : GetScalarType<T[P], AppConfigGroupByOutputType[P]>
        }
      >
    >


  export type AppConfigSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    OnAirSyncEnabled?: boolean
    OnAirVASyncEnabled?: boolean
    OnAirVAMembersSyncEnabled?: boolean
    OnAirCompanySyncEnabled?: boolean
    DiscordServerInviteLink?: boolean
    DiscordServerInviteLinkEnabled?: boolean
    AcceptingNewMembers?: boolean
    DiscordAuthEnabled?: boolean
    LocalAuthEnabled?: boolean
    VirtualAirlineInitiated?: boolean
    CreatedAt?: boolean
    UpdatedAt?: boolean
  }, ExtArgs["result"]["appConfig"]>

  export type AppConfigSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    OnAirSyncEnabled?: boolean
    OnAirVASyncEnabled?: boolean
    OnAirVAMembersSyncEnabled?: boolean
    OnAirCompanySyncEnabled?: boolean
    DiscordServerInviteLink?: boolean
    DiscordServerInviteLinkEnabled?: boolean
    AcceptingNewMembers?: boolean
    DiscordAuthEnabled?: boolean
    LocalAuthEnabled?: boolean
    VirtualAirlineInitiated?: boolean
    CreatedAt?: boolean
    UpdatedAt?: boolean
  }, ExtArgs["result"]["appConfig"]>

  export type AppConfigSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    OnAirSyncEnabled?: boolean
    OnAirVASyncEnabled?: boolean
    OnAirVAMembersSyncEnabled?: boolean
    OnAirCompanySyncEnabled?: boolean
    DiscordServerInviteLink?: boolean
    DiscordServerInviteLinkEnabled?: boolean
    AcceptingNewMembers?: boolean
    DiscordAuthEnabled?: boolean
    LocalAuthEnabled?: boolean
    VirtualAirlineInitiated?: boolean
    CreatedAt?: boolean
    UpdatedAt?: boolean
  }, ExtArgs["result"]["appConfig"]>

  export type AppConfigSelectScalar = {
    Id?: boolean
    OnAirSyncEnabled?: boolean
    OnAirVASyncEnabled?: boolean
    OnAirVAMembersSyncEnabled?: boolean
    OnAirCompanySyncEnabled?: boolean
    DiscordServerInviteLink?: boolean
    DiscordServerInviteLinkEnabled?: boolean
    AcceptingNewMembers?: boolean
    DiscordAuthEnabled?: boolean
    LocalAuthEnabled?: boolean
    VirtualAirlineInitiated?: boolean
    CreatedAt?: boolean
    UpdatedAt?: boolean
  }

  export type AppConfigOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Id" | "OnAirSyncEnabled" | "OnAirVASyncEnabled" | "OnAirVAMembersSyncEnabled" | "OnAirCompanySyncEnabled" | "DiscordServerInviteLink" | "DiscordServerInviteLinkEnabled" | "AcceptingNewMembers" | "DiscordAuthEnabled" | "LocalAuthEnabled" | "VirtualAirlineInitiated" | "CreatedAt" | "UpdatedAt", ExtArgs["result"]["appConfig"]>

  export type $AppConfigPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AppConfig"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      Id: number
      OnAirSyncEnabled: boolean
      OnAirVASyncEnabled: boolean
      OnAirVAMembersSyncEnabled: boolean
      OnAirCompanySyncEnabled: boolean
      DiscordServerInviteLink: string | null
      DiscordServerInviteLinkEnabled: boolean
      AcceptingNewMembers: boolean
      DiscordAuthEnabled: boolean
      LocalAuthEnabled: boolean
      VirtualAirlineInitiated: boolean
      CreatedAt: Date
      UpdatedAt: Date
    }, ExtArgs["result"]["appConfig"]>
    composites: {}
  }

  type AppConfigGetPayload<S extends boolean | null | undefined | AppConfigDefaultArgs> = $Result.GetResult<Prisma.$AppConfigPayload, S>

  type AppConfigCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AppConfigFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AppConfigCountAggregateInputType | true
    }

  export interface AppConfigDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AppConfig'], meta: { name: 'AppConfig' } }
    /**
     * Find zero or one AppConfig that matches the filter.
     * @param {AppConfigFindUniqueArgs} args - Arguments to find a AppConfig
     * @example
     * // Get one AppConfig
     * const appConfig = await prisma.appConfig.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AppConfigFindUniqueArgs>(args: SelectSubset<T, AppConfigFindUniqueArgs<ExtArgs>>): Prisma__AppConfigClient<$Result.GetResult<Prisma.$AppConfigPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AppConfig that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AppConfigFindUniqueOrThrowArgs} args - Arguments to find a AppConfig
     * @example
     * // Get one AppConfig
     * const appConfig = await prisma.appConfig.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AppConfigFindUniqueOrThrowArgs>(args: SelectSubset<T, AppConfigFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AppConfigClient<$Result.GetResult<Prisma.$AppConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AppConfig that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppConfigFindFirstArgs} args - Arguments to find a AppConfig
     * @example
     * // Get one AppConfig
     * const appConfig = await prisma.appConfig.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AppConfigFindFirstArgs>(args?: SelectSubset<T, AppConfigFindFirstArgs<ExtArgs>>): Prisma__AppConfigClient<$Result.GetResult<Prisma.$AppConfigPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AppConfig that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppConfigFindFirstOrThrowArgs} args - Arguments to find a AppConfig
     * @example
     * // Get one AppConfig
     * const appConfig = await prisma.appConfig.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AppConfigFindFirstOrThrowArgs>(args?: SelectSubset<T, AppConfigFindFirstOrThrowArgs<ExtArgs>>): Prisma__AppConfigClient<$Result.GetResult<Prisma.$AppConfigPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AppConfigs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppConfigFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AppConfigs
     * const appConfigs = await prisma.appConfig.findMany()
     * 
     * // Get first 10 AppConfigs
     * const appConfigs = await prisma.appConfig.findMany({ take: 10 })
     * 
     * // Only select the `Id`
     * const appConfigWithIdOnly = await prisma.appConfig.findMany({ select: { Id: true } })
     * 
     */
    findMany<T extends AppConfigFindManyArgs>(args?: SelectSubset<T, AppConfigFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppConfigPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AppConfig.
     * @param {AppConfigCreateArgs} args - Arguments to create a AppConfig.
     * @example
     * // Create one AppConfig
     * const AppConfig = await prisma.appConfig.create({
     *   data: {
     *     // ... data to create a AppConfig
     *   }
     * })
     * 
     */
    create<T extends AppConfigCreateArgs>(args: SelectSubset<T, AppConfigCreateArgs<ExtArgs>>): Prisma__AppConfigClient<$Result.GetResult<Prisma.$AppConfigPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AppConfigs.
     * @param {AppConfigCreateManyArgs} args - Arguments to create many AppConfigs.
     * @example
     * // Create many AppConfigs
     * const appConfig = await prisma.appConfig.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AppConfigCreateManyArgs>(args?: SelectSubset<T, AppConfigCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AppConfigs and returns the data saved in the database.
     * @param {AppConfigCreateManyAndReturnArgs} args - Arguments to create many AppConfigs.
     * @example
     * // Create many AppConfigs
     * const appConfig = await prisma.appConfig.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AppConfigs and only return the `Id`
     * const appConfigWithIdOnly = await prisma.appConfig.createManyAndReturn({
     *   select: { Id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AppConfigCreateManyAndReturnArgs>(args?: SelectSubset<T, AppConfigCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppConfigPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AppConfig.
     * @param {AppConfigDeleteArgs} args - Arguments to delete one AppConfig.
     * @example
     * // Delete one AppConfig
     * const AppConfig = await prisma.appConfig.delete({
     *   where: {
     *     // ... filter to delete one AppConfig
     *   }
     * })
     * 
     */
    delete<T extends AppConfigDeleteArgs>(args: SelectSubset<T, AppConfigDeleteArgs<ExtArgs>>): Prisma__AppConfigClient<$Result.GetResult<Prisma.$AppConfigPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AppConfig.
     * @param {AppConfigUpdateArgs} args - Arguments to update one AppConfig.
     * @example
     * // Update one AppConfig
     * const appConfig = await prisma.appConfig.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AppConfigUpdateArgs>(args: SelectSubset<T, AppConfigUpdateArgs<ExtArgs>>): Prisma__AppConfigClient<$Result.GetResult<Prisma.$AppConfigPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AppConfigs.
     * @param {AppConfigDeleteManyArgs} args - Arguments to filter AppConfigs to delete.
     * @example
     * // Delete a few AppConfigs
     * const { count } = await prisma.appConfig.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AppConfigDeleteManyArgs>(args?: SelectSubset<T, AppConfigDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AppConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppConfigUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AppConfigs
     * const appConfig = await prisma.appConfig.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AppConfigUpdateManyArgs>(args: SelectSubset<T, AppConfigUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AppConfigs and returns the data updated in the database.
     * @param {AppConfigUpdateManyAndReturnArgs} args - Arguments to update many AppConfigs.
     * @example
     * // Update many AppConfigs
     * const appConfig = await prisma.appConfig.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AppConfigs and only return the `Id`
     * const appConfigWithIdOnly = await prisma.appConfig.updateManyAndReturn({
     *   select: { Id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AppConfigUpdateManyAndReturnArgs>(args: SelectSubset<T, AppConfigUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppConfigPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AppConfig.
     * @param {AppConfigUpsertArgs} args - Arguments to update or create a AppConfig.
     * @example
     * // Update or create a AppConfig
     * const appConfig = await prisma.appConfig.upsert({
     *   create: {
     *     // ... data to create a AppConfig
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AppConfig we want to update
     *   }
     * })
     */
    upsert<T extends AppConfigUpsertArgs>(args: SelectSubset<T, AppConfigUpsertArgs<ExtArgs>>): Prisma__AppConfigClient<$Result.GetResult<Prisma.$AppConfigPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AppConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppConfigCountArgs} args - Arguments to filter AppConfigs to count.
     * @example
     * // Count the number of AppConfigs
     * const count = await prisma.appConfig.count({
     *   where: {
     *     // ... the filter for the AppConfigs we want to count
     *   }
     * })
    **/
    count<T extends AppConfigCountArgs>(
      args?: Subset<T, AppConfigCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AppConfigCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AppConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppConfigAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AppConfigAggregateArgs>(args: Subset<T, AppConfigAggregateArgs>): Prisma.PrismaPromise<GetAppConfigAggregateType<T>>

    /**
     * Group by AppConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppConfigGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AppConfigGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AppConfigGroupByArgs['orderBy'] }
        : { orderBy?: AppConfigGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AppConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAppConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AppConfig model
   */
  readonly fields: AppConfigFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AppConfig.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AppConfigClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AppConfig model
   */
  interface AppConfigFieldRefs {
    readonly Id: FieldRef<"AppConfig", 'Int'>
    readonly OnAirSyncEnabled: FieldRef<"AppConfig", 'Boolean'>
    readonly OnAirVASyncEnabled: FieldRef<"AppConfig", 'Boolean'>
    readonly OnAirVAMembersSyncEnabled: FieldRef<"AppConfig", 'Boolean'>
    readonly OnAirCompanySyncEnabled: FieldRef<"AppConfig", 'Boolean'>
    readonly DiscordServerInviteLink: FieldRef<"AppConfig", 'String'>
    readonly DiscordServerInviteLinkEnabled: FieldRef<"AppConfig", 'Boolean'>
    readonly AcceptingNewMembers: FieldRef<"AppConfig", 'Boolean'>
    readonly DiscordAuthEnabled: FieldRef<"AppConfig", 'Boolean'>
    readonly LocalAuthEnabled: FieldRef<"AppConfig", 'Boolean'>
    readonly VirtualAirlineInitiated: FieldRef<"AppConfig", 'Boolean'>
    readonly CreatedAt: FieldRef<"AppConfig", 'DateTime'>
    readonly UpdatedAt: FieldRef<"AppConfig", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AppConfig findUnique
   */
  export type AppConfigFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppConfig
     */
    select?: AppConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppConfig
     */
    omit?: AppConfigOmit<ExtArgs> | null
    /**
     * Filter, which AppConfig to fetch.
     */
    where: AppConfigWhereUniqueInput
  }

  /**
   * AppConfig findUniqueOrThrow
   */
  export type AppConfigFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppConfig
     */
    select?: AppConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppConfig
     */
    omit?: AppConfigOmit<ExtArgs> | null
    /**
     * Filter, which AppConfig to fetch.
     */
    where: AppConfigWhereUniqueInput
  }

  /**
   * AppConfig findFirst
   */
  export type AppConfigFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppConfig
     */
    select?: AppConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppConfig
     */
    omit?: AppConfigOmit<ExtArgs> | null
    /**
     * Filter, which AppConfig to fetch.
     */
    where?: AppConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppConfigs to fetch.
     */
    orderBy?: AppConfigOrderByWithRelationInput | AppConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AppConfigs.
     */
    cursor?: AppConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AppConfigs.
     */
    distinct?: AppConfigScalarFieldEnum | AppConfigScalarFieldEnum[]
  }

  /**
   * AppConfig findFirstOrThrow
   */
  export type AppConfigFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppConfig
     */
    select?: AppConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppConfig
     */
    omit?: AppConfigOmit<ExtArgs> | null
    /**
     * Filter, which AppConfig to fetch.
     */
    where?: AppConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppConfigs to fetch.
     */
    orderBy?: AppConfigOrderByWithRelationInput | AppConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AppConfigs.
     */
    cursor?: AppConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AppConfigs.
     */
    distinct?: AppConfigScalarFieldEnum | AppConfigScalarFieldEnum[]
  }

  /**
   * AppConfig findMany
   */
  export type AppConfigFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppConfig
     */
    select?: AppConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppConfig
     */
    omit?: AppConfigOmit<ExtArgs> | null
    /**
     * Filter, which AppConfigs to fetch.
     */
    where?: AppConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppConfigs to fetch.
     */
    orderBy?: AppConfigOrderByWithRelationInput | AppConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AppConfigs.
     */
    cursor?: AppConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppConfigs.
     */
    skip?: number
    distinct?: AppConfigScalarFieldEnum | AppConfigScalarFieldEnum[]
  }

  /**
   * AppConfig create
   */
  export type AppConfigCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppConfig
     */
    select?: AppConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppConfig
     */
    omit?: AppConfigOmit<ExtArgs> | null
    /**
     * The data needed to create a AppConfig.
     */
    data?: XOR<AppConfigCreateInput, AppConfigUncheckedCreateInput>
  }

  /**
   * AppConfig createMany
   */
  export type AppConfigCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AppConfigs.
     */
    data: AppConfigCreateManyInput | AppConfigCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AppConfig createManyAndReturn
   */
  export type AppConfigCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppConfig
     */
    select?: AppConfigSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AppConfig
     */
    omit?: AppConfigOmit<ExtArgs> | null
    /**
     * The data used to create many AppConfigs.
     */
    data: AppConfigCreateManyInput | AppConfigCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AppConfig update
   */
  export type AppConfigUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppConfig
     */
    select?: AppConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppConfig
     */
    omit?: AppConfigOmit<ExtArgs> | null
    /**
     * The data needed to update a AppConfig.
     */
    data: XOR<AppConfigUpdateInput, AppConfigUncheckedUpdateInput>
    /**
     * Choose, which AppConfig to update.
     */
    where: AppConfigWhereUniqueInput
  }

  /**
   * AppConfig updateMany
   */
  export type AppConfigUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AppConfigs.
     */
    data: XOR<AppConfigUpdateManyMutationInput, AppConfigUncheckedUpdateManyInput>
    /**
     * Filter which AppConfigs to update
     */
    where?: AppConfigWhereInput
    /**
     * Limit how many AppConfigs to update.
     */
    limit?: number
  }

  /**
   * AppConfig updateManyAndReturn
   */
  export type AppConfigUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppConfig
     */
    select?: AppConfigSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AppConfig
     */
    omit?: AppConfigOmit<ExtArgs> | null
    /**
     * The data used to update AppConfigs.
     */
    data: XOR<AppConfigUpdateManyMutationInput, AppConfigUncheckedUpdateManyInput>
    /**
     * Filter which AppConfigs to update
     */
    where?: AppConfigWhereInput
    /**
     * Limit how many AppConfigs to update.
     */
    limit?: number
  }

  /**
   * AppConfig upsert
   */
  export type AppConfigUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppConfig
     */
    select?: AppConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppConfig
     */
    omit?: AppConfigOmit<ExtArgs> | null
    /**
     * The filter to search for the AppConfig to update in case it exists.
     */
    where: AppConfigWhereUniqueInput
    /**
     * In case the AppConfig found by the `where` argument doesn't exist, create a new AppConfig with this data.
     */
    create: XOR<AppConfigCreateInput, AppConfigUncheckedCreateInput>
    /**
     * In case the AppConfig was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AppConfigUpdateInput, AppConfigUncheckedUpdateInput>
  }

  /**
   * AppConfig delete
   */
  export type AppConfigDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppConfig
     */
    select?: AppConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppConfig
     */
    omit?: AppConfigOmit<ExtArgs> | null
    /**
     * Filter which AppConfig to delete.
     */
    where: AppConfigWhereUniqueInput
  }

  /**
   * AppConfig deleteMany
   */
  export type AppConfigDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AppConfigs to delete
     */
    where?: AppConfigWhereInput
    /**
     * Limit how many AppConfigs to delete.
     */
    limit?: number
  }

  /**
   * AppConfig without action
   */
  export type AppConfigDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppConfig
     */
    select?: AppConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppConfig
     */
    omit?: AppConfigOmit<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    Id: string | null
    Username: string | null
    Password: string | null
    Email: string | null
    FirstName: string | null
    LastName: string | null
    FirstLoginCompleted: boolean | null
    IsOnline: boolean | null
    IsBanned: boolean | null
    BanReason: string | null
    BanExpiresAt: Date | null
    IsVerified: boolean | null
    LastLogin: Date | null
    CreatedAt: Date | null
    UpdatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    Id: string | null
    Username: string | null
    Password: string | null
    Email: string | null
    FirstName: string | null
    LastName: string | null
    FirstLoginCompleted: boolean | null
    IsOnline: boolean | null
    IsBanned: boolean | null
    BanReason: string | null
    BanExpiresAt: Date | null
    IsVerified: boolean | null
    LastLogin: Date | null
    CreatedAt: Date | null
    UpdatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    Id: number
    Username: number
    Password: number
    Email: number
    FirstName: number
    LastName: number
    FirstLoginCompleted: number
    IsOnline: number
    IsBanned: number
    BanReason: number
    BanExpiresAt: number
    IsVerified: number
    LastLogin: number
    CreatedAt: number
    UpdatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    Id?: true
    Username?: true
    Password?: true
    Email?: true
    FirstName?: true
    LastName?: true
    FirstLoginCompleted?: true
    IsOnline?: true
    IsBanned?: true
    BanReason?: true
    BanExpiresAt?: true
    IsVerified?: true
    LastLogin?: true
    CreatedAt?: true
    UpdatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    Id?: true
    Username?: true
    Password?: true
    Email?: true
    FirstName?: true
    LastName?: true
    FirstLoginCompleted?: true
    IsOnline?: true
    IsBanned?: true
    BanReason?: true
    BanExpiresAt?: true
    IsVerified?: true
    LastLogin?: true
    CreatedAt?: true
    UpdatedAt?: true
  }

  export type UserCountAggregateInputType = {
    Id?: true
    Username?: true
    Password?: true
    Email?: true
    FirstName?: true
    LastName?: true
    FirstLoginCompleted?: true
    IsOnline?: true
    IsBanned?: true
    BanReason?: true
    BanExpiresAt?: true
    IsVerified?: true
    LastLogin?: true
    CreatedAt?: true
    UpdatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    Id: string
    Username: string
    Password: string
    Email: string | null
    FirstName: string | null
    LastName: string | null
    FirstLoginCompleted: boolean
    IsOnline: boolean
    IsBanned: boolean
    BanReason: string | null
    BanExpiresAt: Date | null
    IsVerified: boolean
    LastLogin: Date | null
    CreatedAt: Date
    UpdatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    Username?: boolean
    Password?: boolean
    Email?: boolean
    FirstName?: boolean
    LastName?: boolean
    FirstLoginCompleted?: boolean
    IsOnline?: boolean
    IsBanned?: boolean
    BanReason?: boolean
    BanExpiresAt?: boolean
    IsVerified?: boolean
    LastLogin?: boolean
    CreatedAt?: boolean
    UpdatedAt?: boolean
    Roles?: boolean | User$RolesArgs<ExtArgs>
    PrivacySettings?: boolean | User$PrivacySettingsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    Username?: boolean
    Password?: boolean
    Email?: boolean
    FirstName?: boolean
    LastName?: boolean
    FirstLoginCompleted?: boolean
    IsOnline?: boolean
    IsBanned?: boolean
    BanReason?: boolean
    BanExpiresAt?: boolean
    IsVerified?: boolean
    LastLogin?: boolean
    CreatedAt?: boolean
    UpdatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    Username?: boolean
    Password?: boolean
    Email?: boolean
    FirstName?: boolean
    LastName?: boolean
    FirstLoginCompleted?: boolean
    IsOnline?: boolean
    IsBanned?: boolean
    BanReason?: boolean
    BanExpiresAt?: boolean
    IsVerified?: boolean
    LastLogin?: boolean
    CreatedAt?: boolean
    UpdatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    Id?: boolean
    Username?: boolean
    Password?: boolean
    Email?: boolean
    FirstName?: boolean
    LastName?: boolean
    FirstLoginCompleted?: boolean
    IsOnline?: boolean
    IsBanned?: boolean
    BanReason?: boolean
    BanExpiresAt?: boolean
    IsVerified?: boolean
    LastLogin?: boolean
    CreatedAt?: boolean
    UpdatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Id" | "Username" | "Password" | "Email" | "FirstName" | "LastName" | "FirstLoginCompleted" | "IsOnline" | "IsBanned" | "BanReason" | "BanExpiresAt" | "IsVerified" | "LastLogin" | "CreatedAt" | "UpdatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Roles?: boolean | User$RolesArgs<ExtArgs>
    PrivacySettings?: boolean | User$PrivacySettingsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      Roles: Prisma.$RolePayload<ExtArgs>[]
      PrivacySettings: Prisma.$UserPrivacySettingsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      Id: string
      Username: string
      Password: string
      Email: string | null
      FirstName: string | null
      LastName: string | null
      FirstLoginCompleted: boolean
      IsOnline: boolean
      IsBanned: boolean
      BanReason: string | null
      BanExpiresAt: Date | null
      IsVerified: boolean
      LastLogin: Date | null
      CreatedAt: Date
      UpdatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `Id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { Id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `Id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { Id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `Id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { Id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Roles<T extends User$RolesArgs<ExtArgs> = {}>(args?: Subset<T, User$RolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    PrivacySettings<T extends User$PrivacySettingsArgs<ExtArgs> = {}>(args?: Subset<T, User$PrivacySettingsArgs<ExtArgs>>): Prisma__UserPrivacySettingsClient<$Result.GetResult<Prisma.$UserPrivacySettingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly Id: FieldRef<"User", 'String'>
    readonly Username: FieldRef<"User", 'String'>
    readonly Password: FieldRef<"User", 'String'>
    readonly Email: FieldRef<"User", 'String'>
    readonly FirstName: FieldRef<"User", 'String'>
    readonly LastName: FieldRef<"User", 'String'>
    readonly FirstLoginCompleted: FieldRef<"User", 'Boolean'>
    readonly IsOnline: FieldRef<"User", 'Boolean'>
    readonly IsBanned: FieldRef<"User", 'Boolean'>
    readonly BanReason: FieldRef<"User", 'String'>
    readonly BanExpiresAt: FieldRef<"User", 'DateTime'>
    readonly IsVerified: FieldRef<"User", 'Boolean'>
    readonly LastLogin: FieldRef<"User", 'DateTime'>
    readonly CreatedAt: FieldRef<"User", 'DateTime'>
    readonly UpdatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.Roles
   */
  export type User$RolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    where?: RoleWhereInput
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    cursor?: RoleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * User.PrivacySettings
   */
  export type User$PrivacySettingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPrivacySettings
     */
    select?: UserPrivacySettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPrivacySettings
     */
    omit?: UserPrivacySettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPrivacySettingsInclude<ExtArgs> | null
    where?: UserPrivacySettingsWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model UserPrivacySettings
   */

  export type AggregateUserPrivacySettings = {
    _count: UserPrivacySettingsCountAggregateOutputType | null
    _min: UserPrivacySettingsMinAggregateOutputType | null
    _max: UserPrivacySettingsMaxAggregateOutputType | null
  }

  export type UserPrivacySettingsMinAggregateOutputType = {
    Id: string | null
    UserId: string | null
    ShowOnlineStatus: boolean | null
    ShowFirstName: boolean | null
    ShowLastName: boolean | null
    ShowLastNameInitial: boolean | null
    ShowLastLogin: Date | null
    CreatedAt: Date | null
  }

  export type UserPrivacySettingsMaxAggregateOutputType = {
    Id: string | null
    UserId: string | null
    ShowOnlineStatus: boolean | null
    ShowFirstName: boolean | null
    ShowLastName: boolean | null
    ShowLastNameInitial: boolean | null
    ShowLastLogin: Date | null
    CreatedAt: Date | null
  }

  export type UserPrivacySettingsCountAggregateOutputType = {
    Id: number
    UserId: number
    ShowOnlineStatus: number
    ShowFirstName: number
    ShowLastName: number
    ShowLastNameInitial: number
    ShowLastLogin: number
    CreatedAt: number
    _all: number
  }


  export type UserPrivacySettingsMinAggregateInputType = {
    Id?: true
    UserId?: true
    ShowOnlineStatus?: true
    ShowFirstName?: true
    ShowLastName?: true
    ShowLastNameInitial?: true
    ShowLastLogin?: true
    CreatedAt?: true
  }

  export type UserPrivacySettingsMaxAggregateInputType = {
    Id?: true
    UserId?: true
    ShowOnlineStatus?: true
    ShowFirstName?: true
    ShowLastName?: true
    ShowLastNameInitial?: true
    ShowLastLogin?: true
    CreatedAt?: true
  }

  export type UserPrivacySettingsCountAggregateInputType = {
    Id?: true
    UserId?: true
    ShowOnlineStatus?: true
    ShowFirstName?: true
    ShowLastName?: true
    ShowLastNameInitial?: true
    ShowLastLogin?: true
    CreatedAt?: true
    _all?: true
  }

  export type UserPrivacySettingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserPrivacySettings to aggregate.
     */
    where?: UserPrivacySettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPrivacySettings to fetch.
     */
    orderBy?: UserPrivacySettingsOrderByWithRelationInput | UserPrivacySettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserPrivacySettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPrivacySettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPrivacySettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserPrivacySettings
    **/
    _count?: true | UserPrivacySettingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserPrivacySettingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserPrivacySettingsMaxAggregateInputType
  }

  export type GetUserPrivacySettingsAggregateType<T extends UserPrivacySettingsAggregateArgs> = {
        [P in keyof T & keyof AggregateUserPrivacySettings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserPrivacySettings[P]>
      : GetScalarType<T[P], AggregateUserPrivacySettings[P]>
  }




  export type UserPrivacySettingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserPrivacySettingsWhereInput
    orderBy?: UserPrivacySettingsOrderByWithAggregationInput | UserPrivacySettingsOrderByWithAggregationInput[]
    by: UserPrivacySettingsScalarFieldEnum[] | UserPrivacySettingsScalarFieldEnum
    having?: UserPrivacySettingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserPrivacySettingsCountAggregateInputType | true
    _min?: UserPrivacySettingsMinAggregateInputType
    _max?: UserPrivacySettingsMaxAggregateInputType
  }

  export type UserPrivacySettingsGroupByOutputType = {
    Id: string
    UserId: string
    ShowOnlineStatus: boolean
    ShowFirstName: boolean
    ShowLastName: boolean
    ShowLastNameInitial: boolean
    ShowLastLogin: Date | null
    CreatedAt: Date
    _count: UserPrivacySettingsCountAggregateOutputType | null
    _min: UserPrivacySettingsMinAggregateOutputType | null
    _max: UserPrivacySettingsMaxAggregateOutputType | null
  }

  type GetUserPrivacySettingsGroupByPayload<T extends UserPrivacySettingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserPrivacySettingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserPrivacySettingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserPrivacySettingsGroupByOutputType[P]>
            : GetScalarType<T[P], UserPrivacySettingsGroupByOutputType[P]>
        }
      >
    >


  export type UserPrivacySettingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    UserId?: boolean
    ShowOnlineStatus?: boolean
    ShowFirstName?: boolean
    ShowLastName?: boolean
    ShowLastNameInitial?: boolean
    ShowLastLogin?: boolean
    CreatedAt?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userPrivacySettings"]>

  export type UserPrivacySettingsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    UserId?: boolean
    ShowOnlineStatus?: boolean
    ShowFirstName?: boolean
    ShowLastName?: boolean
    ShowLastNameInitial?: boolean
    ShowLastLogin?: boolean
    CreatedAt?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userPrivacySettings"]>

  export type UserPrivacySettingsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    UserId?: boolean
    ShowOnlineStatus?: boolean
    ShowFirstName?: boolean
    ShowLastName?: boolean
    ShowLastNameInitial?: boolean
    ShowLastLogin?: boolean
    CreatedAt?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userPrivacySettings"]>

  export type UserPrivacySettingsSelectScalar = {
    Id?: boolean
    UserId?: boolean
    ShowOnlineStatus?: boolean
    ShowFirstName?: boolean
    ShowLastName?: boolean
    ShowLastNameInitial?: boolean
    ShowLastLogin?: boolean
    CreatedAt?: boolean
  }

  export type UserPrivacySettingsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Id" | "UserId" | "ShowOnlineStatus" | "ShowFirstName" | "ShowLastName" | "ShowLastNameInitial" | "ShowLastLogin" | "CreatedAt", ExtArgs["result"]["userPrivacySettings"]>
  export type UserPrivacySettingsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserPrivacySettingsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserPrivacySettingsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserPrivacySettingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserPrivacySettings"
    objects: {
      User: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      Id: string
      UserId: string
      ShowOnlineStatus: boolean
      ShowFirstName: boolean
      ShowLastName: boolean
      ShowLastNameInitial: boolean
      ShowLastLogin: Date | null
      CreatedAt: Date
    }, ExtArgs["result"]["userPrivacySettings"]>
    composites: {}
  }

  type UserPrivacySettingsGetPayload<S extends boolean | null | undefined | UserPrivacySettingsDefaultArgs> = $Result.GetResult<Prisma.$UserPrivacySettingsPayload, S>

  type UserPrivacySettingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserPrivacySettingsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserPrivacySettingsCountAggregateInputType | true
    }

  export interface UserPrivacySettingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserPrivacySettings'], meta: { name: 'UserPrivacySettings' } }
    /**
     * Find zero or one UserPrivacySettings that matches the filter.
     * @param {UserPrivacySettingsFindUniqueArgs} args - Arguments to find a UserPrivacySettings
     * @example
     * // Get one UserPrivacySettings
     * const userPrivacySettings = await prisma.userPrivacySettings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserPrivacySettingsFindUniqueArgs>(args: SelectSubset<T, UserPrivacySettingsFindUniqueArgs<ExtArgs>>): Prisma__UserPrivacySettingsClient<$Result.GetResult<Prisma.$UserPrivacySettingsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserPrivacySettings that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserPrivacySettingsFindUniqueOrThrowArgs} args - Arguments to find a UserPrivacySettings
     * @example
     * // Get one UserPrivacySettings
     * const userPrivacySettings = await prisma.userPrivacySettings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserPrivacySettingsFindUniqueOrThrowArgs>(args: SelectSubset<T, UserPrivacySettingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserPrivacySettingsClient<$Result.GetResult<Prisma.$UserPrivacySettingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserPrivacySettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPrivacySettingsFindFirstArgs} args - Arguments to find a UserPrivacySettings
     * @example
     * // Get one UserPrivacySettings
     * const userPrivacySettings = await prisma.userPrivacySettings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserPrivacySettingsFindFirstArgs>(args?: SelectSubset<T, UserPrivacySettingsFindFirstArgs<ExtArgs>>): Prisma__UserPrivacySettingsClient<$Result.GetResult<Prisma.$UserPrivacySettingsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserPrivacySettings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPrivacySettingsFindFirstOrThrowArgs} args - Arguments to find a UserPrivacySettings
     * @example
     * // Get one UserPrivacySettings
     * const userPrivacySettings = await prisma.userPrivacySettings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserPrivacySettingsFindFirstOrThrowArgs>(args?: SelectSubset<T, UserPrivacySettingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserPrivacySettingsClient<$Result.GetResult<Prisma.$UserPrivacySettingsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserPrivacySettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPrivacySettingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserPrivacySettings
     * const userPrivacySettings = await prisma.userPrivacySettings.findMany()
     * 
     * // Get first 10 UserPrivacySettings
     * const userPrivacySettings = await prisma.userPrivacySettings.findMany({ take: 10 })
     * 
     * // Only select the `Id`
     * const userPrivacySettingsWithIdOnly = await prisma.userPrivacySettings.findMany({ select: { Id: true } })
     * 
     */
    findMany<T extends UserPrivacySettingsFindManyArgs>(args?: SelectSubset<T, UserPrivacySettingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPrivacySettingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserPrivacySettings.
     * @param {UserPrivacySettingsCreateArgs} args - Arguments to create a UserPrivacySettings.
     * @example
     * // Create one UserPrivacySettings
     * const UserPrivacySettings = await prisma.userPrivacySettings.create({
     *   data: {
     *     // ... data to create a UserPrivacySettings
     *   }
     * })
     * 
     */
    create<T extends UserPrivacySettingsCreateArgs>(args: SelectSubset<T, UserPrivacySettingsCreateArgs<ExtArgs>>): Prisma__UserPrivacySettingsClient<$Result.GetResult<Prisma.$UserPrivacySettingsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserPrivacySettings.
     * @param {UserPrivacySettingsCreateManyArgs} args - Arguments to create many UserPrivacySettings.
     * @example
     * // Create many UserPrivacySettings
     * const userPrivacySettings = await prisma.userPrivacySettings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserPrivacySettingsCreateManyArgs>(args?: SelectSubset<T, UserPrivacySettingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserPrivacySettings and returns the data saved in the database.
     * @param {UserPrivacySettingsCreateManyAndReturnArgs} args - Arguments to create many UserPrivacySettings.
     * @example
     * // Create many UserPrivacySettings
     * const userPrivacySettings = await prisma.userPrivacySettings.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserPrivacySettings and only return the `Id`
     * const userPrivacySettingsWithIdOnly = await prisma.userPrivacySettings.createManyAndReturn({
     *   select: { Id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserPrivacySettingsCreateManyAndReturnArgs>(args?: SelectSubset<T, UserPrivacySettingsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPrivacySettingsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserPrivacySettings.
     * @param {UserPrivacySettingsDeleteArgs} args - Arguments to delete one UserPrivacySettings.
     * @example
     * // Delete one UserPrivacySettings
     * const UserPrivacySettings = await prisma.userPrivacySettings.delete({
     *   where: {
     *     // ... filter to delete one UserPrivacySettings
     *   }
     * })
     * 
     */
    delete<T extends UserPrivacySettingsDeleteArgs>(args: SelectSubset<T, UserPrivacySettingsDeleteArgs<ExtArgs>>): Prisma__UserPrivacySettingsClient<$Result.GetResult<Prisma.$UserPrivacySettingsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserPrivacySettings.
     * @param {UserPrivacySettingsUpdateArgs} args - Arguments to update one UserPrivacySettings.
     * @example
     * // Update one UserPrivacySettings
     * const userPrivacySettings = await prisma.userPrivacySettings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserPrivacySettingsUpdateArgs>(args: SelectSubset<T, UserPrivacySettingsUpdateArgs<ExtArgs>>): Prisma__UserPrivacySettingsClient<$Result.GetResult<Prisma.$UserPrivacySettingsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserPrivacySettings.
     * @param {UserPrivacySettingsDeleteManyArgs} args - Arguments to filter UserPrivacySettings to delete.
     * @example
     * // Delete a few UserPrivacySettings
     * const { count } = await prisma.userPrivacySettings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserPrivacySettingsDeleteManyArgs>(args?: SelectSubset<T, UserPrivacySettingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserPrivacySettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPrivacySettingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserPrivacySettings
     * const userPrivacySettings = await prisma.userPrivacySettings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserPrivacySettingsUpdateManyArgs>(args: SelectSubset<T, UserPrivacySettingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserPrivacySettings and returns the data updated in the database.
     * @param {UserPrivacySettingsUpdateManyAndReturnArgs} args - Arguments to update many UserPrivacySettings.
     * @example
     * // Update many UserPrivacySettings
     * const userPrivacySettings = await prisma.userPrivacySettings.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserPrivacySettings and only return the `Id`
     * const userPrivacySettingsWithIdOnly = await prisma.userPrivacySettings.updateManyAndReturn({
     *   select: { Id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserPrivacySettingsUpdateManyAndReturnArgs>(args: SelectSubset<T, UserPrivacySettingsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPrivacySettingsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserPrivacySettings.
     * @param {UserPrivacySettingsUpsertArgs} args - Arguments to update or create a UserPrivacySettings.
     * @example
     * // Update or create a UserPrivacySettings
     * const userPrivacySettings = await prisma.userPrivacySettings.upsert({
     *   create: {
     *     // ... data to create a UserPrivacySettings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserPrivacySettings we want to update
     *   }
     * })
     */
    upsert<T extends UserPrivacySettingsUpsertArgs>(args: SelectSubset<T, UserPrivacySettingsUpsertArgs<ExtArgs>>): Prisma__UserPrivacySettingsClient<$Result.GetResult<Prisma.$UserPrivacySettingsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserPrivacySettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPrivacySettingsCountArgs} args - Arguments to filter UserPrivacySettings to count.
     * @example
     * // Count the number of UserPrivacySettings
     * const count = await prisma.userPrivacySettings.count({
     *   where: {
     *     // ... the filter for the UserPrivacySettings we want to count
     *   }
     * })
    **/
    count<T extends UserPrivacySettingsCountArgs>(
      args?: Subset<T, UserPrivacySettingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserPrivacySettingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserPrivacySettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPrivacySettingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserPrivacySettingsAggregateArgs>(args: Subset<T, UserPrivacySettingsAggregateArgs>): Prisma.PrismaPromise<GetUserPrivacySettingsAggregateType<T>>

    /**
     * Group by UserPrivacySettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPrivacySettingsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserPrivacySettingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserPrivacySettingsGroupByArgs['orderBy'] }
        : { orderBy?: UserPrivacySettingsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserPrivacySettingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserPrivacySettingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserPrivacySettings model
   */
  readonly fields: UserPrivacySettingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserPrivacySettings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserPrivacySettingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserPrivacySettings model
   */
  interface UserPrivacySettingsFieldRefs {
    readonly Id: FieldRef<"UserPrivacySettings", 'String'>
    readonly UserId: FieldRef<"UserPrivacySettings", 'String'>
    readonly ShowOnlineStatus: FieldRef<"UserPrivacySettings", 'Boolean'>
    readonly ShowFirstName: FieldRef<"UserPrivacySettings", 'Boolean'>
    readonly ShowLastName: FieldRef<"UserPrivacySettings", 'Boolean'>
    readonly ShowLastNameInitial: FieldRef<"UserPrivacySettings", 'Boolean'>
    readonly ShowLastLogin: FieldRef<"UserPrivacySettings", 'DateTime'>
    readonly CreatedAt: FieldRef<"UserPrivacySettings", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserPrivacySettings findUnique
   */
  export type UserPrivacySettingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPrivacySettings
     */
    select?: UserPrivacySettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPrivacySettings
     */
    omit?: UserPrivacySettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPrivacySettingsInclude<ExtArgs> | null
    /**
     * Filter, which UserPrivacySettings to fetch.
     */
    where: UserPrivacySettingsWhereUniqueInput
  }

  /**
   * UserPrivacySettings findUniqueOrThrow
   */
  export type UserPrivacySettingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPrivacySettings
     */
    select?: UserPrivacySettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPrivacySettings
     */
    omit?: UserPrivacySettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPrivacySettingsInclude<ExtArgs> | null
    /**
     * Filter, which UserPrivacySettings to fetch.
     */
    where: UserPrivacySettingsWhereUniqueInput
  }

  /**
   * UserPrivacySettings findFirst
   */
  export type UserPrivacySettingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPrivacySettings
     */
    select?: UserPrivacySettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPrivacySettings
     */
    omit?: UserPrivacySettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPrivacySettingsInclude<ExtArgs> | null
    /**
     * Filter, which UserPrivacySettings to fetch.
     */
    where?: UserPrivacySettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPrivacySettings to fetch.
     */
    orderBy?: UserPrivacySettingsOrderByWithRelationInput | UserPrivacySettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserPrivacySettings.
     */
    cursor?: UserPrivacySettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPrivacySettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPrivacySettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserPrivacySettings.
     */
    distinct?: UserPrivacySettingsScalarFieldEnum | UserPrivacySettingsScalarFieldEnum[]
  }

  /**
   * UserPrivacySettings findFirstOrThrow
   */
  export type UserPrivacySettingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPrivacySettings
     */
    select?: UserPrivacySettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPrivacySettings
     */
    omit?: UserPrivacySettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPrivacySettingsInclude<ExtArgs> | null
    /**
     * Filter, which UserPrivacySettings to fetch.
     */
    where?: UserPrivacySettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPrivacySettings to fetch.
     */
    orderBy?: UserPrivacySettingsOrderByWithRelationInput | UserPrivacySettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserPrivacySettings.
     */
    cursor?: UserPrivacySettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPrivacySettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPrivacySettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserPrivacySettings.
     */
    distinct?: UserPrivacySettingsScalarFieldEnum | UserPrivacySettingsScalarFieldEnum[]
  }

  /**
   * UserPrivacySettings findMany
   */
  export type UserPrivacySettingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPrivacySettings
     */
    select?: UserPrivacySettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPrivacySettings
     */
    omit?: UserPrivacySettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPrivacySettingsInclude<ExtArgs> | null
    /**
     * Filter, which UserPrivacySettings to fetch.
     */
    where?: UserPrivacySettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPrivacySettings to fetch.
     */
    orderBy?: UserPrivacySettingsOrderByWithRelationInput | UserPrivacySettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserPrivacySettings.
     */
    cursor?: UserPrivacySettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPrivacySettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPrivacySettings.
     */
    skip?: number
    distinct?: UserPrivacySettingsScalarFieldEnum | UserPrivacySettingsScalarFieldEnum[]
  }

  /**
   * UserPrivacySettings create
   */
  export type UserPrivacySettingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPrivacySettings
     */
    select?: UserPrivacySettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPrivacySettings
     */
    omit?: UserPrivacySettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPrivacySettingsInclude<ExtArgs> | null
    /**
     * The data needed to create a UserPrivacySettings.
     */
    data: XOR<UserPrivacySettingsCreateInput, UserPrivacySettingsUncheckedCreateInput>
  }

  /**
   * UserPrivacySettings createMany
   */
  export type UserPrivacySettingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserPrivacySettings.
     */
    data: UserPrivacySettingsCreateManyInput | UserPrivacySettingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserPrivacySettings createManyAndReturn
   */
  export type UserPrivacySettingsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPrivacySettings
     */
    select?: UserPrivacySettingsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserPrivacySettings
     */
    omit?: UserPrivacySettingsOmit<ExtArgs> | null
    /**
     * The data used to create many UserPrivacySettings.
     */
    data: UserPrivacySettingsCreateManyInput | UserPrivacySettingsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPrivacySettingsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserPrivacySettings update
   */
  export type UserPrivacySettingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPrivacySettings
     */
    select?: UserPrivacySettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPrivacySettings
     */
    omit?: UserPrivacySettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPrivacySettingsInclude<ExtArgs> | null
    /**
     * The data needed to update a UserPrivacySettings.
     */
    data: XOR<UserPrivacySettingsUpdateInput, UserPrivacySettingsUncheckedUpdateInput>
    /**
     * Choose, which UserPrivacySettings to update.
     */
    where: UserPrivacySettingsWhereUniqueInput
  }

  /**
   * UserPrivacySettings updateMany
   */
  export type UserPrivacySettingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserPrivacySettings.
     */
    data: XOR<UserPrivacySettingsUpdateManyMutationInput, UserPrivacySettingsUncheckedUpdateManyInput>
    /**
     * Filter which UserPrivacySettings to update
     */
    where?: UserPrivacySettingsWhereInput
    /**
     * Limit how many UserPrivacySettings to update.
     */
    limit?: number
  }

  /**
   * UserPrivacySettings updateManyAndReturn
   */
  export type UserPrivacySettingsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPrivacySettings
     */
    select?: UserPrivacySettingsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserPrivacySettings
     */
    omit?: UserPrivacySettingsOmit<ExtArgs> | null
    /**
     * The data used to update UserPrivacySettings.
     */
    data: XOR<UserPrivacySettingsUpdateManyMutationInput, UserPrivacySettingsUncheckedUpdateManyInput>
    /**
     * Filter which UserPrivacySettings to update
     */
    where?: UserPrivacySettingsWhereInput
    /**
     * Limit how many UserPrivacySettings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPrivacySettingsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserPrivacySettings upsert
   */
  export type UserPrivacySettingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPrivacySettings
     */
    select?: UserPrivacySettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPrivacySettings
     */
    omit?: UserPrivacySettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPrivacySettingsInclude<ExtArgs> | null
    /**
     * The filter to search for the UserPrivacySettings to update in case it exists.
     */
    where: UserPrivacySettingsWhereUniqueInput
    /**
     * In case the UserPrivacySettings found by the `where` argument doesn't exist, create a new UserPrivacySettings with this data.
     */
    create: XOR<UserPrivacySettingsCreateInput, UserPrivacySettingsUncheckedCreateInput>
    /**
     * In case the UserPrivacySettings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserPrivacySettingsUpdateInput, UserPrivacySettingsUncheckedUpdateInput>
  }

  /**
   * UserPrivacySettings delete
   */
  export type UserPrivacySettingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPrivacySettings
     */
    select?: UserPrivacySettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPrivacySettings
     */
    omit?: UserPrivacySettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPrivacySettingsInclude<ExtArgs> | null
    /**
     * Filter which UserPrivacySettings to delete.
     */
    where: UserPrivacySettingsWhereUniqueInput
  }

  /**
   * UserPrivacySettings deleteMany
   */
  export type UserPrivacySettingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserPrivacySettings to delete
     */
    where?: UserPrivacySettingsWhereInput
    /**
     * Limit how many UserPrivacySettings to delete.
     */
    limit?: number
  }

  /**
   * UserPrivacySettings without action
   */
  export type UserPrivacySettingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPrivacySettings
     */
    select?: UserPrivacySettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPrivacySettings
     */
    omit?: UserPrivacySettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPrivacySettingsInclude<ExtArgs> | null
  }


  /**
   * Model Role
   */

  export type AggregateRole = {
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  export type RoleAvgAggregateOutputType = {
    Id: number | null
  }

  export type RoleSumAggregateOutputType = {
    Id: number | null
  }

  export type RoleMinAggregateOutputType = {
    Id: number | null
    Name: string | null
    Description: string | null
    Slug: string | null
    CreatedAt: Date | null
    UpdatedAt: Date | null
  }

  export type RoleMaxAggregateOutputType = {
    Id: number | null
    Name: string | null
    Description: string | null
    Slug: string | null
    CreatedAt: Date | null
    UpdatedAt: Date | null
  }

  export type RoleCountAggregateOutputType = {
    Id: number
    Name: number
    Description: number
    Slug: number
    CreatedAt: number
    UpdatedAt: number
    _all: number
  }


  export type RoleAvgAggregateInputType = {
    Id?: true
  }

  export type RoleSumAggregateInputType = {
    Id?: true
  }

  export type RoleMinAggregateInputType = {
    Id?: true
    Name?: true
    Description?: true
    Slug?: true
    CreatedAt?: true
    UpdatedAt?: true
  }

  export type RoleMaxAggregateInputType = {
    Id?: true
    Name?: true
    Description?: true
    Slug?: true
    CreatedAt?: true
    UpdatedAt?: true
  }

  export type RoleCountAggregateInputType = {
    Id?: true
    Name?: true
    Description?: true
    Slug?: true
    CreatedAt?: true
    UpdatedAt?: true
    _all?: true
  }

  export type RoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Role to aggregate.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Roles
    **/
    _count?: true | RoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoleMaxAggregateInputType
  }

  export type GetRoleAggregateType<T extends RoleAggregateArgs> = {
        [P in keyof T & keyof AggregateRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRole[P]>
      : GetScalarType<T[P], AggregateRole[P]>
  }




  export type RoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleWhereInput
    orderBy?: RoleOrderByWithAggregationInput | RoleOrderByWithAggregationInput[]
    by: RoleScalarFieldEnum[] | RoleScalarFieldEnum
    having?: RoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoleCountAggregateInputType | true
    _avg?: RoleAvgAggregateInputType
    _sum?: RoleSumAggregateInputType
    _min?: RoleMinAggregateInputType
    _max?: RoleMaxAggregateInputType
  }

  export type RoleGroupByOutputType = {
    Id: number
    Name: string
    Description: string | null
    Slug: string
    CreatedAt: Date
    UpdatedAt: Date
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  type GetRoleGroupByPayload<T extends RoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoleGroupByOutputType[P]>
            : GetScalarType<T[P], RoleGroupByOutputType[P]>
        }
      >
    >


  export type RoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    Name?: boolean
    Description?: boolean
    Slug?: boolean
    CreatedAt?: boolean
    UpdatedAt?: boolean
    Permissions?: boolean | Role$PermissionsArgs<ExtArgs>
    Users?: boolean | Role$UsersArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["role"]>

  export type RoleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    Name?: boolean
    Description?: boolean
    Slug?: boolean
    CreatedAt?: boolean
    UpdatedAt?: boolean
  }, ExtArgs["result"]["role"]>

  export type RoleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    Name?: boolean
    Description?: boolean
    Slug?: boolean
    CreatedAt?: boolean
    UpdatedAt?: boolean
  }, ExtArgs["result"]["role"]>

  export type RoleSelectScalar = {
    Id?: boolean
    Name?: boolean
    Description?: boolean
    Slug?: boolean
    CreatedAt?: boolean
    UpdatedAt?: boolean
  }

  export type RoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Id" | "Name" | "Description" | "Slug" | "CreatedAt" | "UpdatedAt", ExtArgs["result"]["role"]>
  export type RoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Permissions?: boolean | Role$PermissionsArgs<ExtArgs>
    Users?: boolean | Role$UsersArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RoleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RoleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Role"
    objects: {
      Permissions: Prisma.$PermissionPayload<ExtArgs>[]
      Users: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      Id: number
      Name: string
      Description: string | null
      Slug: string
      CreatedAt: Date
      UpdatedAt: Date
    }, ExtArgs["result"]["role"]>
    composites: {}
  }

  type RoleGetPayload<S extends boolean | null | undefined | RoleDefaultArgs> = $Result.GetResult<Prisma.$RolePayload, S>

  type RoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoleCountAggregateInputType | true
    }

  export interface RoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Role'], meta: { name: 'Role' } }
    /**
     * Find zero or one Role that matches the filter.
     * @param {RoleFindUniqueArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoleFindUniqueArgs>(args: SelectSubset<T, RoleFindUniqueArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Role that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoleFindUniqueOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoleFindUniqueOrThrowArgs>(args: SelectSubset<T, RoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoleFindFirstArgs>(args?: SelectSubset<T, RoleFindFirstArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoleFindFirstOrThrowArgs>(args?: SelectSubset<T, RoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.role.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.role.findMany({ take: 10 })
     * 
     * // Only select the `Id`
     * const roleWithIdOnly = await prisma.role.findMany({ select: { Id: true } })
     * 
     */
    findMany<T extends RoleFindManyArgs>(args?: SelectSubset<T, RoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Role.
     * @param {RoleCreateArgs} args - Arguments to create a Role.
     * @example
     * // Create one Role
     * const Role = await prisma.role.create({
     *   data: {
     *     // ... data to create a Role
     *   }
     * })
     * 
     */
    create<T extends RoleCreateArgs>(args: SelectSubset<T, RoleCreateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Roles.
     * @param {RoleCreateManyArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoleCreateManyArgs>(args?: SelectSubset<T, RoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Roles and returns the data saved in the database.
     * @param {RoleCreateManyAndReturnArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Roles and only return the `Id`
     * const roleWithIdOnly = await prisma.role.createManyAndReturn({
     *   select: { Id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoleCreateManyAndReturnArgs>(args?: SelectSubset<T, RoleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Role.
     * @param {RoleDeleteArgs} args - Arguments to delete one Role.
     * @example
     * // Delete one Role
     * const Role = await prisma.role.delete({
     *   where: {
     *     // ... filter to delete one Role
     *   }
     * })
     * 
     */
    delete<T extends RoleDeleteArgs>(args: SelectSubset<T, RoleDeleteArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Role.
     * @param {RoleUpdateArgs} args - Arguments to update one Role.
     * @example
     * // Update one Role
     * const role = await prisma.role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoleUpdateArgs>(args: SelectSubset<T, RoleUpdateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Roles.
     * @param {RoleDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoleDeleteManyArgs>(args?: SelectSubset<T, RoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoleUpdateManyArgs>(args: SelectSubset<T, RoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles and returns the data updated in the database.
     * @param {RoleUpdateManyAndReturnArgs} args - Arguments to update many Roles.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Roles and only return the `Id`
     * const roleWithIdOnly = await prisma.role.updateManyAndReturn({
     *   select: { Id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RoleUpdateManyAndReturnArgs>(args: SelectSubset<T, RoleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Role.
     * @param {RoleUpsertArgs} args - Arguments to update or create a Role.
     * @example
     * // Update or create a Role
     * const role = await prisma.role.upsert({
     *   create: {
     *     // ... data to create a Role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Role we want to update
     *   }
     * })
     */
    upsert<T extends RoleUpsertArgs>(args: SelectSubset<T, RoleUpsertArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.role.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends RoleCountArgs>(
      args?: Subset<T, RoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoleAggregateArgs>(args: Subset<T, RoleAggregateArgs>): Prisma.PrismaPromise<GetRoleAggregateType<T>>

    /**
     * Group by Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoleGroupByArgs['orderBy'] }
        : { orderBy?: RoleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Role model
   */
  readonly fields: RoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Permissions<T extends Role$PermissionsArgs<ExtArgs> = {}>(args?: Subset<T, Role$PermissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Users<T extends Role$UsersArgs<ExtArgs> = {}>(args?: Subset<T, Role$UsersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Role model
   */
  interface RoleFieldRefs {
    readonly Id: FieldRef<"Role", 'Int'>
    readonly Name: FieldRef<"Role", 'String'>
    readonly Description: FieldRef<"Role", 'String'>
    readonly Slug: FieldRef<"Role", 'String'>
    readonly CreatedAt: FieldRef<"Role", 'DateTime'>
    readonly UpdatedAt: FieldRef<"Role", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Role findUnique
   */
  export type RoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findUniqueOrThrow
   */
  export type RoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findFirst
   */
  export type RoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findFirstOrThrow
   */
  export type RoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findMany
   */
  export type RoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role create
   */
  export type RoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to create a Role.
     */
    data: XOR<RoleCreateInput, RoleUncheckedCreateInput>
  }

  /**
   * Role createMany
   */
  export type RoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role createManyAndReturn
   */
  export type RoleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role update
   */
  export type RoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to update a Role.
     */
    data: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
    /**
     * Choose, which Role to update.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role updateMany
   */
  export type RoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Role updateManyAndReturn
   */
  export type RoleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Role upsert
   */
  export type RoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The filter to search for the Role to update in case it exists.
     */
    where: RoleWhereUniqueInput
    /**
     * In case the Role found by the `where` argument doesn't exist, create a new Role with this data.
     */
    create: XOR<RoleCreateInput, RoleUncheckedCreateInput>
    /**
     * In case the Role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
  }

  /**
   * Role delete
   */
  export type RoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter which Role to delete.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role deleteMany
   */
  export type RoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roles to delete
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to delete.
     */
    limit?: number
  }

  /**
   * Role.Permissions
   */
  export type Role$PermissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    where?: PermissionWhereInput
    orderBy?: PermissionOrderByWithRelationInput | PermissionOrderByWithRelationInput[]
    cursor?: PermissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PermissionScalarFieldEnum | PermissionScalarFieldEnum[]
  }

  /**
   * Role.Users
   */
  export type Role$UsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Role without action
   */
  export type RoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
  }


  /**
   * Model Permission
   */

  export type AggregatePermission = {
    _count: PermissionCountAggregateOutputType | null
    _avg: PermissionAvgAggregateOutputType | null
    _sum: PermissionSumAggregateOutputType | null
    _min: PermissionMinAggregateOutputType | null
    _max: PermissionMaxAggregateOutputType | null
  }

  export type PermissionAvgAggregateOutputType = {
    Id: number | null
  }

  export type PermissionSumAggregateOutputType = {
    Id: number | null
  }

  export type PermissionMinAggregateOutputType = {
    Id: number | null
    Name: string | null
    Description: string | null
    Slug: string | null
    Entity: string | null
    Action: string | null
  }

  export type PermissionMaxAggregateOutputType = {
    Id: number | null
    Name: string | null
    Description: string | null
    Slug: string | null
    Entity: string | null
    Action: string | null
  }

  export type PermissionCountAggregateOutputType = {
    Id: number
    Name: number
    Description: number
    Slug: number
    Entity: number
    Action: number
    _all: number
  }


  export type PermissionAvgAggregateInputType = {
    Id?: true
  }

  export type PermissionSumAggregateInputType = {
    Id?: true
  }

  export type PermissionMinAggregateInputType = {
    Id?: true
    Name?: true
    Description?: true
    Slug?: true
    Entity?: true
    Action?: true
  }

  export type PermissionMaxAggregateInputType = {
    Id?: true
    Name?: true
    Description?: true
    Slug?: true
    Entity?: true
    Action?: true
  }

  export type PermissionCountAggregateInputType = {
    Id?: true
    Name?: true
    Description?: true
    Slug?: true
    Entity?: true
    Action?: true
    _all?: true
  }

  export type PermissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Permission to aggregate.
     */
    where?: PermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissions to fetch.
     */
    orderBy?: PermissionOrderByWithRelationInput | PermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Permissions
    **/
    _count?: true | PermissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PermissionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PermissionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PermissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PermissionMaxAggregateInputType
  }

  export type GetPermissionAggregateType<T extends PermissionAggregateArgs> = {
        [P in keyof T & keyof AggregatePermission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePermission[P]>
      : GetScalarType<T[P], AggregatePermission[P]>
  }




  export type PermissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PermissionWhereInput
    orderBy?: PermissionOrderByWithAggregationInput | PermissionOrderByWithAggregationInput[]
    by: PermissionScalarFieldEnum[] | PermissionScalarFieldEnum
    having?: PermissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PermissionCountAggregateInputType | true
    _avg?: PermissionAvgAggregateInputType
    _sum?: PermissionSumAggregateInputType
    _min?: PermissionMinAggregateInputType
    _max?: PermissionMaxAggregateInputType
  }

  export type PermissionGroupByOutputType = {
    Id: number
    Name: string
    Description: string | null
    Slug: string
    Entity: string
    Action: string
    _count: PermissionCountAggregateOutputType | null
    _avg: PermissionAvgAggregateOutputType | null
    _sum: PermissionSumAggregateOutputType | null
    _min: PermissionMinAggregateOutputType | null
    _max: PermissionMaxAggregateOutputType | null
  }

  type GetPermissionGroupByPayload<T extends PermissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PermissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PermissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PermissionGroupByOutputType[P]>
            : GetScalarType<T[P], PermissionGroupByOutputType[P]>
        }
      >
    >


  export type PermissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    Name?: boolean
    Description?: boolean
    Slug?: boolean
    Entity?: boolean
    Action?: boolean
    Roles?: boolean | Permission$RolesArgs<ExtArgs>
    _count?: boolean | PermissionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["permission"]>

  export type PermissionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    Name?: boolean
    Description?: boolean
    Slug?: boolean
    Entity?: boolean
    Action?: boolean
  }, ExtArgs["result"]["permission"]>

  export type PermissionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    Name?: boolean
    Description?: boolean
    Slug?: boolean
    Entity?: boolean
    Action?: boolean
  }, ExtArgs["result"]["permission"]>

  export type PermissionSelectScalar = {
    Id?: boolean
    Name?: boolean
    Description?: boolean
    Slug?: boolean
    Entity?: boolean
    Action?: boolean
  }

  export type PermissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Id" | "Name" | "Description" | "Slug" | "Entity" | "Action", ExtArgs["result"]["permission"]>
  export type PermissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Roles?: boolean | Permission$RolesArgs<ExtArgs>
    _count?: boolean | PermissionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PermissionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PermissionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PermissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Permission"
    objects: {
      Roles: Prisma.$RolePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      Id: number
      Name: string
      Description: string | null
      Slug: string
      Entity: string
      Action: string
    }, ExtArgs["result"]["permission"]>
    composites: {}
  }

  type PermissionGetPayload<S extends boolean | null | undefined | PermissionDefaultArgs> = $Result.GetResult<Prisma.$PermissionPayload, S>

  type PermissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PermissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PermissionCountAggregateInputType | true
    }

  export interface PermissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Permission'], meta: { name: 'Permission' } }
    /**
     * Find zero or one Permission that matches the filter.
     * @param {PermissionFindUniqueArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PermissionFindUniqueArgs>(args: SelectSubset<T, PermissionFindUniqueArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Permission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PermissionFindUniqueOrThrowArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PermissionFindUniqueOrThrowArgs>(args: SelectSubset<T, PermissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Permission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionFindFirstArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PermissionFindFirstArgs>(args?: SelectSubset<T, PermissionFindFirstArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Permission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionFindFirstOrThrowArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PermissionFindFirstOrThrowArgs>(args?: SelectSubset<T, PermissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Permissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Permissions
     * const permissions = await prisma.permission.findMany()
     * 
     * // Get first 10 Permissions
     * const permissions = await prisma.permission.findMany({ take: 10 })
     * 
     * // Only select the `Id`
     * const permissionWithIdOnly = await prisma.permission.findMany({ select: { Id: true } })
     * 
     */
    findMany<T extends PermissionFindManyArgs>(args?: SelectSubset<T, PermissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Permission.
     * @param {PermissionCreateArgs} args - Arguments to create a Permission.
     * @example
     * // Create one Permission
     * const Permission = await prisma.permission.create({
     *   data: {
     *     // ... data to create a Permission
     *   }
     * })
     * 
     */
    create<T extends PermissionCreateArgs>(args: SelectSubset<T, PermissionCreateArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Permissions.
     * @param {PermissionCreateManyArgs} args - Arguments to create many Permissions.
     * @example
     * // Create many Permissions
     * const permission = await prisma.permission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PermissionCreateManyArgs>(args?: SelectSubset<T, PermissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Permissions and returns the data saved in the database.
     * @param {PermissionCreateManyAndReturnArgs} args - Arguments to create many Permissions.
     * @example
     * // Create many Permissions
     * const permission = await prisma.permission.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Permissions and only return the `Id`
     * const permissionWithIdOnly = await prisma.permission.createManyAndReturn({
     *   select: { Id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PermissionCreateManyAndReturnArgs>(args?: SelectSubset<T, PermissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Permission.
     * @param {PermissionDeleteArgs} args - Arguments to delete one Permission.
     * @example
     * // Delete one Permission
     * const Permission = await prisma.permission.delete({
     *   where: {
     *     // ... filter to delete one Permission
     *   }
     * })
     * 
     */
    delete<T extends PermissionDeleteArgs>(args: SelectSubset<T, PermissionDeleteArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Permission.
     * @param {PermissionUpdateArgs} args - Arguments to update one Permission.
     * @example
     * // Update one Permission
     * const permission = await prisma.permission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PermissionUpdateArgs>(args: SelectSubset<T, PermissionUpdateArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Permissions.
     * @param {PermissionDeleteManyArgs} args - Arguments to filter Permissions to delete.
     * @example
     * // Delete a few Permissions
     * const { count } = await prisma.permission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PermissionDeleteManyArgs>(args?: SelectSubset<T, PermissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Permissions
     * const permission = await prisma.permission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PermissionUpdateManyArgs>(args: SelectSubset<T, PermissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Permissions and returns the data updated in the database.
     * @param {PermissionUpdateManyAndReturnArgs} args - Arguments to update many Permissions.
     * @example
     * // Update many Permissions
     * const permission = await prisma.permission.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Permissions and only return the `Id`
     * const permissionWithIdOnly = await prisma.permission.updateManyAndReturn({
     *   select: { Id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PermissionUpdateManyAndReturnArgs>(args: SelectSubset<T, PermissionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Permission.
     * @param {PermissionUpsertArgs} args - Arguments to update or create a Permission.
     * @example
     * // Update or create a Permission
     * const permission = await prisma.permission.upsert({
     *   create: {
     *     // ... data to create a Permission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Permission we want to update
     *   }
     * })
     */
    upsert<T extends PermissionUpsertArgs>(args: SelectSubset<T, PermissionUpsertArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionCountArgs} args - Arguments to filter Permissions to count.
     * @example
     * // Count the number of Permissions
     * const count = await prisma.permission.count({
     *   where: {
     *     // ... the filter for the Permissions we want to count
     *   }
     * })
    **/
    count<T extends PermissionCountArgs>(
      args?: Subset<T, PermissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PermissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Permission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PermissionAggregateArgs>(args: Subset<T, PermissionAggregateArgs>): Prisma.PrismaPromise<GetPermissionAggregateType<T>>

    /**
     * Group by Permission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PermissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PermissionGroupByArgs['orderBy'] }
        : { orderBy?: PermissionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PermissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPermissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Permission model
   */
  readonly fields: PermissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Permission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PermissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Roles<T extends Permission$RolesArgs<ExtArgs> = {}>(args?: Subset<T, Permission$RolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Permission model
   */
  interface PermissionFieldRefs {
    readonly Id: FieldRef<"Permission", 'Int'>
    readonly Name: FieldRef<"Permission", 'String'>
    readonly Description: FieldRef<"Permission", 'String'>
    readonly Slug: FieldRef<"Permission", 'String'>
    readonly Entity: FieldRef<"Permission", 'String'>
    readonly Action: FieldRef<"Permission", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Permission findUnique
   */
  export type PermissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter, which Permission to fetch.
     */
    where: PermissionWhereUniqueInput
  }

  /**
   * Permission findUniqueOrThrow
   */
  export type PermissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter, which Permission to fetch.
     */
    where: PermissionWhereUniqueInput
  }

  /**
   * Permission findFirst
   */
  export type PermissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter, which Permission to fetch.
     */
    where?: PermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissions to fetch.
     */
    orderBy?: PermissionOrderByWithRelationInput | PermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Permissions.
     */
    cursor?: PermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Permissions.
     */
    distinct?: PermissionScalarFieldEnum | PermissionScalarFieldEnum[]
  }

  /**
   * Permission findFirstOrThrow
   */
  export type PermissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter, which Permission to fetch.
     */
    where?: PermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissions to fetch.
     */
    orderBy?: PermissionOrderByWithRelationInput | PermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Permissions.
     */
    cursor?: PermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Permissions.
     */
    distinct?: PermissionScalarFieldEnum | PermissionScalarFieldEnum[]
  }

  /**
   * Permission findMany
   */
  export type PermissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter, which Permissions to fetch.
     */
    where?: PermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissions to fetch.
     */
    orderBy?: PermissionOrderByWithRelationInput | PermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Permissions.
     */
    cursor?: PermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissions.
     */
    skip?: number
    distinct?: PermissionScalarFieldEnum | PermissionScalarFieldEnum[]
  }

  /**
   * Permission create
   */
  export type PermissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * The data needed to create a Permission.
     */
    data: XOR<PermissionCreateInput, PermissionUncheckedCreateInput>
  }

  /**
   * Permission createMany
   */
  export type PermissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Permissions.
     */
    data: PermissionCreateManyInput | PermissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Permission createManyAndReturn
   */
  export type PermissionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * The data used to create many Permissions.
     */
    data: PermissionCreateManyInput | PermissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Permission update
   */
  export type PermissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * The data needed to update a Permission.
     */
    data: XOR<PermissionUpdateInput, PermissionUncheckedUpdateInput>
    /**
     * Choose, which Permission to update.
     */
    where: PermissionWhereUniqueInput
  }

  /**
   * Permission updateMany
   */
  export type PermissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Permissions.
     */
    data: XOR<PermissionUpdateManyMutationInput, PermissionUncheckedUpdateManyInput>
    /**
     * Filter which Permissions to update
     */
    where?: PermissionWhereInput
    /**
     * Limit how many Permissions to update.
     */
    limit?: number
  }

  /**
   * Permission updateManyAndReturn
   */
  export type PermissionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * The data used to update Permissions.
     */
    data: XOR<PermissionUpdateManyMutationInput, PermissionUncheckedUpdateManyInput>
    /**
     * Filter which Permissions to update
     */
    where?: PermissionWhereInput
    /**
     * Limit how many Permissions to update.
     */
    limit?: number
  }

  /**
   * Permission upsert
   */
  export type PermissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * The filter to search for the Permission to update in case it exists.
     */
    where: PermissionWhereUniqueInput
    /**
     * In case the Permission found by the `where` argument doesn't exist, create a new Permission with this data.
     */
    create: XOR<PermissionCreateInput, PermissionUncheckedCreateInput>
    /**
     * In case the Permission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PermissionUpdateInput, PermissionUncheckedUpdateInput>
  }

  /**
   * Permission delete
   */
  export type PermissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter which Permission to delete.
     */
    where: PermissionWhereUniqueInput
  }

  /**
   * Permission deleteMany
   */
  export type PermissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Permissions to delete
     */
    where?: PermissionWhereInput
    /**
     * Limit how many Permissions to delete.
     */
    limit?: number
  }

  /**
   * Permission.Roles
   */
  export type Permission$RolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    where?: RoleWhereInput
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    cursor?: RoleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Permission without action
   */
  export type PermissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
  }


  /**
   * Model Livery
   */

  export type AggregateLivery = {
    _count: LiveryCountAggregateOutputType | null
    _avg: LiveryAvgAggregateOutputType | null
    _sum: LiverySumAggregateOutputType | null
    _min: LiveryMinAggregateOutputType | null
    _max: LiveryMaxAggregateOutputType | null
  }

  export type LiveryAvgAggregateOutputType = {
    DownloadCount: number | null
  }

  export type LiverySumAggregateOutputType = {
    DownloadCount: number | null
  }

  export type LiveryMinAggregateOutputType = {
    Id: string | null
    Name: string | null
    IsActive: boolean | null
    DownloadCount: number | null
    Image: string | null
    Url: string | null
    Description: string | null
    DownloadUrl: string | null
    CreatedAt: Date | null
    UpdatedAt: Date | null
  }

  export type LiveryMaxAggregateOutputType = {
    Id: string | null
    Name: string | null
    IsActive: boolean | null
    DownloadCount: number | null
    Image: string | null
    Url: string | null
    Description: string | null
    DownloadUrl: string | null
    CreatedAt: Date | null
    UpdatedAt: Date | null
  }

  export type LiveryCountAggregateOutputType = {
    Id: number
    Name: number
    IsActive: number
    DownloadCount: number
    Image: number
    Url: number
    Description: number
    DownloadUrl: number
    CreatedAt: number
    UpdatedAt: number
    _all: number
  }


  export type LiveryAvgAggregateInputType = {
    DownloadCount?: true
  }

  export type LiverySumAggregateInputType = {
    DownloadCount?: true
  }

  export type LiveryMinAggregateInputType = {
    Id?: true
    Name?: true
    IsActive?: true
    DownloadCount?: true
    Image?: true
    Url?: true
    Description?: true
    DownloadUrl?: true
    CreatedAt?: true
    UpdatedAt?: true
  }

  export type LiveryMaxAggregateInputType = {
    Id?: true
    Name?: true
    IsActive?: true
    DownloadCount?: true
    Image?: true
    Url?: true
    Description?: true
    DownloadUrl?: true
    CreatedAt?: true
    UpdatedAt?: true
  }

  export type LiveryCountAggregateInputType = {
    Id?: true
    Name?: true
    IsActive?: true
    DownloadCount?: true
    Image?: true
    Url?: true
    Description?: true
    DownloadUrl?: true
    CreatedAt?: true
    UpdatedAt?: true
    _all?: true
  }

  export type LiveryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Livery to aggregate.
     */
    where?: LiveryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Liveries to fetch.
     */
    orderBy?: LiveryOrderByWithRelationInput | LiveryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LiveryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Liveries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Liveries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Liveries
    **/
    _count?: true | LiveryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LiveryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LiverySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LiveryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LiveryMaxAggregateInputType
  }

  export type GetLiveryAggregateType<T extends LiveryAggregateArgs> = {
        [P in keyof T & keyof AggregateLivery]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLivery[P]>
      : GetScalarType<T[P], AggregateLivery[P]>
  }




  export type LiveryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LiveryWhereInput
    orderBy?: LiveryOrderByWithAggregationInput | LiveryOrderByWithAggregationInput[]
    by: LiveryScalarFieldEnum[] | LiveryScalarFieldEnum
    having?: LiveryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LiveryCountAggregateInputType | true
    _avg?: LiveryAvgAggregateInputType
    _sum?: LiverySumAggregateInputType
    _min?: LiveryMinAggregateInputType
    _max?: LiveryMaxAggregateInputType
  }

  export type LiveryGroupByOutputType = {
    Id: string
    Name: string
    IsActive: boolean
    DownloadCount: number
    Image: string
    Url: string | null
    Description: string | null
    DownloadUrl: string | null
    CreatedAt: Date
    UpdatedAt: Date
    _count: LiveryCountAggregateOutputType | null
    _avg: LiveryAvgAggregateOutputType | null
    _sum: LiverySumAggregateOutputType | null
    _min: LiveryMinAggregateOutputType | null
    _max: LiveryMaxAggregateOutputType | null
  }

  type GetLiveryGroupByPayload<T extends LiveryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LiveryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LiveryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LiveryGroupByOutputType[P]>
            : GetScalarType<T[P], LiveryGroupByOutputType[P]>
        }
      >
    >


  export type LiverySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    Name?: boolean
    IsActive?: boolean
    DownloadCount?: boolean
    Image?: boolean
    Url?: boolean
    Description?: boolean
    DownloadUrl?: boolean
    CreatedAt?: boolean
    UpdatedAt?: boolean
  }, ExtArgs["result"]["livery"]>

  export type LiverySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    Name?: boolean
    IsActive?: boolean
    DownloadCount?: boolean
    Image?: boolean
    Url?: boolean
    Description?: boolean
    DownloadUrl?: boolean
    CreatedAt?: boolean
    UpdatedAt?: boolean
  }, ExtArgs["result"]["livery"]>

  export type LiverySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    Name?: boolean
    IsActive?: boolean
    DownloadCount?: boolean
    Image?: boolean
    Url?: boolean
    Description?: boolean
    DownloadUrl?: boolean
    CreatedAt?: boolean
    UpdatedAt?: boolean
  }, ExtArgs["result"]["livery"]>

  export type LiverySelectScalar = {
    Id?: boolean
    Name?: boolean
    IsActive?: boolean
    DownloadCount?: boolean
    Image?: boolean
    Url?: boolean
    Description?: boolean
    DownloadUrl?: boolean
    CreatedAt?: boolean
    UpdatedAt?: boolean
  }

  export type LiveryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Id" | "Name" | "IsActive" | "DownloadCount" | "Image" | "Url" | "Description" | "DownloadUrl" | "CreatedAt" | "UpdatedAt", ExtArgs["result"]["livery"]>

  export type $LiveryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Livery"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      Id: string
      Name: string
      IsActive: boolean
      DownloadCount: number
      Image: string
      Url: string | null
      Description: string | null
      DownloadUrl: string | null
      CreatedAt: Date
      UpdatedAt: Date
    }, ExtArgs["result"]["livery"]>
    composites: {}
  }

  type LiveryGetPayload<S extends boolean | null | undefined | LiveryDefaultArgs> = $Result.GetResult<Prisma.$LiveryPayload, S>

  type LiveryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LiveryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LiveryCountAggregateInputType | true
    }

  export interface LiveryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Livery'], meta: { name: 'Livery' } }
    /**
     * Find zero or one Livery that matches the filter.
     * @param {LiveryFindUniqueArgs} args - Arguments to find a Livery
     * @example
     * // Get one Livery
     * const livery = await prisma.livery.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LiveryFindUniqueArgs>(args: SelectSubset<T, LiveryFindUniqueArgs<ExtArgs>>): Prisma__LiveryClient<$Result.GetResult<Prisma.$LiveryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Livery that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LiveryFindUniqueOrThrowArgs} args - Arguments to find a Livery
     * @example
     * // Get one Livery
     * const livery = await prisma.livery.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LiveryFindUniqueOrThrowArgs>(args: SelectSubset<T, LiveryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LiveryClient<$Result.GetResult<Prisma.$LiveryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Livery that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LiveryFindFirstArgs} args - Arguments to find a Livery
     * @example
     * // Get one Livery
     * const livery = await prisma.livery.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LiveryFindFirstArgs>(args?: SelectSubset<T, LiveryFindFirstArgs<ExtArgs>>): Prisma__LiveryClient<$Result.GetResult<Prisma.$LiveryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Livery that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LiveryFindFirstOrThrowArgs} args - Arguments to find a Livery
     * @example
     * // Get one Livery
     * const livery = await prisma.livery.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LiveryFindFirstOrThrowArgs>(args?: SelectSubset<T, LiveryFindFirstOrThrowArgs<ExtArgs>>): Prisma__LiveryClient<$Result.GetResult<Prisma.$LiveryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Liveries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LiveryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Liveries
     * const liveries = await prisma.livery.findMany()
     * 
     * // Get first 10 Liveries
     * const liveries = await prisma.livery.findMany({ take: 10 })
     * 
     * // Only select the `Id`
     * const liveryWithIdOnly = await prisma.livery.findMany({ select: { Id: true } })
     * 
     */
    findMany<T extends LiveryFindManyArgs>(args?: SelectSubset<T, LiveryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LiveryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Livery.
     * @param {LiveryCreateArgs} args - Arguments to create a Livery.
     * @example
     * // Create one Livery
     * const Livery = await prisma.livery.create({
     *   data: {
     *     // ... data to create a Livery
     *   }
     * })
     * 
     */
    create<T extends LiveryCreateArgs>(args: SelectSubset<T, LiveryCreateArgs<ExtArgs>>): Prisma__LiveryClient<$Result.GetResult<Prisma.$LiveryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Liveries.
     * @param {LiveryCreateManyArgs} args - Arguments to create many Liveries.
     * @example
     * // Create many Liveries
     * const livery = await prisma.livery.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LiveryCreateManyArgs>(args?: SelectSubset<T, LiveryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Liveries and returns the data saved in the database.
     * @param {LiveryCreateManyAndReturnArgs} args - Arguments to create many Liveries.
     * @example
     * // Create many Liveries
     * const livery = await prisma.livery.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Liveries and only return the `Id`
     * const liveryWithIdOnly = await prisma.livery.createManyAndReturn({
     *   select: { Id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LiveryCreateManyAndReturnArgs>(args?: SelectSubset<T, LiveryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LiveryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Livery.
     * @param {LiveryDeleteArgs} args - Arguments to delete one Livery.
     * @example
     * // Delete one Livery
     * const Livery = await prisma.livery.delete({
     *   where: {
     *     // ... filter to delete one Livery
     *   }
     * })
     * 
     */
    delete<T extends LiveryDeleteArgs>(args: SelectSubset<T, LiveryDeleteArgs<ExtArgs>>): Prisma__LiveryClient<$Result.GetResult<Prisma.$LiveryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Livery.
     * @param {LiveryUpdateArgs} args - Arguments to update one Livery.
     * @example
     * // Update one Livery
     * const livery = await prisma.livery.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LiveryUpdateArgs>(args: SelectSubset<T, LiveryUpdateArgs<ExtArgs>>): Prisma__LiveryClient<$Result.GetResult<Prisma.$LiveryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Liveries.
     * @param {LiveryDeleteManyArgs} args - Arguments to filter Liveries to delete.
     * @example
     * // Delete a few Liveries
     * const { count } = await prisma.livery.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LiveryDeleteManyArgs>(args?: SelectSubset<T, LiveryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Liveries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LiveryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Liveries
     * const livery = await prisma.livery.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LiveryUpdateManyArgs>(args: SelectSubset<T, LiveryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Liveries and returns the data updated in the database.
     * @param {LiveryUpdateManyAndReturnArgs} args - Arguments to update many Liveries.
     * @example
     * // Update many Liveries
     * const livery = await prisma.livery.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Liveries and only return the `Id`
     * const liveryWithIdOnly = await prisma.livery.updateManyAndReturn({
     *   select: { Id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LiveryUpdateManyAndReturnArgs>(args: SelectSubset<T, LiveryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LiveryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Livery.
     * @param {LiveryUpsertArgs} args - Arguments to update or create a Livery.
     * @example
     * // Update or create a Livery
     * const livery = await prisma.livery.upsert({
     *   create: {
     *     // ... data to create a Livery
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Livery we want to update
     *   }
     * })
     */
    upsert<T extends LiveryUpsertArgs>(args: SelectSubset<T, LiveryUpsertArgs<ExtArgs>>): Prisma__LiveryClient<$Result.GetResult<Prisma.$LiveryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Liveries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LiveryCountArgs} args - Arguments to filter Liveries to count.
     * @example
     * // Count the number of Liveries
     * const count = await prisma.livery.count({
     *   where: {
     *     // ... the filter for the Liveries we want to count
     *   }
     * })
    **/
    count<T extends LiveryCountArgs>(
      args?: Subset<T, LiveryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LiveryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Livery.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LiveryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LiveryAggregateArgs>(args: Subset<T, LiveryAggregateArgs>): Prisma.PrismaPromise<GetLiveryAggregateType<T>>

    /**
     * Group by Livery.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LiveryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LiveryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LiveryGroupByArgs['orderBy'] }
        : { orderBy?: LiveryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LiveryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLiveryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Livery model
   */
  readonly fields: LiveryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Livery.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LiveryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Livery model
   */
  interface LiveryFieldRefs {
    readonly Id: FieldRef<"Livery", 'String'>
    readonly Name: FieldRef<"Livery", 'String'>
    readonly IsActive: FieldRef<"Livery", 'Boolean'>
    readonly DownloadCount: FieldRef<"Livery", 'Int'>
    readonly Image: FieldRef<"Livery", 'String'>
    readonly Url: FieldRef<"Livery", 'String'>
    readonly Description: FieldRef<"Livery", 'String'>
    readonly DownloadUrl: FieldRef<"Livery", 'String'>
    readonly CreatedAt: FieldRef<"Livery", 'DateTime'>
    readonly UpdatedAt: FieldRef<"Livery", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Livery findUnique
   */
  export type LiveryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livery
     */
    select?: LiverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Livery
     */
    omit?: LiveryOmit<ExtArgs> | null
    /**
     * Filter, which Livery to fetch.
     */
    where: LiveryWhereUniqueInput
  }

  /**
   * Livery findUniqueOrThrow
   */
  export type LiveryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livery
     */
    select?: LiverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Livery
     */
    omit?: LiveryOmit<ExtArgs> | null
    /**
     * Filter, which Livery to fetch.
     */
    where: LiveryWhereUniqueInput
  }

  /**
   * Livery findFirst
   */
  export type LiveryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livery
     */
    select?: LiverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Livery
     */
    omit?: LiveryOmit<ExtArgs> | null
    /**
     * Filter, which Livery to fetch.
     */
    where?: LiveryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Liveries to fetch.
     */
    orderBy?: LiveryOrderByWithRelationInput | LiveryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Liveries.
     */
    cursor?: LiveryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Liveries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Liveries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Liveries.
     */
    distinct?: LiveryScalarFieldEnum | LiveryScalarFieldEnum[]
  }

  /**
   * Livery findFirstOrThrow
   */
  export type LiveryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livery
     */
    select?: LiverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Livery
     */
    omit?: LiveryOmit<ExtArgs> | null
    /**
     * Filter, which Livery to fetch.
     */
    where?: LiveryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Liveries to fetch.
     */
    orderBy?: LiveryOrderByWithRelationInput | LiveryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Liveries.
     */
    cursor?: LiveryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Liveries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Liveries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Liveries.
     */
    distinct?: LiveryScalarFieldEnum | LiveryScalarFieldEnum[]
  }

  /**
   * Livery findMany
   */
  export type LiveryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livery
     */
    select?: LiverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Livery
     */
    omit?: LiveryOmit<ExtArgs> | null
    /**
     * Filter, which Liveries to fetch.
     */
    where?: LiveryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Liveries to fetch.
     */
    orderBy?: LiveryOrderByWithRelationInput | LiveryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Liveries.
     */
    cursor?: LiveryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Liveries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Liveries.
     */
    skip?: number
    distinct?: LiveryScalarFieldEnum | LiveryScalarFieldEnum[]
  }

  /**
   * Livery create
   */
  export type LiveryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livery
     */
    select?: LiverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Livery
     */
    omit?: LiveryOmit<ExtArgs> | null
    /**
     * The data needed to create a Livery.
     */
    data: XOR<LiveryCreateInput, LiveryUncheckedCreateInput>
  }

  /**
   * Livery createMany
   */
  export type LiveryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Liveries.
     */
    data: LiveryCreateManyInput | LiveryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Livery createManyAndReturn
   */
  export type LiveryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livery
     */
    select?: LiverySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Livery
     */
    omit?: LiveryOmit<ExtArgs> | null
    /**
     * The data used to create many Liveries.
     */
    data: LiveryCreateManyInput | LiveryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Livery update
   */
  export type LiveryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livery
     */
    select?: LiverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Livery
     */
    omit?: LiveryOmit<ExtArgs> | null
    /**
     * The data needed to update a Livery.
     */
    data: XOR<LiveryUpdateInput, LiveryUncheckedUpdateInput>
    /**
     * Choose, which Livery to update.
     */
    where: LiveryWhereUniqueInput
  }

  /**
   * Livery updateMany
   */
  export type LiveryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Liveries.
     */
    data: XOR<LiveryUpdateManyMutationInput, LiveryUncheckedUpdateManyInput>
    /**
     * Filter which Liveries to update
     */
    where?: LiveryWhereInput
    /**
     * Limit how many Liveries to update.
     */
    limit?: number
  }

  /**
   * Livery updateManyAndReturn
   */
  export type LiveryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livery
     */
    select?: LiverySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Livery
     */
    omit?: LiveryOmit<ExtArgs> | null
    /**
     * The data used to update Liveries.
     */
    data: XOR<LiveryUpdateManyMutationInput, LiveryUncheckedUpdateManyInput>
    /**
     * Filter which Liveries to update
     */
    where?: LiveryWhereInput
    /**
     * Limit how many Liveries to update.
     */
    limit?: number
  }

  /**
   * Livery upsert
   */
  export type LiveryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livery
     */
    select?: LiverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Livery
     */
    omit?: LiveryOmit<ExtArgs> | null
    /**
     * The filter to search for the Livery to update in case it exists.
     */
    where: LiveryWhereUniqueInput
    /**
     * In case the Livery found by the `where` argument doesn't exist, create a new Livery with this data.
     */
    create: XOR<LiveryCreateInput, LiveryUncheckedCreateInput>
    /**
     * In case the Livery was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LiveryUpdateInput, LiveryUncheckedUpdateInput>
  }

  /**
   * Livery delete
   */
  export type LiveryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livery
     */
    select?: LiverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Livery
     */
    omit?: LiveryOmit<ExtArgs> | null
    /**
     * Filter which Livery to delete.
     */
    where: LiveryWhereUniqueInput
  }

  /**
   * Livery deleteMany
   */
  export type LiveryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Liveries to delete
     */
    where?: LiveryWhereInput
    /**
     * Limit how many Liveries to delete.
     */
    limit?: number
  }

  /**
   * Livery without action
   */
  export type LiveryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livery
     */
    select?: LiverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Livery
     */
    omit?: LiveryOmit<ExtArgs> | null
  }


  /**
   * Model VirtualAirline
   */

  export type AggregateVirtualAirline = {
    _count: VirtualAirlineCountAggregateOutputType | null
    _avg: VirtualAirlineAvgAggregateOutputType | null
    _sum: VirtualAirlineSumAggregateOutputType | null
    _min: VirtualAirlineMinAggregateOutputType | null
    _max: VirtualAirlineMaxAggregateOutputType | null
  }

  export type VirtualAirlineAvgAggregateOutputType = {
    ComputedMemberCount: number | null
    ComputedAircraftsCount: number | null
    ComputedNumberOfFlights30Days: number | null
    ComputedNumberOfFlightHours30Days: number | null
    Reputation: Decimal | null
    DifficultyLevel: number | null
    Level: number | null
    LevelXP: number | null
    TotalContractsCompleted: number | null
    TotalContractsEarnedCredits: number | null
  }

  export type VirtualAirlineSumAggregateOutputType = {
    ComputedMemberCount: number | null
    ComputedAircraftsCount: number | null
    ComputedNumberOfFlights30Days: number | null
    ComputedNumberOfFlightHours30Days: number | null
    Reputation: Decimal | null
    DifficultyLevel: number | null
    Level: number | null
    LevelXP: number | null
    TotalContractsCompleted: number | null
    TotalContractsEarnedCredits: number | null
  }

  export type VirtualAirlineMinAggregateOutputType = {
    Id: string | null
    ApiKey: string | null
    IsPrimary: boolean | null
    Identifier: string | null
    Name: string | null
    Description: string | null
    WorldId: string | null
    LastDividendsDistribution: Date | null
    LastComputationDate: Date | null
    ComputedMemberCount: number | null
    ComputedAircraftsCount: number | null
    ComputedNumberOfFlights30Days: number | null
    ComputedNumberOfFlightHours30Days: number | null
    ComputedMostUsedAirports: string | null
    LastConnection: Date | null
    LastReportDate: Date | null
    Reputation: Decimal | null
    CreationDate: Date | null
    DifficultyLevel: number | null
    Level: number | null
    LevelXP: number | null
    TotalContractsCompleted: number | null
    TotalContractsEarnedCredits: number | null
    LastRefresh: Date | null
    CreatedAt: Date | null
    UpdatedAt: Date | null
  }

  export type VirtualAirlineMaxAggregateOutputType = {
    Id: string | null
    ApiKey: string | null
    IsPrimary: boolean | null
    Identifier: string | null
    Name: string | null
    Description: string | null
    WorldId: string | null
    LastDividendsDistribution: Date | null
    LastComputationDate: Date | null
    ComputedMemberCount: number | null
    ComputedAircraftsCount: number | null
    ComputedNumberOfFlights30Days: number | null
    ComputedNumberOfFlightHours30Days: number | null
    ComputedMostUsedAirports: string | null
    LastConnection: Date | null
    LastReportDate: Date | null
    Reputation: Decimal | null
    CreationDate: Date | null
    DifficultyLevel: number | null
    Level: number | null
    LevelXP: number | null
    TotalContractsCompleted: number | null
    TotalContractsEarnedCredits: number | null
    LastRefresh: Date | null
    CreatedAt: Date | null
    UpdatedAt: Date | null
  }

  export type VirtualAirlineCountAggregateOutputType = {
    Id: number
    ApiKey: number
    IsPrimary: number
    Identifier: number
    Name: number
    Description: number
    WorldId: number
    LastDividendsDistribution: number
    LastComputationDate: number
    ComputedMemberCount: number
    ComputedAircraftsCount: number
    ComputedNumberOfFlights30Days: number
    ComputedNumberOfFlightHours30Days: number
    ComputedMostUsedAirports: number
    LastConnection: number
    LastReportDate: number
    Reputation: number
    CreationDate: number
    DifficultyLevel: number
    Level: number
    LevelXP: number
    TotalContractsCompleted: number
    TotalContractsEarnedCredits: number
    LastRefresh: number
    CreatedAt: number
    UpdatedAt: number
    _all: number
  }


  export type VirtualAirlineAvgAggregateInputType = {
    ComputedMemberCount?: true
    ComputedAircraftsCount?: true
    ComputedNumberOfFlights30Days?: true
    ComputedNumberOfFlightHours30Days?: true
    Reputation?: true
    DifficultyLevel?: true
    Level?: true
    LevelXP?: true
    TotalContractsCompleted?: true
    TotalContractsEarnedCredits?: true
  }

  export type VirtualAirlineSumAggregateInputType = {
    ComputedMemberCount?: true
    ComputedAircraftsCount?: true
    ComputedNumberOfFlights30Days?: true
    ComputedNumberOfFlightHours30Days?: true
    Reputation?: true
    DifficultyLevel?: true
    Level?: true
    LevelXP?: true
    TotalContractsCompleted?: true
    TotalContractsEarnedCredits?: true
  }

  export type VirtualAirlineMinAggregateInputType = {
    Id?: true
    ApiKey?: true
    IsPrimary?: true
    Identifier?: true
    Name?: true
    Description?: true
    WorldId?: true
    LastDividendsDistribution?: true
    LastComputationDate?: true
    ComputedMemberCount?: true
    ComputedAircraftsCount?: true
    ComputedNumberOfFlights30Days?: true
    ComputedNumberOfFlightHours30Days?: true
    ComputedMostUsedAirports?: true
    LastConnection?: true
    LastReportDate?: true
    Reputation?: true
    CreationDate?: true
    DifficultyLevel?: true
    Level?: true
    LevelXP?: true
    TotalContractsCompleted?: true
    TotalContractsEarnedCredits?: true
    LastRefresh?: true
    CreatedAt?: true
    UpdatedAt?: true
  }

  export type VirtualAirlineMaxAggregateInputType = {
    Id?: true
    ApiKey?: true
    IsPrimary?: true
    Identifier?: true
    Name?: true
    Description?: true
    WorldId?: true
    LastDividendsDistribution?: true
    LastComputationDate?: true
    ComputedMemberCount?: true
    ComputedAircraftsCount?: true
    ComputedNumberOfFlights30Days?: true
    ComputedNumberOfFlightHours30Days?: true
    ComputedMostUsedAirports?: true
    LastConnection?: true
    LastReportDate?: true
    Reputation?: true
    CreationDate?: true
    DifficultyLevel?: true
    Level?: true
    LevelXP?: true
    TotalContractsCompleted?: true
    TotalContractsEarnedCredits?: true
    LastRefresh?: true
    CreatedAt?: true
    UpdatedAt?: true
  }

  export type VirtualAirlineCountAggregateInputType = {
    Id?: true
    ApiKey?: true
    IsPrimary?: true
    Identifier?: true
    Name?: true
    Description?: true
    WorldId?: true
    LastDividendsDistribution?: true
    LastComputationDate?: true
    ComputedMemberCount?: true
    ComputedAircraftsCount?: true
    ComputedNumberOfFlights30Days?: true
    ComputedNumberOfFlightHours30Days?: true
    ComputedMostUsedAirports?: true
    LastConnection?: true
    LastReportDate?: true
    Reputation?: true
    CreationDate?: true
    DifficultyLevel?: true
    Level?: true
    LevelXP?: true
    TotalContractsCompleted?: true
    TotalContractsEarnedCredits?: true
    LastRefresh?: true
    CreatedAt?: true
    UpdatedAt?: true
    _all?: true
  }

  export type VirtualAirlineAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VirtualAirline to aggregate.
     */
    where?: VirtualAirlineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VirtualAirlines to fetch.
     */
    orderBy?: VirtualAirlineOrderByWithRelationInput | VirtualAirlineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VirtualAirlineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VirtualAirlines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VirtualAirlines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VirtualAirlines
    **/
    _count?: true | VirtualAirlineCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VirtualAirlineAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VirtualAirlineSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VirtualAirlineMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VirtualAirlineMaxAggregateInputType
  }

  export type GetVirtualAirlineAggregateType<T extends VirtualAirlineAggregateArgs> = {
        [P in keyof T & keyof AggregateVirtualAirline]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVirtualAirline[P]>
      : GetScalarType<T[P], AggregateVirtualAirline[P]>
  }




  export type VirtualAirlineGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VirtualAirlineWhereInput
    orderBy?: VirtualAirlineOrderByWithAggregationInput | VirtualAirlineOrderByWithAggregationInput[]
    by: VirtualAirlineScalarFieldEnum[] | VirtualAirlineScalarFieldEnum
    having?: VirtualAirlineScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VirtualAirlineCountAggregateInputType | true
    _avg?: VirtualAirlineAvgAggregateInputType
    _sum?: VirtualAirlineSumAggregateInputType
    _min?: VirtualAirlineMinAggregateInputType
    _max?: VirtualAirlineMaxAggregateInputType
  }

  export type VirtualAirlineGroupByOutputType = {
    Id: string
    ApiKey: string
    IsPrimary: boolean
    Identifier: string | null
    Name: string | null
    Description: string | null
    WorldId: string | null
    LastDividendsDistribution: Date | null
    LastComputationDate: Date | null
    ComputedMemberCount: number | null
    ComputedAircraftsCount: number | null
    ComputedNumberOfFlights30Days: number | null
    ComputedNumberOfFlightHours30Days: number | null
    ComputedMostUsedAirports: string | null
    LastConnection: Date | null
    LastReportDate: Date | null
    Reputation: Decimal | null
    CreationDate: Date | null
    DifficultyLevel: number | null
    Level: number | null
    LevelXP: number | null
    TotalContractsCompleted: number | null
    TotalContractsEarnedCredits: number | null
    LastRefresh: Date | null
    CreatedAt: Date
    UpdatedAt: Date
    _count: VirtualAirlineCountAggregateOutputType | null
    _avg: VirtualAirlineAvgAggregateOutputType | null
    _sum: VirtualAirlineSumAggregateOutputType | null
    _min: VirtualAirlineMinAggregateOutputType | null
    _max: VirtualAirlineMaxAggregateOutputType | null
  }

  type GetVirtualAirlineGroupByPayload<T extends VirtualAirlineGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VirtualAirlineGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VirtualAirlineGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VirtualAirlineGroupByOutputType[P]>
            : GetScalarType<T[P], VirtualAirlineGroupByOutputType[P]>
        }
      >
    >


  export type VirtualAirlineSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    ApiKey?: boolean
    IsPrimary?: boolean
    Identifier?: boolean
    Name?: boolean
    Description?: boolean
    WorldId?: boolean
    LastDividendsDistribution?: boolean
    LastComputationDate?: boolean
    ComputedMemberCount?: boolean
    ComputedAircraftsCount?: boolean
    ComputedNumberOfFlights30Days?: boolean
    ComputedNumberOfFlightHours30Days?: boolean
    ComputedMostUsedAirports?: boolean
    LastConnection?: boolean
    LastReportDate?: boolean
    Reputation?: boolean
    CreationDate?: boolean
    DifficultyLevel?: boolean
    Level?: boolean
    LevelXP?: boolean
    TotalContractsCompleted?: boolean
    TotalContractsEarnedCredits?: boolean
    LastRefresh?: boolean
    CreatedAt?: boolean
    UpdatedAt?: boolean
    World?: boolean | VirtualAirline$WorldArgs<ExtArgs>
    VARoles?: boolean | VirtualAirline$VARolesArgs<ExtArgs>
    Members?: boolean | VirtualAirline$MembersArgs<ExtArgs>
    _count?: boolean | VirtualAirlineCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["virtualAirline"]>

  export type VirtualAirlineSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    ApiKey?: boolean
    IsPrimary?: boolean
    Identifier?: boolean
    Name?: boolean
    Description?: boolean
    WorldId?: boolean
    LastDividendsDistribution?: boolean
    LastComputationDate?: boolean
    ComputedMemberCount?: boolean
    ComputedAircraftsCount?: boolean
    ComputedNumberOfFlights30Days?: boolean
    ComputedNumberOfFlightHours30Days?: boolean
    ComputedMostUsedAirports?: boolean
    LastConnection?: boolean
    LastReportDate?: boolean
    Reputation?: boolean
    CreationDate?: boolean
    DifficultyLevel?: boolean
    Level?: boolean
    LevelXP?: boolean
    TotalContractsCompleted?: boolean
    TotalContractsEarnedCredits?: boolean
    LastRefresh?: boolean
    CreatedAt?: boolean
    UpdatedAt?: boolean
    World?: boolean | VirtualAirline$WorldArgs<ExtArgs>
  }, ExtArgs["result"]["virtualAirline"]>

  export type VirtualAirlineSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    ApiKey?: boolean
    IsPrimary?: boolean
    Identifier?: boolean
    Name?: boolean
    Description?: boolean
    WorldId?: boolean
    LastDividendsDistribution?: boolean
    LastComputationDate?: boolean
    ComputedMemberCount?: boolean
    ComputedAircraftsCount?: boolean
    ComputedNumberOfFlights30Days?: boolean
    ComputedNumberOfFlightHours30Days?: boolean
    ComputedMostUsedAirports?: boolean
    LastConnection?: boolean
    LastReportDate?: boolean
    Reputation?: boolean
    CreationDate?: boolean
    DifficultyLevel?: boolean
    Level?: boolean
    LevelXP?: boolean
    TotalContractsCompleted?: boolean
    TotalContractsEarnedCredits?: boolean
    LastRefresh?: boolean
    CreatedAt?: boolean
    UpdatedAt?: boolean
    World?: boolean | VirtualAirline$WorldArgs<ExtArgs>
  }, ExtArgs["result"]["virtualAirline"]>

  export type VirtualAirlineSelectScalar = {
    Id?: boolean
    ApiKey?: boolean
    IsPrimary?: boolean
    Identifier?: boolean
    Name?: boolean
    Description?: boolean
    WorldId?: boolean
    LastDividendsDistribution?: boolean
    LastComputationDate?: boolean
    ComputedMemberCount?: boolean
    ComputedAircraftsCount?: boolean
    ComputedNumberOfFlights30Days?: boolean
    ComputedNumberOfFlightHours30Days?: boolean
    ComputedMostUsedAirports?: boolean
    LastConnection?: boolean
    LastReportDate?: boolean
    Reputation?: boolean
    CreationDate?: boolean
    DifficultyLevel?: boolean
    Level?: boolean
    LevelXP?: boolean
    TotalContractsCompleted?: boolean
    TotalContractsEarnedCredits?: boolean
    LastRefresh?: boolean
    CreatedAt?: boolean
    UpdatedAt?: boolean
  }

  export type VirtualAirlineOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Id" | "ApiKey" | "IsPrimary" | "Identifier" | "Name" | "Description" | "WorldId" | "LastDividendsDistribution" | "LastComputationDate" | "ComputedMemberCount" | "ComputedAircraftsCount" | "ComputedNumberOfFlights30Days" | "ComputedNumberOfFlightHours30Days" | "ComputedMostUsedAirports" | "LastConnection" | "LastReportDate" | "Reputation" | "CreationDate" | "DifficultyLevel" | "Level" | "LevelXP" | "TotalContractsCompleted" | "TotalContractsEarnedCredits" | "LastRefresh" | "CreatedAt" | "UpdatedAt", ExtArgs["result"]["virtualAirline"]>
  export type VirtualAirlineInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    World?: boolean | VirtualAirline$WorldArgs<ExtArgs>
    VARoles?: boolean | VirtualAirline$VARolesArgs<ExtArgs>
    Members?: boolean | VirtualAirline$MembersArgs<ExtArgs>
    _count?: boolean | VirtualAirlineCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VirtualAirlineIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    World?: boolean | VirtualAirline$WorldArgs<ExtArgs>
  }
  export type VirtualAirlineIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    World?: boolean | VirtualAirline$WorldArgs<ExtArgs>
  }

  export type $VirtualAirlinePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VirtualAirline"
    objects: {
      World: Prisma.$WorldPayload<ExtArgs> | null
      VARoles: Prisma.$VirtualAirlineRolePayload<ExtArgs>[]
      Members: Prisma.$MemberPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      Id: string
      ApiKey: string
      IsPrimary: boolean
      Identifier: string | null
      Name: string | null
      Description: string | null
      WorldId: string | null
      LastDividendsDistribution: Date | null
      LastComputationDate: Date | null
      ComputedMemberCount: number | null
      ComputedAircraftsCount: number | null
      ComputedNumberOfFlights30Days: number | null
      ComputedNumberOfFlightHours30Days: number | null
      ComputedMostUsedAirports: string | null
      LastConnection: Date | null
      LastReportDate: Date | null
      Reputation: Prisma.Decimal | null
      CreationDate: Date | null
      DifficultyLevel: number | null
      Level: number | null
      LevelXP: number | null
      TotalContractsCompleted: number | null
      TotalContractsEarnedCredits: number | null
      LastRefresh: Date | null
      CreatedAt: Date
      UpdatedAt: Date
    }, ExtArgs["result"]["virtualAirline"]>
    composites: {}
  }

  type VirtualAirlineGetPayload<S extends boolean | null | undefined | VirtualAirlineDefaultArgs> = $Result.GetResult<Prisma.$VirtualAirlinePayload, S>

  type VirtualAirlineCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VirtualAirlineFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VirtualAirlineCountAggregateInputType | true
    }

  export interface VirtualAirlineDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VirtualAirline'], meta: { name: 'VirtualAirline' } }
    /**
     * Find zero or one VirtualAirline that matches the filter.
     * @param {VirtualAirlineFindUniqueArgs} args - Arguments to find a VirtualAirline
     * @example
     * // Get one VirtualAirline
     * const virtualAirline = await prisma.virtualAirline.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VirtualAirlineFindUniqueArgs>(args: SelectSubset<T, VirtualAirlineFindUniqueArgs<ExtArgs>>): Prisma__VirtualAirlineClient<$Result.GetResult<Prisma.$VirtualAirlinePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VirtualAirline that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VirtualAirlineFindUniqueOrThrowArgs} args - Arguments to find a VirtualAirline
     * @example
     * // Get one VirtualAirline
     * const virtualAirline = await prisma.virtualAirline.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VirtualAirlineFindUniqueOrThrowArgs>(args: SelectSubset<T, VirtualAirlineFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VirtualAirlineClient<$Result.GetResult<Prisma.$VirtualAirlinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VirtualAirline that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VirtualAirlineFindFirstArgs} args - Arguments to find a VirtualAirline
     * @example
     * // Get one VirtualAirline
     * const virtualAirline = await prisma.virtualAirline.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VirtualAirlineFindFirstArgs>(args?: SelectSubset<T, VirtualAirlineFindFirstArgs<ExtArgs>>): Prisma__VirtualAirlineClient<$Result.GetResult<Prisma.$VirtualAirlinePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VirtualAirline that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VirtualAirlineFindFirstOrThrowArgs} args - Arguments to find a VirtualAirline
     * @example
     * // Get one VirtualAirline
     * const virtualAirline = await prisma.virtualAirline.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VirtualAirlineFindFirstOrThrowArgs>(args?: SelectSubset<T, VirtualAirlineFindFirstOrThrowArgs<ExtArgs>>): Prisma__VirtualAirlineClient<$Result.GetResult<Prisma.$VirtualAirlinePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VirtualAirlines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VirtualAirlineFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VirtualAirlines
     * const virtualAirlines = await prisma.virtualAirline.findMany()
     * 
     * // Get first 10 VirtualAirlines
     * const virtualAirlines = await prisma.virtualAirline.findMany({ take: 10 })
     * 
     * // Only select the `Id`
     * const virtualAirlineWithIdOnly = await prisma.virtualAirline.findMany({ select: { Id: true } })
     * 
     */
    findMany<T extends VirtualAirlineFindManyArgs>(args?: SelectSubset<T, VirtualAirlineFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VirtualAirlinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VirtualAirline.
     * @param {VirtualAirlineCreateArgs} args - Arguments to create a VirtualAirline.
     * @example
     * // Create one VirtualAirline
     * const VirtualAirline = await prisma.virtualAirline.create({
     *   data: {
     *     // ... data to create a VirtualAirline
     *   }
     * })
     * 
     */
    create<T extends VirtualAirlineCreateArgs>(args: SelectSubset<T, VirtualAirlineCreateArgs<ExtArgs>>): Prisma__VirtualAirlineClient<$Result.GetResult<Prisma.$VirtualAirlinePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VirtualAirlines.
     * @param {VirtualAirlineCreateManyArgs} args - Arguments to create many VirtualAirlines.
     * @example
     * // Create many VirtualAirlines
     * const virtualAirline = await prisma.virtualAirline.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VirtualAirlineCreateManyArgs>(args?: SelectSubset<T, VirtualAirlineCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VirtualAirlines and returns the data saved in the database.
     * @param {VirtualAirlineCreateManyAndReturnArgs} args - Arguments to create many VirtualAirlines.
     * @example
     * // Create many VirtualAirlines
     * const virtualAirline = await prisma.virtualAirline.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VirtualAirlines and only return the `Id`
     * const virtualAirlineWithIdOnly = await prisma.virtualAirline.createManyAndReturn({
     *   select: { Id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VirtualAirlineCreateManyAndReturnArgs>(args?: SelectSubset<T, VirtualAirlineCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VirtualAirlinePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VirtualAirline.
     * @param {VirtualAirlineDeleteArgs} args - Arguments to delete one VirtualAirline.
     * @example
     * // Delete one VirtualAirline
     * const VirtualAirline = await prisma.virtualAirline.delete({
     *   where: {
     *     // ... filter to delete one VirtualAirline
     *   }
     * })
     * 
     */
    delete<T extends VirtualAirlineDeleteArgs>(args: SelectSubset<T, VirtualAirlineDeleteArgs<ExtArgs>>): Prisma__VirtualAirlineClient<$Result.GetResult<Prisma.$VirtualAirlinePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VirtualAirline.
     * @param {VirtualAirlineUpdateArgs} args - Arguments to update one VirtualAirline.
     * @example
     * // Update one VirtualAirline
     * const virtualAirline = await prisma.virtualAirline.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VirtualAirlineUpdateArgs>(args: SelectSubset<T, VirtualAirlineUpdateArgs<ExtArgs>>): Prisma__VirtualAirlineClient<$Result.GetResult<Prisma.$VirtualAirlinePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VirtualAirlines.
     * @param {VirtualAirlineDeleteManyArgs} args - Arguments to filter VirtualAirlines to delete.
     * @example
     * // Delete a few VirtualAirlines
     * const { count } = await prisma.virtualAirline.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VirtualAirlineDeleteManyArgs>(args?: SelectSubset<T, VirtualAirlineDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VirtualAirlines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VirtualAirlineUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VirtualAirlines
     * const virtualAirline = await prisma.virtualAirline.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VirtualAirlineUpdateManyArgs>(args: SelectSubset<T, VirtualAirlineUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VirtualAirlines and returns the data updated in the database.
     * @param {VirtualAirlineUpdateManyAndReturnArgs} args - Arguments to update many VirtualAirlines.
     * @example
     * // Update many VirtualAirlines
     * const virtualAirline = await prisma.virtualAirline.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VirtualAirlines and only return the `Id`
     * const virtualAirlineWithIdOnly = await prisma.virtualAirline.updateManyAndReturn({
     *   select: { Id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VirtualAirlineUpdateManyAndReturnArgs>(args: SelectSubset<T, VirtualAirlineUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VirtualAirlinePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VirtualAirline.
     * @param {VirtualAirlineUpsertArgs} args - Arguments to update or create a VirtualAirline.
     * @example
     * // Update or create a VirtualAirline
     * const virtualAirline = await prisma.virtualAirline.upsert({
     *   create: {
     *     // ... data to create a VirtualAirline
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VirtualAirline we want to update
     *   }
     * })
     */
    upsert<T extends VirtualAirlineUpsertArgs>(args: SelectSubset<T, VirtualAirlineUpsertArgs<ExtArgs>>): Prisma__VirtualAirlineClient<$Result.GetResult<Prisma.$VirtualAirlinePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VirtualAirlines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VirtualAirlineCountArgs} args - Arguments to filter VirtualAirlines to count.
     * @example
     * // Count the number of VirtualAirlines
     * const count = await prisma.virtualAirline.count({
     *   where: {
     *     // ... the filter for the VirtualAirlines we want to count
     *   }
     * })
    **/
    count<T extends VirtualAirlineCountArgs>(
      args?: Subset<T, VirtualAirlineCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VirtualAirlineCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VirtualAirline.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VirtualAirlineAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VirtualAirlineAggregateArgs>(args: Subset<T, VirtualAirlineAggregateArgs>): Prisma.PrismaPromise<GetVirtualAirlineAggregateType<T>>

    /**
     * Group by VirtualAirline.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VirtualAirlineGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VirtualAirlineGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VirtualAirlineGroupByArgs['orderBy'] }
        : { orderBy?: VirtualAirlineGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VirtualAirlineGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVirtualAirlineGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VirtualAirline model
   */
  readonly fields: VirtualAirlineFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VirtualAirline.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VirtualAirlineClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    World<T extends VirtualAirline$WorldArgs<ExtArgs> = {}>(args?: Subset<T, VirtualAirline$WorldArgs<ExtArgs>>): Prisma__WorldClient<$Result.GetResult<Prisma.$WorldPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    VARoles<T extends VirtualAirline$VARolesArgs<ExtArgs> = {}>(args?: Subset<T, VirtualAirline$VARolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VirtualAirlineRolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Members<T extends VirtualAirline$MembersArgs<ExtArgs> = {}>(args?: Subset<T, VirtualAirline$MembersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VirtualAirline model
   */
  interface VirtualAirlineFieldRefs {
    readonly Id: FieldRef<"VirtualAirline", 'String'>
    readonly ApiKey: FieldRef<"VirtualAirline", 'String'>
    readonly IsPrimary: FieldRef<"VirtualAirline", 'Boolean'>
    readonly Identifier: FieldRef<"VirtualAirline", 'String'>
    readonly Name: FieldRef<"VirtualAirline", 'String'>
    readonly Description: FieldRef<"VirtualAirline", 'String'>
    readonly WorldId: FieldRef<"VirtualAirline", 'String'>
    readonly LastDividendsDistribution: FieldRef<"VirtualAirline", 'DateTime'>
    readonly LastComputationDate: FieldRef<"VirtualAirline", 'DateTime'>
    readonly ComputedMemberCount: FieldRef<"VirtualAirline", 'Int'>
    readonly ComputedAircraftsCount: FieldRef<"VirtualAirline", 'Int'>
    readonly ComputedNumberOfFlights30Days: FieldRef<"VirtualAirline", 'Int'>
    readonly ComputedNumberOfFlightHours30Days: FieldRef<"VirtualAirline", 'Int'>
    readonly ComputedMostUsedAirports: FieldRef<"VirtualAirline", 'String'>
    readonly LastConnection: FieldRef<"VirtualAirline", 'DateTime'>
    readonly LastReportDate: FieldRef<"VirtualAirline", 'DateTime'>
    readonly Reputation: FieldRef<"VirtualAirline", 'Decimal'>
    readonly CreationDate: FieldRef<"VirtualAirline", 'DateTime'>
    readonly DifficultyLevel: FieldRef<"VirtualAirline", 'Int'>
    readonly Level: FieldRef<"VirtualAirline", 'Int'>
    readonly LevelXP: FieldRef<"VirtualAirline", 'Int'>
    readonly TotalContractsCompleted: FieldRef<"VirtualAirline", 'Int'>
    readonly TotalContractsEarnedCredits: FieldRef<"VirtualAirline", 'Int'>
    readonly LastRefresh: FieldRef<"VirtualAirline", 'DateTime'>
    readonly CreatedAt: FieldRef<"VirtualAirline", 'DateTime'>
    readonly UpdatedAt: FieldRef<"VirtualAirline", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VirtualAirline findUnique
   */
  export type VirtualAirlineFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VirtualAirline
     */
    select?: VirtualAirlineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VirtualAirline
     */
    omit?: VirtualAirlineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VirtualAirlineInclude<ExtArgs> | null
    /**
     * Filter, which VirtualAirline to fetch.
     */
    where: VirtualAirlineWhereUniqueInput
  }

  /**
   * VirtualAirline findUniqueOrThrow
   */
  export type VirtualAirlineFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VirtualAirline
     */
    select?: VirtualAirlineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VirtualAirline
     */
    omit?: VirtualAirlineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VirtualAirlineInclude<ExtArgs> | null
    /**
     * Filter, which VirtualAirline to fetch.
     */
    where: VirtualAirlineWhereUniqueInput
  }

  /**
   * VirtualAirline findFirst
   */
  export type VirtualAirlineFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VirtualAirline
     */
    select?: VirtualAirlineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VirtualAirline
     */
    omit?: VirtualAirlineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VirtualAirlineInclude<ExtArgs> | null
    /**
     * Filter, which VirtualAirline to fetch.
     */
    where?: VirtualAirlineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VirtualAirlines to fetch.
     */
    orderBy?: VirtualAirlineOrderByWithRelationInput | VirtualAirlineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VirtualAirlines.
     */
    cursor?: VirtualAirlineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VirtualAirlines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VirtualAirlines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VirtualAirlines.
     */
    distinct?: VirtualAirlineScalarFieldEnum | VirtualAirlineScalarFieldEnum[]
  }

  /**
   * VirtualAirline findFirstOrThrow
   */
  export type VirtualAirlineFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VirtualAirline
     */
    select?: VirtualAirlineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VirtualAirline
     */
    omit?: VirtualAirlineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VirtualAirlineInclude<ExtArgs> | null
    /**
     * Filter, which VirtualAirline to fetch.
     */
    where?: VirtualAirlineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VirtualAirlines to fetch.
     */
    orderBy?: VirtualAirlineOrderByWithRelationInput | VirtualAirlineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VirtualAirlines.
     */
    cursor?: VirtualAirlineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VirtualAirlines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VirtualAirlines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VirtualAirlines.
     */
    distinct?: VirtualAirlineScalarFieldEnum | VirtualAirlineScalarFieldEnum[]
  }

  /**
   * VirtualAirline findMany
   */
  export type VirtualAirlineFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VirtualAirline
     */
    select?: VirtualAirlineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VirtualAirline
     */
    omit?: VirtualAirlineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VirtualAirlineInclude<ExtArgs> | null
    /**
     * Filter, which VirtualAirlines to fetch.
     */
    where?: VirtualAirlineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VirtualAirlines to fetch.
     */
    orderBy?: VirtualAirlineOrderByWithRelationInput | VirtualAirlineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VirtualAirlines.
     */
    cursor?: VirtualAirlineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VirtualAirlines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VirtualAirlines.
     */
    skip?: number
    distinct?: VirtualAirlineScalarFieldEnum | VirtualAirlineScalarFieldEnum[]
  }

  /**
   * VirtualAirline create
   */
  export type VirtualAirlineCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VirtualAirline
     */
    select?: VirtualAirlineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VirtualAirline
     */
    omit?: VirtualAirlineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VirtualAirlineInclude<ExtArgs> | null
    /**
     * The data needed to create a VirtualAirline.
     */
    data: XOR<VirtualAirlineCreateInput, VirtualAirlineUncheckedCreateInput>
  }

  /**
   * VirtualAirline createMany
   */
  export type VirtualAirlineCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VirtualAirlines.
     */
    data: VirtualAirlineCreateManyInput | VirtualAirlineCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VirtualAirline createManyAndReturn
   */
  export type VirtualAirlineCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VirtualAirline
     */
    select?: VirtualAirlineSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VirtualAirline
     */
    omit?: VirtualAirlineOmit<ExtArgs> | null
    /**
     * The data used to create many VirtualAirlines.
     */
    data: VirtualAirlineCreateManyInput | VirtualAirlineCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VirtualAirlineIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * VirtualAirline update
   */
  export type VirtualAirlineUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VirtualAirline
     */
    select?: VirtualAirlineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VirtualAirline
     */
    omit?: VirtualAirlineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VirtualAirlineInclude<ExtArgs> | null
    /**
     * The data needed to update a VirtualAirline.
     */
    data: XOR<VirtualAirlineUpdateInput, VirtualAirlineUncheckedUpdateInput>
    /**
     * Choose, which VirtualAirline to update.
     */
    where: VirtualAirlineWhereUniqueInput
  }

  /**
   * VirtualAirline updateMany
   */
  export type VirtualAirlineUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VirtualAirlines.
     */
    data: XOR<VirtualAirlineUpdateManyMutationInput, VirtualAirlineUncheckedUpdateManyInput>
    /**
     * Filter which VirtualAirlines to update
     */
    where?: VirtualAirlineWhereInput
    /**
     * Limit how many VirtualAirlines to update.
     */
    limit?: number
  }

  /**
   * VirtualAirline updateManyAndReturn
   */
  export type VirtualAirlineUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VirtualAirline
     */
    select?: VirtualAirlineSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VirtualAirline
     */
    omit?: VirtualAirlineOmit<ExtArgs> | null
    /**
     * The data used to update VirtualAirlines.
     */
    data: XOR<VirtualAirlineUpdateManyMutationInput, VirtualAirlineUncheckedUpdateManyInput>
    /**
     * Filter which VirtualAirlines to update
     */
    where?: VirtualAirlineWhereInput
    /**
     * Limit how many VirtualAirlines to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VirtualAirlineIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * VirtualAirline upsert
   */
  export type VirtualAirlineUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VirtualAirline
     */
    select?: VirtualAirlineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VirtualAirline
     */
    omit?: VirtualAirlineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VirtualAirlineInclude<ExtArgs> | null
    /**
     * The filter to search for the VirtualAirline to update in case it exists.
     */
    where: VirtualAirlineWhereUniqueInput
    /**
     * In case the VirtualAirline found by the `where` argument doesn't exist, create a new VirtualAirline with this data.
     */
    create: XOR<VirtualAirlineCreateInput, VirtualAirlineUncheckedCreateInput>
    /**
     * In case the VirtualAirline was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VirtualAirlineUpdateInput, VirtualAirlineUncheckedUpdateInput>
  }

  /**
   * VirtualAirline delete
   */
  export type VirtualAirlineDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VirtualAirline
     */
    select?: VirtualAirlineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VirtualAirline
     */
    omit?: VirtualAirlineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VirtualAirlineInclude<ExtArgs> | null
    /**
     * Filter which VirtualAirline to delete.
     */
    where: VirtualAirlineWhereUniqueInput
  }

  /**
   * VirtualAirline deleteMany
   */
  export type VirtualAirlineDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VirtualAirlines to delete
     */
    where?: VirtualAirlineWhereInput
    /**
     * Limit how many VirtualAirlines to delete.
     */
    limit?: number
  }

  /**
   * VirtualAirline.World
   */
  export type VirtualAirline$WorldArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the World
     */
    select?: WorldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the World
     */
    omit?: WorldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorldInclude<ExtArgs> | null
    where?: WorldWhereInput
  }

  /**
   * VirtualAirline.VARoles
   */
  export type VirtualAirline$VARolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VirtualAirlineRole
     */
    select?: VirtualAirlineRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VirtualAirlineRole
     */
    omit?: VirtualAirlineRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VirtualAirlineRoleInclude<ExtArgs> | null
    where?: VirtualAirlineRoleWhereInput
    orderBy?: VirtualAirlineRoleOrderByWithRelationInput | VirtualAirlineRoleOrderByWithRelationInput[]
    cursor?: VirtualAirlineRoleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VirtualAirlineRoleScalarFieldEnum | VirtualAirlineRoleScalarFieldEnum[]
  }

  /**
   * VirtualAirline.Members
   */
  export type VirtualAirline$MembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    where?: MemberWhereInput
    orderBy?: MemberOrderByWithRelationInput | MemberOrderByWithRelationInput[]
    cursor?: MemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MemberScalarFieldEnum | MemberScalarFieldEnum[]
  }

  /**
   * VirtualAirline without action
   */
  export type VirtualAirlineDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VirtualAirline
     */
    select?: VirtualAirlineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VirtualAirline
     */
    omit?: VirtualAirlineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VirtualAirlineInclude<ExtArgs> | null
  }


  /**
   * Model VirtualAirlineRole
   */

  export type AggregateVirtualAirlineRole = {
    _count: VirtualAirlineRoleCountAggregateOutputType | null
    _avg: VirtualAirlineRoleAvgAggregateOutputType | null
    _sum: VirtualAirlineRoleSumAggregateOutputType | null
    _min: VirtualAirlineRoleMinAggregateOutputType | null
    _max: VirtualAirlineRoleMaxAggregateOutputType | null
  }

  export type VirtualAirlineRoleAvgAggregateOutputType = {
    Permission: number | null
    PayPercent: Decimal | null
    PayWeekly: Decimal | null
    PayPerFlightHour: Decimal | null
  }

  export type VirtualAirlineRoleSumAggregateOutputType = {
    Permission: number | null
    PayPercent: Decimal | null
    PayWeekly: Decimal | null
    PayPerFlightHour: Decimal | null
  }

  export type VirtualAirlineRoleMinAggregateOutputType = {
    Id: string | null
    VAId: string | null
    Name: string | null
    Permission: number | null
    IsDefaultNewRole: boolean | null
    Color: string | null
    PayPercent: Decimal | null
    IsHidden: boolean | null
    RestrictLoadingVAJobsIntoNonVAAircraft: boolean | null
    RestrictLoadingNonVAJobsIntoVAAircraft: boolean | null
    PayWeekly: Decimal | null
    PayPerFlightHour: Decimal | null
    LastRefresh: Date | null
    CreatedAt: Date | null
    UpdatedAt: Date | null
  }

  export type VirtualAirlineRoleMaxAggregateOutputType = {
    Id: string | null
    VAId: string | null
    Name: string | null
    Permission: number | null
    IsDefaultNewRole: boolean | null
    Color: string | null
    PayPercent: Decimal | null
    IsHidden: boolean | null
    RestrictLoadingVAJobsIntoNonVAAircraft: boolean | null
    RestrictLoadingNonVAJobsIntoVAAircraft: boolean | null
    PayWeekly: Decimal | null
    PayPerFlightHour: Decimal | null
    LastRefresh: Date | null
    CreatedAt: Date | null
    UpdatedAt: Date | null
  }

  export type VirtualAirlineRoleCountAggregateOutputType = {
    Id: number
    VAId: number
    Name: number
    Permission: number
    IsDefaultNewRole: number
    Color: number
    PayPercent: number
    IsHidden: number
    RestrictLoadingVAJobsIntoNonVAAircraft: number
    RestrictLoadingNonVAJobsIntoVAAircraft: number
    PayWeekly: number
    PayPerFlightHour: number
    LastRefresh: number
    CreatedAt: number
    UpdatedAt: number
    _all: number
  }


  export type VirtualAirlineRoleAvgAggregateInputType = {
    Permission?: true
    PayPercent?: true
    PayWeekly?: true
    PayPerFlightHour?: true
  }

  export type VirtualAirlineRoleSumAggregateInputType = {
    Permission?: true
    PayPercent?: true
    PayWeekly?: true
    PayPerFlightHour?: true
  }

  export type VirtualAirlineRoleMinAggregateInputType = {
    Id?: true
    VAId?: true
    Name?: true
    Permission?: true
    IsDefaultNewRole?: true
    Color?: true
    PayPercent?: true
    IsHidden?: true
    RestrictLoadingVAJobsIntoNonVAAircraft?: true
    RestrictLoadingNonVAJobsIntoVAAircraft?: true
    PayWeekly?: true
    PayPerFlightHour?: true
    LastRefresh?: true
    CreatedAt?: true
    UpdatedAt?: true
  }

  export type VirtualAirlineRoleMaxAggregateInputType = {
    Id?: true
    VAId?: true
    Name?: true
    Permission?: true
    IsDefaultNewRole?: true
    Color?: true
    PayPercent?: true
    IsHidden?: true
    RestrictLoadingVAJobsIntoNonVAAircraft?: true
    RestrictLoadingNonVAJobsIntoVAAircraft?: true
    PayWeekly?: true
    PayPerFlightHour?: true
    LastRefresh?: true
    CreatedAt?: true
    UpdatedAt?: true
  }

  export type VirtualAirlineRoleCountAggregateInputType = {
    Id?: true
    VAId?: true
    Name?: true
    Permission?: true
    IsDefaultNewRole?: true
    Color?: true
    PayPercent?: true
    IsHidden?: true
    RestrictLoadingVAJobsIntoNonVAAircraft?: true
    RestrictLoadingNonVAJobsIntoVAAircraft?: true
    PayWeekly?: true
    PayPerFlightHour?: true
    LastRefresh?: true
    CreatedAt?: true
    UpdatedAt?: true
    _all?: true
  }

  export type VirtualAirlineRoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VirtualAirlineRole to aggregate.
     */
    where?: VirtualAirlineRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VirtualAirlineRoles to fetch.
     */
    orderBy?: VirtualAirlineRoleOrderByWithRelationInput | VirtualAirlineRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VirtualAirlineRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VirtualAirlineRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VirtualAirlineRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VirtualAirlineRoles
    **/
    _count?: true | VirtualAirlineRoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VirtualAirlineRoleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VirtualAirlineRoleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VirtualAirlineRoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VirtualAirlineRoleMaxAggregateInputType
  }

  export type GetVirtualAirlineRoleAggregateType<T extends VirtualAirlineRoleAggregateArgs> = {
        [P in keyof T & keyof AggregateVirtualAirlineRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVirtualAirlineRole[P]>
      : GetScalarType<T[P], AggregateVirtualAirlineRole[P]>
  }




  export type VirtualAirlineRoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VirtualAirlineRoleWhereInput
    orderBy?: VirtualAirlineRoleOrderByWithAggregationInput | VirtualAirlineRoleOrderByWithAggregationInput[]
    by: VirtualAirlineRoleScalarFieldEnum[] | VirtualAirlineRoleScalarFieldEnum
    having?: VirtualAirlineRoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VirtualAirlineRoleCountAggregateInputType | true
    _avg?: VirtualAirlineRoleAvgAggregateInputType
    _sum?: VirtualAirlineRoleSumAggregateInputType
    _min?: VirtualAirlineRoleMinAggregateInputType
    _max?: VirtualAirlineRoleMaxAggregateInputType
  }

  export type VirtualAirlineRoleGroupByOutputType = {
    Id: string
    VAId: string
    Name: string
    Permission: number
    IsDefaultNewRole: boolean
    Color: string
    PayPercent: Decimal
    IsHidden: boolean
    RestrictLoadingVAJobsIntoNonVAAircraft: boolean
    RestrictLoadingNonVAJobsIntoVAAircraft: boolean
    PayWeekly: Decimal
    PayPerFlightHour: Decimal
    LastRefresh: Date | null
    CreatedAt: Date
    UpdatedAt: Date
    _count: VirtualAirlineRoleCountAggregateOutputType | null
    _avg: VirtualAirlineRoleAvgAggregateOutputType | null
    _sum: VirtualAirlineRoleSumAggregateOutputType | null
    _min: VirtualAirlineRoleMinAggregateOutputType | null
    _max: VirtualAirlineRoleMaxAggregateOutputType | null
  }

  type GetVirtualAirlineRoleGroupByPayload<T extends VirtualAirlineRoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VirtualAirlineRoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VirtualAirlineRoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VirtualAirlineRoleGroupByOutputType[P]>
            : GetScalarType<T[P], VirtualAirlineRoleGroupByOutputType[P]>
        }
      >
    >


  export type VirtualAirlineRoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    VAId?: boolean
    Name?: boolean
    Permission?: boolean
    IsDefaultNewRole?: boolean
    Color?: boolean
    PayPercent?: boolean
    IsHidden?: boolean
    RestrictLoadingVAJobsIntoNonVAAircraft?: boolean
    RestrictLoadingNonVAJobsIntoVAAircraft?: boolean
    PayWeekly?: boolean
    PayPerFlightHour?: boolean
    LastRefresh?: boolean
    CreatedAt?: boolean
    UpdatedAt?: boolean
    VirtualAirline?: boolean | VirtualAirlineDefaultArgs<ExtArgs>
    Members?: boolean | VirtualAirlineRole$MembersArgs<ExtArgs>
    _count?: boolean | VirtualAirlineRoleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["virtualAirlineRole"]>

  export type VirtualAirlineRoleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    VAId?: boolean
    Name?: boolean
    Permission?: boolean
    IsDefaultNewRole?: boolean
    Color?: boolean
    PayPercent?: boolean
    IsHidden?: boolean
    RestrictLoadingVAJobsIntoNonVAAircraft?: boolean
    RestrictLoadingNonVAJobsIntoVAAircraft?: boolean
    PayWeekly?: boolean
    PayPerFlightHour?: boolean
    LastRefresh?: boolean
    CreatedAt?: boolean
    UpdatedAt?: boolean
    VirtualAirline?: boolean | VirtualAirlineDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["virtualAirlineRole"]>

  export type VirtualAirlineRoleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    VAId?: boolean
    Name?: boolean
    Permission?: boolean
    IsDefaultNewRole?: boolean
    Color?: boolean
    PayPercent?: boolean
    IsHidden?: boolean
    RestrictLoadingVAJobsIntoNonVAAircraft?: boolean
    RestrictLoadingNonVAJobsIntoVAAircraft?: boolean
    PayWeekly?: boolean
    PayPerFlightHour?: boolean
    LastRefresh?: boolean
    CreatedAt?: boolean
    UpdatedAt?: boolean
    VirtualAirline?: boolean | VirtualAirlineDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["virtualAirlineRole"]>

  export type VirtualAirlineRoleSelectScalar = {
    Id?: boolean
    VAId?: boolean
    Name?: boolean
    Permission?: boolean
    IsDefaultNewRole?: boolean
    Color?: boolean
    PayPercent?: boolean
    IsHidden?: boolean
    RestrictLoadingVAJobsIntoNonVAAircraft?: boolean
    RestrictLoadingNonVAJobsIntoVAAircraft?: boolean
    PayWeekly?: boolean
    PayPerFlightHour?: boolean
    LastRefresh?: boolean
    CreatedAt?: boolean
    UpdatedAt?: boolean
  }

  export type VirtualAirlineRoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Id" | "VAId" | "Name" | "Permission" | "IsDefaultNewRole" | "Color" | "PayPercent" | "IsHidden" | "RestrictLoadingVAJobsIntoNonVAAircraft" | "RestrictLoadingNonVAJobsIntoVAAircraft" | "PayWeekly" | "PayPerFlightHour" | "LastRefresh" | "CreatedAt" | "UpdatedAt", ExtArgs["result"]["virtualAirlineRole"]>
  export type VirtualAirlineRoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    VirtualAirline?: boolean | VirtualAirlineDefaultArgs<ExtArgs>
    Members?: boolean | VirtualAirlineRole$MembersArgs<ExtArgs>
    _count?: boolean | VirtualAirlineRoleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VirtualAirlineRoleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    VirtualAirline?: boolean | VirtualAirlineDefaultArgs<ExtArgs>
  }
  export type VirtualAirlineRoleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    VirtualAirline?: boolean | VirtualAirlineDefaultArgs<ExtArgs>
  }

  export type $VirtualAirlineRolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VirtualAirlineRole"
    objects: {
      VirtualAirline: Prisma.$VirtualAirlinePayload<ExtArgs>
      Members: Prisma.$MemberPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      Id: string
      VAId: string
      Name: string
      Permission: number
      IsDefaultNewRole: boolean
      Color: string
      PayPercent: Prisma.Decimal
      IsHidden: boolean
      RestrictLoadingVAJobsIntoNonVAAircraft: boolean
      RestrictLoadingNonVAJobsIntoVAAircraft: boolean
      PayWeekly: Prisma.Decimal
      PayPerFlightHour: Prisma.Decimal
      LastRefresh: Date | null
      CreatedAt: Date
      UpdatedAt: Date
    }, ExtArgs["result"]["virtualAirlineRole"]>
    composites: {}
  }

  type VirtualAirlineRoleGetPayload<S extends boolean | null | undefined | VirtualAirlineRoleDefaultArgs> = $Result.GetResult<Prisma.$VirtualAirlineRolePayload, S>

  type VirtualAirlineRoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VirtualAirlineRoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VirtualAirlineRoleCountAggregateInputType | true
    }

  export interface VirtualAirlineRoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VirtualAirlineRole'], meta: { name: 'VirtualAirlineRole' } }
    /**
     * Find zero or one VirtualAirlineRole that matches the filter.
     * @param {VirtualAirlineRoleFindUniqueArgs} args - Arguments to find a VirtualAirlineRole
     * @example
     * // Get one VirtualAirlineRole
     * const virtualAirlineRole = await prisma.virtualAirlineRole.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VirtualAirlineRoleFindUniqueArgs>(args: SelectSubset<T, VirtualAirlineRoleFindUniqueArgs<ExtArgs>>): Prisma__VirtualAirlineRoleClient<$Result.GetResult<Prisma.$VirtualAirlineRolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VirtualAirlineRole that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VirtualAirlineRoleFindUniqueOrThrowArgs} args - Arguments to find a VirtualAirlineRole
     * @example
     * // Get one VirtualAirlineRole
     * const virtualAirlineRole = await prisma.virtualAirlineRole.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VirtualAirlineRoleFindUniqueOrThrowArgs>(args: SelectSubset<T, VirtualAirlineRoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VirtualAirlineRoleClient<$Result.GetResult<Prisma.$VirtualAirlineRolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VirtualAirlineRole that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VirtualAirlineRoleFindFirstArgs} args - Arguments to find a VirtualAirlineRole
     * @example
     * // Get one VirtualAirlineRole
     * const virtualAirlineRole = await prisma.virtualAirlineRole.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VirtualAirlineRoleFindFirstArgs>(args?: SelectSubset<T, VirtualAirlineRoleFindFirstArgs<ExtArgs>>): Prisma__VirtualAirlineRoleClient<$Result.GetResult<Prisma.$VirtualAirlineRolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VirtualAirlineRole that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VirtualAirlineRoleFindFirstOrThrowArgs} args - Arguments to find a VirtualAirlineRole
     * @example
     * // Get one VirtualAirlineRole
     * const virtualAirlineRole = await prisma.virtualAirlineRole.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VirtualAirlineRoleFindFirstOrThrowArgs>(args?: SelectSubset<T, VirtualAirlineRoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__VirtualAirlineRoleClient<$Result.GetResult<Prisma.$VirtualAirlineRolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VirtualAirlineRoles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VirtualAirlineRoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VirtualAirlineRoles
     * const virtualAirlineRoles = await prisma.virtualAirlineRole.findMany()
     * 
     * // Get first 10 VirtualAirlineRoles
     * const virtualAirlineRoles = await prisma.virtualAirlineRole.findMany({ take: 10 })
     * 
     * // Only select the `Id`
     * const virtualAirlineRoleWithIdOnly = await prisma.virtualAirlineRole.findMany({ select: { Id: true } })
     * 
     */
    findMany<T extends VirtualAirlineRoleFindManyArgs>(args?: SelectSubset<T, VirtualAirlineRoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VirtualAirlineRolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VirtualAirlineRole.
     * @param {VirtualAirlineRoleCreateArgs} args - Arguments to create a VirtualAirlineRole.
     * @example
     * // Create one VirtualAirlineRole
     * const VirtualAirlineRole = await prisma.virtualAirlineRole.create({
     *   data: {
     *     // ... data to create a VirtualAirlineRole
     *   }
     * })
     * 
     */
    create<T extends VirtualAirlineRoleCreateArgs>(args: SelectSubset<T, VirtualAirlineRoleCreateArgs<ExtArgs>>): Prisma__VirtualAirlineRoleClient<$Result.GetResult<Prisma.$VirtualAirlineRolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VirtualAirlineRoles.
     * @param {VirtualAirlineRoleCreateManyArgs} args - Arguments to create many VirtualAirlineRoles.
     * @example
     * // Create many VirtualAirlineRoles
     * const virtualAirlineRole = await prisma.virtualAirlineRole.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VirtualAirlineRoleCreateManyArgs>(args?: SelectSubset<T, VirtualAirlineRoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VirtualAirlineRoles and returns the data saved in the database.
     * @param {VirtualAirlineRoleCreateManyAndReturnArgs} args - Arguments to create many VirtualAirlineRoles.
     * @example
     * // Create many VirtualAirlineRoles
     * const virtualAirlineRole = await prisma.virtualAirlineRole.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VirtualAirlineRoles and only return the `Id`
     * const virtualAirlineRoleWithIdOnly = await prisma.virtualAirlineRole.createManyAndReturn({
     *   select: { Id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VirtualAirlineRoleCreateManyAndReturnArgs>(args?: SelectSubset<T, VirtualAirlineRoleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VirtualAirlineRolePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VirtualAirlineRole.
     * @param {VirtualAirlineRoleDeleteArgs} args - Arguments to delete one VirtualAirlineRole.
     * @example
     * // Delete one VirtualAirlineRole
     * const VirtualAirlineRole = await prisma.virtualAirlineRole.delete({
     *   where: {
     *     // ... filter to delete one VirtualAirlineRole
     *   }
     * })
     * 
     */
    delete<T extends VirtualAirlineRoleDeleteArgs>(args: SelectSubset<T, VirtualAirlineRoleDeleteArgs<ExtArgs>>): Prisma__VirtualAirlineRoleClient<$Result.GetResult<Prisma.$VirtualAirlineRolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VirtualAirlineRole.
     * @param {VirtualAirlineRoleUpdateArgs} args - Arguments to update one VirtualAirlineRole.
     * @example
     * // Update one VirtualAirlineRole
     * const virtualAirlineRole = await prisma.virtualAirlineRole.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VirtualAirlineRoleUpdateArgs>(args: SelectSubset<T, VirtualAirlineRoleUpdateArgs<ExtArgs>>): Prisma__VirtualAirlineRoleClient<$Result.GetResult<Prisma.$VirtualAirlineRolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VirtualAirlineRoles.
     * @param {VirtualAirlineRoleDeleteManyArgs} args - Arguments to filter VirtualAirlineRoles to delete.
     * @example
     * // Delete a few VirtualAirlineRoles
     * const { count } = await prisma.virtualAirlineRole.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VirtualAirlineRoleDeleteManyArgs>(args?: SelectSubset<T, VirtualAirlineRoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VirtualAirlineRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VirtualAirlineRoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VirtualAirlineRoles
     * const virtualAirlineRole = await prisma.virtualAirlineRole.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VirtualAirlineRoleUpdateManyArgs>(args: SelectSubset<T, VirtualAirlineRoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VirtualAirlineRoles and returns the data updated in the database.
     * @param {VirtualAirlineRoleUpdateManyAndReturnArgs} args - Arguments to update many VirtualAirlineRoles.
     * @example
     * // Update many VirtualAirlineRoles
     * const virtualAirlineRole = await prisma.virtualAirlineRole.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VirtualAirlineRoles and only return the `Id`
     * const virtualAirlineRoleWithIdOnly = await prisma.virtualAirlineRole.updateManyAndReturn({
     *   select: { Id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VirtualAirlineRoleUpdateManyAndReturnArgs>(args: SelectSubset<T, VirtualAirlineRoleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VirtualAirlineRolePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VirtualAirlineRole.
     * @param {VirtualAirlineRoleUpsertArgs} args - Arguments to update or create a VirtualAirlineRole.
     * @example
     * // Update or create a VirtualAirlineRole
     * const virtualAirlineRole = await prisma.virtualAirlineRole.upsert({
     *   create: {
     *     // ... data to create a VirtualAirlineRole
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VirtualAirlineRole we want to update
     *   }
     * })
     */
    upsert<T extends VirtualAirlineRoleUpsertArgs>(args: SelectSubset<T, VirtualAirlineRoleUpsertArgs<ExtArgs>>): Prisma__VirtualAirlineRoleClient<$Result.GetResult<Prisma.$VirtualAirlineRolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VirtualAirlineRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VirtualAirlineRoleCountArgs} args - Arguments to filter VirtualAirlineRoles to count.
     * @example
     * // Count the number of VirtualAirlineRoles
     * const count = await prisma.virtualAirlineRole.count({
     *   where: {
     *     // ... the filter for the VirtualAirlineRoles we want to count
     *   }
     * })
    **/
    count<T extends VirtualAirlineRoleCountArgs>(
      args?: Subset<T, VirtualAirlineRoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VirtualAirlineRoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VirtualAirlineRole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VirtualAirlineRoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VirtualAirlineRoleAggregateArgs>(args: Subset<T, VirtualAirlineRoleAggregateArgs>): Prisma.PrismaPromise<GetVirtualAirlineRoleAggregateType<T>>

    /**
     * Group by VirtualAirlineRole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VirtualAirlineRoleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VirtualAirlineRoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VirtualAirlineRoleGroupByArgs['orderBy'] }
        : { orderBy?: VirtualAirlineRoleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VirtualAirlineRoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVirtualAirlineRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VirtualAirlineRole model
   */
  readonly fields: VirtualAirlineRoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VirtualAirlineRole.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VirtualAirlineRoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    VirtualAirline<T extends VirtualAirlineDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VirtualAirlineDefaultArgs<ExtArgs>>): Prisma__VirtualAirlineClient<$Result.GetResult<Prisma.$VirtualAirlinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Members<T extends VirtualAirlineRole$MembersArgs<ExtArgs> = {}>(args?: Subset<T, VirtualAirlineRole$MembersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VirtualAirlineRole model
   */
  interface VirtualAirlineRoleFieldRefs {
    readonly Id: FieldRef<"VirtualAirlineRole", 'String'>
    readonly VAId: FieldRef<"VirtualAirlineRole", 'String'>
    readonly Name: FieldRef<"VirtualAirlineRole", 'String'>
    readonly Permission: FieldRef<"VirtualAirlineRole", 'Int'>
    readonly IsDefaultNewRole: FieldRef<"VirtualAirlineRole", 'Boolean'>
    readonly Color: FieldRef<"VirtualAirlineRole", 'String'>
    readonly PayPercent: FieldRef<"VirtualAirlineRole", 'Decimal'>
    readonly IsHidden: FieldRef<"VirtualAirlineRole", 'Boolean'>
    readonly RestrictLoadingVAJobsIntoNonVAAircraft: FieldRef<"VirtualAirlineRole", 'Boolean'>
    readonly RestrictLoadingNonVAJobsIntoVAAircraft: FieldRef<"VirtualAirlineRole", 'Boolean'>
    readonly PayWeekly: FieldRef<"VirtualAirlineRole", 'Decimal'>
    readonly PayPerFlightHour: FieldRef<"VirtualAirlineRole", 'Decimal'>
    readonly LastRefresh: FieldRef<"VirtualAirlineRole", 'DateTime'>
    readonly CreatedAt: FieldRef<"VirtualAirlineRole", 'DateTime'>
    readonly UpdatedAt: FieldRef<"VirtualAirlineRole", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VirtualAirlineRole findUnique
   */
  export type VirtualAirlineRoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VirtualAirlineRole
     */
    select?: VirtualAirlineRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VirtualAirlineRole
     */
    omit?: VirtualAirlineRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VirtualAirlineRoleInclude<ExtArgs> | null
    /**
     * Filter, which VirtualAirlineRole to fetch.
     */
    where: VirtualAirlineRoleWhereUniqueInput
  }

  /**
   * VirtualAirlineRole findUniqueOrThrow
   */
  export type VirtualAirlineRoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VirtualAirlineRole
     */
    select?: VirtualAirlineRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VirtualAirlineRole
     */
    omit?: VirtualAirlineRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VirtualAirlineRoleInclude<ExtArgs> | null
    /**
     * Filter, which VirtualAirlineRole to fetch.
     */
    where: VirtualAirlineRoleWhereUniqueInput
  }

  /**
   * VirtualAirlineRole findFirst
   */
  export type VirtualAirlineRoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VirtualAirlineRole
     */
    select?: VirtualAirlineRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VirtualAirlineRole
     */
    omit?: VirtualAirlineRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VirtualAirlineRoleInclude<ExtArgs> | null
    /**
     * Filter, which VirtualAirlineRole to fetch.
     */
    where?: VirtualAirlineRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VirtualAirlineRoles to fetch.
     */
    orderBy?: VirtualAirlineRoleOrderByWithRelationInput | VirtualAirlineRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VirtualAirlineRoles.
     */
    cursor?: VirtualAirlineRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VirtualAirlineRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VirtualAirlineRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VirtualAirlineRoles.
     */
    distinct?: VirtualAirlineRoleScalarFieldEnum | VirtualAirlineRoleScalarFieldEnum[]
  }

  /**
   * VirtualAirlineRole findFirstOrThrow
   */
  export type VirtualAirlineRoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VirtualAirlineRole
     */
    select?: VirtualAirlineRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VirtualAirlineRole
     */
    omit?: VirtualAirlineRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VirtualAirlineRoleInclude<ExtArgs> | null
    /**
     * Filter, which VirtualAirlineRole to fetch.
     */
    where?: VirtualAirlineRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VirtualAirlineRoles to fetch.
     */
    orderBy?: VirtualAirlineRoleOrderByWithRelationInput | VirtualAirlineRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VirtualAirlineRoles.
     */
    cursor?: VirtualAirlineRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VirtualAirlineRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VirtualAirlineRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VirtualAirlineRoles.
     */
    distinct?: VirtualAirlineRoleScalarFieldEnum | VirtualAirlineRoleScalarFieldEnum[]
  }

  /**
   * VirtualAirlineRole findMany
   */
  export type VirtualAirlineRoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VirtualAirlineRole
     */
    select?: VirtualAirlineRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VirtualAirlineRole
     */
    omit?: VirtualAirlineRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VirtualAirlineRoleInclude<ExtArgs> | null
    /**
     * Filter, which VirtualAirlineRoles to fetch.
     */
    where?: VirtualAirlineRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VirtualAirlineRoles to fetch.
     */
    orderBy?: VirtualAirlineRoleOrderByWithRelationInput | VirtualAirlineRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VirtualAirlineRoles.
     */
    cursor?: VirtualAirlineRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VirtualAirlineRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VirtualAirlineRoles.
     */
    skip?: number
    distinct?: VirtualAirlineRoleScalarFieldEnum | VirtualAirlineRoleScalarFieldEnum[]
  }

  /**
   * VirtualAirlineRole create
   */
  export type VirtualAirlineRoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VirtualAirlineRole
     */
    select?: VirtualAirlineRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VirtualAirlineRole
     */
    omit?: VirtualAirlineRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VirtualAirlineRoleInclude<ExtArgs> | null
    /**
     * The data needed to create a VirtualAirlineRole.
     */
    data: XOR<VirtualAirlineRoleCreateInput, VirtualAirlineRoleUncheckedCreateInput>
  }

  /**
   * VirtualAirlineRole createMany
   */
  export type VirtualAirlineRoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VirtualAirlineRoles.
     */
    data: VirtualAirlineRoleCreateManyInput | VirtualAirlineRoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VirtualAirlineRole createManyAndReturn
   */
  export type VirtualAirlineRoleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VirtualAirlineRole
     */
    select?: VirtualAirlineRoleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VirtualAirlineRole
     */
    omit?: VirtualAirlineRoleOmit<ExtArgs> | null
    /**
     * The data used to create many VirtualAirlineRoles.
     */
    data: VirtualAirlineRoleCreateManyInput | VirtualAirlineRoleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VirtualAirlineRoleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * VirtualAirlineRole update
   */
  export type VirtualAirlineRoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VirtualAirlineRole
     */
    select?: VirtualAirlineRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VirtualAirlineRole
     */
    omit?: VirtualAirlineRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VirtualAirlineRoleInclude<ExtArgs> | null
    /**
     * The data needed to update a VirtualAirlineRole.
     */
    data: XOR<VirtualAirlineRoleUpdateInput, VirtualAirlineRoleUncheckedUpdateInput>
    /**
     * Choose, which VirtualAirlineRole to update.
     */
    where: VirtualAirlineRoleWhereUniqueInput
  }

  /**
   * VirtualAirlineRole updateMany
   */
  export type VirtualAirlineRoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VirtualAirlineRoles.
     */
    data: XOR<VirtualAirlineRoleUpdateManyMutationInput, VirtualAirlineRoleUncheckedUpdateManyInput>
    /**
     * Filter which VirtualAirlineRoles to update
     */
    where?: VirtualAirlineRoleWhereInput
    /**
     * Limit how many VirtualAirlineRoles to update.
     */
    limit?: number
  }

  /**
   * VirtualAirlineRole updateManyAndReturn
   */
  export type VirtualAirlineRoleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VirtualAirlineRole
     */
    select?: VirtualAirlineRoleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VirtualAirlineRole
     */
    omit?: VirtualAirlineRoleOmit<ExtArgs> | null
    /**
     * The data used to update VirtualAirlineRoles.
     */
    data: XOR<VirtualAirlineRoleUpdateManyMutationInput, VirtualAirlineRoleUncheckedUpdateManyInput>
    /**
     * Filter which VirtualAirlineRoles to update
     */
    where?: VirtualAirlineRoleWhereInput
    /**
     * Limit how many VirtualAirlineRoles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VirtualAirlineRoleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * VirtualAirlineRole upsert
   */
  export type VirtualAirlineRoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VirtualAirlineRole
     */
    select?: VirtualAirlineRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VirtualAirlineRole
     */
    omit?: VirtualAirlineRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VirtualAirlineRoleInclude<ExtArgs> | null
    /**
     * The filter to search for the VirtualAirlineRole to update in case it exists.
     */
    where: VirtualAirlineRoleWhereUniqueInput
    /**
     * In case the VirtualAirlineRole found by the `where` argument doesn't exist, create a new VirtualAirlineRole with this data.
     */
    create: XOR<VirtualAirlineRoleCreateInput, VirtualAirlineRoleUncheckedCreateInput>
    /**
     * In case the VirtualAirlineRole was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VirtualAirlineRoleUpdateInput, VirtualAirlineRoleUncheckedUpdateInput>
  }

  /**
   * VirtualAirlineRole delete
   */
  export type VirtualAirlineRoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VirtualAirlineRole
     */
    select?: VirtualAirlineRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VirtualAirlineRole
     */
    omit?: VirtualAirlineRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VirtualAirlineRoleInclude<ExtArgs> | null
    /**
     * Filter which VirtualAirlineRole to delete.
     */
    where: VirtualAirlineRoleWhereUniqueInput
  }

  /**
   * VirtualAirlineRole deleteMany
   */
  export type VirtualAirlineRoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VirtualAirlineRoles to delete
     */
    where?: VirtualAirlineRoleWhereInput
    /**
     * Limit how many VirtualAirlineRoles to delete.
     */
    limit?: number
  }

  /**
   * VirtualAirlineRole.Members
   */
  export type VirtualAirlineRole$MembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    where?: MemberWhereInput
    orderBy?: MemberOrderByWithRelationInput | MemberOrderByWithRelationInput[]
    cursor?: MemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MemberScalarFieldEnum | MemberScalarFieldEnum[]
  }

  /**
   * VirtualAirlineRole without action
   */
  export type VirtualAirlineRoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VirtualAirlineRole
     */
    select?: VirtualAirlineRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VirtualAirlineRole
     */
    omit?: VirtualAirlineRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VirtualAirlineRoleInclude<ExtArgs> | null
  }


  /**
   * Model World
   */

  export type AggregateWorld = {
    _count: WorldCountAggregateOutputType | null
    _min: WorldMinAggregateOutputType | null
    _max: WorldMaxAggregateOutputType | null
  }

  export type WorldMinAggregateOutputType = {
    Id: string | null
    Name: string | null
    Slug: string | null
    Description: string | null
    CreatedAt: Date | null
    UpdatedAt: Date | null
  }

  export type WorldMaxAggregateOutputType = {
    Id: string | null
    Name: string | null
    Slug: string | null
    Description: string | null
    CreatedAt: Date | null
    UpdatedAt: Date | null
  }

  export type WorldCountAggregateOutputType = {
    Id: number
    Name: number
    Slug: number
    Description: number
    CreatedAt: number
    UpdatedAt: number
    _all: number
  }


  export type WorldMinAggregateInputType = {
    Id?: true
    Name?: true
    Slug?: true
    Description?: true
    CreatedAt?: true
    UpdatedAt?: true
  }

  export type WorldMaxAggregateInputType = {
    Id?: true
    Name?: true
    Slug?: true
    Description?: true
    CreatedAt?: true
    UpdatedAt?: true
  }

  export type WorldCountAggregateInputType = {
    Id?: true
    Name?: true
    Slug?: true
    Description?: true
    CreatedAt?: true
    UpdatedAt?: true
    _all?: true
  }

  export type WorldAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which World to aggregate.
     */
    where?: WorldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Worlds to fetch.
     */
    orderBy?: WorldOrderByWithRelationInput | WorldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Worlds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Worlds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Worlds
    **/
    _count?: true | WorldCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorldMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorldMaxAggregateInputType
  }

  export type GetWorldAggregateType<T extends WorldAggregateArgs> = {
        [P in keyof T & keyof AggregateWorld]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorld[P]>
      : GetScalarType<T[P], AggregateWorld[P]>
  }




  export type WorldGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorldWhereInput
    orderBy?: WorldOrderByWithAggregationInput | WorldOrderByWithAggregationInput[]
    by: WorldScalarFieldEnum[] | WorldScalarFieldEnum
    having?: WorldScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorldCountAggregateInputType | true
    _min?: WorldMinAggregateInputType
    _max?: WorldMaxAggregateInputType
  }

  export type WorldGroupByOutputType = {
    Id: string
    Name: string
    Slug: string
    Description: string | null
    CreatedAt: Date
    UpdatedAt: Date
    _count: WorldCountAggregateOutputType | null
    _min: WorldMinAggregateOutputType | null
    _max: WorldMaxAggregateOutputType | null
  }

  type GetWorldGroupByPayload<T extends WorldGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorldGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorldGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorldGroupByOutputType[P]>
            : GetScalarType<T[P], WorldGroupByOutputType[P]>
        }
      >
    >


  export type WorldSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    Name?: boolean
    Slug?: boolean
    Description?: boolean
    CreatedAt?: boolean
    UpdatedAt?: boolean
    VirtualAirlines?: boolean | World$VirtualAirlinesArgs<ExtArgs>
    _count?: boolean | WorldCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["world"]>

  export type WorldSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    Name?: boolean
    Slug?: boolean
    Description?: boolean
    CreatedAt?: boolean
    UpdatedAt?: boolean
  }, ExtArgs["result"]["world"]>

  export type WorldSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    Name?: boolean
    Slug?: boolean
    Description?: boolean
    CreatedAt?: boolean
    UpdatedAt?: boolean
  }, ExtArgs["result"]["world"]>

  export type WorldSelectScalar = {
    Id?: boolean
    Name?: boolean
    Slug?: boolean
    Description?: boolean
    CreatedAt?: boolean
    UpdatedAt?: boolean
  }

  export type WorldOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Id" | "Name" | "Slug" | "Description" | "CreatedAt" | "UpdatedAt", ExtArgs["result"]["world"]>
  export type WorldInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    VirtualAirlines?: boolean | World$VirtualAirlinesArgs<ExtArgs>
    _count?: boolean | WorldCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WorldIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type WorldIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $WorldPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "World"
    objects: {
      VirtualAirlines: Prisma.$VirtualAirlinePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      Id: string
      Name: string
      Slug: string
      Description: string | null
      CreatedAt: Date
      UpdatedAt: Date
    }, ExtArgs["result"]["world"]>
    composites: {}
  }

  type WorldGetPayload<S extends boolean | null | undefined | WorldDefaultArgs> = $Result.GetResult<Prisma.$WorldPayload, S>

  type WorldCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorldFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorldCountAggregateInputType | true
    }

  export interface WorldDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['World'], meta: { name: 'World' } }
    /**
     * Find zero or one World that matches the filter.
     * @param {WorldFindUniqueArgs} args - Arguments to find a World
     * @example
     * // Get one World
     * const world = await prisma.world.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorldFindUniqueArgs>(args: SelectSubset<T, WorldFindUniqueArgs<ExtArgs>>): Prisma__WorldClient<$Result.GetResult<Prisma.$WorldPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one World that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorldFindUniqueOrThrowArgs} args - Arguments to find a World
     * @example
     * // Get one World
     * const world = await prisma.world.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorldFindUniqueOrThrowArgs>(args: SelectSubset<T, WorldFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorldClient<$Result.GetResult<Prisma.$WorldPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first World that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorldFindFirstArgs} args - Arguments to find a World
     * @example
     * // Get one World
     * const world = await prisma.world.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorldFindFirstArgs>(args?: SelectSubset<T, WorldFindFirstArgs<ExtArgs>>): Prisma__WorldClient<$Result.GetResult<Prisma.$WorldPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first World that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorldFindFirstOrThrowArgs} args - Arguments to find a World
     * @example
     * // Get one World
     * const world = await prisma.world.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorldFindFirstOrThrowArgs>(args?: SelectSubset<T, WorldFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorldClient<$Result.GetResult<Prisma.$WorldPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Worlds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorldFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Worlds
     * const worlds = await prisma.world.findMany()
     * 
     * // Get first 10 Worlds
     * const worlds = await prisma.world.findMany({ take: 10 })
     * 
     * // Only select the `Id`
     * const worldWithIdOnly = await prisma.world.findMany({ select: { Id: true } })
     * 
     */
    findMany<T extends WorldFindManyArgs>(args?: SelectSubset<T, WorldFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorldPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a World.
     * @param {WorldCreateArgs} args - Arguments to create a World.
     * @example
     * // Create one World
     * const World = await prisma.world.create({
     *   data: {
     *     // ... data to create a World
     *   }
     * })
     * 
     */
    create<T extends WorldCreateArgs>(args: SelectSubset<T, WorldCreateArgs<ExtArgs>>): Prisma__WorldClient<$Result.GetResult<Prisma.$WorldPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Worlds.
     * @param {WorldCreateManyArgs} args - Arguments to create many Worlds.
     * @example
     * // Create many Worlds
     * const world = await prisma.world.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorldCreateManyArgs>(args?: SelectSubset<T, WorldCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Worlds and returns the data saved in the database.
     * @param {WorldCreateManyAndReturnArgs} args - Arguments to create many Worlds.
     * @example
     * // Create many Worlds
     * const world = await prisma.world.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Worlds and only return the `Id`
     * const worldWithIdOnly = await prisma.world.createManyAndReturn({
     *   select: { Id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorldCreateManyAndReturnArgs>(args?: SelectSubset<T, WorldCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorldPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a World.
     * @param {WorldDeleteArgs} args - Arguments to delete one World.
     * @example
     * // Delete one World
     * const World = await prisma.world.delete({
     *   where: {
     *     // ... filter to delete one World
     *   }
     * })
     * 
     */
    delete<T extends WorldDeleteArgs>(args: SelectSubset<T, WorldDeleteArgs<ExtArgs>>): Prisma__WorldClient<$Result.GetResult<Prisma.$WorldPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one World.
     * @param {WorldUpdateArgs} args - Arguments to update one World.
     * @example
     * // Update one World
     * const world = await prisma.world.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorldUpdateArgs>(args: SelectSubset<T, WorldUpdateArgs<ExtArgs>>): Prisma__WorldClient<$Result.GetResult<Prisma.$WorldPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Worlds.
     * @param {WorldDeleteManyArgs} args - Arguments to filter Worlds to delete.
     * @example
     * // Delete a few Worlds
     * const { count } = await prisma.world.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorldDeleteManyArgs>(args?: SelectSubset<T, WorldDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Worlds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorldUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Worlds
     * const world = await prisma.world.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorldUpdateManyArgs>(args: SelectSubset<T, WorldUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Worlds and returns the data updated in the database.
     * @param {WorldUpdateManyAndReturnArgs} args - Arguments to update many Worlds.
     * @example
     * // Update many Worlds
     * const world = await prisma.world.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Worlds and only return the `Id`
     * const worldWithIdOnly = await prisma.world.updateManyAndReturn({
     *   select: { Id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WorldUpdateManyAndReturnArgs>(args: SelectSubset<T, WorldUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorldPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one World.
     * @param {WorldUpsertArgs} args - Arguments to update or create a World.
     * @example
     * // Update or create a World
     * const world = await prisma.world.upsert({
     *   create: {
     *     // ... data to create a World
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the World we want to update
     *   }
     * })
     */
    upsert<T extends WorldUpsertArgs>(args: SelectSubset<T, WorldUpsertArgs<ExtArgs>>): Prisma__WorldClient<$Result.GetResult<Prisma.$WorldPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Worlds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorldCountArgs} args - Arguments to filter Worlds to count.
     * @example
     * // Count the number of Worlds
     * const count = await prisma.world.count({
     *   where: {
     *     // ... the filter for the Worlds we want to count
     *   }
     * })
    **/
    count<T extends WorldCountArgs>(
      args?: Subset<T, WorldCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorldCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a World.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorldAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WorldAggregateArgs>(args: Subset<T, WorldAggregateArgs>): Prisma.PrismaPromise<GetWorldAggregateType<T>>

    /**
     * Group by World.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorldGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WorldGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorldGroupByArgs['orderBy'] }
        : { orderBy?: WorldGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WorldGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorldGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the World model
   */
  readonly fields: WorldFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for World.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorldClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    VirtualAirlines<T extends World$VirtualAirlinesArgs<ExtArgs> = {}>(args?: Subset<T, World$VirtualAirlinesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VirtualAirlinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the World model
   */
  interface WorldFieldRefs {
    readonly Id: FieldRef<"World", 'String'>
    readonly Name: FieldRef<"World", 'String'>
    readonly Slug: FieldRef<"World", 'String'>
    readonly Description: FieldRef<"World", 'String'>
    readonly CreatedAt: FieldRef<"World", 'DateTime'>
    readonly UpdatedAt: FieldRef<"World", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * World findUnique
   */
  export type WorldFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the World
     */
    select?: WorldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the World
     */
    omit?: WorldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorldInclude<ExtArgs> | null
    /**
     * Filter, which World to fetch.
     */
    where: WorldWhereUniqueInput
  }

  /**
   * World findUniqueOrThrow
   */
  export type WorldFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the World
     */
    select?: WorldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the World
     */
    omit?: WorldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorldInclude<ExtArgs> | null
    /**
     * Filter, which World to fetch.
     */
    where: WorldWhereUniqueInput
  }

  /**
   * World findFirst
   */
  export type WorldFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the World
     */
    select?: WorldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the World
     */
    omit?: WorldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorldInclude<ExtArgs> | null
    /**
     * Filter, which World to fetch.
     */
    where?: WorldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Worlds to fetch.
     */
    orderBy?: WorldOrderByWithRelationInput | WorldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Worlds.
     */
    cursor?: WorldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Worlds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Worlds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Worlds.
     */
    distinct?: WorldScalarFieldEnum | WorldScalarFieldEnum[]
  }

  /**
   * World findFirstOrThrow
   */
  export type WorldFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the World
     */
    select?: WorldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the World
     */
    omit?: WorldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorldInclude<ExtArgs> | null
    /**
     * Filter, which World to fetch.
     */
    where?: WorldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Worlds to fetch.
     */
    orderBy?: WorldOrderByWithRelationInput | WorldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Worlds.
     */
    cursor?: WorldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Worlds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Worlds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Worlds.
     */
    distinct?: WorldScalarFieldEnum | WorldScalarFieldEnum[]
  }

  /**
   * World findMany
   */
  export type WorldFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the World
     */
    select?: WorldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the World
     */
    omit?: WorldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorldInclude<ExtArgs> | null
    /**
     * Filter, which Worlds to fetch.
     */
    where?: WorldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Worlds to fetch.
     */
    orderBy?: WorldOrderByWithRelationInput | WorldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Worlds.
     */
    cursor?: WorldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Worlds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Worlds.
     */
    skip?: number
    distinct?: WorldScalarFieldEnum | WorldScalarFieldEnum[]
  }

  /**
   * World create
   */
  export type WorldCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the World
     */
    select?: WorldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the World
     */
    omit?: WorldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorldInclude<ExtArgs> | null
    /**
     * The data needed to create a World.
     */
    data: XOR<WorldCreateInput, WorldUncheckedCreateInput>
  }

  /**
   * World createMany
   */
  export type WorldCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Worlds.
     */
    data: WorldCreateManyInput | WorldCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * World createManyAndReturn
   */
  export type WorldCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the World
     */
    select?: WorldSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the World
     */
    omit?: WorldOmit<ExtArgs> | null
    /**
     * The data used to create many Worlds.
     */
    data: WorldCreateManyInput | WorldCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * World update
   */
  export type WorldUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the World
     */
    select?: WorldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the World
     */
    omit?: WorldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorldInclude<ExtArgs> | null
    /**
     * The data needed to update a World.
     */
    data: XOR<WorldUpdateInput, WorldUncheckedUpdateInput>
    /**
     * Choose, which World to update.
     */
    where: WorldWhereUniqueInput
  }

  /**
   * World updateMany
   */
  export type WorldUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Worlds.
     */
    data: XOR<WorldUpdateManyMutationInput, WorldUncheckedUpdateManyInput>
    /**
     * Filter which Worlds to update
     */
    where?: WorldWhereInput
    /**
     * Limit how many Worlds to update.
     */
    limit?: number
  }

  /**
   * World updateManyAndReturn
   */
  export type WorldUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the World
     */
    select?: WorldSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the World
     */
    omit?: WorldOmit<ExtArgs> | null
    /**
     * The data used to update Worlds.
     */
    data: XOR<WorldUpdateManyMutationInput, WorldUncheckedUpdateManyInput>
    /**
     * Filter which Worlds to update
     */
    where?: WorldWhereInput
    /**
     * Limit how many Worlds to update.
     */
    limit?: number
  }

  /**
   * World upsert
   */
  export type WorldUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the World
     */
    select?: WorldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the World
     */
    omit?: WorldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorldInclude<ExtArgs> | null
    /**
     * The filter to search for the World to update in case it exists.
     */
    where: WorldWhereUniqueInput
    /**
     * In case the World found by the `where` argument doesn't exist, create a new World with this data.
     */
    create: XOR<WorldCreateInput, WorldUncheckedCreateInput>
    /**
     * In case the World was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorldUpdateInput, WorldUncheckedUpdateInput>
  }

  /**
   * World delete
   */
  export type WorldDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the World
     */
    select?: WorldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the World
     */
    omit?: WorldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorldInclude<ExtArgs> | null
    /**
     * Filter which World to delete.
     */
    where: WorldWhereUniqueInput
  }

  /**
   * World deleteMany
   */
  export type WorldDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Worlds to delete
     */
    where?: WorldWhereInput
    /**
     * Limit how many Worlds to delete.
     */
    limit?: number
  }

  /**
   * World.VirtualAirlines
   */
  export type World$VirtualAirlinesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VirtualAirline
     */
    select?: VirtualAirlineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VirtualAirline
     */
    omit?: VirtualAirlineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VirtualAirlineInclude<ExtArgs> | null
    where?: VirtualAirlineWhereInput
    orderBy?: VirtualAirlineOrderByWithRelationInput | VirtualAirlineOrderByWithRelationInput[]
    cursor?: VirtualAirlineWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VirtualAirlineScalarFieldEnum | VirtualAirlineScalarFieldEnum[]
  }

  /**
   * World without action
   */
  export type WorldDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the World
     */
    select?: WorldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the World
     */
    omit?: WorldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorldInclude<ExtArgs> | null
  }


  /**
   * Model Member
   */

  export type AggregateMember = {
    _count: MemberCountAggregateOutputType | null
    _avg: MemberAvgAggregateOutputType | null
    _sum: MemberSumAggregateOutputType | null
    _min: MemberMinAggregateOutputType | null
    _max: MemberMaxAggregateOutputType | null
  }

  export type MemberAvgAggregateOutputType = {
    Reputation: Decimal | null
    CompanyLevel: number | null
    CompanyLevelXP: number | null
    TotalCargosTransportedLbs: number | null
    TotalPAXsTransported: number | null
    TotalEarnedCredits: Decimal | null
    TotalSpentCredits: Decimal | null
    NumberOfFlights: number | null
    FlightHours: Decimal | null
    ReputationImpact: Decimal | null
  }

  export type MemberSumAggregateOutputType = {
    Reputation: Decimal | null
    CompanyLevel: number | null
    CompanyLevelXP: number | null
    TotalCargosTransportedLbs: number | null
    TotalPAXsTransported: number | null
    TotalEarnedCredits: Decimal | null
    TotalSpentCredits: Decimal | null
    NumberOfFlights: number | null
    FlightHours: Decimal | null
    ReputationImpact: Decimal | null
  }

  export type MemberMinAggregateOutputType = {
    Id: string | null
    VAId: string | null
    CompanyId: string | null
    CompanyName: string | null
    AirlineCode: string | null
    LastConnection: Date | null
    Reputation: Decimal | null
    CompanyCreationDate: Date | null
    CompanyLevel: number | null
    CompanyLevelXP: number | null
    VARoleId: string | null
    TotalCargosTransportedLbs: number | null
    TotalPAXsTransported: number | null
    TotalEarnedCredits: Decimal | null
    TotalSpentCredits: Decimal | null
    NumberOfFlights: number | null
    FlightHours: Decimal | null
    Color: string | null
    ReputationImpact: Decimal | null
    LastVAFlightDate: Date | null
    LastRefresh: Date | null
    CreatedAt: Date | null
    UpdatedAt: Date | null
  }

  export type MemberMaxAggregateOutputType = {
    Id: string | null
    VAId: string | null
    CompanyId: string | null
    CompanyName: string | null
    AirlineCode: string | null
    LastConnection: Date | null
    Reputation: Decimal | null
    CompanyCreationDate: Date | null
    CompanyLevel: number | null
    CompanyLevelXP: number | null
    VARoleId: string | null
    TotalCargosTransportedLbs: number | null
    TotalPAXsTransported: number | null
    TotalEarnedCredits: Decimal | null
    TotalSpentCredits: Decimal | null
    NumberOfFlights: number | null
    FlightHours: Decimal | null
    Color: string | null
    ReputationImpact: Decimal | null
    LastVAFlightDate: Date | null
    LastRefresh: Date | null
    CreatedAt: Date | null
    UpdatedAt: Date | null
  }

  export type MemberCountAggregateOutputType = {
    Id: number
    VAId: number
    CompanyId: number
    CompanyName: number
    AirlineCode: number
    LastConnection: number
    Reputation: number
    CompanyCreationDate: number
    CompanyLevel: number
    CompanyLevelXP: number
    VARoleId: number
    TotalCargosTransportedLbs: number
    TotalPAXsTransported: number
    TotalEarnedCredits: number
    TotalSpentCredits: number
    NumberOfFlights: number
    FlightHours: number
    Color: number
    ReputationImpact: number
    LastVAFlightDate: number
    LastRefresh: number
    CreatedAt: number
    UpdatedAt: number
    _all: number
  }


  export type MemberAvgAggregateInputType = {
    Reputation?: true
    CompanyLevel?: true
    CompanyLevelXP?: true
    TotalCargosTransportedLbs?: true
    TotalPAXsTransported?: true
    TotalEarnedCredits?: true
    TotalSpentCredits?: true
    NumberOfFlights?: true
    FlightHours?: true
    ReputationImpact?: true
  }

  export type MemberSumAggregateInputType = {
    Reputation?: true
    CompanyLevel?: true
    CompanyLevelXP?: true
    TotalCargosTransportedLbs?: true
    TotalPAXsTransported?: true
    TotalEarnedCredits?: true
    TotalSpentCredits?: true
    NumberOfFlights?: true
    FlightHours?: true
    ReputationImpact?: true
  }

  export type MemberMinAggregateInputType = {
    Id?: true
    VAId?: true
    CompanyId?: true
    CompanyName?: true
    AirlineCode?: true
    LastConnection?: true
    Reputation?: true
    CompanyCreationDate?: true
    CompanyLevel?: true
    CompanyLevelXP?: true
    VARoleId?: true
    TotalCargosTransportedLbs?: true
    TotalPAXsTransported?: true
    TotalEarnedCredits?: true
    TotalSpentCredits?: true
    NumberOfFlights?: true
    FlightHours?: true
    Color?: true
    ReputationImpact?: true
    LastVAFlightDate?: true
    LastRefresh?: true
    CreatedAt?: true
    UpdatedAt?: true
  }

  export type MemberMaxAggregateInputType = {
    Id?: true
    VAId?: true
    CompanyId?: true
    CompanyName?: true
    AirlineCode?: true
    LastConnection?: true
    Reputation?: true
    CompanyCreationDate?: true
    CompanyLevel?: true
    CompanyLevelXP?: true
    VARoleId?: true
    TotalCargosTransportedLbs?: true
    TotalPAXsTransported?: true
    TotalEarnedCredits?: true
    TotalSpentCredits?: true
    NumberOfFlights?: true
    FlightHours?: true
    Color?: true
    ReputationImpact?: true
    LastVAFlightDate?: true
    LastRefresh?: true
    CreatedAt?: true
    UpdatedAt?: true
  }

  export type MemberCountAggregateInputType = {
    Id?: true
    VAId?: true
    CompanyId?: true
    CompanyName?: true
    AirlineCode?: true
    LastConnection?: true
    Reputation?: true
    CompanyCreationDate?: true
    CompanyLevel?: true
    CompanyLevelXP?: true
    VARoleId?: true
    TotalCargosTransportedLbs?: true
    TotalPAXsTransported?: true
    TotalEarnedCredits?: true
    TotalSpentCredits?: true
    NumberOfFlights?: true
    FlightHours?: true
    Color?: true
    ReputationImpact?: true
    LastVAFlightDate?: true
    LastRefresh?: true
    CreatedAt?: true
    UpdatedAt?: true
    _all?: true
  }

  export type MemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Member to aggregate.
     */
    where?: MemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Members to fetch.
     */
    orderBy?: MemberOrderByWithRelationInput | MemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Members
    **/
    _count?: true | MemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MemberAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MemberSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MemberMaxAggregateInputType
  }

  export type GetMemberAggregateType<T extends MemberAggregateArgs> = {
        [P in keyof T & keyof AggregateMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMember[P]>
      : GetScalarType<T[P], AggregateMember[P]>
  }




  export type MemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MemberWhereInput
    orderBy?: MemberOrderByWithAggregationInput | MemberOrderByWithAggregationInput[]
    by: MemberScalarFieldEnum[] | MemberScalarFieldEnum
    having?: MemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MemberCountAggregateInputType | true
    _avg?: MemberAvgAggregateInputType
    _sum?: MemberSumAggregateInputType
    _min?: MemberMinAggregateInputType
    _max?: MemberMaxAggregateInputType
  }

  export type MemberGroupByOutputType = {
    Id: string
    VAId: string
    CompanyId: string
    CompanyName: string
    AirlineCode: string
    LastConnection: Date | null
    Reputation: Decimal
    CompanyCreationDate: Date
    CompanyLevel: number
    CompanyLevelXP: number
    VARoleId: string
    TotalCargosTransportedLbs: number
    TotalPAXsTransported: number
    TotalEarnedCredits: Decimal
    TotalSpentCredits: Decimal
    NumberOfFlights: number
    FlightHours: Decimal
    Color: string
    ReputationImpact: Decimal
    LastVAFlightDate: Date | null
    LastRefresh: Date | null
    CreatedAt: Date
    UpdatedAt: Date
    _count: MemberCountAggregateOutputType | null
    _avg: MemberAvgAggregateOutputType | null
    _sum: MemberSumAggregateOutputType | null
    _min: MemberMinAggregateOutputType | null
    _max: MemberMaxAggregateOutputType | null
  }

  type GetMemberGroupByPayload<T extends MemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MemberGroupByOutputType[P]>
            : GetScalarType<T[P], MemberGroupByOutputType[P]>
        }
      >
    >


  export type MemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    VAId?: boolean
    CompanyId?: boolean
    CompanyName?: boolean
    AirlineCode?: boolean
    LastConnection?: boolean
    Reputation?: boolean
    CompanyCreationDate?: boolean
    CompanyLevel?: boolean
    CompanyLevelXP?: boolean
    VARoleId?: boolean
    TotalCargosTransportedLbs?: boolean
    TotalPAXsTransported?: boolean
    TotalEarnedCredits?: boolean
    TotalSpentCredits?: boolean
    NumberOfFlights?: boolean
    FlightHours?: boolean
    Color?: boolean
    ReputationImpact?: boolean
    LastVAFlightDate?: boolean
    LastRefresh?: boolean
    CreatedAt?: boolean
    UpdatedAt?: boolean
    VirtualAirline?: boolean | VirtualAirlineDefaultArgs<ExtArgs>
    VARole?: boolean | VirtualAirlineRoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["member"]>

  export type MemberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    VAId?: boolean
    CompanyId?: boolean
    CompanyName?: boolean
    AirlineCode?: boolean
    LastConnection?: boolean
    Reputation?: boolean
    CompanyCreationDate?: boolean
    CompanyLevel?: boolean
    CompanyLevelXP?: boolean
    VARoleId?: boolean
    TotalCargosTransportedLbs?: boolean
    TotalPAXsTransported?: boolean
    TotalEarnedCredits?: boolean
    TotalSpentCredits?: boolean
    NumberOfFlights?: boolean
    FlightHours?: boolean
    Color?: boolean
    ReputationImpact?: boolean
    LastVAFlightDate?: boolean
    LastRefresh?: boolean
    CreatedAt?: boolean
    UpdatedAt?: boolean
    VirtualAirline?: boolean | VirtualAirlineDefaultArgs<ExtArgs>
    VARole?: boolean | VirtualAirlineRoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["member"]>

  export type MemberSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    VAId?: boolean
    CompanyId?: boolean
    CompanyName?: boolean
    AirlineCode?: boolean
    LastConnection?: boolean
    Reputation?: boolean
    CompanyCreationDate?: boolean
    CompanyLevel?: boolean
    CompanyLevelXP?: boolean
    VARoleId?: boolean
    TotalCargosTransportedLbs?: boolean
    TotalPAXsTransported?: boolean
    TotalEarnedCredits?: boolean
    TotalSpentCredits?: boolean
    NumberOfFlights?: boolean
    FlightHours?: boolean
    Color?: boolean
    ReputationImpact?: boolean
    LastVAFlightDate?: boolean
    LastRefresh?: boolean
    CreatedAt?: boolean
    UpdatedAt?: boolean
    VirtualAirline?: boolean | VirtualAirlineDefaultArgs<ExtArgs>
    VARole?: boolean | VirtualAirlineRoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["member"]>

  export type MemberSelectScalar = {
    Id?: boolean
    VAId?: boolean
    CompanyId?: boolean
    CompanyName?: boolean
    AirlineCode?: boolean
    LastConnection?: boolean
    Reputation?: boolean
    CompanyCreationDate?: boolean
    CompanyLevel?: boolean
    CompanyLevelXP?: boolean
    VARoleId?: boolean
    TotalCargosTransportedLbs?: boolean
    TotalPAXsTransported?: boolean
    TotalEarnedCredits?: boolean
    TotalSpentCredits?: boolean
    NumberOfFlights?: boolean
    FlightHours?: boolean
    Color?: boolean
    ReputationImpact?: boolean
    LastVAFlightDate?: boolean
    LastRefresh?: boolean
    CreatedAt?: boolean
    UpdatedAt?: boolean
  }

  export type MemberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Id" | "VAId" | "CompanyId" | "CompanyName" | "AirlineCode" | "LastConnection" | "Reputation" | "CompanyCreationDate" | "CompanyLevel" | "CompanyLevelXP" | "VARoleId" | "TotalCargosTransportedLbs" | "TotalPAXsTransported" | "TotalEarnedCredits" | "TotalSpentCredits" | "NumberOfFlights" | "FlightHours" | "Color" | "ReputationImpact" | "LastVAFlightDate" | "LastRefresh" | "CreatedAt" | "UpdatedAt", ExtArgs["result"]["member"]>
  export type MemberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    VirtualAirline?: boolean | VirtualAirlineDefaultArgs<ExtArgs>
    VARole?: boolean | VirtualAirlineRoleDefaultArgs<ExtArgs>
  }
  export type MemberIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    VirtualAirline?: boolean | VirtualAirlineDefaultArgs<ExtArgs>
    VARole?: boolean | VirtualAirlineRoleDefaultArgs<ExtArgs>
  }
  export type MemberIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    VirtualAirline?: boolean | VirtualAirlineDefaultArgs<ExtArgs>
    VARole?: boolean | VirtualAirlineRoleDefaultArgs<ExtArgs>
  }

  export type $MemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Member"
    objects: {
      VirtualAirline: Prisma.$VirtualAirlinePayload<ExtArgs>
      VARole: Prisma.$VirtualAirlineRolePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      Id: string
      VAId: string
      CompanyId: string
      CompanyName: string
      AirlineCode: string
      LastConnection: Date | null
      Reputation: Prisma.Decimal
      CompanyCreationDate: Date
      CompanyLevel: number
      CompanyLevelXP: number
      VARoleId: string
      TotalCargosTransportedLbs: number
      TotalPAXsTransported: number
      TotalEarnedCredits: Prisma.Decimal
      TotalSpentCredits: Prisma.Decimal
      NumberOfFlights: number
      FlightHours: Prisma.Decimal
      Color: string
      ReputationImpact: Prisma.Decimal
      LastVAFlightDate: Date | null
      LastRefresh: Date | null
      CreatedAt: Date
      UpdatedAt: Date
    }, ExtArgs["result"]["member"]>
    composites: {}
  }

  type MemberGetPayload<S extends boolean | null | undefined | MemberDefaultArgs> = $Result.GetResult<Prisma.$MemberPayload, S>

  type MemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MemberCountAggregateInputType | true
    }

  export interface MemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Member'], meta: { name: 'Member' } }
    /**
     * Find zero or one Member that matches the filter.
     * @param {MemberFindUniqueArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MemberFindUniqueArgs>(args: SelectSubset<T, MemberFindUniqueArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Member that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MemberFindUniqueOrThrowArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MemberFindUniqueOrThrowArgs>(args: SelectSubset<T, MemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Member that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberFindFirstArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MemberFindFirstArgs>(args?: SelectSubset<T, MemberFindFirstArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Member that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberFindFirstOrThrowArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MemberFindFirstOrThrowArgs>(args?: SelectSubset<T, MemberFindFirstOrThrowArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Members that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Members
     * const members = await prisma.member.findMany()
     * 
     * // Get first 10 Members
     * const members = await prisma.member.findMany({ take: 10 })
     * 
     * // Only select the `Id`
     * const memberWithIdOnly = await prisma.member.findMany({ select: { Id: true } })
     * 
     */
    findMany<T extends MemberFindManyArgs>(args?: SelectSubset<T, MemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Member.
     * @param {MemberCreateArgs} args - Arguments to create a Member.
     * @example
     * // Create one Member
     * const Member = await prisma.member.create({
     *   data: {
     *     // ... data to create a Member
     *   }
     * })
     * 
     */
    create<T extends MemberCreateArgs>(args: SelectSubset<T, MemberCreateArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Members.
     * @param {MemberCreateManyArgs} args - Arguments to create many Members.
     * @example
     * // Create many Members
     * const member = await prisma.member.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MemberCreateManyArgs>(args?: SelectSubset<T, MemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Members and returns the data saved in the database.
     * @param {MemberCreateManyAndReturnArgs} args - Arguments to create many Members.
     * @example
     * // Create many Members
     * const member = await prisma.member.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Members and only return the `Id`
     * const memberWithIdOnly = await prisma.member.createManyAndReturn({
     *   select: { Id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MemberCreateManyAndReturnArgs>(args?: SelectSubset<T, MemberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Member.
     * @param {MemberDeleteArgs} args - Arguments to delete one Member.
     * @example
     * // Delete one Member
     * const Member = await prisma.member.delete({
     *   where: {
     *     // ... filter to delete one Member
     *   }
     * })
     * 
     */
    delete<T extends MemberDeleteArgs>(args: SelectSubset<T, MemberDeleteArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Member.
     * @param {MemberUpdateArgs} args - Arguments to update one Member.
     * @example
     * // Update one Member
     * const member = await prisma.member.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MemberUpdateArgs>(args: SelectSubset<T, MemberUpdateArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Members.
     * @param {MemberDeleteManyArgs} args - Arguments to filter Members to delete.
     * @example
     * // Delete a few Members
     * const { count } = await prisma.member.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MemberDeleteManyArgs>(args?: SelectSubset<T, MemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Members
     * const member = await prisma.member.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MemberUpdateManyArgs>(args: SelectSubset<T, MemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Members and returns the data updated in the database.
     * @param {MemberUpdateManyAndReturnArgs} args - Arguments to update many Members.
     * @example
     * // Update many Members
     * const member = await prisma.member.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Members and only return the `Id`
     * const memberWithIdOnly = await prisma.member.updateManyAndReturn({
     *   select: { Id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MemberUpdateManyAndReturnArgs>(args: SelectSubset<T, MemberUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Member.
     * @param {MemberUpsertArgs} args - Arguments to update or create a Member.
     * @example
     * // Update or create a Member
     * const member = await prisma.member.upsert({
     *   create: {
     *     // ... data to create a Member
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Member we want to update
     *   }
     * })
     */
    upsert<T extends MemberUpsertArgs>(args: SelectSubset<T, MemberUpsertArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberCountArgs} args - Arguments to filter Members to count.
     * @example
     * // Count the number of Members
     * const count = await prisma.member.count({
     *   where: {
     *     // ... the filter for the Members we want to count
     *   }
     * })
    **/
    count<T extends MemberCountArgs>(
      args?: Subset<T, MemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Member.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MemberAggregateArgs>(args: Subset<T, MemberAggregateArgs>): Prisma.PrismaPromise<GetMemberAggregateType<T>>

    /**
     * Group by Member.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MemberGroupByArgs['orderBy'] }
        : { orderBy?: MemberGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Member model
   */
  readonly fields: MemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Member.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    VirtualAirline<T extends VirtualAirlineDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VirtualAirlineDefaultArgs<ExtArgs>>): Prisma__VirtualAirlineClient<$Result.GetResult<Prisma.$VirtualAirlinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    VARole<T extends VirtualAirlineRoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VirtualAirlineRoleDefaultArgs<ExtArgs>>): Prisma__VirtualAirlineRoleClient<$Result.GetResult<Prisma.$VirtualAirlineRolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Member model
   */
  interface MemberFieldRefs {
    readonly Id: FieldRef<"Member", 'String'>
    readonly VAId: FieldRef<"Member", 'String'>
    readonly CompanyId: FieldRef<"Member", 'String'>
    readonly CompanyName: FieldRef<"Member", 'String'>
    readonly AirlineCode: FieldRef<"Member", 'String'>
    readonly LastConnection: FieldRef<"Member", 'DateTime'>
    readonly Reputation: FieldRef<"Member", 'Decimal'>
    readonly CompanyCreationDate: FieldRef<"Member", 'DateTime'>
    readonly CompanyLevel: FieldRef<"Member", 'Int'>
    readonly CompanyLevelXP: FieldRef<"Member", 'Int'>
    readonly VARoleId: FieldRef<"Member", 'String'>
    readonly TotalCargosTransportedLbs: FieldRef<"Member", 'Int'>
    readonly TotalPAXsTransported: FieldRef<"Member", 'Int'>
    readonly TotalEarnedCredits: FieldRef<"Member", 'Decimal'>
    readonly TotalSpentCredits: FieldRef<"Member", 'Decimal'>
    readonly NumberOfFlights: FieldRef<"Member", 'Int'>
    readonly FlightHours: FieldRef<"Member", 'Decimal'>
    readonly Color: FieldRef<"Member", 'String'>
    readonly ReputationImpact: FieldRef<"Member", 'Decimal'>
    readonly LastVAFlightDate: FieldRef<"Member", 'DateTime'>
    readonly LastRefresh: FieldRef<"Member", 'DateTime'>
    readonly CreatedAt: FieldRef<"Member", 'DateTime'>
    readonly UpdatedAt: FieldRef<"Member", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Member findUnique
   */
  export type MemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Member to fetch.
     */
    where: MemberWhereUniqueInput
  }

  /**
   * Member findUniqueOrThrow
   */
  export type MemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Member to fetch.
     */
    where: MemberWhereUniqueInput
  }

  /**
   * Member findFirst
   */
  export type MemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Member to fetch.
     */
    where?: MemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Members to fetch.
     */
    orderBy?: MemberOrderByWithRelationInput | MemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Members.
     */
    cursor?: MemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Members.
     */
    distinct?: MemberScalarFieldEnum | MemberScalarFieldEnum[]
  }

  /**
   * Member findFirstOrThrow
   */
  export type MemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Member to fetch.
     */
    where?: MemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Members to fetch.
     */
    orderBy?: MemberOrderByWithRelationInput | MemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Members.
     */
    cursor?: MemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Members.
     */
    distinct?: MemberScalarFieldEnum | MemberScalarFieldEnum[]
  }

  /**
   * Member findMany
   */
  export type MemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Members to fetch.
     */
    where?: MemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Members to fetch.
     */
    orderBy?: MemberOrderByWithRelationInput | MemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Members.
     */
    cursor?: MemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Members.
     */
    skip?: number
    distinct?: MemberScalarFieldEnum | MemberScalarFieldEnum[]
  }

  /**
   * Member create
   */
  export type MemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * The data needed to create a Member.
     */
    data: XOR<MemberCreateInput, MemberUncheckedCreateInput>
  }

  /**
   * Member createMany
   */
  export type MemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Members.
     */
    data: MemberCreateManyInput | MemberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Member createManyAndReturn
   */
  export type MemberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * The data used to create many Members.
     */
    data: MemberCreateManyInput | MemberCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Member update
   */
  export type MemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * The data needed to update a Member.
     */
    data: XOR<MemberUpdateInput, MemberUncheckedUpdateInput>
    /**
     * Choose, which Member to update.
     */
    where: MemberWhereUniqueInput
  }

  /**
   * Member updateMany
   */
  export type MemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Members.
     */
    data: XOR<MemberUpdateManyMutationInput, MemberUncheckedUpdateManyInput>
    /**
     * Filter which Members to update
     */
    where?: MemberWhereInput
    /**
     * Limit how many Members to update.
     */
    limit?: number
  }

  /**
   * Member updateManyAndReturn
   */
  export type MemberUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * The data used to update Members.
     */
    data: XOR<MemberUpdateManyMutationInput, MemberUncheckedUpdateManyInput>
    /**
     * Filter which Members to update
     */
    where?: MemberWhereInput
    /**
     * Limit how many Members to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Member upsert
   */
  export type MemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * The filter to search for the Member to update in case it exists.
     */
    where: MemberWhereUniqueInput
    /**
     * In case the Member found by the `where` argument doesn't exist, create a new Member with this data.
     */
    create: XOR<MemberCreateInput, MemberUncheckedCreateInput>
    /**
     * In case the Member was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MemberUpdateInput, MemberUncheckedUpdateInput>
  }

  /**
   * Member delete
   */
  export type MemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter which Member to delete.
     */
    where: MemberWhereUniqueInput
  }

  /**
   * Member deleteMany
   */
  export type MemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Members to delete
     */
    where?: MemberWhereInput
    /**
     * Limit how many Members to delete.
     */
    limit?: number
  }

  /**
   * Member without action
   */
  export type MemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
  }


  /**
   * Model Job
   */

  export type AggregateJob = {
    _count: JobCountAggregateOutputType | null
    _avg: JobAvgAggregateOutputType | null
    _sum: JobSumAggregateOutputType | null
    _min: JobMinAggregateOutputType | null
    _max: JobMaxAggregateOutputType | null
  }

  export type JobAvgAggregateOutputType = {
    ExecutionCount: number | null
  }

  export type JobSumAggregateOutputType = {
    ExecutionCount: number | null
  }

  export type JobMinAggregateOutputType = {
    Id: string | null
    IsEnabled: boolean | null
    FirstRunCompleted: boolean | null
    Type: $Enums.JobType | null
    Status: $Enums.JobStatus | null
    CronExpression: $Enums.CronExpression | null
    Name: string | null
    Description: string | null
    LastRunAt: Date | null
    NextRunAt: Date | null
    LastError: string | null
    ExecutionCount: number | null
    CreatedAt: Date | null
    UpdatedAt: Date | null
  }

  export type JobMaxAggregateOutputType = {
    Id: string | null
    IsEnabled: boolean | null
    FirstRunCompleted: boolean | null
    Type: $Enums.JobType | null
    Status: $Enums.JobStatus | null
    CronExpression: $Enums.CronExpression | null
    Name: string | null
    Description: string | null
    LastRunAt: Date | null
    NextRunAt: Date | null
    LastError: string | null
    ExecutionCount: number | null
    CreatedAt: Date | null
    UpdatedAt: Date | null
  }

  export type JobCountAggregateOutputType = {
    Id: number
    IsEnabled: number
    FirstRunCompleted: number
    Type: number
    Status: number
    CronExpression: number
    Name: number
    Description: number
    Parameters: number
    LastRunAt: number
    NextRunAt: number
    LastError: number
    ExecutionCount: number
    CreatedAt: number
    UpdatedAt: number
    _all: number
  }


  export type JobAvgAggregateInputType = {
    ExecutionCount?: true
  }

  export type JobSumAggregateInputType = {
    ExecutionCount?: true
  }

  export type JobMinAggregateInputType = {
    Id?: true
    IsEnabled?: true
    FirstRunCompleted?: true
    Type?: true
    Status?: true
    CronExpression?: true
    Name?: true
    Description?: true
    LastRunAt?: true
    NextRunAt?: true
    LastError?: true
    ExecutionCount?: true
    CreatedAt?: true
    UpdatedAt?: true
  }

  export type JobMaxAggregateInputType = {
    Id?: true
    IsEnabled?: true
    FirstRunCompleted?: true
    Type?: true
    Status?: true
    CronExpression?: true
    Name?: true
    Description?: true
    LastRunAt?: true
    NextRunAt?: true
    LastError?: true
    ExecutionCount?: true
    CreatedAt?: true
    UpdatedAt?: true
  }

  export type JobCountAggregateInputType = {
    Id?: true
    IsEnabled?: true
    FirstRunCompleted?: true
    Type?: true
    Status?: true
    CronExpression?: true
    Name?: true
    Description?: true
    Parameters?: true
    LastRunAt?: true
    NextRunAt?: true
    LastError?: true
    ExecutionCount?: true
    CreatedAt?: true
    UpdatedAt?: true
    _all?: true
  }

  export type JobAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Job to aggregate.
     */
    where?: JobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jobs to fetch.
     */
    orderBy?: JobOrderByWithRelationInput | JobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Jobs
    **/
    _count?: true | JobCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JobAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JobSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JobMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JobMaxAggregateInputType
  }

  export type GetJobAggregateType<T extends JobAggregateArgs> = {
        [P in keyof T & keyof AggregateJob]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJob[P]>
      : GetScalarType<T[P], AggregateJob[P]>
  }




  export type JobGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobWhereInput
    orderBy?: JobOrderByWithAggregationInput | JobOrderByWithAggregationInput[]
    by: JobScalarFieldEnum[] | JobScalarFieldEnum
    having?: JobScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JobCountAggregateInputType | true
    _avg?: JobAvgAggregateInputType
    _sum?: JobSumAggregateInputType
    _min?: JobMinAggregateInputType
    _max?: JobMaxAggregateInputType
  }

  export type JobGroupByOutputType = {
    Id: string
    IsEnabled: boolean
    FirstRunCompleted: boolean
    Type: $Enums.JobType
    Status: $Enums.JobStatus
    CronExpression: $Enums.CronExpression
    Name: string
    Description: string | null
    Parameters: JsonValue | null
    LastRunAt: Date | null
    NextRunAt: Date | null
    LastError: string | null
    ExecutionCount: number
    CreatedAt: Date
    UpdatedAt: Date
    _count: JobCountAggregateOutputType | null
    _avg: JobAvgAggregateOutputType | null
    _sum: JobSumAggregateOutputType | null
    _min: JobMinAggregateOutputType | null
    _max: JobMaxAggregateOutputType | null
  }

  type GetJobGroupByPayload<T extends JobGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JobGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JobGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JobGroupByOutputType[P]>
            : GetScalarType<T[P], JobGroupByOutputType[P]>
        }
      >
    >


  export type JobSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    IsEnabled?: boolean
    FirstRunCompleted?: boolean
    Type?: boolean
    Status?: boolean
    CronExpression?: boolean
    Name?: boolean
    Description?: boolean
    Parameters?: boolean
    LastRunAt?: boolean
    NextRunAt?: boolean
    LastError?: boolean
    ExecutionCount?: boolean
    CreatedAt?: boolean
    UpdatedAt?: boolean
  }, ExtArgs["result"]["job"]>

  export type JobSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    IsEnabled?: boolean
    FirstRunCompleted?: boolean
    Type?: boolean
    Status?: boolean
    CronExpression?: boolean
    Name?: boolean
    Description?: boolean
    Parameters?: boolean
    LastRunAt?: boolean
    NextRunAt?: boolean
    LastError?: boolean
    ExecutionCount?: boolean
    CreatedAt?: boolean
    UpdatedAt?: boolean
  }, ExtArgs["result"]["job"]>

  export type JobSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    IsEnabled?: boolean
    FirstRunCompleted?: boolean
    Type?: boolean
    Status?: boolean
    CronExpression?: boolean
    Name?: boolean
    Description?: boolean
    Parameters?: boolean
    LastRunAt?: boolean
    NextRunAt?: boolean
    LastError?: boolean
    ExecutionCount?: boolean
    CreatedAt?: boolean
    UpdatedAt?: boolean
  }, ExtArgs["result"]["job"]>

  export type JobSelectScalar = {
    Id?: boolean
    IsEnabled?: boolean
    FirstRunCompleted?: boolean
    Type?: boolean
    Status?: boolean
    CronExpression?: boolean
    Name?: boolean
    Description?: boolean
    Parameters?: boolean
    LastRunAt?: boolean
    NextRunAt?: boolean
    LastError?: boolean
    ExecutionCount?: boolean
    CreatedAt?: boolean
    UpdatedAt?: boolean
  }

  export type JobOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Id" | "IsEnabled" | "FirstRunCompleted" | "Type" | "Status" | "CronExpression" | "Name" | "Description" | "Parameters" | "LastRunAt" | "NextRunAt" | "LastError" | "ExecutionCount" | "CreatedAt" | "UpdatedAt", ExtArgs["result"]["job"]>

  export type $JobPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Job"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      Id: string
      IsEnabled: boolean
      FirstRunCompleted: boolean
      Type: $Enums.JobType
      Status: $Enums.JobStatus
      CronExpression: $Enums.CronExpression
      Name: string
      Description: string | null
      Parameters: Prisma.JsonValue | null
      LastRunAt: Date | null
      NextRunAt: Date | null
      LastError: string | null
      ExecutionCount: number
      CreatedAt: Date
      UpdatedAt: Date
    }, ExtArgs["result"]["job"]>
    composites: {}
  }

  type JobGetPayload<S extends boolean | null | undefined | JobDefaultArgs> = $Result.GetResult<Prisma.$JobPayload, S>

  type JobCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JobFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JobCountAggregateInputType | true
    }

  export interface JobDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Job'], meta: { name: 'Job' } }
    /**
     * Find zero or one Job that matches the filter.
     * @param {JobFindUniqueArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JobFindUniqueArgs>(args: SelectSubset<T, JobFindUniqueArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Job that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JobFindUniqueOrThrowArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JobFindUniqueOrThrowArgs>(args: SelectSubset<T, JobFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Job that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobFindFirstArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JobFindFirstArgs>(args?: SelectSubset<T, JobFindFirstArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Job that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobFindFirstOrThrowArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JobFindFirstOrThrowArgs>(args?: SelectSubset<T, JobFindFirstOrThrowArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Jobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Jobs
     * const jobs = await prisma.job.findMany()
     * 
     * // Get first 10 Jobs
     * const jobs = await prisma.job.findMany({ take: 10 })
     * 
     * // Only select the `Id`
     * const jobWithIdOnly = await prisma.job.findMany({ select: { Id: true } })
     * 
     */
    findMany<T extends JobFindManyArgs>(args?: SelectSubset<T, JobFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Job.
     * @param {JobCreateArgs} args - Arguments to create a Job.
     * @example
     * // Create one Job
     * const Job = await prisma.job.create({
     *   data: {
     *     // ... data to create a Job
     *   }
     * })
     * 
     */
    create<T extends JobCreateArgs>(args: SelectSubset<T, JobCreateArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Jobs.
     * @param {JobCreateManyArgs} args - Arguments to create many Jobs.
     * @example
     * // Create many Jobs
     * const job = await prisma.job.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JobCreateManyArgs>(args?: SelectSubset<T, JobCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Jobs and returns the data saved in the database.
     * @param {JobCreateManyAndReturnArgs} args - Arguments to create many Jobs.
     * @example
     * // Create many Jobs
     * const job = await prisma.job.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Jobs and only return the `Id`
     * const jobWithIdOnly = await prisma.job.createManyAndReturn({
     *   select: { Id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends JobCreateManyAndReturnArgs>(args?: SelectSubset<T, JobCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Job.
     * @param {JobDeleteArgs} args - Arguments to delete one Job.
     * @example
     * // Delete one Job
     * const Job = await prisma.job.delete({
     *   where: {
     *     // ... filter to delete one Job
     *   }
     * })
     * 
     */
    delete<T extends JobDeleteArgs>(args: SelectSubset<T, JobDeleteArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Job.
     * @param {JobUpdateArgs} args - Arguments to update one Job.
     * @example
     * // Update one Job
     * const job = await prisma.job.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JobUpdateArgs>(args: SelectSubset<T, JobUpdateArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Jobs.
     * @param {JobDeleteManyArgs} args - Arguments to filter Jobs to delete.
     * @example
     * // Delete a few Jobs
     * const { count } = await prisma.job.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JobDeleteManyArgs>(args?: SelectSubset<T, JobDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Jobs
     * const job = await prisma.job.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JobUpdateManyArgs>(args: SelectSubset<T, JobUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Jobs and returns the data updated in the database.
     * @param {JobUpdateManyAndReturnArgs} args - Arguments to update many Jobs.
     * @example
     * // Update many Jobs
     * const job = await prisma.job.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Jobs and only return the `Id`
     * const jobWithIdOnly = await prisma.job.updateManyAndReturn({
     *   select: { Id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends JobUpdateManyAndReturnArgs>(args: SelectSubset<T, JobUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Job.
     * @param {JobUpsertArgs} args - Arguments to update or create a Job.
     * @example
     * // Update or create a Job
     * const job = await prisma.job.upsert({
     *   create: {
     *     // ... data to create a Job
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Job we want to update
     *   }
     * })
     */
    upsert<T extends JobUpsertArgs>(args: SelectSubset<T, JobUpsertArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobCountArgs} args - Arguments to filter Jobs to count.
     * @example
     * // Count the number of Jobs
     * const count = await prisma.job.count({
     *   where: {
     *     // ... the filter for the Jobs we want to count
     *   }
     * })
    **/
    count<T extends JobCountArgs>(
      args?: Subset<T, JobCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JobCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Job.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends JobAggregateArgs>(args: Subset<T, JobAggregateArgs>): Prisma.PrismaPromise<GetJobAggregateType<T>>

    /**
     * Group by Job.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends JobGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JobGroupByArgs['orderBy'] }
        : { orderBy?: JobGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, JobGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJobGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Job model
   */
  readonly fields: JobFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Job.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JobClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Job model
   */
  interface JobFieldRefs {
    readonly Id: FieldRef<"Job", 'String'>
    readonly IsEnabled: FieldRef<"Job", 'Boolean'>
    readonly FirstRunCompleted: FieldRef<"Job", 'Boolean'>
    readonly Type: FieldRef<"Job", 'JobType'>
    readonly Status: FieldRef<"Job", 'JobStatus'>
    readonly CronExpression: FieldRef<"Job", 'CronExpression'>
    readonly Name: FieldRef<"Job", 'String'>
    readonly Description: FieldRef<"Job", 'String'>
    readonly Parameters: FieldRef<"Job", 'Json'>
    readonly LastRunAt: FieldRef<"Job", 'DateTime'>
    readonly NextRunAt: FieldRef<"Job", 'DateTime'>
    readonly LastError: FieldRef<"Job", 'String'>
    readonly ExecutionCount: FieldRef<"Job", 'Int'>
    readonly CreatedAt: FieldRef<"Job", 'DateTime'>
    readonly UpdatedAt: FieldRef<"Job", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Job findUnique
   */
  export type JobFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Filter, which Job to fetch.
     */
    where: JobWhereUniqueInput
  }

  /**
   * Job findUniqueOrThrow
   */
  export type JobFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Filter, which Job to fetch.
     */
    where: JobWhereUniqueInput
  }

  /**
   * Job findFirst
   */
  export type JobFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Filter, which Job to fetch.
     */
    where?: JobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jobs to fetch.
     */
    orderBy?: JobOrderByWithRelationInput | JobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Jobs.
     */
    cursor?: JobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Jobs.
     */
    distinct?: JobScalarFieldEnum | JobScalarFieldEnum[]
  }

  /**
   * Job findFirstOrThrow
   */
  export type JobFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Filter, which Job to fetch.
     */
    where?: JobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jobs to fetch.
     */
    orderBy?: JobOrderByWithRelationInput | JobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Jobs.
     */
    cursor?: JobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Jobs.
     */
    distinct?: JobScalarFieldEnum | JobScalarFieldEnum[]
  }

  /**
   * Job findMany
   */
  export type JobFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Filter, which Jobs to fetch.
     */
    where?: JobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jobs to fetch.
     */
    orderBy?: JobOrderByWithRelationInput | JobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Jobs.
     */
    cursor?: JobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jobs.
     */
    skip?: number
    distinct?: JobScalarFieldEnum | JobScalarFieldEnum[]
  }

  /**
   * Job create
   */
  export type JobCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * The data needed to create a Job.
     */
    data: XOR<JobCreateInput, JobUncheckedCreateInput>
  }

  /**
   * Job createMany
   */
  export type JobCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Jobs.
     */
    data: JobCreateManyInput | JobCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Job createManyAndReturn
   */
  export type JobCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * The data used to create many Jobs.
     */
    data: JobCreateManyInput | JobCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Job update
   */
  export type JobUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * The data needed to update a Job.
     */
    data: XOR<JobUpdateInput, JobUncheckedUpdateInput>
    /**
     * Choose, which Job to update.
     */
    where: JobWhereUniqueInput
  }

  /**
   * Job updateMany
   */
  export type JobUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Jobs.
     */
    data: XOR<JobUpdateManyMutationInput, JobUncheckedUpdateManyInput>
    /**
     * Filter which Jobs to update
     */
    where?: JobWhereInput
    /**
     * Limit how many Jobs to update.
     */
    limit?: number
  }

  /**
   * Job updateManyAndReturn
   */
  export type JobUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * The data used to update Jobs.
     */
    data: XOR<JobUpdateManyMutationInput, JobUncheckedUpdateManyInput>
    /**
     * Filter which Jobs to update
     */
    where?: JobWhereInput
    /**
     * Limit how many Jobs to update.
     */
    limit?: number
  }

  /**
   * Job upsert
   */
  export type JobUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * The filter to search for the Job to update in case it exists.
     */
    where: JobWhereUniqueInput
    /**
     * In case the Job found by the `where` argument doesn't exist, create a new Job with this data.
     */
    create: XOR<JobCreateInput, JobUncheckedCreateInput>
    /**
     * In case the Job was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JobUpdateInput, JobUncheckedUpdateInput>
  }

  /**
   * Job delete
   */
  export type JobDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Filter which Job to delete.
     */
    where: JobWhereUniqueInput
  }

  /**
   * Job deleteMany
   */
  export type JobDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Jobs to delete
     */
    where?: JobWhereInput
    /**
     * Limit how many Jobs to delete.
     */
    limit?: number
  }

  /**
   * Job without action
   */
  export type JobDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AppConfigScalarFieldEnum: {
    Id: 'Id',
    OnAirSyncEnabled: 'OnAirSyncEnabled',
    OnAirVASyncEnabled: 'OnAirVASyncEnabled',
    OnAirVAMembersSyncEnabled: 'OnAirVAMembersSyncEnabled',
    OnAirCompanySyncEnabled: 'OnAirCompanySyncEnabled',
    DiscordServerInviteLink: 'DiscordServerInviteLink',
    DiscordServerInviteLinkEnabled: 'DiscordServerInviteLinkEnabled',
    AcceptingNewMembers: 'AcceptingNewMembers',
    DiscordAuthEnabled: 'DiscordAuthEnabled',
    LocalAuthEnabled: 'LocalAuthEnabled',
    VirtualAirlineInitiated: 'VirtualAirlineInitiated',
    CreatedAt: 'CreatedAt',
    UpdatedAt: 'UpdatedAt'
  };

  export type AppConfigScalarFieldEnum = (typeof AppConfigScalarFieldEnum)[keyof typeof AppConfigScalarFieldEnum]


  export const UserScalarFieldEnum: {
    Id: 'Id',
    Username: 'Username',
    Password: 'Password',
    Email: 'Email',
    FirstName: 'FirstName',
    LastName: 'LastName',
    FirstLoginCompleted: 'FirstLoginCompleted',
    IsOnline: 'IsOnline',
    IsBanned: 'IsBanned',
    BanReason: 'BanReason',
    BanExpiresAt: 'BanExpiresAt',
    IsVerified: 'IsVerified',
    LastLogin: 'LastLogin',
    CreatedAt: 'CreatedAt',
    UpdatedAt: 'UpdatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const UserPrivacySettingsScalarFieldEnum: {
    Id: 'Id',
    UserId: 'UserId',
    ShowOnlineStatus: 'ShowOnlineStatus',
    ShowFirstName: 'ShowFirstName',
    ShowLastName: 'ShowLastName',
    ShowLastNameInitial: 'ShowLastNameInitial',
    ShowLastLogin: 'ShowLastLogin',
    CreatedAt: 'CreatedAt'
  };

  export type UserPrivacySettingsScalarFieldEnum = (typeof UserPrivacySettingsScalarFieldEnum)[keyof typeof UserPrivacySettingsScalarFieldEnum]


  export const RoleScalarFieldEnum: {
    Id: 'Id',
    Name: 'Name',
    Description: 'Description',
    Slug: 'Slug',
    CreatedAt: 'CreatedAt',
    UpdatedAt: 'UpdatedAt'
  };

  export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum]


  export const PermissionScalarFieldEnum: {
    Id: 'Id',
    Name: 'Name',
    Description: 'Description',
    Slug: 'Slug',
    Entity: 'Entity',
    Action: 'Action'
  };

  export type PermissionScalarFieldEnum = (typeof PermissionScalarFieldEnum)[keyof typeof PermissionScalarFieldEnum]


  export const LiveryScalarFieldEnum: {
    Id: 'Id',
    Name: 'Name',
    IsActive: 'IsActive',
    DownloadCount: 'DownloadCount',
    Image: 'Image',
    Url: 'Url',
    Description: 'Description',
    DownloadUrl: 'DownloadUrl',
    CreatedAt: 'CreatedAt',
    UpdatedAt: 'UpdatedAt'
  };

  export type LiveryScalarFieldEnum = (typeof LiveryScalarFieldEnum)[keyof typeof LiveryScalarFieldEnum]


  export const VirtualAirlineScalarFieldEnum: {
    Id: 'Id',
    ApiKey: 'ApiKey',
    IsPrimary: 'IsPrimary',
    Identifier: 'Identifier',
    Name: 'Name',
    Description: 'Description',
    WorldId: 'WorldId',
    LastDividendsDistribution: 'LastDividendsDistribution',
    LastComputationDate: 'LastComputationDate',
    ComputedMemberCount: 'ComputedMemberCount',
    ComputedAircraftsCount: 'ComputedAircraftsCount',
    ComputedNumberOfFlights30Days: 'ComputedNumberOfFlights30Days',
    ComputedNumberOfFlightHours30Days: 'ComputedNumberOfFlightHours30Days',
    ComputedMostUsedAirports: 'ComputedMostUsedAirports',
    LastConnection: 'LastConnection',
    LastReportDate: 'LastReportDate',
    Reputation: 'Reputation',
    CreationDate: 'CreationDate',
    DifficultyLevel: 'DifficultyLevel',
    Level: 'Level',
    LevelXP: 'LevelXP',
    TotalContractsCompleted: 'TotalContractsCompleted',
    TotalContractsEarnedCredits: 'TotalContractsEarnedCredits',
    LastRefresh: 'LastRefresh',
    CreatedAt: 'CreatedAt',
    UpdatedAt: 'UpdatedAt'
  };

  export type VirtualAirlineScalarFieldEnum = (typeof VirtualAirlineScalarFieldEnum)[keyof typeof VirtualAirlineScalarFieldEnum]


  export const VirtualAirlineRoleScalarFieldEnum: {
    Id: 'Id',
    VAId: 'VAId',
    Name: 'Name',
    Permission: 'Permission',
    IsDefaultNewRole: 'IsDefaultNewRole',
    Color: 'Color',
    PayPercent: 'PayPercent',
    IsHidden: 'IsHidden',
    RestrictLoadingVAJobsIntoNonVAAircraft: 'RestrictLoadingVAJobsIntoNonVAAircraft',
    RestrictLoadingNonVAJobsIntoVAAircraft: 'RestrictLoadingNonVAJobsIntoVAAircraft',
    PayWeekly: 'PayWeekly',
    PayPerFlightHour: 'PayPerFlightHour',
    LastRefresh: 'LastRefresh',
    CreatedAt: 'CreatedAt',
    UpdatedAt: 'UpdatedAt'
  };

  export type VirtualAirlineRoleScalarFieldEnum = (typeof VirtualAirlineRoleScalarFieldEnum)[keyof typeof VirtualAirlineRoleScalarFieldEnum]


  export const WorldScalarFieldEnum: {
    Id: 'Id',
    Name: 'Name',
    Slug: 'Slug',
    Description: 'Description',
    CreatedAt: 'CreatedAt',
    UpdatedAt: 'UpdatedAt'
  };

  export type WorldScalarFieldEnum = (typeof WorldScalarFieldEnum)[keyof typeof WorldScalarFieldEnum]


  export const MemberScalarFieldEnum: {
    Id: 'Id',
    VAId: 'VAId',
    CompanyId: 'CompanyId',
    CompanyName: 'CompanyName',
    AirlineCode: 'AirlineCode',
    LastConnection: 'LastConnection',
    Reputation: 'Reputation',
    CompanyCreationDate: 'CompanyCreationDate',
    CompanyLevel: 'CompanyLevel',
    CompanyLevelXP: 'CompanyLevelXP',
    VARoleId: 'VARoleId',
    TotalCargosTransportedLbs: 'TotalCargosTransportedLbs',
    TotalPAXsTransported: 'TotalPAXsTransported',
    TotalEarnedCredits: 'TotalEarnedCredits',
    TotalSpentCredits: 'TotalSpentCredits',
    NumberOfFlights: 'NumberOfFlights',
    FlightHours: 'FlightHours',
    Color: 'Color',
    ReputationImpact: 'ReputationImpact',
    LastVAFlightDate: 'LastVAFlightDate',
    LastRefresh: 'LastRefresh',
    CreatedAt: 'CreatedAt',
    UpdatedAt: 'UpdatedAt'
  };

  export type MemberScalarFieldEnum = (typeof MemberScalarFieldEnum)[keyof typeof MemberScalarFieldEnum]


  export const JobScalarFieldEnum: {
    Id: 'Id',
    IsEnabled: 'IsEnabled',
    FirstRunCompleted: 'FirstRunCompleted',
    Type: 'Type',
    Status: 'Status',
    CronExpression: 'CronExpression',
    Name: 'Name',
    Description: 'Description',
    Parameters: 'Parameters',
    LastRunAt: 'LastRunAt',
    NextRunAt: 'NextRunAt',
    LastError: 'LastError',
    ExecutionCount: 'ExecutionCount',
    CreatedAt: 'CreatedAt',
    UpdatedAt: 'UpdatedAt'
  };

  export type JobScalarFieldEnum = (typeof JobScalarFieldEnum)[keyof typeof JobScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'JobType'
   */
  export type EnumJobTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'JobType'>
    


  /**
   * Reference to a field of type 'JobType[]'
   */
  export type ListEnumJobTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'JobType[]'>
    


  /**
   * Reference to a field of type 'JobStatus'
   */
  export type EnumJobStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'JobStatus'>
    


  /**
   * Reference to a field of type 'JobStatus[]'
   */
  export type ListEnumJobStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'JobStatus[]'>
    


  /**
   * Reference to a field of type 'CronExpression'
   */
  export type EnumCronExpressionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CronExpression'>
    


  /**
   * Reference to a field of type 'CronExpression[]'
   */
  export type ListEnumCronExpressionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CronExpression[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type AppConfigWhereInput = {
    AND?: AppConfigWhereInput | AppConfigWhereInput[]
    OR?: AppConfigWhereInput[]
    NOT?: AppConfigWhereInput | AppConfigWhereInput[]
    Id?: IntFilter<"AppConfig"> | number
    OnAirSyncEnabled?: BoolFilter<"AppConfig"> | boolean
    OnAirVASyncEnabled?: BoolFilter<"AppConfig"> | boolean
    OnAirVAMembersSyncEnabled?: BoolFilter<"AppConfig"> | boolean
    OnAirCompanySyncEnabled?: BoolFilter<"AppConfig"> | boolean
    DiscordServerInviteLink?: StringNullableFilter<"AppConfig"> | string | null
    DiscordServerInviteLinkEnabled?: BoolFilter<"AppConfig"> | boolean
    AcceptingNewMembers?: BoolFilter<"AppConfig"> | boolean
    DiscordAuthEnabled?: BoolFilter<"AppConfig"> | boolean
    LocalAuthEnabled?: BoolFilter<"AppConfig"> | boolean
    VirtualAirlineInitiated?: BoolFilter<"AppConfig"> | boolean
    CreatedAt?: DateTimeFilter<"AppConfig"> | Date | string
    UpdatedAt?: DateTimeFilter<"AppConfig"> | Date | string
  }

  export type AppConfigOrderByWithRelationInput = {
    Id?: SortOrder
    OnAirSyncEnabled?: SortOrder
    OnAirVASyncEnabled?: SortOrder
    OnAirVAMembersSyncEnabled?: SortOrder
    OnAirCompanySyncEnabled?: SortOrder
    DiscordServerInviteLink?: SortOrderInput | SortOrder
    DiscordServerInviteLinkEnabled?: SortOrder
    AcceptingNewMembers?: SortOrder
    DiscordAuthEnabled?: SortOrder
    LocalAuthEnabled?: SortOrder
    VirtualAirlineInitiated?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
  }

  export type AppConfigWhereUniqueInput = Prisma.AtLeast<{
    Id?: number
    AND?: AppConfigWhereInput | AppConfigWhereInput[]
    OR?: AppConfigWhereInput[]
    NOT?: AppConfigWhereInput | AppConfigWhereInput[]
    OnAirSyncEnabled?: BoolFilter<"AppConfig"> | boolean
    OnAirVASyncEnabled?: BoolFilter<"AppConfig"> | boolean
    OnAirVAMembersSyncEnabled?: BoolFilter<"AppConfig"> | boolean
    OnAirCompanySyncEnabled?: BoolFilter<"AppConfig"> | boolean
    DiscordServerInviteLink?: StringNullableFilter<"AppConfig"> | string | null
    DiscordServerInviteLinkEnabled?: BoolFilter<"AppConfig"> | boolean
    AcceptingNewMembers?: BoolFilter<"AppConfig"> | boolean
    DiscordAuthEnabled?: BoolFilter<"AppConfig"> | boolean
    LocalAuthEnabled?: BoolFilter<"AppConfig"> | boolean
    VirtualAirlineInitiated?: BoolFilter<"AppConfig"> | boolean
    CreatedAt?: DateTimeFilter<"AppConfig"> | Date | string
    UpdatedAt?: DateTimeFilter<"AppConfig"> | Date | string
  }, "Id">

  export type AppConfigOrderByWithAggregationInput = {
    Id?: SortOrder
    OnAirSyncEnabled?: SortOrder
    OnAirVASyncEnabled?: SortOrder
    OnAirVAMembersSyncEnabled?: SortOrder
    OnAirCompanySyncEnabled?: SortOrder
    DiscordServerInviteLink?: SortOrderInput | SortOrder
    DiscordServerInviteLinkEnabled?: SortOrder
    AcceptingNewMembers?: SortOrder
    DiscordAuthEnabled?: SortOrder
    LocalAuthEnabled?: SortOrder
    VirtualAirlineInitiated?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
    _count?: AppConfigCountOrderByAggregateInput
    _avg?: AppConfigAvgOrderByAggregateInput
    _max?: AppConfigMaxOrderByAggregateInput
    _min?: AppConfigMinOrderByAggregateInput
    _sum?: AppConfigSumOrderByAggregateInput
  }

  export type AppConfigScalarWhereWithAggregatesInput = {
    AND?: AppConfigScalarWhereWithAggregatesInput | AppConfigScalarWhereWithAggregatesInput[]
    OR?: AppConfigScalarWhereWithAggregatesInput[]
    NOT?: AppConfigScalarWhereWithAggregatesInput | AppConfigScalarWhereWithAggregatesInput[]
    Id?: IntWithAggregatesFilter<"AppConfig"> | number
    OnAirSyncEnabled?: BoolWithAggregatesFilter<"AppConfig"> | boolean
    OnAirVASyncEnabled?: BoolWithAggregatesFilter<"AppConfig"> | boolean
    OnAirVAMembersSyncEnabled?: BoolWithAggregatesFilter<"AppConfig"> | boolean
    OnAirCompanySyncEnabled?: BoolWithAggregatesFilter<"AppConfig"> | boolean
    DiscordServerInviteLink?: StringNullableWithAggregatesFilter<"AppConfig"> | string | null
    DiscordServerInviteLinkEnabled?: BoolWithAggregatesFilter<"AppConfig"> | boolean
    AcceptingNewMembers?: BoolWithAggregatesFilter<"AppConfig"> | boolean
    DiscordAuthEnabled?: BoolWithAggregatesFilter<"AppConfig"> | boolean
    LocalAuthEnabled?: BoolWithAggregatesFilter<"AppConfig"> | boolean
    VirtualAirlineInitiated?: BoolWithAggregatesFilter<"AppConfig"> | boolean
    CreatedAt?: DateTimeWithAggregatesFilter<"AppConfig"> | Date | string
    UpdatedAt?: DateTimeWithAggregatesFilter<"AppConfig"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    Id?: UuidFilter<"User"> | string
    Username?: StringFilter<"User"> | string
    Password?: StringFilter<"User"> | string
    Email?: StringNullableFilter<"User"> | string | null
    FirstName?: StringNullableFilter<"User"> | string | null
    LastName?: StringNullableFilter<"User"> | string | null
    FirstLoginCompleted?: BoolFilter<"User"> | boolean
    IsOnline?: BoolFilter<"User"> | boolean
    IsBanned?: BoolFilter<"User"> | boolean
    BanReason?: StringNullableFilter<"User"> | string | null
    BanExpiresAt?: DateTimeNullableFilter<"User"> | Date | string | null
    IsVerified?: BoolFilter<"User"> | boolean
    LastLogin?: DateTimeNullableFilter<"User"> | Date | string | null
    CreatedAt?: DateTimeFilter<"User"> | Date | string
    UpdatedAt?: DateTimeFilter<"User"> | Date | string
    Roles?: RoleListRelationFilter
    PrivacySettings?: XOR<UserPrivacySettingsNullableScalarRelationFilter, UserPrivacySettingsWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    Id?: SortOrder
    Username?: SortOrder
    Password?: SortOrder
    Email?: SortOrderInput | SortOrder
    FirstName?: SortOrderInput | SortOrder
    LastName?: SortOrderInput | SortOrder
    FirstLoginCompleted?: SortOrder
    IsOnline?: SortOrder
    IsBanned?: SortOrder
    BanReason?: SortOrderInput | SortOrder
    BanExpiresAt?: SortOrderInput | SortOrder
    IsVerified?: SortOrder
    LastLogin?: SortOrderInput | SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
    Roles?: RoleOrderByRelationAggregateInput
    PrivacySettings?: UserPrivacySettingsOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    Id?: string
    Username?: string
    Email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    Password?: StringFilter<"User"> | string
    FirstName?: StringNullableFilter<"User"> | string | null
    LastName?: StringNullableFilter<"User"> | string | null
    FirstLoginCompleted?: BoolFilter<"User"> | boolean
    IsOnline?: BoolFilter<"User"> | boolean
    IsBanned?: BoolFilter<"User"> | boolean
    BanReason?: StringNullableFilter<"User"> | string | null
    BanExpiresAt?: DateTimeNullableFilter<"User"> | Date | string | null
    IsVerified?: BoolFilter<"User"> | boolean
    LastLogin?: DateTimeNullableFilter<"User"> | Date | string | null
    CreatedAt?: DateTimeFilter<"User"> | Date | string
    UpdatedAt?: DateTimeFilter<"User"> | Date | string
    Roles?: RoleListRelationFilter
    PrivacySettings?: XOR<UserPrivacySettingsNullableScalarRelationFilter, UserPrivacySettingsWhereInput> | null
  }, "Id" | "Id" | "Username" | "Email">

  export type UserOrderByWithAggregationInput = {
    Id?: SortOrder
    Username?: SortOrder
    Password?: SortOrder
    Email?: SortOrderInput | SortOrder
    FirstName?: SortOrderInput | SortOrder
    LastName?: SortOrderInput | SortOrder
    FirstLoginCompleted?: SortOrder
    IsOnline?: SortOrder
    IsBanned?: SortOrder
    BanReason?: SortOrderInput | SortOrder
    BanExpiresAt?: SortOrderInput | SortOrder
    IsVerified?: SortOrder
    LastLogin?: SortOrderInput | SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    Id?: UuidWithAggregatesFilter<"User"> | string
    Username?: StringWithAggregatesFilter<"User"> | string
    Password?: StringWithAggregatesFilter<"User"> | string
    Email?: StringNullableWithAggregatesFilter<"User"> | string | null
    FirstName?: StringNullableWithAggregatesFilter<"User"> | string | null
    LastName?: StringNullableWithAggregatesFilter<"User"> | string | null
    FirstLoginCompleted?: BoolWithAggregatesFilter<"User"> | boolean
    IsOnline?: BoolWithAggregatesFilter<"User"> | boolean
    IsBanned?: BoolWithAggregatesFilter<"User"> | boolean
    BanReason?: StringNullableWithAggregatesFilter<"User"> | string | null
    BanExpiresAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    IsVerified?: BoolWithAggregatesFilter<"User"> | boolean
    LastLogin?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    CreatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    UpdatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type UserPrivacySettingsWhereInput = {
    AND?: UserPrivacySettingsWhereInput | UserPrivacySettingsWhereInput[]
    OR?: UserPrivacySettingsWhereInput[]
    NOT?: UserPrivacySettingsWhereInput | UserPrivacySettingsWhereInput[]
    Id?: UuidFilter<"UserPrivacySettings"> | string
    UserId?: UuidFilter<"UserPrivacySettings"> | string
    ShowOnlineStatus?: BoolFilter<"UserPrivacySettings"> | boolean
    ShowFirstName?: BoolFilter<"UserPrivacySettings"> | boolean
    ShowLastName?: BoolFilter<"UserPrivacySettings"> | boolean
    ShowLastNameInitial?: BoolFilter<"UserPrivacySettings"> | boolean
    ShowLastLogin?: DateTimeNullableFilter<"UserPrivacySettings"> | Date | string | null
    CreatedAt?: DateTimeFilter<"UserPrivacySettings"> | Date | string
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserPrivacySettingsOrderByWithRelationInput = {
    Id?: SortOrder
    UserId?: SortOrder
    ShowOnlineStatus?: SortOrder
    ShowFirstName?: SortOrder
    ShowLastName?: SortOrder
    ShowLastNameInitial?: SortOrder
    ShowLastLogin?: SortOrderInput | SortOrder
    CreatedAt?: SortOrder
    User?: UserOrderByWithRelationInput
  }

  export type UserPrivacySettingsWhereUniqueInput = Prisma.AtLeast<{
    Id?: string
    UserId?: string
    AND?: UserPrivacySettingsWhereInput | UserPrivacySettingsWhereInput[]
    OR?: UserPrivacySettingsWhereInput[]
    NOT?: UserPrivacySettingsWhereInput | UserPrivacySettingsWhereInput[]
    ShowOnlineStatus?: BoolFilter<"UserPrivacySettings"> | boolean
    ShowFirstName?: BoolFilter<"UserPrivacySettings"> | boolean
    ShowLastName?: BoolFilter<"UserPrivacySettings"> | boolean
    ShowLastNameInitial?: BoolFilter<"UserPrivacySettings"> | boolean
    ShowLastLogin?: DateTimeNullableFilter<"UserPrivacySettings"> | Date | string | null
    CreatedAt?: DateTimeFilter<"UserPrivacySettings"> | Date | string
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "Id" | "Id" | "UserId">

  export type UserPrivacySettingsOrderByWithAggregationInput = {
    Id?: SortOrder
    UserId?: SortOrder
    ShowOnlineStatus?: SortOrder
    ShowFirstName?: SortOrder
    ShowLastName?: SortOrder
    ShowLastNameInitial?: SortOrder
    ShowLastLogin?: SortOrderInput | SortOrder
    CreatedAt?: SortOrder
    _count?: UserPrivacySettingsCountOrderByAggregateInput
    _max?: UserPrivacySettingsMaxOrderByAggregateInput
    _min?: UserPrivacySettingsMinOrderByAggregateInput
  }

  export type UserPrivacySettingsScalarWhereWithAggregatesInput = {
    AND?: UserPrivacySettingsScalarWhereWithAggregatesInput | UserPrivacySettingsScalarWhereWithAggregatesInput[]
    OR?: UserPrivacySettingsScalarWhereWithAggregatesInput[]
    NOT?: UserPrivacySettingsScalarWhereWithAggregatesInput | UserPrivacySettingsScalarWhereWithAggregatesInput[]
    Id?: UuidWithAggregatesFilter<"UserPrivacySettings"> | string
    UserId?: UuidWithAggregatesFilter<"UserPrivacySettings"> | string
    ShowOnlineStatus?: BoolWithAggregatesFilter<"UserPrivacySettings"> | boolean
    ShowFirstName?: BoolWithAggregatesFilter<"UserPrivacySettings"> | boolean
    ShowLastName?: BoolWithAggregatesFilter<"UserPrivacySettings"> | boolean
    ShowLastNameInitial?: BoolWithAggregatesFilter<"UserPrivacySettings"> | boolean
    ShowLastLogin?: DateTimeNullableWithAggregatesFilter<"UserPrivacySettings"> | Date | string | null
    CreatedAt?: DateTimeWithAggregatesFilter<"UserPrivacySettings"> | Date | string
  }

  export type RoleWhereInput = {
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    Id?: IntFilter<"Role"> | number
    Name?: StringFilter<"Role"> | string
    Description?: StringNullableFilter<"Role"> | string | null
    Slug?: StringFilter<"Role"> | string
    CreatedAt?: DateTimeFilter<"Role"> | Date | string
    UpdatedAt?: DateTimeFilter<"Role"> | Date | string
    Permissions?: PermissionListRelationFilter
    Users?: UserListRelationFilter
  }

  export type RoleOrderByWithRelationInput = {
    Id?: SortOrder
    Name?: SortOrder
    Description?: SortOrderInput | SortOrder
    Slug?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
    Permissions?: PermissionOrderByRelationAggregateInput
    Users?: UserOrderByRelationAggregateInput
  }

  export type RoleWhereUniqueInput = Prisma.AtLeast<{
    Id?: number
    Slug?: string
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    Name?: StringFilter<"Role"> | string
    Description?: StringNullableFilter<"Role"> | string | null
    CreatedAt?: DateTimeFilter<"Role"> | Date | string
    UpdatedAt?: DateTimeFilter<"Role"> | Date | string
    Permissions?: PermissionListRelationFilter
    Users?: UserListRelationFilter
  }, "Id" | "Slug">

  export type RoleOrderByWithAggregationInput = {
    Id?: SortOrder
    Name?: SortOrder
    Description?: SortOrderInput | SortOrder
    Slug?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
    _count?: RoleCountOrderByAggregateInput
    _avg?: RoleAvgOrderByAggregateInput
    _max?: RoleMaxOrderByAggregateInput
    _min?: RoleMinOrderByAggregateInput
    _sum?: RoleSumOrderByAggregateInput
  }

  export type RoleScalarWhereWithAggregatesInput = {
    AND?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    OR?: RoleScalarWhereWithAggregatesInput[]
    NOT?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    Id?: IntWithAggregatesFilter<"Role"> | number
    Name?: StringWithAggregatesFilter<"Role"> | string
    Description?: StringNullableWithAggregatesFilter<"Role"> | string | null
    Slug?: StringWithAggregatesFilter<"Role"> | string
    CreatedAt?: DateTimeWithAggregatesFilter<"Role"> | Date | string
    UpdatedAt?: DateTimeWithAggregatesFilter<"Role"> | Date | string
  }

  export type PermissionWhereInput = {
    AND?: PermissionWhereInput | PermissionWhereInput[]
    OR?: PermissionWhereInput[]
    NOT?: PermissionWhereInput | PermissionWhereInput[]
    Id?: IntFilter<"Permission"> | number
    Name?: StringFilter<"Permission"> | string
    Description?: StringNullableFilter<"Permission"> | string | null
    Slug?: StringFilter<"Permission"> | string
    Entity?: StringFilter<"Permission"> | string
    Action?: StringFilter<"Permission"> | string
    Roles?: RoleListRelationFilter
  }

  export type PermissionOrderByWithRelationInput = {
    Id?: SortOrder
    Name?: SortOrder
    Description?: SortOrderInput | SortOrder
    Slug?: SortOrder
    Entity?: SortOrder
    Action?: SortOrder
    Roles?: RoleOrderByRelationAggregateInput
  }

  export type PermissionWhereUniqueInput = Prisma.AtLeast<{
    Id?: number
    Slug?: string
    AND?: PermissionWhereInput | PermissionWhereInput[]
    OR?: PermissionWhereInput[]
    NOT?: PermissionWhereInput | PermissionWhereInput[]
    Name?: StringFilter<"Permission"> | string
    Description?: StringNullableFilter<"Permission"> | string | null
    Entity?: StringFilter<"Permission"> | string
    Action?: StringFilter<"Permission"> | string
    Roles?: RoleListRelationFilter
  }, "Id" | "Slug">

  export type PermissionOrderByWithAggregationInput = {
    Id?: SortOrder
    Name?: SortOrder
    Description?: SortOrderInput | SortOrder
    Slug?: SortOrder
    Entity?: SortOrder
    Action?: SortOrder
    _count?: PermissionCountOrderByAggregateInput
    _avg?: PermissionAvgOrderByAggregateInput
    _max?: PermissionMaxOrderByAggregateInput
    _min?: PermissionMinOrderByAggregateInput
    _sum?: PermissionSumOrderByAggregateInput
  }

  export type PermissionScalarWhereWithAggregatesInput = {
    AND?: PermissionScalarWhereWithAggregatesInput | PermissionScalarWhereWithAggregatesInput[]
    OR?: PermissionScalarWhereWithAggregatesInput[]
    NOT?: PermissionScalarWhereWithAggregatesInput | PermissionScalarWhereWithAggregatesInput[]
    Id?: IntWithAggregatesFilter<"Permission"> | number
    Name?: StringWithAggregatesFilter<"Permission"> | string
    Description?: StringNullableWithAggregatesFilter<"Permission"> | string | null
    Slug?: StringWithAggregatesFilter<"Permission"> | string
    Entity?: StringWithAggregatesFilter<"Permission"> | string
    Action?: StringWithAggregatesFilter<"Permission"> | string
  }

  export type LiveryWhereInput = {
    AND?: LiveryWhereInput | LiveryWhereInput[]
    OR?: LiveryWhereInput[]
    NOT?: LiveryWhereInput | LiveryWhereInput[]
    Id?: UuidFilter<"Livery"> | string
    Name?: StringFilter<"Livery"> | string
    IsActive?: BoolFilter<"Livery"> | boolean
    DownloadCount?: IntFilter<"Livery"> | number
    Image?: StringFilter<"Livery"> | string
    Url?: StringNullableFilter<"Livery"> | string | null
    Description?: StringNullableFilter<"Livery"> | string | null
    DownloadUrl?: StringNullableFilter<"Livery"> | string | null
    CreatedAt?: DateTimeFilter<"Livery"> | Date | string
    UpdatedAt?: DateTimeFilter<"Livery"> | Date | string
  }

  export type LiveryOrderByWithRelationInput = {
    Id?: SortOrder
    Name?: SortOrder
    IsActive?: SortOrder
    DownloadCount?: SortOrder
    Image?: SortOrder
    Url?: SortOrderInput | SortOrder
    Description?: SortOrderInput | SortOrder
    DownloadUrl?: SortOrderInput | SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
  }

  export type LiveryWhereUniqueInput = Prisma.AtLeast<{
    Id?: string
    AND?: LiveryWhereInput | LiveryWhereInput[]
    OR?: LiveryWhereInput[]
    NOT?: LiveryWhereInput | LiveryWhereInput[]
    Name?: StringFilter<"Livery"> | string
    IsActive?: BoolFilter<"Livery"> | boolean
    DownloadCount?: IntFilter<"Livery"> | number
    Image?: StringFilter<"Livery"> | string
    Url?: StringNullableFilter<"Livery"> | string | null
    Description?: StringNullableFilter<"Livery"> | string | null
    DownloadUrl?: StringNullableFilter<"Livery"> | string | null
    CreatedAt?: DateTimeFilter<"Livery"> | Date | string
    UpdatedAt?: DateTimeFilter<"Livery"> | Date | string
  }, "Id">

  export type LiveryOrderByWithAggregationInput = {
    Id?: SortOrder
    Name?: SortOrder
    IsActive?: SortOrder
    DownloadCount?: SortOrder
    Image?: SortOrder
    Url?: SortOrderInput | SortOrder
    Description?: SortOrderInput | SortOrder
    DownloadUrl?: SortOrderInput | SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
    _count?: LiveryCountOrderByAggregateInput
    _avg?: LiveryAvgOrderByAggregateInput
    _max?: LiveryMaxOrderByAggregateInput
    _min?: LiveryMinOrderByAggregateInput
    _sum?: LiverySumOrderByAggregateInput
  }

  export type LiveryScalarWhereWithAggregatesInput = {
    AND?: LiveryScalarWhereWithAggregatesInput | LiveryScalarWhereWithAggregatesInput[]
    OR?: LiveryScalarWhereWithAggregatesInput[]
    NOT?: LiveryScalarWhereWithAggregatesInput | LiveryScalarWhereWithAggregatesInput[]
    Id?: UuidWithAggregatesFilter<"Livery"> | string
    Name?: StringWithAggregatesFilter<"Livery"> | string
    IsActive?: BoolWithAggregatesFilter<"Livery"> | boolean
    DownloadCount?: IntWithAggregatesFilter<"Livery"> | number
    Image?: StringWithAggregatesFilter<"Livery"> | string
    Url?: StringNullableWithAggregatesFilter<"Livery"> | string | null
    Description?: StringNullableWithAggregatesFilter<"Livery"> | string | null
    DownloadUrl?: StringNullableWithAggregatesFilter<"Livery"> | string | null
    CreatedAt?: DateTimeWithAggregatesFilter<"Livery"> | Date | string
    UpdatedAt?: DateTimeWithAggregatesFilter<"Livery"> | Date | string
  }

  export type VirtualAirlineWhereInput = {
    AND?: VirtualAirlineWhereInput | VirtualAirlineWhereInput[]
    OR?: VirtualAirlineWhereInput[]
    NOT?: VirtualAirlineWhereInput | VirtualAirlineWhereInput[]
    Id?: UuidFilter<"VirtualAirline"> | string
    ApiKey?: UuidFilter<"VirtualAirline"> | string
    IsPrimary?: BoolFilter<"VirtualAirline"> | boolean
    Identifier?: StringNullableFilter<"VirtualAirline"> | string | null
    Name?: StringNullableFilter<"VirtualAirline"> | string | null
    Description?: StringNullableFilter<"VirtualAirline"> | string | null
    WorldId?: UuidNullableFilter<"VirtualAirline"> | string | null
    LastDividendsDistribution?: DateTimeNullableFilter<"VirtualAirline"> | Date | string | null
    LastComputationDate?: DateTimeNullableFilter<"VirtualAirline"> | Date | string | null
    ComputedMemberCount?: IntNullableFilter<"VirtualAirline"> | number | null
    ComputedAircraftsCount?: IntNullableFilter<"VirtualAirline"> | number | null
    ComputedNumberOfFlights30Days?: IntNullableFilter<"VirtualAirline"> | number | null
    ComputedNumberOfFlightHours30Days?: IntNullableFilter<"VirtualAirline"> | number | null
    ComputedMostUsedAirports?: StringNullableFilter<"VirtualAirline"> | string | null
    LastConnection?: DateTimeNullableFilter<"VirtualAirline"> | Date | string | null
    LastReportDate?: DateTimeNullableFilter<"VirtualAirline"> | Date | string | null
    Reputation?: DecimalNullableFilter<"VirtualAirline"> | Decimal | DecimalJsLike | number | string | null
    CreationDate?: DateTimeNullableFilter<"VirtualAirline"> | Date | string | null
    DifficultyLevel?: IntNullableFilter<"VirtualAirline"> | number | null
    Level?: IntNullableFilter<"VirtualAirline"> | number | null
    LevelXP?: IntNullableFilter<"VirtualAirline"> | number | null
    TotalContractsCompleted?: IntNullableFilter<"VirtualAirline"> | number | null
    TotalContractsEarnedCredits?: IntNullableFilter<"VirtualAirline"> | number | null
    LastRefresh?: DateTimeNullableFilter<"VirtualAirline"> | Date | string | null
    CreatedAt?: DateTimeFilter<"VirtualAirline"> | Date | string
    UpdatedAt?: DateTimeFilter<"VirtualAirline"> | Date | string
    World?: XOR<WorldNullableScalarRelationFilter, WorldWhereInput> | null
    VARoles?: VirtualAirlineRoleListRelationFilter
    Members?: MemberListRelationFilter
  }

  export type VirtualAirlineOrderByWithRelationInput = {
    Id?: SortOrder
    ApiKey?: SortOrder
    IsPrimary?: SortOrder
    Identifier?: SortOrderInput | SortOrder
    Name?: SortOrderInput | SortOrder
    Description?: SortOrderInput | SortOrder
    WorldId?: SortOrderInput | SortOrder
    LastDividendsDistribution?: SortOrderInput | SortOrder
    LastComputationDate?: SortOrderInput | SortOrder
    ComputedMemberCount?: SortOrderInput | SortOrder
    ComputedAircraftsCount?: SortOrderInput | SortOrder
    ComputedNumberOfFlights30Days?: SortOrderInput | SortOrder
    ComputedNumberOfFlightHours30Days?: SortOrderInput | SortOrder
    ComputedMostUsedAirports?: SortOrderInput | SortOrder
    LastConnection?: SortOrderInput | SortOrder
    LastReportDate?: SortOrderInput | SortOrder
    Reputation?: SortOrderInput | SortOrder
    CreationDate?: SortOrderInput | SortOrder
    DifficultyLevel?: SortOrderInput | SortOrder
    Level?: SortOrderInput | SortOrder
    LevelXP?: SortOrderInput | SortOrder
    TotalContractsCompleted?: SortOrderInput | SortOrder
    TotalContractsEarnedCredits?: SortOrderInput | SortOrder
    LastRefresh?: SortOrderInput | SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
    World?: WorldOrderByWithRelationInput
    VARoles?: VirtualAirlineRoleOrderByRelationAggregateInput
    Members?: MemberOrderByRelationAggregateInput
  }

  export type VirtualAirlineWhereUniqueInput = Prisma.AtLeast<{
    Id?: string
    ApiKey?: string
    Identifier?: string
    AND?: VirtualAirlineWhereInput | VirtualAirlineWhereInput[]
    OR?: VirtualAirlineWhereInput[]
    NOT?: VirtualAirlineWhereInput | VirtualAirlineWhereInput[]
    IsPrimary?: BoolFilter<"VirtualAirline"> | boolean
    Name?: StringNullableFilter<"VirtualAirline"> | string | null
    Description?: StringNullableFilter<"VirtualAirline"> | string | null
    WorldId?: UuidNullableFilter<"VirtualAirline"> | string | null
    LastDividendsDistribution?: DateTimeNullableFilter<"VirtualAirline"> | Date | string | null
    LastComputationDate?: DateTimeNullableFilter<"VirtualAirline"> | Date | string | null
    ComputedMemberCount?: IntNullableFilter<"VirtualAirline"> | number | null
    ComputedAircraftsCount?: IntNullableFilter<"VirtualAirline"> | number | null
    ComputedNumberOfFlights30Days?: IntNullableFilter<"VirtualAirline"> | number | null
    ComputedNumberOfFlightHours30Days?: IntNullableFilter<"VirtualAirline"> | number | null
    ComputedMostUsedAirports?: StringNullableFilter<"VirtualAirline"> | string | null
    LastConnection?: DateTimeNullableFilter<"VirtualAirline"> | Date | string | null
    LastReportDate?: DateTimeNullableFilter<"VirtualAirline"> | Date | string | null
    Reputation?: DecimalNullableFilter<"VirtualAirline"> | Decimal | DecimalJsLike | number | string | null
    CreationDate?: DateTimeNullableFilter<"VirtualAirline"> | Date | string | null
    DifficultyLevel?: IntNullableFilter<"VirtualAirline"> | number | null
    Level?: IntNullableFilter<"VirtualAirline"> | number | null
    LevelXP?: IntNullableFilter<"VirtualAirline"> | number | null
    TotalContractsCompleted?: IntNullableFilter<"VirtualAirline"> | number | null
    TotalContractsEarnedCredits?: IntNullableFilter<"VirtualAirline"> | number | null
    LastRefresh?: DateTimeNullableFilter<"VirtualAirline"> | Date | string | null
    CreatedAt?: DateTimeFilter<"VirtualAirline"> | Date | string
    UpdatedAt?: DateTimeFilter<"VirtualAirline"> | Date | string
    World?: XOR<WorldNullableScalarRelationFilter, WorldWhereInput> | null
    VARoles?: VirtualAirlineRoleListRelationFilter
    Members?: MemberListRelationFilter
  }, "Id" | "ApiKey" | "Identifier">

  export type VirtualAirlineOrderByWithAggregationInput = {
    Id?: SortOrder
    ApiKey?: SortOrder
    IsPrimary?: SortOrder
    Identifier?: SortOrderInput | SortOrder
    Name?: SortOrderInput | SortOrder
    Description?: SortOrderInput | SortOrder
    WorldId?: SortOrderInput | SortOrder
    LastDividendsDistribution?: SortOrderInput | SortOrder
    LastComputationDate?: SortOrderInput | SortOrder
    ComputedMemberCount?: SortOrderInput | SortOrder
    ComputedAircraftsCount?: SortOrderInput | SortOrder
    ComputedNumberOfFlights30Days?: SortOrderInput | SortOrder
    ComputedNumberOfFlightHours30Days?: SortOrderInput | SortOrder
    ComputedMostUsedAirports?: SortOrderInput | SortOrder
    LastConnection?: SortOrderInput | SortOrder
    LastReportDate?: SortOrderInput | SortOrder
    Reputation?: SortOrderInput | SortOrder
    CreationDate?: SortOrderInput | SortOrder
    DifficultyLevel?: SortOrderInput | SortOrder
    Level?: SortOrderInput | SortOrder
    LevelXP?: SortOrderInput | SortOrder
    TotalContractsCompleted?: SortOrderInput | SortOrder
    TotalContractsEarnedCredits?: SortOrderInput | SortOrder
    LastRefresh?: SortOrderInput | SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
    _count?: VirtualAirlineCountOrderByAggregateInput
    _avg?: VirtualAirlineAvgOrderByAggregateInput
    _max?: VirtualAirlineMaxOrderByAggregateInput
    _min?: VirtualAirlineMinOrderByAggregateInput
    _sum?: VirtualAirlineSumOrderByAggregateInput
  }

  export type VirtualAirlineScalarWhereWithAggregatesInput = {
    AND?: VirtualAirlineScalarWhereWithAggregatesInput | VirtualAirlineScalarWhereWithAggregatesInput[]
    OR?: VirtualAirlineScalarWhereWithAggregatesInput[]
    NOT?: VirtualAirlineScalarWhereWithAggregatesInput | VirtualAirlineScalarWhereWithAggregatesInput[]
    Id?: UuidWithAggregatesFilter<"VirtualAirline"> | string
    ApiKey?: UuidWithAggregatesFilter<"VirtualAirline"> | string
    IsPrimary?: BoolWithAggregatesFilter<"VirtualAirline"> | boolean
    Identifier?: StringNullableWithAggregatesFilter<"VirtualAirline"> | string | null
    Name?: StringNullableWithAggregatesFilter<"VirtualAirline"> | string | null
    Description?: StringNullableWithAggregatesFilter<"VirtualAirline"> | string | null
    WorldId?: UuidNullableWithAggregatesFilter<"VirtualAirline"> | string | null
    LastDividendsDistribution?: DateTimeNullableWithAggregatesFilter<"VirtualAirline"> | Date | string | null
    LastComputationDate?: DateTimeNullableWithAggregatesFilter<"VirtualAirline"> | Date | string | null
    ComputedMemberCount?: IntNullableWithAggregatesFilter<"VirtualAirline"> | number | null
    ComputedAircraftsCount?: IntNullableWithAggregatesFilter<"VirtualAirline"> | number | null
    ComputedNumberOfFlights30Days?: IntNullableWithAggregatesFilter<"VirtualAirline"> | number | null
    ComputedNumberOfFlightHours30Days?: IntNullableWithAggregatesFilter<"VirtualAirline"> | number | null
    ComputedMostUsedAirports?: StringNullableWithAggregatesFilter<"VirtualAirline"> | string | null
    LastConnection?: DateTimeNullableWithAggregatesFilter<"VirtualAirline"> | Date | string | null
    LastReportDate?: DateTimeNullableWithAggregatesFilter<"VirtualAirline"> | Date | string | null
    Reputation?: DecimalNullableWithAggregatesFilter<"VirtualAirline"> | Decimal | DecimalJsLike | number | string | null
    CreationDate?: DateTimeNullableWithAggregatesFilter<"VirtualAirline"> | Date | string | null
    DifficultyLevel?: IntNullableWithAggregatesFilter<"VirtualAirline"> | number | null
    Level?: IntNullableWithAggregatesFilter<"VirtualAirline"> | number | null
    LevelXP?: IntNullableWithAggregatesFilter<"VirtualAirline"> | number | null
    TotalContractsCompleted?: IntNullableWithAggregatesFilter<"VirtualAirline"> | number | null
    TotalContractsEarnedCredits?: IntNullableWithAggregatesFilter<"VirtualAirline"> | number | null
    LastRefresh?: DateTimeNullableWithAggregatesFilter<"VirtualAirline"> | Date | string | null
    CreatedAt?: DateTimeWithAggregatesFilter<"VirtualAirline"> | Date | string
    UpdatedAt?: DateTimeWithAggregatesFilter<"VirtualAirline"> | Date | string
  }

  export type VirtualAirlineRoleWhereInput = {
    AND?: VirtualAirlineRoleWhereInput | VirtualAirlineRoleWhereInput[]
    OR?: VirtualAirlineRoleWhereInput[]
    NOT?: VirtualAirlineRoleWhereInput | VirtualAirlineRoleWhereInput[]
    Id?: UuidFilter<"VirtualAirlineRole"> | string
    VAId?: UuidFilter<"VirtualAirlineRole"> | string
    Name?: StringFilter<"VirtualAirlineRole"> | string
    Permission?: IntFilter<"VirtualAirlineRole"> | number
    IsDefaultNewRole?: BoolFilter<"VirtualAirlineRole"> | boolean
    Color?: StringFilter<"VirtualAirlineRole"> | string
    PayPercent?: DecimalFilter<"VirtualAirlineRole"> | Decimal | DecimalJsLike | number | string
    IsHidden?: BoolFilter<"VirtualAirlineRole"> | boolean
    RestrictLoadingVAJobsIntoNonVAAircraft?: BoolFilter<"VirtualAirlineRole"> | boolean
    RestrictLoadingNonVAJobsIntoVAAircraft?: BoolFilter<"VirtualAirlineRole"> | boolean
    PayWeekly?: DecimalFilter<"VirtualAirlineRole"> | Decimal | DecimalJsLike | number | string
    PayPerFlightHour?: DecimalFilter<"VirtualAirlineRole"> | Decimal | DecimalJsLike | number | string
    LastRefresh?: DateTimeNullableFilter<"VirtualAirlineRole"> | Date | string | null
    CreatedAt?: DateTimeFilter<"VirtualAirlineRole"> | Date | string
    UpdatedAt?: DateTimeFilter<"VirtualAirlineRole"> | Date | string
    VirtualAirline?: XOR<VirtualAirlineScalarRelationFilter, VirtualAirlineWhereInput>
    Members?: MemberListRelationFilter
  }

  export type VirtualAirlineRoleOrderByWithRelationInput = {
    Id?: SortOrder
    VAId?: SortOrder
    Name?: SortOrder
    Permission?: SortOrder
    IsDefaultNewRole?: SortOrder
    Color?: SortOrder
    PayPercent?: SortOrder
    IsHidden?: SortOrder
    RestrictLoadingVAJobsIntoNonVAAircraft?: SortOrder
    RestrictLoadingNonVAJobsIntoVAAircraft?: SortOrder
    PayWeekly?: SortOrder
    PayPerFlightHour?: SortOrder
    LastRefresh?: SortOrderInput | SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
    VirtualAirline?: VirtualAirlineOrderByWithRelationInput
    Members?: MemberOrderByRelationAggregateInput
  }

  export type VirtualAirlineRoleWhereUniqueInput = Prisma.AtLeast<{
    Id?: string
    AND?: VirtualAirlineRoleWhereInput | VirtualAirlineRoleWhereInput[]
    OR?: VirtualAirlineRoleWhereInput[]
    NOT?: VirtualAirlineRoleWhereInput | VirtualAirlineRoleWhereInput[]
    VAId?: UuidFilter<"VirtualAirlineRole"> | string
    Name?: StringFilter<"VirtualAirlineRole"> | string
    Permission?: IntFilter<"VirtualAirlineRole"> | number
    IsDefaultNewRole?: BoolFilter<"VirtualAirlineRole"> | boolean
    Color?: StringFilter<"VirtualAirlineRole"> | string
    PayPercent?: DecimalFilter<"VirtualAirlineRole"> | Decimal | DecimalJsLike | number | string
    IsHidden?: BoolFilter<"VirtualAirlineRole"> | boolean
    RestrictLoadingVAJobsIntoNonVAAircraft?: BoolFilter<"VirtualAirlineRole"> | boolean
    RestrictLoadingNonVAJobsIntoVAAircraft?: BoolFilter<"VirtualAirlineRole"> | boolean
    PayWeekly?: DecimalFilter<"VirtualAirlineRole"> | Decimal | DecimalJsLike | number | string
    PayPerFlightHour?: DecimalFilter<"VirtualAirlineRole"> | Decimal | DecimalJsLike | number | string
    LastRefresh?: DateTimeNullableFilter<"VirtualAirlineRole"> | Date | string | null
    CreatedAt?: DateTimeFilter<"VirtualAirlineRole"> | Date | string
    UpdatedAt?: DateTimeFilter<"VirtualAirlineRole"> | Date | string
    VirtualAirline?: XOR<VirtualAirlineScalarRelationFilter, VirtualAirlineWhereInput>
    Members?: MemberListRelationFilter
  }, "Id">

  export type VirtualAirlineRoleOrderByWithAggregationInput = {
    Id?: SortOrder
    VAId?: SortOrder
    Name?: SortOrder
    Permission?: SortOrder
    IsDefaultNewRole?: SortOrder
    Color?: SortOrder
    PayPercent?: SortOrder
    IsHidden?: SortOrder
    RestrictLoadingVAJobsIntoNonVAAircraft?: SortOrder
    RestrictLoadingNonVAJobsIntoVAAircraft?: SortOrder
    PayWeekly?: SortOrder
    PayPerFlightHour?: SortOrder
    LastRefresh?: SortOrderInput | SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
    _count?: VirtualAirlineRoleCountOrderByAggregateInput
    _avg?: VirtualAirlineRoleAvgOrderByAggregateInput
    _max?: VirtualAirlineRoleMaxOrderByAggregateInput
    _min?: VirtualAirlineRoleMinOrderByAggregateInput
    _sum?: VirtualAirlineRoleSumOrderByAggregateInput
  }

  export type VirtualAirlineRoleScalarWhereWithAggregatesInput = {
    AND?: VirtualAirlineRoleScalarWhereWithAggregatesInput | VirtualAirlineRoleScalarWhereWithAggregatesInput[]
    OR?: VirtualAirlineRoleScalarWhereWithAggregatesInput[]
    NOT?: VirtualAirlineRoleScalarWhereWithAggregatesInput | VirtualAirlineRoleScalarWhereWithAggregatesInput[]
    Id?: UuidWithAggregatesFilter<"VirtualAirlineRole"> | string
    VAId?: UuidWithAggregatesFilter<"VirtualAirlineRole"> | string
    Name?: StringWithAggregatesFilter<"VirtualAirlineRole"> | string
    Permission?: IntWithAggregatesFilter<"VirtualAirlineRole"> | number
    IsDefaultNewRole?: BoolWithAggregatesFilter<"VirtualAirlineRole"> | boolean
    Color?: StringWithAggregatesFilter<"VirtualAirlineRole"> | string
    PayPercent?: DecimalWithAggregatesFilter<"VirtualAirlineRole"> | Decimal | DecimalJsLike | number | string
    IsHidden?: BoolWithAggregatesFilter<"VirtualAirlineRole"> | boolean
    RestrictLoadingVAJobsIntoNonVAAircraft?: BoolWithAggregatesFilter<"VirtualAirlineRole"> | boolean
    RestrictLoadingNonVAJobsIntoVAAircraft?: BoolWithAggregatesFilter<"VirtualAirlineRole"> | boolean
    PayWeekly?: DecimalWithAggregatesFilter<"VirtualAirlineRole"> | Decimal | DecimalJsLike | number | string
    PayPerFlightHour?: DecimalWithAggregatesFilter<"VirtualAirlineRole"> | Decimal | DecimalJsLike | number | string
    LastRefresh?: DateTimeNullableWithAggregatesFilter<"VirtualAirlineRole"> | Date | string | null
    CreatedAt?: DateTimeWithAggregatesFilter<"VirtualAirlineRole"> | Date | string
    UpdatedAt?: DateTimeWithAggregatesFilter<"VirtualAirlineRole"> | Date | string
  }

  export type WorldWhereInput = {
    AND?: WorldWhereInput | WorldWhereInput[]
    OR?: WorldWhereInput[]
    NOT?: WorldWhereInput | WorldWhereInput[]
    Id?: UuidFilter<"World"> | string
    Name?: StringFilter<"World"> | string
    Slug?: StringFilter<"World"> | string
    Description?: StringNullableFilter<"World"> | string | null
    CreatedAt?: DateTimeFilter<"World"> | Date | string
    UpdatedAt?: DateTimeFilter<"World"> | Date | string
    VirtualAirlines?: VirtualAirlineListRelationFilter
  }

  export type WorldOrderByWithRelationInput = {
    Id?: SortOrder
    Name?: SortOrder
    Slug?: SortOrder
    Description?: SortOrderInput | SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
    VirtualAirlines?: VirtualAirlineOrderByRelationAggregateInput
  }

  export type WorldWhereUniqueInput = Prisma.AtLeast<{
    Id?: string
    Slug?: string
    AND?: WorldWhereInput | WorldWhereInput[]
    OR?: WorldWhereInput[]
    NOT?: WorldWhereInput | WorldWhereInput[]
    Name?: StringFilter<"World"> | string
    Description?: StringNullableFilter<"World"> | string | null
    CreatedAt?: DateTimeFilter<"World"> | Date | string
    UpdatedAt?: DateTimeFilter<"World"> | Date | string
    VirtualAirlines?: VirtualAirlineListRelationFilter
  }, "Id" | "Slug">

  export type WorldOrderByWithAggregationInput = {
    Id?: SortOrder
    Name?: SortOrder
    Slug?: SortOrder
    Description?: SortOrderInput | SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
    _count?: WorldCountOrderByAggregateInput
    _max?: WorldMaxOrderByAggregateInput
    _min?: WorldMinOrderByAggregateInput
  }

  export type WorldScalarWhereWithAggregatesInput = {
    AND?: WorldScalarWhereWithAggregatesInput | WorldScalarWhereWithAggregatesInput[]
    OR?: WorldScalarWhereWithAggregatesInput[]
    NOT?: WorldScalarWhereWithAggregatesInput | WorldScalarWhereWithAggregatesInput[]
    Id?: UuidWithAggregatesFilter<"World"> | string
    Name?: StringWithAggregatesFilter<"World"> | string
    Slug?: StringWithAggregatesFilter<"World"> | string
    Description?: StringNullableWithAggregatesFilter<"World"> | string | null
    CreatedAt?: DateTimeWithAggregatesFilter<"World"> | Date | string
    UpdatedAt?: DateTimeWithAggregatesFilter<"World"> | Date | string
  }

  export type MemberWhereInput = {
    AND?: MemberWhereInput | MemberWhereInput[]
    OR?: MemberWhereInput[]
    NOT?: MemberWhereInput | MemberWhereInput[]
    Id?: UuidFilter<"Member"> | string
    VAId?: UuidFilter<"Member"> | string
    CompanyId?: UuidFilter<"Member"> | string
    CompanyName?: StringFilter<"Member"> | string
    AirlineCode?: StringFilter<"Member"> | string
    LastConnection?: DateTimeNullableFilter<"Member"> | Date | string | null
    Reputation?: DecimalFilter<"Member"> | Decimal | DecimalJsLike | number | string
    CompanyCreationDate?: DateTimeFilter<"Member"> | Date | string
    CompanyLevel?: IntFilter<"Member"> | number
    CompanyLevelXP?: IntFilter<"Member"> | number
    VARoleId?: UuidFilter<"Member"> | string
    TotalCargosTransportedLbs?: IntFilter<"Member"> | number
    TotalPAXsTransported?: IntFilter<"Member"> | number
    TotalEarnedCredits?: DecimalFilter<"Member"> | Decimal | DecimalJsLike | number | string
    TotalSpentCredits?: DecimalFilter<"Member"> | Decimal | DecimalJsLike | number | string
    NumberOfFlights?: IntFilter<"Member"> | number
    FlightHours?: DecimalFilter<"Member"> | Decimal | DecimalJsLike | number | string
    Color?: StringFilter<"Member"> | string
    ReputationImpact?: DecimalFilter<"Member"> | Decimal | DecimalJsLike | number | string
    LastVAFlightDate?: DateTimeNullableFilter<"Member"> | Date | string | null
    LastRefresh?: DateTimeNullableFilter<"Member"> | Date | string | null
    CreatedAt?: DateTimeFilter<"Member"> | Date | string
    UpdatedAt?: DateTimeFilter<"Member"> | Date | string
    VirtualAirline?: XOR<VirtualAirlineScalarRelationFilter, VirtualAirlineWhereInput>
    VARole?: XOR<VirtualAirlineRoleScalarRelationFilter, VirtualAirlineRoleWhereInput>
  }

  export type MemberOrderByWithRelationInput = {
    Id?: SortOrder
    VAId?: SortOrder
    CompanyId?: SortOrder
    CompanyName?: SortOrder
    AirlineCode?: SortOrder
    LastConnection?: SortOrderInput | SortOrder
    Reputation?: SortOrder
    CompanyCreationDate?: SortOrder
    CompanyLevel?: SortOrder
    CompanyLevelXP?: SortOrder
    VARoleId?: SortOrder
    TotalCargosTransportedLbs?: SortOrder
    TotalPAXsTransported?: SortOrder
    TotalEarnedCredits?: SortOrder
    TotalSpentCredits?: SortOrder
    NumberOfFlights?: SortOrder
    FlightHours?: SortOrder
    Color?: SortOrder
    ReputationImpact?: SortOrder
    LastVAFlightDate?: SortOrderInput | SortOrder
    LastRefresh?: SortOrderInput | SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
    VirtualAirline?: VirtualAirlineOrderByWithRelationInput
    VARole?: VirtualAirlineRoleOrderByWithRelationInput
  }

  export type MemberWhereUniqueInput = Prisma.AtLeast<{
    Id?: string
    AirlineCode?: string
    AND?: MemberWhereInput | MemberWhereInput[]
    OR?: MemberWhereInput[]
    NOT?: MemberWhereInput | MemberWhereInput[]
    VAId?: UuidFilter<"Member"> | string
    CompanyId?: UuidFilter<"Member"> | string
    CompanyName?: StringFilter<"Member"> | string
    LastConnection?: DateTimeNullableFilter<"Member"> | Date | string | null
    Reputation?: DecimalFilter<"Member"> | Decimal | DecimalJsLike | number | string
    CompanyCreationDate?: DateTimeFilter<"Member"> | Date | string
    CompanyLevel?: IntFilter<"Member"> | number
    CompanyLevelXP?: IntFilter<"Member"> | number
    VARoleId?: UuidFilter<"Member"> | string
    TotalCargosTransportedLbs?: IntFilter<"Member"> | number
    TotalPAXsTransported?: IntFilter<"Member"> | number
    TotalEarnedCredits?: DecimalFilter<"Member"> | Decimal | DecimalJsLike | number | string
    TotalSpentCredits?: DecimalFilter<"Member"> | Decimal | DecimalJsLike | number | string
    NumberOfFlights?: IntFilter<"Member"> | number
    FlightHours?: DecimalFilter<"Member"> | Decimal | DecimalJsLike | number | string
    Color?: StringFilter<"Member"> | string
    ReputationImpact?: DecimalFilter<"Member"> | Decimal | DecimalJsLike | number | string
    LastVAFlightDate?: DateTimeNullableFilter<"Member"> | Date | string | null
    LastRefresh?: DateTimeNullableFilter<"Member"> | Date | string | null
    CreatedAt?: DateTimeFilter<"Member"> | Date | string
    UpdatedAt?: DateTimeFilter<"Member"> | Date | string
    VirtualAirline?: XOR<VirtualAirlineScalarRelationFilter, VirtualAirlineWhereInput>
    VARole?: XOR<VirtualAirlineRoleScalarRelationFilter, VirtualAirlineRoleWhereInput>
  }, "Id" | "AirlineCode">

  export type MemberOrderByWithAggregationInput = {
    Id?: SortOrder
    VAId?: SortOrder
    CompanyId?: SortOrder
    CompanyName?: SortOrder
    AirlineCode?: SortOrder
    LastConnection?: SortOrderInput | SortOrder
    Reputation?: SortOrder
    CompanyCreationDate?: SortOrder
    CompanyLevel?: SortOrder
    CompanyLevelXP?: SortOrder
    VARoleId?: SortOrder
    TotalCargosTransportedLbs?: SortOrder
    TotalPAXsTransported?: SortOrder
    TotalEarnedCredits?: SortOrder
    TotalSpentCredits?: SortOrder
    NumberOfFlights?: SortOrder
    FlightHours?: SortOrder
    Color?: SortOrder
    ReputationImpact?: SortOrder
    LastVAFlightDate?: SortOrderInput | SortOrder
    LastRefresh?: SortOrderInput | SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
    _count?: MemberCountOrderByAggregateInput
    _avg?: MemberAvgOrderByAggregateInput
    _max?: MemberMaxOrderByAggregateInput
    _min?: MemberMinOrderByAggregateInput
    _sum?: MemberSumOrderByAggregateInput
  }

  export type MemberScalarWhereWithAggregatesInput = {
    AND?: MemberScalarWhereWithAggregatesInput | MemberScalarWhereWithAggregatesInput[]
    OR?: MemberScalarWhereWithAggregatesInput[]
    NOT?: MemberScalarWhereWithAggregatesInput | MemberScalarWhereWithAggregatesInput[]
    Id?: UuidWithAggregatesFilter<"Member"> | string
    VAId?: UuidWithAggregatesFilter<"Member"> | string
    CompanyId?: UuidWithAggregatesFilter<"Member"> | string
    CompanyName?: StringWithAggregatesFilter<"Member"> | string
    AirlineCode?: StringWithAggregatesFilter<"Member"> | string
    LastConnection?: DateTimeNullableWithAggregatesFilter<"Member"> | Date | string | null
    Reputation?: DecimalWithAggregatesFilter<"Member"> | Decimal | DecimalJsLike | number | string
    CompanyCreationDate?: DateTimeWithAggregatesFilter<"Member"> | Date | string
    CompanyLevel?: IntWithAggregatesFilter<"Member"> | number
    CompanyLevelXP?: IntWithAggregatesFilter<"Member"> | number
    VARoleId?: UuidWithAggregatesFilter<"Member"> | string
    TotalCargosTransportedLbs?: IntWithAggregatesFilter<"Member"> | number
    TotalPAXsTransported?: IntWithAggregatesFilter<"Member"> | number
    TotalEarnedCredits?: DecimalWithAggregatesFilter<"Member"> | Decimal | DecimalJsLike | number | string
    TotalSpentCredits?: DecimalWithAggregatesFilter<"Member"> | Decimal | DecimalJsLike | number | string
    NumberOfFlights?: IntWithAggregatesFilter<"Member"> | number
    FlightHours?: DecimalWithAggregatesFilter<"Member"> | Decimal | DecimalJsLike | number | string
    Color?: StringWithAggregatesFilter<"Member"> | string
    ReputationImpact?: DecimalWithAggregatesFilter<"Member"> | Decimal | DecimalJsLike | number | string
    LastVAFlightDate?: DateTimeNullableWithAggregatesFilter<"Member"> | Date | string | null
    LastRefresh?: DateTimeNullableWithAggregatesFilter<"Member"> | Date | string | null
    CreatedAt?: DateTimeWithAggregatesFilter<"Member"> | Date | string
    UpdatedAt?: DateTimeWithAggregatesFilter<"Member"> | Date | string
  }

  export type JobWhereInput = {
    AND?: JobWhereInput | JobWhereInput[]
    OR?: JobWhereInput[]
    NOT?: JobWhereInput | JobWhereInput[]
    Id?: UuidFilter<"Job"> | string
    IsEnabled?: BoolFilter<"Job"> | boolean
    FirstRunCompleted?: BoolFilter<"Job"> | boolean
    Type?: EnumJobTypeFilter<"Job"> | $Enums.JobType
    Status?: EnumJobStatusFilter<"Job"> | $Enums.JobStatus
    CronExpression?: EnumCronExpressionFilter<"Job"> | $Enums.CronExpression
    Name?: StringFilter<"Job"> | string
    Description?: StringNullableFilter<"Job"> | string | null
    Parameters?: JsonNullableFilter<"Job">
    LastRunAt?: DateTimeNullableFilter<"Job"> | Date | string | null
    NextRunAt?: DateTimeNullableFilter<"Job"> | Date | string | null
    LastError?: StringNullableFilter<"Job"> | string | null
    ExecutionCount?: IntFilter<"Job"> | number
    CreatedAt?: DateTimeFilter<"Job"> | Date | string
    UpdatedAt?: DateTimeFilter<"Job"> | Date | string
  }

  export type JobOrderByWithRelationInput = {
    Id?: SortOrder
    IsEnabled?: SortOrder
    FirstRunCompleted?: SortOrder
    Type?: SortOrder
    Status?: SortOrder
    CronExpression?: SortOrder
    Name?: SortOrder
    Description?: SortOrderInput | SortOrder
    Parameters?: SortOrderInput | SortOrder
    LastRunAt?: SortOrderInput | SortOrder
    NextRunAt?: SortOrderInput | SortOrder
    LastError?: SortOrderInput | SortOrder
    ExecutionCount?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
  }

  export type JobWhereUniqueInput = Prisma.AtLeast<{
    Id?: string
    AND?: JobWhereInput | JobWhereInput[]
    OR?: JobWhereInput[]
    NOT?: JobWhereInput | JobWhereInput[]
    IsEnabled?: BoolFilter<"Job"> | boolean
    FirstRunCompleted?: BoolFilter<"Job"> | boolean
    Type?: EnumJobTypeFilter<"Job"> | $Enums.JobType
    Status?: EnumJobStatusFilter<"Job"> | $Enums.JobStatus
    CronExpression?: EnumCronExpressionFilter<"Job"> | $Enums.CronExpression
    Name?: StringFilter<"Job"> | string
    Description?: StringNullableFilter<"Job"> | string | null
    Parameters?: JsonNullableFilter<"Job">
    LastRunAt?: DateTimeNullableFilter<"Job"> | Date | string | null
    NextRunAt?: DateTimeNullableFilter<"Job"> | Date | string | null
    LastError?: StringNullableFilter<"Job"> | string | null
    ExecutionCount?: IntFilter<"Job"> | number
    CreatedAt?: DateTimeFilter<"Job"> | Date | string
    UpdatedAt?: DateTimeFilter<"Job"> | Date | string
  }, "Id">

  export type JobOrderByWithAggregationInput = {
    Id?: SortOrder
    IsEnabled?: SortOrder
    FirstRunCompleted?: SortOrder
    Type?: SortOrder
    Status?: SortOrder
    CronExpression?: SortOrder
    Name?: SortOrder
    Description?: SortOrderInput | SortOrder
    Parameters?: SortOrderInput | SortOrder
    LastRunAt?: SortOrderInput | SortOrder
    NextRunAt?: SortOrderInput | SortOrder
    LastError?: SortOrderInput | SortOrder
    ExecutionCount?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
    _count?: JobCountOrderByAggregateInput
    _avg?: JobAvgOrderByAggregateInput
    _max?: JobMaxOrderByAggregateInput
    _min?: JobMinOrderByAggregateInput
    _sum?: JobSumOrderByAggregateInput
  }

  export type JobScalarWhereWithAggregatesInput = {
    AND?: JobScalarWhereWithAggregatesInput | JobScalarWhereWithAggregatesInput[]
    OR?: JobScalarWhereWithAggregatesInput[]
    NOT?: JobScalarWhereWithAggregatesInput | JobScalarWhereWithAggregatesInput[]
    Id?: UuidWithAggregatesFilter<"Job"> | string
    IsEnabled?: BoolWithAggregatesFilter<"Job"> | boolean
    FirstRunCompleted?: BoolWithAggregatesFilter<"Job"> | boolean
    Type?: EnumJobTypeWithAggregatesFilter<"Job"> | $Enums.JobType
    Status?: EnumJobStatusWithAggregatesFilter<"Job"> | $Enums.JobStatus
    CronExpression?: EnumCronExpressionWithAggregatesFilter<"Job"> | $Enums.CronExpression
    Name?: StringWithAggregatesFilter<"Job"> | string
    Description?: StringNullableWithAggregatesFilter<"Job"> | string | null
    Parameters?: JsonNullableWithAggregatesFilter<"Job">
    LastRunAt?: DateTimeNullableWithAggregatesFilter<"Job"> | Date | string | null
    NextRunAt?: DateTimeNullableWithAggregatesFilter<"Job"> | Date | string | null
    LastError?: StringNullableWithAggregatesFilter<"Job"> | string | null
    ExecutionCount?: IntWithAggregatesFilter<"Job"> | number
    CreatedAt?: DateTimeWithAggregatesFilter<"Job"> | Date | string
    UpdatedAt?: DateTimeWithAggregatesFilter<"Job"> | Date | string
  }

  export type AppConfigCreateInput = {
    OnAirSyncEnabled?: boolean
    OnAirVASyncEnabled?: boolean
    OnAirVAMembersSyncEnabled?: boolean
    OnAirCompanySyncEnabled?: boolean
    DiscordServerInviteLink?: string | null
    DiscordServerInviteLinkEnabled?: boolean
    AcceptingNewMembers?: boolean
    DiscordAuthEnabled?: boolean
    LocalAuthEnabled?: boolean
    VirtualAirlineInitiated?: boolean
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
  }

  export type AppConfigUncheckedCreateInput = {
    Id?: number
    OnAirSyncEnabled?: boolean
    OnAirVASyncEnabled?: boolean
    OnAirVAMembersSyncEnabled?: boolean
    OnAirCompanySyncEnabled?: boolean
    DiscordServerInviteLink?: string | null
    DiscordServerInviteLinkEnabled?: boolean
    AcceptingNewMembers?: boolean
    DiscordAuthEnabled?: boolean
    LocalAuthEnabled?: boolean
    VirtualAirlineInitiated?: boolean
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
  }

  export type AppConfigUpdateInput = {
    OnAirSyncEnabled?: BoolFieldUpdateOperationsInput | boolean
    OnAirVASyncEnabled?: BoolFieldUpdateOperationsInput | boolean
    OnAirVAMembersSyncEnabled?: BoolFieldUpdateOperationsInput | boolean
    OnAirCompanySyncEnabled?: BoolFieldUpdateOperationsInput | boolean
    DiscordServerInviteLink?: NullableStringFieldUpdateOperationsInput | string | null
    DiscordServerInviteLinkEnabled?: BoolFieldUpdateOperationsInput | boolean
    AcceptingNewMembers?: BoolFieldUpdateOperationsInput | boolean
    DiscordAuthEnabled?: BoolFieldUpdateOperationsInput | boolean
    LocalAuthEnabled?: BoolFieldUpdateOperationsInput | boolean
    VirtualAirlineInitiated?: BoolFieldUpdateOperationsInput | boolean
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppConfigUncheckedUpdateInput = {
    Id?: IntFieldUpdateOperationsInput | number
    OnAirSyncEnabled?: BoolFieldUpdateOperationsInput | boolean
    OnAirVASyncEnabled?: BoolFieldUpdateOperationsInput | boolean
    OnAirVAMembersSyncEnabled?: BoolFieldUpdateOperationsInput | boolean
    OnAirCompanySyncEnabled?: BoolFieldUpdateOperationsInput | boolean
    DiscordServerInviteLink?: NullableStringFieldUpdateOperationsInput | string | null
    DiscordServerInviteLinkEnabled?: BoolFieldUpdateOperationsInput | boolean
    AcceptingNewMembers?: BoolFieldUpdateOperationsInput | boolean
    DiscordAuthEnabled?: BoolFieldUpdateOperationsInput | boolean
    LocalAuthEnabled?: BoolFieldUpdateOperationsInput | boolean
    VirtualAirlineInitiated?: BoolFieldUpdateOperationsInput | boolean
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppConfigCreateManyInput = {
    Id?: number
    OnAirSyncEnabled?: boolean
    OnAirVASyncEnabled?: boolean
    OnAirVAMembersSyncEnabled?: boolean
    OnAirCompanySyncEnabled?: boolean
    DiscordServerInviteLink?: string | null
    DiscordServerInviteLinkEnabled?: boolean
    AcceptingNewMembers?: boolean
    DiscordAuthEnabled?: boolean
    LocalAuthEnabled?: boolean
    VirtualAirlineInitiated?: boolean
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
  }

  export type AppConfigUpdateManyMutationInput = {
    OnAirSyncEnabled?: BoolFieldUpdateOperationsInput | boolean
    OnAirVASyncEnabled?: BoolFieldUpdateOperationsInput | boolean
    OnAirVAMembersSyncEnabled?: BoolFieldUpdateOperationsInput | boolean
    OnAirCompanySyncEnabled?: BoolFieldUpdateOperationsInput | boolean
    DiscordServerInviteLink?: NullableStringFieldUpdateOperationsInput | string | null
    DiscordServerInviteLinkEnabled?: BoolFieldUpdateOperationsInput | boolean
    AcceptingNewMembers?: BoolFieldUpdateOperationsInput | boolean
    DiscordAuthEnabled?: BoolFieldUpdateOperationsInput | boolean
    LocalAuthEnabled?: BoolFieldUpdateOperationsInput | boolean
    VirtualAirlineInitiated?: BoolFieldUpdateOperationsInput | boolean
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppConfigUncheckedUpdateManyInput = {
    Id?: IntFieldUpdateOperationsInput | number
    OnAirSyncEnabled?: BoolFieldUpdateOperationsInput | boolean
    OnAirVASyncEnabled?: BoolFieldUpdateOperationsInput | boolean
    OnAirVAMembersSyncEnabled?: BoolFieldUpdateOperationsInput | boolean
    OnAirCompanySyncEnabled?: BoolFieldUpdateOperationsInput | boolean
    DiscordServerInviteLink?: NullableStringFieldUpdateOperationsInput | string | null
    DiscordServerInviteLinkEnabled?: BoolFieldUpdateOperationsInput | boolean
    AcceptingNewMembers?: BoolFieldUpdateOperationsInput | boolean
    DiscordAuthEnabled?: BoolFieldUpdateOperationsInput | boolean
    LocalAuthEnabled?: BoolFieldUpdateOperationsInput | boolean
    VirtualAirlineInitiated?: BoolFieldUpdateOperationsInput | boolean
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    Id?: string
    Username: string
    Password: string
    Email?: string | null
    FirstName?: string | null
    LastName?: string | null
    FirstLoginCompleted?: boolean
    IsOnline?: boolean
    IsBanned?: boolean
    BanReason?: string | null
    BanExpiresAt?: Date | string | null
    IsVerified?: boolean
    LastLogin?: Date | string | null
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    Roles?: RoleCreateNestedManyWithoutUsersInput
    PrivacySettings?: UserPrivacySettingsCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    Id?: string
    Username: string
    Password: string
    Email?: string | null
    FirstName?: string | null
    LastName?: string | null
    FirstLoginCompleted?: boolean
    IsOnline?: boolean
    IsBanned?: boolean
    BanReason?: string | null
    BanExpiresAt?: Date | string | null
    IsVerified?: boolean
    LastLogin?: Date | string | null
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    Roles?: RoleUncheckedCreateNestedManyWithoutUsersInput
    PrivacySettings?: UserPrivacySettingsUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Username?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    FirstName?: NullableStringFieldUpdateOperationsInput | string | null
    LastName?: NullableStringFieldUpdateOperationsInput | string | null
    FirstLoginCompleted?: BoolFieldUpdateOperationsInput | boolean
    IsOnline?: BoolFieldUpdateOperationsInput | boolean
    IsBanned?: BoolFieldUpdateOperationsInput | boolean
    BanReason?: NullableStringFieldUpdateOperationsInput | string | null
    BanExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    IsVerified?: BoolFieldUpdateOperationsInput | boolean
    LastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Roles?: RoleUpdateManyWithoutUsersNestedInput
    PrivacySettings?: UserPrivacySettingsUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Username?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    FirstName?: NullableStringFieldUpdateOperationsInput | string | null
    LastName?: NullableStringFieldUpdateOperationsInput | string | null
    FirstLoginCompleted?: BoolFieldUpdateOperationsInput | boolean
    IsOnline?: BoolFieldUpdateOperationsInput | boolean
    IsBanned?: BoolFieldUpdateOperationsInput | boolean
    BanReason?: NullableStringFieldUpdateOperationsInput | string | null
    BanExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    IsVerified?: BoolFieldUpdateOperationsInput | boolean
    LastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Roles?: RoleUncheckedUpdateManyWithoutUsersNestedInput
    PrivacySettings?: UserPrivacySettingsUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    Id?: string
    Username: string
    Password: string
    Email?: string | null
    FirstName?: string | null
    LastName?: string | null
    FirstLoginCompleted?: boolean
    IsOnline?: boolean
    IsBanned?: boolean
    BanReason?: string | null
    BanExpiresAt?: Date | string | null
    IsVerified?: boolean
    LastLogin?: Date | string | null
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Username?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    FirstName?: NullableStringFieldUpdateOperationsInput | string | null
    LastName?: NullableStringFieldUpdateOperationsInput | string | null
    FirstLoginCompleted?: BoolFieldUpdateOperationsInput | boolean
    IsOnline?: BoolFieldUpdateOperationsInput | boolean
    IsBanned?: BoolFieldUpdateOperationsInput | boolean
    BanReason?: NullableStringFieldUpdateOperationsInput | string | null
    BanExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    IsVerified?: BoolFieldUpdateOperationsInput | boolean
    LastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Username?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    FirstName?: NullableStringFieldUpdateOperationsInput | string | null
    LastName?: NullableStringFieldUpdateOperationsInput | string | null
    FirstLoginCompleted?: BoolFieldUpdateOperationsInput | boolean
    IsOnline?: BoolFieldUpdateOperationsInput | boolean
    IsBanned?: BoolFieldUpdateOperationsInput | boolean
    BanReason?: NullableStringFieldUpdateOperationsInput | string | null
    BanExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    IsVerified?: BoolFieldUpdateOperationsInput | boolean
    LastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPrivacySettingsCreateInput = {
    Id?: string
    ShowOnlineStatus?: boolean
    ShowFirstName?: boolean
    ShowLastName?: boolean
    ShowLastNameInitial?: boolean
    ShowLastLogin?: Date | string | null
    CreatedAt?: Date | string
    User: UserCreateNestedOneWithoutPrivacySettingsInput
  }

  export type UserPrivacySettingsUncheckedCreateInput = {
    Id?: string
    UserId: string
    ShowOnlineStatus?: boolean
    ShowFirstName?: boolean
    ShowLastName?: boolean
    ShowLastNameInitial?: boolean
    ShowLastLogin?: Date | string | null
    CreatedAt?: Date | string
  }

  export type UserPrivacySettingsUpdateInput = {
    Id?: StringFieldUpdateOperationsInput | string
    ShowOnlineStatus?: BoolFieldUpdateOperationsInput | boolean
    ShowFirstName?: BoolFieldUpdateOperationsInput | boolean
    ShowLastName?: BoolFieldUpdateOperationsInput | boolean
    ShowLastNameInitial?: BoolFieldUpdateOperationsInput | boolean
    ShowLastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneRequiredWithoutPrivacySettingsNestedInput
  }

  export type UserPrivacySettingsUncheckedUpdateInput = {
    Id?: StringFieldUpdateOperationsInput | string
    UserId?: StringFieldUpdateOperationsInput | string
    ShowOnlineStatus?: BoolFieldUpdateOperationsInput | boolean
    ShowFirstName?: BoolFieldUpdateOperationsInput | boolean
    ShowLastName?: BoolFieldUpdateOperationsInput | boolean
    ShowLastNameInitial?: BoolFieldUpdateOperationsInput | boolean
    ShowLastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPrivacySettingsCreateManyInput = {
    Id?: string
    UserId: string
    ShowOnlineStatus?: boolean
    ShowFirstName?: boolean
    ShowLastName?: boolean
    ShowLastNameInitial?: boolean
    ShowLastLogin?: Date | string | null
    CreatedAt?: Date | string
  }

  export type UserPrivacySettingsUpdateManyMutationInput = {
    Id?: StringFieldUpdateOperationsInput | string
    ShowOnlineStatus?: BoolFieldUpdateOperationsInput | boolean
    ShowFirstName?: BoolFieldUpdateOperationsInput | boolean
    ShowLastName?: BoolFieldUpdateOperationsInput | boolean
    ShowLastNameInitial?: BoolFieldUpdateOperationsInput | boolean
    ShowLastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPrivacySettingsUncheckedUpdateManyInput = {
    Id?: StringFieldUpdateOperationsInput | string
    UserId?: StringFieldUpdateOperationsInput | string
    ShowOnlineStatus?: BoolFieldUpdateOperationsInput | boolean
    ShowFirstName?: BoolFieldUpdateOperationsInput | boolean
    ShowLastName?: BoolFieldUpdateOperationsInput | boolean
    ShowLastNameInitial?: BoolFieldUpdateOperationsInput | boolean
    ShowLastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleCreateInput = {
    Name: string
    Description?: string | null
    Slug: string
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    Permissions?: PermissionCreateNestedManyWithoutRolesInput
    Users?: UserCreateNestedManyWithoutRolesInput
  }

  export type RoleUncheckedCreateInput = {
    Id?: number
    Name: string
    Description?: string | null
    Slug: string
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    Permissions?: PermissionUncheckedCreateNestedManyWithoutRolesInput
    Users?: UserUncheckedCreateNestedManyWithoutRolesInput
  }

  export type RoleUpdateInput = {
    Name?: StringFieldUpdateOperationsInput | string
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Slug?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Permissions?: PermissionUpdateManyWithoutRolesNestedInput
    Users?: UserUpdateManyWithoutRolesNestedInput
  }

  export type RoleUncheckedUpdateInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Slug?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Permissions?: PermissionUncheckedUpdateManyWithoutRolesNestedInput
    Users?: UserUncheckedUpdateManyWithoutRolesNestedInput
  }

  export type RoleCreateManyInput = {
    Id?: number
    Name: string
    Description?: string | null
    Slug: string
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
  }

  export type RoleUpdateManyMutationInput = {
    Name?: StringFieldUpdateOperationsInput | string
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Slug?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleUncheckedUpdateManyInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Slug?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PermissionCreateInput = {
    Name: string
    Description?: string | null
    Slug: string
    Entity: string
    Action: string
    Roles?: RoleCreateNestedManyWithoutPermissionsInput
  }

  export type PermissionUncheckedCreateInput = {
    Id?: number
    Name: string
    Description?: string | null
    Slug: string
    Entity: string
    Action: string
    Roles?: RoleUncheckedCreateNestedManyWithoutPermissionsInput
  }

  export type PermissionUpdateInput = {
    Name?: StringFieldUpdateOperationsInput | string
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Slug?: StringFieldUpdateOperationsInput | string
    Entity?: StringFieldUpdateOperationsInput | string
    Action?: StringFieldUpdateOperationsInput | string
    Roles?: RoleUpdateManyWithoutPermissionsNestedInput
  }

  export type PermissionUncheckedUpdateInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Slug?: StringFieldUpdateOperationsInput | string
    Entity?: StringFieldUpdateOperationsInput | string
    Action?: StringFieldUpdateOperationsInput | string
    Roles?: RoleUncheckedUpdateManyWithoutPermissionsNestedInput
  }

  export type PermissionCreateManyInput = {
    Id?: number
    Name: string
    Description?: string | null
    Slug: string
    Entity: string
    Action: string
  }

  export type PermissionUpdateManyMutationInput = {
    Name?: StringFieldUpdateOperationsInput | string
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Slug?: StringFieldUpdateOperationsInput | string
    Entity?: StringFieldUpdateOperationsInput | string
    Action?: StringFieldUpdateOperationsInput | string
  }

  export type PermissionUncheckedUpdateManyInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Slug?: StringFieldUpdateOperationsInput | string
    Entity?: StringFieldUpdateOperationsInput | string
    Action?: StringFieldUpdateOperationsInput | string
  }

  export type LiveryCreateInput = {
    Id?: string
    Name: string
    IsActive?: boolean
    DownloadCount?: number
    Image: string
    Url?: string | null
    Description?: string | null
    DownloadUrl?: string | null
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
  }

  export type LiveryUncheckedCreateInput = {
    Id?: string
    Name: string
    IsActive?: boolean
    DownloadCount?: number
    Image: string
    Url?: string | null
    Description?: string | null
    DownloadUrl?: string | null
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
  }

  export type LiveryUpdateInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    IsActive?: BoolFieldUpdateOperationsInput | boolean
    DownloadCount?: IntFieldUpdateOperationsInput | number
    Image?: StringFieldUpdateOperationsInput | string
    Url?: NullableStringFieldUpdateOperationsInput | string | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    DownloadUrl?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LiveryUncheckedUpdateInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    IsActive?: BoolFieldUpdateOperationsInput | boolean
    DownloadCount?: IntFieldUpdateOperationsInput | number
    Image?: StringFieldUpdateOperationsInput | string
    Url?: NullableStringFieldUpdateOperationsInput | string | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    DownloadUrl?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LiveryCreateManyInput = {
    Id?: string
    Name: string
    IsActive?: boolean
    DownloadCount?: number
    Image: string
    Url?: string | null
    Description?: string | null
    DownloadUrl?: string | null
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
  }

  export type LiveryUpdateManyMutationInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    IsActive?: BoolFieldUpdateOperationsInput | boolean
    DownloadCount?: IntFieldUpdateOperationsInput | number
    Image?: StringFieldUpdateOperationsInput | string
    Url?: NullableStringFieldUpdateOperationsInput | string | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    DownloadUrl?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LiveryUncheckedUpdateManyInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    IsActive?: BoolFieldUpdateOperationsInput | boolean
    DownloadCount?: IntFieldUpdateOperationsInput | number
    Image?: StringFieldUpdateOperationsInput | string
    Url?: NullableStringFieldUpdateOperationsInput | string | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    DownloadUrl?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VirtualAirlineCreateInput = {
    Id: string
    ApiKey: string
    IsPrimary?: boolean
    Identifier?: string | null
    Name?: string | null
    Description?: string | null
    LastDividendsDistribution?: Date | string | null
    LastComputationDate?: Date | string | null
    ComputedMemberCount?: number | null
    ComputedAircraftsCount?: number | null
    ComputedNumberOfFlights30Days?: number | null
    ComputedNumberOfFlightHours30Days?: number | null
    ComputedMostUsedAirports?: string | null
    LastConnection?: Date | string | null
    LastReportDate?: Date | string | null
    Reputation?: Decimal | DecimalJsLike | number | string | null
    CreationDate?: Date | string | null
    DifficultyLevel?: number | null
    Level?: number | null
    LevelXP?: number | null
    TotalContractsCompleted?: number | null
    TotalContractsEarnedCredits?: number | null
    LastRefresh?: Date | string | null
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    World?: WorldCreateNestedOneWithoutVirtualAirlinesInput
    VARoles?: VirtualAirlineRoleCreateNestedManyWithoutVirtualAirlineInput
    Members?: MemberCreateNestedManyWithoutVirtualAirlineInput
  }

  export type VirtualAirlineUncheckedCreateInput = {
    Id: string
    ApiKey: string
    IsPrimary?: boolean
    Identifier?: string | null
    Name?: string | null
    Description?: string | null
    WorldId?: string | null
    LastDividendsDistribution?: Date | string | null
    LastComputationDate?: Date | string | null
    ComputedMemberCount?: number | null
    ComputedAircraftsCount?: number | null
    ComputedNumberOfFlights30Days?: number | null
    ComputedNumberOfFlightHours30Days?: number | null
    ComputedMostUsedAirports?: string | null
    LastConnection?: Date | string | null
    LastReportDate?: Date | string | null
    Reputation?: Decimal | DecimalJsLike | number | string | null
    CreationDate?: Date | string | null
    DifficultyLevel?: number | null
    Level?: number | null
    LevelXP?: number | null
    TotalContractsCompleted?: number | null
    TotalContractsEarnedCredits?: number | null
    LastRefresh?: Date | string | null
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    VARoles?: VirtualAirlineRoleUncheckedCreateNestedManyWithoutVirtualAirlineInput
    Members?: MemberUncheckedCreateNestedManyWithoutVirtualAirlineInput
  }

  export type VirtualAirlineUpdateInput = {
    Id?: StringFieldUpdateOperationsInput | string
    ApiKey?: StringFieldUpdateOperationsInput | string
    IsPrimary?: BoolFieldUpdateOperationsInput | boolean
    Identifier?: NullableStringFieldUpdateOperationsInput | string | null
    Name?: NullableStringFieldUpdateOperationsInput | string | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    LastDividendsDistribution?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    LastComputationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ComputedMemberCount?: NullableIntFieldUpdateOperationsInput | number | null
    ComputedAircraftsCount?: NullableIntFieldUpdateOperationsInput | number | null
    ComputedNumberOfFlights30Days?: NullableIntFieldUpdateOperationsInput | number | null
    ComputedNumberOfFlightHours30Days?: NullableIntFieldUpdateOperationsInput | number | null
    ComputedMostUsedAirports?: NullableStringFieldUpdateOperationsInput | string | null
    LastConnection?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    LastReportDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Reputation?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    CreationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DifficultyLevel?: NullableIntFieldUpdateOperationsInput | number | null
    Level?: NullableIntFieldUpdateOperationsInput | number | null
    LevelXP?: NullableIntFieldUpdateOperationsInput | number | null
    TotalContractsCompleted?: NullableIntFieldUpdateOperationsInput | number | null
    TotalContractsEarnedCredits?: NullableIntFieldUpdateOperationsInput | number | null
    LastRefresh?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    World?: WorldUpdateOneWithoutVirtualAirlinesNestedInput
    VARoles?: VirtualAirlineRoleUpdateManyWithoutVirtualAirlineNestedInput
    Members?: MemberUpdateManyWithoutVirtualAirlineNestedInput
  }

  export type VirtualAirlineUncheckedUpdateInput = {
    Id?: StringFieldUpdateOperationsInput | string
    ApiKey?: StringFieldUpdateOperationsInput | string
    IsPrimary?: BoolFieldUpdateOperationsInput | boolean
    Identifier?: NullableStringFieldUpdateOperationsInput | string | null
    Name?: NullableStringFieldUpdateOperationsInput | string | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    WorldId?: NullableStringFieldUpdateOperationsInput | string | null
    LastDividendsDistribution?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    LastComputationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ComputedMemberCount?: NullableIntFieldUpdateOperationsInput | number | null
    ComputedAircraftsCount?: NullableIntFieldUpdateOperationsInput | number | null
    ComputedNumberOfFlights30Days?: NullableIntFieldUpdateOperationsInput | number | null
    ComputedNumberOfFlightHours30Days?: NullableIntFieldUpdateOperationsInput | number | null
    ComputedMostUsedAirports?: NullableStringFieldUpdateOperationsInput | string | null
    LastConnection?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    LastReportDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Reputation?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    CreationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DifficultyLevel?: NullableIntFieldUpdateOperationsInput | number | null
    Level?: NullableIntFieldUpdateOperationsInput | number | null
    LevelXP?: NullableIntFieldUpdateOperationsInput | number | null
    TotalContractsCompleted?: NullableIntFieldUpdateOperationsInput | number | null
    TotalContractsEarnedCredits?: NullableIntFieldUpdateOperationsInput | number | null
    LastRefresh?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    VARoles?: VirtualAirlineRoleUncheckedUpdateManyWithoutVirtualAirlineNestedInput
    Members?: MemberUncheckedUpdateManyWithoutVirtualAirlineNestedInput
  }

  export type VirtualAirlineCreateManyInput = {
    Id: string
    ApiKey: string
    IsPrimary?: boolean
    Identifier?: string | null
    Name?: string | null
    Description?: string | null
    WorldId?: string | null
    LastDividendsDistribution?: Date | string | null
    LastComputationDate?: Date | string | null
    ComputedMemberCount?: number | null
    ComputedAircraftsCount?: number | null
    ComputedNumberOfFlights30Days?: number | null
    ComputedNumberOfFlightHours30Days?: number | null
    ComputedMostUsedAirports?: string | null
    LastConnection?: Date | string | null
    LastReportDate?: Date | string | null
    Reputation?: Decimal | DecimalJsLike | number | string | null
    CreationDate?: Date | string | null
    DifficultyLevel?: number | null
    Level?: number | null
    LevelXP?: number | null
    TotalContractsCompleted?: number | null
    TotalContractsEarnedCredits?: number | null
    LastRefresh?: Date | string | null
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
  }

  export type VirtualAirlineUpdateManyMutationInput = {
    Id?: StringFieldUpdateOperationsInput | string
    ApiKey?: StringFieldUpdateOperationsInput | string
    IsPrimary?: BoolFieldUpdateOperationsInput | boolean
    Identifier?: NullableStringFieldUpdateOperationsInput | string | null
    Name?: NullableStringFieldUpdateOperationsInput | string | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    LastDividendsDistribution?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    LastComputationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ComputedMemberCount?: NullableIntFieldUpdateOperationsInput | number | null
    ComputedAircraftsCount?: NullableIntFieldUpdateOperationsInput | number | null
    ComputedNumberOfFlights30Days?: NullableIntFieldUpdateOperationsInput | number | null
    ComputedNumberOfFlightHours30Days?: NullableIntFieldUpdateOperationsInput | number | null
    ComputedMostUsedAirports?: NullableStringFieldUpdateOperationsInput | string | null
    LastConnection?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    LastReportDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Reputation?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    CreationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DifficultyLevel?: NullableIntFieldUpdateOperationsInput | number | null
    Level?: NullableIntFieldUpdateOperationsInput | number | null
    LevelXP?: NullableIntFieldUpdateOperationsInput | number | null
    TotalContractsCompleted?: NullableIntFieldUpdateOperationsInput | number | null
    TotalContractsEarnedCredits?: NullableIntFieldUpdateOperationsInput | number | null
    LastRefresh?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VirtualAirlineUncheckedUpdateManyInput = {
    Id?: StringFieldUpdateOperationsInput | string
    ApiKey?: StringFieldUpdateOperationsInput | string
    IsPrimary?: BoolFieldUpdateOperationsInput | boolean
    Identifier?: NullableStringFieldUpdateOperationsInput | string | null
    Name?: NullableStringFieldUpdateOperationsInput | string | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    WorldId?: NullableStringFieldUpdateOperationsInput | string | null
    LastDividendsDistribution?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    LastComputationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ComputedMemberCount?: NullableIntFieldUpdateOperationsInput | number | null
    ComputedAircraftsCount?: NullableIntFieldUpdateOperationsInput | number | null
    ComputedNumberOfFlights30Days?: NullableIntFieldUpdateOperationsInput | number | null
    ComputedNumberOfFlightHours30Days?: NullableIntFieldUpdateOperationsInput | number | null
    ComputedMostUsedAirports?: NullableStringFieldUpdateOperationsInput | string | null
    LastConnection?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    LastReportDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Reputation?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    CreationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DifficultyLevel?: NullableIntFieldUpdateOperationsInput | number | null
    Level?: NullableIntFieldUpdateOperationsInput | number | null
    LevelXP?: NullableIntFieldUpdateOperationsInput | number | null
    TotalContractsCompleted?: NullableIntFieldUpdateOperationsInput | number | null
    TotalContractsEarnedCredits?: NullableIntFieldUpdateOperationsInput | number | null
    LastRefresh?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VirtualAirlineRoleCreateInput = {
    Id?: string
    Name: string
    Permission: number
    IsDefaultNewRole: boolean
    Color: string
    PayPercent: Decimal | DecimalJsLike | number | string
    IsHidden: boolean
    RestrictLoadingVAJobsIntoNonVAAircraft: boolean
    RestrictLoadingNonVAJobsIntoVAAircraft: boolean
    PayWeekly: Decimal | DecimalJsLike | number | string
    PayPerFlightHour: Decimal | DecimalJsLike | number | string
    LastRefresh?: Date | string | null
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    VirtualAirline: VirtualAirlineCreateNestedOneWithoutVARolesInput
    Members?: MemberCreateNestedManyWithoutVARoleInput
  }

  export type VirtualAirlineRoleUncheckedCreateInput = {
    Id?: string
    VAId: string
    Name: string
    Permission: number
    IsDefaultNewRole: boolean
    Color: string
    PayPercent: Decimal | DecimalJsLike | number | string
    IsHidden: boolean
    RestrictLoadingVAJobsIntoNonVAAircraft: boolean
    RestrictLoadingNonVAJobsIntoVAAircraft: boolean
    PayWeekly: Decimal | DecimalJsLike | number | string
    PayPerFlightHour: Decimal | DecimalJsLike | number | string
    LastRefresh?: Date | string | null
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    Members?: MemberUncheckedCreateNestedManyWithoutVARoleInput
  }

  export type VirtualAirlineRoleUpdateInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    Permission?: IntFieldUpdateOperationsInput | number
    IsDefaultNewRole?: BoolFieldUpdateOperationsInput | boolean
    Color?: StringFieldUpdateOperationsInput | string
    PayPercent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    IsHidden?: BoolFieldUpdateOperationsInput | boolean
    RestrictLoadingVAJobsIntoNonVAAircraft?: BoolFieldUpdateOperationsInput | boolean
    RestrictLoadingNonVAJobsIntoVAAircraft?: BoolFieldUpdateOperationsInput | boolean
    PayWeekly?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    PayPerFlightHour?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    LastRefresh?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    VirtualAirline?: VirtualAirlineUpdateOneRequiredWithoutVARolesNestedInput
    Members?: MemberUpdateManyWithoutVARoleNestedInput
  }

  export type VirtualAirlineRoleUncheckedUpdateInput = {
    Id?: StringFieldUpdateOperationsInput | string
    VAId?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    Permission?: IntFieldUpdateOperationsInput | number
    IsDefaultNewRole?: BoolFieldUpdateOperationsInput | boolean
    Color?: StringFieldUpdateOperationsInput | string
    PayPercent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    IsHidden?: BoolFieldUpdateOperationsInput | boolean
    RestrictLoadingVAJobsIntoNonVAAircraft?: BoolFieldUpdateOperationsInput | boolean
    RestrictLoadingNonVAJobsIntoVAAircraft?: BoolFieldUpdateOperationsInput | boolean
    PayWeekly?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    PayPerFlightHour?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    LastRefresh?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Members?: MemberUncheckedUpdateManyWithoutVARoleNestedInput
  }

  export type VirtualAirlineRoleCreateManyInput = {
    Id?: string
    VAId: string
    Name: string
    Permission: number
    IsDefaultNewRole: boolean
    Color: string
    PayPercent: Decimal | DecimalJsLike | number | string
    IsHidden: boolean
    RestrictLoadingVAJobsIntoNonVAAircraft: boolean
    RestrictLoadingNonVAJobsIntoVAAircraft: boolean
    PayWeekly: Decimal | DecimalJsLike | number | string
    PayPerFlightHour: Decimal | DecimalJsLike | number | string
    LastRefresh?: Date | string | null
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
  }

  export type VirtualAirlineRoleUpdateManyMutationInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    Permission?: IntFieldUpdateOperationsInput | number
    IsDefaultNewRole?: BoolFieldUpdateOperationsInput | boolean
    Color?: StringFieldUpdateOperationsInput | string
    PayPercent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    IsHidden?: BoolFieldUpdateOperationsInput | boolean
    RestrictLoadingVAJobsIntoNonVAAircraft?: BoolFieldUpdateOperationsInput | boolean
    RestrictLoadingNonVAJobsIntoVAAircraft?: BoolFieldUpdateOperationsInput | boolean
    PayWeekly?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    PayPerFlightHour?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    LastRefresh?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VirtualAirlineRoleUncheckedUpdateManyInput = {
    Id?: StringFieldUpdateOperationsInput | string
    VAId?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    Permission?: IntFieldUpdateOperationsInput | number
    IsDefaultNewRole?: BoolFieldUpdateOperationsInput | boolean
    Color?: StringFieldUpdateOperationsInput | string
    PayPercent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    IsHidden?: BoolFieldUpdateOperationsInput | boolean
    RestrictLoadingVAJobsIntoNonVAAircraft?: BoolFieldUpdateOperationsInput | boolean
    RestrictLoadingNonVAJobsIntoVAAircraft?: BoolFieldUpdateOperationsInput | boolean
    PayWeekly?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    PayPerFlightHour?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    LastRefresh?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorldCreateInput = {
    Id: string
    Name: string
    Slug: string
    Description?: string | null
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    VirtualAirlines?: VirtualAirlineCreateNestedManyWithoutWorldInput
  }

  export type WorldUncheckedCreateInput = {
    Id: string
    Name: string
    Slug: string
    Description?: string | null
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    VirtualAirlines?: VirtualAirlineUncheckedCreateNestedManyWithoutWorldInput
  }

  export type WorldUpdateInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    Slug?: StringFieldUpdateOperationsInput | string
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    VirtualAirlines?: VirtualAirlineUpdateManyWithoutWorldNestedInput
  }

  export type WorldUncheckedUpdateInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    Slug?: StringFieldUpdateOperationsInput | string
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    VirtualAirlines?: VirtualAirlineUncheckedUpdateManyWithoutWorldNestedInput
  }

  export type WorldCreateManyInput = {
    Id: string
    Name: string
    Slug: string
    Description?: string | null
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
  }

  export type WorldUpdateManyMutationInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    Slug?: StringFieldUpdateOperationsInput | string
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorldUncheckedUpdateManyInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    Slug?: StringFieldUpdateOperationsInput | string
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemberCreateInput = {
    Id?: string
    CompanyId: string
    CompanyName: string
    AirlineCode: string
    LastConnection?: Date | string | null
    Reputation: Decimal | DecimalJsLike | number | string
    CompanyCreationDate: Date | string
    CompanyLevel: number
    CompanyLevelXP: number
    TotalCargosTransportedLbs: number
    TotalPAXsTransported: number
    TotalEarnedCredits: Decimal | DecimalJsLike | number | string
    TotalSpentCredits: Decimal | DecimalJsLike | number | string
    NumberOfFlights: number
    FlightHours: Decimal | DecimalJsLike | number | string
    Color: string
    ReputationImpact: Decimal | DecimalJsLike | number | string
    LastVAFlightDate?: Date | string | null
    LastRefresh?: Date | string | null
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    VirtualAirline: VirtualAirlineCreateNestedOneWithoutMembersInput
    VARole: VirtualAirlineRoleCreateNestedOneWithoutMembersInput
  }

  export type MemberUncheckedCreateInput = {
    Id?: string
    VAId: string
    CompanyId: string
    CompanyName: string
    AirlineCode: string
    LastConnection?: Date | string | null
    Reputation: Decimal | DecimalJsLike | number | string
    CompanyCreationDate: Date | string
    CompanyLevel: number
    CompanyLevelXP: number
    VARoleId: string
    TotalCargosTransportedLbs: number
    TotalPAXsTransported: number
    TotalEarnedCredits: Decimal | DecimalJsLike | number | string
    TotalSpentCredits: Decimal | DecimalJsLike | number | string
    NumberOfFlights: number
    FlightHours: Decimal | DecimalJsLike | number | string
    Color: string
    ReputationImpact: Decimal | DecimalJsLike | number | string
    LastVAFlightDate?: Date | string | null
    LastRefresh?: Date | string | null
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
  }

  export type MemberUpdateInput = {
    Id?: StringFieldUpdateOperationsInput | string
    CompanyId?: StringFieldUpdateOperationsInput | string
    CompanyName?: StringFieldUpdateOperationsInput | string
    AirlineCode?: StringFieldUpdateOperationsInput | string
    LastConnection?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Reputation?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    CompanyCreationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    CompanyLevel?: IntFieldUpdateOperationsInput | number
    CompanyLevelXP?: IntFieldUpdateOperationsInput | number
    TotalCargosTransportedLbs?: IntFieldUpdateOperationsInput | number
    TotalPAXsTransported?: IntFieldUpdateOperationsInput | number
    TotalEarnedCredits?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    TotalSpentCredits?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    NumberOfFlights?: IntFieldUpdateOperationsInput | number
    FlightHours?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Color?: StringFieldUpdateOperationsInput | string
    ReputationImpact?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    LastVAFlightDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    LastRefresh?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    VirtualAirline?: VirtualAirlineUpdateOneRequiredWithoutMembersNestedInput
    VARole?: VirtualAirlineRoleUpdateOneRequiredWithoutMembersNestedInput
  }

  export type MemberUncheckedUpdateInput = {
    Id?: StringFieldUpdateOperationsInput | string
    VAId?: StringFieldUpdateOperationsInput | string
    CompanyId?: StringFieldUpdateOperationsInput | string
    CompanyName?: StringFieldUpdateOperationsInput | string
    AirlineCode?: StringFieldUpdateOperationsInput | string
    LastConnection?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Reputation?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    CompanyCreationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    CompanyLevel?: IntFieldUpdateOperationsInput | number
    CompanyLevelXP?: IntFieldUpdateOperationsInput | number
    VARoleId?: StringFieldUpdateOperationsInput | string
    TotalCargosTransportedLbs?: IntFieldUpdateOperationsInput | number
    TotalPAXsTransported?: IntFieldUpdateOperationsInput | number
    TotalEarnedCredits?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    TotalSpentCredits?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    NumberOfFlights?: IntFieldUpdateOperationsInput | number
    FlightHours?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Color?: StringFieldUpdateOperationsInput | string
    ReputationImpact?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    LastVAFlightDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    LastRefresh?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemberCreateManyInput = {
    Id?: string
    VAId: string
    CompanyId: string
    CompanyName: string
    AirlineCode: string
    LastConnection?: Date | string | null
    Reputation: Decimal | DecimalJsLike | number | string
    CompanyCreationDate: Date | string
    CompanyLevel: number
    CompanyLevelXP: number
    VARoleId: string
    TotalCargosTransportedLbs: number
    TotalPAXsTransported: number
    TotalEarnedCredits: Decimal | DecimalJsLike | number | string
    TotalSpentCredits: Decimal | DecimalJsLike | number | string
    NumberOfFlights: number
    FlightHours: Decimal | DecimalJsLike | number | string
    Color: string
    ReputationImpact: Decimal | DecimalJsLike | number | string
    LastVAFlightDate?: Date | string | null
    LastRefresh?: Date | string | null
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
  }

  export type MemberUpdateManyMutationInput = {
    Id?: StringFieldUpdateOperationsInput | string
    CompanyId?: StringFieldUpdateOperationsInput | string
    CompanyName?: StringFieldUpdateOperationsInput | string
    AirlineCode?: StringFieldUpdateOperationsInput | string
    LastConnection?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Reputation?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    CompanyCreationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    CompanyLevel?: IntFieldUpdateOperationsInput | number
    CompanyLevelXP?: IntFieldUpdateOperationsInput | number
    TotalCargosTransportedLbs?: IntFieldUpdateOperationsInput | number
    TotalPAXsTransported?: IntFieldUpdateOperationsInput | number
    TotalEarnedCredits?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    TotalSpentCredits?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    NumberOfFlights?: IntFieldUpdateOperationsInput | number
    FlightHours?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Color?: StringFieldUpdateOperationsInput | string
    ReputationImpact?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    LastVAFlightDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    LastRefresh?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemberUncheckedUpdateManyInput = {
    Id?: StringFieldUpdateOperationsInput | string
    VAId?: StringFieldUpdateOperationsInput | string
    CompanyId?: StringFieldUpdateOperationsInput | string
    CompanyName?: StringFieldUpdateOperationsInput | string
    AirlineCode?: StringFieldUpdateOperationsInput | string
    LastConnection?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Reputation?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    CompanyCreationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    CompanyLevel?: IntFieldUpdateOperationsInput | number
    CompanyLevelXP?: IntFieldUpdateOperationsInput | number
    VARoleId?: StringFieldUpdateOperationsInput | string
    TotalCargosTransportedLbs?: IntFieldUpdateOperationsInput | number
    TotalPAXsTransported?: IntFieldUpdateOperationsInput | number
    TotalEarnedCredits?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    TotalSpentCredits?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    NumberOfFlights?: IntFieldUpdateOperationsInput | number
    FlightHours?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Color?: StringFieldUpdateOperationsInput | string
    ReputationImpact?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    LastVAFlightDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    LastRefresh?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobCreateInput = {
    Id?: string
    IsEnabled?: boolean
    FirstRunCompleted?: boolean
    Type: $Enums.JobType
    Status?: $Enums.JobStatus
    CronExpression: $Enums.CronExpression
    Name: string
    Description?: string | null
    Parameters?: NullableJsonNullValueInput | InputJsonValue
    LastRunAt?: Date | string | null
    NextRunAt?: Date | string | null
    LastError?: string | null
    ExecutionCount?: number
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
  }

  export type JobUncheckedCreateInput = {
    Id?: string
    IsEnabled?: boolean
    FirstRunCompleted?: boolean
    Type: $Enums.JobType
    Status?: $Enums.JobStatus
    CronExpression: $Enums.CronExpression
    Name: string
    Description?: string | null
    Parameters?: NullableJsonNullValueInput | InputJsonValue
    LastRunAt?: Date | string | null
    NextRunAt?: Date | string | null
    LastError?: string | null
    ExecutionCount?: number
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
  }

  export type JobUpdateInput = {
    Id?: StringFieldUpdateOperationsInput | string
    IsEnabled?: BoolFieldUpdateOperationsInput | boolean
    FirstRunCompleted?: BoolFieldUpdateOperationsInput | boolean
    Type?: EnumJobTypeFieldUpdateOperationsInput | $Enums.JobType
    Status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    CronExpression?: EnumCronExpressionFieldUpdateOperationsInput | $Enums.CronExpression
    Name?: StringFieldUpdateOperationsInput | string
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Parameters?: NullableJsonNullValueInput | InputJsonValue
    LastRunAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    NextRunAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    LastError?: NullableStringFieldUpdateOperationsInput | string | null
    ExecutionCount?: IntFieldUpdateOperationsInput | number
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobUncheckedUpdateInput = {
    Id?: StringFieldUpdateOperationsInput | string
    IsEnabled?: BoolFieldUpdateOperationsInput | boolean
    FirstRunCompleted?: BoolFieldUpdateOperationsInput | boolean
    Type?: EnumJobTypeFieldUpdateOperationsInput | $Enums.JobType
    Status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    CronExpression?: EnumCronExpressionFieldUpdateOperationsInput | $Enums.CronExpression
    Name?: StringFieldUpdateOperationsInput | string
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Parameters?: NullableJsonNullValueInput | InputJsonValue
    LastRunAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    NextRunAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    LastError?: NullableStringFieldUpdateOperationsInput | string | null
    ExecutionCount?: IntFieldUpdateOperationsInput | number
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobCreateManyInput = {
    Id?: string
    IsEnabled?: boolean
    FirstRunCompleted?: boolean
    Type: $Enums.JobType
    Status?: $Enums.JobStatus
    CronExpression: $Enums.CronExpression
    Name: string
    Description?: string | null
    Parameters?: NullableJsonNullValueInput | InputJsonValue
    LastRunAt?: Date | string | null
    NextRunAt?: Date | string | null
    LastError?: string | null
    ExecutionCount?: number
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
  }

  export type JobUpdateManyMutationInput = {
    Id?: StringFieldUpdateOperationsInput | string
    IsEnabled?: BoolFieldUpdateOperationsInput | boolean
    FirstRunCompleted?: BoolFieldUpdateOperationsInput | boolean
    Type?: EnumJobTypeFieldUpdateOperationsInput | $Enums.JobType
    Status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    CronExpression?: EnumCronExpressionFieldUpdateOperationsInput | $Enums.CronExpression
    Name?: StringFieldUpdateOperationsInput | string
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Parameters?: NullableJsonNullValueInput | InputJsonValue
    LastRunAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    NextRunAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    LastError?: NullableStringFieldUpdateOperationsInput | string | null
    ExecutionCount?: IntFieldUpdateOperationsInput | number
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobUncheckedUpdateManyInput = {
    Id?: StringFieldUpdateOperationsInput | string
    IsEnabled?: BoolFieldUpdateOperationsInput | boolean
    FirstRunCompleted?: BoolFieldUpdateOperationsInput | boolean
    Type?: EnumJobTypeFieldUpdateOperationsInput | $Enums.JobType
    Status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    CronExpression?: EnumCronExpressionFieldUpdateOperationsInput | $Enums.CronExpression
    Name?: StringFieldUpdateOperationsInput | string
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Parameters?: NullableJsonNullValueInput | InputJsonValue
    LastRunAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    NextRunAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    LastError?: NullableStringFieldUpdateOperationsInput | string | null
    ExecutionCount?: IntFieldUpdateOperationsInput | number
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AppConfigCountOrderByAggregateInput = {
    Id?: SortOrder
    OnAirSyncEnabled?: SortOrder
    OnAirVASyncEnabled?: SortOrder
    OnAirVAMembersSyncEnabled?: SortOrder
    OnAirCompanySyncEnabled?: SortOrder
    DiscordServerInviteLink?: SortOrder
    DiscordServerInviteLinkEnabled?: SortOrder
    AcceptingNewMembers?: SortOrder
    DiscordAuthEnabled?: SortOrder
    LocalAuthEnabled?: SortOrder
    VirtualAirlineInitiated?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
  }

  export type AppConfigAvgOrderByAggregateInput = {
    Id?: SortOrder
  }

  export type AppConfigMaxOrderByAggregateInput = {
    Id?: SortOrder
    OnAirSyncEnabled?: SortOrder
    OnAirVASyncEnabled?: SortOrder
    OnAirVAMembersSyncEnabled?: SortOrder
    OnAirCompanySyncEnabled?: SortOrder
    DiscordServerInviteLink?: SortOrder
    DiscordServerInviteLinkEnabled?: SortOrder
    AcceptingNewMembers?: SortOrder
    DiscordAuthEnabled?: SortOrder
    LocalAuthEnabled?: SortOrder
    VirtualAirlineInitiated?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
  }

  export type AppConfigMinOrderByAggregateInput = {
    Id?: SortOrder
    OnAirSyncEnabled?: SortOrder
    OnAirVASyncEnabled?: SortOrder
    OnAirVAMembersSyncEnabled?: SortOrder
    OnAirCompanySyncEnabled?: SortOrder
    DiscordServerInviteLink?: SortOrder
    DiscordServerInviteLinkEnabled?: SortOrder
    AcceptingNewMembers?: SortOrder
    DiscordAuthEnabled?: SortOrder
    LocalAuthEnabled?: SortOrder
    VirtualAirlineInitiated?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
  }

  export type AppConfigSumOrderByAggregateInput = {
    Id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type RoleListRelationFilter = {
    every?: RoleWhereInput
    some?: RoleWhereInput
    none?: RoleWhereInput
  }

  export type UserPrivacySettingsNullableScalarRelationFilter = {
    is?: UserPrivacySettingsWhereInput | null
    isNot?: UserPrivacySettingsWhereInput | null
  }

  export type RoleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    Id?: SortOrder
    Username?: SortOrder
    Password?: SortOrder
    Email?: SortOrder
    FirstName?: SortOrder
    LastName?: SortOrder
    FirstLoginCompleted?: SortOrder
    IsOnline?: SortOrder
    IsBanned?: SortOrder
    BanReason?: SortOrder
    BanExpiresAt?: SortOrder
    IsVerified?: SortOrder
    LastLogin?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    Id?: SortOrder
    Username?: SortOrder
    Password?: SortOrder
    Email?: SortOrder
    FirstName?: SortOrder
    LastName?: SortOrder
    FirstLoginCompleted?: SortOrder
    IsOnline?: SortOrder
    IsBanned?: SortOrder
    BanReason?: SortOrder
    BanExpiresAt?: SortOrder
    IsVerified?: SortOrder
    LastLogin?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    Id?: SortOrder
    Username?: SortOrder
    Password?: SortOrder
    Email?: SortOrder
    FirstName?: SortOrder
    LastName?: SortOrder
    FirstLoginCompleted?: SortOrder
    IsOnline?: SortOrder
    IsBanned?: SortOrder
    BanReason?: SortOrder
    BanExpiresAt?: SortOrder
    IsVerified?: SortOrder
    LastLogin?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserPrivacySettingsCountOrderByAggregateInput = {
    Id?: SortOrder
    UserId?: SortOrder
    ShowOnlineStatus?: SortOrder
    ShowFirstName?: SortOrder
    ShowLastName?: SortOrder
    ShowLastNameInitial?: SortOrder
    ShowLastLogin?: SortOrder
    CreatedAt?: SortOrder
  }

  export type UserPrivacySettingsMaxOrderByAggregateInput = {
    Id?: SortOrder
    UserId?: SortOrder
    ShowOnlineStatus?: SortOrder
    ShowFirstName?: SortOrder
    ShowLastName?: SortOrder
    ShowLastNameInitial?: SortOrder
    ShowLastLogin?: SortOrder
    CreatedAt?: SortOrder
  }

  export type UserPrivacySettingsMinOrderByAggregateInput = {
    Id?: SortOrder
    UserId?: SortOrder
    ShowOnlineStatus?: SortOrder
    ShowFirstName?: SortOrder
    ShowLastName?: SortOrder
    ShowLastNameInitial?: SortOrder
    ShowLastLogin?: SortOrder
    CreatedAt?: SortOrder
  }

  export type PermissionListRelationFilter = {
    every?: PermissionWhereInput
    some?: PermissionWhereInput
    none?: PermissionWhereInput
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type PermissionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoleCountOrderByAggregateInput = {
    Id?: SortOrder
    Name?: SortOrder
    Description?: SortOrder
    Slug?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
  }

  export type RoleAvgOrderByAggregateInput = {
    Id?: SortOrder
  }

  export type RoleMaxOrderByAggregateInput = {
    Id?: SortOrder
    Name?: SortOrder
    Description?: SortOrder
    Slug?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
  }

  export type RoleMinOrderByAggregateInput = {
    Id?: SortOrder
    Name?: SortOrder
    Description?: SortOrder
    Slug?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
  }

  export type RoleSumOrderByAggregateInput = {
    Id?: SortOrder
  }

  export type PermissionCountOrderByAggregateInput = {
    Id?: SortOrder
    Name?: SortOrder
    Description?: SortOrder
    Slug?: SortOrder
    Entity?: SortOrder
    Action?: SortOrder
  }

  export type PermissionAvgOrderByAggregateInput = {
    Id?: SortOrder
  }

  export type PermissionMaxOrderByAggregateInput = {
    Id?: SortOrder
    Name?: SortOrder
    Description?: SortOrder
    Slug?: SortOrder
    Entity?: SortOrder
    Action?: SortOrder
  }

  export type PermissionMinOrderByAggregateInput = {
    Id?: SortOrder
    Name?: SortOrder
    Description?: SortOrder
    Slug?: SortOrder
    Entity?: SortOrder
    Action?: SortOrder
  }

  export type PermissionSumOrderByAggregateInput = {
    Id?: SortOrder
  }

  export type LiveryCountOrderByAggregateInput = {
    Id?: SortOrder
    Name?: SortOrder
    IsActive?: SortOrder
    DownloadCount?: SortOrder
    Image?: SortOrder
    Url?: SortOrder
    Description?: SortOrder
    DownloadUrl?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
  }

  export type LiveryAvgOrderByAggregateInput = {
    DownloadCount?: SortOrder
  }

  export type LiveryMaxOrderByAggregateInput = {
    Id?: SortOrder
    Name?: SortOrder
    IsActive?: SortOrder
    DownloadCount?: SortOrder
    Image?: SortOrder
    Url?: SortOrder
    Description?: SortOrder
    DownloadUrl?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
  }

  export type LiveryMinOrderByAggregateInput = {
    Id?: SortOrder
    Name?: SortOrder
    IsActive?: SortOrder
    DownloadCount?: SortOrder
    Image?: SortOrder
    Url?: SortOrder
    Description?: SortOrder
    DownloadUrl?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
  }

  export type LiverySumOrderByAggregateInput = {
    DownloadCount?: SortOrder
  }

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type WorldNullableScalarRelationFilter = {
    is?: WorldWhereInput | null
    isNot?: WorldWhereInput | null
  }

  export type VirtualAirlineRoleListRelationFilter = {
    every?: VirtualAirlineRoleWhereInput
    some?: VirtualAirlineRoleWhereInput
    none?: VirtualAirlineRoleWhereInput
  }

  export type MemberListRelationFilter = {
    every?: MemberWhereInput
    some?: MemberWhereInput
    none?: MemberWhereInput
  }

  export type VirtualAirlineRoleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MemberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VirtualAirlineCountOrderByAggregateInput = {
    Id?: SortOrder
    ApiKey?: SortOrder
    IsPrimary?: SortOrder
    Identifier?: SortOrder
    Name?: SortOrder
    Description?: SortOrder
    WorldId?: SortOrder
    LastDividendsDistribution?: SortOrder
    LastComputationDate?: SortOrder
    ComputedMemberCount?: SortOrder
    ComputedAircraftsCount?: SortOrder
    ComputedNumberOfFlights30Days?: SortOrder
    ComputedNumberOfFlightHours30Days?: SortOrder
    ComputedMostUsedAirports?: SortOrder
    LastConnection?: SortOrder
    LastReportDate?: SortOrder
    Reputation?: SortOrder
    CreationDate?: SortOrder
    DifficultyLevel?: SortOrder
    Level?: SortOrder
    LevelXP?: SortOrder
    TotalContractsCompleted?: SortOrder
    TotalContractsEarnedCredits?: SortOrder
    LastRefresh?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
  }

  export type VirtualAirlineAvgOrderByAggregateInput = {
    ComputedMemberCount?: SortOrder
    ComputedAircraftsCount?: SortOrder
    ComputedNumberOfFlights30Days?: SortOrder
    ComputedNumberOfFlightHours30Days?: SortOrder
    Reputation?: SortOrder
    DifficultyLevel?: SortOrder
    Level?: SortOrder
    LevelXP?: SortOrder
    TotalContractsCompleted?: SortOrder
    TotalContractsEarnedCredits?: SortOrder
  }

  export type VirtualAirlineMaxOrderByAggregateInput = {
    Id?: SortOrder
    ApiKey?: SortOrder
    IsPrimary?: SortOrder
    Identifier?: SortOrder
    Name?: SortOrder
    Description?: SortOrder
    WorldId?: SortOrder
    LastDividendsDistribution?: SortOrder
    LastComputationDate?: SortOrder
    ComputedMemberCount?: SortOrder
    ComputedAircraftsCount?: SortOrder
    ComputedNumberOfFlights30Days?: SortOrder
    ComputedNumberOfFlightHours30Days?: SortOrder
    ComputedMostUsedAirports?: SortOrder
    LastConnection?: SortOrder
    LastReportDate?: SortOrder
    Reputation?: SortOrder
    CreationDate?: SortOrder
    DifficultyLevel?: SortOrder
    Level?: SortOrder
    LevelXP?: SortOrder
    TotalContractsCompleted?: SortOrder
    TotalContractsEarnedCredits?: SortOrder
    LastRefresh?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
  }

  export type VirtualAirlineMinOrderByAggregateInput = {
    Id?: SortOrder
    ApiKey?: SortOrder
    IsPrimary?: SortOrder
    Identifier?: SortOrder
    Name?: SortOrder
    Description?: SortOrder
    WorldId?: SortOrder
    LastDividendsDistribution?: SortOrder
    LastComputationDate?: SortOrder
    ComputedMemberCount?: SortOrder
    ComputedAircraftsCount?: SortOrder
    ComputedNumberOfFlights30Days?: SortOrder
    ComputedNumberOfFlightHours30Days?: SortOrder
    ComputedMostUsedAirports?: SortOrder
    LastConnection?: SortOrder
    LastReportDate?: SortOrder
    Reputation?: SortOrder
    CreationDate?: SortOrder
    DifficultyLevel?: SortOrder
    Level?: SortOrder
    LevelXP?: SortOrder
    TotalContractsCompleted?: SortOrder
    TotalContractsEarnedCredits?: SortOrder
    LastRefresh?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
  }

  export type VirtualAirlineSumOrderByAggregateInput = {
    ComputedMemberCount?: SortOrder
    ComputedAircraftsCount?: SortOrder
    ComputedNumberOfFlights30Days?: SortOrder
    ComputedNumberOfFlightHours30Days?: SortOrder
    Reputation?: SortOrder
    DifficultyLevel?: SortOrder
    Level?: SortOrder
    LevelXP?: SortOrder
    TotalContractsCompleted?: SortOrder
    TotalContractsEarnedCredits?: SortOrder
  }

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type VirtualAirlineScalarRelationFilter = {
    is?: VirtualAirlineWhereInput
    isNot?: VirtualAirlineWhereInput
  }

  export type VirtualAirlineRoleCountOrderByAggregateInput = {
    Id?: SortOrder
    VAId?: SortOrder
    Name?: SortOrder
    Permission?: SortOrder
    IsDefaultNewRole?: SortOrder
    Color?: SortOrder
    PayPercent?: SortOrder
    IsHidden?: SortOrder
    RestrictLoadingVAJobsIntoNonVAAircraft?: SortOrder
    RestrictLoadingNonVAJobsIntoVAAircraft?: SortOrder
    PayWeekly?: SortOrder
    PayPerFlightHour?: SortOrder
    LastRefresh?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
  }

  export type VirtualAirlineRoleAvgOrderByAggregateInput = {
    Permission?: SortOrder
    PayPercent?: SortOrder
    PayWeekly?: SortOrder
    PayPerFlightHour?: SortOrder
  }

  export type VirtualAirlineRoleMaxOrderByAggregateInput = {
    Id?: SortOrder
    VAId?: SortOrder
    Name?: SortOrder
    Permission?: SortOrder
    IsDefaultNewRole?: SortOrder
    Color?: SortOrder
    PayPercent?: SortOrder
    IsHidden?: SortOrder
    RestrictLoadingVAJobsIntoNonVAAircraft?: SortOrder
    RestrictLoadingNonVAJobsIntoVAAircraft?: SortOrder
    PayWeekly?: SortOrder
    PayPerFlightHour?: SortOrder
    LastRefresh?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
  }

  export type VirtualAirlineRoleMinOrderByAggregateInput = {
    Id?: SortOrder
    VAId?: SortOrder
    Name?: SortOrder
    Permission?: SortOrder
    IsDefaultNewRole?: SortOrder
    Color?: SortOrder
    PayPercent?: SortOrder
    IsHidden?: SortOrder
    RestrictLoadingVAJobsIntoNonVAAircraft?: SortOrder
    RestrictLoadingNonVAJobsIntoVAAircraft?: SortOrder
    PayWeekly?: SortOrder
    PayPerFlightHour?: SortOrder
    LastRefresh?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
  }

  export type VirtualAirlineRoleSumOrderByAggregateInput = {
    Permission?: SortOrder
    PayPercent?: SortOrder
    PayWeekly?: SortOrder
    PayPerFlightHour?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type VirtualAirlineListRelationFilter = {
    every?: VirtualAirlineWhereInput
    some?: VirtualAirlineWhereInput
    none?: VirtualAirlineWhereInput
  }

  export type VirtualAirlineOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorldCountOrderByAggregateInput = {
    Id?: SortOrder
    Name?: SortOrder
    Slug?: SortOrder
    Description?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
  }

  export type WorldMaxOrderByAggregateInput = {
    Id?: SortOrder
    Name?: SortOrder
    Slug?: SortOrder
    Description?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
  }

  export type WorldMinOrderByAggregateInput = {
    Id?: SortOrder
    Name?: SortOrder
    Slug?: SortOrder
    Description?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
  }

  export type VirtualAirlineRoleScalarRelationFilter = {
    is?: VirtualAirlineRoleWhereInput
    isNot?: VirtualAirlineRoleWhereInput
  }

  export type MemberCountOrderByAggregateInput = {
    Id?: SortOrder
    VAId?: SortOrder
    CompanyId?: SortOrder
    CompanyName?: SortOrder
    AirlineCode?: SortOrder
    LastConnection?: SortOrder
    Reputation?: SortOrder
    CompanyCreationDate?: SortOrder
    CompanyLevel?: SortOrder
    CompanyLevelXP?: SortOrder
    VARoleId?: SortOrder
    TotalCargosTransportedLbs?: SortOrder
    TotalPAXsTransported?: SortOrder
    TotalEarnedCredits?: SortOrder
    TotalSpentCredits?: SortOrder
    NumberOfFlights?: SortOrder
    FlightHours?: SortOrder
    Color?: SortOrder
    ReputationImpact?: SortOrder
    LastVAFlightDate?: SortOrder
    LastRefresh?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
  }

  export type MemberAvgOrderByAggregateInput = {
    Reputation?: SortOrder
    CompanyLevel?: SortOrder
    CompanyLevelXP?: SortOrder
    TotalCargosTransportedLbs?: SortOrder
    TotalPAXsTransported?: SortOrder
    TotalEarnedCredits?: SortOrder
    TotalSpentCredits?: SortOrder
    NumberOfFlights?: SortOrder
    FlightHours?: SortOrder
    ReputationImpact?: SortOrder
  }

  export type MemberMaxOrderByAggregateInput = {
    Id?: SortOrder
    VAId?: SortOrder
    CompanyId?: SortOrder
    CompanyName?: SortOrder
    AirlineCode?: SortOrder
    LastConnection?: SortOrder
    Reputation?: SortOrder
    CompanyCreationDate?: SortOrder
    CompanyLevel?: SortOrder
    CompanyLevelXP?: SortOrder
    VARoleId?: SortOrder
    TotalCargosTransportedLbs?: SortOrder
    TotalPAXsTransported?: SortOrder
    TotalEarnedCredits?: SortOrder
    TotalSpentCredits?: SortOrder
    NumberOfFlights?: SortOrder
    FlightHours?: SortOrder
    Color?: SortOrder
    ReputationImpact?: SortOrder
    LastVAFlightDate?: SortOrder
    LastRefresh?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
  }

  export type MemberMinOrderByAggregateInput = {
    Id?: SortOrder
    VAId?: SortOrder
    CompanyId?: SortOrder
    CompanyName?: SortOrder
    AirlineCode?: SortOrder
    LastConnection?: SortOrder
    Reputation?: SortOrder
    CompanyCreationDate?: SortOrder
    CompanyLevel?: SortOrder
    CompanyLevelXP?: SortOrder
    VARoleId?: SortOrder
    TotalCargosTransportedLbs?: SortOrder
    TotalPAXsTransported?: SortOrder
    TotalEarnedCredits?: SortOrder
    TotalSpentCredits?: SortOrder
    NumberOfFlights?: SortOrder
    FlightHours?: SortOrder
    Color?: SortOrder
    ReputationImpact?: SortOrder
    LastVAFlightDate?: SortOrder
    LastRefresh?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
  }

  export type MemberSumOrderByAggregateInput = {
    Reputation?: SortOrder
    CompanyLevel?: SortOrder
    CompanyLevelXP?: SortOrder
    TotalCargosTransportedLbs?: SortOrder
    TotalPAXsTransported?: SortOrder
    TotalEarnedCredits?: SortOrder
    TotalSpentCredits?: SortOrder
    NumberOfFlights?: SortOrder
    FlightHours?: SortOrder
    ReputationImpact?: SortOrder
  }

  export type EnumJobTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.JobType | EnumJobTypeFieldRefInput<$PrismaModel>
    in?: $Enums.JobType[] | ListEnumJobTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.JobType[] | ListEnumJobTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumJobTypeFilter<$PrismaModel> | $Enums.JobType
  }

  export type EnumJobStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.JobStatus | EnumJobStatusFieldRefInput<$PrismaModel>
    in?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumJobStatusFilter<$PrismaModel> | $Enums.JobStatus
  }

  export type EnumCronExpressionFilter<$PrismaModel = never> = {
    equals?: $Enums.CronExpression | EnumCronExpressionFieldRefInput<$PrismaModel>
    in?: $Enums.CronExpression[] | ListEnumCronExpressionFieldRefInput<$PrismaModel>
    notIn?: $Enums.CronExpression[] | ListEnumCronExpressionFieldRefInput<$PrismaModel>
    not?: NestedEnumCronExpressionFilter<$PrismaModel> | $Enums.CronExpression
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type JobCountOrderByAggregateInput = {
    Id?: SortOrder
    IsEnabled?: SortOrder
    FirstRunCompleted?: SortOrder
    Type?: SortOrder
    Status?: SortOrder
    CronExpression?: SortOrder
    Name?: SortOrder
    Description?: SortOrder
    Parameters?: SortOrder
    LastRunAt?: SortOrder
    NextRunAt?: SortOrder
    LastError?: SortOrder
    ExecutionCount?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
  }

  export type JobAvgOrderByAggregateInput = {
    ExecutionCount?: SortOrder
  }

  export type JobMaxOrderByAggregateInput = {
    Id?: SortOrder
    IsEnabled?: SortOrder
    FirstRunCompleted?: SortOrder
    Type?: SortOrder
    Status?: SortOrder
    CronExpression?: SortOrder
    Name?: SortOrder
    Description?: SortOrder
    LastRunAt?: SortOrder
    NextRunAt?: SortOrder
    LastError?: SortOrder
    ExecutionCount?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
  }

  export type JobMinOrderByAggregateInput = {
    Id?: SortOrder
    IsEnabled?: SortOrder
    FirstRunCompleted?: SortOrder
    Type?: SortOrder
    Status?: SortOrder
    CronExpression?: SortOrder
    Name?: SortOrder
    Description?: SortOrder
    LastRunAt?: SortOrder
    NextRunAt?: SortOrder
    LastError?: SortOrder
    ExecutionCount?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
  }

  export type JobSumOrderByAggregateInput = {
    ExecutionCount?: SortOrder
  }

  export type EnumJobTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JobType | EnumJobTypeFieldRefInput<$PrismaModel>
    in?: $Enums.JobType[] | ListEnumJobTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.JobType[] | ListEnumJobTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumJobTypeWithAggregatesFilter<$PrismaModel> | $Enums.JobType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumJobTypeFilter<$PrismaModel>
    _max?: NestedEnumJobTypeFilter<$PrismaModel>
  }

  export type EnumJobStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JobStatus | EnumJobStatusFieldRefInput<$PrismaModel>
    in?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumJobStatusWithAggregatesFilter<$PrismaModel> | $Enums.JobStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumJobStatusFilter<$PrismaModel>
    _max?: NestedEnumJobStatusFilter<$PrismaModel>
  }

  export type EnumCronExpressionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CronExpression | EnumCronExpressionFieldRefInput<$PrismaModel>
    in?: $Enums.CronExpression[] | ListEnumCronExpressionFieldRefInput<$PrismaModel>
    notIn?: $Enums.CronExpression[] | ListEnumCronExpressionFieldRefInput<$PrismaModel>
    not?: NestedEnumCronExpressionWithAggregatesFilter<$PrismaModel> | $Enums.CronExpression
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCronExpressionFilter<$PrismaModel>
    _max?: NestedEnumCronExpressionFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type RoleCreateNestedManyWithoutUsersInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput> | RoleCreateWithoutUsersInput[] | RoleUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput | RoleCreateOrConnectWithoutUsersInput[]
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
  }

  export type UserPrivacySettingsCreateNestedOneWithoutUserInput = {
    create?: XOR<UserPrivacySettingsCreateWithoutUserInput, UserPrivacySettingsUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserPrivacySettingsCreateOrConnectWithoutUserInput
    connect?: UserPrivacySettingsWhereUniqueInput
  }

  export type RoleUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput> | RoleCreateWithoutUsersInput[] | RoleUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput | RoleCreateOrConnectWithoutUsersInput[]
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
  }

  export type UserPrivacySettingsUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<UserPrivacySettingsCreateWithoutUserInput, UserPrivacySettingsUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserPrivacySettingsCreateOrConnectWithoutUserInput
    connect?: UserPrivacySettingsWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type RoleUpdateManyWithoutUsersNestedInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput> | RoleCreateWithoutUsersInput[] | RoleUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput | RoleCreateOrConnectWithoutUsersInput[]
    upsert?: RoleUpsertWithWhereUniqueWithoutUsersInput | RoleUpsertWithWhereUniqueWithoutUsersInput[]
    set?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    disconnect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    delete?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    update?: RoleUpdateWithWhereUniqueWithoutUsersInput | RoleUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: RoleUpdateManyWithWhereWithoutUsersInput | RoleUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: RoleScalarWhereInput | RoleScalarWhereInput[]
  }

  export type UserPrivacySettingsUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserPrivacySettingsCreateWithoutUserInput, UserPrivacySettingsUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserPrivacySettingsCreateOrConnectWithoutUserInput
    upsert?: UserPrivacySettingsUpsertWithoutUserInput
    disconnect?: UserPrivacySettingsWhereInput | boolean
    delete?: UserPrivacySettingsWhereInput | boolean
    connect?: UserPrivacySettingsWhereUniqueInput
    update?: XOR<XOR<UserPrivacySettingsUpdateToOneWithWhereWithoutUserInput, UserPrivacySettingsUpdateWithoutUserInput>, UserPrivacySettingsUncheckedUpdateWithoutUserInput>
  }

  export type RoleUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput> | RoleCreateWithoutUsersInput[] | RoleUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput | RoleCreateOrConnectWithoutUsersInput[]
    upsert?: RoleUpsertWithWhereUniqueWithoutUsersInput | RoleUpsertWithWhereUniqueWithoutUsersInput[]
    set?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    disconnect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    delete?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    update?: RoleUpdateWithWhereUniqueWithoutUsersInput | RoleUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: RoleUpdateManyWithWhereWithoutUsersInput | RoleUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: RoleScalarWhereInput | RoleScalarWhereInput[]
  }

  export type UserPrivacySettingsUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserPrivacySettingsCreateWithoutUserInput, UserPrivacySettingsUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserPrivacySettingsCreateOrConnectWithoutUserInput
    upsert?: UserPrivacySettingsUpsertWithoutUserInput
    disconnect?: UserPrivacySettingsWhereInput | boolean
    delete?: UserPrivacySettingsWhereInput | boolean
    connect?: UserPrivacySettingsWhereUniqueInput
    update?: XOR<XOR<UserPrivacySettingsUpdateToOneWithWhereWithoutUserInput, UserPrivacySettingsUpdateWithoutUserInput>, UserPrivacySettingsUncheckedUpdateWithoutUserInput>
  }

  export type UserCreateNestedOneWithoutPrivacySettingsInput = {
    create?: XOR<UserCreateWithoutPrivacySettingsInput, UserUncheckedCreateWithoutPrivacySettingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPrivacySettingsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutPrivacySettingsNestedInput = {
    create?: XOR<UserCreateWithoutPrivacySettingsInput, UserUncheckedCreateWithoutPrivacySettingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPrivacySettingsInput
    upsert?: UserUpsertWithoutPrivacySettingsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPrivacySettingsInput, UserUpdateWithoutPrivacySettingsInput>, UserUncheckedUpdateWithoutPrivacySettingsInput>
  }

  export type PermissionCreateNestedManyWithoutRolesInput = {
    create?: XOR<PermissionCreateWithoutRolesInput, PermissionUncheckedCreateWithoutRolesInput> | PermissionCreateWithoutRolesInput[] | PermissionUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: PermissionCreateOrConnectWithoutRolesInput | PermissionCreateOrConnectWithoutRolesInput[]
    connect?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
  }

  export type UserCreateNestedManyWithoutRolesInput = {
    create?: XOR<UserCreateWithoutRolesInput, UserUncheckedCreateWithoutRolesInput> | UserCreateWithoutRolesInput[] | UserUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRolesInput | UserCreateOrConnectWithoutRolesInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type PermissionUncheckedCreateNestedManyWithoutRolesInput = {
    create?: XOR<PermissionCreateWithoutRolesInput, PermissionUncheckedCreateWithoutRolesInput> | PermissionCreateWithoutRolesInput[] | PermissionUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: PermissionCreateOrConnectWithoutRolesInput | PermissionCreateOrConnectWithoutRolesInput[]
    connect?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutRolesInput = {
    create?: XOR<UserCreateWithoutRolesInput, UserUncheckedCreateWithoutRolesInput> | UserCreateWithoutRolesInput[] | UserUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRolesInput | UserCreateOrConnectWithoutRolesInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type PermissionUpdateManyWithoutRolesNestedInput = {
    create?: XOR<PermissionCreateWithoutRolesInput, PermissionUncheckedCreateWithoutRolesInput> | PermissionCreateWithoutRolesInput[] | PermissionUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: PermissionCreateOrConnectWithoutRolesInput | PermissionCreateOrConnectWithoutRolesInput[]
    upsert?: PermissionUpsertWithWhereUniqueWithoutRolesInput | PermissionUpsertWithWhereUniqueWithoutRolesInput[]
    set?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    disconnect?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    delete?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    connect?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    update?: PermissionUpdateWithWhereUniqueWithoutRolesInput | PermissionUpdateWithWhereUniqueWithoutRolesInput[]
    updateMany?: PermissionUpdateManyWithWhereWithoutRolesInput | PermissionUpdateManyWithWhereWithoutRolesInput[]
    deleteMany?: PermissionScalarWhereInput | PermissionScalarWhereInput[]
  }

  export type UserUpdateManyWithoutRolesNestedInput = {
    create?: XOR<UserCreateWithoutRolesInput, UserUncheckedCreateWithoutRolesInput> | UserCreateWithoutRolesInput[] | UserUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRolesInput | UserCreateOrConnectWithoutRolesInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRolesInput | UserUpsertWithWhereUniqueWithoutRolesInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRolesInput | UserUpdateWithWhereUniqueWithoutRolesInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRolesInput | UserUpdateManyWithWhereWithoutRolesInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type PermissionUncheckedUpdateManyWithoutRolesNestedInput = {
    create?: XOR<PermissionCreateWithoutRolesInput, PermissionUncheckedCreateWithoutRolesInput> | PermissionCreateWithoutRolesInput[] | PermissionUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: PermissionCreateOrConnectWithoutRolesInput | PermissionCreateOrConnectWithoutRolesInput[]
    upsert?: PermissionUpsertWithWhereUniqueWithoutRolesInput | PermissionUpsertWithWhereUniqueWithoutRolesInput[]
    set?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    disconnect?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    delete?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    connect?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    update?: PermissionUpdateWithWhereUniqueWithoutRolesInput | PermissionUpdateWithWhereUniqueWithoutRolesInput[]
    updateMany?: PermissionUpdateManyWithWhereWithoutRolesInput | PermissionUpdateManyWithWhereWithoutRolesInput[]
    deleteMany?: PermissionScalarWhereInput | PermissionScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutRolesNestedInput = {
    create?: XOR<UserCreateWithoutRolesInput, UserUncheckedCreateWithoutRolesInput> | UserCreateWithoutRolesInput[] | UserUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRolesInput | UserCreateOrConnectWithoutRolesInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRolesInput | UserUpsertWithWhereUniqueWithoutRolesInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRolesInput | UserUpdateWithWhereUniqueWithoutRolesInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRolesInput | UserUpdateManyWithWhereWithoutRolesInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type RoleCreateNestedManyWithoutPermissionsInput = {
    create?: XOR<RoleCreateWithoutPermissionsInput, RoleUncheckedCreateWithoutPermissionsInput> | RoleCreateWithoutPermissionsInput[] | RoleUncheckedCreateWithoutPermissionsInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutPermissionsInput | RoleCreateOrConnectWithoutPermissionsInput[]
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
  }

  export type RoleUncheckedCreateNestedManyWithoutPermissionsInput = {
    create?: XOR<RoleCreateWithoutPermissionsInput, RoleUncheckedCreateWithoutPermissionsInput> | RoleCreateWithoutPermissionsInput[] | RoleUncheckedCreateWithoutPermissionsInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutPermissionsInput | RoleCreateOrConnectWithoutPermissionsInput[]
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
  }

  export type RoleUpdateManyWithoutPermissionsNestedInput = {
    create?: XOR<RoleCreateWithoutPermissionsInput, RoleUncheckedCreateWithoutPermissionsInput> | RoleCreateWithoutPermissionsInput[] | RoleUncheckedCreateWithoutPermissionsInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutPermissionsInput | RoleCreateOrConnectWithoutPermissionsInput[]
    upsert?: RoleUpsertWithWhereUniqueWithoutPermissionsInput | RoleUpsertWithWhereUniqueWithoutPermissionsInput[]
    set?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    disconnect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    delete?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    update?: RoleUpdateWithWhereUniqueWithoutPermissionsInput | RoleUpdateWithWhereUniqueWithoutPermissionsInput[]
    updateMany?: RoleUpdateManyWithWhereWithoutPermissionsInput | RoleUpdateManyWithWhereWithoutPermissionsInput[]
    deleteMany?: RoleScalarWhereInput | RoleScalarWhereInput[]
  }

  export type RoleUncheckedUpdateManyWithoutPermissionsNestedInput = {
    create?: XOR<RoleCreateWithoutPermissionsInput, RoleUncheckedCreateWithoutPermissionsInput> | RoleCreateWithoutPermissionsInput[] | RoleUncheckedCreateWithoutPermissionsInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutPermissionsInput | RoleCreateOrConnectWithoutPermissionsInput[]
    upsert?: RoleUpsertWithWhereUniqueWithoutPermissionsInput | RoleUpsertWithWhereUniqueWithoutPermissionsInput[]
    set?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    disconnect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    delete?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    update?: RoleUpdateWithWhereUniqueWithoutPermissionsInput | RoleUpdateWithWhereUniqueWithoutPermissionsInput[]
    updateMany?: RoleUpdateManyWithWhereWithoutPermissionsInput | RoleUpdateManyWithWhereWithoutPermissionsInput[]
    deleteMany?: RoleScalarWhereInput | RoleScalarWhereInput[]
  }

  export type WorldCreateNestedOneWithoutVirtualAirlinesInput = {
    create?: XOR<WorldCreateWithoutVirtualAirlinesInput, WorldUncheckedCreateWithoutVirtualAirlinesInput>
    connectOrCreate?: WorldCreateOrConnectWithoutVirtualAirlinesInput
    connect?: WorldWhereUniqueInput
  }

  export type VirtualAirlineRoleCreateNestedManyWithoutVirtualAirlineInput = {
    create?: XOR<VirtualAirlineRoleCreateWithoutVirtualAirlineInput, VirtualAirlineRoleUncheckedCreateWithoutVirtualAirlineInput> | VirtualAirlineRoleCreateWithoutVirtualAirlineInput[] | VirtualAirlineRoleUncheckedCreateWithoutVirtualAirlineInput[]
    connectOrCreate?: VirtualAirlineRoleCreateOrConnectWithoutVirtualAirlineInput | VirtualAirlineRoleCreateOrConnectWithoutVirtualAirlineInput[]
    createMany?: VirtualAirlineRoleCreateManyVirtualAirlineInputEnvelope
    connect?: VirtualAirlineRoleWhereUniqueInput | VirtualAirlineRoleWhereUniqueInput[]
  }

  export type MemberCreateNestedManyWithoutVirtualAirlineInput = {
    create?: XOR<MemberCreateWithoutVirtualAirlineInput, MemberUncheckedCreateWithoutVirtualAirlineInput> | MemberCreateWithoutVirtualAirlineInput[] | MemberUncheckedCreateWithoutVirtualAirlineInput[]
    connectOrCreate?: MemberCreateOrConnectWithoutVirtualAirlineInput | MemberCreateOrConnectWithoutVirtualAirlineInput[]
    createMany?: MemberCreateManyVirtualAirlineInputEnvelope
    connect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
  }

  export type VirtualAirlineRoleUncheckedCreateNestedManyWithoutVirtualAirlineInput = {
    create?: XOR<VirtualAirlineRoleCreateWithoutVirtualAirlineInput, VirtualAirlineRoleUncheckedCreateWithoutVirtualAirlineInput> | VirtualAirlineRoleCreateWithoutVirtualAirlineInput[] | VirtualAirlineRoleUncheckedCreateWithoutVirtualAirlineInput[]
    connectOrCreate?: VirtualAirlineRoleCreateOrConnectWithoutVirtualAirlineInput | VirtualAirlineRoleCreateOrConnectWithoutVirtualAirlineInput[]
    createMany?: VirtualAirlineRoleCreateManyVirtualAirlineInputEnvelope
    connect?: VirtualAirlineRoleWhereUniqueInput | VirtualAirlineRoleWhereUniqueInput[]
  }

  export type MemberUncheckedCreateNestedManyWithoutVirtualAirlineInput = {
    create?: XOR<MemberCreateWithoutVirtualAirlineInput, MemberUncheckedCreateWithoutVirtualAirlineInput> | MemberCreateWithoutVirtualAirlineInput[] | MemberUncheckedCreateWithoutVirtualAirlineInput[]
    connectOrCreate?: MemberCreateOrConnectWithoutVirtualAirlineInput | MemberCreateOrConnectWithoutVirtualAirlineInput[]
    createMany?: MemberCreateManyVirtualAirlineInputEnvelope
    connect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type WorldUpdateOneWithoutVirtualAirlinesNestedInput = {
    create?: XOR<WorldCreateWithoutVirtualAirlinesInput, WorldUncheckedCreateWithoutVirtualAirlinesInput>
    connectOrCreate?: WorldCreateOrConnectWithoutVirtualAirlinesInput
    upsert?: WorldUpsertWithoutVirtualAirlinesInput
    disconnect?: WorldWhereInput | boolean
    delete?: WorldWhereInput | boolean
    connect?: WorldWhereUniqueInput
    update?: XOR<XOR<WorldUpdateToOneWithWhereWithoutVirtualAirlinesInput, WorldUpdateWithoutVirtualAirlinesInput>, WorldUncheckedUpdateWithoutVirtualAirlinesInput>
  }

  export type VirtualAirlineRoleUpdateManyWithoutVirtualAirlineNestedInput = {
    create?: XOR<VirtualAirlineRoleCreateWithoutVirtualAirlineInput, VirtualAirlineRoleUncheckedCreateWithoutVirtualAirlineInput> | VirtualAirlineRoleCreateWithoutVirtualAirlineInput[] | VirtualAirlineRoleUncheckedCreateWithoutVirtualAirlineInput[]
    connectOrCreate?: VirtualAirlineRoleCreateOrConnectWithoutVirtualAirlineInput | VirtualAirlineRoleCreateOrConnectWithoutVirtualAirlineInput[]
    upsert?: VirtualAirlineRoleUpsertWithWhereUniqueWithoutVirtualAirlineInput | VirtualAirlineRoleUpsertWithWhereUniqueWithoutVirtualAirlineInput[]
    createMany?: VirtualAirlineRoleCreateManyVirtualAirlineInputEnvelope
    set?: VirtualAirlineRoleWhereUniqueInput | VirtualAirlineRoleWhereUniqueInput[]
    disconnect?: VirtualAirlineRoleWhereUniqueInput | VirtualAirlineRoleWhereUniqueInput[]
    delete?: VirtualAirlineRoleWhereUniqueInput | VirtualAirlineRoleWhereUniqueInput[]
    connect?: VirtualAirlineRoleWhereUniqueInput | VirtualAirlineRoleWhereUniqueInput[]
    update?: VirtualAirlineRoleUpdateWithWhereUniqueWithoutVirtualAirlineInput | VirtualAirlineRoleUpdateWithWhereUniqueWithoutVirtualAirlineInput[]
    updateMany?: VirtualAirlineRoleUpdateManyWithWhereWithoutVirtualAirlineInput | VirtualAirlineRoleUpdateManyWithWhereWithoutVirtualAirlineInput[]
    deleteMany?: VirtualAirlineRoleScalarWhereInput | VirtualAirlineRoleScalarWhereInput[]
  }

  export type MemberUpdateManyWithoutVirtualAirlineNestedInput = {
    create?: XOR<MemberCreateWithoutVirtualAirlineInput, MemberUncheckedCreateWithoutVirtualAirlineInput> | MemberCreateWithoutVirtualAirlineInput[] | MemberUncheckedCreateWithoutVirtualAirlineInput[]
    connectOrCreate?: MemberCreateOrConnectWithoutVirtualAirlineInput | MemberCreateOrConnectWithoutVirtualAirlineInput[]
    upsert?: MemberUpsertWithWhereUniqueWithoutVirtualAirlineInput | MemberUpsertWithWhereUniqueWithoutVirtualAirlineInput[]
    createMany?: MemberCreateManyVirtualAirlineInputEnvelope
    set?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    disconnect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    delete?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    connect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    update?: MemberUpdateWithWhereUniqueWithoutVirtualAirlineInput | MemberUpdateWithWhereUniqueWithoutVirtualAirlineInput[]
    updateMany?: MemberUpdateManyWithWhereWithoutVirtualAirlineInput | MemberUpdateManyWithWhereWithoutVirtualAirlineInput[]
    deleteMany?: MemberScalarWhereInput | MemberScalarWhereInput[]
  }

  export type VirtualAirlineRoleUncheckedUpdateManyWithoutVirtualAirlineNestedInput = {
    create?: XOR<VirtualAirlineRoleCreateWithoutVirtualAirlineInput, VirtualAirlineRoleUncheckedCreateWithoutVirtualAirlineInput> | VirtualAirlineRoleCreateWithoutVirtualAirlineInput[] | VirtualAirlineRoleUncheckedCreateWithoutVirtualAirlineInput[]
    connectOrCreate?: VirtualAirlineRoleCreateOrConnectWithoutVirtualAirlineInput | VirtualAirlineRoleCreateOrConnectWithoutVirtualAirlineInput[]
    upsert?: VirtualAirlineRoleUpsertWithWhereUniqueWithoutVirtualAirlineInput | VirtualAirlineRoleUpsertWithWhereUniqueWithoutVirtualAirlineInput[]
    createMany?: VirtualAirlineRoleCreateManyVirtualAirlineInputEnvelope
    set?: VirtualAirlineRoleWhereUniqueInput | VirtualAirlineRoleWhereUniqueInput[]
    disconnect?: VirtualAirlineRoleWhereUniqueInput | VirtualAirlineRoleWhereUniqueInput[]
    delete?: VirtualAirlineRoleWhereUniqueInput | VirtualAirlineRoleWhereUniqueInput[]
    connect?: VirtualAirlineRoleWhereUniqueInput | VirtualAirlineRoleWhereUniqueInput[]
    update?: VirtualAirlineRoleUpdateWithWhereUniqueWithoutVirtualAirlineInput | VirtualAirlineRoleUpdateWithWhereUniqueWithoutVirtualAirlineInput[]
    updateMany?: VirtualAirlineRoleUpdateManyWithWhereWithoutVirtualAirlineInput | VirtualAirlineRoleUpdateManyWithWhereWithoutVirtualAirlineInput[]
    deleteMany?: VirtualAirlineRoleScalarWhereInput | VirtualAirlineRoleScalarWhereInput[]
  }

  export type MemberUncheckedUpdateManyWithoutVirtualAirlineNestedInput = {
    create?: XOR<MemberCreateWithoutVirtualAirlineInput, MemberUncheckedCreateWithoutVirtualAirlineInput> | MemberCreateWithoutVirtualAirlineInput[] | MemberUncheckedCreateWithoutVirtualAirlineInput[]
    connectOrCreate?: MemberCreateOrConnectWithoutVirtualAirlineInput | MemberCreateOrConnectWithoutVirtualAirlineInput[]
    upsert?: MemberUpsertWithWhereUniqueWithoutVirtualAirlineInput | MemberUpsertWithWhereUniqueWithoutVirtualAirlineInput[]
    createMany?: MemberCreateManyVirtualAirlineInputEnvelope
    set?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    disconnect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    delete?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    connect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    update?: MemberUpdateWithWhereUniqueWithoutVirtualAirlineInput | MemberUpdateWithWhereUniqueWithoutVirtualAirlineInput[]
    updateMany?: MemberUpdateManyWithWhereWithoutVirtualAirlineInput | MemberUpdateManyWithWhereWithoutVirtualAirlineInput[]
    deleteMany?: MemberScalarWhereInput | MemberScalarWhereInput[]
  }

  export type VirtualAirlineCreateNestedOneWithoutVARolesInput = {
    create?: XOR<VirtualAirlineCreateWithoutVARolesInput, VirtualAirlineUncheckedCreateWithoutVARolesInput>
    connectOrCreate?: VirtualAirlineCreateOrConnectWithoutVARolesInput
    connect?: VirtualAirlineWhereUniqueInput
  }

  export type MemberCreateNestedManyWithoutVARoleInput = {
    create?: XOR<MemberCreateWithoutVARoleInput, MemberUncheckedCreateWithoutVARoleInput> | MemberCreateWithoutVARoleInput[] | MemberUncheckedCreateWithoutVARoleInput[]
    connectOrCreate?: MemberCreateOrConnectWithoutVARoleInput | MemberCreateOrConnectWithoutVARoleInput[]
    createMany?: MemberCreateManyVARoleInputEnvelope
    connect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
  }

  export type MemberUncheckedCreateNestedManyWithoutVARoleInput = {
    create?: XOR<MemberCreateWithoutVARoleInput, MemberUncheckedCreateWithoutVARoleInput> | MemberCreateWithoutVARoleInput[] | MemberUncheckedCreateWithoutVARoleInput[]
    connectOrCreate?: MemberCreateOrConnectWithoutVARoleInput | MemberCreateOrConnectWithoutVARoleInput[]
    createMany?: MemberCreateManyVARoleInputEnvelope
    connect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type VirtualAirlineUpdateOneRequiredWithoutVARolesNestedInput = {
    create?: XOR<VirtualAirlineCreateWithoutVARolesInput, VirtualAirlineUncheckedCreateWithoutVARolesInput>
    connectOrCreate?: VirtualAirlineCreateOrConnectWithoutVARolesInput
    upsert?: VirtualAirlineUpsertWithoutVARolesInput
    connect?: VirtualAirlineWhereUniqueInput
    update?: XOR<XOR<VirtualAirlineUpdateToOneWithWhereWithoutVARolesInput, VirtualAirlineUpdateWithoutVARolesInput>, VirtualAirlineUncheckedUpdateWithoutVARolesInput>
  }

  export type MemberUpdateManyWithoutVARoleNestedInput = {
    create?: XOR<MemberCreateWithoutVARoleInput, MemberUncheckedCreateWithoutVARoleInput> | MemberCreateWithoutVARoleInput[] | MemberUncheckedCreateWithoutVARoleInput[]
    connectOrCreate?: MemberCreateOrConnectWithoutVARoleInput | MemberCreateOrConnectWithoutVARoleInput[]
    upsert?: MemberUpsertWithWhereUniqueWithoutVARoleInput | MemberUpsertWithWhereUniqueWithoutVARoleInput[]
    createMany?: MemberCreateManyVARoleInputEnvelope
    set?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    disconnect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    delete?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    connect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    update?: MemberUpdateWithWhereUniqueWithoutVARoleInput | MemberUpdateWithWhereUniqueWithoutVARoleInput[]
    updateMany?: MemberUpdateManyWithWhereWithoutVARoleInput | MemberUpdateManyWithWhereWithoutVARoleInput[]
    deleteMany?: MemberScalarWhereInput | MemberScalarWhereInput[]
  }

  export type MemberUncheckedUpdateManyWithoutVARoleNestedInput = {
    create?: XOR<MemberCreateWithoutVARoleInput, MemberUncheckedCreateWithoutVARoleInput> | MemberCreateWithoutVARoleInput[] | MemberUncheckedCreateWithoutVARoleInput[]
    connectOrCreate?: MemberCreateOrConnectWithoutVARoleInput | MemberCreateOrConnectWithoutVARoleInput[]
    upsert?: MemberUpsertWithWhereUniqueWithoutVARoleInput | MemberUpsertWithWhereUniqueWithoutVARoleInput[]
    createMany?: MemberCreateManyVARoleInputEnvelope
    set?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    disconnect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    delete?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    connect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    update?: MemberUpdateWithWhereUniqueWithoutVARoleInput | MemberUpdateWithWhereUniqueWithoutVARoleInput[]
    updateMany?: MemberUpdateManyWithWhereWithoutVARoleInput | MemberUpdateManyWithWhereWithoutVARoleInput[]
    deleteMany?: MemberScalarWhereInput | MemberScalarWhereInput[]
  }

  export type VirtualAirlineCreateNestedManyWithoutWorldInput = {
    create?: XOR<VirtualAirlineCreateWithoutWorldInput, VirtualAirlineUncheckedCreateWithoutWorldInput> | VirtualAirlineCreateWithoutWorldInput[] | VirtualAirlineUncheckedCreateWithoutWorldInput[]
    connectOrCreate?: VirtualAirlineCreateOrConnectWithoutWorldInput | VirtualAirlineCreateOrConnectWithoutWorldInput[]
    createMany?: VirtualAirlineCreateManyWorldInputEnvelope
    connect?: VirtualAirlineWhereUniqueInput | VirtualAirlineWhereUniqueInput[]
  }

  export type VirtualAirlineUncheckedCreateNestedManyWithoutWorldInput = {
    create?: XOR<VirtualAirlineCreateWithoutWorldInput, VirtualAirlineUncheckedCreateWithoutWorldInput> | VirtualAirlineCreateWithoutWorldInput[] | VirtualAirlineUncheckedCreateWithoutWorldInput[]
    connectOrCreate?: VirtualAirlineCreateOrConnectWithoutWorldInput | VirtualAirlineCreateOrConnectWithoutWorldInput[]
    createMany?: VirtualAirlineCreateManyWorldInputEnvelope
    connect?: VirtualAirlineWhereUniqueInput | VirtualAirlineWhereUniqueInput[]
  }

  export type VirtualAirlineUpdateManyWithoutWorldNestedInput = {
    create?: XOR<VirtualAirlineCreateWithoutWorldInput, VirtualAirlineUncheckedCreateWithoutWorldInput> | VirtualAirlineCreateWithoutWorldInput[] | VirtualAirlineUncheckedCreateWithoutWorldInput[]
    connectOrCreate?: VirtualAirlineCreateOrConnectWithoutWorldInput | VirtualAirlineCreateOrConnectWithoutWorldInput[]
    upsert?: VirtualAirlineUpsertWithWhereUniqueWithoutWorldInput | VirtualAirlineUpsertWithWhereUniqueWithoutWorldInput[]
    createMany?: VirtualAirlineCreateManyWorldInputEnvelope
    set?: VirtualAirlineWhereUniqueInput | VirtualAirlineWhereUniqueInput[]
    disconnect?: VirtualAirlineWhereUniqueInput | VirtualAirlineWhereUniqueInput[]
    delete?: VirtualAirlineWhereUniqueInput | VirtualAirlineWhereUniqueInput[]
    connect?: VirtualAirlineWhereUniqueInput | VirtualAirlineWhereUniqueInput[]
    update?: VirtualAirlineUpdateWithWhereUniqueWithoutWorldInput | VirtualAirlineUpdateWithWhereUniqueWithoutWorldInput[]
    updateMany?: VirtualAirlineUpdateManyWithWhereWithoutWorldInput | VirtualAirlineUpdateManyWithWhereWithoutWorldInput[]
    deleteMany?: VirtualAirlineScalarWhereInput | VirtualAirlineScalarWhereInput[]
  }

  export type VirtualAirlineUncheckedUpdateManyWithoutWorldNestedInput = {
    create?: XOR<VirtualAirlineCreateWithoutWorldInput, VirtualAirlineUncheckedCreateWithoutWorldInput> | VirtualAirlineCreateWithoutWorldInput[] | VirtualAirlineUncheckedCreateWithoutWorldInput[]
    connectOrCreate?: VirtualAirlineCreateOrConnectWithoutWorldInput | VirtualAirlineCreateOrConnectWithoutWorldInput[]
    upsert?: VirtualAirlineUpsertWithWhereUniqueWithoutWorldInput | VirtualAirlineUpsertWithWhereUniqueWithoutWorldInput[]
    createMany?: VirtualAirlineCreateManyWorldInputEnvelope
    set?: VirtualAirlineWhereUniqueInput | VirtualAirlineWhereUniqueInput[]
    disconnect?: VirtualAirlineWhereUniqueInput | VirtualAirlineWhereUniqueInput[]
    delete?: VirtualAirlineWhereUniqueInput | VirtualAirlineWhereUniqueInput[]
    connect?: VirtualAirlineWhereUniqueInput | VirtualAirlineWhereUniqueInput[]
    update?: VirtualAirlineUpdateWithWhereUniqueWithoutWorldInput | VirtualAirlineUpdateWithWhereUniqueWithoutWorldInput[]
    updateMany?: VirtualAirlineUpdateManyWithWhereWithoutWorldInput | VirtualAirlineUpdateManyWithWhereWithoutWorldInput[]
    deleteMany?: VirtualAirlineScalarWhereInput | VirtualAirlineScalarWhereInput[]
  }

  export type VirtualAirlineCreateNestedOneWithoutMembersInput = {
    create?: XOR<VirtualAirlineCreateWithoutMembersInput, VirtualAirlineUncheckedCreateWithoutMembersInput>
    connectOrCreate?: VirtualAirlineCreateOrConnectWithoutMembersInput
    connect?: VirtualAirlineWhereUniqueInput
  }

  export type VirtualAirlineRoleCreateNestedOneWithoutMembersInput = {
    create?: XOR<VirtualAirlineRoleCreateWithoutMembersInput, VirtualAirlineRoleUncheckedCreateWithoutMembersInput>
    connectOrCreate?: VirtualAirlineRoleCreateOrConnectWithoutMembersInput
    connect?: VirtualAirlineRoleWhereUniqueInput
  }

  export type VirtualAirlineUpdateOneRequiredWithoutMembersNestedInput = {
    create?: XOR<VirtualAirlineCreateWithoutMembersInput, VirtualAirlineUncheckedCreateWithoutMembersInput>
    connectOrCreate?: VirtualAirlineCreateOrConnectWithoutMembersInput
    upsert?: VirtualAirlineUpsertWithoutMembersInput
    connect?: VirtualAirlineWhereUniqueInput
    update?: XOR<XOR<VirtualAirlineUpdateToOneWithWhereWithoutMembersInput, VirtualAirlineUpdateWithoutMembersInput>, VirtualAirlineUncheckedUpdateWithoutMembersInput>
  }

  export type VirtualAirlineRoleUpdateOneRequiredWithoutMembersNestedInput = {
    create?: XOR<VirtualAirlineRoleCreateWithoutMembersInput, VirtualAirlineRoleUncheckedCreateWithoutMembersInput>
    connectOrCreate?: VirtualAirlineRoleCreateOrConnectWithoutMembersInput
    upsert?: VirtualAirlineRoleUpsertWithoutMembersInput
    connect?: VirtualAirlineRoleWhereUniqueInput
    update?: XOR<XOR<VirtualAirlineRoleUpdateToOneWithWhereWithoutMembersInput, VirtualAirlineRoleUpdateWithoutMembersInput>, VirtualAirlineRoleUncheckedUpdateWithoutMembersInput>
  }

  export type EnumJobTypeFieldUpdateOperationsInput = {
    set?: $Enums.JobType
  }

  export type EnumJobStatusFieldUpdateOperationsInput = {
    set?: $Enums.JobStatus
  }

  export type EnumCronExpressionFieldUpdateOperationsInput = {
    set?: $Enums.CronExpression
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedEnumJobTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.JobType | EnumJobTypeFieldRefInput<$PrismaModel>
    in?: $Enums.JobType[] | ListEnumJobTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.JobType[] | ListEnumJobTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumJobTypeFilter<$PrismaModel> | $Enums.JobType
  }

  export type NestedEnumJobStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.JobStatus | EnumJobStatusFieldRefInput<$PrismaModel>
    in?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumJobStatusFilter<$PrismaModel> | $Enums.JobStatus
  }

  export type NestedEnumCronExpressionFilter<$PrismaModel = never> = {
    equals?: $Enums.CronExpression | EnumCronExpressionFieldRefInput<$PrismaModel>
    in?: $Enums.CronExpression[] | ListEnumCronExpressionFieldRefInput<$PrismaModel>
    notIn?: $Enums.CronExpression[] | ListEnumCronExpressionFieldRefInput<$PrismaModel>
    not?: NestedEnumCronExpressionFilter<$PrismaModel> | $Enums.CronExpression
  }

  export type NestedEnumJobTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JobType | EnumJobTypeFieldRefInput<$PrismaModel>
    in?: $Enums.JobType[] | ListEnumJobTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.JobType[] | ListEnumJobTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumJobTypeWithAggregatesFilter<$PrismaModel> | $Enums.JobType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumJobTypeFilter<$PrismaModel>
    _max?: NestedEnumJobTypeFilter<$PrismaModel>
  }

  export type NestedEnumJobStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JobStatus | EnumJobStatusFieldRefInput<$PrismaModel>
    in?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumJobStatusWithAggregatesFilter<$PrismaModel> | $Enums.JobStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumJobStatusFilter<$PrismaModel>
    _max?: NestedEnumJobStatusFilter<$PrismaModel>
  }

  export type NestedEnumCronExpressionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CronExpression | EnumCronExpressionFieldRefInput<$PrismaModel>
    in?: $Enums.CronExpression[] | ListEnumCronExpressionFieldRefInput<$PrismaModel>
    notIn?: $Enums.CronExpression[] | ListEnumCronExpressionFieldRefInput<$PrismaModel>
    not?: NestedEnumCronExpressionWithAggregatesFilter<$PrismaModel> | $Enums.CronExpression
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCronExpressionFilter<$PrismaModel>
    _max?: NestedEnumCronExpressionFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type RoleCreateWithoutUsersInput = {
    Name: string
    Description?: string | null
    Slug: string
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    Permissions?: PermissionCreateNestedManyWithoutRolesInput
  }

  export type RoleUncheckedCreateWithoutUsersInput = {
    Id?: number
    Name: string
    Description?: string | null
    Slug: string
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    Permissions?: PermissionUncheckedCreateNestedManyWithoutRolesInput
  }

  export type RoleCreateOrConnectWithoutUsersInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
  }

  export type UserPrivacySettingsCreateWithoutUserInput = {
    Id?: string
    ShowOnlineStatus?: boolean
    ShowFirstName?: boolean
    ShowLastName?: boolean
    ShowLastNameInitial?: boolean
    ShowLastLogin?: Date | string | null
    CreatedAt?: Date | string
  }

  export type UserPrivacySettingsUncheckedCreateWithoutUserInput = {
    Id?: string
    ShowOnlineStatus?: boolean
    ShowFirstName?: boolean
    ShowLastName?: boolean
    ShowLastNameInitial?: boolean
    ShowLastLogin?: Date | string | null
    CreatedAt?: Date | string
  }

  export type UserPrivacySettingsCreateOrConnectWithoutUserInput = {
    where: UserPrivacySettingsWhereUniqueInput
    create: XOR<UserPrivacySettingsCreateWithoutUserInput, UserPrivacySettingsUncheckedCreateWithoutUserInput>
  }

  export type RoleUpsertWithWhereUniqueWithoutUsersInput = {
    where: RoleWhereUniqueInput
    update: XOR<RoleUpdateWithoutUsersInput, RoleUncheckedUpdateWithoutUsersInput>
    create: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
  }

  export type RoleUpdateWithWhereUniqueWithoutUsersInput = {
    where: RoleWhereUniqueInput
    data: XOR<RoleUpdateWithoutUsersInput, RoleUncheckedUpdateWithoutUsersInput>
  }

  export type RoleUpdateManyWithWhereWithoutUsersInput = {
    where: RoleScalarWhereInput
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyWithoutUsersInput>
  }

  export type RoleScalarWhereInput = {
    AND?: RoleScalarWhereInput | RoleScalarWhereInput[]
    OR?: RoleScalarWhereInput[]
    NOT?: RoleScalarWhereInput | RoleScalarWhereInput[]
    Id?: IntFilter<"Role"> | number
    Name?: StringFilter<"Role"> | string
    Description?: StringNullableFilter<"Role"> | string | null
    Slug?: StringFilter<"Role"> | string
    CreatedAt?: DateTimeFilter<"Role"> | Date | string
    UpdatedAt?: DateTimeFilter<"Role"> | Date | string
  }

  export type UserPrivacySettingsUpsertWithoutUserInput = {
    update: XOR<UserPrivacySettingsUpdateWithoutUserInput, UserPrivacySettingsUncheckedUpdateWithoutUserInput>
    create: XOR<UserPrivacySettingsCreateWithoutUserInput, UserPrivacySettingsUncheckedCreateWithoutUserInput>
    where?: UserPrivacySettingsWhereInput
  }

  export type UserPrivacySettingsUpdateToOneWithWhereWithoutUserInput = {
    where?: UserPrivacySettingsWhereInput
    data: XOR<UserPrivacySettingsUpdateWithoutUserInput, UserPrivacySettingsUncheckedUpdateWithoutUserInput>
  }

  export type UserPrivacySettingsUpdateWithoutUserInput = {
    Id?: StringFieldUpdateOperationsInput | string
    ShowOnlineStatus?: BoolFieldUpdateOperationsInput | boolean
    ShowFirstName?: BoolFieldUpdateOperationsInput | boolean
    ShowLastName?: BoolFieldUpdateOperationsInput | boolean
    ShowLastNameInitial?: BoolFieldUpdateOperationsInput | boolean
    ShowLastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPrivacySettingsUncheckedUpdateWithoutUserInput = {
    Id?: StringFieldUpdateOperationsInput | string
    ShowOnlineStatus?: BoolFieldUpdateOperationsInput | boolean
    ShowFirstName?: BoolFieldUpdateOperationsInput | boolean
    ShowLastName?: BoolFieldUpdateOperationsInput | boolean
    ShowLastNameInitial?: BoolFieldUpdateOperationsInput | boolean
    ShowLastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutPrivacySettingsInput = {
    Id?: string
    Username: string
    Password: string
    Email?: string | null
    FirstName?: string | null
    LastName?: string | null
    FirstLoginCompleted?: boolean
    IsOnline?: boolean
    IsBanned?: boolean
    BanReason?: string | null
    BanExpiresAt?: Date | string | null
    IsVerified?: boolean
    LastLogin?: Date | string | null
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    Roles?: RoleCreateNestedManyWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutPrivacySettingsInput = {
    Id?: string
    Username: string
    Password: string
    Email?: string | null
    FirstName?: string | null
    LastName?: string | null
    FirstLoginCompleted?: boolean
    IsOnline?: boolean
    IsBanned?: boolean
    BanReason?: string | null
    BanExpiresAt?: Date | string | null
    IsVerified?: boolean
    LastLogin?: Date | string | null
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    Roles?: RoleUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UserCreateOrConnectWithoutPrivacySettingsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPrivacySettingsInput, UserUncheckedCreateWithoutPrivacySettingsInput>
  }

  export type UserUpsertWithoutPrivacySettingsInput = {
    update: XOR<UserUpdateWithoutPrivacySettingsInput, UserUncheckedUpdateWithoutPrivacySettingsInput>
    create: XOR<UserCreateWithoutPrivacySettingsInput, UserUncheckedCreateWithoutPrivacySettingsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPrivacySettingsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPrivacySettingsInput, UserUncheckedUpdateWithoutPrivacySettingsInput>
  }

  export type UserUpdateWithoutPrivacySettingsInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Username?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    FirstName?: NullableStringFieldUpdateOperationsInput | string | null
    LastName?: NullableStringFieldUpdateOperationsInput | string | null
    FirstLoginCompleted?: BoolFieldUpdateOperationsInput | boolean
    IsOnline?: BoolFieldUpdateOperationsInput | boolean
    IsBanned?: BoolFieldUpdateOperationsInput | boolean
    BanReason?: NullableStringFieldUpdateOperationsInput | string | null
    BanExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    IsVerified?: BoolFieldUpdateOperationsInput | boolean
    LastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Roles?: RoleUpdateManyWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutPrivacySettingsInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Username?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    FirstName?: NullableStringFieldUpdateOperationsInput | string | null
    LastName?: NullableStringFieldUpdateOperationsInput | string | null
    FirstLoginCompleted?: BoolFieldUpdateOperationsInput | boolean
    IsOnline?: BoolFieldUpdateOperationsInput | boolean
    IsBanned?: BoolFieldUpdateOperationsInput | boolean
    BanReason?: NullableStringFieldUpdateOperationsInput | string | null
    BanExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    IsVerified?: BoolFieldUpdateOperationsInput | boolean
    LastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Roles?: RoleUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type PermissionCreateWithoutRolesInput = {
    Name: string
    Description?: string | null
    Slug: string
    Entity: string
    Action: string
  }

  export type PermissionUncheckedCreateWithoutRolesInput = {
    Id?: number
    Name: string
    Description?: string | null
    Slug: string
    Entity: string
    Action: string
  }

  export type PermissionCreateOrConnectWithoutRolesInput = {
    where: PermissionWhereUniqueInput
    create: XOR<PermissionCreateWithoutRolesInput, PermissionUncheckedCreateWithoutRolesInput>
  }

  export type UserCreateWithoutRolesInput = {
    Id?: string
    Username: string
    Password: string
    Email?: string | null
    FirstName?: string | null
    LastName?: string | null
    FirstLoginCompleted?: boolean
    IsOnline?: boolean
    IsBanned?: boolean
    BanReason?: string | null
    BanExpiresAt?: Date | string | null
    IsVerified?: boolean
    LastLogin?: Date | string | null
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    PrivacySettings?: UserPrivacySettingsCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRolesInput = {
    Id?: string
    Username: string
    Password: string
    Email?: string | null
    FirstName?: string | null
    LastName?: string | null
    FirstLoginCompleted?: boolean
    IsOnline?: boolean
    IsBanned?: boolean
    BanReason?: string | null
    BanExpiresAt?: Date | string | null
    IsVerified?: boolean
    LastLogin?: Date | string | null
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    PrivacySettings?: UserPrivacySettingsUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRolesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRolesInput, UserUncheckedCreateWithoutRolesInput>
  }

  export type PermissionUpsertWithWhereUniqueWithoutRolesInput = {
    where: PermissionWhereUniqueInput
    update: XOR<PermissionUpdateWithoutRolesInput, PermissionUncheckedUpdateWithoutRolesInput>
    create: XOR<PermissionCreateWithoutRolesInput, PermissionUncheckedCreateWithoutRolesInput>
  }

  export type PermissionUpdateWithWhereUniqueWithoutRolesInput = {
    where: PermissionWhereUniqueInput
    data: XOR<PermissionUpdateWithoutRolesInput, PermissionUncheckedUpdateWithoutRolesInput>
  }

  export type PermissionUpdateManyWithWhereWithoutRolesInput = {
    where: PermissionScalarWhereInput
    data: XOR<PermissionUpdateManyMutationInput, PermissionUncheckedUpdateManyWithoutRolesInput>
  }

  export type PermissionScalarWhereInput = {
    AND?: PermissionScalarWhereInput | PermissionScalarWhereInput[]
    OR?: PermissionScalarWhereInput[]
    NOT?: PermissionScalarWhereInput | PermissionScalarWhereInput[]
    Id?: IntFilter<"Permission"> | number
    Name?: StringFilter<"Permission"> | string
    Description?: StringNullableFilter<"Permission"> | string | null
    Slug?: StringFilter<"Permission"> | string
    Entity?: StringFilter<"Permission"> | string
    Action?: StringFilter<"Permission"> | string
  }

  export type UserUpsertWithWhereUniqueWithoutRolesInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutRolesInput, UserUncheckedUpdateWithoutRolesInput>
    create: XOR<UserCreateWithoutRolesInput, UserUncheckedCreateWithoutRolesInput>
  }

  export type UserUpdateWithWhereUniqueWithoutRolesInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutRolesInput, UserUncheckedUpdateWithoutRolesInput>
  }

  export type UserUpdateManyWithWhereWithoutRolesInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutRolesInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    Id?: UuidFilter<"User"> | string
    Username?: StringFilter<"User"> | string
    Password?: StringFilter<"User"> | string
    Email?: StringNullableFilter<"User"> | string | null
    FirstName?: StringNullableFilter<"User"> | string | null
    LastName?: StringNullableFilter<"User"> | string | null
    FirstLoginCompleted?: BoolFilter<"User"> | boolean
    IsOnline?: BoolFilter<"User"> | boolean
    IsBanned?: BoolFilter<"User"> | boolean
    BanReason?: StringNullableFilter<"User"> | string | null
    BanExpiresAt?: DateTimeNullableFilter<"User"> | Date | string | null
    IsVerified?: BoolFilter<"User"> | boolean
    LastLogin?: DateTimeNullableFilter<"User"> | Date | string | null
    CreatedAt?: DateTimeFilter<"User"> | Date | string
    UpdatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type RoleCreateWithoutPermissionsInput = {
    Name: string
    Description?: string | null
    Slug: string
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    Users?: UserCreateNestedManyWithoutRolesInput
  }

  export type RoleUncheckedCreateWithoutPermissionsInput = {
    Id?: number
    Name: string
    Description?: string | null
    Slug: string
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    Users?: UserUncheckedCreateNestedManyWithoutRolesInput
  }

  export type RoleCreateOrConnectWithoutPermissionsInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutPermissionsInput, RoleUncheckedCreateWithoutPermissionsInput>
  }

  export type RoleUpsertWithWhereUniqueWithoutPermissionsInput = {
    where: RoleWhereUniqueInput
    update: XOR<RoleUpdateWithoutPermissionsInput, RoleUncheckedUpdateWithoutPermissionsInput>
    create: XOR<RoleCreateWithoutPermissionsInput, RoleUncheckedCreateWithoutPermissionsInput>
  }

  export type RoleUpdateWithWhereUniqueWithoutPermissionsInput = {
    where: RoleWhereUniqueInput
    data: XOR<RoleUpdateWithoutPermissionsInput, RoleUncheckedUpdateWithoutPermissionsInput>
  }

  export type RoleUpdateManyWithWhereWithoutPermissionsInput = {
    where: RoleScalarWhereInput
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyWithoutPermissionsInput>
  }

  export type WorldCreateWithoutVirtualAirlinesInput = {
    Id: string
    Name: string
    Slug: string
    Description?: string | null
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
  }

  export type WorldUncheckedCreateWithoutVirtualAirlinesInput = {
    Id: string
    Name: string
    Slug: string
    Description?: string | null
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
  }

  export type WorldCreateOrConnectWithoutVirtualAirlinesInput = {
    where: WorldWhereUniqueInput
    create: XOR<WorldCreateWithoutVirtualAirlinesInput, WorldUncheckedCreateWithoutVirtualAirlinesInput>
  }

  export type VirtualAirlineRoleCreateWithoutVirtualAirlineInput = {
    Id?: string
    Name: string
    Permission: number
    IsDefaultNewRole: boolean
    Color: string
    PayPercent: Decimal | DecimalJsLike | number | string
    IsHidden: boolean
    RestrictLoadingVAJobsIntoNonVAAircraft: boolean
    RestrictLoadingNonVAJobsIntoVAAircraft: boolean
    PayWeekly: Decimal | DecimalJsLike | number | string
    PayPerFlightHour: Decimal | DecimalJsLike | number | string
    LastRefresh?: Date | string | null
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    Members?: MemberCreateNestedManyWithoutVARoleInput
  }

  export type VirtualAirlineRoleUncheckedCreateWithoutVirtualAirlineInput = {
    Id?: string
    Name: string
    Permission: number
    IsDefaultNewRole: boolean
    Color: string
    PayPercent: Decimal | DecimalJsLike | number | string
    IsHidden: boolean
    RestrictLoadingVAJobsIntoNonVAAircraft: boolean
    RestrictLoadingNonVAJobsIntoVAAircraft: boolean
    PayWeekly: Decimal | DecimalJsLike | number | string
    PayPerFlightHour: Decimal | DecimalJsLike | number | string
    LastRefresh?: Date | string | null
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    Members?: MemberUncheckedCreateNestedManyWithoutVARoleInput
  }

  export type VirtualAirlineRoleCreateOrConnectWithoutVirtualAirlineInput = {
    where: VirtualAirlineRoleWhereUniqueInput
    create: XOR<VirtualAirlineRoleCreateWithoutVirtualAirlineInput, VirtualAirlineRoleUncheckedCreateWithoutVirtualAirlineInput>
  }

  export type VirtualAirlineRoleCreateManyVirtualAirlineInputEnvelope = {
    data: VirtualAirlineRoleCreateManyVirtualAirlineInput | VirtualAirlineRoleCreateManyVirtualAirlineInput[]
    skipDuplicates?: boolean
  }

  export type MemberCreateWithoutVirtualAirlineInput = {
    Id?: string
    CompanyId: string
    CompanyName: string
    AirlineCode: string
    LastConnection?: Date | string | null
    Reputation: Decimal | DecimalJsLike | number | string
    CompanyCreationDate: Date | string
    CompanyLevel: number
    CompanyLevelXP: number
    TotalCargosTransportedLbs: number
    TotalPAXsTransported: number
    TotalEarnedCredits: Decimal | DecimalJsLike | number | string
    TotalSpentCredits: Decimal | DecimalJsLike | number | string
    NumberOfFlights: number
    FlightHours: Decimal | DecimalJsLike | number | string
    Color: string
    ReputationImpact: Decimal | DecimalJsLike | number | string
    LastVAFlightDate?: Date | string | null
    LastRefresh?: Date | string | null
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    VARole: VirtualAirlineRoleCreateNestedOneWithoutMembersInput
  }

  export type MemberUncheckedCreateWithoutVirtualAirlineInput = {
    Id?: string
    CompanyId: string
    CompanyName: string
    AirlineCode: string
    LastConnection?: Date | string | null
    Reputation: Decimal | DecimalJsLike | number | string
    CompanyCreationDate: Date | string
    CompanyLevel: number
    CompanyLevelXP: number
    VARoleId: string
    TotalCargosTransportedLbs: number
    TotalPAXsTransported: number
    TotalEarnedCredits: Decimal | DecimalJsLike | number | string
    TotalSpentCredits: Decimal | DecimalJsLike | number | string
    NumberOfFlights: number
    FlightHours: Decimal | DecimalJsLike | number | string
    Color: string
    ReputationImpact: Decimal | DecimalJsLike | number | string
    LastVAFlightDate?: Date | string | null
    LastRefresh?: Date | string | null
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
  }

  export type MemberCreateOrConnectWithoutVirtualAirlineInput = {
    where: MemberWhereUniqueInput
    create: XOR<MemberCreateWithoutVirtualAirlineInput, MemberUncheckedCreateWithoutVirtualAirlineInput>
  }

  export type MemberCreateManyVirtualAirlineInputEnvelope = {
    data: MemberCreateManyVirtualAirlineInput | MemberCreateManyVirtualAirlineInput[]
    skipDuplicates?: boolean
  }

  export type WorldUpsertWithoutVirtualAirlinesInput = {
    update: XOR<WorldUpdateWithoutVirtualAirlinesInput, WorldUncheckedUpdateWithoutVirtualAirlinesInput>
    create: XOR<WorldCreateWithoutVirtualAirlinesInput, WorldUncheckedCreateWithoutVirtualAirlinesInput>
    where?: WorldWhereInput
  }

  export type WorldUpdateToOneWithWhereWithoutVirtualAirlinesInput = {
    where?: WorldWhereInput
    data: XOR<WorldUpdateWithoutVirtualAirlinesInput, WorldUncheckedUpdateWithoutVirtualAirlinesInput>
  }

  export type WorldUpdateWithoutVirtualAirlinesInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    Slug?: StringFieldUpdateOperationsInput | string
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorldUncheckedUpdateWithoutVirtualAirlinesInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    Slug?: StringFieldUpdateOperationsInput | string
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VirtualAirlineRoleUpsertWithWhereUniqueWithoutVirtualAirlineInput = {
    where: VirtualAirlineRoleWhereUniqueInput
    update: XOR<VirtualAirlineRoleUpdateWithoutVirtualAirlineInput, VirtualAirlineRoleUncheckedUpdateWithoutVirtualAirlineInput>
    create: XOR<VirtualAirlineRoleCreateWithoutVirtualAirlineInput, VirtualAirlineRoleUncheckedCreateWithoutVirtualAirlineInput>
  }

  export type VirtualAirlineRoleUpdateWithWhereUniqueWithoutVirtualAirlineInput = {
    where: VirtualAirlineRoleWhereUniqueInput
    data: XOR<VirtualAirlineRoleUpdateWithoutVirtualAirlineInput, VirtualAirlineRoleUncheckedUpdateWithoutVirtualAirlineInput>
  }

  export type VirtualAirlineRoleUpdateManyWithWhereWithoutVirtualAirlineInput = {
    where: VirtualAirlineRoleScalarWhereInput
    data: XOR<VirtualAirlineRoleUpdateManyMutationInput, VirtualAirlineRoleUncheckedUpdateManyWithoutVirtualAirlineInput>
  }

  export type VirtualAirlineRoleScalarWhereInput = {
    AND?: VirtualAirlineRoleScalarWhereInput | VirtualAirlineRoleScalarWhereInput[]
    OR?: VirtualAirlineRoleScalarWhereInput[]
    NOT?: VirtualAirlineRoleScalarWhereInput | VirtualAirlineRoleScalarWhereInput[]
    Id?: UuidFilter<"VirtualAirlineRole"> | string
    VAId?: UuidFilter<"VirtualAirlineRole"> | string
    Name?: StringFilter<"VirtualAirlineRole"> | string
    Permission?: IntFilter<"VirtualAirlineRole"> | number
    IsDefaultNewRole?: BoolFilter<"VirtualAirlineRole"> | boolean
    Color?: StringFilter<"VirtualAirlineRole"> | string
    PayPercent?: DecimalFilter<"VirtualAirlineRole"> | Decimal | DecimalJsLike | number | string
    IsHidden?: BoolFilter<"VirtualAirlineRole"> | boolean
    RestrictLoadingVAJobsIntoNonVAAircraft?: BoolFilter<"VirtualAirlineRole"> | boolean
    RestrictLoadingNonVAJobsIntoVAAircraft?: BoolFilter<"VirtualAirlineRole"> | boolean
    PayWeekly?: DecimalFilter<"VirtualAirlineRole"> | Decimal | DecimalJsLike | number | string
    PayPerFlightHour?: DecimalFilter<"VirtualAirlineRole"> | Decimal | DecimalJsLike | number | string
    LastRefresh?: DateTimeNullableFilter<"VirtualAirlineRole"> | Date | string | null
    CreatedAt?: DateTimeFilter<"VirtualAirlineRole"> | Date | string
    UpdatedAt?: DateTimeFilter<"VirtualAirlineRole"> | Date | string
  }

  export type MemberUpsertWithWhereUniqueWithoutVirtualAirlineInput = {
    where: MemberWhereUniqueInput
    update: XOR<MemberUpdateWithoutVirtualAirlineInput, MemberUncheckedUpdateWithoutVirtualAirlineInput>
    create: XOR<MemberCreateWithoutVirtualAirlineInput, MemberUncheckedCreateWithoutVirtualAirlineInput>
  }

  export type MemberUpdateWithWhereUniqueWithoutVirtualAirlineInput = {
    where: MemberWhereUniqueInput
    data: XOR<MemberUpdateWithoutVirtualAirlineInput, MemberUncheckedUpdateWithoutVirtualAirlineInput>
  }

  export type MemberUpdateManyWithWhereWithoutVirtualAirlineInput = {
    where: MemberScalarWhereInput
    data: XOR<MemberUpdateManyMutationInput, MemberUncheckedUpdateManyWithoutVirtualAirlineInput>
  }

  export type MemberScalarWhereInput = {
    AND?: MemberScalarWhereInput | MemberScalarWhereInput[]
    OR?: MemberScalarWhereInput[]
    NOT?: MemberScalarWhereInput | MemberScalarWhereInput[]
    Id?: UuidFilter<"Member"> | string
    VAId?: UuidFilter<"Member"> | string
    CompanyId?: UuidFilter<"Member"> | string
    CompanyName?: StringFilter<"Member"> | string
    AirlineCode?: StringFilter<"Member"> | string
    LastConnection?: DateTimeNullableFilter<"Member"> | Date | string | null
    Reputation?: DecimalFilter<"Member"> | Decimal | DecimalJsLike | number | string
    CompanyCreationDate?: DateTimeFilter<"Member"> | Date | string
    CompanyLevel?: IntFilter<"Member"> | number
    CompanyLevelXP?: IntFilter<"Member"> | number
    VARoleId?: UuidFilter<"Member"> | string
    TotalCargosTransportedLbs?: IntFilter<"Member"> | number
    TotalPAXsTransported?: IntFilter<"Member"> | number
    TotalEarnedCredits?: DecimalFilter<"Member"> | Decimal | DecimalJsLike | number | string
    TotalSpentCredits?: DecimalFilter<"Member"> | Decimal | DecimalJsLike | number | string
    NumberOfFlights?: IntFilter<"Member"> | number
    FlightHours?: DecimalFilter<"Member"> | Decimal | DecimalJsLike | number | string
    Color?: StringFilter<"Member"> | string
    ReputationImpact?: DecimalFilter<"Member"> | Decimal | DecimalJsLike | number | string
    LastVAFlightDate?: DateTimeNullableFilter<"Member"> | Date | string | null
    LastRefresh?: DateTimeNullableFilter<"Member"> | Date | string | null
    CreatedAt?: DateTimeFilter<"Member"> | Date | string
    UpdatedAt?: DateTimeFilter<"Member"> | Date | string
  }

  export type VirtualAirlineCreateWithoutVARolesInput = {
    Id: string
    ApiKey: string
    IsPrimary?: boolean
    Identifier?: string | null
    Name?: string | null
    Description?: string | null
    LastDividendsDistribution?: Date | string | null
    LastComputationDate?: Date | string | null
    ComputedMemberCount?: number | null
    ComputedAircraftsCount?: number | null
    ComputedNumberOfFlights30Days?: number | null
    ComputedNumberOfFlightHours30Days?: number | null
    ComputedMostUsedAirports?: string | null
    LastConnection?: Date | string | null
    LastReportDate?: Date | string | null
    Reputation?: Decimal | DecimalJsLike | number | string | null
    CreationDate?: Date | string | null
    DifficultyLevel?: number | null
    Level?: number | null
    LevelXP?: number | null
    TotalContractsCompleted?: number | null
    TotalContractsEarnedCredits?: number | null
    LastRefresh?: Date | string | null
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    World?: WorldCreateNestedOneWithoutVirtualAirlinesInput
    Members?: MemberCreateNestedManyWithoutVirtualAirlineInput
  }

  export type VirtualAirlineUncheckedCreateWithoutVARolesInput = {
    Id: string
    ApiKey: string
    IsPrimary?: boolean
    Identifier?: string | null
    Name?: string | null
    Description?: string | null
    WorldId?: string | null
    LastDividendsDistribution?: Date | string | null
    LastComputationDate?: Date | string | null
    ComputedMemberCount?: number | null
    ComputedAircraftsCount?: number | null
    ComputedNumberOfFlights30Days?: number | null
    ComputedNumberOfFlightHours30Days?: number | null
    ComputedMostUsedAirports?: string | null
    LastConnection?: Date | string | null
    LastReportDate?: Date | string | null
    Reputation?: Decimal | DecimalJsLike | number | string | null
    CreationDate?: Date | string | null
    DifficultyLevel?: number | null
    Level?: number | null
    LevelXP?: number | null
    TotalContractsCompleted?: number | null
    TotalContractsEarnedCredits?: number | null
    LastRefresh?: Date | string | null
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    Members?: MemberUncheckedCreateNestedManyWithoutVirtualAirlineInput
  }

  export type VirtualAirlineCreateOrConnectWithoutVARolesInput = {
    where: VirtualAirlineWhereUniqueInput
    create: XOR<VirtualAirlineCreateWithoutVARolesInput, VirtualAirlineUncheckedCreateWithoutVARolesInput>
  }

  export type MemberCreateWithoutVARoleInput = {
    Id?: string
    CompanyId: string
    CompanyName: string
    AirlineCode: string
    LastConnection?: Date | string | null
    Reputation: Decimal | DecimalJsLike | number | string
    CompanyCreationDate: Date | string
    CompanyLevel: number
    CompanyLevelXP: number
    TotalCargosTransportedLbs: number
    TotalPAXsTransported: number
    TotalEarnedCredits: Decimal | DecimalJsLike | number | string
    TotalSpentCredits: Decimal | DecimalJsLike | number | string
    NumberOfFlights: number
    FlightHours: Decimal | DecimalJsLike | number | string
    Color: string
    ReputationImpact: Decimal | DecimalJsLike | number | string
    LastVAFlightDate?: Date | string | null
    LastRefresh?: Date | string | null
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    VirtualAirline: VirtualAirlineCreateNestedOneWithoutMembersInput
  }

  export type MemberUncheckedCreateWithoutVARoleInput = {
    Id?: string
    VAId: string
    CompanyId: string
    CompanyName: string
    AirlineCode: string
    LastConnection?: Date | string | null
    Reputation: Decimal | DecimalJsLike | number | string
    CompanyCreationDate: Date | string
    CompanyLevel: number
    CompanyLevelXP: number
    TotalCargosTransportedLbs: number
    TotalPAXsTransported: number
    TotalEarnedCredits: Decimal | DecimalJsLike | number | string
    TotalSpentCredits: Decimal | DecimalJsLike | number | string
    NumberOfFlights: number
    FlightHours: Decimal | DecimalJsLike | number | string
    Color: string
    ReputationImpact: Decimal | DecimalJsLike | number | string
    LastVAFlightDate?: Date | string | null
    LastRefresh?: Date | string | null
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
  }

  export type MemberCreateOrConnectWithoutVARoleInput = {
    where: MemberWhereUniqueInput
    create: XOR<MemberCreateWithoutVARoleInput, MemberUncheckedCreateWithoutVARoleInput>
  }

  export type MemberCreateManyVARoleInputEnvelope = {
    data: MemberCreateManyVARoleInput | MemberCreateManyVARoleInput[]
    skipDuplicates?: boolean
  }

  export type VirtualAirlineUpsertWithoutVARolesInput = {
    update: XOR<VirtualAirlineUpdateWithoutVARolesInput, VirtualAirlineUncheckedUpdateWithoutVARolesInput>
    create: XOR<VirtualAirlineCreateWithoutVARolesInput, VirtualAirlineUncheckedCreateWithoutVARolesInput>
    where?: VirtualAirlineWhereInput
  }

  export type VirtualAirlineUpdateToOneWithWhereWithoutVARolesInput = {
    where?: VirtualAirlineWhereInput
    data: XOR<VirtualAirlineUpdateWithoutVARolesInput, VirtualAirlineUncheckedUpdateWithoutVARolesInput>
  }

  export type VirtualAirlineUpdateWithoutVARolesInput = {
    Id?: StringFieldUpdateOperationsInput | string
    ApiKey?: StringFieldUpdateOperationsInput | string
    IsPrimary?: BoolFieldUpdateOperationsInput | boolean
    Identifier?: NullableStringFieldUpdateOperationsInput | string | null
    Name?: NullableStringFieldUpdateOperationsInput | string | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    LastDividendsDistribution?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    LastComputationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ComputedMemberCount?: NullableIntFieldUpdateOperationsInput | number | null
    ComputedAircraftsCount?: NullableIntFieldUpdateOperationsInput | number | null
    ComputedNumberOfFlights30Days?: NullableIntFieldUpdateOperationsInput | number | null
    ComputedNumberOfFlightHours30Days?: NullableIntFieldUpdateOperationsInput | number | null
    ComputedMostUsedAirports?: NullableStringFieldUpdateOperationsInput | string | null
    LastConnection?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    LastReportDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Reputation?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    CreationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DifficultyLevel?: NullableIntFieldUpdateOperationsInput | number | null
    Level?: NullableIntFieldUpdateOperationsInput | number | null
    LevelXP?: NullableIntFieldUpdateOperationsInput | number | null
    TotalContractsCompleted?: NullableIntFieldUpdateOperationsInput | number | null
    TotalContractsEarnedCredits?: NullableIntFieldUpdateOperationsInput | number | null
    LastRefresh?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    World?: WorldUpdateOneWithoutVirtualAirlinesNestedInput
    Members?: MemberUpdateManyWithoutVirtualAirlineNestedInput
  }

  export type VirtualAirlineUncheckedUpdateWithoutVARolesInput = {
    Id?: StringFieldUpdateOperationsInput | string
    ApiKey?: StringFieldUpdateOperationsInput | string
    IsPrimary?: BoolFieldUpdateOperationsInput | boolean
    Identifier?: NullableStringFieldUpdateOperationsInput | string | null
    Name?: NullableStringFieldUpdateOperationsInput | string | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    WorldId?: NullableStringFieldUpdateOperationsInput | string | null
    LastDividendsDistribution?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    LastComputationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ComputedMemberCount?: NullableIntFieldUpdateOperationsInput | number | null
    ComputedAircraftsCount?: NullableIntFieldUpdateOperationsInput | number | null
    ComputedNumberOfFlights30Days?: NullableIntFieldUpdateOperationsInput | number | null
    ComputedNumberOfFlightHours30Days?: NullableIntFieldUpdateOperationsInput | number | null
    ComputedMostUsedAirports?: NullableStringFieldUpdateOperationsInput | string | null
    LastConnection?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    LastReportDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Reputation?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    CreationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DifficultyLevel?: NullableIntFieldUpdateOperationsInput | number | null
    Level?: NullableIntFieldUpdateOperationsInput | number | null
    LevelXP?: NullableIntFieldUpdateOperationsInput | number | null
    TotalContractsCompleted?: NullableIntFieldUpdateOperationsInput | number | null
    TotalContractsEarnedCredits?: NullableIntFieldUpdateOperationsInput | number | null
    LastRefresh?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Members?: MemberUncheckedUpdateManyWithoutVirtualAirlineNestedInput
  }

  export type MemberUpsertWithWhereUniqueWithoutVARoleInput = {
    where: MemberWhereUniqueInput
    update: XOR<MemberUpdateWithoutVARoleInput, MemberUncheckedUpdateWithoutVARoleInput>
    create: XOR<MemberCreateWithoutVARoleInput, MemberUncheckedCreateWithoutVARoleInput>
  }

  export type MemberUpdateWithWhereUniqueWithoutVARoleInput = {
    where: MemberWhereUniqueInput
    data: XOR<MemberUpdateWithoutVARoleInput, MemberUncheckedUpdateWithoutVARoleInput>
  }

  export type MemberUpdateManyWithWhereWithoutVARoleInput = {
    where: MemberScalarWhereInput
    data: XOR<MemberUpdateManyMutationInput, MemberUncheckedUpdateManyWithoutVARoleInput>
  }

  export type VirtualAirlineCreateWithoutWorldInput = {
    Id: string
    ApiKey: string
    IsPrimary?: boolean
    Identifier?: string | null
    Name?: string | null
    Description?: string | null
    LastDividendsDistribution?: Date | string | null
    LastComputationDate?: Date | string | null
    ComputedMemberCount?: number | null
    ComputedAircraftsCount?: number | null
    ComputedNumberOfFlights30Days?: number | null
    ComputedNumberOfFlightHours30Days?: number | null
    ComputedMostUsedAirports?: string | null
    LastConnection?: Date | string | null
    LastReportDate?: Date | string | null
    Reputation?: Decimal | DecimalJsLike | number | string | null
    CreationDate?: Date | string | null
    DifficultyLevel?: number | null
    Level?: number | null
    LevelXP?: number | null
    TotalContractsCompleted?: number | null
    TotalContractsEarnedCredits?: number | null
    LastRefresh?: Date | string | null
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    VARoles?: VirtualAirlineRoleCreateNestedManyWithoutVirtualAirlineInput
    Members?: MemberCreateNestedManyWithoutVirtualAirlineInput
  }

  export type VirtualAirlineUncheckedCreateWithoutWorldInput = {
    Id: string
    ApiKey: string
    IsPrimary?: boolean
    Identifier?: string | null
    Name?: string | null
    Description?: string | null
    LastDividendsDistribution?: Date | string | null
    LastComputationDate?: Date | string | null
    ComputedMemberCount?: number | null
    ComputedAircraftsCount?: number | null
    ComputedNumberOfFlights30Days?: number | null
    ComputedNumberOfFlightHours30Days?: number | null
    ComputedMostUsedAirports?: string | null
    LastConnection?: Date | string | null
    LastReportDate?: Date | string | null
    Reputation?: Decimal | DecimalJsLike | number | string | null
    CreationDate?: Date | string | null
    DifficultyLevel?: number | null
    Level?: number | null
    LevelXP?: number | null
    TotalContractsCompleted?: number | null
    TotalContractsEarnedCredits?: number | null
    LastRefresh?: Date | string | null
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    VARoles?: VirtualAirlineRoleUncheckedCreateNestedManyWithoutVirtualAirlineInput
    Members?: MemberUncheckedCreateNestedManyWithoutVirtualAirlineInput
  }

  export type VirtualAirlineCreateOrConnectWithoutWorldInput = {
    where: VirtualAirlineWhereUniqueInput
    create: XOR<VirtualAirlineCreateWithoutWorldInput, VirtualAirlineUncheckedCreateWithoutWorldInput>
  }

  export type VirtualAirlineCreateManyWorldInputEnvelope = {
    data: VirtualAirlineCreateManyWorldInput | VirtualAirlineCreateManyWorldInput[]
    skipDuplicates?: boolean
  }

  export type VirtualAirlineUpsertWithWhereUniqueWithoutWorldInput = {
    where: VirtualAirlineWhereUniqueInput
    update: XOR<VirtualAirlineUpdateWithoutWorldInput, VirtualAirlineUncheckedUpdateWithoutWorldInput>
    create: XOR<VirtualAirlineCreateWithoutWorldInput, VirtualAirlineUncheckedCreateWithoutWorldInput>
  }

  export type VirtualAirlineUpdateWithWhereUniqueWithoutWorldInput = {
    where: VirtualAirlineWhereUniqueInput
    data: XOR<VirtualAirlineUpdateWithoutWorldInput, VirtualAirlineUncheckedUpdateWithoutWorldInput>
  }

  export type VirtualAirlineUpdateManyWithWhereWithoutWorldInput = {
    where: VirtualAirlineScalarWhereInput
    data: XOR<VirtualAirlineUpdateManyMutationInput, VirtualAirlineUncheckedUpdateManyWithoutWorldInput>
  }

  export type VirtualAirlineScalarWhereInput = {
    AND?: VirtualAirlineScalarWhereInput | VirtualAirlineScalarWhereInput[]
    OR?: VirtualAirlineScalarWhereInput[]
    NOT?: VirtualAirlineScalarWhereInput | VirtualAirlineScalarWhereInput[]
    Id?: UuidFilter<"VirtualAirline"> | string
    ApiKey?: UuidFilter<"VirtualAirline"> | string
    IsPrimary?: BoolFilter<"VirtualAirline"> | boolean
    Identifier?: StringNullableFilter<"VirtualAirline"> | string | null
    Name?: StringNullableFilter<"VirtualAirline"> | string | null
    Description?: StringNullableFilter<"VirtualAirline"> | string | null
    WorldId?: UuidNullableFilter<"VirtualAirline"> | string | null
    LastDividendsDistribution?: DateTimeNullableFilter<"VirtualAirline"> | Date | string | null
    LastComputationDate?: DateTimeNullableFilter<"VirtualAirline"> | Date | string | null
    ComputedMemberCount?: IntNullableFilter<"VirtualAirline"> | number | null
    ComputedAircraftsCount?: IntNullableFilter<"VirtualAirline"> | number | null
    ComputedNumberOfFlights30Days?: IntNullableFilter<"VirtualAirline"> | number | null
    ComputedNumberOfFlightHours30Days?: IntNullableFilter<"VirtualAirline"> | number | null
    ComputedMostUsedAirports?: StringNullableFilter<"VirtualAirline"> | string | null
    LastConnection?: DateTimeNullableFilter<"VirtualAirline"> | Date | string | null
    LastReportDate?: DateTimeNullableFilter<"VirtualAirline"> | Date | string | null
    Reputation?: DecimalNullableFilter<"VirtualAirline"> | Decimal | DecimalJsLike | number | string | null
    CreationDate?: DateTimeNullableFilter<"VirtualAirline"> | Date | string | null
    DifficultyLevel?: IntNullableFilter<"VirtualAirline"> | number | null
    Level?: IntNullableFilter<"VirtualAirline"> | number | null
    LevelXP?: IntNullableFilter<"VirtualAirline"> | number | null
    TotalContractsCompleted?: IntNullableFilter<"VirtualAirline"> | number | null
    TotalContractsEarnedCredits?: IntNullableFilter<"VirtualAirline"> | number | null
    LastRefresh?: DateTimeNullableFilter<"VirtualAirline"> | Date | string | null
    CreatedAt?: DateTimeFilter<"VirtualAirline"> | Date | string
    UpdatedAt?: DateTimeFilter<"VirtualAirline"> | Date | string
  }

  export type VirtualAirlineCreateWithoutMembersInput = {
    Id: string
    ApiKey: string
    IsPrimary?: boolean
    Identifier?: string | null
    Name?: string | null
    Description?: string | null
    LastDividendsDistribution?: Date | string | null
    LastComputationDate?: Date | string | null
    ComputedMemberCount?: number | null
    ComputedAircraftsCount?: number | null
    ComputedNumberOfFlights30Days?: number | null
    ComputedNumberOfFlightHours30Days?: number | null
    ComputedMostUsedAirports?: string | null
    LastConnection?: Date | string | null
    LastReportDate?: Date | string | null
    Reputation?: Decimal | DecimalJsLike | number | string | null
    CreationDate?: Date | string | null
    DifficultyLevel?: number | null
    Level?: number | null
    LevelXP?: number | null
    TotalContractsCompleted?: number | null
    TotalContractsEarnedCredits?: number | null
    LastRefresh?: Date | string | null
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    World?: WorldCreateNestedOneWithoutVirtualAirlinesInput
    VARoles?: VirtualAirlineRoleCreateNestedManyWithoutVirtualAirlineInput
  }

  export type VirtualAirlineUncheckedCreateWithoutMembersInput = {
    Id: string
    ApiKey: string
    IsPrimary?: boolean
    Identifier?: string | null
    Name?: string | null
    Description?: string | null
    WorldId?: string | null
    LastDividendsDistribution?: Date | string | null
    LastComputationDate?: Date | string | null
    ComputedMemberCount?: number | null
    ComputedAircraftsCount?: number | null
    ComputedNumberOfFlights30Days?: number | null
    ComputedNumberOfFlightHours30Days?: number | null
    ComputedMostUsedAirports?: string | null
    LastConnection?: Date | string | null
    LastReportDate?: Date | string | null
    Reputation?: Decimal | DecimalJsLike | number | string | null
    CreationDate?: Date | string | null
    DifficultyLevel?: number | null
    Level?: number | null
    LevelXP?: number | null
    TotalContractsCompleted?: number | null
    TotalContractsEarnedCredits?: number | null
    LastRefresh?: Date | string | null
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    VARoles?: VirtualAirlineRoleUncheckedCreateNestedManyWithoutVirtualAirlineInput
  }

  export type VirtualAirlineCreateOrConnectWithoutMembersInput = {
    where: VirtualAirlineWhereUniqueInput
    create: XOR<VirtualAirlineCreateWithoutMembersInput, VirtualAirlineUncheckedCreateWithoutMembersInput>
  }

  export type VirtualAirlineRoleCreateWithoutMembersInput = {
    Id?: string
    Name: string
    Permission: number
    IsDefaultNewRole: boolean
    Color: string
    PayPercent: Decimal | DecimalJsLike | number | string
    IsHidden: boolean
    RestrictLoadingVAJobsIntoNonVAAircraft: boolean
    RestrictLoadingNonVAJobsIntoVAAircraft: boolean
    PayWeekly: Decimal | DecimalJsLike | number | string
    PayPerFlightHour: Decimal | DecimalJsLike | number | string
    LastRefresh?: Date | string | null
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    VirtualAirline: VirtualAirlineCreateNestedOneWithoutVARolesInput
  }

  export type VirtualAirlineRoleUncheckedCreateWithoutMembersInput = {
    Id?: string
    VAId: string
    Name: string
    Permission: number
    IsDefaultNewRole: boolean
    Color: string
    PayPercent: Decimal | DecimalJsLike | number | string
    IsHidden: boolean
    RestrictLoadingVAJobsIntoNonVAAircraft: boolean
    RestrictLoadingNonVAJobsIntoVAAircraft: boolean
    PayWeekly: Decimal | DecimalJsLike | number | string
    PayPerFlightHour: Decimal | DecimalJsLike | number | string
    LastRefresh?: Date | string | null
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
  }

  export type VirtualAirlineRoleCreateOrConnectWithoutMembersInput = {
    where: VirtualAirlineRoleWhereUniqueInput
    create: XOR<VirtualAirlineRoleCreateWithoutMembersInput, VirtualAirlineRoleUncheckedCreateWithoutMembersInput>
  }

  export type VirtualAirlineUpsertWithoutMembersInput = {
    update: XOR<VirtualAirlineUpdateWithoutMembersInput, VirtualAirlineUncheckedUpdateWithoutMembersInput>
    create: XOR<VirtualAirlineCreateWithoutMembersInput, VirtualAirlineUncheckedCreateWithoutMembersInput>
    where?: VirtualAirlineWhereInput
  }

  export type VirtualAirlineUpdateToOneWithWhereWithoutMembersInput = {
    where?: VirtualAirlineWhereInput
    data: XOR<VirtualAirlineUpdateWithoutMembersInput, VirtualAirlineUncheckedUpdateWithoutMembersInput>
  }

  export type VirtualAirlineUpdateWithoutMembersInput = {
    Id?: StringFieldUpdateOperationsInput | string
    ApiKey?: StringFieldUpdateOperationsInput | string
    IsPrimary?: BoolFieldUpdateOperationsInput | boolean
    Identifier?: NullableStringFieldUpdateOperationsInput | string | null
    Name?: NullableStringFieldUpdateOperationsInput | string | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    LastDividendsDistribution?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    LastComputationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ComputedMemberCount?: NullableIntFieldUpdateOperationsInput | number | null
    ComputedAircraftsCount?: NullableIntFieldUpdateOperationsInput | number | null
    ComputedNumberOfFlights30Days?: NullableIntFieldUpdateOperationsInput | number | null
    ComputedNumberOfFlightHours30Days?: NullableIntFieldUpdateOperationsInput | number | null
    ComputedMostUsedAirports?: NullableStringFieldUpdateOperationsInput | string | null
    LastConnection?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    LastReportDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Reputation?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    CreationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DifficultyLevel?: NullableIntFieldUpdateOperationsInput | number | null
    Level?: NullableIntFieldUpdateOperationsInput | number | null
    LevelXP?: NullableIntFieldUpdateOperationsInput | number | null
    TotalContractsCompleted?: NullableIntFieldUpdateOperationsInput | number | null
    TotalContractsEarnedCredits?: NullableIntFieldUpdateOperationsInput | number | null
    LastRefresh?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    World?: WorldUpdateOneWithoutVirtualAirlinesNestedInput
    VARoles?: VirtualAirlineRoleUpdateManyWithoutVirtualAirlineNestedInput
  }

  export type VirtualAirlineUncheckedUpdateWithoutMembersInput = {
    Id?: StringFieldUpdateOperationsInput | string
    ApiKey?: StringFieldUpdateOperationsInput | string
    IsPrimary?: BoolFieldUpdateOperationsInput | boolean
    Identifier?: NullableStringFieldUpdateOperationsInput | string | null
    Name?: NullableStringFieldUpdateOperationsInput | string | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    WorldId?: NullableStringFieldUpdateOperationsInput | string | null
    LastDividendsDistribution?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    LastComputationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ComputedMemberCount?: NullableIntFieldUpdateOperationsInput | number | null
    ComputedAircraftsCount?: NullableIntFieldUpdateOperationsInput | number | null
    ComputedNumberOfFlights30Days?: NullableIntFieldUpdateOperationsInput | number | null
    ComputedNumberOfFlightHours30Days?: NullableIntFieldUpdateOperationsInput | number | null
    ComputedMostUsedAirports?: NullableStringFieldUpdateOperationsInput | string | null
    LastConnection?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    LastReportDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Reputation?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    CreationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DifficultyLevel?: NullableIntFieldUpdateOperationsInput | number | null
    Level?: NullableIntFieldUpdateOperationsInput | number | null
    LevelXP?: NullableIntFieldUpdateOperationsInput | number | null
    TotalContractsCompleted?: NullableIntFieldUpdateOperationsInput | number | null
    TotalContractsEarnedCredits?: NullableIntFieldUpdateOperationsInput | number | null
    LastRefresh?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    VARoles?: VirtualAirlineRoleUncheckedUpdateManyWithoutVirtualAirlineNestedInput
  }

  export type VirtualAirlineRoleUpsertWithoutMembersInput = {
    update: XOR<VirtualAirlineRoleUpdateWithoutMembersInput, VirtualAirlineRoleUncheckedUpdateWithoutMembersInput>
    create: XOR<VirtualAirlineRoleCreateWithoutMembersInput, VirtualAirlineRoleUncheckedCreateWithoutMembersInput>
    where?: VirtualAirlineRoleWhereInput
  }

  export type VirtualAirlineRoleUpdateToOneWithWhereWithoutMembersInput = {
    where?: VirtualAirlineRoleWhereInput
    data: XOR<VirtualAirlineRoleUpdateWithoutMembersInput, VirtualAirlineRoleUncheckedUpdateWithoutMembersInput>
  }

  export type VirtualAirlineRoleUpdateWithoutMembersInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    Permission?: IntFieldUpdateOperationsInput | number
    IsDefaultNewRole?: BoolFieldUpdateOperationsInput | boolean
    Color?: StringFieldUpdateOperationsInput | string
    PayPercent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    IsHidden?: BoolFieldUpdateOperationsInput | boolean
    RestrictLoadingVAJobsIntoNonVAAircraft?: BoolFieldUpdateOperationsInput | boolean
    RestrictLoadingNonVAJobsIntoVAAircraft?: BoolFieldUpdateOperationsInput | boolean
    PayWeekly?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    PayPerFlightHour?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    LastRefresh?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    VirtualAirline?: VirtualAirlineUpdateOneRequiredWithoutVARolesNestedInput
  }

  export type VirtualAirlineRoleUncheckedUpdateWithoutMembersInput = {
    Id?: StringFieldUpdateOperationsInput | string
    VAId?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    Permission?: IntFieldUpdateOperationsInput | number
    IsDefaultNewRole?: BoolFieldUpdateOperationsInput | boolean
    Color?: StringFieldUpdateOperationsInput | string
    PayPercent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    IsHidden?: BoolFieldUpdateOperationsInput | boolean
    RestrictLoadingVAJobsIntoNonVAAircraft?: BoolFieldUpdateOperationsInput | boolean
    RestrictLoadingNonVAJobsIntoVAAircraft?: BoolFieldUpdateOperationsInput | boolean
    PayWeekly?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    PayPerFlightHour?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    LastRefresh?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleUpdateWithoutUsersInput = {
    Name?: StringFieldUpdateOperationsInput | string
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Slug?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Permissions?: PermissionUpdateManyWithoutRolesNestedInput
  }

  export type RoleUncheckedUpdateWithoutUsersInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Slug?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Permissions?: PermissionUncheckedUpdateManyWithoutRolesNestedInput
  }

  export type RoleUncheckedUpdateManyWithoutUsersInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Slug?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PermissionUpdateWithoutRolesInput = {
    Name?: StringFieldUpdateOperationsInput | string
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Slug?: StringFieldUpdateOperationsInput | string
    Entity?: StringFieldUpdateOperationsInput | string
    Action?: StringFieldUpdateOperationsInput | string
  }

  export type PermissionUncheckedUpdateWithoutRolesInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Slug?: StringFieldUpdateOperationsInput | string
    Entity?: StringFieldUpdateOperationsInput | string
    Action?: StringFieldUpdateOperationsInput | string
  }

  export type PermissionUncheckedUpdateManyWithoutRolesInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Slug?: StringFieldUpdateOperationsInput | string
    Entity?: StringFieldUpdateOperationsInput | string
    Action?: StringFieldUpdateOperationsInput | string
  }

  export type UserUpdateWithoutRolesInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Username?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    FirstName?: NullableStringFieldUpdateOperationsInput | string | null
    LastName?: NullableStringFieldUpdateOperationsInput | string | null
    FirstLoginCompleted?: BoolFieldUpdateOperationsInput | boolean
    IsOnline?: BoolFieldUpdateOperationsInput | boolean
    IsBanned?: BoolFieldUpdateOperationsInput | boolean
    BanReason?: NullableStringFieldUpdateOperationsInput | string | null
    BanExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    IsVerified?: BoolFieldUpdateOperationsInput | boolean
    LastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    PrivacySettings?: UserPrivacySettingsUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRolesInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Username?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    FirstName?: NullableStringFieldUpdateOperationsInput | string | null
    LastName?: NullableStringFieldUpdateOperationsInput | string | null
    FirstLoginCompleted?: BoolFieldUpdateOperationsInput | boolean
    IsOnline?: BoolFieldUpdateOperationsInput | boolean
    IsBanned?: BoolFieldUpdateOperationsInput | boolean
    BanReason?: NullableStringFieldUpdateOperationsInput | string | null
    BanExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    IsVerified?: BoolFieldUpdateOperationsInput | boolean
    LastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    PrivacySettings?: UserPrivacySettingsUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutRolesInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Username?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    FirstName?: NullableStringFieldUpdateOperationsInput | string | null
    LastName?: NullableStringFieldUpdateOperationsInput | string | null
    FirstLoginCompleted?: BoolFieldUpdateOperationsInput | boolean
    IsOnline?: BoolFieldUpdateOperationsInput | boolean
    IsBanned?: BoolFieldUpdateOperationsInput | boolean
    BanReason?: NullableStringFieldUpdateOperationsInput | string | null
    BanExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    IsVerified?: BoolFieldUpdateOperationsInput | boolean
    LastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleUpdateWithoutPermissionsInput = {
    Name?: StringFieldUpdateOperationsInput | string
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Slug?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Users?: UserUpdateManyWithoutRolesNestedInput
  }

  export type RoleUncheckedUpdateWithoutPermissionsInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Slug?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Users?: UserUncheckedUpdateManyWithoutRolesNestedInput
  }

  export type RoleUncheckedUpdateManyWithoutPermissionsInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Slug?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VirtualAirlineRoleCreateManyVirtualAirlineInput = {
    Id?: string
    Name: string
    Permission: number
    IsDefaultNewRole: boolean
    Color: string
    PayPercent: Decimal | DecimalJsLike | number | string
    IsHidden: boolean
    RestrictLoadingVAJobsIntoNonVAAircraft: boolean
    RestrictLoadingNonVAJobsIntoVAAircraft: boolean
    PayWeekly: Decimal | DecimalJsLike | number | string
    PayPerFlightHour: Decimal | DecimalJsLike | number | string
    LastRefresh?: Date | string | null
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
  }

  export type MemberCreateManyVirtualAirlineInput = {
    Id?: string
    CompanyId: string
    CompanyName: string
    AirlineCode: string
    LastConnection?: Date | string | null
    Reputation: Decimal | DecimalJsLike | number | string
    CompanyCreationDate: Date | string
    CompanyLevel: number
    CompanyLevelXP: number
    VARoleId: string
    TotalCargosTransportedLbs: number
    TotalPAXsTransported: number
    TotalEarnedCredits: Decimal | DecimalJsLike | number | string
    TotalSpentCredits: Decimal | DecimalJsLike | number | string
    NumberOfFlights: number
    FlightHours: Decimal | DecimalJsLike | number | string
    Color: string
    ReputationImpact: Decimal | DecimalJsLike | number | string
    LastVAFlightDate?: Date | string | null
    LastRefresh?: Date | string | null
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
  }

  export type VirtualAirlineRoleUpdateWithoutVirtualAirlineInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    Permission?: IntFieldUpdateOperationsInput | number
    IsDefaultNewRole?: BoolFieldUpdateOperationsInput | boolean
    Color?: StringFieldUpdateOperationsInput | string
    PayPercent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    IsHidden?: BoolFieldUpdateOperationsInput | boolean
    RestrictLoadingVAJobsIntoNonVAAircraft?: BoolFieldUpdateOperationsInput | boolean
    RestrictLoadingNonVAJobsIntoVAAircraft?: BoolFieldUpdateOperationsInput | boolean
    PayWeekly?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    PayPerFlightHour?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    LastRefresh?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Members?: MemberUpdateManyWithoutVARoleNestedInput
  }

  export type VirtualAirlineRoleUncheckedUpdateWithoutVirtualAirlineInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    Permission?: IntFieldUpdateOperationsInput | number
    IsDefaultNewRole?: BoolFieldUpdateOperationsInput | boolean
    Color?: StringFieldUpdateOperationsInput | string
    PayPercent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    IsHidden?: BoolFieldUpdateOperationsInput | boolean
    RestrictLoadingVAJobsIntoNonVAAircraft?: BoolFieldUpdateOperationsInput | boolean
    RestrictLoadingNonVAJobsIntoVAAircraft?: BoolFieldUpdateOperationsInput | boolean
    PayWeekly?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    PayPerFlightHour?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    LastRefresh?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Members?: MemberUncheckedUpdateManyWithoutVARoleNestedInput
  }

  export type VirtualAirlineRoleUncheckedUpdateManyWithoutVirtualAirlineInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    Permission?: IntFieldUpdateOperationsInput | number
    IsDefaultNewRole?: BoolFieldUpdateOperationsInput | boolean
    Color?: StringFieldUpdateOperationsInput | string
    PayPercent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    IsHidden?: BoolFieldUpdateOperationsInput | boolean
    RestrictLoadingVAJobsIntoNonVAAircraft?: BoolFieldUpdateOperationsInput | boolean
    RestrictLoadingNonVAJobsIntoVAAircraft?: BoolFieldUpdateOperationsInput | boolean
    PayWeekly?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    PayPerFlightHour?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    LastRefresh?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemberUpdateWithoutVirtualAirlineInput = {
    Id?: StringFieldUpdateOperationsInput | string
    CompanyId?: StringFieldUpdateOperationsInput | string
    CompanyName?: StringFieldUpdateOperationsInput | string
    AirlineCode?: StringFieldUpdateOperationsInput | string
    LastConnection?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Reputation?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    CompanyCreationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    CompanyLevel?: IntFieldUpdateOperationsInput | number
    CompanyLevelXP?: IntFieldUpdateOperationsInput | number
    TotalCargosTransportedLbs?: IntFieldUpdateOperationsInput | number
    TotalPAXsTransported?: IntFieldUpdateOperationsInput | number
    TotalEarnedCredits?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    TotalSpentCredits?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    NumberOfFlights?: IntFieldUpdateOperationsInput | number
    FlightHours?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Color?: StringFieldUpdateOperationsInput | string
    ReputationImpact?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    LastVAFlightDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    LastRefresh?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    VARole?: VirtualAirlineRoleUpdateOneRequiredWithoutMembersNestedInput
  }

  export type MemberUncheckedUpdateWithoutVirtualAirlineInput = {
    Id?: StringFieldUpdateOperationsInput | string
    CompanyId?: StringFieldUpdateOperationsInput | string
    CompanyName?: StringFieldUpdateOperationsInput | string
    AirlineCode?: StringFieldUpdateOperationsInput | string
    LastConnection?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Reputation?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    CompanyCreationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    CompanyLevel?: IntFieldUpdateOperationsInput | number
    CompanyLevelXP?: IntFieldUpdateOperationsInput | number
    VARoleId?: StringFieldUpdateOperationsInput | string
    TotalCargosTransportedLbs?: IntFieldUpdateOperationsInput | number
    TotalPAXsTransported?: IntFieldUpdateOperationsInput | number
    TotalEarnedCredits?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    TotalSpentCredits?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    NumberOfFlights?: IntFieldUpdateOperationsInput | number
    FlightHours?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Color?: StringFieldUpdateOperationsInput | string
    ReputationImpact?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    LastVAFlightDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    LastRefresh?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemberUncheckedUpdateManyWithoutVirtualAirlineInput = {
    Id?: StringFieldUpdateOperationsInput | string
    CompanyId?: StringFieldUpdateOperationsInput | string
    CompanyName?: StringFieldUpdateOperationsInput | string
    AirlineCode?: StringFieldUpdateOperationsInput | string
    LastConnection?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Reputation?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    CompanyCreationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    CompanyLevel?: IntFieldUpdateOperationsInput | number
    CompanyLevelXP?: IntFieldUpdateOperationsInput | number
    VARoleId?: StringFieldUpdateOperationsInput | string
    TotalCargosTransportedLbs?: IntFieldUpdateOperationsInput | number
    TotalPAXsTransported?: IntFieldUpdateOperationsInput | number
    TotalEarnedCredits?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    TotalSpentCredits?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    NumberOfFlights?: IntFieldUpdateOperationsInput | number
    FlightHours?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Color?: StringFieldUpdateOperationsInput | string
    ReputationImpact?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    LastVAFlightDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    LastRefresh?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemberCreateManyVARoleInput = {
    Id?: string
    VAId: string
    CompanyId: string
    CompanyName: string
    AirlineCode: string
    LastConnection?: Date | string | null
    Reputation: Decimal | DecimalJsLike | number | string
    CompanyCreationDate: Date | string
    CompanyLevel: number
    CompanyLevelXP: number
    TotalCargosTransportedLbs: number
    TotalPAXsTransported: number
    TotalEarnedCredits: Decimal | DecimalJsLike | number | string
    TotalSpentCredits: Decimal | DecimalJsLike | number | string
    NumberOfFlights: number
    FlightHours: Decimal | DecimalJsLike | number | string
    Color: string
    ReputationImpact: Decimal | DecimalJsLike | number | string
    LastVAFlightDate?: Date | string | null
    LastRefresh?: Date | string | null
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
  }

  export type MemberUpdateWithoutVARoleInput = {
    Id?: StringFieldUpdateOperationsInput | string
    CompanyId?: StringFieldUpdateOperationsInput | string
    CompanyName?: StringFieldUpdateOperationsInput | string
    AirlineCode?: StringFieldUpdateOperationsInput | string
    LastConnection?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Reputation?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    CompanyCreationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    CompanyLevel?: IntFieldUpdateOperationsInput | number
    CompanyLevelXP?: IntFieldUpdateOperationsInput | number
    TotalCargosTransportedLbs?: IntFieldUpdateOperationsInput | number
    TotalPAXsTransported?: IntFieldUpdateOperationsInput | number
    TotalEarnedCredits?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    TotalSpentCredits?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    NumberOfFlights?: IntFieldUpdateOperationsInput | number
    FlightHours?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Color?: StringFieldUpdateOperationsInput | string
    ReputationImpact?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    LastVAFlightDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    LastRefresh?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    VirtualAirline?: VirtualAirlineUpdateOneRequiredWithoutMembersNestedInput
  }

  export type MemberUncheckedUpdateWithoutVARoleInput = {
    Id?: StringFieldUpdateOperationsInput | string
    VAId?: StringFieldUpdateOperationsInput | string
    CompanyId?: StringFieldUpdateOperationsInput | string
    CompanyName?: StringFieldUpdateOperationsInput | string
    AirlineCode?: StringFieldUpdateOperationsInput | string
    LastConnection?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Reputation?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    CompanyCreationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    CompanyLevel?: IntFieldUpdateOperationsInput | number
    CompanyLevelXP?: IntFieldUpdateOperationsInput | number
    TotalCargosTransportedLbs?: IntFieldUpdateOperationsInput | number
    TotalPAXsTransported?: IntFieldUpdateOperationsInput | number
    TotalEarnedCredits?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    TotalSpentCredits?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    NumberOfFlights?: IntFieldUpdateOperationsInput | number
    FlightHours?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Color?: StringFieldUpdateOperationsInput | string
    ReputationImpact?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    LastVAFlightDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    LastRefresh?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemberUncheckedUpdateManyWithoutVARoleInput = {
    Id?: StringFieldUpdateOperationsInput | string
    VAId?: StringFieldUpdateOperationsInput | string
    CompanyId?: StringFieldUpdateOperationsInput | string
    CompanyName?: StringFieldUpdateOperationsInput | string
    AirlineCode?: StringFieldUpdateOperationsInput | string
    LastConnection?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Reputation?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    CompanyCreationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    CompanyLevel?: IntFieldUpdateOperationsInput | number
    CompanyLevelXP?: IntFieldUpdateOperationsInput | number
    TotalCargosTransportedLbs?: IntFieldUpdateOperationsInput | number
    TotalPAXsTransported?: IntFieldUpdateOperationsInput | number
    TotalEarnedCredits?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    TotalSpentCredits?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    NumberOfFlights?: IntFieldUpdateOperationsInput | number
    FlightHours?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Color?: StringFieldUpdateOperationsInput | string
    ReputationImpact?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    LastVAFlightDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    LastRefresh?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VirtualAirlineCreateManyWorldInput = {
    Id: string
    ApiKey: string
    IsPrimary?: boolean
    Identifier?: string | null
    Name?: string | null
    Description?: string | null
    LastDividendsDistribution?: Date | string | null
    LastComputationDate?: Date | string | null
    ComputedMemberCount?: number | null
    ComputedAircraftsCount?: number | null
    ComputedNumberOfFlights30Days?: number | null
    ComputedNumberOfFlightHours30Days?: number | null
    ComputedMostUsedAirports?: string | null
    LastConnection?: Date | string | null
    LastReportDate?: Date | string | null
    Reputation?: Decimal | DecimalJsLike | number | string | null
    CreationDate?: Date | string | null
    DifficultyLevel?: number | null
    Level?: number | null
    LevelXP?: number | null
    TotalContractsCompleted?: number | null
    TotalContractsEarnedCredits?: number | null
    LastRefresh?: Date | string | null
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
  }

  export type VirtualAirlineUpdateWithoutWorldInput = {
    Id?: StringFieldUpdateOperationsInput | string
    ApiKey?: StringFieldUpdateOperationsInput | string
    IsPrimary?: BoolFieldUpdateOperationsInput | boolean
    Identifier?: NullableStringFieldUpdateOperationsInput | string | null
    Name?: NullableStringFieldUpdateOperationsInput | string | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    LastDividendsDistribution?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    LastComputationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ComputedMemberCount?: NullableIntFieldUpdateOperationsInput | number | null
    ComputedAircraftsCount?: NullableIntFieldUpdateOperationsInput | number | null
    ComputedNumberOfFlights30Days?: NullableIntFieldUpdateOperationsInput | number | null
    ComputedNumberOfFlightHours30Days?: NullableIntFieldUpdateOperationsInput | number | null
    ComputedMostUsedAirports?: NullableStringFieldUpdateOperationsInput | string | null
    LastConnection?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    LastReportDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Reputation?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    CreationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DifficultyLevel?: NullableIntFieldUpdateOperationsInput | number | null
    Level?: NullableIntFieldUpdateOperationsInput | number | null
    LevelXP?: NullableIntFieldUpdateOperationsInput | number | null
    TotalContractsCompleted?: NullableIntFieldUpdateOperationsInput | number | null
    TotalContractsEarnedCredits?: NullableIntFieldUpdateOperationsInput | number | null
    LastRefresh?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    VARoles?: VirtualAirlineRoleUpdateManyWithoutVirtualAirlineNestedInput
    Members?: MemberUpdateManyWithoutVirtualAirlineNestedInput
  }

  export type VirtualAirlineUncheckedUpdateWithoutWorldInput = {
    Id?: StringFieldUpdateOperationsInput | string
    ApiKey?: StringFieldUpdateOperationsInput | string
    IsPrimary?: BoolFieldUpdateOperationsInput | boolean
    Identifier?: NullableStringFieldUpdateOperationsInput | string | null
    Name?: NullableStringFieldUpdateOperationsInput | string | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    LastDividendsDistribution?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    LastComputationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ComputedMemberCount?: NullableIntFieldUpdateOperationsInput | number | null
    ComputedAircraftsCount?: NullableIntFieldUpdateOperationsInput | number | null
    ComputedNumberOfFlights30Days?: NullableIntFieldUpdateOperationsInput | number | null
    ComputedNumberOfFlightHours30Days?: NullableIntFieldUpdateOperationsInput | number | null
    ComputedMostUsedAirports?: NullableStringFieldUpdateOperationsInput | string | null
    LastConnection?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    LastReportDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Reputation?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    CreationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DifficultyLevel?: NullableIntFieldUpdateOperationsInput | number | null
    Level?: NullableIntFieldUpdateOperationsInput | number | null
    LevelXP?: NullableIntFieldUpdateOperationsInput | number | null
    TotalContractsCompleted?: NullableIntFieldUpdateOperationsInput | number | null
    TotalContractsEarnedCredits?: NullableIntFieldUpdateOperationsInput | number | null
    LastRefresh?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    VARoles?: VirtualAirlineRoleUncheckedUpdateManyWithoutVirtualAirlineNestedInput
    Members?: MemberUncheckedUpdateManyWithoutVirtualAirlineNestedInput
  }

  export type VirtualAirlineUncheckedUpdateManyWithoutWorldInput = {
    Id?: StringFieldUpdateOperationsInput | string
    ApiKey?: StringFieldUpdateOperationsInput | string
    IsPrimary?: BoolFieldUpdateOperationsInput | boolean
    Identifier?: NullableStringFieldUpdateOperationsInput | string | null
    Name?: NullableStringFieldUpdateOperationsInput | string | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    LastDividendsDistribution?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    LastComputationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ComputedMemberCount?: NullableIntFieldUpdateOperationsInput | number | null
    ComputedAircraftsCount?: NullableIntFieldUpdateOperationsInput | number | null
    ComputedNumberOfFlights30Days?: NullableIntFieldUpdateOperationsInput | number | null
    ComputedNumberOfFlightHours30Days?: NullableIntFieldUpdateOperationsInput | number | null
    ComputedMostUsedAirports?: NullableStringFieldUpdateOperationsInput | string | null
    LastConnection?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    LastReportDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Reputation?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    CreationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DifficultyLevel?: NullableIntFieldUpdateOperationsInput | number | null
    Level?: NullableIntFieldUpdateOperationsInput | number | null
    LevelXP?: NullableIntFieldUpdateOperationsInput | number | null
    TotalContractsCompleted?: NullableIntFieldUpdateOperationsInput | number | null
    TotalContractsEarnedCredits?: NullableIntFieldUpdateOperationsInput | number | null
    LastRefresh?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}