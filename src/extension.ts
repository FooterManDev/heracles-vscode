import * as vscode from 'vscode';
import * as path from 'path';
import * as fs from 'fs';

export function activate(context: vscode.ExtensionContext) {
	let disposable = vscode.languages.registerCompletionItemProvider('json', {
		provideCompletionItems(document, position, token, context) {
			const fPath = document.uri.fsPath
			const isQuest = fPath.includes(path.sep + 'heracles' + path.sep + 'quests' + path.sep) &&
			path.extname(fPath) === '.json';

			if(isQuest) {
				const completionItems: vscode.CompletionItem[] = [
					new vscode.CompletionItem('dependencies', vscode.CompletionItemKind.Field),
					new vscode.CompletionItem('settings', vscode.CompletionItemKind.Field)
				]
				return completionItems;
			}
			return [];
		},
	})

}

export function deactivate() {}
