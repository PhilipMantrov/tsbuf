export function typeMapping(typeName: Type): string {
  if (typeName.type === 'KeywordType') {
    return keywordTypeMapping(typeName);
  }
  return extendedTypeMapping(typeName);
}

export function mongooseTypeMapping(typeName: Type): string {
  if (typeName.type === 'KeywordType') {
    return keywordMongooseTypeMapping(typeName);
  }
  return extendedTypeMapping(typeName);
}

export function keywordTypeMapping(typeName: KeywordType): string {
  const map: any = {
    Any: 'any',
    bool: 'boolean',
    string: 'string',
    bytes: 'string',

    int32: 'number',
    fixed32: 'number',
    uint32: 'number',
    sint32: 'number',
    sfixed32: 'number',

    int64: 'number',
    fixed64: 'number',
    uint64: 'number',
    sint64: 'number',
    sfixed64: 'number',

    float: 'number',
    double: 'number',
  };
  return map[typeName.typeName] || 'any';
}

export function keywordMongooseTypeMapping(typeName: KeywordType): string {
  const map: any = {
    Any: 'Mixed',
    bool: 'Boolean',
    string: 'String',
    bytes: 'Buffer',

    int32: 'Number',
    fixed32: 'Number',
    uint32: 'Number',
    sint32: 'Number',
    sfixed32: 'Number',

    int64: 'String',
    fixed64: 'String',
    uint64: 'String',
    sint64: 'String',
    sfixed64: 'String',

    float: 'Number',
    double: 'Number',
  };
  return map[typeName.typeName] || 'Mixed';
}

export function extendedTypeMapping(typeName: ExtendedType): string {
  if (!typeName.path || typeName.path.length === 0) {
    return typeName.identifier.name;
  }
  return [...typeName.path.map(id => id.name), typeName.identifier.name].join('.');
}
