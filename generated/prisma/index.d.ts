
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model VerificationToken
 * 
 */
export type VerificationToken = $Result.DefaultSelection<Prisma.$VerificationTokenPayload>
/**
 * Model FundAccount
 * 
 */
export type FundAccount = $Result.DefaultSelection<Prisma.$FundAccountPayload>
/**
 * Model FundTransaction
 * 
 */
export type FundTransaction = $Result.DefaultSelection<Prisma.$FundTransactionPayload>
/**
 * Model ScreenerSuggestion
 * 
 */
export type ScreenerSuggestion = $Result.DefaultSelection<Prisma.$ScreenerSuggestionPayload>
/**
 * Model SuggestionSnapshot
 * 
 */
export type SuggestionSnapshot = $Result.DefaultSelection<Prisma.$SuggestionSnapshotPayload>
/**
 * Model Trade
 * 
 */
export type Trade = $Result.DefaultSelection<Prisma.$TradePayload>
/**
 * Model TradeSnapshot
 * 
 */
export type TradeSnapshot = $Result.DefaultSelection<Prisma.$TradeSnapshotPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const FundTxType: {
  DEPOSIT: 'DEPOSIT',
  WITHDRAW: 'WITHDRAW'
};

export type FundTxType = (typeof FundTxType)[keyof typeof FundTxType]


export const SuggestionStatus: {
  ACTIVE: 'ACTIVE',
  EXPIRED: 'EXPIRED',
  TRADED: 'TRADED',
  SL_HIT: 'SL_HIT',
  T1_HIT: 'T1_HIT',
  T2_HIT: 'T2_HIT'
};

export type SuggestionStatus = (typeof SuggestionStatus)[keyof typeof SuggestionStatus]


export const TradeStatus: {
  OPEN: 'OPEN',
  CLOSED: 'CLOSED',
  SL_HIT: 'SL_HIT',
  T1_HIT: 'T1_HIT',
  T2_HIT: 'T2_HIT'
};

export type TradeStatus = (typeof TradeStatus)[keyof typeof TradeStatus]

}

export type FundTxType = $Enums.FundTxType

export const FundTxType: typeof $Enums.FundTxType

export type SuggestionStatus = $Enums.SuggestionStatus

export const SuggestionStatus: typeof $Enums.SuggestionStatus

export type TradeStatus = $Enums.TradeStatus

