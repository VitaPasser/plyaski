import { ClassType } from "type-graphql";
import * as tslib from "tslib";
import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import * as argsTypes from "./resolvers/crud/args.index";
import * as actionResolvers from "./resolvers/crud/resolvers-actions.index";
import * as relationResolvers from "./resolvers/relations/resolvers.index";
import * as models from "./models";
import * as outputTypes from "./resolvers/outputs";
import * as inputTypes from "./resolvers/inputs";

export type MethodDecoratorOverrideFn = (decorators: MethodDecorator[]) => MethodDecorator[];

const crudResolversMap = {
  User: crudResolvers.UserCrudResolver,
  Event: crudResolvers.EventCrudResolver,
  TagOnEvent: crudResolvers.TagOnEventCrudResolver,
  Tag: crudResolvers.TagCrudResolver,
  Image: crudResolvers.ImageCrudResolver,
  Map: crudResolvers.MapCrudResolver
};
const actionResolversMap = {
  User: {
    aggregateUser: actionResolvers.AggregateUserResolver,
    createManyUser: actionResolvers.CreateManyUserResolver,
    createManyAndReturnUser: actionResolvers.CreateManyAndReturnUserResolver,
    createOneUser: actionResolvers.CreateOneUserResolver,
    deleteManyUser: actionResolvers.DeleteManyUserResolver,
    deleteOneUser: actionResolvers.DeleteOneUserResolver,
    findFirstUser: actionResolvers.FindFirstUserResolver,
    findFirstUserOrThrow: actionResolvers.FindFirstUserOrThrowResolver,
    users: actionResolvers.FindManyUserResolver,
    user: actionResolvers.FindUniqueUserResolver,
    getUser: actionResolvers.FindUniqueUserOrThrowResolver,
    groupByUser: actionResolvers.GroupByUserResolver,
    updateManyUser: actionResolvers.UpdateManyUserResolver,
    updateOneUser: actionResolvers.UpdateOneUserResolver,
    upsertOneUser: actionResolvers.UpsertOneUserResolver
  },
  Event: {
    aggregateEvent: actionResolvers.AggregateEventResolver,
    createManyEvent: actionResolvers.CreateManyEventResolver,
    createManyAndReturnEvent: actionResolvers.CreateManyAndReturnEventResolver,
    createOneEvent: actionResolvers.CreateOneEventResolver,
    deleteManyEvent: actionResolvers.DeleteManyEventResolver,
    deleteOneEvent: actionResolvers.DeleteOneEventResolver,
    findFirstEvent: actionResolvers.FindFirstEventResolver,
    findFirstEventOrThrow: actionResolvers.FindFirstEventOrThrowResolver,
    events: actionResolvers.FindManyEventResolver,
    event: actionResolvers.FindUniqueEventResolver,
    getEvent: actionResolvers.FindUniqueEventOrThrowResolver,
    groupByEvent: actionResolvers.GroupByEventResolver,
    updateManyEvent: actionResolvers.UpdateManyEventResolver,
    updateOneEvent: actionResolvers.UpdateOneEventResolver,
    upsertOneEvent: actionResolvers.UpsertOneEventResolver
  },
  TagOnEvent: {
    aggregateTagOnEvent: actionResolvers.AggregateTagOnEventResolver,
    createManyTagOnEvent: actionResolvers.CreateManyTagOnEventResolver,
    createManyAndReturnTagOnEvent: actionResolvers.CreateManyAndReturnTagOnEventResolver,
    createOneTagOnEvent: actionResolvers.CreateOneTagOnEventResolver,
    deleteManyTagOnEvent: actionResolvers.DeleteManyTagOnEventResolver,
    deleteOneTagOnEvent: actionResolvers.DeleteOneTagOnEventResolver,
    findFirstTagOnEvent: actionResolvers.FindFirstTagOnEventResolver,
    findFirstTagOnEventOrThrow: actionResolvers.FindFirstTagOnEventOrThrowResolver,
    tagOnEvents: actionResolvers.FindManyTagOnEventResolver,
    tagOnEvent: actionResolvers.FindUniqueTagOnEventResolver,
    getTagOnEvent: actionResolvers.FindUniqueTagOnEventOrThrowResolver,
    groupByTagOnEvent: actionResolvers.GroupByTagOnEventResolver,
    updateManyTagOnEvent: actionResolvers.UpdateManyTagOnEventResolver,
    updateOneTagOnEvent: actionResolvers.UpdateOneTagOnEventResolver,
    upsertOneTagOnEvent: actionResolvers.UpsertOneTagOnEventResolver
  },
  Tag: {
    aggregateTag: actionResolvers.AggregateTagResolver,
    createManyTag: actionResolvers.CreateManyTagResolver,
    createManyAndReturnTag: actionResolvers.CreateManyAndReturnTagResolver,
    createOneTag: actionResolvers.CreateOneTagResolver,
    deleteManyTag: actionResolvers.DeleteManyTagResolver,
    deleteOneTag: actionResolvers.DeleteOneTagResolver,
    findFirstTag: actionResolvers.FindFirstTagResolver,
    findFirstTagOrThrow: actionResolvers.FindFirstTagOrThrowResolver,
    tags: actionResolvers.FindManyTagResolver,
    tag: actionResolvers.FindUniqueTagResolver,
    getTag: actionResolvers.FindUniqueTagOrThrowResolver,
    groupByTag: actionResolvers.GroupByTagResolver,
    updateManyTag: actionResolvers.UpdateManyTagResolver,
    updateOneTag: actionResolvers.UpdateOneTagResolver,
    upsertOneTag: actionResolvers.UpsertOneTagResolver
  },
  Image: {
    aggregateImage: actionResolvers.AggregateImageResolver,
    createManyImage: actionResolvers.CreateManyImageResolver,
    createManyAndReturnImage: actionResolvers.CreateManyAndReturnImageResolver,
    createOneImage: actionResolvers.CreateOneImageResolver,
    deleteManyImage: actionResolvers.DeleteManyImageResolver,
    deleteOneImage: actionResolvers.DeleteOneImageResolver,
    findFirstImage: actionResolvers.FindFirstImageResolver,
    findFirstImageOrThrow: actionResolvers.FindFirstImageOrThrowResolver,
    images: actionResolvers.FindManyImageResolver,
    image: actionResolvers.FindUniqueImageResolver,
    getImage: actionResolvers.FindUniqueImageOrThrowResolver,
    groupByImage: actionResolvers.GroupByImageResolver,
    updateManyImage: actionResolvers.UpdateManyImageResolver,
    updateOneImage: actionResolvers.UpdateOneImageResolver,
    upsertOneImage: actionResolvers.UpsertOneImageResolver
  },
  Map: {
    aggregateMap: actionResolvers.AggregateMapResolver,
    createManyMap: actionResolvers.CreateManyMapResolver,
    createManyAndReturnMap: actionResolvers.CreateManyAndReturnMapResolver,
    createOneMap: actionResolvers.CreateOneMapResolver,
    deleteManyMap: actionResolvers.DeleteManyMapResolver,
    deleteOneMap: actionResolvers.DeleteOneMapResolver,
    findFirstMap: actionResolvers.FindFirstMapResolver,
    findFirstMapOrThrow: actionResolvers.FindFirstMapOrThrowResolver,
    maps: actionResolvers.FindManyMapResolver,
    map: actionResolvers.FindUniqueMapResolver,
    getMap: actionResolvers.FindUniqueMapOrThrowResolver,
    groupByMap: actionResolvers.GroupByMapResolver,
    updateManyMap: actionResolvers.UpdateManyMapResolver,
    updateOneMap: actionResolvers.UpdateOneMapResolver,
    upsertOneMap: actionResolvers.UpsertOneMapResolver
  }
};
const crudResolversInfo = {
  User: ["aggregateUser", "createManyUser", "createManyAndReturnUser", "createOneUser", "deleteManyUser", "deleteOneUser", "findFirstUser", "findFirstUserOrThrow", "users", "user", "getUser", "groupByUser", "updateManyUser", "updateOneUser", "upsertOneUser"],
  Event: ["aggregateEvent", "createManyEvent", "createManyAndReturnEvent", "createOneEvent", "deleteManyEvent", "deleteOneEvent", "findFirstEvent", "findFirstEventOrThrow", "events", "event", "getEvent", "groupByEvent", "updateManyEvent", "updateOneEvent", "upsertOneEvent"],
  TagOnEvent: ["aggregateTagOnEvent", "createManyTagOnEvent", "createManyAndReturnTagOnEvent", "createOneTagOnEvent", "deleteManyTagOnEvent", "deleteOneTagOnEvent", "findFirstTagOnEvent", "findFirstTagOnEventOrThrow", "tagOnEvents", "tagOnEvent", "getTagOnEvent", "groupByTagOnEvent", "updateManyTagOnEvent", "updateOneTagOnEvent", "upsertOneTagOnEvent"],
  Tag: ["aggregateTag", "createManyTag", "createManyAndReturnTag", "createOneTag", "deleteManyTag", "deleteOneTag", "findFirstTag", "findFirstTagOrThrow", "tags", "tag", "getTag", "groupByTag", "updateManyTag", "updateOneTag", "upsertOneTag"],
  Image: ["aggregateImage", "createManyImage", "createManyAndReturnImage", "createOneImage", "deleteManyImage", "deleteOneImage", "findFirstImage", "findFirstImageOrThrow", "images", "image", "getImage", "groupByImage", "updateManyImage", "updateOneImage", "upsertOneImage"],
  Map: ["aggregateMap", "createManyMap", "createManyAndReturnMap", "createOneMap", "deleteManyMap", "deleteOneMap", "findFirstMap", "findFirstMapOrThrow", "maps", "map", "getMap", "groupByMap", "updateManyMap", "updateOneMap", "upsertOneMap"]
};
const argsInfo = {
  AggregateUserArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyUserArgs: ["data", "skipDuplicates"],
  CreateManyAndReturnUserArgs: ["data", "skipDuplicates"],
  CreateOneUserArgs: ["data"],
  DeleteManyUserArgs: ["where"],
  DeleteOneUserArgs: ["where"],
  FindFirstUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstUserOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueUserArgs: ["where"],
  FindUniqueUserOrThrowArgs: ["where"],
  GroupByUserArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyUserArgs: ["data", "where"],
  UpdateOneUserArgs: ["data", "where"],
  UpsertOneUserArgs: ["where", "create", "update"],
  AggregateEventArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyEventArgs: ["data", "skipDuplicates"],
  CreateManyAndReturnEventArgs: ["data", "skipDuplicates"],
  CreateOneEventArgs: ["data"],
  DeleteManyEventArgs: ["where"],
  DeleteOneEventArgs: ["where"],
  FindFirstEventArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstEventOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyEventArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueEventArgs: ["where"],
  FindUniqueEventOrThrowArgs: ["where"],
  GroupByEventArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyEventArgs: ["data", "where"],
  UpdateOneEventArgs: ["data", "where"],
  UpsertOneEventArgs: ["where", "create", "update"],
  AggregateTagOnEventArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyTagOnEventArgs: ["data", "skipDuplicates"],
  CreateManyAndReturnTagOnEventArgs: ["data", "skipDuplicates"],
  CreateOneTagOnEventArgs: ["data"],
  DeleteManyTagOnEventArgs: ["where"],
  DeleteOneTagOnEventArgs: ["where"],
  FindFirstTagOnEventArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstTagOnEventOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyTagOnEventArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueTagOnEventArgs: ["where"],
  FindUniqueTagOnEventOrThrowArgs: ["where"],
  GroupByTagOnEventArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyTagOnEventArgs: ["data", "where"],
  UpdateOneTagOnEventArgs: ["data", "where"],
  UpsertOneTagOnEventArgs: ["where", "create", "update"],
  AggregateTagArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyTagArgs: ["data", "skipDuplicates"],
  CreateManyAndReturnTagArgs: ["data", "skipDuplicates"],
  CreateOneTagArgs: ["data"],
  DeleteManyTagArgs: ["where"],
  DeleteOneTagArgs: ["where"],
  FindFirstTagArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstTagOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyTagArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueTagArgs: ["where"],
  FindUniqueTagOrThrowArgs: ["where"],
  GroupByTagArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyTagArgs: ["data", "where"],
  UpdateOneTagArgs: ["data", "where"],
  UpsertOneTagArgs: ["where", "create", "update"],
  AggregateImageArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyImageArgs: ["data", "skipDuplicates"],
  CreateManyAndReturnImageArgs: ["data", "skipDuplicates"],
  CreateOneImageArgs: ["data"],
  DeleteManyImageArgs: ["where"],
  DeleteOneImageArgs: ["where"],
  FindFirstImageArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstImageOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyImageArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueImageArgs: ["where"],
  FindUniqueImageOrThrowArgs: ["where"],
  GroupByImageArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyImageArgs: ["data", "where"],
  UpdateOneImageArgs: ["data", "where"],
  UpsertOneImageArgs: ["where", "create", "update"],
  AggregateMapArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyMapArgs: ["data", "skipDuplicates"],
  CreateManyAndReturnMapArgs: ["data", "skipDuplicates"],
  CreateOneMapArgs: ["data"],
  DeleteManyMapArgs: ["where"],
  DeleteOneMapArgs: ["where"],
  FindFirstMapArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstMapOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyMapArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueMapArgs: ["where"],
  FindUniqueMapOrThrowArgs: ["where"],
  GroupByMapArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyMapArgs: ["data", "where"],
  UpdateOneMapArgs: ["data", "where"],
  UpsertOneMapArgs: ["where", "create", "update"]
};

