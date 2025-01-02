import type {Node, Diagnostic, SourceFile} from 'typescript';
import type {SourceFileValidatorRule} from './api';
import type {ImportedSymbolsTracker} from '../../../imports';
import type {TemplateTypeChecker, TypeCheckingConfig} from '../../../typecheck/api';

export class DeprecatedUsagesRule implements SourceFileValidatorRule {
  constructor(
    private templateTypeChecker: TemplateTypeChecker,
    private typeCheckingConfig: TypeCheckingConfig,
    private importedSymbolsTracker: ImportedSymbolsTracker,
  ) {}

  shouldCheck(sourceFile: SourceFile): boolean {
    debugger;
    console.log(DeprecatedUsagesRule.name, 'shouldCheck', sourceFile.fileName);
    console.error('not implemented');
    return false;
  }

  checkNode(node: Node): Diagnostic | Diagnostic[] | null {
    debugger;
    throw Error('not implemented');
  }
}
