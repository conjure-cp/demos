type AbstractLiteral<T> =
  | IAbsLitTuple<T>
  | IAbsLitRecord<T>
  | IAbsLitVariant<T>
  | IAbsLitMatrix<T>
  | IAbsLitSet<T>
  | IAbsLitMSet<T>
  | IAbsLitFunction<T>
  | IAbsLitSequence<T>
  | IAbsLitRelation<T>
  | IAbsLitPartition<T>

interface IAbsLitTuple<T> {
  tag: 'AbsLitTuple'
  contents: T[]
}

interface IAbsLitRecord<T> {
  tag: 'AbsLitRecord'
  contents: [Name, T][]
}

interface IAbsLitVariant<T> {
  tag: 'AbsLitVariant'
  contents: [[Name, Domain<void, T>][], Name, T]
}

interface IAbsLitMatrix<T> {
  tag: 'AbsLitMatrix'
  contents: [Domain<void, T>, T[]]
}

interface IAbsLitSet<T> {
  tag: 'AbsLitSet'
  contents: T[]
}

interface IAbsLitMSet<T> {
  tag: 'AbsLitMSet'
  contents: T[]
}

interface IAbsLitFunction<T> {
  tag: 'AbsLitFunction'
  contents: [T, T][]
}

interface IAbsLitSequence<T> {
  tag: 'AbsLitSequence'
  contents: T[]
}

interface IAbsLitRelation<T> {
  tag: 'AbsLitRelation'
  contents: T[][]
}

interface IAbsLitPartition<T> {
  tag: 'AbsLitPartition'
  contents: T[][]
}

type AbstractPattern =
  | ISingle
  | IAbsPatTuple
  | IAbsPatMatrix
  | IAbsPatSet
  | IAbstractPatternMetaVar

interface ISingle {
  tag: 'Single'
  contents: Name
}

interface IAbsPatTuple {
  tag: 'AbsPatTuple'
  contents: AbstractPattern[]
}

interface IAbsPatMatrix {
  tag: 'AbsPatMatrix'
  contents: AbstractPattern[]
}

interface IAbsPatSet {
  tag: 'AbsPatSet'
  contents: AbstractPattern[]
}

interface IAbstractPatternMetaVar {
  tag: 'AbstractPatternMetaVar'
  contents: string
}

type AttrName =
  | 'AttrName_size'
  | 'AttrName_minSize'
  | 'AttrName_maxSize'
  | 'AttrName_minOccur'
  | 'AttrName_maxOccur'
  | 'AttrName_numParts'
  | 'AttrName_minNumParts'
  | 'AttrName_maxNumParts'
  | 'AttrName_partSize'
  | 'AttrName_minPartSize'
  | 'AttrName_maxPartSize'
  | 'AttrName_total'
  | 'AttrName_injective'
  | 'AttrName_surjective'
  | 'AttrName_bijective'
  | 'AttrName_regular'
  | 'AttrName_reflexive'
  | 'AttrName_irreflexive'
  | 'AttrName_coreflexive'
  | 'AttrName_symmetric'
  | 'AttrName_antiSymmetric'
  | 'AttrName_aSymmetric'
  | 'AttrName_transitive'
  | 'AttrName_connex'
  | 'AttrName_Euclidean'
  | 'AttrName_serial'
  | 'AttrName_equivalence'
  | 'AttrName_partialOrder'

type BinaryRelationAttr =
  | 'BinRelAttr_Reflexive'
  | 'BinRelAttr_Irreflexive'
  | 'BinRelAttr_Coreflexive'
  | 'BinRelAttr_Symmetric'
  | 'BinRelAttr_AntiSymmetric'
  | 'BinRelAttr_ASymmetric'
  | 'BinRelAttr_Transitive'
  | 'BinRelAttr_Total'
  | 'BinRelAttr_Connex'
  | 'BinRelAttr_Euclidean'
  | 'BinRelAttr_Serial'
  | 'BinRelAttr_Equivalence'
  | 'BinRelAttr_PartialOrder'

type BinaryRelationAttrs = IBinaryRelationAttrs

type IBinaryRelationAttrs = BinaryRelationAttr[]

type Constant =
  | IConstantBool
  | IConstantInt
  | IConstantEnum
  | IConstantField
  | IConstantAbstract
  | IDomainInConstant
  | ITypedConstant
  | IConstantUndefined

interface IConstantBool {
  tag: 'ConstantBool'
  contents: boolean
}

interface IConstantInt {
  tag: 'ConstantInt'
  contents: [IntTag, number]
}

interface IConstantEnum {
  tag: 'ConstantEnum'
  contents: [Name, Name[], Name]
}

interface IConstantField {
  tag: 'ConstantField'
  contents: [Name, Type]
}

interface IConstantAbstract {
  tag: 'ConstantAbstract'
  contents: AbstractLiteral<Constant>
}

interface IDomainInConstant {
  tag: 'DomainInConstant'
  contents: Domain<void, Constant>
}

interface ITypedConstant {
  tag: 'TypedConstant'
  contents: [Constant, Type]
}

interface IConstantUndefined {
  tag: 'ConstantUndefined'
  contents: [string, Type]
}

type Decision = IDecision