type ResolverModelNames = keyof typeof crudResolversMap;

type ModelResolverActionNames<
  TModel extends ResolverModelNames
> = keyof typeof crudResolversMap[TModel]["prototype"];

export type ResolverActionsConfig<
  TModel extends ResolverModelNames
> = Partial<Record<ModelResolverActionNames<TModel>, MethodDecorator[] | MethodDecoratorOverrideFn>>
  & {
    _all?: MethodDecorator[];
    _query?: MethodDecorator[];
    _mutation?: MethodDecorator[];
  };

export type ResolversEnhanceMap = {
  [TModel in ResolverModelNames]?: ResolverActionsConfig<TModel>;
};

export function applyResolversEnhanceMap(
  resolversEnhanceMap: ResolversEnhanceMap,
) {
  const mutationOperationPrefixes = [
    "createOne", "createMany", "createManyAndReturn", "deleteOne", "updateOne", "deleteMany", "updateMany", "upsertOne"
  ];
  for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
    const modelName = resolversEnhanceMapKey as keyof typeof resolversEnhanceMap;
    const crudTarget = crudResolversMap[modelName].prototype;
    const resolverActionsConfig = resolversEnhanceMap[modelName]!;
    const actionResolversConfig = actionResolversMap[modelName];
    const allActionsDecorators = resolverActionsConfig._all;
    const resolverActionNames = crudResolversInfo[modelName as keyof typeof crudResolversInfo];
    for (const resolverActionName of resolverActionNames) {
      const maybeDecoratorsOrFn = resolverActionsConfig[
        resolverActionName as keyof typeof resolverActionsConfig
      ] as MethodDecorator[] | MethodDecoratorOverrideFn | undefined;
      const isWriteOperation = mutationOperationPrefixes.some(prefix => resolverActionName.startsWith(prefix));
      const operationKindDecorators = isWriteOperation ? resolverActionsConfig._mutation : resolverActionsConfig._query;
      const mainDecorators = [
        ...allActionsDecorators ?? [],
        ...operationKindDecorators ?? [],
      ]
      let decorators: MethodDecorator[];
      if (typeof maybeDecoratorsOrFn === "function") {
        decorators = maybeDecoratorsOrFn(mainDecorators);
      } else {
        decorators = [...mainDecorators, ...maybeDecoratorsOrFn ?? []];
      }
      const actionTarget = (actionResolversConfig[
        resolverActionName as keyof typeof actionResolversConfig
      ] as Function).prototype;
      tslib.__decorate(decorators, crudTarget, resolverActionName, null);
      tslib.__decorate(decorators, actionTarget, resolverActionName, null);
    }
  }
}

