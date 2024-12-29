import type {Node, Diagnostic, SourceFile} from 'typescript';
import type {SourceFileValidatorRule} from './api';
import type {TemplateTypeChecker} from '@angular/compiler-cli/private/migrations';
import type {ImportedSymbolsTracker} from '../../../imports';
import type {TypeCheckingConfig} from '../../../typecheck/api';

export class DeprecatedUsagesRule implements SourceFileValidatorRule {
  constructor(
    private templateTypeChecker: TemplateTypeChecker,
    private typeCheckingConfig: TypeCheckingConfig,
    private importedSymbolsTracker: ImportedSymbolsTracker,
  ) {}

  shouldCheck(sourceFile: SourceFile): boolean {
    throw Error('not implemented');
  }

  checkNode(node: Node): Diagnostic | Diagnostic[] | null {
    throw Error('not implemented');
  }
}