interface IDecision {
  dDescription: string[]
  dNumOptions?: number
  dDecision: number
}

type Declaration =
  | IFindOrGiven
  | ILetting
  | IGivenDomainDefnEnum
  | ILettingDomainDefnEnum
  | ILettingDomainDefnUnnamed

interface IFindOrGiven {
  tag: 'FindOrGiven'
  contents: [FindOrGiven, Name, Domain<void, Expression>]
}

interface ILetting {
  tag: 'Letting'
  contents: [Name, Expression]
}

interface IGivenDomainDefnEnum {
  tag: 'GivenDomainDefnEnum'
  contents: Name
}

interface ILettingDomainDefnEnum {
  tag: 'LettingDomainDefnEnum'
  contents: [Name, Name[]]
}

interface ILettingDomainDefnUnnamed {
  tag: 'LettingDomainDefnUnnamed'
  contents: [Name, Expression]
}

type Domain<T1, T2> =
  | IDomainAny<T1, T2>
  | IDomainBool<T1, T2>
  | IDomainIntE<T1, T2>
  | IDomainInt<T1, T2>
  | IDomainEnum<T1, T2>
  | IDomainUnnamed<T1, T2>
  | IDomainTuple<T1, T2>
  | IDomainRecord<T1, T2>
  | IDomainVariant<T1, T2>
  | IDomainMatrix<T1, T2>
  | IDomainSet<T1, T2>
  | IDomainMSet<T1, T2>
  | IDomainFunction<T1, T2>
  | IDomainSequence<T1, T2>
  | IDomainRelation<T1, T2>
  | IDomainPartition<T1, T2>
  | IDomainOp<T1, T2>
  | IDomainReference<T1, T2>
  | IDomainMetaVar<T1, T2>

interface IDomainAny<T1, T2> {
  tag: 'DomainAny'
  contents: [string, Type]
}

interface IDomainBool<T1, T2> {
  tag: 'DomainBool'
}

interface IDomainIntE<T1, T2> {
  tag: 'DomainIntE'
  contents: T2
}

interface IDomainInt<T1, T2> {
  tag: 'DomainInt'
  contents: [IntTag, ConjureRange<T2>[]]
}

interface IDomainEnum<T1, T2> {
  tag: 'DomainEnum'
  contents: [Name, ConjureRange<T2>[], [Name, number][]]
}

interface IDomainUnnamed<T1, T2> {
  tag: 'DomainUnnamed'
  contents: [Name, T2]
}

interface IDomainTuple<T1, T2> {
  tag: 'DomainTuple'
  contents: Domain<T1, T2>[]
}

interface IDomainRecord<T1, T2> {
  tag: 'DomainRecord'
  contents: [Name, Domain<T1, T2>][]
}

interface IDomainVariant<T1, T2> {
  tag: 'DomainVariant'
  contents: [Name, Domain<T1, T2>][]
}

interface IDomainMatrix<T1, T2> {
  tag: 'DomainMatrix'
  contents: [Domain<void, T2>, Domain<T1, T2>]
}

interface IDomainSet<T1, T2> {
  tag: 'DomainSet'
  contents: [T1, SetAttr<T2>, Domain<T1, T2>]
}

interface IDomainMSet<T1, T2> {
  tag: 'DomainMSet'
  contents: [T1, MSetAttr<T2>, Domain<T1, T2>]
}

interface IDomainFunction<T1, T2> {
  tag: 'DomainFunction'
  contents: [T1, FunctionAttr<T2>, Domain<T1, T2>, Domain<T1, T2>]
}

interface IDomainSequence<T1, T2> {
  tag: 'DomainSequence'
  contents: [T1, SequenceAttr<T2>, Domain<T1, T2>]
}

interface IDomainRelation<T1, T2> {
  tag: 'DomainRelation'
  contents: [T1, RelationAttr<T2>, Domain<T1, T2>[]]
}

interface IDomainPartition<T1, T2> {
  tag: 'DomainPartition'
  contents: [T1, PartitionAttr<T2>, Domain<T1, T2>]
}

interface IDomainOp<T1, T2> {
  tag: 'DomainOp'
  contents: [Name, Domain<T1, T2>[]]
}

interface IDomainReference<T1, T2> {
  tag: 'DomainReference'
  contents: [Name, Domain<T1, T2>]
}

interface IDomainMetaVar<T1, T2> {
  tag: 'DomainMetaVar'
  contents: string
}

type Expression =
  | IConstant
  | IAbstractLiteral
  | IDomain
  | IReference
  | IWithLocals
  | IComprehension
  | ITyped
  | IOp
  | IExpressionMetaVar

interface IConstant {
  tag: 'Constant'
  contents: Constant
}

interface IAbstractLiteral {
  tag: 'AbstractLiteral'
  contents: AbstractLiteral<Expression>
}

interface IDomain {
  tag: 'Domain'
  contents: Domain<void, Expression>
}

interface IReference {
  tag: 'Reference'
  contents: [Name, ReferenceTo]
}

interface IWithLocals {
  tag: 'WithLocals'
  contents: [Expression, InBubble]
}

interface IComprehension {
  tag: 'Comprehension'
  contents: [Expression, GeneratorOrCondition[]]
}