type ArgsTypesNames = keyof typeof argsTypes;

type ArgFieldNames<TArgsType extends ArgsTypesNames> = Exclude<
  keyof typeof argsTypes[TArgsType]["prototype"],
  number | symbol
>;

type ArgFieldsConfig<
  TArgsType extends ArgsTypesNames
> = FieldsConfig<ArgFieldNames<TArgsType>>;

export type ArgConfig<TArgsType extends ArgsTypesNames> = {
  class?: ClassDecorator[];
  fields?: ArgFieldsConfig<TArgsType>;
};

export type ArgsTypesEnhanceMap = {
  [TArgsType in ArgsTypesNames]?: ArgConfig<TArgsType>;
};

export function applyArgsTypesEnhanceMap(
  argsTypesEnhanceMap: ArgsTypesEnhanceMap,
) {
  for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
    const argsTypeName = argsTypesEnhanceMapKey as keyof typeof argsTypesEnhanceMap;
    const typeConfig = argsTypesEnhanceMap[argsTypeName]!;
    const typeClass = argsTypes[argsTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      argsInfo[argsTypeName as keyof typeof argsInfo],
    );
  }
}

const relationResolversMap = {
  Event: relationResolvers.EventRelationsResolver,
  TagOnEvent: relationResolvers.TagOnEventRelationsResolver,
  Tag: relationResolvers.TagRelationsResolver,
  Image: relationResolvers.ImageRelationsResolver,
  Map: relationResolvers.MapRelationsResolver
};
const relationResolversInfo = {
  Event: ["tags", "image", "map"],
  TagOnEvent: ["event", "tag"],
  Tag: ["Event"],
  Image: ["Event"],
  Map: ["Event"]
};