export const TradeStatus: typeof $Enums.TradeStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Accounts
 * const accounts = await prisma.account.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Accounts
   * const accounts = await prisma.account.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.verificationToken`: Exposes CRUD operations for the **VerificationToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VerificationTokens
    * const verificationTokens = await prisma.verificationToken.findMany()
    * ```
    */
  get verificationToken(): Prisma.VerificationTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fundAccount`: Exposes CRUD operations for the **FundAccount** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FundAccounts
    * const fundAccounts = await prisma.fundAccount.findMany()
    * ```
    */
  get fundAccount(): Prisma.FundAccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fundTransaction`: Exposes CRUD operations for the **FundTransaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FundTransactions
    * const fundTransactions = await prisma.fundTransaction.findMany()
    * ```
    */
  get fundTransaction(): Prisma.FundTransactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.screenerSuggestion`: Exposes CRUD operations for the **ScreenerSuggestion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ScreenerSuggestions
    * const screenerSuggestions = await prisma.screenerSuggestion.findMany()
    * ```
    */
  get screenerSuggestion(): Prisma.ScreenerSuggestionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.suggestionSnapshot`: Exposes CRUD operations for the **SuggestionSnapshot** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SuggestionSnapshots
    * const suggestionSnapshots = await prisma.suggestionSnapshot.findMany()
    * ```
    */
  get suggestionSnapshot(): Prisma.SuggestionSnapshotDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.trade`: Exposes CRUD operations for the **Trade** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Trades
    * const trades = await prisma.trade.findMany()
    * ```
    */
  get trade(): Prisma.TradeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tradeSnapshot`: Exposes CRUD operations for the **TradeSnapshot** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TradeSnapshots
    * const tradeSnapshots = await prisma.tradeSnapshot.findMany()
    * ```
    */
  get tradeSnapshot(): Prisma.TradeSnapshotDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    Account: 'Account',
    Session: 'Session',
    User: 'User',
    VerificationToken: 'VerificationToken',
    FundAccount: 'FundAccount',
    FundTransaction: 'FundTransaction',
    ScreenerSuggestion: 'ScreenerSuggestion',
    SuggestionSnapshot: 'SuggestionSnapshot',
    Trade: 'Trade',
    TradeSnapshot: 'TradeSnapshot'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "account" | "session" | "user" | "verificationToken" | "fundAccount" | "fundTransaction" | "screenerSuggestion" | "suggestionSnapshot" | "trade" | "tradeSnapshot"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
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
      VerificationToken: {
        payload: Prisma.$VerificationTokenPayload<ExtArgs>
        fields: Prisma.VerificationTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findFirst: {
            args: Prisma.VerificationTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findMany: {
            args: Prisma.VerificationTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          create: {
            args: Prisma.VerificationTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          createMany: {
            args: Prisma.VerificationTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerificationTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          delete: {
            args: Prisma.VerificationTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          update: {
            args: Prisma.VerificationTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          deleteMany: {
            args: Prisma.VerificationTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VerificationTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          upsert: {
            args: Prisma.VerificationTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          aggregate: {
            args: Prisma.VerificationTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerificationToken>
          }
          groupBy: {
            args: Prisma.VerificationTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationTokenCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenCountAggregateOutputType> | number
          }
        }
      }
      FundAccount: {
        payload: Prisma.$FundAccountPayload<ExtArgs>
        fields: Prisma.FundAccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FundAccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundAccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FundAccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundAccountPayload>
          }
          findFirst: {
            args: Prisma.FundAccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundAccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FundAccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundAccountPayload>
          }
          findMany: {
            args: Prisma.FundAccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundAccountPayload>[]
          }
          create: {
            args: Prisma.FundAccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundAccountPayload>
          }
          createMany: {
            args: Prisma.FundAccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FundAccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundAccountPayload>[]
          }
          delete: {
            args: Prisma.FundAccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundAccountPayload>
          }
          update: {
            args: Prisma.FundAccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundAccountPayload>
          }
          deleteMany: {
            args: Prisma.FundAccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FundAccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FundAccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundAccountPayload>[]
          }
          upsert: {
            args: Prisma.FundAccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundAccountPayload>
          }
          aggregate: {
            args: Prisma.FundAccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFundAccount>
          }
          groupBy: {
            args: Prisma.FundAccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<FundAccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.FundAccountCountArgs<ExtArgs>
            result: $Utils.Optional<FundAccountCountAggregateOutputType> | number
          }
        }
      }
      FundTransaction: {
        payload: Prisma.$FundTransactionPayload<ExtArgs>
        fields: Prisma.FundTransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FundTransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundTransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FundTransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundTransactionPayload>
          }
          findFirst: {
            args: Prisma.FundTransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundTransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FundTransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundTransactionPayload>
          }
          findMany: {
            args: Prisma.FundTransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundTransactionPayload>[]
          }
          create: {
            args: Prisma.FundTransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundTransactionPayload>
          }
          createMany: {
            args: Prisma.FundTransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FundTransactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundTransactionPayload>[]
          }
          delete: {
            args: Prisma.FundTransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundTransactionPayload>
          }
          update: {
            args: Prisma.FundTransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundTransactionPayload>
          }
          deleteMany: {
            args: Prisma.FundTransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FundTransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FundTransactionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundTransactionPayload>[]
          }
          upsert: {
            args: Prisma.FundTransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundTransactionPayload>
          }
          aggregate: {
            args: Prisma.FundTransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFundTransaction>
          }
          groupBy: {
            args: Prisma.FundTransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<FundTransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.FundTransactionCountArgs<ExtArgs>
            result: $Utils.Optional<FundTransactionCountAggregateOutputType> | number
          }
        }
      }
      ScreenerSuggestion: {
        payload: Prisma.$ScreenerSuggestionPayload<ExtArgs>
        fields: Prisma.ScreenerSuggestionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ScreenerSuggestionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScreenerSuggestionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ScreenerSuggestionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScreenerSuggestionPayload>
          }
          findFirst: {
            args: Prisma.ScreenerSuggestionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScreenerSuggestionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ScreenerSuggestionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScreenerSuggestionPayload>
          }
          findMany: {
            args: Prisma.ScreenerSuggestionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScreenerSuggestionPayload>[]
          }
          create: {
            args: Prisma.ScreenerSuggestionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScreenerSuggestionPayload>
          }
          createMany: {
            args: Prisma.ScreenerSuggestionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ScreenerSuggestionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScreenerSuggestionPayload>[]
          }
          delete: {
            args: Prisma.ScreenerSuggestionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScreenerSuggestionPayload>
          }
          update: {
            args: Prisma.ScreenerSuggestionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScreenerSuggestionPayload>
          }
          deleteMany: {
            args: Prisma.ScreenerSuggestionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ScreenerSuggestionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ScreenerSuggestionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScreenerSuggestionPayload>[]
          }
          upsert: {
            args: Prisma.ScreenerSuggestionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScreenerSuggestionPayload>
          }
          aggregate: {
            args: Prisma.ScreenerSuggestionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateScreenerSuggestion>
          }
          groupBy: {
            args: Prisma.ScreenerSuggestionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ScreenerSuggestionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ScreenerSuggestionCountArgs<ExtArgs>
            result: $Utils.Optional<ScreenerSuggestionCountAggregateOutputType> | number
          }
        }
      }
      SuggestionSnapshot: {
        payload: Prisma.$SuggestionSnapshotPayload<ExtArgs>
        fields: Prisma.SuggestionSnapshotFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SuggestionSnapshotFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuggestionSnapshotPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SuggestionSnapshotFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuggestionSnapshotPayload>
          }
          findFirst: {
            args: Prisma.SuggestionSnapshotFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuggestionSnapshotPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SuggestionSnapshotFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuggestionSnapshotPayload>
          }
          findMany: {
            args: Prisma.SuggestionSnapshotFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuggestionSnapshotPayload>[]
          }
          create: {
            args: Prisma.SuggestionSnapshotCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuggestionSnapshotPayload>
          }
          createMany: {
            args: Prisma.SuggestionSnapshotCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SuggestionSnapshotCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuggestionSnapshotPayload>[]
          }
          delete: {
            args: Prisma.SuggestionSnapshotDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuggestionSnapshotPayload>
          }
          update: {
            args: Prisma.SuggestionSnapshotUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuggestionSnapshotPayload>
          }
          deleteMany: {
            args: Prisma.SuggestionSnapshotDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SuggestionSnapshotUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SuggestionSnapshotUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuggestionSnapshotPayload>[]
          }
          upsert: {
            args: Prisma.SuggestionSnapshotUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuggestionSnapshotPayload>
          }
          aggregate: {
            args: Prisma.SuggestionSnapshotAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSuggestionSnapshot>
          }
          groupBy: {
            args: Prisma.SuggestionSnapshotGroupByArgs<ExtArgs>
            result: $Utils.Optional<SuggestionSnapshotGroupByOutputType>[]
          }
          count: {
            args: Prisma.SuggestionSnapshotCountArgs<ExtArgs>
            result: $Utils.Optional<SuggestionSnapshotCountAggregateOutputType> | number
          }
        }
      }
      Trade: {
        payload: Prisma.$TradePayload<ExtArgs>
        fields: Prisma.TradeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TradeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TradeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradePayload>
          }
          findFirst: {
            args: Prisma.TradeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TradeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradePayload>
          }
          findMany: {
            args: Prisma.TradeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradePayload>[]
          }
          create: {
            args: Prisma.TradeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradePayload>
          }
          createMany: {
            args: Prisma.TradeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TradeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradePayload>[]
          }
          delete: {
            args: Prisma.TradeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradePayload>
          }
          update: {
            args: Prisma.TradeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradePayload>
          }
          deleteMany: {
            args: Prisma.TradeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TradeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TradeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradePayload>[]
          }
          upsert: {
            args: Prisma.TradeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradePayload>
          }
          aggregate: {
            args: Prisma.TradeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTrade>
          }
          groupBy: {
            args: Prisma.TradeGroupByArgs<ExtArgs>
            result: $Utils.Optional<TradeGroupByOutputType>[]
          }
          count: {
            args: Prisma.TradeCountArgs<ExtArgs>
            result: $Utils.Optional<TradeCountAggregateOutputType> | number
          }
        }
      }
      TradeSnapshot: {
        payload: Prisma.$TradeSnapshotPayload<ExtArgs>
        fields: Prisma.TradeSnapshotFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TradeSnapshotFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradeSnapshotPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TradeSnapshotFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradeSnapshotPayload>
          }
          findFirst: {
            args: Prisma.TradeSnapshotFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradeSnapshotPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TradeSnapshotFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradeSnapshotPayload>
          }
          findMany: {
            args: Prisma.TradeSnapshotFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradeSnapshotPayload>[]
          }
          create: {
            args: Prisma.TradeSnapshotCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradeSnapshotPayload>
          }
          createMany: {
            args: Prisma.TradeSnapshotCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TradeSnapshotCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradeSnapshotPayload>[]
          }
          delete: {
            args: Prisma.TradeSnapshotDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradeSnapshotPayload>
          }
          update: {
            args: Prisma.TradeSnapshotUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradeSnapshotPayload>
          }
          deleteMany: {
            args: Prisma.TradeSnapshotDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TradeSnapshotUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TradeSnapshotUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradeSnapshotPayload>[]
          }
          upsert: {
            args: Prisma.TradeSnapshotUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradeSnapshotPayload>
          }
          aggregate: {
            args: Prisma.TradeSnapshotAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTradeSnapshot>
          }
          groupBy: {
            args: Prisma.TradeSnapshotGroupByArgs<ExtArgs>
            result: $Utils.Optional<TradeSnapshotGroupByOutputType>[]
          }
          count: {
            args: Prisma.TradeSnapshotCountArgs<ExtArgs>
            result: $Utils.Optional<TradeSnapshotCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    account?: AccountOmit
    session?: SessionOmit
    user?: UserOmit
    verificationToken?: VerificationTokenOmit
    fundAccount?: FundAccountOmit
    fundTransaction?: FundTransactionOmit
    screenerSuggestion?: ScreenerSuggestionOmit
    suggestionSnapshot?: SuggestionSnapshotOmit
    trade?: TradeOmit
    tradeSnapshot?: TradeSnapshotOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    accounts: number
    sessions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
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
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }


  /**
   * Count Type FundAccountCountOutputType
   */

  export type FundAccountCountOutputType = {
    transactions: number
  }

  export type FundAccountCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactions?: boolean | FundAccountCountOutputTypeCountTransactionsArgs
  }

  // Custom InputTypes
  /**
   * FundAccountCountOutputType without action
   */
  export type FundAccountCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FundAccountCountOutputType
     */
    select?: FundAccountCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FundAccountCountOutputType without action
   */
  export type FundAccountCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FundTransactionWhereInput
  }


  /**
   * Count Type ScreenerSuggestionCountOutputType
   */

  export type ScreenerSuggestionCountOutputType = {
    snapshots: number
  }

  export type ScreenerSuggestionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    snapshots?: boolean | ScreenerSuggestionCountOutputTypeCountSnapshotsArgs
  }

  // Custom InputTypes
  /**
   * ScreenerSuggestionCountOutputType without action
   */
  export type ScreenerSuggestionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScreenerSuggestionCountOutputType
     */
    select?: ScreenerSuggestionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ScreenerSuggestionCountOutputType without action
   */
  export type ScreenerSuggestionCountOutputTypeCountSnapshotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SuggestionSnapshotWhereInput
  }


  /**
   * Count Type TradeCountOutputType
   */

  export type TradeCountOutputType = {
    snapshots: number
  }

  export type TradeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    snapshots?: boolean | TradeCountOutputTypeCountSnapshotsArgs
  }

  // Custom InputTypes
  /**
   * TradeCountOutputType without action
   */
  export type TradeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TradeCountOutputType
     */
    select?: TradeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TradeCountOutputType without action
   */
  export type TradeCountOutputTypeCountSnapshotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TradeSnapshotWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountSumAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    provider: number
    providerAccountId: number
    refresh_token: number
    access_token: number
    expires_at: number
    token_type: number
    scope: number
    id_token: number
    session_state: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    expires_at?: true
  }

  export type AccountSumAggregateInputType = {
    expires_at?: true
  }

  export type AccountMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "provider" | "providerAccountId" | "refresh_token" | "access_token" | "expires_at" | "token_type" | "scope" | "id_token" | "session_state", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: string
      provider: string
      providerAccountId: string
      refresh_token: string | null
      access_token: string | null
      expires_at: number | null
      token_type: string | null
      scope: string | null
      id_token: string | null
      session_state: string | null
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
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
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly type: FieldRef<"Account", 'String'>
    readonly provider: FieldRef<"Account", 'String'>
    readonly providerAccountId: FieldRef<"Account", 'String'>
    readonly refresh_token: FieldRef<"Account", 'String'>
    readonly access_token: FieldRef<"Account", 'String'>
    readonly expires_at: FieldRef<"Account", 'Int'>
    readonly token_type: FieldRef<"Account", 'String'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly id_token: FieldRef<"Account", 'String'>
    readonly session_state: FieldRef<"Account", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account updateManyAndReturn
   */
  export type AccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    sessionToken: number
    userId: number
    expires: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    sessionToken: string
    userId: string
    expires: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sessionToken" | "userId" | "expires", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionToken: string
      userId: string
      expires: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
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
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly sessionToken: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly expires: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
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
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    emailVerified: number
    image: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
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
    id: string
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
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
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "emailVerified" | "image", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      sessions: Prisma.$SessionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      email: string | null
      emailVerified: Date | null
      image: string | null
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
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
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
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
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
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
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
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'DateTime'>
    readonly image: FieldRef<"User", 'String'>
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
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
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
    data?: XOR<UserCreateInput, UserUncheckedCreateInput>
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
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
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
   * Model VerificationToken
   */

  export type AggregateVerificationToken = {
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  export type VerificationTokenMinAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenMaxAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenCountAggregateOutputType = {
    identifier: number
    token: number
    expires: number
    _all: number
  }


  export type VerificationTokenMinAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenMaxAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenCountAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
    _all?: true
  }

  export type VerificationTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationToken to aggregate.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VerificationTokens
    **/
    _count?: true | VerificationTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type GetVerificationTokenAggregateType<T extends VerificationTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateVerificationToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerificationToken[P]>
      : GetScalarType<T[P], AggregateVerificationToken[P]>
  }




  export type VerificationTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationTokenWhereInput
    orderBy?: VerificationTokenOrderByWithAggregationInput | VerificationTokenOrderByWithAggregationInput[]
    by: VerificationTokenScalarFieldEnum[] | VerificationTokenScalarFieldEnum
    having?: VerificationTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationTokenCountAggregateInputType | true
    _min?: VerificationTokenMinAggregateInputType
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type VerificationTokenGroupByOutputType = {
    identifier: string
    token: string
    expires: Date
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  type GetVerificationTokenGroupByPayload<T extends VerificationTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
        }
      >
    >


  export type VerificationTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectScalar = {
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }

  export type VerificationTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"identifier" | "token" | "expires", ExtArgs["result"]["verificationToken"]>

  export type $VerificationTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VerificationToken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      identifier: string
      token: string
      expires: Date
    }, ExtArgs["result"]["verificationToken"]>
    composites: {}
  }

  type VerificationTokenGetPayload<S extends boolean | null | undefined | VerificationTokenDefaultArgs> = $Result.GetResult<Prisma.$VerificationTokenPayload, S>

  type VerificationTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationTokenCountAggregateInputType | true
    }

  export interface VerificationTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VerificationToken'], meta: { name: 'VerificationToken' } }
    /**
     * Find zero or one VerificationToken that matches the filter.
     * @param {VerificationTokenFindUniqueArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationTokenFindUniqueArgs>(args: SelectSubset<T, VerificationTokenFindUniqueArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VerificationToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationTokenFindUniqueOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationTokenFindFirstArgs>(args?: SelectSubset<T, VerificationTokenFindFirstArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VerificationTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany()
     * 
     * // Get first 10 VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany({ take: 10 })
     * 
     * // Only select the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.findMany({ select: { identifier: true } })
     * 
     */
    findMany<T extends VerificationTokenFindManyArgs>(args?: SelectSubset<T, VerificationTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VerificationToken.
     * @param {VerificationTokenCreateArgs} args - Arguments to create a VerificationToken.
     * @example
     * // Create one VerificationToken
     * const VerificationToken = await prisma.verificationToken.create({
     *   data: {
     *     // ... data to create a VerificationToken
     *   }
     * })
     * 
     */
    create<T extends VerificationTokenCreateArgs>(args: SelectSubset<T, VerificationTokenCreateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VerificationTokens.
     * @param {VerificationTokenCreateManyArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationTokenCreateManyArgs>(args?: SelectSubset<T, VerificationTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VerificationTokens and returns the data saved in the database.
     * @param {VerificationTokenCreateManyAndReturnArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VerificationTokens and only return the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.createManyAndReturn({
     *   select: { identifier: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VerificationTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, VerificationTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VerificationToken.
     * @param {VerificationTokenDeleteArgs} args - Arguments to delete one VerificationToken.
     * @example
     * // Delete one VerificationToken
     * const VerificationToken = await prisma.verificationToken.delete({
     *   where: {
     *     // ... filter to delete one VerificationToken
     *   }
     * })
     * 
     */
    delete<T extends VerificationTokenDeleteArgs>(args: SelectSubset<T, VerificationTokenDeleteArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VerificationToken.
     * @param {VerificationTokenUpdateArgs} args - Arguments to update one VerificationToken.
     * @example
     * // Update one VerificationToken
     * const verificationToken = await prisma.verificationToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationTokenUpdateArgs>(args: SelectSubset<T, VerificationTokenUpdateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VerificationTokens.
     * @param {VerificationTokenDeleteManyArgs} args - Arguments to filter VerificationTokens to delete.
     * @example
     * // Delete a few VerificationTokens
     * const { count } = await prisma.verificationToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationTokenDeleteManyArgs>(args?: SelectSubset<T, VerificationTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationTokenUpdateManyArgs>(args: SelectSubset<T, VerificationTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens and returns the data updated in the database.
     * @param {VerificationTokenUpdateManyAndReturnArgs} args - Arguments to update many VerificationTokens.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VerificationTokens and only return the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.updateManyAndReturn({
     *   select: { identifier: true },
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
    updateManyAndReturn<T extends VerificationTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, VerificationTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VerificationToken.
     * @param {VerificationTokenUpsertArgs} args - Arguments to update or create a VerificationToken.
     * @example
     * // Update or create a VerificationToken
     * const verificationToken = await prisma.verificationToken.upsert({
     *   create: {
     *     // ... data to create a VerificationToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VerificationToken we want to update
     *   }
     * })
     */
    upsert<T extends VerificationTokenUpsertArgs>(args: SelectSubset<T, VerificationTokenUpsertArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenCountArgs} args - Arguments to filter VerificationTokens to count.
     * @example
     * // Count the number of VerificationTokens
     * const count = await prisma.verificationToken.count({
     *   where: {
     *     // ... the filter for the VerificationTokens we want to count
     *   }
     * })
    **/
    count<T extends VerificationTokenCountArgs>(
      args?: Subset<T, VerificationTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VerificationTokenAggregateArgs>(args: Subset<T, VerificationTokenAggregateArgs>): Prisma.PrismaPromise<GetVerificationTokenAggregateType<T>>

    /**
     * Group by VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenGroupByArgs} args - Group by arguments.
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
      T extends VerificationTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationTokenGroupByArgs['orderBy'] }
        : { orderBy?: VerificationTokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VerificationTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VerificationToken model
   */
  readonly fields: VerificationTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VerificationToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the VerificationToken model
   */
  interface VerificationTokenFieldRefs {
    readonly identifier: FieldRef<"VerificationToken", 'String'>
    readonly token: FieldRef<"VerificationToken", 'String'>
    readonly expires: FieldRef<"VerificationToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VerificationToken findUnique
   */
  export type VerificationTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findUniqueOrThrow
   */
  export type VerificationTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findFirst
   */
  export type VerificationTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findFirstOrThrow
   */
  export type VerificationTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findMany
   */
  export type VerificationTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationTokens to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken create
   */
  export type VerificationTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to create a VerificationToken.
     */
    data: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
  }

  /**
   * VerificationToken createMany
   */
  export type VerificationTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationToken createManyAndReturn
   */
  export type VerificationTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationToken update
   */
  export type VerificationTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to update a VerificationToken.
     */
    data: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
    /**
     * Choose, which VerificationToken to update.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken updateMany
   */
  export type VerificationTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken updateManyAndReturn
   */
  export type VerificationTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken upsert
   */
  export type VerificationTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The filter to search for the VerificationToken to update in case it exists.
     */
    where: VerificationTokenWhereUniqueInput
    /**
     * In case the VerificationToken found by the `where` argument doesn't exist, create a new VerificationToken with this data.
     */
    create: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
    /**
     * In case the VerificationToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
  }

  /**
   * VerificationToken delete
   */
  export type VerificationTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter which VerificationToken to delete.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken deleteMany
   */
  export type VerificationTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationTokens to delete
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to delete.
     */
    limit?: number
  }

  /**
   * VerificationToken without action
   */
  export type VerificationTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
  }


  /**
   * Model FundAccount
   */

  export type AggregateFundAccount = {
    _count: FundAccountCountAggregateOutputType | null
    _avg: FundAccountAvgAggregateOutputType | null
    _sum: FundAccountSumAggregateOutputType | null
    _min: FundAccountMinAggregateOutputType | null
    _max: FundAccountMaxAggregateOutputType | null
  }

  export type FundAccountAvgAggregateOutputType = {
    totalCapital: number | null
  }

  export type FundAccountSumAggregateOutputType = {
    totalCapital: number | null
  }

  export type FundAccountMinAggregateOutputType = {
    id: string | null
    totalCapital: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FundAccountMaxAggregateOutputType = {
    id: string | null
    totalCapital: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FundAccountCountAggregateOutputType = {
    id: number
    totalCapital: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FundAccountAvgAggregateInputType = {
    totalCapital?: true
  }

  export type FundAccountSumAggregateInputType = {
    totalCapital?: true
  }

  export type FundAccountMinAggregateInputType = {
    id?: true
    totalCapital?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FundAccountMaxAggregateInputType = {
    id?: true
    totalCapital?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FundAccountCountAggregateInputType = {
    id?: true
    totalCapital?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FundAccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FundAccount to aggregate.
     */
    where?: FundAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FundAccounts to fetch.
     */
    orderBy?: FundAccountOrderByWithRelationInput | FundAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FundAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FundAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FundAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FundAccounts
    **/
    _count?: true | FundAccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FundAccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FundAccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FundAccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FundAccountMaxAggregateInputType
  }

  export type GetFundAccountAggregateType<T extends FundAccountAggregateArgs> = {
        [P in keyof T & keyof AggregateFundAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFundAccount[P]>
      : GetScalarType<T[P], AggregateFundAccount[P]>
  }




  export type FundAccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FundAccountWhereInput
    orderBy?: FundAccountOrderByWithAggregationInput | FundAccountOrderByWithAggregationInput[]
    by: FundAccountScalarFieldEnum[] | FundAccountScalarFieldEnum
    having?: FundAccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FundAccountCountAggregateInputType | true
    _avg?: FundAccountAvgAggregateInputType
    _sum?: FundAccountSumAggregateInputType
    _min?: FundAccountMinAggregateInputType
    _max?: FundAccountMaxAggregateInputType
  }

  export type FundAccountGroupByOutputType = {
    id: string
    totalCapital: number
    createdAt: Date
    updatedAt: Date
    _count: FundAccountCountAggregateOutputType | null
    _avg: FundAccountAvgAggregateOutputType | null
    _sum: FundAccountSumAggregateOutputType | null
    _min: FundAccountMinAggregateOutputType | null
    _max: FundAccountMaxAggregateOutputType | null
  }

  type GetFundAccountGroupByPayload<T extends FundAccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FundAccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FundAccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FundAccountGroupByOutputType[P]>
            : GetScalarType<T[P], FundAccountGroupByOutputType[P]>
        }
      >
    >


  export type FundAccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    totalCapital?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    transactions?: boolean | FundAccount$transactionsArgs<ExtArgs>
    _count?: boolean | FundAccountCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fundAccount"]>

  export type FundAccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    totalCapital?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["fundAccount"]>

  export type FundAccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    totalCapital?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["fundAccount"]>

  export type FundAccountSelectScalar = {
    id?: boolean
    totalCapital?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FundAccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "totalCapital" | "createdAt" | "updatedAt", ExtArgs["result"]["fundAccount"]>
  export type FundAccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactions?: boolean | FundAccount$transactionsArgs<ExtArgs>
    _count?: boolean | FundAccountCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FundAccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type FundAccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $FundAccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FundAccount"
    objects: {
      transactions: Prisma.$FundTransactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      totalCapital: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["fundAccount"]>
    composites: {}
  }

  type FundAccountGetPayload<S extends boolean | null | undefined | FundAccountDefaultArgs> = $Result.GetResult<Prisma.$FundAccountPayload, S>

  type FundAccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FundAccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FundAccountCountAggregateInputType | true
    }

  export interface FundAccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FundAccount'], meta: { name: 'FundAccount' } }
    /**
     * Find zero or one FundAccount that matches the filter.
     * @param {FundAccountFindUniqueArgs} args - Arguments to find a FundAccount
     * @example
     * // Get one FundAccount
     * const fundAccount = await prisma.fundAccount.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FundAccountFindUniqueArgs>(args: SelectSubset<T, FundAccountFindUniqueArgs<ExtArgs>>): Prisma__FundAccountClient<$Result.GetResult<Prisma.$FundAccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FundAccount that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FundAccountFindUniqueOrThrowArgs} args - Arguments to find a FundAccount
     * @example
     * // Get one FundAccount
     * const fundAccount = await prisma.fundAccount.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FundAccountFindUniqueOrThrowArgs>(args: SelectSubset<T, FundAccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FundAccountClient<$Result.GetResult<Prisma.$FundAccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FundAccount that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FundAccountFindFirstArgs} args - Arguments to find a FundAccount
     * @example
     * // Get one FundAccount
     * const fundAccount = await prisma.fundAccount.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FundAccountFindFirstArgs>(args?: SelectSubset<T, FundAccountFindFirstArgs<ExtArgs>>): Prisma__FundAccountClient<$Result.GetResult<Prisma.$FundAccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FundAccount that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FundAccountFindFirstOrThrowArgs} args - Arguments to find a FundAccount
     * @example
     * // Get one FundAccount
     * const fundAccount = await prisma.fundAccount.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FundAccountFindFirstOrThrowArgs>(args?: SelectSubset<T, FundAccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__FundAccountClient<$Result.GetResult<Prisma.$FundAccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FundAccounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FundAccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FundAccounts
     * const fundAccounts = await prisma.fundAccount.findMany()
     * 
     * // Get first 10 FundAccounts
     * const fundAccounts = await prisma.fundAccount.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fundAccountWithIdOnly = await prisma.fundAccount.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FundAccountFindManyArgs>(args?: SelectSubset<T, FundAccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FundAccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FundAccount.
     * @param {FundAccountCreateArgs} args - Arguments to create a FundAccount.
     * @example
     * // Create one FundAccount
     * const FundAccount = await prisma.fundAccount.create({
     *   data: {
     *     // ... data to create a FundAccount
     *   }
     * })
     * 
     */
    create<T extends FundAccountCreateArgs>(args: SelectSubset<T, FundAccountCreateArgs<ExtArgs>>): Prisma__FundAccountClient<$Result.GetResult<Prisma.$FundAccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FundAccounts.
     * @param {FundAccountCreateManyArgs} args - Arguments to create many FundAccounts.
     * @example
     * // Create many FundAccounts
     * const fundAccount = await prisma.fundAccount.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FundAccountCreateManyArgs>(args?: SelectSubset<T, FundAccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FundAccounts and returns the data saved in the database.
     * @param {FundAccountCreateManyAndReturnArgs} args - Arguments to create many FundAccounts.
     * @example
     * // Create many FundAccounts
     * const fundAccount = await prisma.fundAccount.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FundAccounts and only return the `id`
     * const fundAccountWithIdOnly = await prisma.fundAccount.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FundAccountCreateManyAndReturnArgs>(args?: SelectSubset<T, FundAccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FundAccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FundAccount.
     * @param {FundAccountDeleteArgs} args - Arguments to delete one FundAccount.
     * @example
     * // Delete one FundAccount
     * const FundAccount = await prisma.fundAccount.delete({
     *   where: {
     *     // ... filter to delete one FundAccount
     *   }
     * })
     * 
     */
    delete<T extends FundAccountDeleteArgs>(args: SelectSubset<T, FundAccountDeleteArgs<ExtArgs>>): Prisma__FundAccountClient<$Result.GetResult<Prisma.$FundAccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FundAccount.
     * @param {FundAccountUpdateArgs} args - Arguments to update one FundAccount.
     * @example
     * // Update one FundAccount
     * const fundAccount = await prisma.fundAccount.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FundAccountUpdateArgs>(args: SelectSubset<T, FundAccountUpdateArgs<ExtArgs>>): Prisma__FundAccountClient<$Result.GetResult<Prisma.$FundAccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FundAccounts.
     * @param {FundAccountDeleteManyArgs} args - Arguments to filter FundAccounts to delete.
     * @example
     * // Delete a few FundAccounts
     * const { count } = await prisma.fundAccount.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FundAccountDeleteManyArgs>(args?: SelectSubset<T, FundAccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FundAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FundAccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FundAccounts
     * const fundAccount = await prisma.fundAccount.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FundAccountUpdateManyArgs>(args: SelectSubset<T, FundAccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FundAccounts and returns the data updated in the database.
     * @param {FundAccountUpdateManyAndReturnArgs} args - Arguments to update many FundAccounts.
     * @example
     * // Update many FundAccounts
     * const fundAccount = await prisma.fundAccount.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FundAccounts and only return the `id`
     * const fundAccountWithIdOnly = await prisma.fundAccount.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends FundAccountUpdateManyAndReturnArgs>(args: SelectSubset<T, FundAccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FundAccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FundAccount.
     * @param {FundAccountUpsertArgs} args - Arguments to update or create a FundAccount.
     * @example
     * // Update or create a FundAccount
     * const fundAccount = await prisma.fundAccount.upsert({
     *   create: {
     *     // ... data to create a FundAccount
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FundAccount we want to update
     *   }
     * })
     */
    upsert<T extends FundAccountUpsertArgs>(args: SelectSubset<T, FundAccountUpsertArgs<ExtArgs>>): Prisma__FundAccountClient<$Result.GetResult<Prisma.$FundAccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FundAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FundAccountCountArgs} args - Arguments to filter FundAccounts to count.
     * @example
     * // Count the number of FundAccounts
     * const count = await prisma.fundAccount.count({
     *   where: {
     *     // ... the filter for the FundAccounts we want to count
     *   }
     * })
    **/
    count<T extends FundAccountCountArgs>(
      args?: Subset<T, FundAccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FundAccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FundAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FundAccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FundAccountAggregateArgs>(args: Subset<T, FundAccountAggregateArgs>): Prisma.PrismaPromise<GetFundAccountAggregateType<T>>

    /**
     * Group by FundAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FundAccountGroupByArgs} args - Group by arguments.
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
      T extends FundAccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FundAccountGroupByArgs['orderBy'] }
        : { orderBy?: FundAccountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FundAccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFundAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FundAccount model
   */
  readonly fields: FundAccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FundAccount.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FundAccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    transactions<T extends FundAccount$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, FundAccount$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FundTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the FundAccount model
   */
  interface FundAccountFieldRefs {
    readonly id: FieldRef<"FundAccount", 'String'>
    readonly totalCapital: FieldRef<"FundAccount", 'Float'>
    readonly createdAt: FieldRef<"FundAccount", 'DateTime'>
    readonly updatedAt: FieldRef<"FundAccount", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FundAccount findUnique
   */
  export type FundAccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FundAccount
     */
    select?: FundAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FundAccount
     */
    omit?: FundAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FundAccountInclude<ExtArgs> | null
    /**
     * Filter, which FundAccount to fetch.
     */
    where: FundAccountWhereUniqueInput
  }

  /**
   * FundAccount findUniqueOrThrow
   */
  export type FundAccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FundAccount
     */
    select?: FundAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FundAccount
     */
    omit?: FundAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FundAccountInclude<ExtArgs> | null
    /**
     * Filter, which FundAccount to fetch.
     */
    where: FundAccountWhereUniqueInput
  }

  /**
   * FundAccount findFirst
   */
  export type FundAccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FundAccount
     */
    select?: FundAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FundAccount
     */
    omit?: FundAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FundAccountInclude<ExtArgs> | null
    /**
     * Filter, which FundAccount to fetch.
     */
    where?: FundAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FundAccounts to fetch.
     */
    orderBy?: FundAccountOrderByWithRelationInput | FundAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FundAccounts.
     */
    cursor?: FundAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FundAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FundAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FundAccounts.
     */
    distinct?: FundAccountScalarFieldEnum | FundAccountScalarFieldEnum[]
  }

  /**
   * FundAccount findFirstOrThrow
   */
  export type FundAccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FundAccount
     */
    select?: FundAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FundAccount
     */
    omit?: FundAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FundAccountInclude<ExtArgs> | null
    /**
     * Filter, which FundAccount to fetch.
     */
    where?: FundAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FundAccounts to fetch.
     */
    orderBy?: FundAccountOrderByWithRelationInput | FundAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FundAccounts.
     */
    cursor?: FundAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FundAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FundAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FundAccounts.
     */
    distinct?: FundAccountScalarFieldEnum | FundAccountScalarFieldEnum[]
  }

  /**
   * FundAccount findMany
   */
  export type FundAccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FundAccount
     */
    select?: FundAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FundAccount
     */
    omit?: FundAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FundAccountInclude<ExtArgs> | null
    /**
     * Filter, which FundAccounts to fetch.
     */
    where?: FundAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FundAccounts to fetch.
     */
    orderBy?: FundAccountOrderByWithRelationInput | FundAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FundAccounts.
     */
    cursor?: FundAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FundAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FundAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FundAccounts.
     */
    distinct?: FundAccountScalarFieldEnum | FundAccountScalarFieldEnum[]
  }

  /**
   * FundAccount create
   */
  export type FundAccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FundAccount
     */
    select?: FundAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FundAccount
     */
    omit?: FundAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FundAccountInclude<ExtArgs> | null
    /**
     * The data needed to create a FundAccount.
     */
    data: XOR<FundAccountCreateInput, FundAccountUncheckedCreateInput>
  }

  /**
   * FundAccount createMany
   */
  export type FundAccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FundAccounts.
     */
    data: FundAccountCreateManyInput | FundAccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FundAccount createManyAndReturn
   */
  export type FundAccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FundAccount
     */
    select?: FundAccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FundAccount
     */
    omit?: FundAccountOmit<ExtArgs> | null
    /**
     * The data used to create many FundAccounts.
     */
    data: FundAccountCreateManyInput | FundAccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FundAccount update
   */
  export type FundAccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FundAccount
     */
    select?: FundAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FundAccount
     */
    omit?: FundAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FundAccountInclude<ExtArgs> | null
    /**
     * The data needed to update a FundAccount.
     */
    data: XOR<FundAccountUpdateInput, FundAccountUncheckedUpdateInput>
    /**
     * Choose, which FundAccount to update.
     */
    where: FundAccountWhereUniqueInput
  }

  /**
   * FundAccount updateMany
   */
  export type FundAccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FundAccounts.
     */
    data: XOR<FundAccountUpdateManyMutationInput, FundAccountUncheckedUpdateManyInput>
    /**
     * Filter which FundAccounts to update
     */
    where?: FundAccountWhereInput
    /**
     * Limit how many FundAccounts to update.
     */
    limit?: number
  }

  /**
   * FundAccount updateManyAndReturn
   */
  export type FundAccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FundAccount
     */
    select?: FundAccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FundAccount
     */
    omit?: FundAccountOmit<ExtArgs> | null
    /**
     * The data used to update FundAccounts.
     */
    data: XOR<FundAccountUpdateManyMutationInput, FundAccountUncheckedUpdateManyInput>
    /**
     * Filter which FundAccounts to update
     */
    where?: FundAccountWhereInput
    /**
     * Limit how many FundAccounts to update.
     */
    limit?: number
  }

  /**
   * FundAccount upsert
   */
  export type FundAccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FundAccount
     */
    select?: FundAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FundAccount
     */
    omit?: FundAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FundAccountInclude<ExtArgs> | null
    /**
     * The filter to search for the FundAccount to update in case it exists.
     */
    where: FundAccountWhereUniqueInput
    /**
     * In case the FundAccount found by the `where` argument doesn't exist, create a new FundAccount with this data.
     */
    create: XOR<FundAccountCreateInput, FundAccountUncheckedCreateInput>
    /**
     * In case the FundAccount was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FundAccountUpdateInput, FundAccountUncheckedUpdateInput>
  }

  /**
   * FundAccount delete
   */
  export type FundAccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FundAccount
     */
    select?: FundAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FundAccount
     */
    omit?: FundAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FundAccountInclude<ExtArgs> | null
    /**
     * Filter which FundAccount to delete.
     */
    where: FundAccountWhereUniqueInput
  }

  /**
   * FundAccount deleteMany
   */
  export type FundAccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FundAccounts to delete
     */
    where?: FundAccountWhereInput
    /**
     * Limit how many FundAccounts to delete.
     */
    limit?: number
  }

  /**
   * FundAccount.transactions
   */
  export type FundAccount$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FundTransaction
     */
    select?: FundTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FundTransaction
     */
    omit?: FundTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FundTransactionInclude<ExtArgs> | null
    where?: FundTransactionWhereInput
    orderBy?: FundTransactionOrderByWithRelationInput | FundTransactionOrderByWithRelationInput[]
    cursor?: FundTransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FundTransactionScalarFieldEnum | FundTransactionScalarFieldEnum[]
  }

  /**
   * FundAccount without action
   */
  export type FundAccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FundAccount
     */
    select?: FundAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FundAccount
     */
    omit?: FundAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FundAccountInclude<ExtArgs> | null
  }


  /**
   * Model FundTransaction
   */

  export type AggregateFundTransaction = {
    _count: FundTransactionCountAggregateOutputType | null
    _avg: FundTransactionAvgAggregateOutputType | null
    _sum: FundTransactionSumAggregateOutputType | null
    _min: FundTransactionMinAggregateOutputType | null
    _max: FundTransactionMaxAggregateOutputType | null
  }

  export type FundTransactionAvgAggregateOutputType = {
    amount: number | null
  }

  export type FundTransactionSumAggregateOutputType = {
    amount: number | null
  }

  export type FundTransactionMinAggregateOutputType = {
    id: string | null
    accountId: string | null
    type: $Enums.FundTxType | null
    amount: number | null
    date: Date | null
    notes: string | null
  }

  export type FundTransactionMaxAggregateOutputType = {
    id: string | null
    accountId: string | null
    type: $Enums.FundTxType | null
    amount: number | null
    date: Date | null
    notes: string | null
  }

  export type FundTransactionCountAggregateOutputType = {
    id: number
    accountId: number
    type: number
    amount: number
    date: number
    notes: number
    _all: number
  }


  export type FundTransactionAvgAggregateInputType = {
    amount?: true
  }

  export type FundTransactionSumAggregateInputType = {
    amount?: true
  }

  export type FundTransactionMinAggregateInputType = {
    id?: true
    accountId?: true
    type?: true
    amount?: true
    date?: true
    notes?: true
  }

  export type FundTransactionMaxAggregateInputType = {
    id?: true
    accountId?: true
    type?: true
    amount?: true
    date?: true
    notes?: true
  }

  export type FundTransactionCountAggregateInputType = {
    id?: true
    accountId?: true
    type?: true
    amount?: true
    date?: true
    notes?: true
    _all?: true
  }

  export type FundTransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FundTransaction to aggregate.
     */
    where?: FundTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FundTransactions to fetch.
     */
    orderBy?: FundTransactionOrderByWithRelationInput | FundTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FundTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FundTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FundTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FundTransactions
    **/
    _count?: true | FundTransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FundTransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FundTransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FundTransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FundTransactionMaxAggregateInputType
  }

  export type GetFundTransactionAggregateType<T extends FundTransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateFundTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFundTransaction[P]>
      : GetScalarType<T[P], AggregateFundTransaction[P]>
  }




  export type FundTransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FundTransactionWhereInput
    orderBy?: FundTransactionOrderByWithAggregationInput | FundTransactionOrderByWithAggregationInput[]
    by: FundTransactionScalarFieldEnum[] | FundTransactionScalarFieldEnum
    having?: FundTransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FundTransactionCountAggregateInputType | true
    _avg?: FundTransactionAvgAggregateInputType
    _sum?: FundTransactionSumAggregateInputType
    _min?: FundTransactionMinAggregateInputType
    _max?: FundTransactionMaxAggregateInputType
  }

  export type FundTransactionGroupByOutputType = {
    id: string
    accountId: string
    type: $Enums.FundTxType
    amount: number
    date: Date
    notes: string | null
    _count: FundTransactionCountAggregateOutputType | null
    _avg: FundTransactionAvgAggregateOutputType | null
    _sum: FundTransactionSumAggregateOutputType | null
    _min: FundTransactionMinAggregateOutputType | null
    _max: FundTransactionMaxAggregateOutputType | null
  }

  type GetFundTransactionGroupByPayload<T extends FundTransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FundTransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FundTransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FundTransactionGroupByOutputType[P]>
            : GetScalarType<T[P], FundTransactionGroupByOutputType[P]>
        }
      >
    >


  export type FundTransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    type?: boolean
    amount?: boolean
    date?: boolean
    notes?: boolean
    account?: boolean | FundAccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fundTransaction"]>

  export type FundTransactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    type?: boolean
    amount?: boolean
    date?: boolean
    notes?: boolean
    account?: boolean | FundAccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fundTransaction"]>

  export type FundTransactionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    type?: boolean
    amount?: boolean
    date?: boolean
    notes?: boolean
    account?: boolean | FundAccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fundTransaction"]>

  export type FundTransactionSelectScalar = {
    id?: boolean
    accountId?: boolean
    type?: boolean
    amount?: boolean
    date?: boolean
    notes?: boolean
  }

  export type FundTransactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "accountId" | "type" | "amount" | "date" | "notes", ExtArgs["result"]["fundTransaction"]>
  export type FundTransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | FundAccountDefaultArgs<ExtArgs>
  }
  export type FundTransactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | FundAccountDefaultArgs<ExtArgs>
  }
  export type FundTransactionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | FundAccountDefaultArgs<ExtArgs>
  }

  export type $FundTransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FundTransaction"
    objects: {
      account: Prisma.$FundAccountPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      accountId: string
      type: $Enums.FundTxType
      amount: number
      date: Date
      notes: string | null
    }, ExtArgs["result"]["fundTransaction"]>
    composites: {}
  }

  type FundTransactionGetPayload<S extends boolean | null | undefined | FundTransactionDefaultArgs> = $Result.GetResult<Prisma.$FundTransactionPayload, S>

  type FundTransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FundTransactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FundTransactionCountAggregateInputType | true
    }

  export interface FundTransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FundTransaction'], meta: { name: 'FundTransaction' } }
    /**
     * Find zero or one FundTransaction that matches the filter.
     * @param {FundTransactionFindUniqueArgs} args - Arguments to find a FundTransaction
     * @example
     * // Get one FundTransaction
     * const fundTransaction = await prisma.fundTransaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FundTransactionFindUniqueArgs>(args: SelectSubset<T, FundTransactionFindUniqueArgs<ExtArgs>>): Prisma__FundTransactionClient<$Result.GetResult<Prisma.$FundTransactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FundTransaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FundTransactionFindUniqueOrThrowArgs} args - Arguments to find a FundTransaction
     * @example
     * // Get one FundTransaction
     * const fundTransaction = await prisma.fundTransaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FundTransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, FundTransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FundTransactionClient<$Result.GetResult<Prisma.$FundTransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FundTransaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FundTransactionFindFirstArgs} args - Arguments to find a FundTransaction
     * @example
     * // Get one FundTransaction
     * const fundTransaction = await prisma.fundTransaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FundTransactionFindFirstArgs>(args?: SelectSubset<T, FundTransactionFindFirstArgs<ExtArgs>>): Prisma__FundTransactionClient<$Result.GetResult<Prisma.$FundTransactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FundTransaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FundTransactionFindFirstOrThrowArgs} args - Arguments to find a FundTransaction
     * @example
     * // Get one FundTransaction
     * const fundTransaction = await prisma.fundTransaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FundTransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, FundTransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__FundTransactionClient<$Result.GetResult<Prisma.$FundTransactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FundTransactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FundTransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FundTransactions
     * const fundTransactions = await prisma.fundTransaction.findMany()
     * 
     * // Get first 10 FundTransactions
     * const fundTransactions = await prisma.fundTransaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fundTransactionWithIdOnly = await prisma.fundTransaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FundTransactionFindManyArgs>(args?: SelectSubset<T, FundTransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FundTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FundTransaction.
     * @param {FundTransactionCreateArgs} args - Arguments to create a FundTransaction.
     * @example
     * // Create one FundTransaction
     * const FundTransaction = await prisma.fundTransaction.create({
     *   data: {
     *     // ... data to create a FundTransaction
     *   }
     * })
     * 
     */
    create<T extends FundTransactionCreateArgs>(args: SelectSubset<T, FundTransactionCreateArgs<ExtArgs>>): Prisma__FundTransactionClient<$Result.GetResult<Prisma.$FundTransactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FundTransactions.
     * @param {FundTransactionCreateManyArgs} args - Arguments to create many FundTransactions.
     * @example
     * // Create many FundTransactions
     * const fundTransaction = await prisma.fundTransaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FundTransactionCreateManyArgs>(args?: SelectSubset<T, FundTransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FundTransactions and returns the data saved in the database.
     * @param {FundTransactionCreateManyAndReturnArgs} args - Arguments to create many FundTransactions.
     * @example
     * // Create many FundTransactions
     * const fundTransaction = await prisma.fundTransaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FundTransactions and only return the `id`
     * const fundTransactionWithIdOnly = await prisma.fundTransaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FundTransactionCreateManyAndReturnArgs>(args?: SelectSubset<T, FundTransactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FundTransactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FundTransaction.
     * @param {FundTransactionDeleteArgs} args - Arguments to delete one FundTransaction.
     * @example
     * // Delete one FundTransaction
     * const FundTransaction = await prisma.fundTransaction.delete({
     *   where: {
     *     // ... filter to delete one FundTransaction
     *   }
     * })
     * 
     */
    delete<T extends FundTransactionDeleteArgs>(args: SelectSubset<T, FundTransactionDeleteArgs<ExtArgs>>): Prisma__FundTransactionClient<$Result.GetResult<Prisma.$FundTransactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FundTransaction.
     * @param {FundTransactionUpdateArgs} args - Arguments to update one FundTransaction.
     * @example
     * // Update one FundTransaction
     * const fundTransaction = await prisma.fundTransaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FundTransactionUpdateArgs>(args: SelectSubset<T, FundTransactionUpdateArgs<ExtArgs>>): Prisma__FundTransactionClient<$Result.GetResult<Prisma.$FundTransactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FundTransactions.
     * @param {FundTransactionDeleteManyArgs} args - Arguments to filter FundTransactions to delete.
     * @example
     * // Delete a few FundTransactions
     * const { count } = await prisma.fundTransaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FundTransactionDeleteManyArgs>(args?: SelectSubset<T, FundTransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FundTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FundTransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FundTransactions
     * const fundTransaction = await prisma.fundTransaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FundTransactionUpdateManyArgs>(args: SelectSubset<T, FundTransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FundTransactions and returns the data updated in the database.
     * @param {FundTransactionUpdateManyAndReturnArgs} args - Arguments to update many FundTransactions.
     * @example
     * // Update many FundTransactions
     * const fundTransaction = await prisma.fundTransaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FundTransactions and only return the `id`
     * const fundTransactionWithIdOnly = await prisma.fundTransaction.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends FundTransactionUpdateManyAndReturnArgs>(args: SelectSubset<T, FundTransactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FundTransactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FundTransaction.
     * @param {FundTransactionUpsertArgs} args - Arguments to update or create a FundTransaction.
     * @example
     * // Update or create a FundTransaction
     * const fundTransaction = await prisma.fundTransaction.upsert({
     *   create: {
     *     // ... data to create a FundTransaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FundTransaction we want to update
     *   }
     * })
     */
    upsert<T extends FundTransactionUpsertArgs>(args: SelectSubset<T, FundTransactionUpsertArgs<ExtArgs>>): Prisma__FundTransactionClient<$Result.GetResult<Prisma.$FundTransactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FundTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FundTransactionCountArgs} args - Arguments to filter FundTransactions to count.
     * @example
     * // Count the number of FundTransactions
     * const count = await prisma.fundTransaction.count({
     *   where: {
     *     // ... the filter for the FundTransactions we want to count
     *   }
     * })
    **/
    count<T extends FundTransactionCountArgs>(
      args?: Subset<T, FundTransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FundTransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FundTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FundTransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FundTransactionAggregateArgs>(args: Subset<T, FundTransactionAggregateArgs>): Prisma.PrismaPromise<GetFundTransactionAggregateType<T>>

    /**
     * Group by FundTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FundTransactionGroupByArgs} args - Group by arguments.
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
      T extends FundTransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FundTransactionGroupByArgs['orderBy'] }
        : { orderBy?: FundTransactionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FundTransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFundTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FundTransaction model
   */
  readonly fields: FundTransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FundTransaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FundTransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    account<T extends FundAccountDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FundAccountDefaultArgs<ExtArgs>>): Prisma__FundAccountClient<$Result.GetResult<Prisma.$FundAccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the FundTransaction model
   */
  interface FundTransactionFieldRefs {
    readonly id: FieldRef<"FundTransaction", 'String'>
    readonly accountId: FieldRef<"FundTransaction", 'String'>
    readonly type: FieldRef<"FundTransaction", 'FundTxType'>
    readonly amount: FieldRef<"FundTransaction", 'Float'>
    readonly date: FieldRef<"FundTransaction", 'DateTime'>
    readonly notes: FieldRef<"FundTransaction", 'String'>
  }
    

  // Custom InputTypes
  /**
   * FundTransaction findUnique
   */
  export type FundTransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FundTransaction
     */
    select?: FundTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FundTransaction
     */
    omit?: FundTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FundTransactionInclude<ExtArgs> | null
    /**
     * Filter, which FundTransaction to fetch.
     */
    where: FundTransactionWhereUniqueInput
  }

  /**
   * FundTransaction findUniqueOrThrow
   */
  export type FundTransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FundTransaction
     */
    select?: FundTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FundTransaction
     */
    omit?: FundTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FundTransactionInclude<ExtArgs> | null
    /**
     * Filter, which FundTransaction to fetch.
     */
    where: FundTransactionWhereUniqueInput
  }

  /**
   * FundTransaction findFirst
   */
  export type FundTransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FundTransaction
     */
    select?: FundTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FundTransaction
     */
    omit?: FundTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FundTransactionInclude<ExtArgs> | null
    /**
     * Filter, which FundTransaction to fetch.
     */
    where?: FundTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FundTransactions to fetch.
     */
    orderBy?: FundTransactionOrderByWithRelationInput | FundTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FundTransactions.
     */
    cursor?: FundTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FundTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FundTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FundTransactions.
     */
    distinct?: FundTransactionScalarFieldEnum | FundTransactionScalarFieldEnum[]
  }

  /**
   * FundTransaction findFirstOrThrow
   */
  export type FundTransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FundTransaction
     */
    select?: FundTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FundTransaction
     */
    omit?: FundTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FundTransactionInclude<ExtArgs> | null
    /**
     * Filter, which FundTransaction to fetch.
     */
    where?: FundTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FundTransactions to fetch.
     */
    orderBy?: FundTransactionOrderByWithRelationInput | FundTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FundTransactions.
     */
    cursor?: FundTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FundTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FundTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FundTransactions.
     */
    distinct?: FundTransactionScalarFieldEnum | FundTransactionScalarFieldEnum[]
  }

  /**
   * FundTransaction findMany
   */
  export type FundTransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FundTransaction
     */
    select?: FundTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FundTransaction
     */
    omit?: FundTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FundTransactionInclude<ExtArgs> | null
    /**
     * Filter, which FundTransactions to fetch.
     */
    where?: FundTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FundTransactions to fetch.
     */
    orderBy?: FundTransactionOrderByWithRelationInput | FundTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FundTransactions.
     */
    cursor?: FundTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FundTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FundTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FundTransactions.
     */
    distinct?: FundTransactionScalarFieldEnum | FundTransactionScalarFieldEnum[]
  }

  /**
   * FundTransaction create
   */
  export type FundTransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FundTransaction
     */
    select?: FundTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FundTransaction
     */
    omit?: FundTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FundTransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a FundTransaction.
     */
    data: XOR<FundTransactionCreateInput, FundTransactionUncheckedCreateInput>
  }

  /**
   * FundTransaction createMany
   */
  export type FundTransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FundTransactions.
     */
    data: FundTransactionCreateManyInput | FundTransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FundTransaction createManyAndReturn
   */
  export type FundTransactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FundTransaction
     */
    select?: FundTransactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FundTransaction
     */
    omit?: FundTransactionOmit<ExtArgs> | null
    /**
     * The data used to create many FundTransactions.
     */
    data: FundTransactionCreateManyInput | FundTransactionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FundTransactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FundTransaction update
   */
  export type FundTransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FundTransaction
     */
    select?: FundTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FundTransaction
     */
    omit?: FundTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FundTransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a FundTransaction.
     */
    data: XOR<FundTransactionUpdateInput, FundTransactionUncheckedUpdateInput>
    /**
     * Choose, which FundTransaction to update.
     */
    where: FundTransactionWhereUniqueInput
  }

  /**
   * FundTransaction updateMany
   */
  export type FundTransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FundTransactions.
     */
    data: XOR<FundTransactionUpdateManyMutationInput, FundTransactionUncheckedUpdateManyInput>
    /**
     * Filter which FundTransactions to update
     */
    where?: FundTransactionWhereInput
    /**
     * Limit how many FundTransactions to update.
     */
    limit?: number
  }

  /**
   * FundTransaction updateManyAndReturn
   */
  export type FundTransactionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FundTransaction
     */
    select?: FundTransactionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FundTransaction
     */
    omit?: FundTransactionOmit<ExtArgs> | null
    /**
     * The data used to update FundTransactions.
     */
    data: XOR<FundTransactionUpdateManyMutationInput, FundTransactionUncheckedUpdateManyInput>
    /**
     * Filter which FundTransactions to update
     */
    where?: FundTransactionWhereInput
    /**
     * Limit how many FundTransactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FundTransactionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FundTransaction upsert
   */
  export type FundTransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FundTransaction
     */
    select?: FundTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FundTransaction
     */
    omit?: FundTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FundTransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the FundTransaction to update in case it exists.
     */
    where: FundTransactionWhereUniqueInput
    /**
     * In case the FundTransaction found by the `where` argument doesn't exist, create a new FundTransaction with this data.
     */
    create: XOR<FundTransactionCreateInput, FundTransactionUncheckedCreateInput>
    /**
     * In case the FundTransaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FundTransactionUpdateInput, FundTransactionUncheckedUpdateInput>
  }

  /**
   * FundTransaction delete
   */
  export type FundTransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FundTransaction
     */
    select?: FundTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FundTransaction
     */
    omit?: FundTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FundTransactionInclude<ExtArgs> | null
    /**
     * Filter which FundTransaction to delete.
     */
    where: FundTransactionWhereUniqueInput
  }

  /**
   * FundTransaction deleteMany
   */
  export type FundTransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FundTransactions to delete
     */
    where?: FundTransactionWhereInput
    /**
     * Limit how many FundTransactions to delete.
     */
    limit?: number
  }

  /**
   * FundTransaction without action
   */
  export type FundTransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FundTransaction
     */
    select?: FundTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FundTransaction
     */
    omit?: FundTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FundTransactionInclude<ExtArgs> | null
  }


  /**
   * Model ScreenerSuggestion
   */

  export type AggregateScreenerSuggestion = {
    _count: ScreenerSuggestionCountAggregateOutputType | null
    _avg: ScreenerSuggestionAvgAggregateOutputType | null
    _sum: ScreenerSuggestionSumAggregateOutputType | null
    _min: ScreenerSuggestionMinAggregateOutputType | null
    _max: ScreenerSuggestionMaxAggregateOutputType | null
  }

  export type ScreenerSuggestionAvgAggregateOutputType = {
    score: number | null
    entryLow: number | null
    entryHigh: number | null
    sl: number | null
    t1: number | null
    t2: number | null
  }

  export type ScreenerSuggestionSumAggregateOutputType = {
    score: number | null
    entryLow: number | null
    entryHigh: number | null
    sl: number | null
    t1: number | null
    t2: number | null
  }

  export type ScreenerSuggestionMinAggregateOutputType = {
    id: string | null
    scanDate: Date | null
    ticker: string | null
    tickerNs: string | null
    name: string | null
    sector: string | null
    setupType: string | null
    score: number | null
    entryLow: number | null
    entryHigh: number | null
    sl: number | null
    t1: number | null
    t2: number | null
    notes: string | null
    status: $Enums.SuggestionStatus | null
    createdAt: Date | null
  }

  export type ScreenerSuggestionMaxAggregateOutputType = {
    id: string | null
    scanDate: Date | null
    ticker: string | null
    tickerNs: string | null
    name: string | null
    sector: string | null
    setupType: string | null
    score: number | null
    entryLow: number | null
    entryHigh: number | null
    sl: number | null
    t1: number | null
    t2: number | null
    notes: string | null
    status: $Enums.SuggestionStatus | null
    createdAt: Date | null
  }

  export type ScreenerSuggestionCountAggregateOutputType = {
    id: number
    scanDate: number
    ticker: number
    tickerNs: number
    name: number
    sector: number
    setupType: number
    score: number
    entryLow: number
    entryHigh: number
    sl: number
    t1: number
    t2: number
    notes: number
    status: number
    createdAt: number
    _all: number
  }


  export type ScreenerSuggestionAvgAggregateInputType = {
    score?: true
    entryLow?: true
    entryHigh?: true
    sl?: true
    t1?: true
    t2?: true
  }

  export type ScreenerSuggestionSumAggregateInputType = {
    score?: true
    entryLow?: true
    entryHigh?: true
    sl?: true
    t1?: true
    t2?: true
  }

  export type ScreenerSuggestionMinAggregateInputType = {
    id?: true
    scanDate?: true
    ticker?: true
    tickerNs?: true
    name?: true
    sector?: true
    setupType?: true
    score?: true
    entryLow?: true
    entryHigh?: true
    sl?: true
    t1?: true
    t2?: true
    notes?: true
    status?: true
    createdAt?: true
  }

  export type ScreenerSuggestionMaxAggregateInputType = {
    id?: true
    scanDate?: true
    ticker?: true
    tickerNs?: true
    name?: true
    sector?: true
    setupType?: true
    score?: true
    entryLow?: true
    entryHigh?: true
    sl?: true
    t1?: true
    t2?: true
    notes?: true
    status?: true
    createdAt?: true
  }

  export type ScreenerSuggestionCountAggregateInputType = {
    id?: true
    scanDate?: true
    ticker?: true
    tickerNs?: true
    name?: true
    sector?: true
    setupType?: true
    score?: true
    entryLow?: true
    entryHigh?: true
    sl?: true
    t1?: true
    t2?: true
    notes?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type ScreenerSuggestionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ScreenerSuggestion to aggregate.
     */
    where?: ScreenerSuggestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScreenerSuggestions to fetch.
     */
    orderBy?: ScreenerSuggestionOrderByWithRelationInput | ScreenerSuggestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ScreenerSuggestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScreenerSuggestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScreenerSuggestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ScreenerSuggestions
    **/
    _count?: true | ScreenerSuggestionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ScreenerSuggestionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ScreenerSuggestionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ScreenerSuggestionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ScreenerSuggestionMaxAggregateInputType
  }

  export type GetScreenerSuggestionAggregateType<T extends ScreenerSuggestionAggregateArgs> = {
        [P in keyof T & keyof AggregateScreenerSuggestion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateScreenerSuggestion[P]>
      : GetScalarType<T[P], AggregateScreenerSuggestion[P]>
  }




  export type ScreenerSuggestionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScreenerSuggestionWhereInput
    orderBy?: ScreenerSuggestionOrderByWithAggregationInput | ScreenerSuggestionOrderByWithAggregationInput[]
    by: ScreenerSuggestionScalarFieldEnum[] | ScreenerSuggestionScalarFieldEnum
    having?: ScreenerSuggestionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ScreenerSuggestionCountAggregateInputType | true
    _avg?: ScreenerSuggestionAvgAggregateInputType
    _sum?: ScreenerSuggestionSumAggregateInputType
    _min?: ScreenerSuggestionMinAggregateInputType
    _max?: ScreenerSuggestionMaxAggregateInputType
  }

  export type ScreenerSuggestionGroupByOutputType = {
    id: string
    scanDate: Date
    ticker: string
    tickerNs: string
    name: string
    sector: string
    setupType: string
    score: number
    entryLow: number
    entryHigh: number
    sl: number
    t1: number
    t2: number | null
    notes: string | null
    status: $Enums.SuggestionStatus
    createdAt: Date
    _count: ScreenerSuggestionCountAggregateOutputType | null
    _avg: ScreenerSuggestionAvgAggregateOutputType | null
    _sum: ScreenerSuggestionSumAggregateOutputType | null
    _min: ScreenerSuggestionMinAggregateOutputType | null
    _max: ScreenerSuggestionMaxAggregateOutputType | null
  }

  type GetScreenerSuggestionGroupByPayload<T extends ScreenerSuggestionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ScreenerSuggestionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ScreenerSuggestionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ScreenerSuggestionGroupByOutputType[P]>
            : GetScalarType<T[P], ScreenerSuggestionGroupByOutputType[P]>
        }
      >
    >


  export type ScreenerSuggestionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    scanDate?: boolean
    ticker?: boolean
    tickerNs?: boolean
    name?: boolean
    sector?: boolean
    setupType?: boolean
    score?: boolean
    entryLow?: boolean
    entryHigh?: boolean
    sl?: boolean
    t1?: boolean
    t2?: boolean
    notes?: boolean
    status?: boolean
    createdAt?: boolean
    snapshots?: boolean | ScreenerSuggestion$snapshotsArgs<ExtArgs>
    trade?: boolean | ScreenerSuggestion$tradeArgs<ExtArgs>
    _count?: boolean | ScreenerSuggestionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["screenerSuggestion"]>

  export type ScreenerSuggestionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    scanDate?: boolean
    ticker?: boolean
    tickerNs?: boolean
    name?: boolean
    sector?: boolean
    setupType?: boolean
    score?: boolean
    entryLow?: boolean
    entryHigh?: boolean
    sl?: boolean
    t1?: boolean
    t2?: boolean
    notes?: boolean
    status?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["screenerSuggestion"]>

  export type ScreenerSuggestionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    scanDate?: boolean
    ticker?: boolean
    tickerNs?: boolean
    name?: boolean
    sector?: boolean
    setupType?: boolean
    score?: boolean
    entryLow?: boolean
    entryHigh?: boolean
    sl?: boolean
    t1?: boolean
    t2?: boolean
    notes?: boolean
    status?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["screenerSuggestion"]>

  export type ScreenerSuggestionSelectScalar = {
    id?: boolean
    scanDate?: boolean
    ticker?: boolean
    tickerNs?: boolean
    name?: boolean
    sector?: boolean
    setupType?: boolean
    score?: boolean
    entryLow?: boolean
    entryHigh?: boolean
    sl?: boolean
    t1?: boolean
    t2?: boolean
    notes?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type ScreenerSuggestionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "scanDate" | "ticker" | "tickerNs" | "name" | "sector" | "setupType" | "score" | "entryLow" | "entryHigh" | "sl" | "t1" | "t2" | "notes" | "status" | "createdAt", ExtArgs["result"]["screenerSuggestion"]>
  export type ScreenerSuggestionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    snapshots?: boolean | ScreenerSuggestion$snapshotsArgs<ExtArgs>
    trade?: boolean | ScreenerSuggestion$tradeArgs<ExtArgs>
    _count?: boolean | ScreenerSuggestionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ScreenerSuggestionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ScreenerSuggestionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ScreenerSuggestionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ScreenerSuggestion"
    objects: {
      snapshots: Prisma.$SuggestionSnapshotPayload<ExtArgs>[]
      trade: Prisma.$TradePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      scanDate: Date
      ticker: string
      tickerNs: string
      name: string
      sector: string
      setupType: string
      score: number
      entryLow: number
      entryHigh: number
      sl: number
      t1: number
      t2: number | null
      notes: string | null
      status: $Enums.SuggestionStatus
      createdAt: Date
    }, ExtArgs["result"]["screenerSuggestion"]>
    composites: {}
  }

  type ScreenerSuggestionGetPayload<S extends boolean | null | undefined | ScreenerSuggestionDefaultArgs> = $Result.GetResult<Prisma.$ScreenerSuggestionPayload, S>

  type ScreenerSuggestionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ScreenerSuggestionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ScreenerSuggestionCountAggregateInputType | true
    }

  export interface ScreenerSuggestionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ScreenerSuggestion'], meta: { name: 'ScreenerSuggestion' } }
    /**
     * Find zero or one ScreenerSuggestion that matches the filter.
     * @param {ScreenerSuggestionFindUniqueArgs} args - Arguments to find a ScreenerSuggestion
     * @example
     * // Get one ScreenerSuggestion
     * const screenerSuggestion = await prisma.screenerSuggestion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ScreenerSuggestionFindUniqueArgs>(args: SelectSubset<T, ScreenerSuggestionFindUniqueArgs<ExtArgs>>): Prisma__ScreenerSuggestionClient<$Result.GetResult<Prisma.$ScreenerSuggestionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ScreenerSuggestion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ScreenerSuggestionFindUniqueOrThrowArgs} args - Arguments to find a ScreenerSuggestion
     * @example
     * // Get one ScreenerSuggestion
     * const screenerSuggestion = await prisma.screenerSuggestion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ScreenerSuggestionFindUniqueOrThrowArgs>(args: SelectSubset<T, ScreenerSuggestionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ScreenerSuggestionClient<$Result.GetResult<Prisma.$ScreenerSuggestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ScreenerSuggestion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScreenerSuggestionFindFirstArgs} args - Arguments to find a ScreenerSuggestion
     * @example
     * // Get one ScreenerSuggestion
     * const screenerSuggestion = await prisma.screenerSuggestion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ScreenerSuggestionFindFirstArgs>(args?: SelectSubset<T, ScreenerSuggestionFindFirstArgs<ExtArgs>>): Prisma__ScreenerSuggestionClient<$Result.GetResult<Prisma.$ScreenerSuggestionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ScreenerSuggestion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScreenerSuggestionFindFirstOrThrowArgs} args - Arguments to find a ScreenerSuggestion
     * @example
     * // Get one ScreenerSuggestion
     * const screenerSuggestion = await prisma.screenerSuggestion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ScreenerSuggestionFindFirstOrThrowArgs>(args?: SelectSubset<T, ScreenerSuggestionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ScreenerSuggestionClient<$Result.GetResult<Prisma.$ScreenerSuggestionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ScreenerSuggestions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScreenerSuggestionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ScreenerSuggestions
     * const screenerSuggestions = await prisma.screenerSuggestion.findMany()
     * 
     * // Get first 10 ScreenerSuggestions
     * const screenerSuggestions = await prisma.screenerSuggestion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const screenerSuggestionWithIdOnly = await prisma.screenerSuggestion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ScreenerSuggestionFindManyArgs>(args?: SelectSubset<T, ScreenerSuggestionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScreenerSuggestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ScreenerSuggestion.
     * @param {ScreenerSuggestionCreateArgs} args - Arguments to create a ScreenerSuggestion.
     * @example
     * // Create one ScreenerSuggestion
     * const ScreenerSuggestion = await prisma.screenerSuggestion.create({
     *   data: {
     *     // ... data to create a ScreenerSuggestion
     *   }
     * })
     * 
     */
    create<T extends ScreenerSuggestionCreateArgs>(args: SelectSubset<T, ScreenerSuggestionCreateArgs<ExtArgs>>): Prisma__ScreenerSuggestionClient<$Result.GetResult<Prisma.$ScreenerSuggestionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ScreenerSuggestions.
     * @param {ScreenerSuggestionCreateManyArgs} args - Arguments to create many ScreenerSuggestions.
     * @example
     * // Create many ScreenerSuggestions
     * const screenerSuggestion = await prisma.screenerSuggestion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ScreenerSuggestionCreateManyArgs>(args?: SelectSubset<T, ScreenerSuggestionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ScreenerSuggestions and returns the data saved in the database.
     * @param {ScreenerSuggestionCreateManyAndReturnArgs} args - Arguments to create many ScreenerSuggestions.
     * @example
     * // Create many ScreenerSuggestions
     * const screenerSuggestion = await prisma.screenerSuggestion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ScreenerSuggestions and only return the `id`
     * const screenerSuggestionWithIdOnly = await prisma.screenerSuggestion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ScreenerSuggestionCreateManyAndReturnArgs>(args?: SelectSubset<T, ScreenerSuggestionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScreenerSuggestionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ScreenerSuggestion.
     * @param {ScreenerSuggestionDeleteArgs} args - Arguments to delete one ScreenerSuggestion.
     * @example
     * // Delete one ScreenerSuggestion
     * const ScreenerSuggestion = await prisma.screenerSuggestion.delete({
     *   where: {
     *     // ... filter to delete one ScreenerSuggestion
     *   }
     * })
     * 
     */
    delete<T extends ScreenerSuggestionDeleteArgs>(args: SelectSubset<T, ScreenerSuggestionDeleteArgs<ExtArgs>>): Prisma__ScreenerSuggestionClient<$Result.GetResult<Prisma.$ScreenerSuggestionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ScreenerSuggestion.
     * @param {ScreenerSuggestionUpdateArgs} args - Arguments to update one ScreenerSuggestion.
     * @example
     * // Update one ScreenerSuggestion
     * const screenerSuggestion = await prisma.screenerSuggestion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ScreenerSuggestionUpdateArgs>(args: SelectSubset<T, ScreenerSuggestionUpdateArgs<ExtArgs>>): Prisma__ScreenerSuggestionClient<$Result.GetResult<Prisma.$ScreenerSuggestionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ScreenerSuggestions.
     * @param {ScreenerSuggestionDeleteManyArgs} args - Arguments to filter ScreenerSuggestions to delete.
     * @example
     * // Delete a few ScreenerSuggestions
     * const { count } = await prisma.screenerSuggestion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ScreenerSuggestionDeleteManyArgs>(args?: SelectSubset<T, ScreenerSuggestionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ScreenerSuggestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScreenerSuggestionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ScreenerSuggestions
     * const screenerSuggestion = await prisma.screenerSuggestion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ScreenerSuggestionUpdateManyArgs>(args: SelectSubset<T, ScreenerSuggestionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ScreenerSuggestions and returns the data updated in the database.
     * @param {ScreenerSuggestionUpdateManyAndReturnArgs} args - Arguments to update many ScreenerSuggestions.
     * @example
     * // Update many ScreenerSuggestions
     * const screenerSuggestion = await prisma.screenerSuggestion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ScreenerSuggestions and only return the `id`
     * const screenerSuggestionWithIdOnly = await prisma.screenerSuggestion.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends ScreenerSuggestionUpdateManyAndReturnArgs>(args: SelectSubset<T, ScreenerSuggestionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScreenerSuggestionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ScreenerSuggestion.
     * @param {ScreenerSuggestionUpsertArgs} args - Arguments to update or create a ScreenerSuggestion.
     * @example
     * // Update or create a ScreenerSuggestion
     * const screenerSuggestion = await prisma.screenerSuggestion.upsert({
     *   create: {
     *     // ... data to create a ScreenerSuggestion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ScreenerSuggestion we want to update
     *   }
     * })
     */
    upsert<T extends ScreenerSuggestionUpsertArgs>(args: SelectSubset<T, ScreenerSuggestionUpsertArgs<ExtArgs>>): Prisma__ScreenerSuggestionClient<$Result.GetResult<Prisma.$ScreenerSuggestionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ScreenerSuggestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScreenerSuggestionCountArgs} args - Arguments to filter ScreenerSuggestions to count.
     * @example
     * // Count the number of ScreenerSuggestions
     * const count = await prisma.screenerSuggestion.count({
     *   where: {
     *     // ... the filter for the ScreenerSuggestions we want to count
     *   }
     * })
    **/
    count<T extends ScreenerSuggestionCountArgs>(
      args?: Subset<T, ScreenerSuggestionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScreenerSuggestionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ScreenerSuggestion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScreenerSuggestionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ScreenerSuggestionAggregateArgs>(args: Subset<T, ScreenerSuggestionAggregateArgs>): Prisma.PrismaPromise<GetScreenerSuggestionAggregateType<T>>

    /**
     * Group by ScreenerSuggestion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScreenerSuggestionGroupByArgs} args - Group by arguments.
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
      T extends ScreenerSuggestionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ScreenerSuggestionGroupByArgs['orderBy'] }
        : { orderBy?: ScreenerSuggestionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ScreenerSuggestionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScreenerSuggestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ScreenerSuggestion model
   */
  readonly fields: ScreenerSuggestionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ScreenerSuggestion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ScreenerSuggestionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    snapshots<T extends ScreenerSuggestion$snapshotsArgs<ExtArgs> = {}>(args?: Subset<T, ScreenerSuggestion$snapshotsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SuggestionSnapshotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    trade<T extends ScreenerSuggestion$tradeArgs<ExtArgs> = {}>(args?: Subset<T, ScreenerSuggestion$tradeArgs<ExtArgs>>): Prisma__TradeClient<$Result.GetResult<Prisma.$TradePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ScreenerSuggestion model
   */
  interface ScreenerSuggestionFieldRefs {
    readonly id: FieldRef<"ScreenerSuggestion", 'String'>
    readonly scanDate: FieldRef<"ScreenerSuggestion", 'DateTime'>
    readonly ticker: FieldRef<"ScreenerSuggestion", 'String'>
    readonly tickerNs: FieldRef<"ScreenerSuggestion", 'String'>
    readonly name: FieldRef<"ScreenerSuggestion", 'String'>
    readonly sector: FieldRef<"ScreenerSuggestion", 'String'>
    readonly setupType: FieldRef<"ScreenerSuggestion", 'String'>
    readonly score: FieldRef<"ScreenerSuggestion", 'Float'>
    readonly entryLow: FieldRef<"ScreenerSuggestion", 'Float'>
    readonly entryHigh: FieldRef<"ScreenerSuggestion", 'Float'>
    readonly sl: FieldRef<"ScreenerSuggestion", 'Float'>
    readonly t1: FieldRef<"ScreenerSuggestion", 'Float'>
    readonly t2: FieldRef<"ScreenerSuggestion", 'Float'>
    readonly notes: FieldRef<"ScreenerSuggestion", 'String'>
    readonly status: FieldRef<"ScreenerSuggestion", 'SuggestionStatus'>
    readonly createdAt: FieldRef<"ScreenerSuggestion", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ScreenerSuggestion findUnique
   */
  export type ScreenerSuggestionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScreenerSuggestion
     */
    select?: ScreenerSuggestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScreenerSuggestion
     */
    omit?: ScreenerSuggestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScreenerSuggestionInclude<ExtArgs> | null
    /**
     * Filter, which ScreenerSuggestion to fetch.
     */
    where: ScreenerSuggestionWhereUniqueInput
  }

  /**
   * ScreenerSuggestion findUniqueOrThrow
   */
  export type ScreenerSuggestionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScreenerSuggestion
     */
    select?: ScreenerSuggestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScreenerSuggestion
     */
    omit?: ScreenerSuggestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScreenerSuggestionInclude<ExtArgs> | null
    /**
     * Filter, which ScreenerSuggestion to fetch.
     */
    where: ScreenerSuggestionWhereUniqueInput
  }

  /**
   * ScreenerSuggestion findFirst
   */
  export type ScreenerSuggestionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScreenerSuggestion
     */
    select?: ScreenerSuggestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScreenerSuggestion
     */
    omit?: ScreenerSuggestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScreenerSuggestionInclude<ExtArgs> | null
    /**
     * Filter, which ScreenerSuggestion to fetch.
     */
    where?: ScreenerSuggestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScreenerSuggestions to fetch.
     */
    orderBy?: ScreenerSuggestionOrderByWithRelationInput | ScreenerSuggestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ScreenerSuggestions.
     */
    cursor?: ScreenerSuggestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScreenerSuggestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScreenerSuggestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ScreenerSuggestions.
     */
    distinct?: ScreenerSuggestionScalarFieldEnum | ScreenerSuggestionScalarFieldEnum[]
  }

  /**
   * ScreenerSuggestion findFirstOrThrow
   */
  export type ScreenerSuggestionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScreenerSuggestion
     */
    select?: ScreenerSuggestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScreenerSuggestion
     */
    omit?: ScreenerSuggestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScreenerSuggestionInclude<ExtArgs> | null
    /**
     * Filter, which ScreenerSuggestion to fetch.
     */
    where?: ScreenerSuggestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScreenerSuggestions to fetch.
     */
    orderBy?: ScreenerSuggestionOrderByWithRelationInput | ScreenerSuggestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ScreenerSuggestions.
     */
    cursor?: ScreenerSuggestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScreenerSuggestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScreenerSuggestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ScreenerSuggestions.
     */
    distinct?: ScreenerSuggestionScalarFieldEnum | ScreenerSuggestionScalarFieldEnum[]
  }

  /**
   * ScreenerSuggestion findMany
   */
  export type ScreenerSuggestionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScreenerSuggestion
     */
    select?: ScreenerSuggestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScreenerSuggestion
     */
    omit?: ScreenerSuggestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScreenerSuggestionInclude<ExtArgs> | null
    /**
     * Filter, which ScreenerSuggestions to fetch.
     */
    where?: ScreenerSuggestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScreenerSuggestions to fetch.
     */
    orderBy?: ScreenerSuggestionOrderByWithRelationInput | ScreenerSuggestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ScreenerSuggestions.
     */
    cursor?: ScreenerSuggestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScreenerSuggestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScreenerSuggestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ScreenerSuggestions.
     */
    distinct?: ScreenerSuggestionScalarFieldEnum | ScreenerSuggestionScalarFieldEnum[]
  }

  /**
   * ScreenerSuggestion create
   */
  export type ScreenerSuggestionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScreenerSuggestion
     */
    select?: ScreenerSuggestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScreenerSuggestion
     */
    omit?: ScreenerSuggestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScreenerSuggestionInclude<ExtArgs> | null
    /**
     * The data needed to create a ScreenerSuggestion.
     */
    data: XOR<ScreenerSuggestionCreateInput, ScreenerSuggestionUncheckedCreateInput>
  }

  /**
   * ScreenerSuggestion createMany
   */
  export type ScreenerSuggestionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ScreenerSuggestions.
     */
    data: ScreenerSuggestionCreateManyInput | ScreenerSuggestionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ScreenerSuggestion createManyAndReturn
   */
  export type ScreenerSuggestionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScreenerSuggestion
     */
    select?: ScreenerSuggestionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ScreenerSuggestion
     */
    omit?: ScreenerSuggestionOmit<ExtArgs> | null
    /**
     * The data used to create many ScreenerSuggestions.
     */
    data: ScreenerSuggestionCreateManyInput | ScreenerSuggestionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ScreenerSuggestion update
   */
  export type ScreenerSuggestionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScreenerSuggestion
     */
    select?: ScreenerSuggestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScreenerSuggestion
     */
    omit?: ScreenerSuggestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScreenerSuggestionInclude<ExtArgs> | null
    /**
     * The data needed to update a ScreenerSuggestion.
     */
    data: XOR<ScreenerSuggestionUpdateInput, ScreenerSuggestionUncheckedUpdateInput>
    /**
     * Choose, which ScreenerSuggestion to update.
     */
    where: ScreenerSuggestionWhereUniqueInput
  }

  /**
   * ScreenerSuggestion updateMany
   */
  export type ScreenerSuggestionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ScreenerSuggestions.
     */
    data: XOR<ScreenerSuggestionUpdateManyMutationInput, ScreenerSuggestionUncheckedUpdateManyInput>
    /**
     * Filter which ScreenerSuggestions to update
     */
    where?: ScreenerSuggestionWhereInput
    /**
     * Limit how many ScreenerSuggestions to update.
     */
    limit?: number
  }

  /**
   * ScreenerSuggestion updateManyAndReturn
   */
  export type ScreenerSuggestionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScreenerSuggestion
     */
    select?: ScreenerSuggestionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ScreenerSuggestion
     */
    omit?: ScreenerSuggestionOmit<ExtArgs> | null
    /**
     * The data used to update ScreenerSuggestions.
     */
    data: XOR<ScreenerSuggestionUpdateManyMutationInput, ScreenerSuggestionUncheckedUpdateManyInput>
    /**
     * Filter which ScreenerSuggestions to update
     */
    where?: ScreenerSuggestionWhereInput
    /**
     * Limit how many ScreenerSuggestions to update.
     */
    limit?: number
  }

  /**
   * ScreenerSuggestion upsert
   */
  export type ScreenerSuggestionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScreenerSuggestion
     */
    select?: ScreenerSuggestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScreenerSuggestion
     */
    omit?: ScreenerSuggestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScreenerSuggestionInclude<ExtArgs> | null
    /**
     * The filter to search for the ScreenerSuggestion to update in case it exists.
     */
    where: ScreenerSuggestionWhereUniqueInput
    /**
     * In case the ScreenerSuggestion found by the `where` argument doesn't exist, create a new ScreenerSuggestion with this data.
     */
    create: XOR<ScreenerSuggestionCreateInput, ScreenerSuggestionUncheckedCreateInput>
    /**
     * In case the ScreenerSuggestion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ScreenerSuggestionUpdateInput, ScreenerSuggestionUncheckedUpdateInput>
  }

  /**
   * ScreenerSuggestion delete
   */
  export type ScreenerSuggestionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScreenerSuggestion
     */
    select?: ScreenerSuggestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScreenerSuggestion
     */
    omit?: ScreenerSuggestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScreenerSuggestionInclude<ExtArgs> | null
    /**
     * Filter which ScreenerSuggestion to delete.
     */
    where: ScreenerSuggestionWhereUniqueInput
  }

  /**
   * ScreenerSuggestion deleteMany
   */
  export type ScreenerSuggestionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ScreenerSuggestions to delete
     */
    where?: ScreenerSuggestionWhereInput
    /**
     * Limit how many ScreenerSuggestions to delete.
     */
    limit?: number
  }

  /**
   * ScreenerSuggestion.snapshots
   */
  export type ScreenerSuggestion$snapshotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuggestionSnapshot
     */
    select?: SuggestionSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuggestionSnapshot
     */
    omit?: SuggestionSnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuggestionSnapshotInclude<ExtArgs> | null
    where?: SuggestionSnapshotWhereInput
    orderBy?: SuggestionSnapshotOrderByWithRelationInput | SuggestionSnapshotOrderByWithRelationInput[]
    cursor?: SuggestionSnapshotWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SuggestionSnapshotScalarFieldEnum | SuggestionSnapshotScalarFieldEnum[]
  }

  /**
   * ScreenerSuggestion.trade
   */
  export type ScreenerSuggestion$tradeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trade
     */
    omit?: TradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeInclude<ExtArgs> | null
    where?: TradeWhereInput
  }

  /**
   * ScreenerSuggestion without action
   */
  export type ScreenerSuggestionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScreenerSuggestion
     */
    select?: ScreenerSuggestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScreenerSuggestion
     */
    omit?: ScreenerSuggestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScreenerSuggestionInclude<ExtArgs> | null
  }


  /**
   * Model SuggestionSnapshot
   */

  export type AggregateSuggestionSnapshot = {
    _count: SuggestionSnapshotCountAggregateOutputType | null
    _avg: SuggestionSnapshotAvgAggregateOutputType | null
    _sum: SuggestionSnapshotSumAggregateOutputType | null
    _min: SuggestionSnapshotMinAggregateOutputType | null
    _max: SuggestionSnapshotMaxAggregateOutputType | null
  }

  export type SuggestionSnapshotAvgAggregateOutputType = {
    closePrice: number | null
    hypoEntryPrice: number | null
    hypoPnlAbs: number | null
    hypoPnlPct: number | null
  }

  export type SuggestionSnapshotSumAggregateOutputType = {
    closePrice: number | null
    hypoEntryPrice: number | null
    hypoPnlAbs: number | null
    hypoPnlPct: number | null
  }

  export type SuggestionSnapshotMinAggregateOutputType = {
    id: string | null
    suggestionId: string | null
    date: Date | null
    closePrice: number | null
    hypoEntryPrice: number | null
    hypoPnlAbs: number | null
    hypoPnlPct: number | null
  }

  export type SuggestionSnapshotMaxAggregateOutputType = {
    id: string | null
    suggestionId: string | null
    date: Date | null
    closePrice: number | null
    hypoEntryPrice: number | null
    hypoPnlAbs: number | null
    hypoPnlPct: number | null
  }

  export type SuggestionSnapshotCountAggregateOutputType = {
    id: number
    suggestionId: number
    date: number
    closePrice: number
    hypoEntryPrice: number
    hypoPnlAbs: number
    hypoPnlPct: number
    _all: number
  }


  export type SuggestionSnapshotAvgAggregateInputType = {
    closePrice?: true
    hypoEntryPrice?: true
    hypoPnlAbs?: true
    hypoPnlPct?: true
  }

  export type SuggestionSnapshotSumAggregateInputType = {
    closePrice?: true
    hypoEntryPrice?: true
    hypoPnlAbs?: true
    hypoPnlPct?: true
  }

  export type SuggestionSnapshotMinAggregateInputType = {
    id?: true
    suggestionId?: true
    date?: true
    closePrice?: true
    hypoEntryPrice?: true
    hypoPnlAbs?: true
    hypoPnlPct?: true
  }

  export type SuggestionSnapshotMaxAggregateInputType = {
    id?: true
    suggestionId?: true
    date?: true
    closePrice?: true
    hypoEntryPrice?: true
    hypoPnlAbs?: true
    hypoPnlPct?: true
  }

  export type SuggestionSnapshotCountAggregateInputType = {
    id?: true
    suggestionId?: true
    date?: true
    closePrice?: true
    hypoEntryPrice?: true
    hypoPnlAbs?: true
    hypoPnlPct?: true
    _all?: true
  }

  export type SuggestionSnapshotAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SuggestionSnapshot to aggregate.
     */
    where?: SuggestionSnapshotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SuggestionSnapshots to fetch.
     */
    orderBy?: SuggestionSnapshotOrderByWithRelationInput | SuggestionSnapshotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SuggestionSnapshotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SuggestionSnapshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SuggestionSnapshots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SuggestionSnapshots
    **/
    _count?: true | SuggestionSnapshotCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SuggestionSnapshotAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SuggestionSnapshotSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SuggestionSnapshotMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SuggestionSnapshotMaxAggregateInputType
  }

  export type GetSuggestionSnapshotAggregateType<T extends SuggestionSnapshotAggregateArgs> = {
        [P in keyof T & keyof AggregateSuggestionSnapshot]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSuggestionSnapshot[P]>
      : GetScalarType<T[P], AggregateSuggestionSnapshot[P]>
  }




  export type SuggestionSnapshotGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SuggestionSnapshotWhereInput
    orderBy?: SuggestionSnapshotOrderByWithAggregationInput | SuggestionSnapshotOrderByWithAggregationInput[]
    by: SuggestionSnapshotScalarFieldEnum[] | SuggestionSnapshotScalarFieldEnum
    having?: SuggestionSnapshotScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SuggestionSnapshotCountAggregateInputType | true
    _avg?: SuggestionSnapshotAvgAggregateInputType
    _sum?: SuggestionSnapshotSumAggregateInputType
    _min?: SuggestionSnapshotMinAggregateInputType
    _max?: SuggestionSnapshotMaxAggregateInputType
  }

  export type SuggestionSnapshotGroupByOutputType = {
    id: string
    suggestionId: string
    date: Date
    closePrice: number
    hypoEntryPrice: number
    hypoPnlAbs: number
    hypoPnlPct: number
    _count: SuggestionSnapshotCountAggregateOutputType | null
    _avg: SuggestionSnapshotAvgAggregateOutputType | null
    _sum: SuggestionSnapshotSumAggregateOutputType | null
    _min: SuggestionSnapshotMinAggregateOutputType | null
    _max: SuggestionSnapshotMaxAggregateOutputType | null
  }

  type GetSuggestionSnapshotGroupByPayload<T extends SuggestionSnapshotGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SuggestionSnapshotGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SuggestionSnapshotGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SuggestionSnapshotGroupByOutputType[P]>
            : GetScalarType<T[P], SuggestionSnapshotGroupByOutputType[P]>
        }
      >
    >


  export type SuggestionSnapshotSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    suggestionId?: boolean
    date?: boolean
    closePrice?: boolean
    hypoEntryPrice?: boolean
    hypoPnlAbs?: boolean
    hypoPnlPct?: boolean
    suggestion?: boolean | ScreenerSuggestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["suggestionSnapshot"]>

  export type SuggestionSnapshotSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    suggestionId?: boolean
    date?: boolean
    closePrice?: boolean
    hypoEntryPrice?: boolean
    hypoPnlAbs?: boolean
    hypoPnlPct?: boolean
    suggestion?: boolean | ScreenerSuggestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["suggestionSnapshot"]>

  export type SuggestionSnapshotSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    suggestionId?: boolean
    date?: boolean
    closePrice?: boolean
    hypoEntryPrice?: boolean
    hypoPnlAbs?: boolean
    hypoPnlPct?: boolean
    suggestion?: boolean | ScreenerSuggestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["suggestionSnapshot"]>

  export type SuggestionSnapshotSelectScalar = {
    id?: boolean
    suggestionId?: boolean
    date?: boolean
    closePrice?: boolean
    hypoEntryPrice?: boolean
    hypoPnlAbs?: boolean
    hypoPnlPct?: boolean
  }

  export type SuggestionSnapshotOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "suggestionId" | "date" | "closePrice" | "hypoEntryPrice" | "hypoPnlAbs" | "hypoPnlPct", ExtArgs["result"]["suggestionSnapshot"]>
  export type SuggestionSnapshotInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    suggestion?: boolean | ScreenerSuggestionDefaultArgs<ExtArgs>
  }
  export type SuggestionSnapshotIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    suggestion?: boolean | ScreenerSuggestionDefaultArgs<ExtArgs>
  }
  export type SuggestionSnapshotIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    suggestion?: boolean | ScreenerSuggestionDefaultArgs<ExtArgs>
  }

  export type $SuggestionSnapshotPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SuggestionSnapshot"
    objects: {
      suggestion: Prisma.$ScreenerSuggestionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      suggestionId: string
      date: Date
      closePrice: number
      hypoEntryPrice: number
      hypoPnlAbs: number
      hypoPnlPct: number
    }, ExtArgs["result"]["suggestionSnapshot"]>
    composites: {}
  }

  type SuggestionSnapshotGetPayload<S extends boolean | null | undefined | SuggestionSnapshotDefaultArgs> = $Result.GetResult<Prisma.$SuggestionSnapshotPayload, S>

  type SuggestionSnapshotCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SuggestionSnapshotFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SuggestionSnapshotCountAggregateInputType | true
    }

  export interface SuggestionSnapshotDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SuggestionSnapshot'], meta: { name: 'SuggestionSnapshot' } }
    /**
     * Find zero or one SuggestionSnapshot that matches the filter.
     * @param {SuggestionSnapshotFindUniqueArgs} args - Arguments to find a SuggestionSnapshot
     * @example
     * // Get one SuggestionSnapshot
     * const suggestionSnapshot = await prisma.suggestionSnapshot.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SuggestionSnapshotFindUniqueArgs>(args: SelectSubset<T, SuggestionSnapshotFindUniqueArgs<ExtArgs>>): Prisma__SuggestionSnapshotClient<$Result.GetResult<Prisma.$SuggestionSnapshotPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SuggestionSnapshot that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SuggestionSnapshotFindUniqueOrThrowArgs} args - Arguments to find a SuggestionSnapshot
     * @example
     * // Get one SuggestionSnapshot
     * const suggestionSnapshot = await prisma.suggestionSnapshot.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SuggestionSnapshotFindUniqueOrThrowArgs>(args: SelectSubset<T, SuggestionSnapshotFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SuggestionSnapshotClient<$Result.GetResult<Prisma.$SuggestionSnapshotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SuggestionSnapshot that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuggestionSnapshotFindFirstArgs} args - Arguments to find a SuggestionSnapshot
     * @example
     * // Get one SuggestionSnapshot
     * const suggestionSnapshot = await prisma.suggestionSnapshot.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SuggestionSnapshotFindFirstArgs>(args?: SelectSubset<T, SuggestionSnapshotFindFirstArgs<ExtArgs>>): Prisma__SuggestionSnapshotClient<$Result.GetResult<Prisma.$SuggestionSnapshotPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SuggestionSnapshot that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuggestionSnapshotFindFirstOrThrowArgs} args - Arguments to find a SuggestionSnapshot
     * @example
     * // Get one SuggestionSnapshot
     * const suggestionSnapshot = await prisma.suggestionSnapshot.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SuggestionSnapshotFindFirstOrThrowArgs>(args?: SelectSubset<T, SuggestionSnapshotFindFirstOrThrowArgs<ExtArgs>>): Prisma__SuggestionSnapshotClient<$Result.GetResult<Prisma.$SuggestionSnapshotPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SuggestionSnapshots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuggestionSnapshotFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SuggestionSnapshots
     * const suggestionSnapshots = await prisma.suggestionSnapshot.findMany()
     * 
     * // Get first 10 SuggestionSnapshots
     * const suggestionSnapshots = await prisma.suggestionSnapshot.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const suggestionSnapshotWithIdOnly = await prisma.suggestionSnapshot.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SuggestionSnapshotFindManyArgs>(args?: SelectSubset<T, SuggestionSnapshotFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SuggestionSnapshotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SuggestionSnapshot.
     * @param {SuggestionSnapshotCreateArgs} args - Arguments to create a SuggestionSnapshot.
     * @example
     * // Create one SuggestionSnapshot
     * const SuggestionSnapshot = await prisma.suggestionSnapshot.create({
     *   data: {
     *     // ... data to create a SuggestionSnapshot
     *   }
     * })
     * 
     */
    create<T extends SuggestionSnapshotCreateArgs>(args: SelectSubset<T, SuggestionSnapshotCreateArgs<ExtArgs>>): Prisma__SuggestionSnapshotClient<$Result.GetResult<Prisma.$SuggestionSnapshotPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SuggestionSnapshots.
     * @param {SuggestionSnapshotCreateManyArgs} args - Arguments to create many SuggestionSnapshots.
     * @example
     * // Create many SuggestionSnapshots
     * const suggestionSnapshot = await prisma.suggestionSnapshot.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SuggestionSnapshotCreateManyArgs>(args?: SelectSubset<T, SuggestionSnapshotCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SuggestionSnapshots and returns the data saved in the database.
     * @param {SuggestionSnapshotCreateManyAndReturnArgs} args - Arguments to create many SuggestionSnapshots.
     * @example
     * // Create many SuggestionSnapshots
     * const suggestionSnapshot = await prisma.suggestionSnapshot.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SuggestionSnapshots and only return the `id`
     * const suggestionSnapshotWithIdOnly = await prisma.suggestionSnapshot.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SuggestionSnapshotCreateManyAndReturnArgs>(args?: SelectSubset<T, SuggestionSnapshotCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SuggestionSnapshotPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SuggestionSnapshot.
     * @param {SuggestionSnapshotDeleteArgs} args - Arguments to delete one SuggestionSnapshot.
     * @example
     * // Delete one SuggestionSnapshot
     * const SuggestionSnapshot = await prisma.suggestionSnapshot.delete({
     *   where: {
     *     // ... filter to delete one SuggestionSnapshot
     *   }
     * })
     * 
     */
    delete<T extends SuggestionSnapshotDeleteArgs>(args: SelectSubset<T, SuggestionSnapshotDeleteArgs<ExtArgs>>): Prisma__SuggestionSnapshotClient<$Result.GetResult<Prisma.$SuggestionSnapshotPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SuggestionSnapshot.
     * @param {SuggestionSnapshotUpdateArgs} args - Arguments to update one SuggestionSnapshot.
     * @example
     * // Update one SuggestionSnapshot
     * const suggestionSnapshot = await prisma.suggestionSnapshot.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SuggestionSnapshotUpdateArgs>(args: SelectSubset<T, SuggestionSnapshotUpdateArgs<ExtArgs>>): Prisma__SuggestionSnapshotClient<$Result.GetResult<Prisma.$SuggestionSnapshotPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SuggestionSnapshots.
     * @param {SuggestionSnapshotDeleteManyArgs} args - Arguments to filter SuggestionSnapshots to delete.
     * @example
     * // Delete a few SuggestionSnapshots
     * const { count } = await prisma.suggestionSnapshot.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SuggestionSnapshotDeleteManyArgs>(args?: SelectSubset<T, SuggestionSnapshotDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SuggestionSnapshots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuggestionSnapshotUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SuggestionSnapshots
     * const suggestionSnapshot = await prisma.suggestionSnapshot.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SuggestionSnapshotUpdateManyArgs>(args: SelectSubset<T, SuggestionSnapshotUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SuggestionSnapshots and returns the data updated in the database.
     * @param {SuggestionSnapshotUpdateManyAndReturnArgs} args - Arguments to update many SuggestionSnapshots.
     * @example
     * // Update many SuggestionSnapshots
     * const suggestionSnapshot = await prisma.suggestionSnapshot.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SuggestionSnapshots and only return the `id`
     * const suggestionSnapshotWithIdOnly = await prisma.suggestionSnapshot.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends SuggestionSnapshotUpdateManyAndReturnArgs>(args: SelectSubset<T, SuggestionSnapshotUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SuggestionSnapshotPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SuggestionSnapshot.
     * @param {SuggestionSnapshotUpsertArgs} args - Arguments to update or create a SuggestionSnapshot.
     * @example
     * // Update or create a SuggestionSnapshot
     * const suggestionSnapshot = await prisma.suggestionSnapshot.upsert({
     *   create: {
     *     // ... data to create a SuggestionSnapshot
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SuggestionSnapshot we want to update
     *   }
     * })
     */
    upsert<T extends SuggestionSnapshotUpsertArgs>(args: SelectSubset<T, SuggestionSnapshotUpsertArgs<ExtArgs>>): Prisma__SuggestionSnapshotClient<$Result.GetResult<Prisma.$SuggestionSnapshotPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SuggestionSnapshots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuggestionSnapshotCountArgs} args - Arguments to filter SuggestionSnapshots to count.
     * @example
     * // Count the number of SuggestionSnapshots
     * const count = await prisma.suggestionSnapshot.count({
     *   where: {
     *     // ... the filter for the SuggestionSnapshots we want to count
     *   }
     * })
    **/
    count<T extends SuggestionSnapshotCountArgs>(
      args?: Subset<T, SuggestionSnapshotCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SuggestionSnapshotCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SuggestionSnapshot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuggestionSnapshotAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SuggestionSnapshotAggregateArgs>(args: Subset<T, SuggestionSnapshotAggregateArgs>): Prisma.PrismaPromise<GetSuggestionSnapshotAggregateType<T>>

    /**
     * Group by SuggestionSnapshot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuggestionSnapshotGroupByArgs} args - Group by arguments.
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
      T extends SuggestionSnapshotGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SuggestionSnapshotGroupByArgs['orderBy'] }
        : { orderBy?: SuggestionSnapshotGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SuggestionSnapshotGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSuggestionSnapshotGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SuggestionSnapshot model
   */
  readonly fields: SuggestionSnapshotFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SuggestionSnapshot.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SuggestionSnapshotClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    suggestion<T extends ScreenerSuggestionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ScreenerSuggestionDefaultArgs<ExtArgs>>): Prisma__ScreenerSuggestionClient<$Result.GetResult<Prisma.$ScreenerSuggestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SuggestionSnapshot model
   */
  interface SuggestionSnapshotFieldRefs {
    readonly id: FieldRef<"SuggestionSnapshot", 'String'>
    readonly suggestionId: FieldRef<"SuggestionSnapshot", 'String'>
    readonly date: FieldRef<"SuggestionSnapshot", 'DateTime'>
    readonly closePrice: FieldRef<"SuggestionSnapshot", 'Float'>
    readonly hypoEntryPrice: FieldRef<"SuggestionSnapshot", 'Float'>
    readonly hypoPnlAbs: FieldRef<"SuggestionSnapshot", 'Float'>
    readonly hypoPnlPct: FieldRef<"SuggestionSnapshot", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * SuggestionSnapshot findUnique
   */
  export type SuggestionSnapshotFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuggestionSnapshot
     */
    select?: SuggestionSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuggestionSnapshot
     */
    omit?: SuggestionSnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuggestionSnapshotInclude<ExtArgs> | null
    /**
     * Filter, which SuggestionSnapshot to fetch.
     */
    where: SuggestionSnapshotWhereUniqueInput
  }

  /**
   * SuggestionSnapshot findUniqueOrThrow
   */
  export type SuggestionSnapshotFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuggestionSnapshot
     */
    select?: SuggestionSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuggestionSnapshot
     */
    omit?: SuggestionSnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuggestionSnapshotInclude<ExtArgs> | null
    /**
     * Filter, which SuggestionSnapshot to fetch.
     */
    where: SuggestionSnapshotWhereUniqueInput
  }

  /**
   * SuggestionSnapshot findFirst
   */
  export type SuggestionSnapshotFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuggestionSnapshot
     */
    select?: SuggestionSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuggestionSnapshot
     */
    omit?: SuggestionSnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuggestionSnapshotInclude<ExtArgs> | null
    /**
     * Filter, which SuggestionSnapshot to fetch.
     */
    where?: SuggestionSnapshotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SuggestionSnapshots to fetch.
     */
    orderBy?: SuggestionSnapshotOrderByWithRelationInput | SuggestionSnapshotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SuggestionSnapshots.
     */
    cursor?: SuggestionSnapshotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SuggestionSnapshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SuggestionSnapshots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SuggestionSnapshots.
     */
    distinct?: SuggestionSnapshotScalarFieldEnum | SuggestionSnapshotScalarFieldEnum[]
  }

  /**
   * SuggestionSnapshot findFirstOrThrow
   */
  export type SuggestionSnapshotFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuggestionSnapshot
     */
    select?: SuggestionSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuggestionSnapshot
     */
    omit?: SuggestionSnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuggestionSnapshotInclude<ExtArgs> | null
    /**
     * Filter, which SuggestionSnapshot to fetch.
     */
    where?: SuggestionSnapshotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SuggestionSnapshots to fetch.
     */
    orderBy?: SuggestionSnapshotOrderByWithRelationInput | SuggestionSnapshotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SuggestionSnapshots.
     */
    cursor?: SuggestionSnapshotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SuggestionSnapshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SuggestionSnapshots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SuggestionSnapshots.
     */
    distinct?: SuggestionSnapshotScalarFieldEnum | SuggestionSnapshotScalarFieldEnum[]
  }

  /**
   * SuggestionSnapshot findMany
   */
  export type SuggestionSnapshotFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuggestionSnapshot
     */
    select?: SuggestionSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuggestionSnapshot
     */
    omit?: SuggestionSnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuggestionSnapshotInclude<ExtArgs> | null
    /**
     * Filter, which SuggestionSnapshots to fetch.
     */
    where?: SuggestionSnapshotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SuggestionSnapshots to fetch.
     */
    orderBy?: SuggestionSnapshotOrderByWithRelationInput | SuggestionSnapshotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SuggestionSnapshots.
     */
    cursor?: SuggestionSnapshotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SuggestionSnapshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SuggestionSnapshots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SuggestionSnapshots.
     */
    distinct?: SuggestionSnapshotScalarFieldEnum | SuggestionSnapshotScalarFieldEnum[]
  }

  /**
   * SuggestionSnapshot create
   */
  export type SuggestionSnapshotCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuggestionSnapshot
     */
    select?: SuggestionSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuggestionSnapshot
     */
    omit?: SuggestionSnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuggestionSnapshotInclude<ExtArgs> | null
    /**
     * The data needed to create a SuggestionSnapshot.
     */
    data: XOR<SuggestionSnapshotCreateInput, SuggestionSnapshotUncheckedCreateInput>
  }

  /**
   * SuggestionSnapshot createMany
   */
  export type SuggestionSnapshotCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SuggestionSnapshots.
     */
    data: SuggestionSnapshotCreateManyInput | SuggestionSnapshotCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SuggestionSnapshot createManyAndReturn
   */
  export type SuggestionSnapshotCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuggestionSnapshot
     */
    select?: SuggestionSnapshotSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SuggestionSnapshot
     */
    omit?: SuggestionSnapshotOmit<ExtArgs> | null
    /**
     * The data used to create many SuggestionSnapshots.
     */
    data: SuggestionSnapshotCreateManyInput | SuggestionSnapshotCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuggestionSnapshotIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SuggestionSnapshot update
   */
  export type SuggestionSnapshotUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuggestionSnapshot
     */
    select?: SuggestionSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuggestionSnapshot
     */
    omit?: SuggestionSnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuggestionSnapshotInclude<ExtArgs> | null
    /**
     * The data needed to update a SuggestionSnapshot.
     */
    data: XOR<SuggestionSnapshotUpdateInput, SuggestionSnapshotUncheckedUpdateInput>
    /**
     * Choose, which SuggestionSnapshot to update.
     */
    where: SuggestionSnapshotWhereUniqueInput
  }

  /**
   * SuggestionSnapshot updateMany
   */
  export type SuggestionSnapshotUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SuggestionSnapshots.
     */
    data: XOR<SuggestionSnapshotUpdateManyMutationInput, SuggestionSnapshotUncheckedUpdateManyInput>
    /**
     * Filter which SuggestionSnapshots to update
     */
    where?: SuggestionSnapshotWhereInput
    /**
     * Limit how many SuggestionSnapshots to update.
     */
    limit?: number
  }

  /**
   * SuggestionSnapshot updateManyAndReturn
   */
  export type SuggestionSnapshotUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuggestionSnapshot
     */
    select?: SuggestionSnapshotSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SuggestionSnapshot
     */
    omit?: SuggestionSnapshotOmit<ExtArgs> | null
    /**
     * The data used to update SuggestionSnapshots.
     */
    data: XOR<SuggestionSnapshotUpdateManyMutationInput, SuggestionSnapshotUncheckedUpdateManyInput>
    /**
     * Filter which SuggestionSnapshots to update
     */
    where?: SuggestionSnapshotWhereInput
    /**
     * Limit how many SuggestionSnapshots to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuggestionSnapshotIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SuggestionSnapshot upsert
   */
  export type SuggestionSnapshotUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuggestionSnapshot
     */
    select?: SuggestionSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuggestionSnapshot
     */
    omit?: SuggestionSnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuggestionSnapshotInclude<ExtArgs> | null
    /**
     * The filter to search for the SuggestionSnapshot to update in case it exists.
     */
    where: SuggestionSnapshotWhereUniqueInput
    /**
     * In case the SuggestionSnapshot found by the `where` argument doesn't exist, create a new SuggestionSnapshot with this data.
     */
    create: XOR<SuggestionSnapshotCreateInput, SuggestionSnapshotUncheckedCreateInput>
    /**
     * In case the SuggestionSnapshot was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SuggestionSnapshotUpdateInput, SuggestionSnapshotUncheckedUpdateInput>
  }

  /**
   * SuggestionSnapshot delete
   */
  export type SuggestionSnapshotDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuggestionSnapshot
     */
    select?: SuggestionSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuggestionSnapshot
     */
    omit?: SuggestionSnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuggestionSnapshotInclude<ExtArgs> | null
    /**
     * Filter which SuggestionSnapshot to delete.
     */
    where: SuggestionSnapshotWhereUniqueInput
  }

  /**
   * SuggestionSnapshot deleteMany
   */
  export type SuggestionSnapshotDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SuggestionSnapshots to delete
     */
    where?: SuggestionSnapshotWhereInput
    /**
     * Limit how many SuggestionSnapshots to delete.
     */
    limit?: number
  }

  /**
   * SuggestionSnapshot without action
   */
  export type SuggestionSnapshotDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuggestionSnapshot
     */
    select?: SuggestionSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuggestionSnapshot
     */
    omit?: SuggestionSnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuggestionSnapshotInclude<ExtArgs> | null
  }


  /**
   * Model Trade
   */

  export type AggregateTrade = {
    _count: TradeCountAggregateOutputType | null
    _avg: TradeAvgAggregateOutputType | null
    _sum: TradeSumAggregateOutputType | null
    _min: TradeMinAggregateOutputType | null
    _max: TradeMaxAggregateOutputType | null
  }

  export type TradeAvgAggregateOutputType = {
    entryPrice: number | null
    quantity: number | null
    capitalDeployed: number | null
    exitPrice: number | null
    realizedPnl: number | null
    realizedPnlPct: number | null
    sl: number | null
    t1: number | null
    t2: number | null
  }

  export type TradeSumAggregateOutputType = {
    entryPrice: number | null
    quantity: number | null
    capitalDeployed: number | null
    exitPrice: number | null
    realizedPnl: number | null
    realizedPnlPct: number | null
    sl: number | null
    t1: number | null
    t2: number | null
  }

  export type TradeMinAggregateOutputType = {
    id: string | null
    suggestionId: string | null
    ticker: string | null
    tickerNs: string | null
    name: string | null
    sector: string | null
    entryPrice: number | null
    entryDate: Date | null
    quantity: number | null
    capitalDeployed: number | null
    exitPrice: number | null
    exitDate: Date | null
    status: $Enums.TradeStatus | null
    realizedPnl: number | null
    realizedPnlPct: number | null
    sl: number | null
    t1: number | null
    t2: number | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TradeMaxAggregateOutputType = {
    id: string | null
    suggestionId: string | null
    ticker: string | null
    tickerNs: string | null
    name: string | null
    sector: string | null
    entryPrice: number | null
    entryDate: Date | null
    quantity: number | null
    capitalDeployed: number | null
    exitPrice: number | null
    exitDate: Date | null
    status: $Enums.TradeStatus | null
    realizedPnl: number | null
    realizedPnlPct: number | null
    sl: number | null
    t1: number | null
    t2: number | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TradeCountAggregateOutputType = {
    id: number
    suggestionId: number
    ticker: number
    tickerNs: number
    name: number
    sector: number
    entryPrice: number
    entryDate: number
    quantity: number
    capitalDeployed: number
    exitPrice: number
    exitDate: number
    status: number
    realizedPnl: number
    realizedPnlPct: number
    sl: number
    t1: number
    t2: number
    notes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TradeAvgAggregateInputType = {
    entryPrice?: true
    quantity?: true
    capitalDeployed?: true
    exitPrice?: true
    realizedPnl?: true
    realizedPnlPct?: true
    sl?: true
    t1?: true
    t2?: true
  }

  export type TradeSumAggregateInputType = {
    entryPrice?: true
    quantity?: true
    capitalDeployed?: true
    exitPrice?: true
    realizedPnl?: true
    realizedPnlPct?: true
    sl?: true
    t1?: true
    t2?: true
  }

  export type TradeMinAggregateInputType = {
    id?: true
    suggestionId?: true
    ticker?: true
    tickerNs?: true
    name?: true
    sector?: true
    entryPrice?: true
    entryDate?: true
    quantity?: true
    capitalDeployed?: true
    exitPrice?: true
    exitDate?: true
    status?: true
    realizedPnl?: true
    realizedPnlPct?: true
    sl?: true
    t1?: true
    t2?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TradeMaxAggregateInputType = {
    id?: true
    suggestionId?: true
    ticker?: true
    tickerNs?: true
    name?: true
    sector?: true
    entryPrice?: true
    entryDate?: true
    quantity?: true
    capitalDeployed?: true
    exitPrice?: true
    exitDate?: true
    status?: true
    realizedPnl?: true
    realizedPnlPct?: true
    sl?: true
    t1?: true
    t2?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TradeCountAggregateInputType = {
    id?: true
    suggestionId?: true
    ticker?: true
    tickerNs?: true
    name?: true
    sector?: true
    entryPrice?: true
    entryDate?: true
    quantity?: true
    capitalDeployed?: true
    exitPrice?: true
    exitDate?: true
    status?: true
    realizedPnl?: true
    realizedPnlPct?: true
    sl?: true
    t1?: true
    t2?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TradeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Trade to aggregate.
     */
    where?: TradeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trades to fetch.
     */
    orderBy?: TradeOrderByWithRelationInput | TradeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TradeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Trades
    **/
    _count?: true | TradeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TradeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TradeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TradeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TradeMaxAggregateInputType
  }

  export type GetTradeAggregateType<T extends TradeAggregateArgs> = {
        [P in keyof T & keyof AggregateTrade]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrade[P]>
      : GetScalarType<T[P], AggregateTrade[P]>
  }




  export type TradeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TradeWhereInput
    orderBy?: TradeOrderByWithAggregationInput | TradeOrderByWithAggregationInput[]
    by: TradeScalarFieldEnum[] | TradeScalarFieldEnum
    having?: TradeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TradeCountAggregateInputType | true
    _avg?: TradeAvgAggregateInputType
    _sum?: TradeSumAggregateInputType
    _min?: TradeMinAggregateInputType
    _max?: TradeMaxAggregateInputType
  }

  export type TradeGroupByOutputType = {
    id: string
    suggestionId: string | null
    ticker: string
    tickerNs: string
    name: string
    sector: string | null
    entryPrice: number
    entryDate: Date
    quantity: number
    capitalDeployed: number
    exitPrice: number | null
    exitDate: Date | null
    status: $Enums.TradeStatus
    realizedPnl: number | null
    realizedPnlPct: number | null
    sl: number | null
    t1: number | null
    t2: number | null
    notes: string | null
    createdAt: Date
    updatedAt: Date
    _count: TradeCountAggregateOutputType | null
    _avg: TradeAvgAggregateOutputType | null
    _sum: TradeSumAggregateOutputType | null
    _min: TradeMinAggregateOutputType | null
    _max: TradeMaxAggregateOutputType | null
  }

  type GetTradeGroupByPayload<T extends TradeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TradeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TradeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TradeGroupByOutputType[P]>
            : GetScalarType<T[P], TradeGroupByOutputType[P]>
        }
      >
    >


  export type TradeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    suggestionId?: boolean
    ticker?: boolean
    tickerNs?: boolean
    name?: boolean
    sector?: boolean
    entryPrice?: boolean
    entryDate?: boolean
    quantity?: boolean
    capitalDeployed?: boolean
    exitPrice?: boolean
    exitDate?: boolean
    status?: boolean
    realizedPnl?: boolean
    realizedPnlPct?: boolean
    sl?: boolean
    t1?: boolean
    t2?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    suggestion?: boolean | Trade$suggestionArgs<ExtArgs>
    snapshots?: boolean | Trade$snapshotsArgs<ExtArgs>
    _count?: boolean | TradeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trade"]>

  export type TradeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    suggestionId?: boolean
    ticker?: boolean
    tickerNs?: boolean
    name?: boolean
    sector?: boolean
    entryPrice?: boolean
    entryDate?: boolean
    quantity?: boolean
    capitalDeployed?: boolean
    exitPrice?: boolean
    exitDate?: boolean
    status?: boolean
    realizedPnl?: boolean
    realizedPnlPct?: boolean
    sl?: boolean
    t1?: boolean
    t2?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    suggestion?: boolean | Trade$suggestionArgs<ExtArgs>
  }, ExtArgs["result"]["trade"]>

  export type TradeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    suggestionId?: boolean
    ticker?: boolean
    tickerNs?: boolean
    name?: boolean
    sector?: boolean
    entryPrice?: boolean
    entryDate?: boolean
    quantity?: boolean
    capitalDeployed?: boolean
    exitPrice?: boolean
    exitDate?: boolean
    status?: boolean
    realizedPnl?: boolean
    realizedPnlPct?: boolean
    sl?: boolean
    t1?: boolean
    t2?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    suggestion?: boolean | Trade$suggestionArgs<ExtArgs>
  }, ExtArgs["result"]["trade"]>

  export type TradeSelectScalar = {
    id?: boolean
    suggestionId?: boolean
    ticker?: boolean
    tickerNs?: boolean
    name?: boolean
    sector?: boolean
    entryPrice?: boolean
    entryDate?: boolean
    quantity?: boolean
    capitalDeployed?: boolean
    exitPrice?: boolean
    exitDate?: boolean
    status?: boolean
    realizedPnl?: boolean
    realizedPnlPct?: boolean
    sl?: boolean
    t1?: boolean
    t2?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TradeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "suggestionId" | "ticker" | "tickerNs" | "name" | "sector" | "entryPrice" | "entryDate" | "quantity" | "capitalDeployed" | "exitPrice" | "exitDate" | "status" | "realizedPnl" | "realizedPnlPct" | "sl" | "t1" | "t2" | "notes" | "createdAt" | "updatedAt", ExtArgs["result"]["trade"]>
  export type TradeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    suggestion?: boolean | Trade$suggestionArgs<ExtArgs>
    snapshots?: boolean | Trade$snapshotsArgs<ExtArgs>
    _count?: boolean | TradeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TradeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    suggestion?: boolean | Trade$suggestionArgs<ExtArgs>
  }
  export type TradeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    suggestion?: boolean | Trade$suggestionArgs<ExtArgs>
  }

  export type $TradePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Trade"
    objects: {
      suggestion: Prisma.$ScreenerSuggestionPayload<ExtArgs> | null
      snapshots: Prisma.$TradeSnapshotPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      suggestionId: string | null
      ticker: string
      tickerNs: string
      name: string
      sector: string | null
      entryPrice: number
      entryDate: Date
      quantity: number
      capitalDeployed: number
      exitPrice: number | null
      exitDate: Date | null
      status: $Enums.TradeStatus
      realizedPnl: number | null
      realizedPnlPct: number | null
      sl: number | null
      t1: number | null
      t2: number | null
      notes: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["trade"]>
    composites: {}
  }

  type TradeGetPayload<S extends boolean | null | undefined | TradeDefaultArgs> = $Result.GetResult<Prisma.$TradePayload, S>

  type TradeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TradeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TradeCountAggregateInputType | true
    }

  export interface TradeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Trade'], meta: { name: 'Trade' } }
    /**
     * Find zero or one Trade that matches the filter.
     * @param {TradeFindUniqueArgs} args - Arguments to find a Trade
     * @example
     * // Get one Trade
     * const trade = await prisma.trade.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TradeFindUniqueArgs>(args: SelectSubset<T, TradeFindUniqueArgs<ExtArgs>>): Prisma__TradeClient<$Result.GetResult<Prisma.$TradePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Trade that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TradeFindUniqueOrThrowArgs} args - Arguments to find a Trade
     * @example
     * // Get one Trade
     * const trade = await prisma.trade.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TradeFindUniqueOrThrowArgs>(args: SelectSubset<T, TradeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TradeClient<$Result.GetResult<Prisma.$TradePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Trade that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradeFindFirstArgs} args - Arguments to find a Trade
     * @example
     * // Get one Trade
     * const trade = await prisma.trade.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TradeFindFirstArgs>(args?: SelectSubset<T, TradeFindFirstArgs<ExtArgs>>): Prisma__TradeClient<$Result.GetResult<Prisma.$TradePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Trade that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradeFindFirstOrThrowArgs} args - Arguments to find a Trade
     * @example
     * // Get one Trade
     * const trade = await prisma.trade.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TradeFindFirstOrThrowArgs>(args?: SelectSubset<T, TradeFindFirstOrThrowArgs<ExtArgs>>): Prisma__TradeClient<$Result.GetResult<Prisma.$TradePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Trades that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Trades
     * const trades = await prisma.trade.findMany()
     * 
     * // Get first 10 Trades
     * const trades = await prisma.trade.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tradeWithIdOnly = await prisma.trade.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TradeFindManyArgs>(args?: SelectSubset<T, TradeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TradePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Trade.
     * @param {TradeCreateArgs} args - Arguments to create a Trade.
     * @example
     * // Create one Trade
     * const Trade = await prisma.trade.create({
     *   data: {
     *     // ... data to create a Trade
     *   }
     * })
     * 
     */
    create<T extends TradeCreateArgs>(args: SelectSubset<T, TradeCreateArgs<ExtArgs>>): Prisma__TradeClient<$Result.GetResult<Prisma.$TradePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Trades.
     * @param {TradeCreateManyArgs} args - Arguments to create many Trades.
     * @example
     * // Create many Trades
     * const trade = await prisma.trade.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TradeCreateManyArgs>(args?: SelectSubset<T, TradeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Trades and returns the data saved in the database.
     * @param {TradeCreateManyAndReturnArgs} args - Arguments to create many Trades.
     * @example
     * // Create many Trades
     * const trade = await prisma.trade.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Trades and only return the `id`
     * const tradeWithIdOnly = await prisma.trade.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TradeCreateManyAndReturnArgs>(args?: SelectSubset<T, TradeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TradePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Trade.
     * @param {TradeDeleteArgs} args - Arguments to delete one Trade.
     * @example
     * // Delete one Trade
     * const Trade = await prisma.trade.delete({
     *   where: {
     *     // ... filter to delete one Trade
     *   }
     * })
     * 
     */
    delete<T extends TradeDeleteArgs>(args: SelectSubset<T, TradeDeleteArgs<ExtArgs>>): Prisma__TradeClient<$Result.GetResult<Prisma.$TradePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Trade.
     * @param {TradeUpdateArgs} args - Arguments to update one Trade.
     * @example
     * // Update one Trade
     * const trade = await prisma.trade.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TradeUpdateArgs>(args: SelectSubset<T, TradeUpdateArgs<ExtArgs>>): Prisma__TradeClient<$Result.GetResult<Prisma.$TradePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Trades.
     * @param {TradeDeleteManyArgs} args - Arguments to filter Trades to delete.
     * @example
     * // Delete a few Trades
     * const { count } = await prisma.trade.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TradeDeleteManyArgs>(args?: SelectSubset<T, TradeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Trades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Trades
     * const trade = await prisma.trade.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TradeUpdateManyArgs>(args: SelectSubset<T, TradeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Trades and returns the data updated in the database.
     * @param {TradeUpdateManyAndReturnArgs} args - Arguments to update many Trades.
     * @example
     * // Update many Trades
     * const trade = await prisma.trade.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Trades and only return the `id`
     * const tradeWithIdOnly = await prisma.trade.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends TradeUpdateManyAndReturnArgs>(args: SelectSubset<T, TradeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TradePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Trade.
     * @param {TradeUpsertArgs} args - Arguments to update or create a Trade.
     * @example
     * // Update or create a Trade
     * const trade = await prisma.trade.upsert({
     *   create: {
     *     // ... data to create a Trade
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Trade we want to update
     *   }
     * })
     */
    upsert<T extends TradeUpsertArgs>(args: SelectSubset<T, TradeUpsertArgs<ExtArgs>>): Prisma__TradeClient<$Result.GetResult<Prisma.$TradePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Trades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradeCountArgs} args - Arguments to filter Trades to count.
     * @example
     * // Count the number of Trades
     * const count = await prisma.trade.count({
     *   where: {
     *     // ... the filter for the Trades we want to count
     *   }
     * })
    **/
    count<T extends TradeCountArgs>(
      args?: Subset<T, TradeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TradeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Trade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TradeAggregateArgs>(args: Subset<T, TradeAggregateArgs>): Prisma.PrismaPromise<GetTradeAggregateType<T>>

    /**
     * Group by Trade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradeGroupByArgs} args - Group by arguments.
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
      T extends TradeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TradeGroupByArgs['orderBy'] }
        : { orderBy?: TradeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TradeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTradeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Trade model
   */
  readonly fields: TradeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Trade.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TradeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    suggestion<T extends Trade$suggestionArgs<ExtArgs> = {}>(args?: Subset<T, Trade$suggestionArgs<ExtArgs>>): Prisma__ScreenerSuggestionClient<$Result.GetResult<Prisma.$ScreenerSuggestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    snapshots<T extends Trade$snapshotsArgs<ExtArgs> = {}>(args?: Subset<T, Trade$snapshotsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TradeSnapshotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Trade model
   */
  interface TradeFieldRefs {
    readonly id: FieldRef<"Trade", 'String'>
    readonly suggestionId: FieldRef<"Trade", 'String'>
    readonly ticker: FieldRef<"Trade", 'String'>
    readonly tickerNs: FieldRef<"Trade", 'String'>
    readonly name: FieldRef<"Trade", 'String'>
    readonly sector: FieldRef<"Trade", 'String'>
    readonly entryPrice: FieldRef<"Trade", 'Float'>
    readonly entryDate: FieldRef<"Trade", 'DateTime'>
    readonly quantity: FieldRef<"Trade", 'Int'>
    readonly capitalDeployed: FieldRef<"Trade", 'Float'>
    readonly exitPrice: FieldRef<"Trade", 'Float'>
    readonly exitDate: FieldRef<"Trade", 'DateTime'>
    readonly status: FieldRef<"Trade", 'TradeStatus'>
    readonly realizedPnl: FieldRef<"Trade", 'Float'>
    readonly realizedPnlPct: FieldRef<"Trade", 'Float'>
    readonly sl: FieldRef<"Trade", 'Float'>
    readonly t1: FieldRef<"Trade", 'Float'>
    readonly t2: FieldRef<"Trade", 'Float'>
    readonly notes: FieldRef<"Trade", 'String'>
    readonly createdAt: FieldRef<"Trade", 'DateTime'>
    readonly updatedAt: FieldRef<"Trade", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Trade findUnique
   */
  export type TradeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trade
     */
    omit?: TradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeInclude<ExtArgs> | null
    /**
     * Filter, which Trade to fetch.
     */
    where: TradeWhereUniqueInput
  }

  /**
   * Trade findUniqueOrThrow
   */
  export type TradeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trade
     */
    omit?: TradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeInclude<ExtArgs> | null
    /**
     * Filter, which Trade to fetch.
     */
    where: TradeWhereUniqueInput
  }

  /**
   * Trade findFirst
   */
  export type TradeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trade
     */
    omit?: TradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeInclude<ExtArgs> | null
    /**
     * Filter, which Trade to fetch.
     */
    where?: TradeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trades to fetch.
     */
    orderBy?: TradeOrderByWithRelationInput | TradeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Trades.
     */
    cursor?: TradeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Trades.
     */
    distinct?: TradeScalarFieldEnum | TradeScalarFieldEnum[]
  }

  /**
   * Trade findFirstOrThrow
   */
  export type TradeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trade
     */
    omit?: TradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeInclude<ExtArgs> | null
    /**
     * Filter, which Trade to fetch.
     */
    where?: TradeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trades to fetch.
     */
    orderBy?: TradeOrderByWithRelationInput | TradeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Trades.
     */
    cursor?: TradeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Trades.
     */
    distinct?: TradeScalarFieldEnum | TradeScalarFieldEnum[]
  }

  /**
   * Trade findMany
   */
  export type TradeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trade
     */
    omit?: TradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeInclude<ExtArgs> | null
    /**
     * Filter, which Trades to fetch.
     */
    where?: TradeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trades to fetch.
     */
    orderBy?: TradeOrderByWithRelationInput | TradeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Trades.
     */
    cursor?: TradeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Trades.
     */
    distinct?: TradeScalarFieldEnum | TradeScalarFieldEnum[]
  }

  /**
   * Trade create
   */
  export type TradeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trade
     */
    omit?: TradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeInclude<ExtArgs> | null
    /**
     * The data needed to create a Trade.
     */
    data: XOR<TradeCreateInput, TradeUncheckedCreateInput>
  }

  /**
   * Trade createMany
   */
  export type TradeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Trades.
     */
    data: TradeCreateManyInput | TradeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Trade createManyAndReturn
   */
  export type TradeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Trade
     */
    omit?: TradeOmit<ExtArgs> | null
    /**
     * The data used to create many Trades.
     */
    data: TradeCreateManyInput | TradeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Trade update
   */
  export type TradeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trade
     */
    omit?: TradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeInclude<ExtArgs> | null
    /**
     * The data needed to update a Trade.
     */
    data: XOR<TradeUpdateInput, TradeUncheckedUpdateInput>
    /**
     * Choose, which Trade to update.
     */
    where: TradeWhereUniqueInput
  }

  /**
   * Trade updateMany
   */
  export type TradeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Trades.
     */
    data: XOR<TradeUpdateManyMutationInput, TradeUncheckedUpdateManyInput>
    /**
     * Filter which Trades to update
     */
    where?: TradeWhereInput
    /**
     * Limit how many Trades to update.
     */
    limit?: number
  }

  /**
   * Trade updateManyAndReturn
   */
  export type TradeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Trade
     */
    omit?: TradeOmit<ExtArgs> | null
    /**
     * The data used to update Trades.
     */
    data: XOR<TradeUpdateManyMutationInput, TradeUncheckedUpdateManyInput>
    /**
     * Filter which Trades to update
     */
    where?: TradeWhereInput
    /**
     * Limit how many Trades to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Trade upsert
   */
  export type TradeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trade
     */
    omit?: TradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeInclude<ExtArgs> | null
    /**
     * The filter to search for the Trade to update in case it exists.
     */
    where: TradeWhereUniqueInput
    /**
     * In case the Trade found by the `where` argument doesn't exist, create a new Trade with this data.
     */
    create: XOR<TradeCreateInput, TradeUncheckedCreateInput>
    /**
     * In case the Trade was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TradeUpdateInput, TradeUncheckedUpdateInput>
  }

  /**
   * Trade delete
   */
  export type TradeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trade
     */
    omit?: TradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeInclude<ExtArgs> | null
    /**
     * Filter which Trade to delete.
     */
    where: TradeWhereUniqueInput
  }

  /**
   * Trade deleteMany
   */
  export type TradeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Trades to delete
     */
    where?: TradeWhereInput
    /**
     * Limit how many Trades to delete.
     */
    limit?: number
  }

  /**
   * Trade.suggestion
   */
  export type Trade$suggestionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScreenerSuggestion
     */
    select?: ScreenerSuggestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScreenerSuggestion
     */
    omit?: ScreenerSuggestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScreenerSuggestionInclude<ExtArgs> | null
    where?: ScreenerSuggestionWhereInput
  }

  /**
   * Trade.snapshots
   */
  export type Trade$snapshotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TradeSnapshot
     */
    select?: TradeSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TradeSnapshot
     */
    omit?: TradeSnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeSnapshotInclude<ExtArgs> | null
    where?: TradeSnapshotWhereInput
    orderBy?: TradeSnapshotOrderByWithRelationInput | TradeSnapshotOrderByWithRelationInput[]
    cursor?: TradeSnapshotWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TradeSnapshotScalarFieldEnum | TradeSnapshotScalarFieldEnum[]
  }

  /**
   * Trade without action
   */
  export type TradeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trade
     */
    omit?: TradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeInclude<ExtArgs> | null
  }


  /**
   * Model TradeSnapshot
   */

  export type AggregateTradeSnapshot = {
    _count: TradeSnapshotCountAggregateOutputType | null
    _avg: TradeSnapshotAvgAggregateOutputType | null
    _sum: TradeSnapshotSumAggregateOutputType | null
    _min: TradeSnapshotMinAggregateOutputType | null
    _max: TradeSnapshotMaxAggregateOutputType | null
  }

  export type TradeSnapshotAvgAggregateOutputType = {
    closePrice: number | null
    unrealizedPnl: number | null
    unrealizedPnlPct: number | null
  }

  export type TradeSnapshotSumAggregateOutputType = {
    closePrice: number | null
    unrealizedPnl: number | null
    unrealizedPnlPct: number | null
  }

  export type TradeSnapshotMinAggregateOutputType = {
    id: string | null
    tradeId: string | null
    date: Date | null
    closePrice: number | null
    unrealizedPnl: number | null
    unrealizedPnlPct: number | null
  }

  export type TradeSnapshotMaxAggregateOutputType = {
    id: string | null
    tradeId: string | null
    date: Date | null
    closePrice: number | null
    unrealizedPnl: number | null
    unrealizedPnlPct: number | null
  }

  export type TradeSnapshotCountAggregateOutputType = {
    id: number
    tradeId: number
    date: number
    closePrice: number
    unrealizedPnl: number
    unrealizedPnlPct: number
    _all: number
  }


  export type TradeSnapshotAvgAggregateInputType = {
    closePrice?: true
    unrealizedPnl?: true
    unrealizedPnlPct?: true
  }

  export type TradeSnapshotSumAggregateInputType = {
    closePrice?: true
    unrealizedPnl?: true
    unrealizedPnlPct?: true
  }

  export type TradeSnapshotMinAggregateInputType = {
    id?: true
    tradeId?: true
    date?: true
    closePrice?: true
    unrealizedPnl?: true
    unrealizedPnlPct?: true
  }

  export type TradeSnapshotMaxAggregateInputType = {
    id?: true
    tradeId?: true
    date?: true
    closePrice?: true
    unrealizedPnl?: true
    unrealizedPnlPct?: true
  }

  export type TradeSnapshotCountAggregateInputType = {
    id?: true
    tradeId?: true
    date?: true
    closePrice?: true
    unrealizedPnl?: true
    unrealizedPnlPct?: true
    _all?: true
  }

  export type TradeSnapshotAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TradeSnapshot to aggregate.
     */
    where?: TradeSnapshotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TradeSnapshots to fetch.
     */
    orderBy?: TradeSnapshotOrderByWithRelationInput | TradeSnapshotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TradeSnapshotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TradeSnapshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TradeSnapshots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TradeSnapshots
    **/
    _count?: true | TradeSnapshotCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TradeSnapshotAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TradeSnapshotSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TradeSnapshotMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TradeSnapshotMaxAggregateInputType
  }

  export type GetTradeSnapshotAggregateType<T extends TradeSnapshotAggregateArgs> = {
        [P in keyof T & keyof AggregateTradeSnapshot]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTradeSnapshot[P]>
      : GetScalarType<T[P], AggregateTradeSnapshot[P]>
  }




  export type TradeSnapshotGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TradeSnapshotWhereInput
    orderBy?: TradeSnapshotOrderByWithAggregationInput | TradeSnapshotOrderByWithAggregationInput[]
    by: TradeSnapshotScalarFieldEnum[] | TradeSnapshotScalarFieldEnum
    having?: TradeSnapshotScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TradeSnapshotCountAggregateInputType | true
    _avg?: TradeSnapshotAvgAggregateInputType
    _sum?: TradeSnapshotSumAggregateInputType
    _min?: TradeSnapshotMinAggregateInputType
    _max?: TradeSnapshotMaxAggregateInputType
  }

  export type TradeSnapshotGroupByOutputType = {
    id: string
    tradeId: string
    date: Date
    closePrice: number
    unrealizedPnl: number
    unrealizedPnlPct: number
    _count: TradeSnapshotCountAggregateOutputType | null
    _avg: TradeSnapshotAvgAggregateOutputType | null
    _sum: TradeSnapshotSumAggregateOutputType | null
    _min: TradeSnapshotMinAggregateOutputType | null
    _max: TradeSnapshotMaxAggregateOutputType | null
  }

  type GetTradeSnapshotGroupByPayload<T extends TradeSnapshotGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TradeSnapshotGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TradeSnapshotGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TradeSnapshotGroupByOutputType[P]>
            : GetScalarType<T[P], TradeSnapshotGroupByOutputType[P]>
        }
      >
    >


  export type TradeSnapshotSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tradeId?: boolean
    date?: boolean
    closePrice?: boolean
    unrealizedPnl?: boolean
    unrealizedPnlPct?: boolean
    trade?: boolean | TradeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tradeSnapshot"]>

  export type TradeSnapshotSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tradeId?: boolean
    date?: boolean
    closePrice?: boolean
    unrealizedPnl?: boolean
    unrealizedPnlPct?: boolean
    trade?: boolean | TradeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tradeSnapshot"]>

  export type TradeSnapshotSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tradeId?: boolean
    date?: boolean
    closePrice?: boolean
    unrealizedPnl?: boolean
    unrealizedPnlPct?: boolean
    trade?: boolean | TradeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tradeSnapshot"]>

  export type TradeSnapshotSelectScalar = {
    id?: boolean
    tradeId?: boolean
    date?: boolean
    closePrice?: boolean
    unrealizedPnl?: boolean
    unrealizedPnlPct?: boolean
  }

  export type TradeSnapshotOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tradeId" | "date" | "closePrice" | "unrealizedPnl" | "unrealizedPnlPct", ExtArgs["result"]["tradeSnapshot"]>
  export type TradeSnapshotInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trade?: boolean | TradeDefaultArgs<ExtArgs>
  }
  export type TradeSnapshotIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trade?: boolean | TradeDefaultArgs<ExtArgs>
  }
  export type TradeSnapshotIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trade?: boolean | TradeDefaultArgs<ExtArgs>
  }

  export type $TradeSnapshotPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TradeSnapshot"
    objects: {
      trade: Prisma.$TradePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tradeId: string
      date: Date
      closePrice: number
      unrealizedPnl: number
      unrealizedPnlPct: number
    }, ExtArgs["result"]["tradeSnapshot"]>
    composites: {}
  }

  type TradeSnapshotGetPayload<S extends boolean | null | undefined | TradeSnapshotDefaultArgs> = $Result.GetResult<Prisma.$TradeSnapshotPayload, S>

  type TradeSnapshotCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TradeSnapshotFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TradeSnapshotCountAggregateInputType | true
    }

  export interface TradeSnapshotDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TradeSnapshot'], meta: { name: 'TradeSnapshot' } }
    /**
     * Find zero or one TradeSnapshot that matches the filter.
     * @param {TradeSnapshotFindUniqueArgs} args - Arguments to find a TradeSnapshot
     * @example
     * // Get one TradeSnapshot
     * const tradeSnapshot = await prisma.tradeSnapshot.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TradeSnapshotFindUniqueArgs>(args: SelectSubset<T, TradeSnapshotFindUniqueArgs<ExtArgs>>): Prisma__TradeSnapshotClient<$Result.GetResult<Prisma.$TradeSnapshotPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TradeSnapshot that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TradeSnapshotFindUniqueOrThrowArgs} args - Arguments to find a TradeSnapshot
     * @example
     * // Get one TradeSnapshot
     * const tradeSnapshot = await prisma.tradeSnapshot.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TradeSnapshotFindUniqueOrThrowArgs>(args: SelectSubset<T, TradeSnapshotFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TradeSnapshotClient<$Result.GetResult<Prisma.$TradeSnapshotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TradeSnapshot that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradeSnapshotFindFirstArgs} args - Arguments to find a TradeSnapshot
     * @example
     * // Get one TradeSnapshot
     * const tradeSnapshot = await prisma.tradeSnapshot.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TradeSnapshotFindFirstArgs>(args?: SelectSubset<T, TradeSnapshotFindFirstArgs<ExtArgs>>): Prisma__TradeSnapshotClient<$Result.GetResult<Prisma.$TradeSnapshotPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TradeSnapshot that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradeSnapshotFindFirstOrThrowArgs} args - Arguments to find a TradeSnapshot
     * @example
     * // Get one TradeSnapshot
     * const tradeSnapshot = await prisma.tradeSnapshot.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TradeSnapshotFindFirstOrThrowArgs>(args?: SelectSubset<T, TradeSnapshotFindFirstOrThrowArgs<ExtArgs>>): Prisma__TradeSnapshotClient<$Result.GetResult<Prisma.$TradeSnapshotPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TradeSnapshots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradeSnapshotFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TradeSnapshots
     * const tradeSnapshots = await prisma.tradeSnapshot.findMany()
     * 
     * // Get first 10 TradeSnapshots
     * const tradeSnapshots = await prisma.tradeSnapshot.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tradeSnapshotWithIdOnly = await prisma.tradeSnapshot.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TradeSnapshotFindManyArgs>(args?: SelectSubset<T, TradeSnapshotFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TradeSnapshotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TradeSnapshot.
     * @param {TradeSnapshotCreateArgs} args - Arguments to create a TradeSnapshot.
     * @example
     * // Create one TradeSnapshot
     * const TradeSnapshot = await prisma.tradeSnapshot.create({
     *   data: {
     *     // ... data to create a TradeSnapshot
     *   }
     * })
     * 
     */
    create<T extends TradeSnapshotCreateArgs>(args: SelectSubset<T, TradeSnapshotCreateArgs<ExtArgs>>): Prisma__TradeSnapshotClient<$Result.GetResult<Prisma.$TradeSnapshotPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TradeSnapshots.
     * @param {TradeSnapshotCreateManyArgs} args - Arguments to create many TradeSnapshots.
     * @example
     * // Create many TradeSnapshots
     * const tradeSnapshot = await prisma.tradeSnapshot.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TradeSnapshotCreateManyArgs>(args?: SelectSubset<T, TradeSnapshotCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TradeSnapshots and returns the data saved in the database.
     * @param {TradeSnapshotCreateManyAndReturnArgs} args - Arguments to create many TradeSnapshots.
     * @example
     * // Create many TradeSnapshots
     * const tradeSnapshot = await prisma.tradeSnapshot.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TradeSnapshots and only return the `id`
     * const tradeSnapshotWithIdOnly = await prisma.tradeSnapshot.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TradeSnapshotCreateManyAndReturnArgs>(args?: SelectSubset<T, TradeSnapshotCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TradeSnapshotPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TradeSnapshot.
     * @param {TradeSnapshotDeleteArgs} args - Arguments to delete one TradeSnapshot.
     * @example
     * // Delete one TradeSnapshot
     * const TradeSnapshot = await prisma.tradeSnapshot.delete({
     *   where: {
     *     // ... filter to delete one TradeSnapshot
     *   }
     * })
     * 
     */
    delete<T extends TradeSnapshotDeleteArgs>(args: SelectSubset<T, TradeSnapshotDeleteArgs<ExtArgs>>): Prisma__TradeSnapshotClient<$Result.GetResult<Prisma.$TradeSnapshotPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TradeSnapshot.
     * @param {TradeSnapshotUpdateArgs} args - Arguments to update one TradeSnapshot.
     * @example
     * // Update one TradeSnapshot
     * const tradeSnapshot = await prisma.tradeSnapshot.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TradeSnapshotUpdateArgs>(args: SelectSubset<T, TradeSnapshotUpdateArgs<ExtArgs>>): Prisma__TradeSnapshotClient<$Result.GetResult<Prisma.$TradeSnapshotPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TradeSnapshots.
     * @param {TradeSnapshotDeleteManyArgs} args - Arguments to filter TradeSnapshots to delete.
     * @example
     * // Delete a few TradeSnapshots
     * const { count } = await prisma.tradeSnapshot.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TradeSnapshotDeleteManyArgs>(args?: SelectSubset<T, TradeSnapshotDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TradeSnapshots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradeSnapshotUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TradeSnapshots
     * const tradeSnapshot = await prisma.tradeSnapshot.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TradeSnapshotUpdateManyArgs>(args: SelectSubset<T, TradeSnapshotUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TradeSnapshots and returns the data updated in the database.
     * @param {TradeSnapshotUpdateManyAndReturnArgs} args - Arguments to update many TradeSnapshots.
     * @example
     * // Update many TradeSnapshots
     * const tradeSnapshot = await prisma.tradeSnapshot.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TradeSnapshots and only return the `id`
     * const tradeSnapshotWithIdOnly = await prisma.tradeSnapshot.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends TradeSnapshotUpdateManyAndReturnArgs>(args: SelectSubset<T, TradeSnapshotUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TradeSnapshotPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TradeSnapshot.
     * @param {TradeSnapshotUpsertArgs} args - Arguments to update or create a TradeSnapshot.
     * @example
     * // Update or create a TradeSnapshot
     * const tradeSnapshot = await prisma.tradeSnapshot.upsert({
     *   create: {
     *     // ... data to create a TradeSnapshot
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TradeSnapshot we want to update
     *   }
     * })
     */
    upsert<T extends TradeSnapshotUpsertArgs>(args: SelectSubset<T, TradeSnapshotUpsertArgs<ExtArgs>>): Prisma__TradeSnapshotClient<$Result.GetResult<Prisma.$TradeSnapshotPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TradeSnapshots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradeSnapshotCountArgs} args - Arguments to filter TradeSnapshots to count.
     * @example
     * // Count the number of TradeSnapshots
     * const count = await prisma.tradeSnapshot.count({
     *   where: {
     *     // ... the filter for the TradeSnapshots we want to count
     *   }
     * })
    **/
    count<T extends TradeSnapshotCountArgs>(
      args?: Subset<T, TradeSnapshotCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TradeSnapshotCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TradeSnapshot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradeSnapshotAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TradeSnapshotAggregateArgs>(args: Subset<T, TradeSnapshotAggregateArgs>): Prisma.PrismaPromise<GetTradeSnapshotAggregateType<T>>

    /**
     * Group by TradeSnapshot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradeSnapshotGroupByArgs} args - Group by arguments.
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
      T extends TradeSnapshotGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TradeSnapshotGroupByArgs['orderBy'] }
        : { orderBy?: TradeSnapshotGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TradeSnapshotGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTradeSnapshotGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TradeSnapshot model
   */
  readonly fields: TradeSnapshotFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TradeSnapshot.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TradeSnapshotClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    trade<T extends TradeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TradeDefaultArgs<ExtArgs>>): Prisma__TradeClient<$Result.GetResult<Prisma.$TradePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TradeSnapshot model
   */
  interface TradeSnapshotFieldRefs {
    readonly id: FieldRef<"TradeSnapshot", 'String'>
    readonly tradeId: FieldRef<"TradeSnapshot", 'String'>
    readonly date: FieldRef<"TradeSnapshot", 'DateTime'>
    readonly closePrice: FieldRef<"TradeSnapshot", 'Float'>
    readonly unrealizedPnl: FieldRef<"TradeSnapshot", 'Float'>
    readonly unrealizedPnlPct: FieldRef<"TradeSnapshot", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * TradeSnapshot findUnique
   */
  export type TradeSnapshotFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TradeSnapshot
     */
    select?: TradeSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TradeSnapshot
     */
    omit?: TradeSnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeSnapshotInclude<ExtArgs> | null
    /**
     * Filter, which TradeSnapshot to fetch.
     */
    where: TradeSnapshotWhereUniqueInput
  }

  /**
   * TradeSnapshot findUniqueOrThrow
   */
  export type TradeSnapshotFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TradeSnapshot
     */
    select?: TradeSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TradeSnapshot
     */
    omit?: TradeSnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeSnapshotInclude<ExtArgs> | null
    /**
     * Filter, which TradeSnapshot to fetch.
     */
    where: TradeSnapshotWhereUniqueInput
  }

  /**
   * TradeSnapshot findFirst
   */
  export type TradeSnapshotFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TradeSnapshot
     */
    select?: TradeSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TradeSnapshot
     */
    omit?: TradeSnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeSnapshotInclude<ExtArgs> | null
    /**
     * Filter, which TradeSnapshot to fetch.
     */
    where?: TradeSnapshotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TradeSnapshots to fetch.
     */
    orderBy?: TradeSnapshotOrderByWithRelationInput | TradeSnapshotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TradeSnapshots.
     */
    cursor?: TradeSnapshotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TradeSnapshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TradeSnapshots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TradeSnapshots.
     */
    distinct?: TradeSnapshotScalarFieldEnum | TradeSnapshotScalarFieldEnum[]
  }

  /**
   * TradeSnapshot findFirstOrThrow
   */
  export type TradeSnapshotFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TradeSnapshot
     */
    select?: TradeSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TradeSnapshot
     */
    omit?: TradeSnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeSnapshotInclude<ExtArgs> | null
    /**
     * Filter, which TradeSnapshot to fetch.
     */
    where?: TradeSnapshotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TradeSnapshots to fetch.
     */
    orderBy?: TradeSnapshotOrderByWithRelationInput | TradeSnapshotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TradeSnapshots.
     */
    cursor?: TradeSnapshotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TradeSnapshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TradeSnapshots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TradeSnapshots.
     */
    distinct?: TradeSnapshotScalarFieldEnum | TradeSnapshotScalarFieldEnum[]
  }

  /**
   * TradeSnapshot findMany
   */
  export type TradeSnapshotFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TradeSnapshot
     */
    select?: TradeSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TradeSnapshot
     */
    omit?: TradeSnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeSnapshotInclude<ExtArgs> | null
    /**
     * Filter, which TradeSnapshots to fetch.
     */
    where?: TradeSnapshotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TradeSnapshots to fetch.
     */
    orderBy?: TradeSnapshotOrderByWithRelationInput | TradeSnapshotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TradeSnapshots.
     */
    cursor?: TradeSnapshotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TradeSnapshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TradeSnapshots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TradeSnapshots.
     */
    distinct?: TradeSnapshotScalarFieldEnum | TradeSnapshotScalarFieldEnum[]
  }

  /**
   * TradeSnapshot create
   */
  export type TradeSnapshotCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TradeSnapshot
     */
    select?: TradeSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TradeSnapshot
     */
    omit?: TradeSnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeSnapshotInclude<ExtArgs> | null
    /**
     * The data needed to create a TradeSnapshot.
     */
    data: XOR<TradeSnapshotCreateInput, TradeSnapshotUncheckedCreateInput>
  }

  /**
   * TradeSnapshot createMany
   */
  export type TradeSnapshotCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TradeSnapshots.
     */
    data: TradeSnapshotCreateManyInput | TradeSnapshotCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TradeSnapshot createManyAndReturn
   */
  export type TradeSnapshotCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TradeSnapshot
     */
    select?: TradeSnapshotSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TradeSnapshot
     */
    omit?: TradeSnapshotOmit<ExtArgs> | null
    /**
     * The data used to create many TradeSnapshots.
     */
    data: TradeSnapshotCreateManyInput | TradeSnapshotCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeSnapshotIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TradeSnapshot update
   */
  export type TradeSnapshotUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TradeSnapshot
     */
    select?: TradeSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TradeSnapshot
     */
    omit?: TradeSnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeSnapshotInclude<ExtArgs> | null
    /**
     * The data needed to update a TradeSnapshot.
     */
    data: XOR<TradeSnapshotUpdateInput, TradeSnapshotUncheckedUpdateInput>
    /**
     * Choose, which TradeSnapshot to update.
     */
    where: TradeSnapshotWhereUniqueInput
  }

  /**
   * TradeSnapshot updateMany
   */
  export type TradeSnapshotUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TradeSnapshots.
     */
    data: XOR<TradeSnapshotUpdateManyMutationInput, TradeSnapshotUncheckedUpdateManyInput>
    /**
     * Filter which TradeSnapshots to update
     */
    where?: TradeSnapshotWhereInput
    /**
     * Limit how many TradeSnapshots to update.
     */
    limit?: number
  }

  /**
   * TradeSnapshot updateManyAndReturn
   */
  export type TradeSnapshotUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TradeSnapshot
     */
    select?: TradeSnapshotSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TradeSnapshot
     */
    omit?: TradeSnapshotOmit<ExtArgs> | null
    /**
     * The data used to update TradeSnapshots.
     */
    data: XOR<TradeSnapshotUpdateManyMutationInput, TradeSnapshotUncheckedUpdateManyInput>
    /**
     * Filter which TradeSnapshots to update
     */
    where?: TradeSnapshotWhereInput
    /**
     * Limit how many TradeSnapshots to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeSnapshotIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TradeSnapshot upsert
   */
  export type TradeSnapshotUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TradeSnapshot
     */
    select?: TradeSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TradeSnapshot
     */
    omit?: TradeSnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeSnapshotInclude<ExtArgs> | null
    /**
     * The filter to search for the TradeSnapshot to update in case it exists.
     */
    where: TradeSnapshotWhereUniqueInput
    /**
     * In case the TradeSnapshot found by the `where` argument doesn't exist, create a new TradeSnapshot with this data.
     */
    create: XOR<TradeSnapshotCreateInput, TradeSnapshotUncheckedCreateInput>
    /**
     * In case the TradeSnapshot was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TradeSnapshotUpdateInput, TradeSnapshotUncheckedUpdateInput>
  }

  /**
   * TradeSnapshot delete
   */
  export type TradeSnapshotDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TradeSnapshot
     */
    select?: TradeSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TradeSnapshot
     */
    omit?: TradeSnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeSnapshotInclude<ExtArgs> | null
    /**
     * Filter which TradeSnapshot to delete.
     */
    where: TradeSnapshotWhereUniqueInput
  }

  /**
   * TradeSnapshot deleteMany
   */
  export type TradeSnapshotDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TradeSnapshots to delete
     */
    where?: TradeSnapshotWhereInput
    /**
     * Limit how many TradeSnapshots to delete.
     */
    limit?: number
  }

  /**
   * TradeSnapshot without action
   */
  export type TradeSnapshotDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TradeSnapshot
     */
    select?: TradeSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TradeSnapshot
     */
    omit?: TradeSnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeSnapshotInclude<ExtArgs> | null
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


  export const AccountScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    provider: 'provider',
    providerAccountId: 'providerAccountId',
    refresh_token: 'refresh_token',
    access_token: 'access_token',
    expires_at: 'expires_at',
    token_type: 'token_type',
    scope: 'scope',
    id_token: 'id_token',
    session_state: 'session_state'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    sessionToken: 'sessionToken',
    userId: 'userId',
    expires: 'expires'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    emailVerified: 'emailVerified',
    image: 'image'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const VerificationTokenScalarFieldEnum: {
    identifier: 'identifier',
    token: 'token',
    expires: 'expires'
  };

  export type VerificationTokenScalarFieldEnum = (typeof VerificationTokenScalarFieldEnum)[keyof typeof VerificationTokenScalarFieldEnum]


  export const FundAccountScalarFieldEnum: {
    id: 'id',
    totalCapital: 'totalCapital',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FundAccountScalarFieldEnum = (typeof FundAccountScalarFieldEnum)[keyof typeof FundAccountScalarFieldEnum]


  export const FundTransactionScalarFieldEnum: {
    id: 'id',
    accountId: 'accountId',
    type: 'type',
    amount: 'amount',
    date: 'date',
    notes: 'notes'
  };

  export type FundTransactionScalarFieldEnum = (typeof FundTransactionScalarFieldEnum)[keyof typeof FundTransactionScalarFieldEnum]


  export const ScreenerSuggestionScalarFieldEnum: {
    id: 'id',
    scanDate: 'scanDate',
    ticker: 'ticker',
    tickerNs: 'tickerNs',
    name: 'name',
    sector: 'sector',
    setupType: 'setupType',
    score: 'score',
    entryLow: 'entryLow',
    entryHigh: 'entryHigh',
    sl: 'sl',
    t1: 't1',
    t2: 't2',
    notes: 'notes',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type ScreenerSuggestionScalarFieldEnum = (typeof ScreenerSuggestionScalarFieldEnum)[keyof typeof ScreenerSuggestionScalarFieldEnum]


  export const SuggestionSnapshotScalarFieldEnum: {
    id: 'id',
    suggestionId: 'suggestionId',
    date: 'date',
    closePrice: 'closePrice',
    hypoEntryPrice: 'hypoEntryPrice',
    hypoPnlAbs: 'hypoPnlAbs',
    hypoPnlPct: 'hypoPnlPct'
  };

  export type SuggestionSnapshotScalarFieldEnum = (typeof SuggestionSnapshotScalarFieldEnum)[keyof typeof SuggestionSnapshotScalarFieldEnum]


  export const TradeScalarFieldEnum: {
    id: 'id',
    suggestionId: 'suggestionId',
    ticker: 'ticker',
    tickerNs: 'tickerNs',
    name: 'name',
    sector: 'sector',
    entryPrice: 'entryPrice',
    entryDate: 'entryDate',
    quantity: 'quantity',
    capitalDeployed: 'capitalDeployed',
    exitPrice: 'exitPrice',
    exitDate: 'exitDate',
    status: 'status',
    realizedPnl: 'realizedPnl',
    realizedPnlPct: 'realizedPnlPct',
    sl: 'sl',
    t1: 't1',
    t2: 't2',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TradeScalarFieldEnum = (typeof TradeScalarFieldEnum)[keyof typeof TradeScalarFieldEnum]


  export const TradeSnapshotScalarFieldEnum: {
    id: 'id',
    tradeId: 'tradeId',
    date: 'date',
    closePrice: 'closePrice',
    unrealizedPnl: 'unrealizedPnl',
    unrealizedPnlPct: 'unrealizedPnlPct'
  };

  export type TradeSnapshotScalarFieldEnum = (typeof TradeSnapshotScalarFieldEnum)[keyof typeof TradeSnapshotScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'FundTxType'
   */
  export type EnumFundTxTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FundTxType'>
    


  /**
   * Reference to a field of type 'FundTxType[]'
   */
  export type ListEnumFundTxTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FundTxType[]'>
    


  /**
   * Reference to a field of type 'SuggestionStatus'
   */
  export type EnumSuggestionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SuggestionStatus'>
    


  /**
   * Reference to a field of type 'SuggestionStatus[]'
   */
  export type ListEnumSuggestionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SuggestionStatus[]'>
    


  /**
   * Reference to a field of type 'TradeStatus'
   */
  export type EnumTradeStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TradeStatus'>
    


  /**
   * Reference to a field of type 'TradeStatus[]'
   */
  export type ListEnumTradeStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TradeStatus[]'>
    
  /**
   * Deep Input Types
   */


  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    provider_providerAccountId?: AccountProviderProviderAccountIdCompoundUniqueInput
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "provider_providerAccountId">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    userId?: StringWithAggregatesFilter<"Account"> | string
    type?: StringWithAggregatesFilter<"Account"> | string
    provider?: StringWithAggregatesFilter<"Account"> | string
    providerAccountId?: StringWithAggregatesFilter<"Account"> | string
    refresh_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    access_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    expires_at?: IntNullableWithAggregatesFilter<"Account"> | number | null
    token_type?: StringNullableWithAggregatesFilter<"Account"> | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    id_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    session_state?: StringNullableWithAggregatesFilter<"Account"> | string | null
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sessionToken?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "sessionToken">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    sessionToken?: StringWithAggregatesFilter<"Session"> | string
    userId?: StringWithAggregatesFilter<"Session"> | string
    expires?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    email?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    accounts?: AccountOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    emailVerified?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type VerificationTokenWhereInput = {
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    token?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }

  export type VerificationTokenOrderByWithRelationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenWhereUniqueInput = Prisma.AtLeast<{
    token?: string
    identifier_token?: VerificationTokenIdentifierTokenCompoundUniqueInput
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }, "token" | "identifier_token">

  export type VerificationTokenOrderByWithAggregationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    _count?: VerificationTokenCountOrderByAggregateInput
    _max?: VerificationTokenMaxOrderByAggregateInput
    _min?: VerificationTokenMinOrderByAggregateInput
  }

  export type VerificationTokenScalarWhereWithAggregatesInput = {
    AND?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    OR?: VerificationTokenScalarWhereWithAggregatesInput[]
    NOT?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    identifier?: StringWithAggregatesFilter<"VerificationToken"> | string
    token?: StringWithAggregatesFilter<"VerificationToken"> | string
    expires?: DateTimeWithAggregatesFilter<"VerificationToken"> | Date | string
  }

  export type FundAccountWhereInput = {
    AND?: FundAccountWhereInput | FundAccountWhereInput[]
    OR?: FundAccountWhereInput[]
    NOT?: FundAccountWhereInput | FundAccountWhereInput[]
    id?: StringFilter<"FundAccount"> | string
    totalCapital?: FloatFilter<"FundAccount"> | number
    createdAt?: DateTimeFilter<"FundAccount"> | Date | string
    updatedAt?: DateTimeFilter<"FundAccount"> | Date | string
    transactions?: FundTransactionListRelationFilter
  }

  export type FundAccountOrderByWithRelationInput = {
    id?: SortOrder
    totalCapital?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    transactions?: FundTransactionOrderByRelationAggregateInput
  }

  export type FundAccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FundAccountWhereInput | FundAccountWhereInput[]
    OR?: FundAccountWhereInput[]
    NOT?: FundAccountWhereInput | FundAccountWhereInput[]
    totalCapital?: FloatFilter<"FundAccount"> | number
    createdAt?: DateTimeFilter<"FundAccount"> | Date | string
    updatedAt?: DateTimeFilter<"FundAccount"> | Date | string
    transactions?: FundTransactionListRelationFilter
  }, "id">

  export type FundAccountOrderByWithAggregationInput = {
    id?: SortOrder
    totalCapital?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FundAccountCountOrderByAggregateInput
    _avg?: FundAccountAvgOrderByAggregateInput
    _max?: FundAccountMaxOrderByAggregateInput
    _min?: FundAccountMinOrderByAggregateInput
    _sum?: FundAccountSumOrderByAggregateInput
  }

  export type FundAccountScalarWhereWithAggregatesInput = {
    AND?: FundAccountScalarWhereWithAggregatesInput | FundAccountScalarWhereWithAggregatesInput[]
    OR?: FundAccountScalarWhereWithAggregatesInput[]
    NOT?: FundAccountScalarWhereWithAggregatesInput | FundAccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FundAccount"> | string
    totalCapital?: FloatWithAggregatesFilter<"FundAccount"> | number
    createdAt?: DateTimeWithAggregatesFilter<"FundAccount"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"FundAccount"> | Date | string
  }

  export type FundTransactionWhereInput = {
    AND?: FundTransactionWhereInput | FundTransactionWhereInput[]
    OR?: FundTransactionWhereInput[]
    NOT?: FundTransactionWhereInput | FundTransactionWhereInput[]
    id?: StringFilter<"FundTransaction"> | string
    accountId?: StringFilter<"FundTransaction"> | string
    type?: EnumFundTxTypeFilter<"FundTransaction"> | $Enums.FundTxType
    amount?: FloatFilter<"FundTransaction"> | number
    date?: DateTimeFilter<"FundTransaction"> | Date | string
    notes?: StringNullableFilter<"FundTransaction"> | string | null
    account?: XOR<FundAccountScalarRelationFilter, FundAccountWhereInput>
  }

  export type FundTransactionOrderByWithRelationInput = {
    id?: SortOrder
    accountId?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    notes?: SortOrderInput | SortOrder
    account?: FundAccountOrderByWithRelationInput
  }

  export type FundTransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FundTransactionWhereInput | FundTransactionWhereInput[]
    OR?: FundTransactionWhereInput[]
    NOT?: FundTransactionWhereInput | FundTransactionWhereInput[]
    accountId?: StringFilter<"FundTransaction"> | string
    type?: EnumFundTxTypeFilter<"FundTransaction"> | $Enums.FundTxType
    amount?: FloatFilter<"FundTransaction"> | number
    date?: DateTimeFilter<"FundTransaction"> | Date | string
    notes?: StringNullableFilter<"FundTransaction"> | string | null
    account?: XOR<FundAccountScalarRelationFilter, FundAccountWhereInput>
  }, "id">

  export type FundTransactionOrderByWithAggregationInput = {
    id?: SortOrder
    accountId?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    notes?: SortOrderInput | SortOrder
    _count?: FundTransactionCountOrderByAggregateInput
    _avg?: FundTransactionAvgOrderByAggregateInput
    _max?: FundTransactionMaxOrderByAggregateInput
    _min?: FundTransactionMinOrderByAggregateInput
    _sum?: FundTransactionSumOrderByAggregateInput
  }

  export type FundTransactionScalarWhereWithAggregatesInput = {
    AND?: FundTransactionScalarWhereWithAggregatesInput | FundTransactionScalarWhereWithAggregatesInput[]
    OR?: FundTransactionScalarWhereWithAggregatesInput[]
    NOT?: FundTransactionScalarWhereWithAggregatesInput | FundTransactionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FundTransaction"> | string
    accountId?: StringWithAggregatesFilter<"FundTransaction"> | string
    type?: EnumFundTxTypeWithAggregatesFilter<"FundTransaction"> | $Enums.FundTxType
    amount?: FloatWithAggregatesFilter<"FundTransaction"> | number
    date?: DateTimeWithAggregatesFilter<"FundTransaction"> | Date | string
    notes?: StringNullableWithAggregatesFilter<"FundTransaction"> | string | null
  }

  export type ScreenerSuggestionWhereInput = {
    AND?: ScreenerSuggestionWhereInput | ScreenerSuggestionWhereInput[]
    OR?: ScreenerSuggestionWhereInput[]
    NOT?: ScreenerSuggestionWhereInput | ScreenerSuggestionWhereInput[]
    id?: StringFilter<"ScreenerSuggestion"> | string
    scanDate?: DateTimeFilter<"ScreenerSuggestion"> | Date | string
    ticker?: StringFilter<"ScreenerSuggestion"> | string
    tickerNs?: StringFilter<"ScreenerSuggestion"> | string
    name?: StringFilter<"ScreenerSuggestion"> | string
    sector?: StringFilter<"ScreenerSuggestion"> | string
    setupType?: StringFilter<"ScreenerSuggestion"> | string
    score?: FloatFilter<"ScreenerSuggestion"> | number
    entryLow?: FloatFilter<"ScreenerSuggestion"> | number
    entryHigh?: FloatFilter<"ScreenerSuggestion"> | number
    sl?: FloatFilter<"ScreenerSuggestion"> | number
    t1?: FloatFilter<"ScreenerSuggestion"> | number
    t2?: FloatNullableFilter<"ScreenerSuggestion"> | number | null
    notes?: StringNullableFilter<"ScreenerSuggestion"> | string | null
    status?: EnumSuggestionStatusFilter<"ScreenerSuggestion"> | $Enums.SuggestionStatus
    createdAt?: DateTimeFilter<"ScreenerSuggestion"> | Date | string
    snapshots?: SuggestionSnapshotListRelationFilter
    trade?: XOR<TradeNullableScalarRelationFilter, TradeWhereInput> | null
  }

  export type ScreenerSuggestionOrderByWithRelationInput = {
    id?: SortOrder
    scanDate?: SortOrder
    ticker?: SortOrder
    tickerNs?: SortOrder
    name?: SortOrder
    sector?: SortOrder
    setupType?: SortOrder
    score?: SortOrder
    entryLow?: SortOrder
    entryHigh?: SortOrder
    sl?: SortOrder
    t1?: SortOrder
    t2?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    snapshots?: SuggestionSnapshotOrderByRelationAggregateInput
    trade?: TradeOrderByWithRelationInput
  }

  export type ScreenerSuggestionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ScreenerSuggestionWhereInput | ScreenerSuggestionWhereInput[]
    OR?: ScreenerSuggestionWhereInput[]
    NOT?: ScreenerSuggestionWhereInput | ScreenerSuggestionWhereInput[]
    scanDate?: DateTimeFilter<"ScreenerSuggestion"> | Date | string
    ticker?: StringFilter<"ScreenerSuggestion"> | string
    tickerNs?: StringFilter<"ScreenerSuggestion"> | string
    name?: StringFilter<"ScreenerSuggestion"> | string
    sector?: StringFilter<"ScreenerSuggestion"> | string
    setupType?: StringFilter<"ScreenerSuggestion"> | string
    score?: FloatFilter<"ScreenerSuggestion"> | number
    entryLow?: FloatFilter<"ScreenerSuggestion"> | number
    entryHigh?: FloatFilter<"ScreenerSuggestion"> | number
    sl?: FloatFilter<"ScreenerSuggestion"> | number
    t1?: FloatFilter<"ScreenerSuggestion"> | number
    t2?: FloatNullableFilter<"ScreenerSuggestion"> | number | null
    notes?: StringNullableFilter<"ScreenerSuggestion"> | string | null
    status?: EnumSuggestionStatusFilter<"ScreenerSuggestion"> | $Enums.SuggestionStatus
    createdAt?: DateTimeFilter<"ScreenerSuggestion"> | Date | string
    snapshots?: SuggestionSnapshotListRelationFilter
    trade?: XOR<TradeNullableScalarRelationFilter, TradeWhereInput> | null
  }, "id">

  export type ScreenerSuggestionOrderByWithAggregationInput = {
    id?: SortOrder
    scanDate?: SortOrder
    ticker?: SortOrder
    tickerNs?: SortOrder
    name?: SortOrder
    sector?: SortOrder
    setupType?: SortOrder
    score?: SortOrder
    entryLow?: SortOrder
    entryHigh?: SortOrder
    sl?: SortOrder
    t1?: SortOrder
    t2?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: ScreenerSuggestionCountOrderByAggregateInput
    _avg?: ScreenerSuggestionAvgOrderByAggregateInput
    _max?: ScreenerSuggestionMaxOrderByAggregateInput
    _min?: ScreenerSuggestionMinOrderByAggregateInput
    _sum?: ScreenerSuggestionSumOrderByAggregateInput
  }

  export type ScreenerSuggestionScalarWhereWithAggregatesInput = {
    AND?: ScreenerSuggestionScalarWhereWithAggregatesInput | ScreenerSuggestionScalarWhereWithAggregatesInput[]
    OR?: ScreenerSuggestionScalarWhereWithAggregatesInput[]
    NOT?: ScreenerSuggestionScalarWhereWithAggregatesInput | ScreenerSuggestionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ScreenerSuggestion"> | string
    scanDate?: DateTimeWithAggregatesFilter<"ScreenerSuggestion"> | Date | string
    ticker?: StringWithAggregatesFilter<"ScreenerSuggestion"> | string
    tickerNs?: StringWithAggregatesFilter<"ScreenerSuggestion"> | string
    name?: StringWithAggregatesFilter<"ScreenerSuggestion"> | string
    sector?: StringWithAggregatesFilter<"ScreenerSuggestion"> | string
    setupType?: StringWithAggregatesFilter<"ScreenerSuggestion"> | string
    score?: FloatWithAggregatesFilter<"ScreenerSuggestion"> | number
    entryLow?: FloatWithAggregatesFilter<"ScreenerSuggestion"> | number
    entryHigh?: FloatWithAggregatesFilter<"ScreenerSuggestion"> | number
    sl?: FloatWithAggregatesFilter<"ScreenerSuggestion"> | number
    t1?: FloatWithAggregatesFilter<"ScreenerSuggestion"> | number
    t2?: FloatNullableWithAggregatesFilter<"ScreenerSuggestion"> | number | null
    notes?: StringNullableWithAggregatesFilter<"ScreenerSuggestion"> | string | null
    status?: EnumSuggestionStatusWithAggregatesFilter<"ScreenerSuggestion"> | $Enums.SuggestionStatus
    createdAt?: DateTimeWithAggregatesFilter<"ScreenerSuggestion"> | Date | string
  }

  export type SuggestionSnapshotWhereInput = {
    AND?: SuggestionSnapshotWhereInput | SuggestionSnapshotWhereInput[]
    OR?: SuggestionSnapshotWhereInput[]
    NOT?: SuggestionSnapshotWhereInput | SuggestionSnapshotWhereInput[]
    id?: StringFilter<"SuggestionSnapshot"> | string
    suggestionId?: StringFilter<"SuggestionSnapshot"> | string
    date?: DateTimeFilter<"SuggestionSnapshot"> | Date | string
    closePrice?: FloatFilter<"SuggestionSnapshot"> | number
    hypoEntryPrice?: FloatFilter<"SuggestionSnapshot"> | number
    hypoPnlAbs?: FloatFilter<"SuggestionSnapshot"> | number
    hypoPnlPct?: FloatFilter<"SuggestionSnapshot"> | number
    suggestion?: XOR<ScreenerSuggestionScalarRelationFilter, ScreenerSuggestionWhereInput>
  }

  export type SuggestionSnapshotOrderByWithRelationInput = {
    id?: SortOrder
    suggestionId?: SortOrder
    date?: SortOrder
    closePrice?: SortOrder
    hypoEntryPrice?: SortOrder
    hypoPnlAbs?: SortOrder
    hypoPnlPct?: SortOrder
    suggestion?: ScreenerSuggestionOrderByWithRelationInput
  }

  export type SuggestionSnapshotWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    suggestionId_date?: SuggestionSnapshotSuggestionIdDateCompoundUniqueInput
    AND?: SuggestionSnapshotWhereInput | SuggestionSnapshotWhereInput[]
    OR?: SuggestionSnapshotWhereInput[]
    NOT?: SuggestionSnapshotWhereInput | SuggestionSnapshotWhereInput[]
    suggestionId?: StringFilter<"SuggestionSnapshot"> | string
    date?: DateTimeFilter<"SuggestionSnapshot"> | Date | string
    closePrice?: FloatFilter<"SuggestionSnapshot"> | number
    hypoEntryPrice?: FloatFilter<"SuggestionSnapshot"> | number
    hypoPnlAbs?: FloatFilter<"SuggestionSnapshot"> | number
    hypoPnlPct?: FloatFilter<"SuggestionSnapshot"> | number
    suggestion?: XOR<ScreenerSuggestionScalarRelationFilter, ScreenerSuggestionWhereInput>
  }, "id" | "suggestionId_date">

  export type SuggestionSnapshotOrderByWithAggregationInput = {
    id?: SortOrder
    suggestionId?: SortOrder
    date?: SortOrder
    closePrice?: SortOrder
    hypoEntryPrice?: SortOrder
    hypoPnlAbs?: SortOrder
    hypoPnlPct?: SortOrder
    _count?: SuggestionSnapshotCountOrderByAggregateInput
    _avg?: SuggestionSnapshotAvgOrderByAggregateInput
    _max?: SuggestionSnapshotMaxOrderByAggregateInput
    _min?: SuggestionSnapshotMinOrderByAggregateInput
    _sum?: SuggestionSnapshotSumOrderByAggregateInput
  }

  export type SuggestionSnapshotScalarWhereWithAggregatesInput = {
    AND?: SuggestionSnapshotScalarWhereWithAggregatesInput | SuggestionSnapshotScalarWhereWithAggregatesInput[]
    OR?: SuggestionSnapshotScalarWhereWithAggregatesInput[]
    NOT?: SuggestionSnapshotScalarWhereWithAggregatesInput | SuggestionSnapshotScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SuggestionSnapshot"> | string
    suggestionId?: StringWithAggregatesFilter<"SuggestionSnapshot"> | string
    date?: DateTimeWithAggregatesFilter<"SuggestionSnapshot"> | Date | string
    closePrice?: FloatWithAggregatesFilter<"SuggestionSnapshot"> | number
    hypoEntryPrice?: FloatWithAggregatesFilter<"SuggestionSnapshot"> | number
    hypoPnlAbs?: FloatWithAggregatesFilter<"SuggestionSnapshot"> | number
    hypoPnlPct?: FloatWithAggregatesFilter<"SuggestionSnapshot"> | number
  }

  export type TradeWhereInput = {
    AND?: TradeWhereInput | TradeWhereInput[]
    OR?: TradeWhereInput[]
    NOT?: TradeWhereInput | TradeWhereInput[]
    id?: StringFilter<"Trade"> | string
    suggestionId?: StringNullableFilter<"Trade"> | string | null
    ticker?: StringFilter<"Trade"> | string
    tickerNs?: StringFilter<"Trade"> | string
    name?: StringFilter<"Trade"> | string
    sector?: StringNullableFilter<"Trade"> | string | null
    entryPrice?: FloatFilter<"Trade"> | number
    entryDate?: DateTimeFilter<"Trade"> | Date | string
    quantity?: IntFilter<"Trade"> | number
    capitalDeployed?: FloatFilter<"Trade"> | number
    exitPrice?: FloatNullableFilter<"Trade"> | number | null
    exitDate?: DateTimeNullableFilter<"Trade"> | Date | string | null
    status?: EnumTradeStatusFilter<"Trade"> | $Enums.TradeStatus
    realizedPnl?: FloatNullableFilter<"Trade"> | number | null
    realizedPnlPct?: FloatNullableFilter<"Trade"> | number | null
    sl?: FloatNullableFilter<"Trade"> | number | null
    t1?: FloatNullableFilter<"Trade"> | number | null
    t2?: FloatNullableFilter<"Trade"> | number | null
    notes?: StringNullableFilter<"Trade"> | string | null
    createdAt?: DateTimeFilter<"Trade"> | Date | string
    updatedAt?: DateTimeFilter<"Trade"> | Date | string
    suggestion?: XOR<ScreenerSuggestionNullableScalarRelationFilter, ScreenerSuggestionWhereInput> | null
    snapshots?: TradeSnapshotListRelationFilter
  }

  export type TradeOrderByWithRelationInput = {
    id?: SortOrder
    suggestionId?: SortOrderInput | SortOrder
    ticker?: SortOrder
    tickerNs?: SortOrder
    name?: SortOrder
    sector?: SortOrderInput | SortOrder
    entryPrice?: SortOrder
    entryDate?: SortOrder
    quantity?: SortOrder
    capitalDeployed?: SortOrder
    exitPrice?: SortOrderInput | SortOrder
    exitDate?: SortOrderInput | SortOrder
    status?: SortOrder
    realizedPnl?: SortOrderInput | SortOrder
    realizedPnlPct?: SortOrderInput | SortOrder
    sl?: SortOrderInput | SortOrder
    t1?: SortOrderInput | SortOrder
    t2?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    suggestion?: ScreenerSuggestionOrderByWithRelationInput
    snapshots?: TradeSnapshotOrderByRelationAggregateInput
  }

  export type TradeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    suggestionId?: string
    AND?: TradeWhereInput | TradeWhereInput[]
    OR?: TradeWhereInput[]
    NOT?: TradeWhereInput | TradeWhereInput[]
    ticker?: StringFilter<"Trade"> | string
    tickerNs?: StringFilter<"Trade"> | string
    name?: StringFilter<"Trade"> | string
    sector?: StringNullableFilter<"Trade"> | string | null
    entryPrice?: FloatFilter<"Trade"> | number
    entryDate?: DateTimeFilter<"Trade"> | Date | string
    quantity?: IntFilter<"Trade"> | number
    capitalDeployed?: FloatFilter<"Trade"> | number
    exitPrice?: FloatNullableFilter<"Trade"> | number | null
    exitDate?: DateTimeNullableFilter<"Trade"> | Date | string | null
    status?: EnumTradeStatusFilter<"Trade"> | $Enums.TradeStatus
    realizedPnl?: FloatNullableFilter<"Trade"> | number | null
    realizedPnlPct?: FloatNullableFilter<"Trade"> | number | null
    sl?: FloatNullableFilter<"Trade"> | number | null
    t1?: FloatNullableFilter<"Trade"> | number | null
    t2?: FloatNullableFilter<"Trade"> | number | null
    notes?: StringNullableFilter<"Trade"> | string | null
    createdAt?: DateTimeFilter<"Trade"> | Date | string
    updatedAt?: DateTimeFilter<"Trade"> | Date | string
    suggestion?: XOR<ScreenerSuggestionNullableScalarRelationFilter, ScreenerSuggestionWhereInput> | null
    snapshots?: TradeSnapshotListRelationFilter
  }, "id" | "suggestionId">

  export type TradeOrderByWithAggregationInput = {
    id?: SortOrder
    suggestionId?: SortOrderInput | SortOrder
    ticker?: SortOrder
    tickerNs?: SortOrder
    name?: SortOrder
    sector?: SortOrderInput | SortOrder
    entryPrice?: SortOrder
    entryDate?: SortOrder
    quantity?: SortOrder
    capitalDeployed?: SortOrder
    exitPrice?: SortOrderInput | SortOrder
    exitDate?: SortOrderInput | SortOrder
    status?: SortOrder
    realizedPnl?: SortOrderInput | SortOrder
    realizedPnlPct?: SortOrderInput | SortOrder
    sl?: SortOrderInput | SortOrder
    t1?: SortOrderInput | SortOrder
    t2?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TradeCountOrderByAggregateInput
    _avg?: TradeAvgOrderByAggregateInput
    _max?: TradeMaxOrderByAggregateInput
    _min?: TradeMinOrderByAggregateInput
    _sum?: TradeSumOrderByAggregateInput
  }

  export type TradeScalarWhereWithAggregatesInput = {
    AND?: TradeScalarWhereWithAggregatesInput | TradeScalarWhereWithAggregatesInput[]
    OR?: TradeScalarWhereWithAggregatesInput[]
    NOT?: TradeScalarWhereWithAggregatesInput | TradeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Trade"> | string
    suggestionId?: StringNullableWithAggregatesFilter<"Trade"> | string | null
    ticker?: StringWithAggregatesFilter<"Trade"> | string
    tickerNs?: StringWithAggregatesFilter<"Trade"> | string
    name?: StringWithAggregatesFilter<"Trade"> | string
    sector?: StringNullableWithAggregatesFilter<"Trade"> | string | null
    entryPrice?: FloatWithAggregatesFilter<"Trade"> | number
    entryDate?: DateTimeWithAggregatesFilter<"Trade"> | Date | string
    quantity?: IntWithAggregatesFilter<"Trade"> | number
    capitalDeployed?: FloatWithAggregatesFilter<"Trade"> | number
    exitPrice?: FloatNullableWithAggregatesFilter<"Trade"> | number | null
    exitDate?: DateTimeNullableWithAggregatesFilter<"Trade"> | Date | string | null
    status?: EnumTradeStatusWithAggregatesFilter<"Trade"> | $Enums.TradeStatus
    realizedPnl?: FloatNullableWithAggregatesFilter<"Trade"> | number | null
    realizedPnlPct?: FloatNullableWithAggregatesFilter<"Trade"> | number | null
    sl?: FloatNullableWithAggregatesFilter<"Trade"> | number | null
    t1?: FloatNullableWithAggregatesFilter<"Trade"> | number | null
    t2?: FloatNullableWithAggregatesFilter<"Trade"> | number | null
    notes?: StringNullableWithAggregatesFilter<"Trade"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Trade"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Trade"> | Date | string
  }

  export type TradeSnapshotWhereInput = {
    AND?: TradeSnapshotWhereInput | TradeSnapshotWhereInput[]
    OR?: TradeSnapshotWhereInput[]
    NOT?: TradeSnapshotWhereInput | TradeSnapshotWhereInput[]
    id?: StringFilter<"TradeSnapshot"> | string
    tradeId?: StringFilter<"TradeSnapshot"> | string
    date?: DateTimeFilter<"TradeSnapshot"> | Date | string
    closePrice?: FloatFilter<"TradeSnapshot"> | number
    unrealizedPnl?: FloatFilter<"TradeSnapshot"> | number
    unrealizedPnlPct?: FloatFilter<"TradeSnapshot"> | number
    trade?: XOR<TradeScalarRelationFilter, TradeWhereInput>
  }

  export type TradeSnapshotOrderByWithRelationInput = {
    id?: SortOrder
    tradeId?: SortOrder
    date?: SortOrder
    closePrice?: SortOrder
    unrealizedPnl?: SortOrder
    unrealizedPnlPct?: SortOrder
    trade?: TradeOrderByWithRelationInput
  }

  export type TradeSnapshotWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    tradeId_date?: TradeSnapshotTradeIdDateCompoundUniqueInput
    AND?: TradeSnapshotWhereInput | TradeSnapshotWhereInput[]
    OR?: TradeSnapshotWhereInput[]
    NOT?: TradeSnapshotWhereInput | TradeSnapshotWhereInput[]
    tradeId?: StringFilter<"TradeSnapshot"> | string
    date?: DateTimeFilter<"TradeSnapshot"> | Date | string
    closePrice?: FloatFilter<"TradeSnapshot"> | number
    unrealizedPnl?: FloatFilter<"TradeSnapshot"> | number
    unrealizedPnlPct?: FloatFilter<"TradeSnapshot"> | number
    trade?: XOR<TradeScalarRelationFilter, TradeWhereInput>
  }, "id" | "tradeId_date">

  export type TradeSnapshotOrderByWithAggregationInput = {
    id?: SortOrder
    tradeId?: SortOrder
    date?: SortOrder
    closePrice?: SortOrder
    unrealizedPnl?: SortOrder
    unrealizedPnlPct?: SortOrder
    _count?: TradeSnapshotCountOrderByAggregateInput
    _avg?: TradeSnapshotAvgOrderByAggregateInput
    _max?: TradeSnapshotMaxOrderByAggregateInput
    _min?: TradeSnapshotMinOrderByAggregateInput
    _sum?: TradeSnapshotSumOrderByAggregateInput
  }

  export type TradeSnapshotScalarWhereWithAggregatesInput = {
    AND?: TradeSnapshotScalarWhereWithAggregatesInput | TradeSnapshotScalarWhereWithAggregatesInput[]
    OR?: TradeSnapshotScalarWhereWithAggregatesInput[]
    NOT?: TradeSnapshotScalarWhereWithAggregatesInput | TradeSnapshotScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TradeSnapshot"> | string
    tradeId?: StringWithAggregatesFilter<"TradeSnapshot"> | string
    date?: DateTimeWithAggregatesFilter<"TradeSnapshot"> | Date | string
    closePrice?: FloatWithAggregatesFilter<"TradeSnapshot"> | number
    unrealizedPnl?: FloatWithAggregatesFilter<"TradeSnapshot"> | number
    unrealizedPnlPct?: FloatWithAggregatesFilter<"TradeSnapshot"> | number
  }

  export type AccountCreateInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountCreateManyInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionCreateInput = {
    id?: string
    sessionToken: string
    expires: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VerificationTokenCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUncheckedCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateManyInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateManyMutationInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateManyInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FundAccountCreateInput = {
    id?: string
    totalCapital?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: FundTransactionCreateNestedManyWithoutAccountInput
  }

  export type FundAccountUncheckedCreateInput = {
    id?: string
    totalCapital?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: FundTransactionUncheckedCreateNestedManyWithoutAccountInput
  }

  export type FundAccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalCapital?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: FundTransactionUpdateManyWithoutAccountNestedInput
  }

  export type FundAccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalCapital?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: FundTransactionUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type FundAccountCreateManyInput = {
    id?: string
    totalCapital?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FundAccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalCapital?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FundAccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalCapital?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FundTransactionCreateInput = {
    id?: string
    type: $Enums.FundTxType
    amount: number
    date?: Date | string
    notes?: string | null
    account: FundAccountCreateNestedOneWithoutTransactionsInput
  }

  export type FundTransactionUncheckedCreateInput = {
    id?: string
    accountId: string
    type: $Enums.FundTxType
    amount: number
    date?: Date | string
    notes?: string | null
  }

  export type FundTransactionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumFundTxTypeFieldUpdateOperationsInput | $Enums.FundTxType
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    account?: FundAccountUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type FundTransactionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    type?: EnumFundTxTypeFieldUpdateOperationsInput | $Enums.FundTxType
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FundTransactionCreateManyInput = {
    id?: string
    accountId: string
    type: $Enums.FundTxType
    amount: number
    date?: Date | string
    notes?: string | null
  }

  export type FundTransactionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumFundTxTypeFieldUpdateOperationsInput | $Enums.FundTxType
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FundTransactionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    type?: EnumFundTxTypeFieldUpdateOperationsInput | $Enums.FundTxType
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ScreenerSuggestionCreateInput = {
    id?: string
    scanDate: Date | string
    ticker: string
    tickerNs: string
    name: string
    sector: string
    setupType: string
    score: number
    entryLow: number
    entryHigh: number
    sl: number
    t1: number
    t2?: number | null
    notes?: string | null
    status?: $Enums.SuggestionStatus
    createdAt?: Date | string
    snapshots?: SuggestionSnapshotCreateNestedManyWithoutSuggestionInput
    trade?: TradeCreateNestedOneWithoutSuggestionInput
  }

  export type ScreenerSuggestionUncheckedCreateInput = {
    id?: string
    scanDate: Date | string
    ticker: string
    tickerNs: string
    name: string
    sector: string
    setupType: string
    score: number
    entryLow: number
    entryHigh: number
    sl: number
    t1: number
    t2?: number | null
    notes?: string | null
    status?: $Enums.SuggestionStatus
    createdAt?: Date | string
    snapshots?: SuggestionSnapshotUncheckedCreateNestedManyWithoutSuggestionInput
    trade?: TradeUncheckedCreateNestedOneWithoutSuggestionInput
  }

  export type ScreenerSuggestionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    scanDate?: DateTimeFieldUpdateOperationsInput | Date | string
    ticker?: StringFieldUpdateOperationsInput | string
    tickerNs?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sector?: StringFieldUpdateOperationsInput | string
    setupType?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    entryLow?: FloatFieldUpdateOperationsInput | number
    entryHigh?: FloatFieldUpdateOperationsInput | number
    sl?: FloatFieldUpdateOperationsInput | number
    t1?: FloatFieldUpdateOperationsInput | number
    t2?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSuggestionStatusFieldUpdateOperationsInput | $Enums.SuggestionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    snapshots?: SuggestionSnapshotUpdateManyWithoutSuggestionNestedInput
    trade?: TradeUpdateOneWithoutSuggestionNestedInput
  }

  export type ScreenerSuggestionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    scanDate?: DateTimeFieldUpdateOperationsInput | Date | string
    ticker?: StringFieldUpdateOperationsInput | string
    tickerNs?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sector?: StringFieldUpdateOperationsInput | string
    setupType?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    entryLow?: FloatFieldUpdateOperationsInput | number
    entryHigh?: FloatFieldUpdateOperationsInput | number
    sl?: FloatFieldUpdateOperationsInput | number
    t1?: FloatFieldUpdateOperationsInput | number
    t2?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSuggestionStatusFieldUpdateOperationsInput | $Enums.SuggestionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    snapshots?: SuggestionSnapshotUncheckedUpdateManyWithoutSuggestionNestedInput
    trade?: TradeUncheckedUpdateOneWithoutSuggestionNestedInput
  }

  export type ScreenerSuggestionCreateManyInput = {
    id?: string
    scanDate: Date | string
    ticker: string
    tickerNs: string
    name: string
    sector: string
    setupType: string
    score: number
    entryLow: number
    entryHigh: number
    sl: number
    t1: number
    t2?: number | null
    notes?: string | null
    status?: $Enums.SuggestionStatus
    createdAt?: Date | string
  }

  export type ScreenerSuggestionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    scanDate?: DateTimeFieldUpdateOperationsInput | Date | string
    ticker?: StringFieldUpdateOperationsInput | string
    tickerNs?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sector?: StringFieldUpdateOperationsInput | string
    setupType?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    entryLow?: FloatFieldUpdateOperationsInput | number
    entryHigh?: FloatFieldUpdateOperationsInput | number
    sl?: FloatFieldUpdateOperationsInput | number
    t1?: FloatFieldUpdateOperationsInput | number
    t2?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSuggestionStatusFieldUpdateOperationsInput | $Enums.SuggestionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScreenerSuggestionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    scanDate?: DateTimeFieldUpdateOperationsInput | Date | string
    ticker?: StringFieldUpdateOperationsInput | string
    tickerNs?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sector?: StringFieldUpdateOperationsInput | string
    setupType?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    entryLow?: FloatFieldUpdateOperationsInput | number
    entryHigh?: FloatFieldUpdateOperationsInput | number
    sl?: FloatFieldUpdateOperationsInput | number
    t1?: FloatFieldUpdateOperationsInput | number
    t2?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSuggestionStatusFieldUpdateOperationsInput | $Enums.SuggestionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SuggestionSnapshotCreateInput = {
    id?: string
    date: Date | string
    closePrice: number
    hypoEntryPrice: number
    hypoPnlAbs: number
    hypoPnlPct: number
    suggestion: ScreenerSuggestionCreateNestedOneWithoutSnapshotsInput
  }

  export type SuggestionSnapshotUncheckedCreateInput = {
    id?: string
    suggestionId: string
    date: Date | string
    closePrice: number
    hypoEntryPrice: number
    hypoPnlAbs: number
    hypoPnlPct: number
  }

  export type SuggestionSnapshotUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    closePrice?: FloatFieldUpdateOperationsInput | number
    hypoEntryPrice?: FloatFieldUpdateOperationsInput | number
    hypoPnlAbs?: FloatFieldUpdateOperationsInput | number
    hypoPnlPct?: FloatFieldUpdateOperationsInput | number
    suggestion?: ScreenerSuggestionUpdateOneRequiredWithoutSnapshotsNestedInput
  }

  export type SuggestionSnapshotUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    suggestionId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    closePrice?: FloatFieldUpdateOperationsInput | number
    hypoEntryPrice?: FloatFieldUpdateOperationsInput | number
    hypoPnlAbs?: FloatFieldUpdateOperationsInput | number
    hypoPnlPct?: FloatFieldUpdateOperationsInput | number
  }

  export type SuggestionSnapshotCreateManyInput = {
    id?: string
    suggestionId: string
    date: Date | string
    closePrice: number
    hypoEntryPrice: number
    hypoPnlAbs: number
    hypoPnlPct: number
  }

  export type SuggestionSnapshotUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    closePrice?: FloatFieldUpdateOperationsInput | number
    hypoEntryPrice?: FloatFieldUpdateOperationsInput | number
    hypoPnlAbs?: FloatFieldUpdateOperationsInput | number
    hypoPnlPct?: FloatFieldUpdateOperationsInput | number
  }

  export type SuggestionSnapshotUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    suggestionId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    closePrice?: FloatFieldUpdateOperationsInput | number
    hypoEntryPrice?: FloatFieldUpdateOperationsInput | number
    hypoPnlAbs?: FloatFieldUpdateOperationsInput | number
    hypoPnlPct?: FloatFieldUpdateOperationsInput | number
  }

  export type TradeCreateInput = {
    id?: string
    ticker: string
    tickerNs: string
    name: string
    sector?: string | null
    entryPrice: number
    entryDate: Date | string
    quantity: number
    capitalDeployed: number
    exitPrice?: number | null
    exitDate?: Date | string | null
    status?: $Enums.TradeStatus
    realizedPnl?: number | null
    realizedPnlPct?: number | null
    sl?: number | null
    t1?: number | null
    t2?: number | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    suggestion?: ScreenerSuggestionCreateNestedOneWithoutTradeInput
    snapshots?: TradeSnapshotCreateNestedManyWithoutTradeInput
  }

  export type TradeUncheckedCreateInput = {
    id?: string
    suggestionId?: string | null
    ticker: string
    tickerNs: string
    name: string
    sector?: string | null
    entryPrice: number
    entryDate: Date | string
    quantity: number
    capitalDeployed: number
    exitPrice?: number | null
    exitDate?: Date | string | null
    status?: $Enums.TradeStatus
    realizedPnl?: number | null
    realizedPnlPct?: number | null
    sl?: number | null
    t1?: number | null
    t2?: number | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    snapshots?: TradeSnapshotUncheckedCreateNestedManyWithoutTradeInput
  }

  export type TradeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticker?: StringFieldUpdateOperationsInput | string
    tickerNs?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sector?: NullableStringFieldUpdateOperationsInput | string | null
    entryPrice?: FloatFieldUpdateOperationsInput | number
    entryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
    capitalDeployed?: FloatFieldUpdateOperationsInput | number
    exitPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    exitDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumTradeStatusFieldUpdateOperationsInput | $Enums.TradeStatus
    realizedPnl?: NullableFloatFieldUpdateOperationsInput | number | null
    realizedPnlPct?: NullableFloatFieldUpdateOperationsInput | number | null
    sl?: NullableFloatFieldUpdateOperationsInput | number | null
    t1?: NullableFloatFieldUpdateOperationsInput | number | null
    t2?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    suggestion?: ScreenerSuggestionUpdateOneWithoutTradeNestedInput
    snapshots?: TradeSnapshotUpdateManyWithoutTradeNestedInput
  }

  export type TradeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    suggestionId?: NullableStringFieldUpdateOperationsInput | string | null
    ticker?: StringFieldUpdateOperationsInput | string
    tickerNs?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sector?: NullableStringFieldUpdateOperationsInput | string | null
    entryPrice?: FloatFieldUpdateOperationsInput | number
    entryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
    capitalDeployed?: FloatFieldUpdateOperationsInput | number
    exitPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    exitDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumTradeStatusFieldUpdateOperationsInput | $Enums.TradeStatus
    realizedPnl?: NullableFloatFieldUpdateOperationsInput | number | null
    realizedPnlPct?: NullableFloatFieldUpdateOperationsInput | number | null
    sl?: NullableFloatFieldUpdateOperationsInput | number | null
    t1?: NullableFloatFieldUpdateOperationsInput | number | null
    t2?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    snapshots?: TradeSnapshotUncheckedUpdateManyWithoutTradeNestedInput
  }

  export type TradeCreateManyInput = {
    id?: string
    suggestionId?: string | null
    ticker: string
    tickerNs: string
    name: string
    sector?: string | null
    entryPrice: number
    entryDate: Date | string
    quantity: number
    capitalDeployed: number
    exitPrice?: number | null
    exitDate?: Date | string | null
    status?: $Enums.TradeStatus
    realizedPnl?: number | null
    realizedPnlPct?: number | null
    sl?: number | null
    t1?: number | null
    t2?: number | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TradeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticker?: StringFieldUpdateOperationsInput | string
    tickerNs?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sector?: NullableStringFieldUpdateOperationsInput | string | null
    entryPrice?: FloatFieldUpdateOperationsInput | number
    entryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
    capitalDeployed?: FloatFieldUpdateOperationsInput | number
    exitPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    exitDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumTradeStatusFieldUpdateOperationsInput | $Enums.TradeStatus
    realizedPnl?: NullableFloatFieldUpdateOperationsInput | number | null
    realizedPnlPct?: NullableFloatFieldUpdateOperationsInput | number | null
    sl?: NullableFloatFieldUpdateOperationsInput | number | null
    t1?: NullableFloatFieldUpdateOperationsInput | number | null
    t2?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TradeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    suggestionId?: NullableStringFieldUpdateOperationsInput | string | null
    ticker?: StringFieldUpdateOperationsInput | string
    tickerNs?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sector?: NullableStringFieldUpdateOperationsInput | string | null
    entryPrice?: FloatFieldUpdateOperationsInput | number
    entryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
    capitalDeployed?: FloatFieldUpdateOperationsInput | number
    exitPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    exitDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumTradeStatusFieldUpdateOperationsInput | $Enums.TradeStatus
    realizedPnl?: NullableFloatFieldUpdateOperationsInput | number | null
    realizedPnlPct?: NullableFloatFieldUpdateOperationsInput | number | null
    sl?: NullableFloatFieldUpdateOperationsInput | number | null
    t1?: NullableFloatFieldUpdateOperationsInput | number | null
    t2?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TradeSnapshotCreateInput = {
    id?: string
    date: Date | string
    closePrice: number
    unrealizedPnl: number
    unrealizedPnlPct: number
    trade: TradeCreateNestedOneWithoutSnapshotsInput
  }

  export type TradeSnapshotUncheckedCreateInput = {
    id?: string
    tradeId: string
    date: Date | string
    closePrice: number
    unrealizedPnl: number
    unrealizedPnlPct: number
  }

  export type TradeSnapshotUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    closePrice?: FloatFieldUpdateOperationsInput | number
    unrealizedPnl?: FloatFieldUpdateOperationsInput | number
    unrealizedPnlPct?: FloatFieldUpdateOperationsInput | number
    trade?: TradeUpdateOneRequiredWithoutSnapshotsNestedInput
  }

  export type TradeSnapshotUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tradeId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    closePrice?: FloatFieldUpdateOperationsInput | number
    unrealizedPnl?: FloatFieldUpdateOperationsInput | number
    unrealizedPnlPct?: FloatFieldUpdateOperationsInput | number
  }

  export type TradeSnapshotCreateManyInput = {
    id?: string
    tradeId: string
    date: Date | string
    closePrice: number
    unrealizedPnl: number
    unrealizedPnlPct: number
  }

  export type TradeSnapshotUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    closePrice?: FloatFieldUpdateOperationsInput | number
    unrealizedPnl?: FloatFieldUpdateOperationsInput | number
    unrealizedPnlPct?: FloatFieldUpdateOperationsInput | number
  }

  export type TradeSnapshotUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tradeId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    closePrice?: FloatFieldUpdateOperationsInput | number
    unrealizedPnl?: FloatFieldUpdateOperationsInput | number
    unrealizedPnlPct?: FloatFieldUpdateOperationsInput | number
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AccountProviderProviderAccountIdCompoundUniqueInput = {
    provider: string
    providerAccountId: string
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    expires_at?: SortOrder
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

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
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

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
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

  export type VerificationTokenIdentifierTokenCompoundUniqueInput = {
    identifier: string
    token: string
  }

  export type VerificationTokenCountOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMaxOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMinOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type FundTransactionListRelationFilter = {
    every?: FundTransactionWhereInput
    some?: FundTransactionWhereInput
    none?: FundTransactionWhereInput
  }

  export type FundTransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FundAccountCountOrderByAggregateInput = {
    id?: SortOrder
    totalCapital?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FundAccountAvgOrderByAggregateInput = {
    totalCapital?: SortOrder
  }

  export type FundAccountMaxOrderByAggregateInput = {
    id?: SortOrder
    totalCapital?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FundAccountMinOrderByAggregateInput = {
    id?: SortOrder
    totalCapital?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FundAccountSumOrderByAggregateInput = {
    totalCapital?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumFundTxTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.FundTxType | EnumFundTxTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FundTxType[] | ListEnumFundTxTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.FundTxType[] | ListEnumFundTxTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumFundTxTypeFilter<$PrismaModel> | $Enums.FundTxType
  }

  export type FundAccountScalarRelationFilter = {
    is?: FundAccountWhereInput
    isNot?: FundAccountWhereInput
  }

  export type FundTransactionCountOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    notes?: SortOrder
  }

  export type FundTransactionAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type FundTransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    notes?: SortOrder
  }

  export type FundTransactionMinOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    notes?: SortOrder
  }

  export type FundTransactionSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type EnumFundTxTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FundTxType | EnumFundTxTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FundTxType[] | ListEnumFundTxTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.FundTxType[] | ListEnumFundTxTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumFundTxTypeWithAggregatesFilter<$PrismaModel> | $Enums.FundTxType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFundTxTypeFilter<$PrismaModel>
    _max?: NestedEnumFundTxTypeFilter<$PrismaModel>
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type EnumSuggestionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SuggestionStatus | EnumSuggestionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SuggestionStatus[] | ListEnumSuggestionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SuggestionStatus[] | ListEnumSuggestionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSuggestionStatusFilter<$PrismaModel> | $Enums.SuggestionStatus
  }

  export type SuggestionSnapshotListRelationFilter = {
    every?: SuggestionSnapshotWhereInput
    some?: SuggestionSnapshotWhereInput
    none?: SuggestionSnapshotWhereInput
  }

  export type TradeNullableScalarRelationFilter = {
    is?: TradeWhereInput | null
    isNot?: TradeWhereInput | null
  }

  export type SuggestionSnapshotOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ScreenerSuggestionCountOrderByAggregateInput = {
    id?: SortOrder
    scanDate?: SortOrder
    ticker?: SortOrder
    tickerNs?: SortOrder
    name?: SortOrder
    sector?: SortOrder
    setupType?: SortOrder
    score?: SortOrder
    entryLow?: SortOrder
    entryHigh?: SortOrder
    sl?: SortOrder
    t1?: SortOrder
    t2?: SortOrder
    notes?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type ScreenerSuggestionAvgOrderByAggregateInput = {
    score?: SortOrder
    entryLow?: SortOrder
    entryHigh?: SortOrder
    sl?: SortOrder
    t1?: SortOrder
    t2?: SortOrder
  }

  export type ScreenerSuggestionMaxOrderByAggregateInput = {
    id?: SortOrder
    scanDate?: SortOrder
    ticker?: SortOrder
    tickerNs?: SortOrder
    name?: SortOrder
    sector?: SortOrder
    setupType?: SortOrder
    score?: SortOrder
    entryLow?: SortOrder
    entryHigh?: SortOrder
    sl?: SortOrder
    t1?: SortOrder
    t2?: SortOrder
    notes?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type ScreenerSuggestionMinOrderByAggregateInput = {
    id?: SortOrder
    scanDate?: SortOrder
    ticker?: SortOrder
    tickerNs?: SortOrder
    name?: SortOrder
    sector?: SortOrder
    setupType?: SortOrder
    score?: SortOrder
    entryLow?: SortOrder
    entryHigh?: SortOrder
    sl?: SortOrder
    t1?: SortOrder
    t2?: SortOrder
    notes?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type ScreenerSuggestionSumOrderByAggregateInput = {
    score?: SortOrder
    entryLow?: SortOrder
    entryHigh?: SortOrder
    sl?: SortOrder
    t1?: SortOrder
    t2?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type EnumSuggestionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SuggestionStatus | EnumSuggestionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SuggestionStatus[] | ListEnumSuggestionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SuggestionStatus[] | ListEnumSuggestionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSuggestionStatusWithAggregatesFilter<$PrismaModel> | $Enums.SuggestionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSuggestionStatusFilter<$PrismaModel>
    _max?: NestedEnumSuggestionStatusFilter<$PrismaModel>
  }

  export type ScreenerSuggestionScalarRelationFilter = {
    is?: ScreenerSuggestionWhereInput
    isNot?: ScreenerSuggestionWhereInput
  }

  export type SuggestionSnapshotSuggestionIdDateCompoundUniqueInput = {
    suggestionId: string
    date: Date | string
  }

  export type SuggestionSnapshotCountOrderByAggregateInput = {
    id?: SortOrder
    suggestionId?: SortOrder
    date?: SortOrder
    closePrice?: SortOrder
    hypoEntryPrice?: SortOrder
    hypoPnlAbs?: SortOrder
    hypoPnlPct?: SortOrder
  }

  export type SuggestionSnapshotAvgOrderByAggregateInput = {
    closePrice?: SortOrder
    hypoEntryPrice?: SortOrder
    hypoPnlAbs?: SortOrder
    hypoPnlPct?: SortOrder
  }

  export type SuggestionSnapshotMaxOrderByAggregateInput = {
    id?: SortOrder
    suggestionId?: SortOrder
    date?: SortOrder
    closePrice?: SortOrder
    hypoEntryPrice?: SortOrder
    hypoPnlAbs?: SortOrder
    hypoPnlPct?: SortOrder
  }

  export type SuggestionSnapshotMinOrderByAggregateInput = {
    id?: SortOrder
    suggestionId?: SortOrder
    date?: SortOrder
    closePrice?: SortOrder
    hypoEntryPrice?: SortOrder
    hypoPnlAbs?: SortOrder
    hypoPnlPct?: SortOrder
  }

  export type SuggestionSnapshotSumOrderByAggregateInput = {
    closePrice?: SortOrder
    hypoEntryPrice?: SortOrder
    hypoPnlAbs?: SortOrder
    hypoPnlPct?: SortOrder
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

  export type EnumTradeStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TradeStatus | EnumTradeStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TradeStatus[] | ListEnumTradeStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TradeStatus[] | ListEnumTradeStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTradeStatusFilter<$PrismaModel> | $Enums.TradeStatus
  }

  export type ScreenerSuggestionNullableScalarRelationFilter = {
    is?: ScreenerSuggestionWhereInput | null
    isNot?: ScreenerSuggestionWhereInput | null
  }

  export type TradeSnapshotListRelationFilter = {
    every?: TradeSnapshotWhereInput
    some?: TradeSnapshotWhereInput
    none?: TradeSnapshotWhereInput
  }

  export type TradeSnapshotOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TradeCountOrderByAggregateInput = {
    id?: SortOrder
    suggestionId?: SortOrder
    ticker?: SortOrder
    tickerNs?: SortOrder
    name?: SortOrder
    sector?: SortOrder
    entryPrice?: SortOrder
    entryDate?: SortOrder
    quantity?: SortOrder
    capitalDeployed?: SortOrder
    exitPrice?: SortOrder
    exitDate?: SortOrder
    status?: SortOrder
    realizedPnl?: SortOrder
    realizedPnlPct?: SortOrder
    sl?: SortOrder
    t1?: SortOrder
    t2?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TradeAvgOrderByAggregateInput = {
    entryPrice?: SortOrder
    quantity?: SortOrder
    capitalDeployed?: SortOrder
    exitPrice?: SortOrder
    realizedPnl?: SortOrder
    realizedPnlPct?: SortOrder
    sl?: SortOrder
    t1?: SortOrder
    t2?: SortOrder
  }

  export type TradeMaxOrderByAggregateInput = {
    id?: SortOrder
    suggestionId?: SortOrder
    ticker?: SortOrder
    tickerNs?: SortOrder
    name?: SortOrder
    sector?: SortOrder
    entryPrice?: SortOrder
    entryDate?: SortOrder
    quantity?: SortOrder
    capitalDeployed?: SortOrder
    exitPrice?: SortOrder
    exitDate?: SortOrder
    status?: SortOrder
    realizedPnl?: SortOrder
    realizedPnlPct?: SortOrder
    sl?: SortOrder
    t1?: SortOrder
    t2?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TradeMinOrderByAggregateInput = {
    id?: SortOrder
    suggestionId?: SortOrder
    ticker?: SortOrder
    tickerNs?: SortOrder
    name?: SortOrder
    sector?: SortOrder
    entryPrice?: SortOrder
    entryDate?: SortOrder
    quantity?: SortOrder
    capitalDeployed?: SortOrder
    exitPrice?: SortOrder
    exitDate?: SortOrder
    status?: SortOrder
    realizedPnl?: SortOrder
    realizedPnlPct?: SortOrder
    sl?: SortOrder
    t1?: SortOrder
    t2?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TradeSumOrderByAggregateInput = {
    entryPrice?: SortOrder
    quantity?: SortOrder
    capitalDeployed?: SortOrder
    exitPrice?: SortOrder
    realizedPnl?: SortOrder
    realizedPnlPct?: SortOrder
    sl?: SortOrder
    t1?: SortOrder
    t2?: SortOrder
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

  export type EnumTradeStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TradeStatus | EnumTradeStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TradeStatus[] | ListEnumTradeStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TradeStatus[] | ListEnumTradeStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTradeStatusWithAggregatesFilter<$PrismaModel> | $Enums.TradeStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTradeStatusFilter<$PrismaModel>
    _max?: NestedEnumTradeStatusFilter<$PrismaModel>
  }

  export type TradeScalarRelationFilter = {
    is?: TradeWhereInput
    isNot?: TradeWhereInput
  }

  export type TradeSnapshotTradeIdDateCompoundUniqueInput = {
    tradeId: string
    date: Date | string
  }

  export type TradeSnapshotCountOrderByAggregateInput = {
    id?: SortOrder
    tradeId?: SortOrder
    date?: SortOrder
    closePrice?: SortOrder
    unrealizedPnl?: SortOrder
    unrealizedPnlPct?: SortOrder
  }

  export type TradeSnapshotAvgOrderByAggregateInput = {
    closePrice?: SortOrder
    unrealizedPnl?: SortOrder
    unrealizedPnlPct?: SortOrder
  }

  export type TradeSnapshotMaxOrderByAggregateInput = {
    id?: SortOrder
    tradeId?: SortOrder
    date?: SortOrder
    closePrice?: SortOrder
    unrealizedPnl?: SortOrder
    unrealizedPnlPct?: SortOrder
  }

  export type TradeSnapshotMinOrderByAggregateInput = {
    id?: SortOrder
    tradeId?: SortOrder
    date?: SortOrder
    closePrice?: SortOrder
    unrealizedPnl?: SortOrder
    unrealizedPnlPct?: SortOrder
  }

  export type TradeSnapshotSumOrderByAggregateInput = {
    closePrice?: SortOrder
    unrealizedPnl?: SortOrder
    unrealizedPnlPct?: SortOrder
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type FundTransactionCreateNestedManyWithoutAccountInput = {
    create?: XOR<FundTransactionCreateWithoutAccountInput, FundTransactionUncheckedCreateWithoutAccountInput> | FundTransactionCreateWithoutAccountInput[] | FundTransactionUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: FundTransactionCreateOrConnectWithoutAccountInput | FundTransactionCreateOrConnectWithoutAccountInput[]
    createMany?: FundTransactionCreateManyAccountInputEnvelope
    connect?: FundTransactionWhereUniqueInput | FundTransactionWhereUniqueInput[]
  }

  export type FundTransactionUncheckedCreateNestedManyWithoutAccountInput = {
    create?: XOR<FundTransactionCreateWithoutAccountInput, FundTransactionUncheckedCreateWithoutAccountInput> | FundTransactionCreateWithoutAccountInput[] | FundTransactionUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: FundTransactionCreateOrConnectWithoutAccountInput | FundTransactionCreateOrConnectWithoutAccountInput[]
    createMany?: FundTransactionCreateManyAccountInputEnvelope
    connect?: FundTransactionWhereUniqueInput | FundTransactionWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FundTransactionUpdateManyWithoutAccountNestedInput = {
    create?: XOR<FundTransactionCreateWithoutAccountInput, FundTransactionUncheckedCreateWithoutAccountInput> | FundTransactionCreateWithoutAccountInput[] | FundTransactionUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: FundTransactionCreateOrConnectWithoutAccountInput | FundTransactionCreateOrConnectWithoutAccountInput[]
    upsert?: FundTransactionUpsertWithWhereUniqueWithoutAccountInput | FundTransactionUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: FundTransactionCreateManyAccountInputEnvelope
    set?: FundTransactionWhereUniqueInput | FundTransactionWhereUniqueInput[]
    disconnect?: FundTransactionWhereUniqueInput | FundTransactionWhereUniqueInput[]
    delete?: FundTransactionWhereUniqueInput | FundTransactionWhereUniqueInput[]
    connect?: FundTransactionWhereUniqueInput | FundTransactionWhereUniqueInput[]
    update?: FundTransactionUpdateWithWhereUniqueWithoutAccountInput | FundTransactionUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: FundTransactionUpdateManyWithWhereWithoutAccountInput | FundTransactionUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: FundTransactionScalarWhereInput | FundTransactionScalarWhereInput[]
  }

  export type FundTransactionUncheckedUpdateManyWithoutAccountNestedInput = {
    create?: XOR<FundTransactionCreateWithoutAccountInput, FundTransactionUncheckedCreateWithoutAccountInput> | FundTransactionCreateWithoutAccountInput[] | FundTransactionUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: FundTransactionCreateOrConnectWithoutAccountInput | FundTransactionCreateOrConnectWithoutAccountInput[]
    upsert?: FundTransactionUpsertWithWhereUniqueWithoutAccountInput | FundTransactionUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: FundTransactionCreateManyAccountInputEnvelope
    set?: FundTransactionWhereUniqueInput | FundTransactionWhereUniqueInput[]
    disconnect?: FundTransactionWhereUniqueInput | FundTransactionWhereUniqueInput[]
    delete?: FundTransactionWhereUniqueInput | FundTransactionWhereUniqueInput[]
    connect?: FundTransactionWhereUniqueInput | FundTransactionWhereUniqueInput[]
    update?: FundTransactionUpdateWithWhereUniqueWithoutAccountInput | FundTransactionUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: FundTransactionUpdateManyWithWhereWithoutAccountInput | FundTransactionUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: FundTransactionScalarWhereInput | FundTransactionScalarWhereInput[]
  }

  export type FundAccountCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<FundAccountCreateWithoutTransactionsInput, FundAccountUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: FundAccountCreateOrConnectWithoutTransactionsInput
    connect?: FundAccountWhereUniqueInput
  }

  export type EnumFundTxTypeFieldUpdateOperationsInput = {
    set?: $Enums.FundTxType
  }

  export type FundAccountUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<FundAccountCreateWithoutTransactionsInput, FundAccountUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: FundAccountCreateOrConnectWithoutTransactionsInput
    upsert?: FundAccountUpsertWithoutTransactionsInput
    connect?: FundAccountWhereUniqueInput
    update?: XOR<XOR<FundAccountUpdateToOneWithWhereWithoutTransactionsInput, FundAccountUpdateWithoutTransactionsInput>, FundAccountUncheckedUpdateWithoutTransactionsInput>
  }

  export type SuggestionSnapshotCreateNestedManyWithoutSuggestionInput = {
    create?: XOR<SuggestionSnapshotCreateWithoutSuggestionInput, SuggestionSnapshotUncheckedCreateWithoutSuggestionInput> | SuggestionSnapshotCreateWithoutSuggestionInput[] | SuggestionSnapshotUncheckedCreateWithoutSuggestionInput[]
    connectOrCreate?: SuggestionSnapshotCreateOrConnectWithoutSuggestionInput | SuggestionSnapshotCreateOrConnectWithoutSuggestionInput[]
    createMany?: SuggestionSnapshotCreateManySuggestionInputEnvelope
    connect?: SuggestionSnapshotWhereUniqueInput | SuggestionSnapshotWhereUniqueInput[]
  }

  export type TradeCreateNestedOneWithoutSuggestionInput = {
    create?: XOR<TradeCreateWithoutSuggestionInput, TradeUncheckedCreateWithoutSuggestionInput>
    connectOrCreate?: TradeCreateOrConnectWithoutSuggestionInput
    connect?: TradeWhereUniqueInput
  }

  export type SuggestionSnapshotUncheckedCreateNestedManyWithoutSuggestionInput = {
    create?: XOR<SuggestionSnapshotCreateWithoutSuggestionInput, SuggestionSnapshotUncheckedCreateWithoutSuggestionInput> | SuggestionSnapshotCreateWithoutSuggestionInput[] | SuggestionSnapshotUncheckedCreateWithoutSuggestionInput[]
    connectOrCreate?: SuggestionSnapshotCreateOrConnectWithoutSuggestionInput | SuggestionSnapshotCreateOrConnectWithoutSuggestionInput[]
    createMany?: SuggestionSnapshotCreateManySuggestionInputEnvelope
    connect?: SuggestionSnapshotWhereUniqueInput | SuggestionSnapshotWhereUniqueInput[]
  }

  export type TradeUncheckedCreateNestedOneWithoutSuggestionInput = {
    create?: XOR<TradeCreateWithoutSuggestionInput, TradeUncheckedCreateWithoutSuggestionInput>
    connectOrCreate?: TradeCreateOrConnectWithoutSuggestionInput
    connect?: TradeWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumSuggestionStatusFieldUpdateOperationsInput = {
    set?: $Enums.SuggestionStatus
  }

  export type SuggestionSnapshotUpdateManyWithoutSuggestionNestedInput = {
    create?: XOR<SuggestionSnapshotCreateWithoutSuggestionInput, SuggestionSnapshotUncheckedCreateWithoutSuggestionInput> | SuggestionSnapshotCreateWithoutSuggestionInput[] | SuggestionSnapshotUncheckedCreateWithoutSuggestionInput[]
    connectOrCreate?: SuggestionSnapshotCreateOrConnectWithoutSuggestionInput | SuggestionSnapshotCreateOrConnectWithoutSuggestionInput[]
    upsert?: SuggestionSnapshotUpsertWithWhereUniqueWithoutSuggestionInput | SuggestionSnapshotUpsertWithWhereUniqueWithoutSuggestionInput[]
    createMany?: SuggestionSnapshotCreateManySuggestionInputEnvelope
    set?: SuggestionSnapshotWhereUniqueInput | SuggestionSnapshotWhereUniqueInput[]
    disconnect?: SuggestionSnapshotWhereUniqueInput | SuggestionSnapshotWhereUniqueInput[]
    delete?: SuggestionSnapshotWhereUniqueInput | SuggestionSnapshotWhereUniqueInput[]
    connect?: SuggestionSnapshotWhereUniqueInput | SuggestionSnapshotWhereUniqueInput[]
    update?: SuggestionSnapshotUpdateWithWhereUniqueWithoutSuggestionInput | SuggestionSnapshotUpdateWithWhereUniqueWithoutSuggestionInput[]
    updateMany?: SuggestionSnapshotUpdateManyWithWhereWithoutSuggestionInput | SuggestionSnapshotUpdateManyWithWhereWithoutSuggestionInput[]
    deleteMany?: SuggestionSnapshotScalarWhereInput | SuggestionSnapshotScalarWhereInput[]
  }

  export type TradeUpdateOneWithoutSuggestionNestedInput = {
    create?: XOR<TradeCreateWithoutSuggestionInput, TradeUncheckedCreateWithoutSuggestionInput>
    connectOrCreate?: TradeCreateOrConnectWithoutSuggestionInput
    upsert?: TradeUpsertWithoutSuggestionInput
    disconnect?: TradeWhereInput | boolean
    delete?: TradeWhereInput | boolean
    connect?: TradeWhereUniqueInput
    update?: XOR<XOR<TradeUpdateToOneWithWhereWithoutSuggestionInput, TradeUpdateWithoutSuggestionInput>, TradeUncheckedUpdateWithoutSuggestionInput>
  }

  export type SuggestionSnapshotUncheckedUpdateManyWithoutSuggestionNestedInput = {
    create?: XOR<SuggestionSnapshotCreateWithoutSuggestionInput, SuggestionSnapshotUncheckedCreateWithoutSuggestionInput> | SuggestionSnapshotCreateWithoutSuggestionInput[] | SuggestionSnapshotUncheckedCreateWithoutSuggestionInput[]
    connectOrCreate?: SuggestionSnapshotCreateOrConnectWithoutSuggestionInput | SuggestionSnapshotCreateOrConnectWithoutSuggestionInput[]
    upsert?: SuggestionSnapshotUpsertWithWhereUniqueWithoutSuggestionInput | SuggestionSnapshotUpsertWithWhereUniqueWithoutSuggestionInput[]
    createMany?: SuggestionSnapshotCreateManySuggestionInputEnvelope
    set?: SuggestionSnapshotWhereUniqueInput | SuggestionSnapshotWhereUniqueInput[]
    disconnect?: SuggestionSnapshotWhereUniqueInput | SuggestionSnapshotWhereUniqueInput[]
    delete?: SuggestionSnapshotWhereUniqueInput | SuggestionSnapshotWhereUniqueInput[]
    connect?: SuggestionSnapshotWhereUniqueInput | SuggestionSnapshotWhereUniqueInput[]
    update?: SuggestionSnapshotUpdateWithWhereUniqueWithoutSuggestionInput | SuggestionSnapshotUpdateWithWhereUniqueWithoutSuggestionInput[]
    updateMany?: SuggestionSnapshotUpdateManyWithWhereWithoutSuggestionInput | SuggestionSnapshotUpdateManyWithWhereWithoutSuggestionInput[]
    deleteMany?: SuggestionSnapshotScalarWhereInput | SuggestionSnapshotScalarWhereInput[]
  }

  export type TradeUncheckedUpdateOneWithoutSuggestionNestedInput = {
    create?: XOR<TradeCreateWithoutSuggestionInput, TradeUncheckedCreateWithoutSuggestionInput>
    connectOrCreate?: TradeCreateOrConnectWithoutSuggestionInput
    upsert?: TradeUpsertWithoutSuggestionInput
    disconnect?: TradeWhereInput | boolean
    delete?: TradeWhereInput | boolean
    connect?: TradeWhereUniqueInput
    update?: XOR<XOR<TradeUpdateToOneWithWhereWithoutSuggestionInput, TradeUpdateWithoutSuggestionInput>, TradeUncheckedUpdateWithoutSuggestionInput>
  }

  export type ScreenerSuggestionCreateNestedOneWithoutSnapshotsInput = {
    create?: XOR<ScreenerSuggestionCreateWithoutSnapshotsInput, ScreenerSuggestionUncheckedCreateWithoutSnapshotsInput>
    connectOrCreate?: ScreenerSuggestionCreateOrConnectWithoutSnapshotsInput
    connect?: ScreenerSuggestionWhereUniqueInput
  }

  export type ScreenerSuggestionUpdateOneRequiredWithoutSnapshotsNestedInput = {
    create?: XOR<ScreenerSuggestionCreateWithoutSnapshotsInput, ScreenerSuggestionUncheckedCreateWithoutSnapshotsInput>
    connectOrCreate?: ScreenerSuggestionCreateOrConnectWithoutSnapshotsInput
    upsert?: ScreenerSuggestionUpsertWithoutSnapshotsInput
    connect?: ScreenerSuggestionWhereUniqueInput
    update?: XOR<XOR<ScreenerSuggestionUpdateToOneWithWhereWithoutSnapshotsInput, ScreenerSuggestionUpdateWithoutSnapshotsInput>, ScreenerSuggestionUncheckedUpdateWithoutSnapshotsInput>
  }

  export type ScreenerSuggestionCreateNestedOneWithoutTradeInput = {
    create?: XOR<ScreenerSuggestionCreateWithoutTradeInput, ScreenerSuggestionUncheckedCreateWithoutTradeInput>
    connectOrCreate?: ScreenerSuggestionCreateOrConnectWithoutTradeInput
    connect?: ScreenerSuggestionWhereUniqueInput
  }

  export type TradeSnapshotCreateNestedManyWithoutTradeInput = {
    create?: XOR<TradeSnapshotCreateWithoutTradeInput, TradeSnapshotUncheckedCreateWithoutTradeInput> | TradeSnapshotCreateWithoutTradeInput[] | TradeSnapshotUncheckedCreateWithoutTradeInput[]
    connectOrCreate?: TradeSnapshotCreateOrConnectWithoutTradeInput | TradeSnapshotCreateOrConnectWithoutTradeInput[]
    createMany?: TradeSnapshotCreateManyTradeInputEnvelope
    connect?: TradeSnapshotWhereUniqueInput | TradeSnapshotWhereUniqueInput[]
  }

  export type TradeSnapshotUncheckedCreateNestedManyWithoutTradeInput = {
    create?: XOR<TradeSnapshotCreateWithoutTradeInput, TradeSnapshotUncheckedCreateWithoutTradeInput> | TradeSnapshotCreateWithoutTradeInput[] | TradeSnapshotUncheckedCreateWithoutTradeInput[]
    connectOrCreate?: TradeSnapshotCreateOrConnectWithoutTradeInput | TradeSnapshotCreateOrConnectWithoutTradeInput[]
    createMany?: TradeSnapshotCreateManyTradeInputEnvelope
    connect?: TradeSnapshotWhereUniqueInput | TradeSnapshotWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumTradeStatusFieldUpdateOperationsInput = {
    set?: $Enums.TradeStatus
  }

  export type ScreenerSuggestionUpdateOneWithoutTradeNestedInput = {
    create?: XOR<ScreenerSuggestionCreateWithoutTradeInput, ScreenerSuggestionUncheckedCreateWithoutTradeInput>
    connectOrCreate?: ScreenerSuggestionCreateOrConnectWithoutTradeInput
    upsert?: ScreenerSuggestionUpsertWithoutTradeInput
    disconnect?: ScreenerSuggestionWhereInput | boolean
    delete?: ScreenerSuggestionWhereInput | boolean
    connect?: ScreenerSuggestionWhereUniqueInput
    update?: XOR<XOR<ScreenerSuggestionUpdateToOneWithWhereWithoutTradeInput, ScreenerSuggestionUpdateWithoutTradeInput>, ScreenerSuggestionUncheckedUpdateWithoutTradeInput>
  }

  export type TradeSnapshotUpdateManyWithoutTradeNestedInput = {
    create?: XOR<TradeSnapshotCreateWithoutTradeInput, TradeSnapshotUncheckedCreateWithoutTradeInput> | TradeSnapshotCreateWithoutTradeInput[] | TradeSnapshotUncheckedCreateWithoutTradeInput[]
    connectOrCreate?: TradeSnapshotCreateOrConnectWithoutTradeInput | TradeSnapshotCreateOrConnectWithoutTradeInput[]
    upsert?: TradeSnapshotUpsertWithWhereUniqueWithoutTradeInput | TradeSnapshotUpsertWithWhereUniqueWithoutTradeInput[]
    createMany?: TradeSnapshotCreateManyTradeInputEnvelope
    set?: TradeSnapshotWhereUniqueInput | TradeSnapshotWhereUniqueInput[]
    disconnect?: TradeSnapshotWhereUniqueInput | TradeSnapshotWhereUniqueInput[]
    delete?: TradeSnapshotWhereUniqueInput | TradeSnapshotWhereUniqueInput[]
    connect?: TradeSnapshotWhereUniqueInput | TradeSnapshotWhereUniqueInput[]
    update?: TradeSnapshotUpdateWithWhereUniqueWithoutTradeInput | TradeSnapshotUpdateWithWhereUniqueWithoutTradeInput[]
    updateMany?: TradeSnapshotUpdateManyWithWhereWithoutTradeInput | TradeSnapshotUpdateManyWithWhereWithoutTradeInput[]
    deleteMany?: TradeSnapshotScalarWhereInput | TradeSnapshotScalarWhereInput[]
  }

  export type TradeSnapshotUncheckedUpdateManyWithoutTradeNestedInput = {
    create?: XOR<TradeSnapshotCreateWithoutTradeInput, TradeSnapshotUncheckedCreateWithoutTradeInput> | TradeSnapshotCreateWithoutTradeInput[] | TradeSnapshotUncheckedCreateWithoutTradeInput[]
    connectOrCreate?: TradeSnapshotCreateOrConnectWithoutTradeInput | TradeSnapshotCreateOrConnectWithoutTradeInput[]
    upsert?: TradeSnapshotUpsertWithWhereUniqueWithoutTradeInput | TradeSnapshotUpsertWithWhereUniqueWithoutTradeInput[]
    createMany?: TradeSnapshotCreateManyTradeInputEnvelope
    set?: TradeSnapshotWhereUniqueInput | TradeSnapshotWhereUniqueInput[]
    disconnect?: TradeSnapshotWhereUniqueInput | TradeSnapshotWhereUniqueInput[]
    delete?: TradeSnapshotWhereUniqueInput | TradeSnapshotWhereUniqueInput[]
    connect?: TradeSnapshotWhereUniqueInput | TradeSnapshotWhereUniqueInput[]
    update?: TradeSnapshotUpdateWithWhereUniqueWithoutTradeInput | TradeSnapshotUpdateWithWhereUniqueWithoutTradeInput[]
    updateMany?: TradeSnapshotUpdateManyWithWhereWithoutTradeInput | TradeSnapshotUpdateManyWithWhereWithoutTradeInput[]
    deleteMany?: TradeSnapshotScalarWhereInput | TradeSnapshotScalarWhereInput[]
  }

  export type TradeCreateNestedOneWithoutSnapshotsInput = {
    create?: XOR<TradeCreateWithoutSnapshotsInput, TradeUncheckedCreateWithoutSnapshotsInput>
    connectOrCreate?: TradeCreateOrConnectWithoutSnapshotsInput
    connect?: TradeWhereUniqueInput
  }

  export type TradeUpdateOneRequiredWithoutSnapshotsNestedInput = {
    create?: XOR<TradeCreateWithoutSnapshotsInput, TradeUncheckedCreateWithoutSnapshotsInput>
    connectOrCreate?: TradeCreateOrConnectWithoutSnapshotsInput
    upsert?: TradeUpsertWithoutSnapshotsInput
    connect?: TradeWhereUniqueInput
    update?: XOR<XOR<TradeUpdateToOneWithWhereWithoutSnapshotsInput, TradeUpdateWithoutSnapshotsInput>, TradeUncheckedUpdateWithoutSnapshotsInput>
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumFundTxTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.FundTxType | EnumFundTxTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FundTxType[] | ListEnumFundTxTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.FundTxType[] | ListEnumFundTxTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumFundTxTypeFilter<$PrismaModel> | $Enums.FundTxType
  }

  export type NestedEnumFundTxTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FundTxType | EnumFundTxTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FundTxType[] | ListEnumFundTxTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.FundTxType[] | ListEnumFundTxTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumFundTxTypeWithAggregatesFilter<$PrismaModel> | $Enums.FundTxType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFundTxTypeFilter<$PrismaModel>
    _max?: NestedEnumFundTxTypeFilter<$PrismaModel>
  }

  export type NestedEnumSuggestionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SuggestionStatus | EnumSuggestionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SuggestionStatus[] | ListEnumSuggestionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SuggestionStatus[] | ListEnumSuggestionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSuggestionStatusFilter<$PrismaModel> | $Enums.SuggestionStatus
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedEnumSuggestionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SuggestionStatus | EnumSuggestionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SuggestionStatus[] | ListEnumSuggestionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SuggestionStatus[] | ListEnumSuggestionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSuggestionStatusWithAggregatesFilter<$PrismaModel> | $Enums.SuggestionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSuggestionStatusFilter<$PrismaModel>
    _max?: NestedEnumSuggestionStatusFilter<$PrismaModel>
  }

  export type NestedEnumTradeStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TradeStatus | EnumTradeStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TradeStatus[] | ListEnumTradeStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TradeStatus[] | ListEnumTradeStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTradeStatusFilter<$PrismaModel> | $Enums.TradeStatus
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

  export type NestedEnumTradeStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TradeStatus | EnumTradeStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TradeStatus[] | ListEnumTradeStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TradeStatus[] | ListEnumTradeStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTradeStatusWithAggregatesFilter<$PrismaModel> | $Enums.TradeStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTradeStatusFilter<$PrismaModel>
    _max?: NestedEnumTradeStatusFilter<$PrismaModel>
  }

  export type UserCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AccountCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
  }

  export type FundTransactionCreateWithoutAccountInput = {
    id?: string
    type: $Enums.FundTxType
    amount: number
    date?: Date | string
    notes?: string | null
  }

  export type FundTransactionUncheckedCreateWithoutAccountInput = {
    id?: string
    type: $Enums.FundTxType
    amount: number
    date?: Date | string
    notes?: string | null
  }

  export type FundTransactionCreateOrConnectWithoutAccountInput = {
    where: FundTransactionWhereUniqueInput
    create: XOR<FundTransactionCreateWithoutAccountInput, FundTransactionUncheckedCreateWithoutAccountInput>
  }

  export type FundTransactionCreateManyAccountInputEnvelope = {
    data: FundTransactionCreateManyAccountInput | FundTransactionCreateManyAccountInput[]
    skipDuplicates?: boolean
  }

  export type FundTransactionUpsertWithWhereUniqueWithoutAccountInput = {
    where: FundTransactionWhereUniqueInput
    update: XOR<FundTransactionUpdateWithoutAccountInput, FundTransactionUncheckedUpdateWithoutAccountInput>
    create: XOR<FundTransactionCreateWithoutAccountInput, FundTransactionUncheckedCreateWithoutAccountInput>
  }

  export type FundTransactionUpdateWithWhereUniqueWithoutAccountInput = {
    where: FundTransactionWhereUniqueInput
    data: XOR<FundTransactionUpdateWithoutAccountInput, FundTransactionUncheckedUpdateWithoutAccountInput>
  }

  export type FundTransactionUpdateManyWithWhereWithoutAccountInput = {
    where: FundTransactionScalarWhereInput
    data: XOR<FundTransactionUpdateManyMutationInput, FundTransactionUncheckedUpdateManyWithoutAccountInput>
  }

  export type FundTransactionScalarWhereInput = {
    AND?: FundTransactionScalarWhereInput | FundTransactionScalarWhereInput[]
    OR?: FundTransactionScalarWhereInput[]
    NOT?: FundTransactionScalarWhereInput | FundTransactionScalarWhereInput[]
    id?: StringFilter<"FundTransaction"> | string
    accountId?: StringFilter<"FundTransaction"> | string
    type?: EnumFundTxTypeFilter<"FundTransaction"> | $Enums.FundTxType
    amount?: FloatFilter<"FundTransaction"> | number
    date?: DateTimeFilter<"FundTransaction"> | Date | string
    notes?: StringNullableFilter<"FundTransaction"> | string | null
  }

  export type FundAccountCreateWithoutTransactionsInput = {
    id?: string
    totalCapital?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FundAccountUncheckedCreateWithoutTransactionsInput = {
    id?: string
    totalCapital?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FundAccountCreateOrConnectWithoutTransactionsInput = {
    where: FundAccountWhereUniqueInput
    create: XOR<FundAccountCreateWithoutTransactionsInput, FundAccountUncheckedCreateWithoutTransactionsInput>
  }

  export type FundAccountUpsertWithoutTransactionsInput = {
    update: XOR<FundAccountUpdateWithoutTransactionsInput, FundAccountUncheckedUpdateWithoutTransactionsInput>
    create: XOR<FundAccountCreateWithoutTransactionsInput, FundAccountUncheckedCreateWithoutTransactionsInput>
    where?: FundAccountWhereInput
  }

  export type FundAccountUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: FundAccountWhereInput
    data: XOR<FundAccountUpdateWithoutTransactionsInput, FundAccountUncheckedUpdateWithoutTransactionsInput>
  }

  export type FundAccountUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalCapital?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FundAccountUncheckedUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalCapital?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SuggestionSnapshotCreateWithoutSuggestionInput = {
    id?: string
    date: Date | string
    closePrice: number
    hypoEntryPrice: number
    hypoPnlAbs: number
    hypoPnlPct: number
  }

  export type SuggestionSnapshotUncheckedCreateWithoutSuggestionInput = {
    id?: string
    date: Date | string
    closePrice: number
    hypoEntryPrice: number
    hypoPnlAbs: number
    hypoPnlPct: number
  }

  export type SuggestionSnapshotCreateOrConnectWithoutSuggestionInput = {
    where: SuggestionSnapshotWhereUniqueInput
    create: XOR<SuggestionSnapshotCreateWithoutSuggestionInput, SuggestionSnapshotUncheckedCreateWithoutSuggestionInput>
  }

  export type SuggestionSnapshotCreateManySuggestionInputEnvelope = {
    data: SuggestionSnapshotCreateManySuggestionInput | SuggestionSnapshotCreateManySuggestionInput[]
    skipDuplicates?: boolean
  }

  export type TradeCreateWithoutSuggestionInput = {
    id?: string
    ticker: string
    tickerNs: string
    name: string
    sector?: string | null
    entryPrice: number
    entryDate: Date | string
    quantity: number
    capitalDeployed: number
    exitPrice?: number | null
    exitDate?: Date | string | null
    status?: $Enums.TradeStatus
    realizedPnl?: number | null
    realizedPnlPct?: number | null
    sl?: number | null
    t1?: number | null
    t2?: number | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    snapshots?: TradeSnapshotCreateNestedManyWithoutTradeInput
  }

  export type TradeUncheckedCreateWithoutSuggestionInput = {
    id?: string
    ticker: string
    tickerNs: string
    name: string
    sector?: string | null
    entryPrice: number
    entryDate: Date | string
    quantity: number
    capitalDeployed: number
    exitPrice?: number | null
    exitDate?: Date | string | null
    status?: $Enums.TradeStatus
    realizedPnl?: number | null
    realizedPnlPct?: number | null
    sl?: number | null
    t1?: number | null
    t2?: number | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    snapshots?: TradeSnapshotUncheckedCreateNestedManyWithoutTradeInput
  }

  export type TradeCreateOrConnectWithoutSuggestionInput = {
    where: TradeWhereUniqueInput
    create: XOR<TradeCreateWithoutSuggestionInput, TradeUncheckedCreateWithoutSuggestionInput>
  }

  export type SuggestionSnapshotUpsertWithWhereUniqueWithoutSuggestionInput = {
    where: SuggestionSnapshotWhereUniqueInput
    update: XOR<SuggestionSnapshotUpdateWithoutSuggestionInput, SuggestionSnapshotUncheckedUpdateWithoutSuggestionInput>
    create: XOR<SuggestionSnapshotCreateWithoutSuggestionInput, SuggestionSnapshotUncheckedCreateWithoutSuggestionInput>
  }

  export type SuggestionSnapshotUpdateWithWhereUniqueWithoutSuggestionInput = {
    where: SuggestionSnapshotWhereUniqueInput
    data: XOR<SuggestionSnapshotUpdateWithoutSuggestionInput, SuggestionSnapshotUncheckedUpdateWithoutSuggestionInput>
  }

  export type SuggestionSnapshotUpdateManyWithWhereWithoutSuggestionInput = {
    where: SuggestionSnapshotScalarWhereInput
    data: XOR<SuggestionSnapshotUpdateManyMutationInput, SuggestionSnapshotUncheckedUpdateManyWithoutSuggestionInput>
  }

  export type SuggestionSnapshotScalarWhereInput = {
    AND?: SuggestionSnapshotScalarWhereInput | SuggestionSnapshotScalarWhereInput[]
    OR?: SuggestionSnapshotScalarWhereInput[]
    NOT?: SuggestionSnapshotScalarWhereInput | SuggestionSnapshotScalarWhereInput[]
    id?: StringFilter<"SuggestionSnapshot"> | string
    suggestionId?: StringFilter<"SuggestionSnapshot"> | string
    date?: DateTimeFilter<"SuggestionSnapshot"> | Date | string
    closePrice?: FloatFilter<"SuggestionSnapshot"> | number
    hypoEntryPrice?: FloatFilter<"SuggestionSnapshot"> | number
    hypoPnlAbs?: FloatFilter<"SuggestionSnapshot"> | number
    hypoPnlPct?: FloatFilter<"SuggestionSnapshot"> | number
  }

  export type TradeUpsertWithoutSuggestionInput = {
    update: XOR<TradeUpdateWithoutSuggestionInput, TradeUncheckedUpdateWithoutSuggestionInput>
    create: XOR<TradeCreateWithoutSuggestionInput, TradeUncheckedCreateWithoutSuggestionInput>
    where?: TradeWhereInput
  }

  export type TradeUpdateToOneWithWhereWithoutSuggestionInput = {
    where?: TradeWhereInput
    data: XOR<TradeUpdateWithoutSuggestionInput, TradeUncheckedUpdateWithoutSuggestionInput>
  }

  export type TradeUpdateWithoutSuggestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticker?: StringFieldUpdateOperationsInput | string
    tickerNs?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sector?: NullableStringFieldUpdateOperationsInput | string | null
    entryPrice?: FloatFieldUpdateOperationsInput | number
    entryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
    capitalDeployed?: FloatFieldUpdateOperationsInput | number
    exitPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    exitDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumTradeStatusFieldUpdateOperationsInput | $Enums.TradeStatus
    realizedPnl?: NullableFloatFieldUpdateOperationsInput | number | null
    realizedPnlPct?: NullableFloatFieldUpdateOperationsInput | number | null
    sl?: NullableFloatFieldUpdateOperationsInput | number | null
    t1?: NullableFloatFieldUpdateOperationsInput | number | null
    t2?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    snapshots?: TradeSnapshotUpdateManyWithoutTradeNestedInput
  }

  export type TradeUncheckedUpdateWithoutSuggestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticker?: StringFieldUpdateOperationsInput | string
    tickerNs?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sector?: NullableStringFieldUpdateOperationsInput | string | null
    entryPrice?: FloatFieldUpdateOperationsInput | number
    entryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
    capitalDeployed?: FloatFieldUpdateOperationsInput | number
    exitPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    exitDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumTradeStatusFieldUpdateOperationsInput | $Enums.TradeStatus
    realizedPnl?: NullableFloatFieldUpdateOperationsInput | number | null
    realizedPnlPct?: NullableFloatFieldUpdateOperationsInput | number | null
    sl?: NullableFloatFieldUpdateOperationsInput | number | null
    t1?: NullableFloatFieldUpdateOperationsInput | number | null
    t2?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    snapshots?: TradeSnapshotUncheckedUpdateManyWithoutTradeNestedInput
  }

  export type ScreenerSuggestionCreateWithoutSnapshotsInput = {
    id?: string
    scanDate: Date | string
    ticker: string
    tickerNs: string
    name: string
    sector: string
    setupType: string
    score: number
    entryLow: number
    entryHigh: number
    sl: number
    t1: number
    t2?: number | null
    notes?: string | null
    status?: $Enums.SuggestionStatus
    createdAt?: Date | string
    trade?: TradeCreateNestedOneWithoutSuggestionInput
  }

  export type ScreenerSuggestionUncheckedCreateWithoutSnapshotsInput = {
    id?: string
    scanDate: Date | string
    ticker: string
    tickerNs: string
    name: string
    sector: string
    setupType: string
    score: number
    entryLow: number
    entryHigh: number
    sl: number
    t1: number
    t2?: number | null
    notes?: string | null
    status?: $Enums.SuggestionStatus
    createdAt?: Date | string
    trade?: TradeUncheckedCreateNestedOneWithoutSuggestionInput
  }

  export type ScreenerSuggestionCreateOrConnectWithoutSnapshotsInput = {
    where: ScreenerSuggestionWhereUniqueInput
    create: XOR<ScreenerSuggestionCreateWithoutSnapshotsInput, ScreenerSuggestionUncheckedCreateWithoutSnapshotsInput>
  }

  export type ScreenerSuggestionUpsertWithoutSnapshotsInput = {
    update: XOR<ScreenerSuggestionUpdateWithoutSnapshotsInput, ScreenerSuggestionUncheckedUpdateWithoutSnapshotsInput>
    create: XOR<ScreenerSuggestionCreateWithoutSnapshotsInput, ScreenerSuggestionUncheckedCreateWithoutSnapshotsInput>
    where?: ScreenerSuggestionWhereInput
  }

  export type ScreenerSuggestionUpdateToOneWithWhereWithoutSnapshotsInput = {
    where?: ScreenerSuggestionWhereInput
    data: XOR<ScreenerSuggestionUpdateWithoutSnapshotsInput, ScreenerSuggestionUncheckedUpdateWithoutSnapshotsInput>
  }

  export type ScreenerSuggestionUpdateWithoutSnapshotsInput = {
    id?: StringFieldUpdateOperationsInput | string
    scanDate?: DateTimeFieldUpdateOperationsInput | Date | string
    ticker?: StringFieldUpdateOperationsInput | string
    tickerNs?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sector?: StringFieldUpdateOperationsInput | string
    setupType?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    entryLow?: FloatFieldUpdateOperationsInput | number
    entryHigh?: FloatFieldUpdateOperationsInput | number
    sl?: FloatFieldUpdateOperationsInput | number
    t1?: FloatFieldUpdateOperationsInput | number
    t2?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSuggestionStatusFieldUpdateOperationsInput | $Enums.SuggestionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trade?: TradeUpdateOneWithoutSuggestionNestedInput
  }

  export type ScreenerSuggestionUncheckedUpdateWithoutSnapshotsInput = {
    id?: StringFieldUpdateOperationsInput | string
    scanDate?: DateTimeFieldUpdateOperationsInput | Date | string
    ticker?: StringFieldUpdateOperationsInput | string
    tickerNs?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sector?: StringFieldUpdateOperationsInput | string
    setupType?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    entryLow?: FloatFieldUpdateOperationsInput | number
    entryHigh?: FloatFieldUpdateOperationsInput | number
    sl?: FloatFieldUpdateOperationsInput | number
    t1?: FloatFieldUpdateOperationsInput | number
    t2?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSuggestionStatusFieldUpdateOperationsInput | $Enums.SuggestionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trade?: TradeUncheckedUpdateOneWithoutSuggestionNestedInput
  }

  export type ScreenerSuggestionCreateWithoutTradeInput = {
    id?: string
    scanDate: Date | string
    ticker: string
    tickerNs: string
    name: string
    sector: string
    setupType: string
    score: number
    entryLow: number
    entryHigh: number
    sl: number
    t1: number
    t2?: number | null
    notes?: string | null
    status?: $Enums.SuggestionStatus
    createdAt?: Date | string
    snapshots?: SuggestionSnapshotCreateNestedManyWithoutSuggestionInput
  }

  export type ScreenerSuggestionUncheckedCreateWithoutTradeInput = {
    id?: string
    scanDate: Date | string
    ticker: string
    tickerNs: string
    name: string
    sector: string
    setupType: string
    score: number
    entryLow: number
    entryHigh: number
    sl: number
    t1: number
    t2?: number | null
    notes?: string | null
    status?: $Enums.SuggestionStatus
    createdAt?: Date | string
    snapshots?: SuggestionSnapshotUncheckedCreateNestedManyWithoutSuggestionInput
  }

  export type ScreenerSuggestionCreateOrConnectWithoutTradeInput = {
    where: ScreenerSuggestionWhereUniqueInput
    create: XOR<ScreenerSuggestionCreateWithoutTradeInput, ScreenerSuggestionUncheckedCreateWithoutTradeInput>
  }

  export type TradeSnapshotCreateWithoutTradeInput = {
    id?: string
    date: Date | string
    closePrice: number
    unrealizedPnl: number
    unrealizedPnlPct: number
  }

  export type TradeSnapshotUncheckedCreateWithoutTradeInput = {
    id?: string
    date: Date | string
    closePrice: number
    unrealizedPnl: number
    unrealizedPnlPct: number
  }

  export type TradeSnapshotCreateOrConnectWithoutTradeInput = {
    where: TradeSnapshotWhereUniqueInput
    create: XOR<TradeSnapshotCreateWithoutTradeInput, TradeSnapshotUncheckedCreateWithoutTradeInput>
  }

  export type TradeSnapshotCreateManyTradeInputEnvelope = {
    data: TradeSnapshotCreateManyTradeInput | TradeSnapshotCreateManyTradeInput[]
    skipDuplicates?: boolean
  }

  export type ScreenerSuggestionUpsertWithoutTradeInput = {
    update: XOR<ScreenerSuggestionUpdateWithoutTradeInput, ScreenerSuggestionUncheckedUpdateWithoutTradeInput>
    create: XOR<ScreenerSuggestionCreateWithoutTradeInput, ScreenerSuggestionUncheckedCreateWithoutTradeInput>
    where?: ScreenerSuggestionWhereInput
  }

  export type ScreenerSuggestionUpdateToOneWithWhereWithoutTradeInput = {
    where?: ScreenerSuggestionWhereInput
    data: XOR<ScreenerSuggestionUpdateWithoutTradeInput, ScreenerSuggestionUncheckedUpdateWithoutTradeInput>
  }

  export type ScreenerSuggestionUpdateWithoutTradeInput = {
    id?: StringFieldUpdateOperationsInput | string
    scanDate?: DateTimeFieldUpdateOperationsInput | Date | string
    ticker?: StringFieldUpdateOperationsInput | string
    tickerNs?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sector?: StringFieldUpdateOperationsInput | string
    setupType?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    entryLow?: FloatFieldUpdateOperationsInput | number
    entryHigh?: FloatFieldUpdateOperationsInput | number
    sl?: FloatFieldUpdateOperationsInput | number
    t1?: FloatFieldUpdateOperationsInput | number
    t2?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSuggestionStatusFieldUpdateOperationsInput | $Enums.SuggestionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    snapshots?: SuggestionSnapshotUpdateManyWithoutSuggestionNestedInput
  }

  export type ScreenerSuggestionUncheckedUpdateWithoutTradeInput = {
    id?: StringFieldUpdateOperationsInput | string
    scanDate?: DateTimeFieldUpdateOperationsInput | Date | string
    ticker?: StringFieldUpdateOperationsInput | string
    tickerNs?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sector?: StringFieldUpdateOperationsInput | string
    setupType?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    entryLow?: FloatFieldUpdateOperationsInput | number
    entryHigh?: FloatFieldUpdateOperationsInput | number
    sl?: FloatFieldUpdateOperationsInput | number
    t1?: FloatFieldUpdateOperationsInput | number
    t2?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSuggestionStatusFieldUpdateOperationsInput | $Enums.SuggestionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    snapshots?: SuggestionSnapshotUncheckedUpdateManyWithoutSuggestionNestedInput
  }

  export type TradeSnapshotUpsertWithWhereUniqueWithoutTradeInput = {
    where: TradeSnapshotWhereUniqueInput
    update: XOR<TradeSnapshotUpdateWithoutTradeInput, TradeSnapshotUncheckedUpdateWithoutTradeInput>
    create: XOR<TradeSnapshotCreateWithoutTradeInput, TradeSnapshotUncheckedCreateWithoutTradeInput>
  }

  export type TradeSnapshotUpdateWithWhereUniqueWithoutTradeInput = {
    where: TradeSnapshotWhereUniqueInput
    data: XOR<TradeSnapshotUpdateWithoutTradeInput, TradeSnapshotUncheckedUpdateWithoutTradeInput>
  }

  export type TradeSnapshotUpdateManyWithWhereWithoutTradeInput = {
    where: TradeSnapshotScalarWhereInput
    data: XOR<TradeSnapshotUpdateManyMutationInput, TradeSnapshotUncheckedUpdateManyWithoutTradeInput>
  }

  export type TradeSnapshotScalarWhereInput = {
    AND?: TradeSnapshotScalarWhereInput | TradeSnapshotScalarWhereInput[]
    OR?: TradeSnapshotScalarWhereInput[]
    NOT?: TradeSnapshotScalarWhereInput | TradeSnapshotScalarWhereInput[]
    id?: StringFilter<"TradeSnapshot"> | string
    tradeId?: StringFilter<"TradeSnapshot"> | string
    date?: DateTimeFilter<"TradeSnapshot"> | Date | string
    closePrice?: FloatFilter<"TradeSnapshot"> | number
    unrealizedPnl?: FloatFilter<"TradeSnapshot"> | number
    unrealizedPnlPct?: FloatFilter<"TradeSnapshot"> | number
  }

  export type TradeCreateWithoutSnapshotsInput = {
    id?: string
    ticker: string
    tickerNs: string
    name: string
    sector?: string | null
    entryPrice: number
    entryDate: Date | string
    quantity: number
    capitalDeployed: number
    exitPrice?: number | null
    exitDate?: Date | string | null
    status?: $Enums.TradeStatus
    realizedPnl?: number | null
    realizedPnlPct?: number | null
    sl?: number | null
    t1?: number | null
    t2?: number | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    suggestion?: ScreenerSuggestionCreateNestedOneWithoutTradeInput
  }

  export type TradeUncheckedCreateWithoutSnapshotsInput = {
    id?: string
    suggestionId?: string | null
    ticker: string
    tickerNs: string
    name: string
    sector?: string | null
    entryPrice: number
    entryDate: Date | string
    quantity: number
    capitalDeployed: number
    exitPrice?: number | null
    exitDate?: Date | string | null
    status?: $Enums.TradeStatus
    realizedPnl?: number | null
    realizedPnlPct?: number | null
    sl?: number | null
    t1?: number | null
    t2?: number | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TradeCreateOrConnectWithoutSnapshotsInput = {
    where: TradeWhereUniqueInput
    create: XOR<TradeCreateWithoutSnapshotsInput, TradeUncheckedCreateWithoutSnapshotsInput>
  }

  export type TradeUpsertWithoutSnapshotsInput = {
    update: XOR<TradeUpdateWithoutSnapshotsInput, TradeUncheckedUpdateWithoutSnapshotsInput>
    create: XOR<TradeCreateWithoutSnapshotsInput, TradeUncheckedCreateWithoutSnapshotsInput>
    where?: TradeWhereInput
  }

  export type TradeUpdateToOneWithWhereWithoutSnapshotsInput = {
    where?: TradeWhereInput
    data: XOR<TradeUpdateWithoutSnapshotsInput, TradeUncheckedUpdateWithoutSnapshotsInput>
  }

  export type TradeUpdateWithoutSnapshotsInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticker?: StringFieldUpdateOperationsInput | string
    tickerNs?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sector?: NullableStringFieldUpdateOperationsInput | string | null
    entryPrice?: FloatFieldUpdateOperationsInput | number
    entryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
    capitalDeployed?: FloatFieldUpdateOperationsInput | number
    exitPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    exitDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumTradeStatusFieldUpdateOperationsInput | $Enums.TradeStatus
    realizedPnl?: NullableFloatFieldUpdateOperationsInput | number | null
    realizedPnlPct?: NullableFloatFieldUpdateOperationsInput | number | null
    sl?: NullableFloatFieldUpdateOperationsInput | number | null
    t1?: NullableFloatFieldUpdateOperationsInput | number | null
    t2?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    suggestion?: ScreenerSuggestionUpdateOneWithoutTradeNestedInput
  }

  export type TradeUncheckedUpdateWithoutSnapshotsInput = {
    id?: StringFieldUpdateOperationsInput | string
    suggestionId?: NullableStringFieldUpdateOperationsInput | string | null
    ticker?: StringFieldUpdateOperationsInput | string
    tickerNs?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sector?: NullableStringFieldUpdateOperationsInput | string | null
    entryPrice?: FloatFieldUpdateOperationsInput | number
    entryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
    capitalDeployed?: FloatFieldUpdateOperationsInput | number
    exitPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    exitDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumTradeStatusFieldUpdateOperationsInput | $Enums.TradeStatus
    realizedPnl?: NullableFloatFieldUpdateOperationsInput | number | null
    realizedPnlPct?: NullableFloatFieldUpdateOperationsInput | number | null
    sl?: NullableFloatFieldUpdateOperationsInput | number | null
    t1?: NullableFloatFieldUpdateOperationsInput | number | null
    t2?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateManyUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type SessionCreateManyUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FundTransactionCreateManyAccountInput = {
    id?: string
    type: $Enums.FundTxType
    amount: number
    date?: Date | string
    notes?: string | null
  }

  export type FundTransactionUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumFundTxTypeFieldUpdateOperationsInput | $Enums.FundTxType
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FundTransactionUncheckedUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumFundTxTypeFieldUpdateOperationsInput | $Enums.FundTxType
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FundTransactionUncheckedUpdateManyWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumFundTxTypeFieldUpdateOperationsInput | $Enums.FundTxType
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SuggestionSnapshotCreateManySuggestionInput = {
    id?: string
    date: Date | string
    closePrice: number
    hypoEntryPrice: number
    hypoPnlAbs: number
    hypoPnlPct: number
  }

  export type SuggestionSnapshotUpdateWithoutSuggestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    closePrice?: FloatFieldUpdateOperationsInput | number
    hypoEntryPrice?: FloatFieldUpdateOperationsInput | number
    hypoPnlAbs?: FloatFieldUpdateOperationsInput | number
    hypoPnlPct?: FloatFieldUpdateOperationsInput | number
  }

  export type SuggestionSnapshotUncheckedUpdateWithoutSuggestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    closePrice?: FloatFieldUpdateOperationsInput | number
    hypoEntryPrice?: FloatFieldUpdateOperationsInput | number
    hypoPnlAbs?: FloatFieldUpdateOperationsInput | number
    hypoPnlPct?: FloatFieldUpdateOperationsInput | number
  }

  export type SuggestionSnapshotUncheckedUpdateManyWithoutSuggestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    closePrice?: FloatFieldUpdateOperationsInput | number
    hypoEntryPrice?: FloatFieldUpdateOperationsInput | number
    hypoPnlAbs?: FloatFieldUpdateOperationsInput | number
    hypoPnlPct?: FloatFieldUpdateOperationsInput | number
  }

  export type TradeSnapshotCreateManyTradeInput = {
    id?: string
    date: Date | string
    closePrice: number
    unrealizedPnl: number
    unrealizedPnlPct: number
  }

  export type TradeSnapshotUpdateWithoutTradeInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    closePrice?: FloatFieldUpdateOperationsInput | number
    unrealizedPnl?: FloatFieldUpdateOperationsInput | number
    unrealizedPnlPct?: FloatFieldUpdateOperationsInput | number
  }

  export type TradeSnapshotUncheckedUpdateWithoutTradeInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    closePrice?: FloatFieldUpdateOperationsInput | number
    unrealizedPnl?: FloatFieldUpdateOperationsInput | number
    unrealizedPnlPct?: FloatFieldUpdateOperationsInput | number
  }

  export type TradeSnapshotUncheckedUpdateManyWithoutTradeInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    closePrice?: FloatFieldUpdateOperationsInput | number
    unrealizedPnl?: FloatFieldUpdateOperationsInput | number
    unrealizedPnlPct?: FloatFieldUpdateOperationsInput | number
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