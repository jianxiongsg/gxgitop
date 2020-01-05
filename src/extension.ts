// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as spawn from 'cross-spawn';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	
	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('extension.jxgitop', () => {
		console.log('Congratulations, your extension "jxgitop" is now active!');
		// The code you place here will be executed every time your command is executed
		vscode.workspace.onDidChangeTextDocument(event=>{
			console.log('...... event.document: ',event.document)
			if(event.document){
				console.log('...... event.document.uri: ',event.document.uri)
			}
		})
		// Display a message box to the user
		// vscode.window.showInformationMessage('Hello World!!!');
		// let cwd = vscode.workspace.rootPath;
		// if(!cwd){
		// 	return;
		// }
		// console.log('context.extensionPath',context.extensionPath)
		// console.log('context.logPath',context.logPath)
		// console.log('context.context',context)
		// console.log('context.asRelativePath',vscode.workspace.asRelativePath)
		// console.log('context.workspaceFolders',vscode.workspace.workspaceFolders)
		// console.log('......rootPath cwd: ',vscode.workspace.rootPath)
		// spawn('jxgitop',['-d',cwd],{
        //     cwd:cwd,
        //     // shell:true
        // })
	});

	context.subscriptions.push(disposable);
	const key = 'vscodePluginDemo.jxgitop';
    if (vscode.workspace.getConfiguration().get(key)) {
        vscode.commands.executeCommand('extension.jxgitop');
    }
}

// this method is called when your extension is deactivated
export function deactivate() {}
