// Copyright 2013 Traceur Authors.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// This file was auto generated by build-parse-tree-transformer.js
// from trees.json
// Do not edit!

import {
  Annotation,
  AnonBlock,
  ArgumentList,
  ArrayComprehension,
  ArrayLiteralExpression,
  ArrayPattern,
  ArrowFunctionExpression,
  AwaitExpression,
  BinaryOperator,
  BindingElement,
  BindingIdentifier,
  Block,
  BreakStatement,
  CallExpression,
  CaseClause,
  Catch,
  ClassDeclaration,
  ClassExpression,
  CommaExpression,
  ComprehensionFor,
  ComprehensionIf,
  ComputedPropertyName,
  ConditionalExpression,
  ContinueStatement,
  CoverFormals,
  CoverInitialisedName,
  DebuggerStatement,
  DefaultClause,
  DoWhileStatement,
  EmptyStatement,
  ExportDeclaration,
  ExportDefault,
  ExportSpecifier,
  ExportSpecifierSet,
  ExportStar,
  ExpressionStatement,
  Finally,
  ForInStatement,
  ForOfStatement,
  ForStatement,
  FormalParameter,
  FormalParameterList,
  FunctionBody,
  FunctionDeclaration,
  FunctionExpression,
  GeneratorComprehension,
  GetAccessor,
  IdentifierExpression,
  IfStatement,
  ImportedBinding,
  ImportDeclaration,
  ImportSpecifier,
  ImportSpecifierSet,
  LabelledStatement,
  LiteralExpression,
  LiteralPropertyName,
  MemberExpression,
  MemberLookupExpression,
  Module,
  ModuleDeclaration,
  ModuleSpecifier,
  NamedExport,
  NewExpression,
  ObjectLiteralExpression,
  ObjectPattern,
  ObjectPatternField,
  ParenExpression,
  PostfixExpression,
  PredefinedType,
  Script,
  PropertyMethodAssignment,
  PropertyNameAssignment,
  PropertyNameShorthand,
  RestParameter,
  ReturnStatement,
  SetAccessor,
  SpreadExpression,
  SpreadPatternElement,
  SuperExpression,
  SwitchStatement,
  SyntaxErrorTree,
  TemplateLiteralExpression,
  TemplateLiteralPortion,
  TemplateSubstitution,
  ThisExpression,
  ThrowStatement,
  TryStatement,
  TypeName,
  UnaryExpression,
  VariableDeclaration,
  VariableDeclarationList,
  VariableStatement,
  WhileStatement,
  WithStatement,
  YieldExpression,
} from '../syntax/trees/ParseTrees';
export class ParseTreeTransformer {
  transformAny(tree) {
    return tree && tree.transform(this);
  }
  transformList(list) {
    var builder = null;
    for (var index = 0; index < list.length; index++) {
      var element = list[index];
      var transformed = this.transformAny(element);
      if (builder != null || element != transformed) {
        if (builder == null) {
          builder = list.slice(0, index);
        }
        if (transformed instanceof AnonBlock)
          builder.push(...transformed.statements);
        else
          builder.push(transformed);
      }
    }
    return builder || list;
  }
  transformStateMachine(tree) {
    throw Error('State machines should not live outside of the GeneratorTransformer.');
  }

