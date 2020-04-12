import { InjectionToken } from '@angular/core';

enum DataSourceType {
  local,
  api,
  native,
}

export default DataSourceType;

export const LocalData = new InjectionToken<DataSourceType>('本地数据');
export const APIData = new InjectionToken<DataSourceType>('后端接口');

