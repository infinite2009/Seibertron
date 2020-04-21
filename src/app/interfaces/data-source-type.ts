import { InjectionToken } from '@angular/core';
import { NgxMonacoEditorConfig } from 'ngx-monaco-editor';

enum DataSourceType {
  local,
  api,
  native,
}

export default DataSourceType;

export const LocalData = new InjectionToken<DataSourceType>('本地数据');
export const APIData = new InjectionToken<DataSourceType>('后端接口');

// export const CodeEditorConfig = new InjectionToken('代码编辑器');
//
// export const monacoConfig: NgxMonacoEditorConfig = {
//   baseUrl: './assets', // configure base path for monaco editor default: './assets'
//   defaultOptions: { scrollBeyondLastLine: false }, // pass default options to be used
//   onMonacoLoad: () => {
//     console.log((window as any).monaco);
//   }, // here monaco object will be available as window.monaco use this function to extend monaco editor functionalities.
// };