interface ITyped {
  tag: 'Typed'
  contents: [Expression, Type]
}

interface IOp {
  tag: 'Op'
  contents: Op<Expression>
}

interface IExpressionMetaVar {
  tag: 'ExpressionMetaVar'
  contents: string
}

type FindOrGiven = 'Find' | 'Given' | 'Quantified' | 'CutFind' | 'LocalFind'

type FunctionAttr<T> = IFunctionAttr<T>

type IFunctionAttr<T> = [SizeAttr<T>, PartialityAttr, JectivityAttr]

type ConjureGenerator = IGenDomainNoRepr | IGenDomainHasRepr | IGenInExpr

interface IGenDomainNoRepr {
  tag: 'GenDomainNoRepr'
  contents: [AbstractPattern, Domain<void, Expression>]
}

interface IGenDomainHasRepr {
  tag: 'GenDomainHasRepr'
  contents: [Name, Domain<HasRepresentation, Expression>]
}

interface IGenInExpr {
  tag: 'GenInExpr'
  contents: [AbstractPattern, Expression]
}

type GeneratorOrCondition = IGenerator | ICondition | IComprehensionLetting

interface IGenerator {
  tag: 'ConjureGenerator'
  contents: ConjureGenerator
}

interface ICondition {
  tag: 'Condition'
  contents: Expression
}

interface IComprehensionLetting {
  tag: 'ComprehensionLetting'
  contents: [AbstractPattern, Expression]
}

type HasRepresentation =
  | INoRepresentation
  | ISet_Occurrence
  | ISet_Explicit
  | ISet_ExplicitVarSizeWithFlags
  | ISet_ExplicitVarSizeWithMarker
  | ISet_ExplicitVarSizeWithDummy
  | IMSet_Occurrence
  | IMSet_ExplicitWithFlags
  | IMSet_ExplicitWithRepetition
  | IFunction_1D
  | IFunction_1DPartial
  | IFunction_ND
  | IFunction_NDPartial
  | IFunction_AsRelation
  | ISequence_ExplicitBounded
  | IRelation_AsMatrix
  | IRelation_AsSet
  | IPartition_AsSet
  | IPartition_Occurrence

interface INoRepresentation {
  tag: 'NoRepresentation'
}

interface ISet_Occurrence {
  tag: 'Set_Occurrence'
}

interface ISet_Explicit {
  tag: 'Set_Explicit'
}

interface ISet_ExplicitVarSizeWithFlags {
  tag: 'Set_ExplicitVarSizeWithFlags'
}

interface ISet_ExplicitVarSizeWithMarker {
  tag: 'Set_ExplicitVarSizeWithMarker'
}

interface ISet_ExplicitVarSizeWithDummy {
  tag: 'Set_ExplicitVarSizeWithDummy'
}

interface IMSet_Occurrence {
  tag: 'MSet_Occurrence'
}

interface IMSet_ExplicitWithFlags {
  tag: 'MSet_ExplicitWithFlags'
}

interface IMSet_ExplicitWithRepetition {
  tag: 'MSet_ExplicitWithRepetition'
}

interface IFunction_1D {
  tag: 'Function_1D'
}

interface IFunction_1DPartial {
  tag: 'Function_1DPartial'
}

interface IFunction_ND {
  tag: 'Function_ND'
}

interface IFunction_NDPartial {
  tag: 'Function_NDPartial'
}

interface IFunction_AsRelation {
  tag: 'Function_AsRelation'
  contents: HasRepresentation
}

interface ISequence_ExplicitBounded {
  tag: 'Sequence_ExplicitBounded'
}

interface IRelation_AsMatrix {
  tag: 'Relation_AsMatrix'
}

interface IRelation_AsSet {
  tag: 'Relation_AsSet'
  contents: HasRepresentation
}

interface IPartition_AsSet {
  tag: 'Partition_AsSet'
  contents: [HasRepresentation, HasRepresentation]
}

interface IPartition_Occurrence {
  tag: 'Partition_Occurrence'
}

type InBubble = IAuxiliaryVars | IDefinednessConstraints

interface IAuxiliaryVars {
  tag: 'AuxiliaryVars'
  contents: Statement[]
}

interface IDefinednessConstraints {
  tag: 'DefinednessConstraints'
  contents: Expression[]
}

type IntTag = ITagInt | ITagEnum | ITagUnnamed

interface ITagInt {
  tag: 'TagInt'
}

interface ITagEnum {
  tag: 'TagEnum'
  contents: string
}

interface ITagUnnamed {
  tag: 'TagUnnamed'
  contents: string
}

type JectivityAttr =
  | 'JectivityAttr_None'
  | 'JectivityAttr_Injective'
  | 'JectivityAttr_Surjective'
  | 'JectivityAttr_Bijective'

type LanguageVersion = ILanguageVersion

type ILanguageVersion = [Name, number[]]

type Model = IModel

interface IModel {
  mLanguage: LanguageVersion
  mStatements: Statement[]
  mInfo: ModelInfo
}

type ModelInfo = IModelInfo

