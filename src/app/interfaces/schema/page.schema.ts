import DynamicObject from '@/interfaces/dynamic-object';
import HttpMethod from '@/enum/schema/http-method.enum';
import { ContainerSchema } from '@/interfaces/schema/container.schema';

export interface HttpRequestOption {
  header: DynamicObject;
  [key: string]: any;
}

export default interface PageSchema {
  // 页面 id （32位 uuid）
  id: string;
  name: string;
  route: string;
  // 运行期间读取和写入的
  localStorage: {
    read: DynamicObject;
    write: DynamicObject;
  };
  query: {
    read: DynamicObject;
    write: DynamicObject;
  };
  // 页面用到的接口
  httpApi: {
    origin: string;
    url: string;
    adapter: string;
    method: HttpMethod;
    option: HttpRequestOption;
    // 返回的型构 json
    responseShape: {
      success: string;
      failure: string;
    }
  };
  // 发送事件给 native
  nativeEvent: {
    name: string;
    payload: string;
  };
  // 发送导航给 native
  nativeNavigation: {
    name: string;
    url: string;
  };
  // 接收 native 事件
  nativeMessage: {
    name: string;
    payload: DynamicObject;
  };
  // 页面的运行时状态 ( 包括远端数据 )
  state: DynamicObject;
  // 页面内的交互事件
  events: {

  };
  container: ContainerSchema;
}
