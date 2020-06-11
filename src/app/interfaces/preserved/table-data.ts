interface Column {
  title: string;
  key: string;
  dataIndex: string;
}

interface DataSourceItem {
  key: string;
  [key: string]: any;
}

export default interface TableData {
  columns: Column[];
  dataSource: DataSourceItem[];
}