interface IModelInfo {
  miGivens: Name[]
  miFinds: Name[]
  miLettings: [Name, Expression][]
  miEnumGivens: Name[]
  miEnumLettings: Declaration[]
  miUnnameds: [Name, Expression][]
  miOriginalDomains: [Name, Domain<void, Expression>][]
  miRepresentations: [Name, Domain<HasRepresentation, Expression>][]
  miRepresentationsTree: [Name, Tree<HasRepresentation>[]][]
  miStrategyQ: Strategy
  miStrategyA: Strategy
  miTrailCompact: [number, number, number][]
  miTrailVerbose: Decision[]
  miTrailRewrites: TrailRewrites[]
  miNameGenState: [string, number][]
  miNbExtraGivens: number
}

type MSetAttr<T> = IMSetAttr<T>

type IMSetAttr<T> = [SizeAttr<T>, OccurAttr<T>]

type Name = IName | IMachineName | INameMetaVar

interface IName {
  tag: 'Name'
  contents: string
}

interface IMachineName {
  tag: 'MachineName'
  contents: [string, number, string[]]
}

interface INameMetaVar {
  tag: 'NameMetaVar'
  contents: string
}

type Objective = 'Minimising' | 'Maximising'

type OccurAttr<T> =
  | IOccurAttr_None<T>
  | IOccurAttr_MinOccur<T>
  | IOccurAttr_MaxOccur<T>
  | IOccurAttr_MinMaxOccur<T>

interface IOccurAttr_None<T> {
  tag: 'OccurAttr_None'
}

interface IOccurAttr_MinOccur<T> {
  tag: 'OccurAttr_MinOccur'
  contents: T
}

interface IOccurAttr_MaxOccur<T> {
  tag: 'OccurAttr_MaxOccur'
  contents: T
}

interface IOccurAttr_MinMaxOccur<T> {
  tag: 'OccurAttr_MinMaxOccur'
  contents: [T, T]
}

type Op<T> =
  | IMkOpActive<T>
  | IMkOpAllDiff<T>
  | IMkOpAllDiffExcept<T>
  | IMkOpAnd<T>
  | IMkOpApart<T>
  | IMkOpAttributeAsConstraint<T>
  | IMkOpCatchUndef<T>
  | IMkOpDefined<T>
  | IMkOpDiv<T>
  | IMkOpDontCare<T>
  | IMkOpDotLeq<T>
  | IMkOpDotLt<T>
  | IMkOpEq<T>
  | IMkOpFactorial<T>
  | IMkOpFlatten<T>
  | IMkOpFreq<T>
  | IMkOpGeq<T>
  | IMkOpGt<T>
  | IMkOpHist<T>
  | IMkOpIff<T>
  | IMkOpImage<T>
  | IMkOpImageSet<T>
  | IMkOpImply<T>
  | IMkOpIn<T>
  | IMkOpIndexing<T>
  | IMkOpIntersect<T>
  | IMkOpInverse<T>
  | IMkOpLeq<T>
  | IMkOpLexLeq<T>
  | IMkOpLexLt<T>
  | IMkOpLt<T>
  | IMkOpMax<T>
  | IMkOpMin<T>
  | IMkOpMinus<T>
  | IMkOpMod<T>
  | IMkOpNegate<T>
  | IMkOpNeq<T>
  | IMkOpNot<T>
  | IMkOpOr<T>
  | IMkOpParticipants<T>
  | IMkOpParts<T>
  | IMkOpParty<T>
  | IMkOpPow<T>
  | IMkOpPowerSet<T>
  | IMkOpPreImage<T>
  | IMkOpPred<T>
  | IMkOpProduct<T>
  | IMkOpRange<T>
  | IMkOpRelationProj<T>
  | IMkOpRestrict<T>
  | IMkOpSlicing<T>
  | IMkOpSubsequence<T>
  | IMkOpSubset<T>
  | IMkOpSubsetEq<T>
  | IMkOpSubstring<T>
  | IMkOpSucc<T>
  | IMkOpSum<T>
  | IMkOpSupset<T>
  | IMkOpSupsetEq<T>
  | IMkOpTildeLeq<T>
  | IMkOpTildeLt<T>
  | IMkOpToInt<T>
  | IMkOpToMSet<T>
  | IMkOpToRelation<T>
  | IMkOpToSet<T>
  | IMkOpTogether<T>
  | IMkOpTransform<T>
  | IMkOpTrue<T>
  | IMkOpTwoBars<T>
  | IMkOpUnion<T>
  | IMkOpXor<T>

interface IMkOpActive<T> {
  tag: 'MkOpActive'
  contents: OpActive<T>
}

interface IMkOpAllDiff<T> {
  tag: 'MkOpAllDiff'
  contents: OpAllDiff<T>
}

interface IMkOpAllDiffExcept<T> {
  tag: 'MkOpAllDiffExcept'
  contents: OpAllDiffExcept<T>
}

interface IMkOpAnd<T> {
  tag: 'MkOpAnd'
  contents: OpAnd<T>
}

interface IMkOpApart<T> {
  tag: 'MkOpApart'
  contents: OpApart<T>
}

interface IMkOpAttributeAsConstraint<T> {
  tag: 'MkOpAttributeAsConstraint'
  contents: OpAttributeAsConstraint<T>
}

