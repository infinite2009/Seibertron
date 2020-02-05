const textSchematics = {
  styleCollections: {
    font: {
      label: '字体',
      styles: {
        'font-family': {
          description: '字体',
          label: '字体',
          type: 'enum',
          defaultValue: 'Microsoft Ya Hei',
          items: [
            'Microsoft Ya Hei',
            'PingFang Regular',
            'Sans-serif',
            'Helvetica'
          ]
        },
        'font-size': {
          description: '字号',
          type: 'number',
          label: '字号',
          unit: 'px',
          defaultValue: 12,
          range: {
            min: 10,
            max: 100
          }
        }
      }
    },
    paragraph: {
      label: '段落',
      styles: [
        {
          name: 'line-height',
          description: '行高',
          type: 'number',
          label: '字体',
          unit: 'px',
          defaultValue: '14',
          range: {
            min: 10,
            max: 100
          }
        },
        {
          name: 'wrap',
          label: '换行',
          description: '当文字过长时是否换行展示，如果不换行，将会出现省略号',
          type: 'boolean',
          defaultValue: true
        }
      ]
    }
  }
};

export default textSchematics;