
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
 * Model Job
 * 
 */
export type Job = $Result.DefaultSelection<Prisma.$JobPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const JobType: {
  VIRTUAL_AIRLINE_SYNC: 'VIRTUAL_AIRLINE_SYNC'
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
   * Prisma Client JS version: 6.10.1
   * Query Engine version: 9b628578b3b7cae625e8c927178f15a170e74a9c
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
    Livery: 'Livery',
    VirtualAirline: 'VirtualAirline',
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
      modelProps: "appConfig" | "livery" | "virtualAirline" | "job"
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
    livery?: LiveryOmit
    virtualAirline?: VirtualAirlineOmit
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
    VirtualAirlineId: string | null
    ApiKey: string | null
    DiscordServerInviteLink: string | null
    DiscordServerInviteLinkEnabled: boolean | null
    AcceptingNewMembers: boolean | null
    DiscordAuthEnabled: boolean | null
    LocalAuthEnabled: boolean | null
    CreatedAt: Date | null
    UpdatedAt: Date | null
  }

  export type AppConfigMaxAggregateOutputType = {
    Id: number | null
    OnAirSyncEnabled: boolean | null
    OnAirVASyncEnabled: boolean | null
    OnAirVAMembersSyncEnabled: boolean | null
    OnAirCompanySyncEnabled: boolean | null
    VirtualAirlineId: string | null
    ApiKey: string | null
    DiscordServerInviteLink: string | null
    DiscordServerInviteLinkEnabled: boolean | null
    AcceptingNewMembers: boolean | null
    DiscordAuthEnabled: boolean | null
    LocalAuthEnabled: boolean | null
    CreatedAt: Date | null
    UpdatedAt: Date | null
  }

  export type AppConfigCountAggregateOutputType = {
    Id: number
    OnAirSyncEnabled: number
    OnAirVASyncEnabled: number
    OnAirVAMembersSyncEnabled: number
    OnAirCompanySyncEnabled: number
    VirtualAirlineId: number
    ApiKey: number
    DiscordServerInviteLink: number
    DiscordServerInviteLinkEnabled: number
    AcceptingNewMembers: number
    DiscordAuthEnabled: number
    LocalAuthEnabled: number
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
    VirtualAirlineId?: true
    ApiKey?: true
    DiscordServerInviteLink?: true
    DiscordServerInviteLinkEnabled?: true
    AcceptingNewMembers?: true
    DiscordAuthEnabled?: true
    LocalAuthEnabled?: true
    CreatedAt?: true
    UpdatedAt?: true
  }

  export type AppConfigMaxAggregateInputType = {
    Id?: true
    OnAirSyncEnabled?: true
    OnAirVASyncEnabled?: true
    OnAirVAMembersSyncEnabled?: true
    OnAirCompanySyncEnabled?: true
    VirtualAirlineId?: true
    ApiKey?: true
    DiscordServerInviteLink?: true
    DiscordServerInviteLinkEnabled?: true
    AcceptingNewMembers?: true
    DiscordAuthEnabled?: true
    LocalAuthEnabled?: true
    CreatedAt?: true
    UpdatedAt?: true
  }

  export type AppConfigCountAggregateInputType = {
    Id?: true
    OnAirSyncEnabled?: true
    OnAirVASyncEnabled?: true
    OnAirVAMembersSyncEnabled?: true
    OnAirCompanySyncEnabled?: true
    VirtualAirlineId?: true
    ApiKey?: true
    DiscordServerInviteLink?: true
    DiscordServerInviteLinkEnabled?: true
    AcceptingNewMembers?: true
    DiscordAuthEnabled?: true
    LocalAuthEnabled?: true
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
    VirtualAirlineId: string | null
    ApiKey: string | null
    DiscordServerInviteLink: string | null
    DiscordServerInviteLinkEnabled: boolean
    AcceptingNewMembers: boolean
    DiscordAuthEnabled: boolean
    LocalAuthEnabled: boolean
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
    VirtualAirlineId?: boolean
    ApiKey?: boolean
    DiscordServerInviteLink?: boolean
    DiscordServerInviteLinkEnabled?: boolean
    AcceptingNewMembers?: boolean
    DiscordAuthEnabled?: boolean
    LocalAuthEnabled?: boolean
    CreatedAt?: boolean
    UpdatedAt?: boolean
  }, ExtArgs["result"]["appConfig"]>

  export type AppConfigSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    OnAirSyncEnabled?: boolean
    OnAirVASyncEnabled?: boolean
    OnAirVAMembersSyncEnabled?: boolean
    OnAirCompanySyncEnabled?: boolean
    VirtualAirlineId?: boolean
    ApiKey?: boolean
    DiscordServerInviteLink?: boolean
    DiscordServerInviteLinkEnabled?: boolean
    AcceptingNewMembers?: boolean
    DiscordAuthEnabled?: boolean
    LocalAuthEnabled?: boolean
    CreatedAt?: boolean
    UpdatedAt?: boolean
  }, ExtArgs["result"]["appConfig"]>

  export type AppConfigSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    OnAirSyncEnabled?: boolean
    OnAirVASyncEnabled?: boolean
    OnAirVAMembersSyncEnabled?: boolean
    OnAirCompanySyncEnabled?: boolean
    VirtualAirlineId?: boolean
    ApiKey?: boolean
    DiscordServerInviteLink?: boolean
    DiscordServerInviteLinkEnabled?: boolean
    AcceptingNewMembers?: boolean
    DiscordAuthEnabled?: boolean
    LocalAuthEnabled?: boolean
    CreatedAt?: boolean
    UpdatedAt?: boolean
  }, ExtArgs["result"]["appConfig"]>

  export type AppConfigSelectScalar = {
    Id?: boolean
    OnAirSyncEnabled?: boolean
    OnAirVASyncEnabled?: boolean
    OnAirVAMembersSyncEnabled?: boolean
    OnAirCompanySyncEnabled?: boolean
    VirtualAirlineId?: boolean
    ApiKey?: boolean
    DiscordServerInviteLink?: boolean
    DiscordServerInviteLinkEnabled?: boolean
    AcceptingNewMembers?: boolean
    DiscordAuthEnabled?: boolean
    LocalAuthEnabled?: boolean
    CreatedAt?: boolean
    UpdatedAt?: boolean
  }

  export type AppConfigOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Id" | "OnAirSyncEnabled" | "OnAirVASyncEnabled" | "OnAirVAMembersSyncEnabled" | "OnAirCompanySyncEnabled" | "VirtualAirlineId" | "ApiKey" | "DiscordServerInviteLink" | "DiscordServerInviteLinkEnabled" | "AcceptingNewMembers" | "DiscordAuthEnabled" | "LocalAuthEnabled" | "CreatedAt" | "UpdatedAt", ExtArgs["result"]["appConfig"]>

  export type $AppConfigPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AppConfig"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      Id: number
      OnAirSyncEnabled: boolean
      OnAirVASyncEnabled: boolean
      OnAirVAMembersSyncEnabled: boolean
      OnAirCompanySyncEnabled: boolean
      VirtualAirlineId: string | null
      ApiKey: string | null
      DiscordServerInviteLink: string | null
      DiscordServerInviteLinkEnabled: boolean
      AcceptingNewMembers: boolean
      DiscordAuthEnabled: boolean
      LocalAuthEnabled: boolean
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
    readonly VirtualAirlineId: FieldRef<"AppConfig", 'String'>
    readonly ApiKey: FieldRef<"AppConfig", 'String'>
    readonly DiscordServerInviteLink: FieldRef<"AppConfig", 'String'>
    readonly DiscordServerInviteLinkEnabled: FieldRef<"AppConfig", 'Boolean'>
    readonly AcceptingNewMembers: FieldRef<"AppConfig", 'Boolean'>
    readonly DiscordAuthEnabled: FieldRef<"AppConfig", 'Boolean'>
    readonly LocalAuthEnabled: FieldRef<"AppConfig", 'Boolean'>
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
    Identifier: string | null
    Name: string | null
    Description: string | null
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
    Identifier: string | null
    Name: string | null
    Description: string | null
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
    Identifier: number
    Name: number
    Description: number
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
    Identifier?: true
    Name?: true
    Description?: true
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
    Identifier?: true
    Name?: true
    Description?: true
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
    Identifier?: true
    Name?: true
    Description?: true
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
    Identifier: string
    Name: string
    Description: string | null
    LastDividendsDistribution: Date | null
    LastComputationDate: Date | null
    ComputedMemberCount: number
    ComputedAircraftsCount: number
    ComputedNumberOfFlights30Days: number
    ComputedNumberOfFlightHours30Days: number
    ComputedMostUsedAirports: string
    LastConnection: Date | null
    LastReportDate: Date | null
    Reputation: Decimal | null
    CreationDate: Date
    DifficultyLevel: number
    Level: number
    LevelXP: number
    TotalContractsCompleted: number
    TotalContractsEarnedCredits: number
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
    Identifier?: boolean
    Name?: boolean
    Description?: boolean
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
  }, ExtArgs["result"]["virtualAirline"]>

  export type VirtualAirlineSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    Identifier?: boolean
    Name?: boolean
    Description?: boolean
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
  }, ExtArgs["result"]["virtualAirline"]>

  export type VirtualAirlineSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    Identifier?: boolean
    Name?: boolean
    Description?: boolean
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
  }, ExtArgs["result"]["virtualAirline"]>

  export type VirtualAirlineSelectScalar = {
    Id?: boolean
    Identifier?: boolean
    Name?: boolean
    Description?: boolean
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

  export type VirtualAirlineOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Id" | "Identifier" | "Name" | "Description" | "LastDividendsDistribution" | "LastComputationDate" | "ComputedMemberCount" | "ComputedAircraftsCount" | "ComputedNumberOfFlights30Days" | "ComputedNumberOfFlightHours30Days" | "ComputedMostUsedAirports" | "LastConnection" | "LastReportDate" | "Reputation" | "CreationDate" | "DifficultyLevel" | "Level" | "LevelXP" | "TotalContractsCompleted" | "TotalContractsEarnedCredits" | "LastRefresh" | "CreatedAt" | "UpdatedAt", ExtArgs["result"]["virtualAirline"]>

  export type $VirtualAirlinePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VirtualAirline"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      Id: string
      Identifier: string
      Name: string
      Description: string | null
      LastDividendsDistribution: Date | null
      LastComputationDate: Date | null
      ComputedMemberCount: number
      ComputedAircraftsCount: number
      ComputedNumberOfFlights30Days: number
      ComputedNumberOfFlightHours30Days: number
      ComputedMostUsedAirports: string
      LastConnection: Date | null
      LastReportDate: Date | null
      Reputation: Prisma.Decimal | null
      CreationDate: Date
      DifficultyLevel: number
      Level: number
      LevelXP: number
      TotalContractsCompleted: number
      TotalContractsEarnedCredits: number
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
    readonly Identifier: FieldRef<"VirtualAirline", 'String'>
    readonly Name: FieldRef<"VirtualAirline", 'String'>
    readonly Description: FieldRef<"VirtualAirline", 'String'>
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

  export type JobOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Id" | "IsEnabled" | "Type" | "Status" | "CronExpression" | "Name" | "Description" | "Parameters" | "LastRunAt" | "NextRunAt" | "LastError" | "ExecutionCount" | "CreatedAt" | "UpdatedAt", ExtArgs["result"]["job"]>

  export type $JobPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Job"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      Id: string
      IsEnabled: boolean
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
    VirtualAirlineId: 'VirtualAirlineId',
    ApiKey: 'ApiKey',
    DiscordServerInviteLink: 'DiscordServerInviteLink',
    DiscordServerInviteLinkEnabled: 'DiscordServerInviteLinkEnabled',
    AcceptingNewMembers: 'AcceptingNewMembers',
    DiscordAuthEnabled: 'DiscordAuthEnabled',
    LocalAuthEnabled: 'LocalAuthEnabled',
    CreatedAt: 'CreatedAt',
    UpdatedAt: 'UpdatedAt'
  };

  export type AppConfigScalarFieldEnum = (typeof AppConfigScalarFieldEnum)[keyof typeof AppConfigScalarFieldEnum]


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
    Identifier: 'Identifier',
    Name: 'Name',
    Description: 'Description',
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


  export const JobScalarFieldEnum: {
    Id: 'Id',
    IsEnabled: 'IsEnabled',
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
    VirtualAirlineId?: UuidNullableFilter<"AppConfig"> | string | null
    ApiKey?: UuidNullableFilter<"AppConfig"> | string | null
    DiscordServerInviteLink?: StringNullableFilter<"AppConfig"> | string | null
    DiscordServerInviteLinkEnabled?: BoolFilter<"AppConfig"> | boolean
    AcceptingNewMembers?: BoolFilter<"AppConfig"> | boolean
    DiscordAuthEnabled?: BoolFilter<"AppConfig"> | boolean
    LocalAuthEnabled?: BoolFilter<"AppConfig"> | boolean
    CreatedAt?: DateTimeFilter<"AppConfig"> | Date | string
    UpdatedAt?: DateTimeFilter<"AppConfig"> | Date | string
  }

  export type AppConfigOrderByWithRelationInput = {
    Id?: SortOrder
    OnAirSyncEnabled?: SortOrder
    OnAirVASyncEnabled?: SortOrder
    OnAirVAMembersSyncEnabled?: SortOrder
    OnAirCompanySyncEnabled?: SortOrder
    VirtualAirlineId?: SortOrderInput | SortOrder
    ApiKey?: SortOrderInput | SortOrder
    DiscordServerInviteLink?: SortOrderInput | SortOrder
    DiscordServerInviteLinkEnabled?: SortOrder
    AcceptingNewMembers?: SortOrder
    DiscordAuthEnabled?: SortOrder
    LocalAuthEnabled?: SortOrder
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
    VirtualAirlineId?: UuidNullableFilter<"AppConfig"> | string | null
    ApiKey?: UuidNullableFilter<"AppConfig"> | string | null
    DiscordServerInviteLink?: StringNullableFilter<"AppConfig"> | string | null
    DiscordServerInviteLinkEnabled?: BoolFilter<"AppConfig"> | boolean
    AcceptingNewMembers?: BoolFilter<"AppConfig"> | boolean
    DiscordAuthEnabled?: BoolFilter<"AppConfig"> | boolean
    LocalAuthEnabled?: BoolFilter<"AppConfig"> | boolean
    CreatedAt?: DateTimeFilter<"AppConfig"> | Date | string
    UpdatedAt?: DateTimeFilter<"AppConfig"> | Date | string
  }, "Id">

  export type AppConfigOrderByWithAggregationInput = {
    Id?: SortOrder
    OnAirSyncEnabled?: SortOrder
    OnAirVASyncEnabled?: SortOrder
    OnAirVAMembersSyncEnabled?: SortOrder
    OnAirCompanySyncEnabled?: SortOrder
    VirtualAirlineId?: SortOrderInput | SortOrder
    ApiKey?: SortOrderInput | SortOrder
    DiscordServerInviteLink?: SortOrderInput | SortOrder
    DiscordServerInviteLinkEnabled?: SortOrder
    AcceptingNewMembers?: SortOrder
    DiscordAuthEnabled?: SortOrder
    LocalAuthEnabled?: SortOrder
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
    VirtualAirlineId?: UuidNullableWithAggregatesFilter<"AppConfig"> | string | null
    ApiKey?: UuidNullableWithAggregatesFilter<"AppConfig"> | string | null
    DiscordServerInviteLink?: StringNullableWithAggregatesFilter<"AppConfig"> | string | null
    DiscordServerInviteLinkEnabled?: BoolWithAggregatesFilter<"AppConfig"> | boolean
    AcceptingNewMembers?: BoolWithAggregatesFilter<"AppConfig"> | boolean
    DiscordAuthEnabled?: BoolWithAggregatesFilter<"AppConfig"> | boolean
    LocalAuthEnabled?: BoolWithAggregatesFilter<"AppConfig"> | boolean
    CreatedAt?: DateTimeWithAggregatesFilter<"AppConfig"> | Date | string
    UpdatedAt?: DateTimeWithAggregatesFilter<"AppConfig"> | Date | string
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
    Identifier?: StringFilter<"VirtualAirline"> | string
    Name?: StringFilter<"VirtualAirline"> | string
    Description?: StringNullableFilter<"VirtualAirline"> | string | null
    LastDividendsDistribution?: DateTimeNullableFilter<"VirtualAirline"> | Date | string | null
    LastComputationDate?: DateTimeNullableFilter<"VirtualAirline"> | Date | string | null
    ComputedMemberCount?: IntFilter<"VirtualAirline"> | number
    ComputedAircraftsCount?: IntFilter<"VirtualAirline"> | number
    ComputedNumberOfFlights30Days?: IntFilter<"VirtualAirline"> | number
    ComputedNumberOfFlightHours30Days?: IntFilter<"VirtualAirline"> | number
    ComputedMostUsedAirports?: StringFilter<"VirtualAirline"> | string
    LastConnection?: DateTimeNullableFilter<"VirtualAirline"> | Date | string | null
    LastReportDate?: DateTimeNullableFilter<"VirtualAirline"> | Date | string | null
    Reputation?: DecimalNullableFilter<"VirtualAirline"> | Decimal | DecimalJsLike | number | string | null
    CreationDate?: DateTimeFilter<"VirtualAirline"> | Date | string
    DifficultyLevel?: IntFilter<"VirtualAirline"> | number
    Level?: IntFilter<"VirtualAirline"> | number
    LevelXP?: IntFilter<"VirtualAirline"> | number
    TotalContractsCompleted?: IntFilter<"VirtualAirline"> | number
    TotalContractsEarnedCredits?: IntFilter<"VirtualAirline"> | number
    LastRefresh?: DateTimeNullableFilter<"VirtualAirline"> | Date | string | null
    CreatedAt?: DateTimeFilter<"VirtualAirline"> | Date | string
    UpdatedAt?: DateTimeFilter<"VirtualAirline"> | Date | string
  }

  export type VirtualAirlineOrderByWithRelationInput = {
    Id?: SortOrder
    Identifier?: SortOrder
    Name?: SortOrder
    Description?: SortOrderInput | SortOrder
    LastDividendsDistribution?: SortOrderInput | SortOrder
    LastComputationDate?: SortOrderInput | SortOrder
    ComputedMemberCount?: SortOrder
    ComputedAircraftsCount?: SortOrder
    ComputedNumberOfFlights30Days?: SortOrder
    ComputedNumberOfFlightHours30Days?: SortOrder
    ComputedMostUsedAirports?: SortOrder
    LastConnection?: SortOrderInput | SortOrder
    LastReportDate?: SortOrderInput | SortOrder
    Reputation?: SortOrderInput | SortOrder
    CreationDate?: SortOrder
    DifficultyLevel?: SortOrder
    Level?: SortOrder
    LevelXP?: SortOrder
    TotalContractsCompleted?: SortOrder
    TotalContractsEarnedCredits?: SortOrder
    LastRefresh?: SortOrderInput | SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
  }

  export type VirtualAirlineWhereUniqueInput = Prisma.AtLeast<{
    Id?: string
    Identifier?: string
    AND?: VirtualAirlineWhereInput | VirtualAirlineWhereInput[]
    OR?: VirtualAirlineWhereInput[]
    NOT?: VirtualAirlineWhereInput | VirtualAirlineWhereInput[]
    Name?: StringFilter<"VirtualAirline"> | string
    Description?: StringNullableFilter<"VirtualAirline"> | string | null
    LastDividendsDistribution?: DateTimeNullableFilter<"VirtualAirline"> | Date | string | null
    LastComputationDate?: DateTimeNullableFilter<"VirtualAirline"> | Date | string | null
    ComputedMemberCount?: IntFilter<"VirtualAirline"> | number
    ComputedAircraftsCount?: IntFilter<"VirtualAirline"> | number
    ComputedNumberOfFlights30Days?: IntFilter<"VirtualAirline"> | number
    ComputedNumberOfFlightHours30Days?: IntFilter<"VirtualAirline"> | number
    ComputedMostUsedAirports?: StringFilter<"VirtualAirline"> | string
    LastConnection?: DateTimeNullableFilter<"VirtualAirline"> | Date | string | null
    LastReportDate?: DateTimeNullableFilter<"VirtualAirline"> | Date | string | null
    Reputation?: DecimalNullableFilter<"VirtualAirline"> | Decimal | DecimalJsLike | number | string | null
    CreationDate?: DateTimeFilter<"VirtualAirline"> | Date | string
    DifficultyLevel?: IntFilter<"VirtualAirline"> | number
    Level?: IntFilter<"VirtualAirline"> | number
    LevelXP?: IntFilter<"VirtualAirline"> | number
    TotalContractsCompleted?: IntFilter<"VirtualAirline"> | number
    TotalContractsEarnedCredits?: IntFilter<"VirtualAirline"> | number
    LastRefresh?: DateTimeNullableFilter<"VirtualAirline"> | Date | string | null
    CreatedAt?: DateTimeFilter<"VirtualAirline"> | Date | string
    UpdatedAt?: DateTimeFilter<"VirtualAirline"> | Date | string
  }, "Id" | "Identifier">

  export type VirtualAirlineOrderByWithAggregationInput = {
    Id?: SortOrder
    Identifier?: SortOrder
    Name?: SortOrder
    Description?: SortOrderInput | SortOrder
    LastDividendsDistribution?: SortOrderInput | SortOrder
    LastComputationDate?: SortOrderInput | SortOrder
    ComputedMemberCount?: SortOrder
    ComputedAircraftsCount?: SortOrder
    ComputedNumberOfFlights30Days?: SortOrder
    ComputedNumberOfFlightHours30Days?: SortOrder
    ComputedMostUsedAirports?: SortOrder
    LastConnection?: SortOrderInput | SortOrder
    LastReportDate?: SortOrderInput | SortOrder
    Reputation?: SortOrderInput | SortOrder
    CreationDate?: SortOrder
    DifficultyLevel?: SortOrder
    Level?: SortOrder
    LevelXP?: SortOrder
    TotalContractsCompleted?: SortOrder
    TotalContractsEarnedCredits?: SortOrder
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
    Identifier?: StringWithAggregatesFilter<"VirtualAirline"> | string
    Name?: StringWithAggregatesFilter<"VirtualAirline"> | string
    Description?: StringNullableWithAggregatesFilter<"VirtualAirline"> | string | null
    LastDividendsDistribution?: DateTimeNullableWithAggregatesFilter<"VirtualAirline"> | Date | string | null
    LastComputationDate?: DateTimeNullableWithAggregatesFilter<"VirtualAirline"> | Date | string | null
    ComputedMemberCount?: IntWithAggregatesFilter<"VirtualAirline"> | number
    ComputedAircraftsCount?: IntWithAggregatesFilter<"VirtualAirline"> | number
    ComputedNumberOfFlights30Days?: IntWithAggregatesFilter<"VirtualAirline"> | number
    ComputedNumberOfFlightHours30Days?: IntWithAggregatesFilter<"VirtualAirline"> | number
    ComputedMostUsedAirports?: StringWithAggregatesFilter<"VirtualAirline"> | string
    LastConnection?: DateTimeNullableWithAggregatesFilter<"VirtualAirline"> | Date | string | null
    LastReportDate?: DateTimeNullableWithAggregatesFilter<"VirtualAirline"> | Date | string | null
    Reputation?: DecimalNullableWithAggregatesFilter<"VirtualAirline"> | Decimal | DecimalJsLike | number | string | null
    CreationDate?: DateTimeWithAggregatesFilter<"VirtualAirline"> | Date | string
    DifficultyLevel?: IntWithAggregatesFilter<"VirtualAirline"> | number
    Level?: IntWithAggregatesFilter<"VirtualAirline"> | number
    LevelXP?: IntWithAggregatesFilter<"VirtualAirline"> | number
    TotalContractsCompleted?: IntWithAggregatesFilter<"VirtualAirline"> | number
    TotalContractsEarnedCredits?: IntWithAggregatesFilter<"VirtualAirline"> | number
    LastRefresh?: DateTimeNullableWithAggregatesFilter<"VirtualAirline"> | Date | string | null
    CreatedAt?: DateTimeWithAggregatesFilter<"VirtualAirline"> | Date | string
    UpdatedAt?: DateTimeWithAggregatesFilter<"VirtualAirline"> | Date | string
  }

  export type JobWhereInput = {
    AND?: JobWhereInput | JobWhereInput[]
    OR?: JobWhereInput[]
    NOT?: JobWhereInput | JobWhereInput[]
    Id?: UuidFilter<"Job"> | string
    IsEnabled?: BoolFilter<"Job"> | boolean
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
    VirtualAirlineId?: string | null
    ApiKey?: string | null
    DiscordServerInviteLink?: string | null
    DiscordServerInviteLinkEnabled?: boolean
    AcceptingNewMembers?: boolean
    DiscordAuthEnabled?: boolean
    LocalAuthEnabled?: boolean
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
  }

  export type AppConfigUncheckedCreateInput = {
    Id?: number
    OnAirSyncEnabled?: boolean
    OnAirVASyncEnabled?: boolean
    OnAirVAMembersSyncEnabled?: boolean
    OnAirCompanySyncEnabled?: boolean
    VirtualAirlineId?: string | null
    ApiKey?: string | null
    DiscordServerInviteLink?: string | null
    DiscordServerInviteLinkEnabled?: boolean
    AcceptingNewMembers?: boolean
    DiscordAuthEnabled?: boolean
    LocalAuthEnabled?: boolean
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
  }

  export type AppConfigUpdateInput = {
    OnAirSyncEnabled?: BoolFieldUpdateOperationsInput | boolean
    OnAirVASyncEnabled?: BoolFieldUpdateOperationsInput | boolean
    OnAirVAMembersSyncEnabled?: BoolFieldUpdateOperationsInput | boolean
    OnAirCompanySyncEnabled?: BoolFieldUpdateOperationsInput | boolean
    VirtualAirlineId?: NullableStringFieldUpdateOperationsInput | string | null
    ApiKey?: NullableStringFieldUpdateOperationsInput | string | null
    DiscordServerInviteLink?: NullableStringFieldUpdateOperationsInput | string | null
    DiscordServerInviteLinkEnabled?: BoolFieldUpdateOperationsInput | boolean
    AcceptingNewMembers?: BoolFieldUpdateOperationsInput | boolean
    DiscordAuthEnabled?: BoolFieldUpdateOperationsInput | boolean
    LocalAuthEnabled?: BoolFieldUpdateOperationsInput | boolean
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppConfigUncheckedUpdateInput = {
    Id?: IntFieldUpdateOperationsInput | number
    OnAirSyncEnabled?: BoolFieldUpdateOperationsInput | boolean
    OnAirVASyncEnabled?: BoolFieldUpdateOperationsInput | boolean
    OnAirVAMembersSyncEnabled?: BoolFieldUpdateOperationsInput | boolean
    OnAirCompanySyncEnabled?: BoolFieldUpdateOperationsInput | boolean
    VirtualAirlineId?: NullableStringFieldUpdateOperationsInput | string | null
    ApiKey?: NullableStringFieldUpdateOperationsInput | string | null
    DiscordServerInviteLink?: NullableStringFieldUpdateOperationsInput | string | null
    DiscordServerInviteLinkEnabled?: BoolFieldUpdateOperationsInput | boolean
    AcceptingNewMembers?: BoolFieldUpdateOperationsInput | boolean
    DiscordAuthEnabled?: BoolFieldUpdateOperationsInput | boolean
    LocalAuthEnabled?: BoolFieldUpdateOperationsInput | boolean
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppConfigCreateManyInput = {
    Id?: number
    OnAirSyncEnabled?: boolean
    OnAirVASyncEnabled?: boolean
    OnAirVAMembersSyncEnabled?: boolean
    OnAirCompanySyncEnabled?: boolean
    VirtualAirlineId?: string | null
    ApiKey?: string | null
    DiscordServerInviteLink?: string | null
    DiscordServerInviteLinkEnabled?: boolean
    AcceptingNewMembers?: boolean
    DiscordAuthEnabled?: boolean
    LocalAuthEnabled?: boolean
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
  }

  export type AppConfigUpdateManyMutationInput = {
    OnAirSyncEnabled?: BoolFieldUpdateOperationsInput | boolean
    OnAirVASyncEnabled?: BoolFieldUpdateOperationsInput | boolean
    OnAirVAMembersSyncEnabled?: BoolFieldUpdateOperationsInput | boolean
    OnAirCompanySyncEnabled?: BoolFieldUpdateOperationsInput | boolean
    VirtualAirlineId?: NullableStringFieldUpdateOperationsInput | string | null
    ApiKey?: NullableStringFieldUpdateOperationsInput | string | null
    DiscordServerInviteLink?: NullableStringFieldUpdateOperationsInput | string | null
    DiscordServerInviteLinkEnabled?: BoolFieldUpdateOperationsInput | boolean
    AcceptingNewMembers?: BoolFieldUpdateOperationsInput | boolean
    DiscordAuthEnabled?: BoolFieldUpdateOperationsInput | boolean
    LocalAuthEnabled?: BoolFieldUpdateOperationsInput | boolean
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppConfigUncheckedUpdateManyInput = {
    Id?: IntFieldUpdateOperationsInput | number
    OnAirSyncEnabled?: BoolFieldUpdateOperationsInput | boolean
    OnAirVASyncEnabled?: BoolFieldUpdateOperationsInput | boolean
    OnAirVAMembersSyncEnabled?: BoolFieldUpdateOperationsInput | boolean
    OnAirCompanySyncEnabled?: BoolFieldUpdateOperationsInput | boolean
    VirtualAirlineId?: NullableStringFieldUpdateOperationsInput | string | null
    ApiKey?: NullableStringFieldUpdateOperationsInput | string | null
    DiscordServerInviteLink?: NullableStringFieldUpdateOperationsInput | string | null
    DiscordServerInviteLinkEnabled?: BoolFieldUpdateOperationsInput | boolean
    AcceptingNewMembers?: BoolFieldUpdateOperationsInput | boolean
    DiscordAuthEnabled?: BoolFieldUpdateOperationsInput | boolean
    LocalAuthEnabled?: BoolFieldUpdateOperationsInput | boolean
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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
    Identifier: string
    Name: string
    Description?: string | null
    LastDividendsDistribution?: Date | string | null
    LastComputationDate?: Date | string | null
    ComputedMemberCount: number
    ComputedAircraftsCount: number
    ComputedNumberOfFlights30Days: number
    ComputedNumberOfFlightHours30Days: number
    ComputedMostUsedAirports: string
    LastConnection?: Date | string | null
    LastReportDate?: Date | string | null
    Reputation?: Decimal | DecimalJsLike | number | string | null
    CreationDate: Date | string
    DifficultyLevel: number
    Level: number
    LevelXP: number
    TotalContractsCompleted: number
    TotalContractsEarnedCredits: number
    LastRefresh?: Date | string | null
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
  }

  export type VirtualAirlineUncheckedCreateInput = {
    Id: string
    Identifier: string
    Name: string
    Description?: string | null
    LastDividendsDistribution?: Date | string | null
    LastComputationDate?: Date | string | null
    ComputedMemberCount: number
    ComputedAircraftsCount: number
    ComputedNumberOfFlights30Days: number
    ComputedNumberOfFlightHours30Days: number
    ComputedMostUsedAirports: string
    LastConnection?: Date | string | null
    LastReportDate?: Date | string | null
    Reputation?: Decimal | DecimalJsLike | number | string | null
    CreationDate: Date | string
    DifficultyLevel: number
    Level: number
    LevelXP: number
    TotalContractsCompleted: number
    TotalContractsEarnedCredits: number
    LastRefresh?: Date | string | null
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
  }

  export type VirtualAirlineUpdateInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Identifier?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    LastDividendsDistribution?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    LastComputationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ComputedMemberCount?: IntFieldUpdateOperationsInput | number
    ComputedAircraftsCount?: IntFieldUpdateOperationsInput | number
    ComputedNumberOfFlights30Days?: IntFieldUpdateOperationsInput | number
    ComputedNumberOfFlightHours30Days?: IntFieldUpdateOperationsInput | number
    ComputedMostUsedAirports?: StringFieldUpdateOperationsInput | string
    LastConnection?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    LastReportDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Reputation?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    CreationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    DifficultyLevel?: IntFieldUpdateOperationsInput | number
    Level?: IntFieldUpdateOperationsInput | number
    LevelXP?: IntFieldUpdateOperationsInput | number
    TotalContractsCompleted?: IntFieldUpdateOperationsInput | number
    TotalContractsEarnedCredits?: IntFieldUpdateOperationsInput | number
    LastRefresh?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VirtualAirlineUncheckedUpdateInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Identifier?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    LastDividendsDistribution?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    LastComputationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ComputedMemberCount?: IntFieldUpdateOperationsInput | number
    ComputedAircraftsCount?: IntFieldUpdateOperationsInput | number
    ComputedNumberOfFlights30Days?: IntFieldUpdateOperationsInput | number
    ComputedNumberOfFlightHours30Days?: IntFieldUpdateOperationsInput | number
    ComputedMostUsedAirports?: StringFieldUpdateOperationsInput | string
    LastConnection?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    LastReportDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Reputation?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    CreationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    DifficultyLevel?: IntFieldUpdateOperationsInput | number
    Level?: IntFieldUpdateOperationsInput | number
    LevelXP?: IntFieldUpdateOperationsInput | number
    TotalContractsCompleted?: IntFieldUpdateOperationsInput | number
    TotalContractsEarnedCredits?: IntFieldUpdateOperationsInput | number
    LastRefresh?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VirtualAirlineCreateManyInput = {
    Id: string
    Identifier: string
    Name: string
    Description?: string | null
    LastDividendsDistribution?: Date | string | null
    LastComputationDate?: Date | string | null
    ComputedMemberCount: number
    ComputedAircraftsCount: number
    ComputedNumberOfFlights30Days: number
    ComputedNumberOfFlightHours30Days: number
    ComputedMostUsedAirports: string
    LastConnection?: Date | string | null
    LastReportDate?: Date | string | null
    Reputation?: Decimal | DecimalJsLike | number | string | null
    CreationDate: Date | string
    DifficultyLevel: number
    Level: number
    LevelXP: number
    TotalContractsCompleted: number
    TotalContractsEarnedCredits: number
    LastRefresh?: Date | string | null
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
  }

  export type VirtualAirlineUpdateManyMutationInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Identifier?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    LastDividendsDistribution?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    LastComputationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ComputedMemberCount?: IntFieldUpdateOperationsInput | number
    ComputedAircraftsCount?: IntFieldUpdateOperationsInput | number
    ComputedNumberOfFlights30Days?: IntFieldUpdateOperationsInput | number
    ComputedNumberOfFlightHours30Days?: IntFieldUpdateOperationsInput | number
    ComputedMostUsedAirports?: StringFieldUpdateOperationsInput | string
    LastConnection?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    LastReportDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Reputation?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    CreationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    DifficultyLevel?: IntFieldUpdateOperationsInput | number
    Level?: IntFieldUpdateOperationsInput | number
    LevelXP?: IntFieldUpdateOperationsInput | number
    TotalContractsCompleted?: IntFieldUpdateOperationsInput | number
    TotalContractsEarnedCredits?: IntFieldUpdateOperationsInput | number
    LastRefresh?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VirtualAirlineUncheckedUpdateManyInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Identifier?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    LastDividendsDistribution?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    LastComputationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ComputedMemberCount?: IntFieldUpdateOperationsInput | number
    ComputedAircraftsCount?: IntFieldUpdateOperationsInput | number
    ComputedNumberOfFlights30Days?: IntFieldUpdateOperationsInput | number
    ComputedNumberOfFlightHours30Days?: IntFieldUpdateOperationsInput | number
    ComputedMostUsedAirports?: StringFieldUpdateOperationsInput | string
    LastConnection?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    LastReportDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Reputation?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    CreationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    DifficultyLevel?: IntFieldUpdateOperationsInput | number
    Level?: IntFieldUpdateOperationsInput | number
    LevelXP?: IntFieldUpdateOperationsInput | number
    TotalContractsCompleted?: IntFieldUpdateOperationsInput | number
    TotalContractsEarnedCredits?: IntFieldUpdateOperationsInput | number
    LastRefresh?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobCreateInput = {
    Id?: string
    IsEnabled?: boolean
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
    VirtualAirlineId?: SortOrder
    ApiKey?: SortOrder
    DiscordServerInviteLink?: SortOrder
    DiscordServerInviteLinkEnabled?: SortOrder
    AcceptingNewMembers?: SortOrder
    DiscordAuthEnabled?: SortOrder
    LocalAuthEnabled?: SortOrder
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
    VirtualAirlineId?: SortOrder
    ApiKey?: SortOrder
    DiscordServerInviteLink?: SortOrder
    DiscordServerInviteLinkEnabled?: SortOrder
    AcceptingNewMembers?: SortOrder
    DiscordAuthEnabled?: SortOrder
    LocalAuthEnabled?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
  }

  export type AppConfigMinOrderByAggregateInput = {
    Id?: SortOrder
    OnAirSyncEnabled?: SortOrder
    OnAirVASyncEnabled?: SortOrder
    OnAirVAMembersSyncEnabled?: SortOrder
    OnAirCompanySyncEnabled?: SortOrder
    VirtualAirlineId?: SortOrder
    ApiKey?: SortOrder
    DiscordServerInviteLink?: SortOrder
    DiscordServerInviteLinkEnabled?: SortOrder
    AcceptingNewMembers?: SortOrder
    DiscordAuthEnabled?: SortOrder
    LocalAuthEnabled?: SortOrder
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

  export type VirtualAirlineCountOrderByAggregateInput = {
    Id?: SortOrder
    Identifier?: SortOrder
    Name?: SortOrder
    Description?: SortOrder
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
    Identifier?: SortOrder
    Name?: SortOrder
    Description?: SortOrder
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
    Identifier?: SortOrder
    Name?: SortOrder
    Description?: SortOrder
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

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
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