interface IMkOpCatchUndef<T> {
  tag: 'MkOpCatchUndef'
  contents: OpCatchUndef<T>
}

interface IMkOpDefined<T> {
  tag: 'MkOpDefined'
  contents: OpDefined<T>
}

interface IMkOpDiv<T> {
  tag: 'MkOpDiv'
  contents: OpDiv<T>
}

interface IMkOpDontCare<T> {
  tag: 'MkOpDontCare'
  contents: OpDontCare<T>
}

interface IMkOpDotLeq<T> {
  tag: 'MkOpDotLeq'
  contents: OpDotLeq<T>
}

interface IMkOpDotLt<T> {
  tag: 'MkOpDotLt'
  contents: OpDotLt<T>
}

interface IMkOpEq<T> {
  tag: 'MkOpEq'
  contents: OpEq<T>
}

interface IMkOpFactorial<T> {
  tag: 'MkOpFactorial'
  contents: OpFactorial<T>
}

interface IMkOpFlatten<T> {
  tag: 'MkOpFlatten'
  contents: OpFlatten<T>
}

interface IMkOpFreq<T> {
  tag: 'MkOpFreq'
  contents: OpFreq<T>
}

interface IMkOpGeq<T> {
  tag: 'MkOpGeq'
  contents: OpGeq<T>
}

interface IMkOpGt<T> {
  tag: 'MkOpGt'
  contents: OpGt<T>
}

interface IMkOpHist<T> {
  tag: 'MkOpHist'
  contents: OpHist<T>
}

interface IMkOpIff<T> {
  tag: 'MkOpIff'
  contents: OpIff<T>
}

interface IMkOpImage<T> {
  tag: 'MkOpImage'
  contents: OpImage<T>
}

interface IMkOpImageSet<T> {
  tag: 'MkOpImageSet'
  contents: OpImageSet<T>
}

interface IMkOpImply<T> {
  tag: 'MkOpImply'
  contents: OpImply<T>
}

interface IMkOpIn<T> {
  tag: 'MkOpIn'
  contents: OpIn<T>
}

interface IMkOpIndexing<T> {
  tag: 'MkOpIndexing'
  contents: OpIndexing<T>
}

interface IMkOpIntersect<T> {
  tag: 'MkOpIntersect'
  contents: OpIntersect<T>
}

interface IMkOpInverse<T> {
  tag: 'MkOpInverse'
  contents: OpInverse<T>
}

interface IMkOpLeq<T> {
  tag: 'MkOpLeq'
  contents: OpLeq<T>
}

interface IMkOpLexLeq<T> {
  tag: 'MkOpLexLeq'
  contents: OpLexLeq<T>
}

interface IMkOpLexLt<T> {
  tag: 'MkOpLexLt'
  contents: OpLexLt<T>
}

interface IMkOpLt<T> {
  tag: 'MkOpLt'
  contents: OpLt<T>
}

interface IMkOpMax<T> {
  tag: 'MkOpMax'
  contents: OpMax<T>
}

interface IMkOpMin<T> {
  tag: 'MkOpMin'
  contents: OpMin<T>
}

interface IMkOpMinus<T> {
  tag: 'MkOpMinus'
  contents: OpMinus<T>
}

interface IMkOpMod<T> {
  tag: 'MkOpMod'
  contents: OpMod<T>
}

interface IMkOpNegate<T> {
  tag: 'MkOpNegate'
  contents: OpNegate<T>
}

interface IMkOpNeq<T> {
  tag: 'MkOpNeq'
  contents: OpNeq<T>
}

interface IMkOpNot<T> {
  tag: 'MkOpNot'
  contents: OpNot<T>
}

interface IMkOpOr<T> {
  tag: 'MkOpOr'
  contents: OpOr<T>
}

interface IMkOpParticipants<T> {
  tag: 'MkOpParticipants'
  contents: OpParticipants<T>
}

interface IMkOpParts<T> {
  tag: 'MkOpParts'
  contents: OpParts<T>
}

interface IMkOpParty<T> {
  tag: 'MkOpParty'
  contents: OpParty<T>
}

interface IMkOpPow<T> {
  tag: 'MkOpPow'
  contents: OpPow<T>
}

interface IMkOpPowerSet<T> {
  tag: 'MkOpPowerSet'
  contents: OpPowerSet<T>
}

interface IMkOpPreImage<T> {
  tag: 'MkOpPreImage'
  contents: OpPreImage<T>
}

interface IMkOpPred<T> {
  tag: 'MkOpPred'
  contents: OpPred<T>
}

interface IMkOpProduct<T> {
  tag: 'MkOpProduct'
  contents: OpProduct<T>
}

interface IMkOpRange<T> {
  tag: 'MkOpRange'
  contents: OpRange<T>
}

interface IMkOpRelationProj<T> {
  tag: 'MkOpRelationProj'
  contents: OpRelationProj<T>
}

interface IMkOpRestrict<T> {
  tag: 'MkOpRestrict'
  contents: OpRestrict<T>
}

interface IMkOpSlicing<T> {
  tag: 'MkOpSlicing'
  contents: OpSlicing<T>
}

interface IMkOpSubsequence<T> {
  tag: 'MkOpSubsequence'
  contents: OpSubsequence<T>
}