  transformAnnotation(tree) {
    var name = this.transformAny(tree.name);
    var args = this.transformAny(tree.args);
    if (name === tree.name && args === tree.args) {
      return tree;
    }
    return new Annotation(tree.location, name, args);
  }
  transformAnonBlock(tree) {
    var statements = this.transformList(tree.statements);
    if (statements === tree.statements) {
      return tree;
    }
    return new AnonBlock(tree.location, statements);
  }
  transformArgumentList(tree) {
    var args = this.transformList(tree.args);
    if (args === tree.args) {
      return tree;
    }
    return new ArgumentList(tree.location, args);
  }
  transformArrayComprehension(tree) {
    var comprehensionList = this.transformList(tree.comprehensionList);
    var expression = this.transformAny(tree.expression);
    if (comprehensionList === tree.comprehensionList && expression === tree.expression) {
      return tree;
    }
    return new ArrayComprehension(tree.location, comprehensionList, expression);
  }
  transformArrayLiteralExpression(tree) {
    var elements = this.transformList(tree.elements);
    if (elements === tree.elements) {
      return tree;
    }
    return new ArrayLiteralExpression(tree.location, elements);
  }
  transformArrayPattern(tree) {
    var elements = this.transformList(tree.elements);
    if (elements === tree.elements) {
      return tree;
    }
    return new ArrayPattern(tree.location, elements);
  }
  transformArrowFunctionExpression(tree) {
    var parameterList = this.transformAny(tree.parameterList);
    var functionBody = this.transformAny(tree.functionBody);
    if (parameterList === tree.parameterList && functionBody === tree.functionBody) {
      return tree;
    }
    return new ArrowFunctionExpression(tree.location, parameterList, functionBody);
  }
  transformAwaitExpression(tree) {
    var expression = this.transformAny(tree.expression);
    if (expression === tree.expression) {
      return tree;
    }
    return new AwaitExpression(tree.location, expression);
  }
  transformBinaryOperator(tree) {
    var left = this.transformAny(tree.left);
    var right = this.transformAny(tree.right);
    if (left === tree.left && right === tree.right) {
      return tree;
    }
    return new BinaryOperator(tree.location, left, tree.operator, right);
  }
  transformBindingElement(tree) {
    var binding = this.transformAny(tree.binding);
    var initializer = this.transformAny(tree.initializer);
    if (binding === tree.binding && initializer === tree.initializer) {
      return tree;
    }
    return new BindingElement(tree.location, binding, initializer);
  }
  transformBindingIdentifier(tree) {
    return tree;
  }
  transformBlock(tree) {
    var statements = this.transformList(tree.statements);
    if (statements === tree.statements) {
      return tree;
    }
    return new Block(tree.location, statements);
  }
  transformBreakStatement(tree) {
    return tree;
  }
  transformCallExpression(tree) {
    var operand = this.transformAny(tree.operand);
    var args = this.transformAny(tree.args);
    if (operand === tree.operand && args === tree.args) {
      return tree;
    }
    return new CallExpression(tree.location, operand, args);
  }
  transformCaseClause(tree) {
    var expression = this.transformAny(tree.expression);
    var statements = this.transformList(tree.statements);
    if (expression === tree.expression && statements === tree.statements) {
      return tree;
    }
    return new CaseClause(tree.location, expression, statements);
  }
  transformCatch(tree) {
    var binding = this.transformAny(tree.binding);
    var catchBody = this.transformAny(tree.catchBody);
    if (binding === tree.binding && catchBody === tree.catchBody) {
      return tree;
    }
    return new Catch(tree.location, binding, catchBody);
  }
  transformClassDeclaration(tree) {
    var name = this.transformAny(tree.name);
    var superClass = this.transformAny(tree.superClass);
    var elements = this.transformList(tree.elements);
    var annotations = this.transformList(tree.annotations);
    if (name === tree.name && superClass === tree.superClass && elements === tree.elements && annotations === tree.annotations) {
      return tree;
    }
    return new ClassDeclaration(tree.location, name, superClass, elements, annotations);
  }
  transformClassExpression(tree) {
    var name = this.transformAny(tree.name);
    var superClass = this.transformAny(tree.superClass);
    var elements = this.transformList(tree.elements);
    var annotations = this.transformList(tree.annotations);
    if (name === tree.name && superClass === tree.superClass && elements === tree.elements && annotations === tree.annotations) {
      return tree;
    }
    return new ClassExpression(tree.location, name, superClass, elements, annotations);
  }
  transformCommaExpression(tree) {
    var expressions = this.transformList(tree.expressions);
    if (expressions === tree.expressions) {
      return tree;
    }
    return new CommaExpression(tree.location, expressions);
  }
  transformComprehensionFor(tree) {
    var left = this.transformAny(tree.left);
    var iterator = this.transformAny(tree.iterator);
    if (left === tree.left && iterator === tree.iterator) {
      return tree;
    }
    return new ComprehensionFor(tree.location, left, iterator);
  }
  transformComprehensionIf(tree) {
    var expression = this.transformAny(tree.expression);
    if (expression === tree.expression) {
      return tree;
    }
    return new ComprehensionIf(tree.location, expression);
  }
  transformComputedPropertyName(tree) {
    var expression = this.transformAny(tree.expression);
    if (expression === tree.expression) {
      return tree;
    }
    return new ComputedPropertyName(tree.location, expression);
  }
  transformConditionalExpression(tree) {
    var condition = this.transformAny(tree.condition);
    var left = this.transformAny(tree.left);
    var right = this.transformAny(tree.right);
    if (condition === tree.condition && left === tree.left && right === tree.right) {
      return tree;
    }
    return new ConditionalExpression(tree.location, condition, left, right);
  }
  transformContinueStatement(tree) {
    return tree;
  }
  transformCoverFormals(tree) {
    var expressions = this.transformList(tree.expressions);
    if (expressions === tree.expressions) {
      return tree;
    }
    return new CoverFormals(tree.location, expressions);
  }
  transformCoverInitialisedName(tree) {
    var initializer = this.transformAny(tree.initializer);
    if (initializer === tree.initializer) {
      return tree;
    }
    return new CoverInitialisedName(tree.location, tree.name, tree.equalToken, initializer);
  }
  transformDebuggerStatement(tree) {
    return tree;
  }
  transformDefaultClause(tree) {
    var statements = this.transformList(tree.statements);
    if (statements === tree.statements) {
      return tree;
    }
    return new DefaultClause(tree.location, statements);
  }
  transformDoWhileStatement(tree) {
    var body = this.transformAny(tree.body);
    var condition = this.transformAny(tree.condition);
    if (body === tree.body && condition === tree.condition) {
      return tree;
    }
    return new DoWhileStatement(tree.location, body, condition);
  }
  transformEmptyStatement(tree) {
    return tree;
  }
  transformExportDeclaration(tree) {
    var declaration = this.transformAny(tree.declaration);
    var annotations = this.transformList(tree.annotations);
    if (declaration === tree.declaration && annotations === tree.annotations) {
      return tree;
    }
    return new ExportDeclaration(tree.location, declaration, annotations);
  }
  transformExportDefault(tree) {
    var expression = this.transformAny(tree.expression);
    if (expression === tree.expression) {
      return tree;
    }
    return new ExportDefault(tree.location, expression);
  }
  transformExportSpecifier(tree) {
    return tree;
  }
  transformExportSpecifierSet(tree) {
    var specifiers = this.transformList(tree.specifiers);
    if (specifiers === tree.specifiers) {
      return tree;
    }
    return new ExportSpecifierSet(tree.location, specifiers);
  }
  transformExportStar(tree) {
    return tree;
  }
  transformExpressionStatement(tree) {
    var expression = this.transformAny(tree.expression);
    if (expression === tree.expression) {
      return tree;
    }
    return new ExpressionStatement(tree.location, expression);
  }
  transformFinally(tree) {
    var block = this.transformAny(tree.block);
    if (block === tree.block) {
      return tree;
    }
    return new Finally(tree.location, block);
  }
  transformForInStatement(tree) {
    var initializer = this.transformAny(tree.initializer);
    var collection = this.transformAny(tree.collection);
    var body = this.transformAny(tree.body);
    if (initializer === tree.initializer && collection === tree.collection && body === tree.body) {
      return tree;
    }
    return new ForInStatement(tree.location, initializer, collection, body);
  }
  transformForOfStatement(tree) {
    var initializer = this.transformAny(tree.initializer);
    var collection = this.transformAny(tree.collection);
    var body = this.transformAny(tree.body);
    if (initializer === tree.initializer && collection === tree.collection && body === tree.body) {
      return tree;
    }
    return new ForOfStatement(tree.location, initializer, collection, body);
  }
  transformForStatement(tree) {
    var initializer = this.transformAny(tree.initializer);
    var condition = this.transformAny(tree.condition);
    var increment = this.transformAny(tree.increment);
    var body = this.transformAny(tree.body);
    if (initializer === tree.initializer && condition === tree.condition && increment === tree.increment && body === tree.body) {
      return tree;
    }
    return new ForStatement(tree.location, initializer, condition, increment, body);
  }
  transformFormalParameter(tree) {
    var parameter = this.transformAny(tree.parameter);
    var typeAnnotation = this.transformAny(tree.typeAnnotation);
    var annotations = this.transformList(tree.annotations);
    if (parameter === tree.parameter && typeAnnotation === tree.typeAnnotation && annotations === tree.annotations) {
      return tree;
    }
    return new FormalParameter(tree.location, parameter, typeAnnotation, annotations);
  }
  transformFormalParameterList(tree) {
    var parameters = this.transformList(tree.parameters);
    if (parameters === tree.parameters) {
      return tree;
    }
    return new FormalParameterList(tree.location, parameters);
  }
  transformFunctionBody(tree) {
    var statements = this.transformList(tree.statements);
    if (statements === tree.statements) {
      return tree;
    }
    return new FunctionBody(tree.location, statements);
  }
  transformFunctionDeclaration(tree) {
    var name = this.transformAny(tree.name);
    var parameterList = this.transformAny(tree.parameterList);
    var typeAnnotation = this.transformAny(tree.typeAnnotation);
    var annotations = this.transformList(tree.annotations);
    var functionBody = this.transformAny(tree.functionBody);
    if (name === tree.name && parameterList === tree.parameterList && typeAnnotation === tree.typeAnnotation && annotations === tree.annotations && functionBody === tree.functionBody) {
      return tree;
    }
    return new FunctionDeclaration(tree.location, name, tree.functionKind, parameterList, typeAnnotation, annotations, functionBody);
  }
  transformFunctionExpression(tree) {
    var name = this.transformAny(tree.name);
    var parameterList = this.transformAny(tree.parameterList);
    var typeAnnotation = this.transformAny(tree.typeAnnotation);
    var annotations = this.transformList(tree.annotations);
    var functionBody = this.transformAny(tree.functionBody);
    if (name === tree.name && parameterList === tree.parameterList && typeAnnotation === tree.typeAnnotation && annotations === tree.annotations && functionBody === tree.functionBody) {
      return tree;
    }
    return new FunctionExpression(tree.location, name, tree.functionKind, parameterList, typeAnnotation, annotations, functionBody);
  }
  transformGeneratorComprehension(tree) {
    var comprehensionList = this.transformList(tree.comprehensionList);
    var expression = this.transformAny(tree.expression);
    if (comprehensionList === tree.comprehensionList && expression === tree.expression) {
      return tree;
    }
    return new GeneratorComprehension(tree.location, comprehensionList, expression);
  }
  transformGetAccessor(tree) {
    var name = this.transformAny(tree.name);
    var typeAnnotation = this.transformAny(tree.typeAnnotation);
    var annotations = this.transformList(tree.annotations);
    var body = this.transformAny(tree.body);
    if (name === tree.name && typeAnnotation === tree.typeAnnotation && annotations === tree.annotations && body === tree.body) {
      return tree;
    }
    return new GetAccessor(tree.location, tree.isStatic, name, typeAnnotation, annotations, body);
  }
  transformIdentifierExpression(tree) {
    return tree;
  }
  transformIfStatement(tree) {
    var condition = this.transformAny(tree.condition);
    var ifClause = this.transformAny(tree.ifClause);
    var elseClause = this.transformAny(tree.elseClause);
    if (condition === tree.condition && ifClause === tree.ifClause && elseClause === tree.elseClause) {
      return tree;
    }
    return new IfStatement(tree.location, condition, ifClause, elseClause);
  }
  transformImportedBinding(tree) {
    var binding = this.transformAny(tree.binding);
    if (binding === tree.binding) {
      return tree;
    }
    return new ImportedBinding(tree.location, binding);
  }
  transformImportDeclaration(tree) {
    var importClause = this.transformAny(tree.importClause);
    var moduleSpecifier = this.transformAny(tree.moduleSpecifier);
    if (importClause === tree.importClause && moduleSpecifier === tree.moduleSpecifier) {
      return tree;
    }
    return new ImportDeclaration(tree.location, importClause, moduleSpecifier);
  }
  transformImportSpecifier(tree) {
    return tree;
  }
  transformImportSpecifierSet(tree) {
    var specifiers = this.transformList(tree.specifiers);
    if (specifiers === tree.specifiers) {
      return tree;
    }
    return new ImportSpecifierSet(tree.location, specifiers);
  }
  transformLabelledStatement(tree) {
    var statement = this.transformAny(tree.statement);
    if (statement === tree.statement) {
      return tree;
    }
    return new LabelledStatement(tree.location, tree.name, statement);
  }
  transformLiteralExpression(tree) {
    return tree;
  }
  transformLiteralPropertyName(tree) {
    return tree;
  }
  transformMemberExpression(tree) {
    var operand = this.transformAny(tree.operand);
    if (operand === tree.operand) {
      return tree;
    }
    return new MemberExpression(tree.location, operand, tree.memberName);
  }
  transformMemberLookupExpression(tree) {
    var operand = this.transformAny(tree.operand);
    var memberExpression = this.transformAny(tree.memberExpression);
    if (operand === tree.operand && memberExpression === tree.memberExpression) {
      return tree;
    }
    return new MemberLookupExpression(tree.location, operand, memberExpression);
  }
  transformModule(tree) {
    var scriptItemList = this.transformList(tree.scriptItemList);
    if (scriptItemList === tree.scriptItemList) {
      return tree;
    }
    return new Module(tree.location, scriptItemList, tree.moduleName);
  }
  transformModuleDeclaration(tree) {
    var expression = this.transformAny(tree.expression);
    if (expression === tree.expression) {
      return tree;
    }
    return new ModuleDeclaration(tree.location, tree.identifier, expression);
  }
  transformModuleSpecifier(tree) {
    return tree;
  }
  transformNamedExport(tree) {
    var moduleSpecifier = this.transformAny(tree.moduleSpecifier);
    var specifierSet = this.transformAny(tree.specifierSet);
    if (moduleSpecifier === tree.moduleSpecifier && specifierSet === tree.specifierSet) {
      return tree;
    }
    return new NamedExport(tree.location, moduleSpecifier, specifierSet);
  }
  transformNewExpression(tree) {
    var operand = this.transformAny(tree.operand);
    var args = this.transformAny(tree.args);
    if (operand === tree.operand && args === tree.args) {
      return tree;
    }
    return new NewExpression(tree.location, operand, args);
  }
  transformObjectLiteralExpression(tree) {
    var propertyNameAndValues = this.transformList(tree.propertyNameAndValues);
    if (propertyNameAndValues === tree.propertyNameAndValues) {
      return tree;
    }
    return new ObjectLiteralExpression(tree.location, propertyNameAndValues);
  }
  transformObjectPattern(tree) {
    var fields = this.transformList(tree.fields);
    if (fields === tree.fields) {
      return tree;
    }
    return new ObjectPattern(tree.location, fields);
  }
  transformObjectPatternField(tree) {
    var name = this.transformAny(tree.name);
    var element = this.transformAny(tree.element);
    if (name === tree.name && element === tree.element) {
      return tree;
    }
    return new ObjectPatternField(tree.location, name, element);
  }
  transformParenExpression(tree) {
    var expression = this.transformAny(tree.expression);
    if (expression === tree.expression) {
      return tree;
    }
    return new ParenExpression(tree.location, expression);
  }
  transformPostfixExpression(tree) {
    var operand = this.transformAny(tree.operand);
    if (operand === tree.operand) {
      return tree;
    }
    return new PostfixExpression(tree.location, operand, tree.operator);
  }
  transformPredefinedType(tree) {
    return tree;
  }
  transformScript(tree) {
    var scriptItemList = this.transformList(tree.scriptItemList);
    if (scriptItemList === tree.scriptItemList) {
      return tree;
    }
    return new Script(tree.location, scriptItemList, tree.moduleName);
  }
  transformPropertyMethodAssignment(tree) {
    var name = this.transformAny(tree.name);
    var parameterList = this.transformAny(tree.parameterList);
    var typeAnnotation = this.transformAny(tree.typeAnnotation);
    var annotations = this.transformList(tree.annotations);
    var functionBody = this.transformAny(tree.functionBody);
    if (name === tree.name && parameterList === tree.parameterList && typeAnnotation === tree.typeAnnotation && annotations === tree.annotations && functionBody === tree.functionBody) {
      return tree;
    }
    return new PropertyMethodAssignment(tree.location, tree.isStatic, tree.functionKind, name, parameterList, typeAnnotation, annotations, functionBody);
  }
  transformPropertyNameAssignment(tree) {
    var name = this.transformAny(tree.name);
    var value = this.transformAny(tree.value);
    if (name === tree.name && value === tree.value) {
      return tree;
    }
    return new PropertyNameAssignment(tree.location, name, value);
  }
  transformPropertyNameShorthand(tree) {
    return tree;
  }
  transformRestParameter(tree) {
    var identifier = this.transformAny(tree.identifier);
    if (identifier === tree.identifier) {
      return tree;
    }
    return new RestParameter(tree.location, identifier);
  }
  transformReturnStatement(tree) {
    var expression = this.transformAny(tree.expression);
    if (expression === tree.expression) {
      return tree;
    }
    return new ReturnStatement(tree.location, expression);
  }
  transformSetAccessor(tree) {
    var name = this.transformAny(tree.name);
    var parameterList = this.transformAny(tree.parameterList);
    var annotations = this.transformList(tree.annotations);
    var body = this.transformAny(tree.body);
    if (name === tree.name && parameterList === tree.parameterList && annotations === tree.annotations && body === tree.body) {
      return tree;
    }
    return new SetAccessor(tree.location, tree.isStatic, name, parameterList, annotations, body);
  }
  transformSpreadExpression(tree) {
    var expression = this.transformAny(tree.expression);
    if (expression === tree.expression) {
      return tree;
    }
    return new SpreadExpression(tree.location, expression);
  }
  transformSpreadPatternElement(tree) {
    var lvalue = this.transformAny(tree.lvalue);
    if (lvalue === tree.lvalue) {
      return tree;
    }
    return new SpreadPatternElement(tree.location, lvalue);
  }
  transformSuperExpression(tree) {
    return tree;
  }
  transformSwitchStatement(tree) {
    var expression = this.transformAny(tree.expression);
    var caseClauses = this.transformList(tree.caseClauses);
    if (expression === tree.expression && caseClauses === tree.caseClauses) {
      return tree;
    }
    return new SwitchStatement(tree.location, expression, caseClauses);
  }
  transformSyntaxErrorTree(tree) {
    return tree;
  }
  transformTemplateLiteralExpression(tree) {
    var operand = this.transformAny(tree.operand);
    var elements = this.transformList(tree.elements);
    if (operand === tree.operand && elements === tree.elements) {
      return tree;
    }
    return new TemplateLiteralExpression(tree.location, operand, elements);
  }
  transformTemplateLiteralPortion(tree) {
    return tree;
  }
  transformTemplateSubstitution(tree) {
    var expression = this.transformAny(tree.expression);
    if (expression === tree.expression) {
      return tree;
    }
    return new TemplateSubstitution(tree.location, expression);
  }
  transformThisExpression(tree) {
    return tree;
  }
  transformThrowStatement(tree) {
    var value = this.transformAny(tree.value);
    if (value === tree.value) {
      return tree;
    }
    return new ThrowStatement(tree.location, value);
  }
  transformTryStatement(tree) {
    var body = this.transformAny(tree.body);
    var catchBlock = this.transformAny(tree.catchBlock);
    var finallyBlock = this.transformAny(tree.finallyBlock);
    if (body === tree.body && catchBlock === tree.catchBlock && finallyBlock === tree.finallyBlock) {
      return tree;
    }
    return new TryStatement(tree.location, body, catchBlock, finallyBlock);
  }
  transformTypeName(tree) {
    var moduleName = this.transformAny(tree.moduleName);
    if (moduleName === tree.moduleName) {
      return tree;
    }
    return new TypeName(tree.location, moduleName, tree.name);
  }
  transformUnaryExpression(tree) {
    var operand = this.transformAny(tree.operand);
    if (operand === tree.operand) {
      return tree;
    }
    return new UnaryExpression(tree.location, tree.operator, operand);
  }
  transformVariableDeclaration(tree) {
    var lvalue = this.transformAny(tree.lvalue);
    var typeAnnotation = this.transformAny(tree.typeAnnotation);
    var initializer = this.transformAny(tree.initializer);
    if (lvalue === tree.lvalue && typeAnnotation === tree.typeAnnotation && initializer === tree.initializer) {
      return tree;
    }
    return new VariableDeclaration(tree.location, lvalue, typeAnnotation, initializer);
  }
  transformVariableDeclarationList(tree) {
    var declarations = this.transformList(tree.declarations);
    if (declarations === tree.declarations) {
      return tree;
    }
    return new VariableDeclarationList(tree.location, tree.declarationType, declarations);
  }
  transformVariableStatement(tree) {
    var declarations = this.transformAny(tree.declarations);
    if (declarations === tree.declarations) {
      return tree;
    }
    return new VariableStatement(tree.location, declarations);
  }
  transformWhileStatement(tree) {
    var condition = this.transformAny(tree.condition);
    var body = this.transformAny(tree.body);
    if (condition === tree.condition && body === tree.body) {
      return tree;
    }
    return new WhileStatement(tree.location, condition, body);
  }
  transformWithStatement(tree) {
    var expression = this.transformAny(tree.expression);
    var body = this.transformAny(tree.body);
    if (expression === tree.expression && body === tree.body) {
      return tree;
    }
    return new WithStatement(tree.location, expression, body);
  }
  transformYieldExpression(tree) {
    var expression = this.transformAny(tree.expression);
    if (expression === tree.expression) {
      return tree;
    }
    return new YieldExpression(tree.location, expression, tree.isYieldFor);
  }
}