type RelationResolverModelNames = keyof typeof relationResolversMap;

type RelationResolverActionNames<
  TModel extends RelationResolverModelNames
> = keyof typeof relationResolversMap[TModel]["prototype"];

export type RelationResolverActionsConfig<TModel extends RelationResolverModelNames>
  = Partial<Record<RelationResolverActionNames<TModel>, MethodDecorator[] | MethodDecoratorOverrideFn>>
  & { _all?: MethodDecorator[] };

export type RelationResolversEnhanceMap = {
  [TModel in RelationResolverModelNames]?: RelationResolverActionsConfig<TModel>;
};

export function applyRelationResolversEnhanceMap(
  relationResolversEnhanceMap: RelationResolversEnhanceMap,
) {
  for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
    const modelName = relationResolversEnhanceMapKey as keyof typeof relationResolversEnhanceMap;
    const relationResolverTarget = relationResolversMap[modelName].prototype;
    const relationResolverActionsConfig = relationResolversEnhanceMap[modelName]!;
    const allActionsDecorators = relationResolverActionsConfig._all ?? [];
    const relationResolverActionNames = relationResolversInfo[modelName as keyof typeof relationResolversInfo];
    for (const relationResolverActionName of relationResolverActionNames) {
      const maybeDecoratorsOrFn = relationResolverActionsConfig[
        relationResolverActionName as keyof typeof relationResolverActionsConfig
      ] as MethodDecorator[] | MethodDecoratorOverrideFn | undefined;
      let decorators: MethodDecorator[];
      if (typeof maybeDecoratorsOrFn === "function") {
        decorators = maybeDecoratorsOrFn(allActionsDecorators);
      } else {
        decorators = [...allActionsDecorators, ...maybeDecoratorsOrFn ?? []];
      }
      tslib.__decorate(decorators, relationResolverTarget, relationResolverActionName, null);
    }
  }
}

type TypeConfig = {
  class?: ClassDecorator[];
  fields?: FieldsConfig;
};

export type PropertyDecoratorOverrideFn = (decorators: PropertyDecorator[]) => PropertyDecorator[];

type FieldsConfig<TTypeKeys extends string = string> = Partial<
  Record<TTypeKeys, PropertyDecorator[] | PropertyDecoratorOverrideFn>
> & { _all?: PropertyDecorator[] };

function applyTypeClassEnhanceConfig<
  TEnhanceConfig extends TypeConfig,
  TType extends object