interface IMkOpSubset<T> {
  tag: 'MkOpSubset'
  contents: OpSubset<T>
}

interface IMkOpSubsetEq<T> {
  tag: 'MkOpSubsetEq'
  contents: OpSubsetEq<T>
}

interface IMkOpSubstring<T> {
  tag: 'MkOpSubstring'
  contents: OpSubstring<T>
}

interface IMkOpSucc<T> {
  tag: 'MkOpSucc'
  contents: OpSucc<T>
}

interface IMkOpSum<T> {
  tag: 'MkOpSum'
  contents: OpSum<T>
}

interface IMkOpSupset<T> {
  tag: 'MkOpSupset'
  contents: OpSupset<T>
}

interface IMkOpSupsetEq<T> {
  tag: 'MkOpSupsetEq'
  contents: OpSupsetEq<T>
}

interface IMkOpTildeLeq<T> {
  tag: 'MkOpTildeLeq'
  contents: OpTildeLeq<T>
}

interface IMkOpTildeLt<T> {
  tag: 'MkOpTildeLt'
  contents: OpTildeLt<T>
}

interface IMkOpToInt<T> {
  tag: 'MkOpToInt'
  contents: OpToInt<T>
}

interface IMkOpToMSet<T> {
  tag: 'MkOpToMSet'
  contents: OpToMSet<T>
}

interface IMkOpToRelation<T> {
  tag: 'MkOpToRelation'
  contents: OpToRelation<T>
}

interface IMkOpToSet<T> {
  tag: 'MkOpToSet'
  contents: OpToSet<T>
}

interface IMkOpTogether<T> {
  tag: 'MkOpTogether'
  contents: OpTogether<T>
}

interface IMkOpTransform<T> {
  tag: 'MkOpTransform'
  contents: OpTransform<T>
}

interface IMkOpTrue<T> {
  tag: 'MkOpTrue'
  contents: OpTrue<T>
}

interface IMkOpTwoBars<T> {
  tag: 'MkOpTwoBars'
  contents: OpTwoBars<T>
}

interface IMkOpUnion<T> {
  tag: 'MkOpUnion'
  contents: OpUnion<T>
}

interface IMkOpXor<T> {
  tag: 'MkOpXor'
  contents: OpXor<T>
}

type OpActive<T> = IOpActive<T>

type IOpActive<T> = [T, Name]

type OpAllDiff<T> = IOpAllDiff<T>

type IOpAllDiff<T> = T

type OpAllDiffExcept<T> = IOpAllDiffExcept<T>

type IOpAllDiffExcept<T> = [T, T]

type OpAnd<T> = IOpAnd<T>

type IOpAnd<T> = T

type OpApart<T> = IOpApart<T>

type IOpApart<T> = [T, T]

type OpAttributeAsConstraint<T> = IOpAttributeAsConstraint<T>

type IOpAttributeAsConstraint<T> = [T, AttrName, T]

type OpCatchUndef<T> = IOpCatchUndef<T>

type IOpCatchUndef<T> = [T, T]

type OpDefined<T> = IOpDefined<T>

type IOpDefined<T> = T

type OpDiv<T> = IOpDiv<T>

type IOpDiv<T> = [T, T]

type OpDontCare<T> = IOpDontCare<T>

type IOpDontCare<T> = T

type OpDotLeq<T> = IOpDotLeq<T>

type IOpDotLeq<T> = [T, T]

type OpDotLt<T> = IOpDotLt<T>

type IOpDotLt<T> = [T, T]

type OpEq<T> = IOpEq<T>

type IOpEq<T> = [T, T]

type OpFactorial<T> = IOpFactorial<T>

type IOpFactorial<T> = T

type OpFlatten<T> = IOpFlatten<T>

type IOpFlatten<T> = [number, T]

type OpFreq<T> = IOpFreq<T>

type IOpFreq<T> = [T, T]

type OpGeq<T> = IOpGeq<T>

type IOpGeq<T> = [T, T]

type OpGt<T> = IOpGt<T>

type IOpGt<T> = [T, T]

type OpHist<T> = IOpHist<T>

type IOpHist<T> = T

type OpIff<T> = IOpIff<T>

type IOpIff<T> = [T, T]

type OpImage<T> = IOpImage<T>

type IOpImage<T> = [T, T]

type OpImageSet<T> = IOpImageSet<T>

type IOpImageSet<T> = [T, T]

type OpImply<T> = IOpImply<T>

type IOpImply<T> = [T, T]

type OpIn<T> = IOpIn<T>

type IOpIn<T> = [T, T]

type OpIndexing<T> = IOpIndexing<T>

type IOpIndexing<T> = [T, T]

type OpIntersect<T> = IOpIntersect<T>

type IOpIntersect<T> = [T, T]

type OpInverse<T> = IOpInverse<T>

type IOpInverse<T> = [T, T]

type OpLeq<T> = IOpLeq<T>

type IOpLeq<T> = [T, T]

type OpLexLeq<T> = IOpLexLeq<T>

type IOpLexLeq<T> = [T, T]

type OpLexLt<T> = IOpLexLt<T>

type IOpLexLt<T> = [T, T]

type OpLt<T> = IOpLt<T>

