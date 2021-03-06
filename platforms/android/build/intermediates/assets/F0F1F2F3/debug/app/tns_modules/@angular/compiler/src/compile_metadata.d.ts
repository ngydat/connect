import { ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { LifecycleHooks } from '../core_private';
import { Type } from '../src/facade/lang';
export declare abstract class CompileMetadataWithIdentifier {
    abstract toJson(): {
        [key: string]: any;
    };
    identifier: CompileIdentifierMetadata;
}
export declare abstract class CompileMetadataWithType extends CompileMetadataWithIdentifier {
    abstract toJson(): {
        [key: string]: any;
    };
    type: CompileTypeMetadata;
    identifier: CompileIdentifierMetadata;
}
export declare function metadataFromJson(data: {
    [key: string]: any;
}): any;
export declare class CompileAnimationEntryMetadata {
    name: string;
    definitions: CompileAnimationStateMetadata[];
    static fromJson(data: {
        [key: string]: any;
    }): CompileAnimationEntryMetadata;
    constructor(name?: string, definitions?: CompileAnimationStateMetadata[]);
    toJson(): {
        [key: string]: any;
    };
}
export declare abstract class CompileAnimationStateMetadata {
}
export declare class CompileAnimationStateDeclarationMetadata extends CompileAnimationStateMetadata {
    stateNameExpr: string;
    styles: CompileAnimationStyleMetadata;
    static fromJson(data: {
        [key: string]: any;
    }): CompileAnimationStateDeclarationMetadata;
    constructor(stateNameExpr: string, styles: CompileAnimationStyleMetadata);
    toJson(): {
        [key: string]: any;
    };
}
export declare class CompileAnimationStateTransitionMetadata extends CompileAnimationStateMetadata {
    stateChangeExpr: string;
    steps: CompileAnimationMetadata;
    static fromJson(data: {
        [key: string]: any;
    }): CompileAnimationStateTransitionMetadata;
    constructor(stateChangeExpr: string, steps: CompileAnimationMetadata);
    toJson(): {
        [key: string]: any;
    };
}
export declare abstract class CompileAnimationMetadata {
    abstract toJson(): {
        [key: string]: any;
    };
}
export declare class CompileAnimationKeyframesSequenceMetadata extends CompileAnimationMetadata {
    steps: CompileAnimationStyleMetadata[];
    static fromJson(data: {
        [key: string]: any;
    }): CompileAnimationKeyframesSequenceMetadata;
    constructor(steps?: CompileAnimationStyleMetadata[]);
    toJson(): {
        [key: string]: any;
    };
}
export declare class CompileAnimationStyleMetadata extends CompileAnimationMetadata {
    offset: number;
    styles: Array<string | {
        [key: string]: string | number;
    }>;
    static fromJson(data: {
        [key: string]: any;
    }): CompileAnimationStyleMetadata;
    constructor(offset: number, styles?: Array<string | {
        [key: string]: string | number;
    }>);
    toJson(): {
        [key: string]: any;
    };
}
export declare class CompileAnimationAnimateMetadata extends CompileAnimationMetadata {
    timings: string | number;
    styles: CompileAnimationStyleMetadata | CompileAnimationKeyframesSequenceMetadata;
    static fromJson(data: {
        [key: string]: any;
    }): CompileAnimationAnimateMetadata;
    constructor(timings?: string | number, styles?: CompileAnimationStyleMetadata | CompileAnimationKeyframesSequenceMetadata);
    toJson(): {
        [key: string]: any;
    };
}
export declare abstract class CompileAnimationWithStepsMetadata extends CompileAnimationMetadata {
    steps: CompileAnimationMetadata[];
    constructor(steps?: CompileAnimationMetadata[]);
}
export declare class CompileAnimationSequenceMetadata extends CompileAnimationWithStepsMetadata {
    static fromJson(data: {
        [key: string]: any;
    }): CompileAnimationSequenceMetadata;
    constructor(steps?: CompileAnimationMetadata[]);
    toJson(): {
        [key: string]: any;
    };
}
export declare class CompileAnimationGroupMetadata extends CompileAnimationWithStepsMetadata {
    static fromJson(data: {
        [key: string]: any;
    }): CompileAnimationGroupMetadata;
    constructor(steps?: CompileAnimationMetadata[]);
    toJson(): {
        [key: string]: any;
    };
}
export declare class CompileIdentifierMetadata implements CompileMetadataWithIdentifier {
    runtime: any;
    name: string;
    prefix: string;
    moduleUrl: string;
    value: any;
    constructor({runtime, name, moduleUrl, prefix, value}?: {
        runtime?: any;
        name?: string;
        moduleUrl?: string;
        prefix?: string;
        value?: any;
    });
    static fromJson(data: {
        [key: string]: any;
    }): CompileIdentifierMetadata;
    toJson(): {
        [key: string]: any;
    };
    identifier: CompileIdentifierMetadata;
}
export declare class CompileDiDependencyMetadata {
    isAttribute: boolean;
    isSelf: boolean;
    isHost: boolean;
    isSkipSelf: boolean;
    isOptional: boolean;
    isValue: boolean;
    query: CompileQueryMetadata;
    viewQuery: CompileQueryMetadata;
    token: CompileTokenMetadata;
    value: any;
    constructor({isAttribute, isSelf, isHost, isSkipSelf, isOptional, isValue, query, viewQuery, token, value}?: {
        isAttribute?: boolean;
        isSelf?: boolean;
        isHost?: boolean;
        isSkipSelf?: boolean;
        isOptional?: boolean;
        isValue?: boolean;
        query?: CompileQueryMetadata;
        viewQuery?: CompileQueryMetadata;
        token?: CompileTokenMetadata;
        value?: any;
    });
    static fromJson(data: {
        [key: string]: any;
    }): CompileDiDependencyMetadata;
    toJson(): {
        [key: string]: any;
    };
}
export declare class CompileProviderMetadata {
    token: CompileTokenMetadata;
    useClass: CompileTypeMetadata;
    useValue: any;
    useExisting: CompileTokenMetadata;
    useFactory: CompileFactoryMetadata;
    deps: CompileDiDependencyMetadata[];
    multi: boolean;
    constructor({token, useClass, useValue, useExisting, useFactory, deps, multi}: {
        token?: CompileTokenMetadata;
        useClass?: CompileTypeMetadata;
        useValue?: any;
        useExisting?: CompileTokenMetadata;
        useFactory?: CompileFactoryMetadata;
        deps?: CompileDiDependencyMetadata[];
        multi?: boolean;
    });
    static fromJson(data: {
        [key: string]: any;
    }): CompileProviderMetadata;
    toJson(): {
        [key: string]: any;
    };
}
export declare class CompileFactoryMetadata implements CompileIdentifierMetadata, CompileMetadataWithIdentifier {
    runtime: Function;
    name: string;
    prefix: string;
    moduleUrl: string;
    value: any;
    diDeps: CompileDiDependencyMetadata[];
    constructor({runtime, name, moduleUrl, prefix, diDeps, value}: {
        runtime?: Function;
        name?: string;
        prefix?: string;
        moduleUrl?: string;
        value?: boolean;
        diDeps?: CompileDiDependencyMetadata[];
    });
    identifier: CompileIdentifierMetadata;
    static fromJson(data: {
        [key: string]: any;
    }): CompileFactoryMetadata;
    toJson(): {
        [key: string]: any;
    };
}
export declare class CompileTokenMetadata implements CompileMetadataWithIdentifier {
    value: any;
    identifier: CompileIdentifierMetadata;
    identifierIsInstance: boolean;
    private _assetCacheKey;
    constructor({value, identifier, identifierIsInstance}: {
        value?: any;
        identifier?: CompileIdentifierMetadata;
        identifierIsInstance?: boolean;
    });
    static fromJson(data: {
        [key: string]: any;
    }): CompileTokenMetadata;
    toJson(): {
        [key: string]: any;
    };
    runtimeCacheKey: any;
    assetCacheKey: any;
    equalsTo(token2: CompileTokenMetadata): boolean;
    name: string;
}
export declare class CompileTokenMap<VALUE> {
    private _valueMap;
    private _values;
    add(token: CompileTokenMetadata, value: VALUE): void;
    get(token: CompileTokenMetadata): VALUE;
    values(): VALUE[];
    size: number;
}
/**
 * Metadata regarding compilation of a type.
 */
export declare class CompileTypeMetadata implements CompileIdentifierMetadata, CompileMetadataWithType {
    runtime: Type;
    name: string;
    prefix: string;
    moduleUrl: string;
    isHost: boolean;
    value: any;
    diDeps: CompileDiDependencyMetadata[];
    constructor({runtime, name, moduleUrl, prefix, isHost, value, diDeps}?: {
        runtime?: Type;
        name?: string;
        moduleUrl?: string;
        prefix?: string;
        isHost?: boolean;
        value?: any;
        diDeps?: CompileDiDependencyMetadata[];
    });
    static fromJson(data: {
        [key: string]: any;
    }): CompileTypeMetadata;
    identifier: CompileIdentifierMetadata;
    type: CompileTypeMetadata;
    toJson(): {
        [key: string]: any;
    };
}
export declare class CompileQueryMetadata {
    selectors: Array<CompileTokenMetadata>;
    descendants: boolean;
    first: boolean;
    propertyName: string;
    read: CompileTokenMetadata;
    constructor({selectors, descendants, first, propertyName, read}?: {
        selectors?: Array<CompileTokenMetadata>;
        descendants?: boolean;
        first?: boolean;
        propertyName?: string;
        read?: CompileTokenMetadata;
    });
    static fromJson(data: {
        [key: string]: any;
    }): CompileQueryMetadata;
    toJson(): {
        [key: string]: any;
    };
}
/**
 * Metadata regarding compilation of a template.
 */
export declare class CompileTemplateMetadata {
    encapsulation: ViewEncapsulation;
    template: string;
    templateUrl: string;
    styles: string[];
    styleUrls: string[];
    animations: CompileAnimationEntryMetadata[];
    ngContentSelectors: string[];
    interpolation: [string, string];
    constructor({encapsulation, template, templateUrl, styles, styleUrls, animations, ngContentSelectors, interpolation}?: {
        encapsulation?: ViewEncapsulation;
        template?: string;
        templateUrl?: string;
        styles?: string[];
        styleUrls?: string[];
        ngContentSelectors?: string[];
        animations?: CompileAnimationEntryMetadata[];
        interpolation?: [string, string];
    });
    static fromJson(data: {
        [key: string]: any;
    }): CompileTemplateMetadata;
    toJson(): {
        [key: string]: any;
    };
}
/**
 * Metadata regarding compilation of a directive.
 */
export declare class CompileDirectiveMetadata implements CompileMetadataWithType {
    static create({type, isComponent, selector, exportAs, changeDetection, inputs, outputs, host, lifecycleHooks, providers, viewProviders, queries, viewQueries, template}?: {
        type?: CompileTypeMetadata;
        isComponent?: boolean;
        selector?: string;
        exportAs?: string;
        changeDetection?: ChangeDetectionStrategy;
        inputs?: string[];
        outputs?: string[];
        host?: {
            [key: string]: string;
        };
        lifecycleHooks?: LifecycleHooks[];
        providers?: Array<CompileProviderMetadata | CompileTypeMetadata | CompileIdentifierMetadata | any[]>;
        viewProviders?: Array<CompileProviderMetadata | CompileTypeMetadata | CompileIdentifierMetadata | any[]>;
        queries?: CompileQueryMetadata[];
        viewQueries?: CompileQueryMetadata[];
        template?: CompileTemplateMetadata;
    }): CompileDirectiveMetadata;
    type: CompileTypeMetadata;
    isComponent: boolean;
    selector: string;
    exportAs: string;
    changeDetection: ChangeDetectionStrategy;
    inputs: {
        [key: string]: string;
    };
    outputs: {
        [key: string]: string;
    };
    hostListeners: {
        [key: string]: string;
    };
    hostProperties: {
        [key: string]: string;
    };
    hostAttributes: {
        [key: string]: string;
    };
    lifecycleHooks: LifecycleHooks[];
    providers: CompileProviderMetadata[];
    viewProviders: CompileProviderMetadata[];
    queries: CompileQueryMetadata[];
    viewQueries: CompileQueryMetadata[];
    template: CompileTemplateMetadata;
    constructor({type, isComponent, selector, exportAs, changeDetection, inputs, outputs, hostListeners, hostProperties, hostAttributes, lifecycleHooks, providers, viewProviders, queries, viewQueries, template}?: {
        type?: CompileTypeMetadata;
        isComponent?: boolean;
        selector?: string;
        exportAs?: string;
        changeDetection?: ChangeDetectionStrategy;
        inputs?: {
            [key: string]: string;
        };
        outputs?: {
            [key: string]: string;
        };
        hostListeners?: {
            [key: string]: string;
        };
        hostProperties?: {
            [key: string]: string;
        };
        hostAttributes?: {
            [key: string]: string;
        };
        lifecycleHooks?: LifecycleHooks[];
        providers?: Array<CompileProviderMetadata | CompileTypeMetadata | CompileIdentifierMetadata | any[]>;
        viewProviders?: Array<CompileProviderMetadata | CompileTypeMetadata | CompileIdentifierMetadata | any[]>;
        queries?: CompileQueryMetadata[];
        viewQueries?: CompileQueryMetadata[];
        template?: CompileTemplateMetadata;
    });
    identifier: CompileIdentifierMetadata;
    static fromJson(data: {
        [key: string]: any;
    }): CompileDirectiveMetadata;
    toJson(): {
        [key: string]: any;
    };
}
/**
 * Construct {@link CompileDirectiveMetadata} from {@link ComponentTypeMetadata} and a selector.
 */
export declare function createHostComponentMeta(componentType: CompileTypeMetadata, componentSelector: string): CompileDirectiveMetadata;
export declare class CompilePipeMetadata implements CompileMetadataWithType {
    type: CompileTypeMetadata;
    name: string;
    pure: boolean;
    lifecycleHooks: LifecycleHooks[];
    constructor({type, name, pure, lifecycleHooks}?: {
        type?: CompileTypeMetadata;
        name?: string;
        pure?: boolean;
        lifecycleHooks?: LifecycleHooks[];
    });
    identifier: CompileIdentifierMetadata;
    static fromJson(data: {
        [key: string]: any;
    }): CompilePipeMetadata;
    toJson(): {
        [key: string]: any;
    };
}