>(
  enhanceConfig: TEnhanceConfig,
  typeClass: ClassType<TType>,
  typePrototype: TType,
  typeFieldNames: string[]
) {
  if (enhanceConfig.class) {
    tslib.__decorate(enhanceConfig.class, typeClass);
  }
  if (enhanceConfig.fields) {
    const allFieldsDecorators = enhanceConfig.fields._all ?? [];
    for (const typeFieldName of typeFieldNames) {
      const maybeDecoratorsOrFn = enhanceConfig.fields[
        typeFieldName
      ] as PropertyDecorator[] | PropertyDecoratorOverrideFn | undefined;
      let decorators: PropertyDecorator[];
      if (typeof maybeDecoratorsOrFn === "function") {
        decorators = maybeDecoratorsOrFn(allFieldsDecorators);
      } else {
        decorators = [...allFieldsDecorators, ...maybeDecoratorsOrFn ?? []];
      }
      tslib.__decorate(decorators, typePrototype, typeFieldName, void 0);
    }
  }
}

const modelsInfo = {
  User: ["id", "email", "name"],
  Event: ["id", "header", "address", "description", "content", "phone", "mapId"],
  TagOnEvent: ["eventId", "tagId", "createAt", "updateAt"],
  Tag: ["id", "name"],
  Image: ["id", "src", "eventId"],
  Map: ["id", "x", "y"]
};

type ModelNames = keyof typeof models;

type ModelFieldNames<TModel extends ModelNames> = Exclude<
  keyof typeof models[TModel]["prototype"],
  number | symbol
>;

type ModelFieldsConfig<TModel extends ModelNames> = FieldsConfig<
  ModelFieldNames<TModel>
>;

export type ModelConfig<TModel extends ModelNames> = {
  class?: ClassDecorator[];
  fields?: ModelFieldsConfig<TModel>;
};

export type ModelsEnhanceMap = {
  [TModel in ModelNames]?: ModelConfig<TModel>;
};

export function applyModelsEnhanceMap(modelsEnhanceMap: ModelsEnhanceMap) {
  for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
    const modelName = modelsEnhanceMapKey as keyof typeof modelsEnhanceMap;
    const modelConfig = modelsEnhanceMap[modelName]!;
    const modelClass = models[modelName];
    const modelTarget = modelClass.prototype;
    applyTypeClassEnhanceConfig(
      modelConfig,
      modelClass,
      modelTarget,
      modelsInfo[modelName as keyof typeof modelsInfo],
    );
  }
}

const outputsInfo = {
  AggregateUser: ["_count", "_min", "_max"],
  UserGroupBy: ["id", "email", "name", "_count", "_min", "_max"],
  AggregateEvent: ["_count", "_min", "_max"],
  EventGroupBy: ["id", "header", "address", "description", "content", "phone", "mapId", "_count", "_min", "_max"],
  AggregateTagOnEvent: ["_count", "_min", "_max"],
  TagOnEventGroupBy: ["eventId", "tagId", "createAt", "updateAt", "_count", "_min", "_max"],
  AggregateTag: ["_count", "_min", "_max"],
  TagGroupBy: ["id", "name", "_count", "_min", "_max"],
  AggregateImage: ["_count", "_min", "_max"],
  ImageGroupBy: ["id", "src", "eventId", "_count", "_min", "_max"],
  AggregateMap: ["_count", "_avg", "_sum", "_min", "_max"],
  MapGroupBy: ["id", "x", "y", "_count", "_avg", "_sum", "_min", "_max"],
  AffectedRowsOutput: ["count"],
  UserCountAggregate: ["id", "email", "name", "_all"],
  UserMinAggregate: ["id", "email", "name"],
  UserMaxAggregate: ["id", "email", "name"],
  EventCount: ["tags", "image"],
  EventCountAggregate: ["id", "header", "address", "description", "content", "phone", "mapId", "_all"],
  EventMinAggregate: ["id", "header", "address", "description", "content", "phone", "mapId"],
  EventMaxAggregate: ["id", "header", "address", "description", "content", "phone", "mapId"],
  TagOnEventCountAggregate: ["eventId", "tagId", "createAt", "updateAt", "_all"],
  TagOnEventMinAggregate: ["eventId", "tagId", "createAt", "updateAt"],
  TagOnEventMaxAggregate: ["eventId", "tagId", "createAt", "updateAt"],
  TagCount: ["Event"],
  TagCountAggregate: ["id", "name", "_all"],
  TagMinAggregate: ["id", "name"],
  TagMaxAggregate: ["id", "name"],
  ImageCountAggregate: ["id", "src", "eventId", "_all"],
  ImageMinAggregate: ["id", "src", "eventId"],
  ImageMaxAggregate: ["id", "src", "eventId"],
  MapCount: ["Event"],
  MapCountAggregate: ["id", "x", "y", "_all"],
  MapAvgAggregate: ["x", "y"],
  MapSumAggregate: ["x", "y"],
  MapMinAggregate: ["id", "x", "y"],
  MapMaxAggregate: ["id", "x", "y"],
  CreateManyAndReturnUser: ["id", "email", "name"],
  CreateManyAndReturnEvent: ["id", "header", "address", "description", "content", "phone", "mapId", "map"],
  CreateManyAndReturnTagOnEvent: ["eventId", "tagId", "createAt", "updateAt", "event", "tag"],
  CreateManyAndReturnTag: ["id", "name"],
  CreateManyAndReturnImage: ["id", "src", "eventId", "Event"],
  CreateManyAndReturnMap: ["id", "x", "y"]
};