type IOpLt<T> = [T, T]

type OpMax<T> = IOpMax<T>

type IOpMax<T> = T

type OpMin<T> = IOpMin<T>

type IOpMin<T> = T

type OpMinus<T> = IOpMinus<T>

type IOpMinus<T> = [T, T]

type OpMod<T> = IOpMod<T>

type IOpMod<T> = [T, T]

type OpNegate<T> = IOpNegate<T>

type IOpNegate<T> = T

type OpNeq<T> = IOpNeq<T>

type IOpNeq<T> = [T, T]

type OpNot<T> = IOpNot<T>

type IOpNot<T> = T

type OpOr<T> = IOpOr<T>

type IOpOr<T> = T

type OpParticipants<T> = IOpParticipants<T>

type IOpParticipants<T> = T

type OpParts<T> = IOpParts<T>

type IOpParts<T> = T

type OpParty<T> = IOpParty<T>

type IOpParty<T> = [T, T]

type OpPow<T> = IOpPow<T>

type IOpPow<T> = [T, T]

type OpPowerSet<T> = IOpPowerSet<T>

type IOpPowerSet<T> = T

type OpPred<T> = IOpPred<T>

type IOpPred<T> = T

type OpPreImage<T> = IOpPreImage<T>

type IOpPreImage<T> = [T, T]

type OpProduct<T> = IOpProduct<T>

type IOpProduct<T> = T

type OpRange<T> = IOpRange<T>

type IOpRange<T> = T

type OpRelationProj<T> = IOpRelationProj<T>

type IOpRelationProj<T> = [T, T[]]

type OpRestrict<T> = IOpRestrict<T>

type IOpRestrict<T> = [T, T]

type OpSlicing<T> = IOpSlicing<T>

type IOpSlicing<T> = [T, T, T]

type OpSubsequence<T> = IOpSubsequence<T>

type IOpSubsequence<T> = [T, T]

type OpSubset<T> = IOpSubset<T>

type IOpSubset<T> = [T, T]

type OpSubsetEq<T> = IOpSubsetEq<T>

type IOpSubsetEq<T> = [T, T]

type OpSubstring<T> = IOpSubstring<T>

type IOpSubstring<T> = [T, T]

type OpSucc<T> = IOpSucc<T>

type IOpSucc<T> = T

type OpSum<T> = IOpSum<T>

type IOpSum<T> = T

type OpSupset<T> = IOpSupset<T>

type IOpSupset<T> = [T, T]

type OpSupsetEq<T> = IOpSupsetEq<T>

type IOpSupsetEq<T> = [T, T]

type OpTildeLeq<T> = IOpTildeLeq<T>

type IOpTildeLeq<T> = [T, T]

type OpTildeLt<T> = IOpTildeLt<T>

type IOpTildeLt<T> = [T, T]

type OpTogether<T> = IOpTogether<T>

type IOpTogether<T> = [T, T]

type OpToInt<T> = IOpToInt<T>

type IOpToInt<T> = T

type OpToMSet<T> = IOpToMSet<T>

type IOpToMSet<T> = T

type OpToRelation<T> = IOpToRelation<T>

type IOpToRelation<T> = T

type OpToSet<T> = IOpToSet<T>

type IOpToSet<T> = [boolean, T]

type OpTransform<T> = IOpTransform<T>

type IOpTransform<T> = [T, T]

type OpTrue<T> = IOpTrue<T>

type IOpTrue<T> = T

type OpTwoBars<T> = IOpTwoBars<T>

type IOpTwoBars<T> = T

type OpUnion<T> = IOpUnion<T>

type IOpUnion<T> = [T, T]

type OpXor<T> = IOpXor<T>

type IOpXor<T> = T

type PartialityAttr = 'PartialityAttr_Partial' | 'PartialityAttr_Total'

type PartitionAttr<T> = IPartitionAttr<T>

interface IPartitionAttr<T> {
  partsNum: SizeAttr<T>
  partsSize: SizeAttr<T>
  isRegular: boolean
}

type ConjureRange<T> =
  | IRangeOpen<T>
  | IRangeSingle<T>
  | IRangeLowerBounded<T>
  | IRangeUpperBounded<T>
  | IRangeBounded<T>

interface IRangeOpen<T> {
  tag: 'RangeOpen'
}

interface IRangeSingle<T> {
  tag: 'RangeSingle'
  contents: T
}

interface IRangeLowerBounded<T> {
  tag: 'RangeLowerBounded'
  contents: T
}

interface IRangeUpperBounded<T> {
  tag: 'RangeUpperBounded'
  contents: T
}

interface IRangeBounded<T> {
  tag: 'RangeBounded'
  contents: [T, T]
}

type ReferenceTo =
  | IAlias
  | IInComprehension
  | IDeclNoRepr
  | IDeclHasRepr
  | IRecordField
  | IVariantField

interface IAlias {
  tag: 'Alias'
  contents: Expression
}

interface IInComprehension {
  tag: 'InComprehension'
  contents: ConjureGenerator
}

interface IDeclNoRepr {
  tag: 'DeclNoRepr'
  contents: [FindOrGiven, Name, Domain<void, Expression>, Region]
}

