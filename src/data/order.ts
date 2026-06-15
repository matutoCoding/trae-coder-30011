import { Order } from '@/types/ink';

export const orderList: Order[] = [
  {
    id: 'o001',
    customerName: '北京荣宝斋',
    orderDate: '2026-06-14',
    deliveryDate: '2026-08-14',
    items: '超漆烟墨×20，顶烟松墨×10',
    packageType: '锦盒套装',
    totalAmount: '¥18,400',
    status: 'producing',
    statusName: '制作中',
    remark: '荣宝斋年度采购'
  },
  {
    id: 'o002',
    customerName: '杭州西泠印社',
    orderDate: '2026-06-12',
    deliveryDate: '2026-09-12',
    items: '贡烟御墨×5，特制油烟墨×2',
    packageType: '紫檀木盒',
    totalAmount: '¥31,600',
    status: 'gilding',
    statusName: '描金中',
    remark: '印社定制款，附证书'
  },
  {
    id: 'o003',
    customerName: '上海朵云轩',
    orderDate: '2026-06-10',
    deliveryDate: '2026-07-10',
    items: '远烟松墨×30，油烟精墨×20',
    packageType: '绢布礼盒',
    totalAmount: '¥14,000',
    status: 'packing',
    statusName: '包装中',
    remark: '暑期文房促销套装'
  },
  {
    id: 'o004',
    customerName: '张先生',
    orderDate: '2026-06-08',
    deliveryDate: '2026-08-08',
    items: '古法松烟墨×1',
    packageType: '纸盒简装',
    totalAmount: '¥350',
    status: 'producing',
    statusName: '制作中',
    remark: '个人定制，指定配方'
  },
  {
    id: 'o005',
    customerName: '南京十竹斋',
    orderDate: '2026-06-05',
    deliveryDate: '2026-08-05',
    items: '油烟淡墨×15，松烟浓墨×10',
    packageType: '锦盒套装',
    totalAmount: '¥11,600',
    status: 'producing',
    statusName: '制作中',
    remark: '十竹斋书画专用墨'
  },
  {
    id: 'o006',
    customerName: '李女士',
    orderDate: '2026-06-03',
    deliveryDate: '2026-07-03',
    items: '油烟细墨×2，油烟淡墨×2',
    packageType: '绢布礼盒',
    totalAmount: '¥1,400',
    status: 'shipped',
    statusName: '已发货',
    remark: '礼品定制，附贺卡'
  },
  {
    id: 'o007',
    customerName: '苏州顾廷龙书法馆',
    orderDate: '2026-05-28',
    deliveryDate: '2026-07-28',
    items: '超漆烟墨×8，贡烟御墨×2',
    packageType: '紫檀木盒',
    totalAmount: '¥10,720',
    status: 'gilding',
    statusName: '描金中',
    remark: '馆藏级定制，特选描金'
  },
  {
    id: 'o008',
    customerName: '王老师',
    orderDate: '2026-05-25',
    deliveryDate: '2026-06-25',
    items: '油烟精墨×5',
    packageType: '纸盒简装',
    totalAmount: '¥1,300',
    status: 'done',
    statusName: '已完成',
    remark: '书法教学用墨'
  },
  {
    id: 'o009',
    customerName: '广州集雅斋',
    orderDate: '2026-05-20',
    deliveryDate: '2026-07-20',
    items: '松烟浓墨×12，顶烟松墨×8',
    packageType: '锦盒套装',
    totalAmount: '¥8,160',
    status: 'done',
    statusName: '已完成',
    remark: '岭南画院专用'
  },
  {
    id: 'o010',
    customerName: '陈先生',
    orderDate: '2026-05-15',
    deliveryDate: '2026-06-15',
    items: '特制油烟墨×1',
    packageType: '紫檀木盒',
    totalAmount: '¥8,800',
    status: 'done',
    statusName: '已完成',
    remark: '收藏级大墨，附鉴定证书'
  }
];