type OutputTypesNames = keyof typeof outputTypes;

type OutputTypeFieldNames<TOutput extends OutputTypesNames> = Exclude<
  keyof typeof outputTypes[TOutput]["prototype"],
  number | symbol
>;

type OutputTypeFieldsConfig<
  TOutput extends OutputTypesNames
> = FieldsConfig<OutputTypeFieldNames<TOutput>>;

export type OutputTypeConfig<TOutput extends OutputTypesNames> = {
  class?: ClassDecorator[];
  fields?: OutputTypeFieldsConfig<TOutput>;
};

export type OutputTypesEnhanceMap = {
  [TOutput in OutputTypesNames]?: OutputTypeConfig<TOutput>;
};

export function applyOutputTypesEnhanceMap(
  outputTypesEnhanceMap: OutputTypesEnhanceMap,
) {
  for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
    const outputTypeName = outputTypeEnhanceMapKey as keyof typeof outputTypesEnhanceMap;
    const typeConfig = outputTypesEnhanceMap[outputTypeName]!;
    const typeClass = outputTypes[outputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      outputsInfo[outputTypeName as keyof typeof outputsInfo],
    );
  }
}

const inputsInfo = {
  UserWhereInput: ["AND", "OR", "NOT", "id", "email", "name"],
  UserOrderByWithRelationInput: ["id", "email", "name"],
  UserWhereUniqueInput: ["id", "email", "AND", "OR", "NOT", "name"],
  UserOrderByWithAggregationInput: ["id", "email", "name", "_count", "_max", "_min"],
  UserScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "email", "name"],
  EventWhereInput: ["AND", "OR", "NOT", "id", "header", "address", "description", "content", "phone", "mapId", "tags", "image", "map"],
  EventOrderByWithRelationInput: ["id", "header", "address", "description", "content", "phone", "mapId", "tags", "image", "map"],
  EventWhereUniqueInput: ["id", "AND", "OR", "NOT", "header", "address", "description", "content", "phone", "mapId", "tags", "image", "map"],
  EventOrderByWithAggregationInput: ["id", "header", "address", "description", "content", "phone", "mapId", "_count", "_max", "_min"],
  EventScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "header", "address", "description", "content", "phone", "mapId"],
  TagOnEventWhereInput: ["AND", "OR", "NOT", "eventId", "tagId", "createAt", "updateAt", "event", "tag"],
  TagOnEventOrderByWithRelationInput: ["eventId", "tagId", "createAt", "updateAt", "event", "tag"],
  TagOnEventWhereUniqueInput: ["eventId_tagId", "AND", "OR", "NOT", "eventId", "tagId", "createAt", "updateAt", "event", "tag"],
  TagOnEventOrderByWithAggregationInput: ["eventId", "tagId", "createAt", "updateAt", "_count", "_max", "_min"],
  TagOnEventScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "eventId", "tagId", "createAt", "updateAt"],
  TagWhereInput: ["AND", "OR", "NOT", "id", "name", "Event"],
  TagOrderByWithRelationInput: ["id", "name", "Event"],
  TagWhereUniqueInput: ["id", "AND", "OR", "NOT", "name", "Event"],
  TagOrderByWithAggregationInput: ["id", "name", "_count", "_max", "_min"],
  TagScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name"],
  ImageWhereInput: ["AND", "OR", "NOT", "id", "src", "eventId", "Event"],
  ImageOrderByWithRelationInput: ["id", "src", "eventId", "Event"],
  ImageWhereUniqueInput: ["id", "AND", "OR", "NOT", "src", "eventId", "Event"],
  ImageOrderByWithAggregationInput: ["id", "src", "eventId", "_count", "_max", "_min"],
  ImageScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "src", "eventId"],
  MapWhereInput: ["AND", "OR", "NOT", "id", "x", "y", "Event"],
  MapOrderByWithRelationInput: ["id", "x", "y", "Event"],
  MapWhereUniqueInput: ["id", "AND", "OR", "NOT", "x", "y", "Event"],
  MapOrderByWithAggregationInput: ["id", "x", "y", "_count", "_avg", "_max", "_min", "_sum"],
  MapScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "x", "y"],
  UserCreateInput: ["id", "email", "name"],
  UserUpdateInput: ["id", "email", "name"],
  UserCreateManyInput: ["id", "email", "name"],
  UserUpdateManyMutationInput: ["id", "email", "name"],
  EventCreateInput: ["id", "header", "address", "description", "content", "phone", "tags", "image", "map"],
  EventUpdateInput: ["id", "header", "address", "description", "content", "phone", "tags", "image", "map"],
  EventCreateManyInput: ["id", "header", "address", "description", "content", "phone", "mapId"],
  EventUpdateManyMutationInput: ["id", "header", "address", "description", "content", "phone"],
  TagOnEventCreateInput: ["createAt", "updateAt", "event", "tag"],
  TagOnEventUpdateInput: ["createAt", "updateAt", "event", "tag"],
  TagOnEventCreateManyInput: ["eventId", "tagId", "createAt", "updateAt"],
  TagOnEventUpdateManyMutationInput: ["createAt", "updateAt"],
  TagCreateInput: ["id", "name", "Event"],
  TagUpdateInput: ["id", "name", "Event"],
  TagCreateManyInput: ["id", "name"],
  TagUpdateManyMutationInput: ["id", "name"],
  ImageCreateInput: ["id", "src", "Event"],
  ImageUpdateInput: ["id", "src", "Event"],
  ImageCreateManyInput: ["id", "src", "eventId"],
  ImageUpdateManyMutationInput: ["id", "src"],
  MapCreateInput: ["id", "x", "y", "Event"],
  MapUpdateInput: ["id", "x", "y", "Event"],
  MapCreateManyInput: ["id", "x", "y"],
  MapUpdateManyMutationInput: ["id", "x", "y"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  SortOrderInput: ["sort", "nulls"],
  UserCountOrderByAggregateInput: ["id", "email", "name"],
  UserMaxOrderByAggregateInput: ["id", "email", "name"],
  UserMinOrderByAggregateInput: ["id", "email", "name"],
  StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  TagOnEventListRelationFilter: ["every", "some", "none"],
  ImageListRelationFilter: ["every", "some", "none"],
  MapRelationFilter: ["is", "isNot"],
  TagOnEventOrderByRelationAggregateInput: ["_count"],
  ImageOrderByRelationAggregateInput: ["_count"],
  EventCountOrderByAggregateInput: ["id", "header", "address", "description", "content", "phone", "mapId"],
  EventMaxOrderByAggregateInput: ["id", "header", "address", "description", "content", "phone", "mapId"],
  EventMinOrderByAggregateInput: ["id", "header", "address", "description", "content", "phone", "mapId"],
  DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  EventRelationFilter: ["is", "isNot"],
  TagRelationFilter: ["is", "isNot"],
  TagOnEventEventIdTagIdCompoundUniqueInput: ["eventId", "tagId"],
  TagOnEventCountOrderByAggregateInput: ["eventId", "tagId", "createAt", "updateAt"],
  TagOnEventMaxOrderByAggregateInput: ["eventId", "tagId", "createAt", "updateAt"],
  TagOnEventMinOrderByAggregateInput: ["eventId", "tagId", "createAt", "updateAt"],
  DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  TagCountOrderByAggregateInput: ["id", "name"],
  TagMaxOrderByAggregateInput: ["id", "name"],
  TagMinOrderByAggregateInput: ["id", "name"],
  EventNullableRelationFilter: ["is", "isNot"],
  ImageCountOrderByAggregateInput: ["id", "src", "eventId"],
  ImageMaxOrderByAggregateInput: ["id", "src", "eventId"],
  ImageMinOrderByAggregateInput: ["id", "src", "eventId"],
  FloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  EventListRelationFilter: ["every", "some", "none"],
  EventOrderByRelationAggregateInput: ["_count"],
  MapCountOrderByAggregateInput: ["id", "x", "y"],
  MapAvgOrderByAggregateInput: ["x", "y"],
  MapMaxOrderByAggregateInput: ["id", "x", "y"],
  MapMinOrderByAggregateInput: ["id", "x", "y"],
  MapSumOrderByAggregateInput: ["x", "y"],
  FloatWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  StringFieldUpdateOperationsInput: ["set"],
  NullableStringFieldUpdateOperationsInput: ["set"],
  TagOnEventCreateNestedManyWithoutEventInput: ["create", "connectOrCreate", "createMany", "connect"],
  ImageCreateNestedManyWithoutEventInput: ["create", "connectOrCreate", "createMany", "connect"],
  MapCreateNestedOneWithoutEventInput: ["create", "connectOrCreate", "connect"],
  TagOnEventUpdateManyWithoutEventNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  ImageUpdateManyWithoutEventNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  MapUpdateOneRequiredWithoutEventNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  EventCreateNestedOneWithoutTagsInput: ["create", "connectOrCreate", "connect"],
  TagCreateNestedOneWithoutEventInput: ["create", "connectOrCreate", "connect"],
  DateTimeFieldUpdateOperationsInput: ["set"],
  EventUpdateOneRequiredWithoutTagsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  TagUpdateOneRequiredWithoutEventNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  TagOnEventCreateNestedManyWithoutTagInput: ["create", "connectOrCreate", "createMany", "connect"],
  TagOnEventUpdateManyWithoutTagNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  EventCreateNestedOneWithoutImageInput: ["create", "connectOrCreate", "connect"],
  EventUpdateOneWithoutImageNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  EventCreateNestedManyWithoutMapInput: ["create", "connectOrCreate", "createMany", "connect"],
  FloatFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  EventUpdateManyWithoutMapNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedFloatWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  TagOnEventCreateWithoutEventInput: ["createAt", "updateAt", "tag"],
  TagOnEventCreateOrConnectWithoutEventInput: ["where", "create"],
  TagOnEventCreateManyEventInputEnvelope: ["data", "skipDuplicates"],
  ImageCreateWithoutEventInput: ["id", "src"],
  ImageCreateOrConnectWithoutEventInput: ["where", "create"],
  ImageCreateManyEventInputEnvelope: ["data", "skipDuplicates"],
  MapCreateWithoutEventInput: ["id", "x", "y"],
  MapCreateOrConnectWithoutEventInput: ["where", "create"],
  TagOnEventUpsertWithWhereUniqueWithoutEventInput: ["where", "update", "create"],
  TagOnEventUpdateWithWhereUniqueWithoutEventInput: ["where", "data"],
  TagOnEventUpdateManyWithWhereWithoutEventInput: ["where", "data"],
  TagOnEventScalarWhereInput: ["AND", "OR", "NOT", "eventId", "tagId", "createAt", "updateAt"],
  ImageUpsertWithWhereUniqueWithoutEventInput: ["where", "update", "create"],
  ImageUpdateWithWhereUniqueWithoutEventInput: ["where", "data"],
  ImageUpdateManyWithWhereWithoutEventInput: ["where", "data"],
  ImageScalarWhereInput: ["AND", "OR", "NOT", "id", "src", "eventId"],
  MapUpsertWithoutEventInput: ["update", "create", "where"],
  MapUpdateToOneWithWhereWithoutEventInput: ["where", "data"],
  MapUpdateWithoutEventInput: ["id", "x", "y"],
  EventCreateWithoutTagsInput: ["id", "header", "address", "description", "content", "phone", "image", "map"],
  EventCreateOrConnectWithoutTagsInput: ["where", "create"],
  TagCreateWithoutEventInput: ["id", "name"],
  TagCreateOrConnectWithoutEventInput: ["where", "create"],
  EventUpsertWithoutTagsInput: ["update", "create", "where"],
  EventUpdateToOneWithWhereWithoutTagsInput: ["where", "data"],
  EventUpdateWithoutTagsInput: ["id", "header", "address", "description", "content", "phone", "image", "map"],
  TagUpsertWithoutEventInput: ["update", "create", "where"],
  TagUpdateToOneWithWhereWithoutEventInput: ["where", "data"],
  TagUpdateWithoutEventInput: ["id", "name"],
  TagOnEventCreateWithoutTagInput: ["createAt", "updateAt", "event"],
  TagOnEventCreateOrConnectWithoutTagInput: ["where", "create"],
  TagOnEventCreateManyTagInputEnvelope: ["data", "skipDuplicates"],
  TagOnEventUpsertWithWhereUniqueWithoutTagInput: ["where", "update", "create"],
  TagOnEventUpdateWithWhereUniqueWithoutTagInput: ["where", "data"],
  TagOnEventUpdateManyWithWhereWithoutTagInput: ["where", "data"],
  EventCreateWithoutImageInput: ["id", "header", "address", "description", "content", "phone", "tags", "map"],
  EventCreateOrConnectWithoutImageInput: ["where", "create"],
  EventUpsertWithoutImageInput: ["update", "create", "where"],
  EventUpdateToOneWithWhereWithoutImageInput: ["where", "data"],
  EventUpdateWithoutImageInput: ["id", "header", "address", "description", "content", "phone", "tags", "map"],
  EventCreateWithoutMapInput: ["id", "header", "address", "description", "content", "phone", "tags", "image"],
  EventCreateOrConnectWithoutMapInput: ["where", "create"],
  EventCreateManyMapInputEnvelope: ["data", "skipDuplicates"],
  EventUpsertWithWhereUniqueWithoutMapInput: ["where", "update", "create"],
  EventUpdateWithWhereUniqueWithoutMapInput: ["where", "data"],
  EventUpdateManyWithWhereWithoutMapInput: ["where", "data"],
  EventScalarWhereInput: ["AND", "OR", "NOT", "id", "header", "address", "description", "content", "phone", "mapId"],
  TagOnEventCreateManyEventInput: ["tagId", "createAt", "updateAt"],
  ImageCreateManyEventInput: ["id", "src"],
  TagOnEventUpdateWithoutEventInput: ["createAt", "updateAt", "tag"],
  ImageUpdateWithoutEventInput: ["id", "src"],
  TagOnEventCreateManyTagInput: ["eventId", "createAt", "updateAt"],
  TagOnEventUpdateWithoutTagInput: ["createAt", "updateAt", "event"],
  EventCreateManyMapInput: ["id", "header", "address", "description", "content", "phone"],
  EventUpdateWithoutMapInput: ["id", "header", "address", "description", "content", "phone", "tags", "image"]
};

type InputTypesNames = keyof typeof inputTypes;

type InputTypeFieldNames<TInput extends InputTypesNames> = Exclude<
  keyof typeof inputTypes[TInput]["prototype"],
  number | symbol
>;

type InputTypeFieldsConfig<
  TInput extends InputTypesNames
> = FieldsConfig<InputTypeFieldNames<TInput>>;

export type InputTypeConfig<TInput extends InputTypesNames> = {
  class?: ClassDecorator[];
  fields?: InputTypeFieldsConfig<TInput>;
};

export type InputTypesEnhanceMap = {
  [TInput in InputTypesNames]?: InputTypeConfig<TInput>;
};

export function applyInputTypesEnhanceMap(
  inputTypesEnhanceMap: InputTypesEnhanceMap,
) {
  for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
    const inputTypeName = inputTypeEnhanceMapKey as keyof typeof inputTypesEnhanceMap;
    const typeConfig = inputTypesEnhanceMap[inputTypeName]!;
    const typeClass = inputTypes[inputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      inputsInfo[inputTypeName as keyof typeof inputsInfo],
    );
  }
}