interface IDeclHasRepr {
  tag: 'DeclHasRepr'
  contents: [FindOrGiven, Name, Domain<HasRepresentation, Expression>]
}

interface IRecordField {
  tag: 'RecordField'
  contents: [Name, Type]
}

interface IVariantField {
  tag: 'VariantField'
  contents: [Name, Type]
}

type Region = INoRegion | IRegion

interface INoRegion {
  tag: 'NoRegion'
}

interface IRegion {
  tag: 'Region'
  contents: number
}

type RelationAttr<T> = IRelationAttr<T>

type IRelationAttr<T> = [SizeAttr<T>, BinaryRelationAttrs]

type SearchOrder = IBranchingOn | ICut

interface IBranchingOn {
  tag: 'BranchingOn'
  contents: Name
}

interface ICut {
  tag: 'Cut'
  contents: Expression
}

type SequenceAttr<T> = ISequenceAttr<T>

type ISequenceAttr<T> = [SizeAttr<T>, JectivityAttr]

type SetAttr<T> = ISetAttr<T>

type ISetAttr<T> = SizeAttr<T>

type SizeAttr<T> =
  | ISizeAttr_None<T>
  | ISizeAttr_Size<T>
  | ISizeAttr_MinSize<T>
  | ISizeAttr_MaxSize<T>
  | ISizeAttr_MinMaxSize<T>

interface ISizeAttr_None<T> {
  tag: 'SizeAttr_None'
}

interface ISizeAttr_Size<T> {
  tag: 'SizeAttr_Size'
  contents: T
}

interface ISizeAttr_MinSize<T> {
  tag: 'SizeAttr_MinSize'
  contents: T
}

interface ISizeAttr_MaxSize<T> {
  tag: 'SizeAttr_MaxSize'
  contents: T
}

interface ISizeAttr_MinMaxSize<T> {
  tag: 'SizeAttr_MinMaxSize'
  contents: [T, T]
}

type Statement =
  | IDeclaration
  | ISearchOrder
  | ISearchHeuristic
  | IWhere
  | IObjective
  | ISuchThat

interface IDeclaration {
  tag: 'Declaration'
  contents: Declaration
}

interface ISearchOrder {
  tag: 'SearchOrder'
  contents: SearchOrder[]
}

interface ISearchHeuristic {
  tag: 'SearchHeuristic'
  contents: Name
}

interface IWhere {
  tag: 'Where'
  contents: Expression[]
}

interface IObjective {
  tag: 'Objective'
  contents: [Objective, Expression]
}

interface ISuchThat {
  tag: 'SuchThat'
  contents: Expression[]
}

type Strategy =
  | IPickFirst
  | IPickAll
  | IInteractive
  | IAtRandom
  | ICompact
  | ISparse
  | IAuto

interface IPickFirst {
  tag: 'PickFirst'
}

interface IPickAll {
  tag: 'PickAll'
}

interface IInteractive {
  tag: 'Interactive'
}

interface IAtRandom {
  tag: 'AtRandom'
}

interface ICompact {
  tag: 'Compact'
}

interface ISparse {
  tag: 'Sparse'
}

interface IAuto {
  tag: 'Auto'
  contents: Strategy
}

type TrailRewrites = ITrailRewrites

interface ITrailRewrites {
  trRule: string
  trBefore: string[]
  trAfter: string[]
}

type Tree<T> = ITree<T>

interface ITree<T> {
  rootLabel: T
  subForest: Tree<T>[]
}

type Type =
  | ITypeAny
  | ITypeBool
  | ITypeInt
  | ITypeEnum
  | ITypeUnnamed
  | ITypeTuple
  | ITypeRecord
  | ITypeVariant
  | ITypeList
  | ITypeMatrix
  | ITypeSet
  | ITypeMSet
  | ITypeFunction
  | ITypeSequence
  | ITypeRelation
  | ITypePartition

interface ITypeAny {
  tag: 'TypeAny'
}

interface ITypeBool {
  tag: 'TypeBool'
}

interface ITypeInt {
  tag: 'TypeInt'
  contents: IntTag
}

interface ITypeEnum {
  tag: 'TypeEnum'
  contents: Name
}

interface ITypeUnnamed {
  tag: 'TypeUnnamed'
  contents: Name
}

interface ITypeTuple {
  tag: 'TypeTuple'
  contents: Type[]
}

interface ITypeRecord {
  tag: 'TypeRecord'
  contents: [Name, Type][]
}

interface ITypeVariant {
  tag: 'TypeVariant'
  contents: [Name, Type][]
}

interface ITypeList {
  tag: 'TypeList'
  contents: Type
}

interface ITypeMatrix {
  tag: 'TypeMatrix'
  contents: [Type, Type]
}

interface ITypeSet {
  tag: 'TypeSet'
  contents: Type
}

interface ITypeMSet {
  tag: 'TypeMSet'
  contents: Type
}

interface ITypeFunction {
  tag: 'TypeFunction'
  contents: [Type, Type]
}

interface ITypeSequence {
  tag: 'TypeSequence'
  contents: Type
}

interface ITypeRelation {
  tag: 'TypeRelation'
  contents: Type[]
}

interface ITypePartition {
  tag: 'TypePartition'
  contents: Type
}
