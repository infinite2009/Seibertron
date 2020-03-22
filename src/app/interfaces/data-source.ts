import { InjectionToken } from '@angular/core';

enum DataSource {
  local,
  api
}

export default DataSource;

export const LocalData = new InjectionToken<DataSource>('本地数据');
export const APIData = new InjectionToken<DataSource>('后端接口');

