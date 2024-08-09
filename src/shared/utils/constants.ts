export enum SearchType {
    BUSINESS_TYPE = 'BUSINESS_TYPE',
    EXP_EXPENSE_SUBCATEGORY = 'EXP_EXPENSE_SUBCATEGORY',
    EXPENSE_TYPE_SPECIAL_NAME = 'EXPENSE_TYPE_SPECIAL_NAME',
    STATUS_FLAG = 'STATUS_FLAG',
    RECEIVE_CATEGORY_SPECIAL = 'RECEIVE_CATEGORY_SPECIAL',
    RECEIVE_TYPE_SPECIAL_NAME = 'RECEIVE_TYPE_SPECIAL_NAME',
    RECEIVE_SUBTYPE_SPECIAL_NAME = 'RECEIVE_SUBTYPE_SPECIAL_NAME',
    BUSINESS_TYPE_NAME = 'BUSINESS_TYPE_NAME',
    BUSINESS_STATUS = 'BUSINESS_STATUS',
    BUSINESS_MS_SEARCH_BY = 'BUSINESS_MS_SEARCH_BY',
    SOURCE_BUDGET_SEARCH_BY = 'SOURCE_BUDGET_SEARCH_BY',
    COMMITTEE_TYPE = 'COMMITTEE_TYPE',
    EXP_TYP_SPC_MS_SEARCH_BY = 'EXP_TYP_SPC_MS_SEARCH_BY',
    REC_TYP_SPC_MS_SEARCH_BY = 'REC_TYP_SPC_MS_SEARCH_BY',
  }
  
  export enum MediaTypeTypeDownloadConstant {
    PDF = 'data:application/pdf;base64,',
    XLSX = 'data:application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;base64,',
  }
  
  export enum TypeDownloadConstant {
    PDF = 'PDF',
    XLSX = 'XLSX',
    EXCEL = 'EXCEL',
    PREVIEW = 'PREVIEW',
    HTML = 'HTML',
  }
  
  export enum HttpMethodConstant {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE',
    PATCH = 'PATCH',
  }
  
  export enum HttpContentTypeConstant {
    JSON = 'application/json',
    EXCEL = 'application/vnd.ms-excel',
    PDF = 'application/pdf',
    OCTET = 'application/octet-stream',
    FORM_DATA = 'multipart/form-data',
    URL_ENCODED = 'application/x-www-form-urlencoded',
  }
  
  export enum HttpResponseType {
    JSON = 'json',
    BLOB = 'blob',
    text = 'text',
    ARRAY_BUFFER = 'arraybuffer',
    HTML = 'HTML',
  }
  export type HttpResponseFile = ArrayBuffer | Uint8Array
  
  export enum HttpStatusCode {
    OK = 200,
    ERROR = 500,
    SERVICE_UNAVARIABLE = 503,
    CONFLICTS = 409,
  }
  
  export enum EType {
    PRIMARY = 'primary',
    WARNING = 'warning',
    DANGER = 'danger',
    INFO = 'info',
  }
  
  export enum Variant {
    LABEL = 'LABEL',
    TEXT = 'TEXT',
    OUTLINED = 'OUTLINED',
    OUTLINEDWHITE = 'OUTLINEDWHITE',
    CONTAINED = 'CONTAINED',
    CONTAINEDWHITE = 'CONTAINEDWHITE',
  }
  
  export enum Size {
    SMALL = 'SMALL',
    MEDIUM = 'MEDIUM',
    LARGE = 'LARGE',
    FULLSCREEN = 'FULLSCREEN',
  }
  
  export enum ModalType {
    INFO = 'INFO',
    CONFIRM = 'CONFIRM',
    DELETE = 'DELETE',
    SUCCESS = 'SUCCESS',
    ERROR = 'ERROR',
    CUSTOM = 'CUSTOM',
  }
  
  export enum Color {
    PRIMARY = 'primary',
    GOLDEN = 'golden',
    DANGER = 'danger',
    INFO = 'info',
    WARNING = 'warning',
    BLUE_GREY = 'blue-grey',
    GREY = 'grey',
    BLACK = 'black',
  
  }
  
  export type IHttpResponseType = 'arraybuffer' | 'text' | 'json' | 'blob'
  export type IEstimateBudgetYearType =
    | 'ExpenseFirst'
    | 'ReceiptSpecialFirst'
    | 'ExpenseSpecialFirst'
    | 'ReceiptSpecialAdd'
  
  const icons = {
    info: 'IconInfo',
    IconInfo: 'IconInfo',
    primary: 'IconEdit',
    warning: 'IconInfo',
    danger: 'IconCloseCircle',
    IconChange: 'IconChange',
    IconLogout: 'IconLogout',
    IconAlert: 'IconAlert',
    IconAlertError: 'IconAlertError',
    IconLogo: 'IconLogo',
    IconEditOutline: 'IconEditOutline',
    IconEditTable: 'IconEditTable',
    IconTrashTable: 'IconTrashTable',
    IconCreditCard: 'IconCreditCard',
    IconEdit: 'IconEdit',
    IconPlus: 'IconPlus',
    IconPaper: 'IconPaper',
    IconQuestion: 'IconQuestion',
    IconPrint: 'IconPrint',
    IconExcel: 'IconExcel',
    IconEventReceived: 'IconEventReceived',
    IconEye: 'IconEye',
    IconUpdate: 'IconUpdate',
    IconProfile: 'IconProfile',
    IconSandClock: 'IconSandClock',
    IconAttention: 'IconAttention',
    IconCalculateCheck: 'IconCalculateCheck',
    IconAddProject: 'IconAddProject',
    IconAdd: 'IconAdd',
    IconArrowUp: 'IconArrowUp',
    IconArrowUpWhite: 'IconArrowUpWhite',
    IconSave: 'IconSave',
    IconCloseCircle: 'IconCloseCircle',
    IconWarning: 'IconWarning',
    IconWarningCircle: 'IconWarningCircle',
    IconDownload: 'IconDownload',
    IconImportFile: 'IconImportFile',
    IconScan: 'IconScan',
    IconClose: 'IconClose',
    IconDocCancel: 'IconDocCancel',
    IconExecutive: 'IconExecutive',
    IconSystemAccount: 'IconSystemAccount',
    IconApprove: 'IconApprove',
    IconSwapUser: 'IconSwapUser',
    IconAccept: 'IconAccept',
    IconKM: 'IconKM',
    IconDetail: 'IconDetail',
    IconDetailDoc: 'IconDetailDoc',
    IconMoneyPlus: 'IconMoneyPlus',
    IconHelp: 'IconHelp',
    IconArrowRight: 'IconArrowRight',
    IconCreateSmartcard: 'IconCreateSmartcard',
    IconUserConfig: 'IconUserConfig',
    IconWhiteUserConfig: 'IconWhiteUserConfig',
    IconView: 'IconView',
    IconWhiteReload: 'IconWhiteReload',
    IconDraggable: 'IconDraggable',
    IconDragHandleTwoSide: 'IconDragHandleTwoSide',
    IconProgressUnit: 'IconProgressUnit',
    IconUserCount: 'IconUserCount',
    IconConfig: 'IconConfig',
    IconCreateDocument: 'IconCreateDocument',
    IconStar: 'IconStar',
    IconStarFill: 'IconStarFill',
    IconZoomIn: 'IconZoomIn',
    IconZoomOut: 'IconZoomOut',
    IconRotate: 'IconRotate',
  }
  const getIcon = (icon: string | undefined) => {
    let result = null
    Object.entries(icons).find(([key, value]) => {
      return key === icon ? (result = value) : ''
    })
    return result || ''
  }
  const API = 'https://dev.elaas.pub'
  export type AlertType = 'primary' | 'danger' | 'success' | 'warning' | 'info'
  
  export enum ALERT_TYPE {
    PRIMARY = 'primary',
    DANGER = 'danger',
    SUCCESS = 'success',
    WARNING = 'warning',
    INFO = 'info',
  }
  
  export enum SearchBy {
    BUSINESS_NAME = 'BUSINESS_NAME',
    BUSINESS_TYPE = 'BUSINESS_TYPE',
    BUSINESS_STATUS = 'BUSINESS_STATUS',
  }
  
  export enum CAN_EDIT {
    F = 'F',
    T = 'T',
  }
  export enum DELETE_FLAG {
    Y = 'Y',
    N = 'N',
  }
  
  export enum YEAR_FLAG {
    Y = 'Y',
    N = 'N',
  }
  
  export enum CLOSE_FLAG {
    Y = 'Y',
    N = 'N',
  }
  
  export enum STATUS_FLAG {
    A = 'A',
    N = 'N',
    Y = 'Y',
  }
  
  export enum ResponseType {
    S = 'S', // สำเร็จ
    E = 'E', // ไม่สำเร็จ
    I = 'I', // ปกติ
    W = 'W', // แจ้งเตือน
  }
  
  export enum FLAG_TYPE {
    B = 'B',
  }
  
  export const initPagable = {
    size: 5,
    number: 1,
    sort: { direction: '', property: '' },
    offset: 0,
  }
  
  export const TAX_TYPE = [
    {
      dropDownCode: 'HOUSELAND',
      dropDownName: 'ภาษีโรงเรือนและที่ดิน',
    },
    {
      dropDownCode: 'MAINTAIN',
      dropDownName: 'ภาษีบำรุงท้องที่',
    },
    {
      dropDownCode: 'BOARD',
      dropDownName: 'ภาษีป้าย',
    },
    {
      dropDownCode: 'LANDBUILDING',
      dropDownName: 'ภาษีที่ดินและสิ่งปลูกสร้าง',
    },
  ]
  
  export enum BusinessStatus {
    P = 'P',
    C = 'C',
  }
  
  export enum ADDED_FLAG {
    Y = 'Y',
    N = 'N',
  }
  
  export enum BASE_PATH {
    VIEWS = '/src/views',
    COMMON = '/src/views/common',
  }
  
  const FRONT_VERSION = import.meta.env.VITE_APP_VERSION || 'dd'
  
  const KM_URL = import.meta.env.VITE_KM_WORDPRESS
  
  const THAI_ID_PATH = import.meta.env.VITE_THAI_ID_PATH
  export const VITE_APP_WEBSOCKET = import.meta.env.VITE_APP_WEBSOCKET
  
  const SORT_TYPE = {
    ASC: 'asc',
    DESC: 'desc',
  }
  
  export const FILES_UPLOAD = {
    FILE_SIZE: 1_000_000,
    MAX_FILE_SIZE: 1_000_000 * 10, // 10MB
    VALID_FILE_TYPES: [
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      '.xlsx',
      'xlsx',
    ],
  }
  
  export const IMAGE_UPLOAD = {
    FILE_SIZE: 1_000_000,
    MAX_FILE_SIZE: 1_000_000 * 10, // 10MB
    VALID_FILE_TYPES: ['image/png', 'image/jpg', 'image/jpeg'],
    SIZE: {
      WIDTH: 300,
      HEIGHT: 300,
    },
  }
  
  export enum LOADING_STATE {
    NOT_LOADING = 'NOT_LOADING',
    LOADING = 'LOADING',
    LOADED = 'LOADED',
    FAILED = 'FAILED',
  }
  
  export { API, FRONT_VERSION, SORT_TYPE, getIcon, icons, THAI_ID_PATH, KM_URL }
  
  export const DDLMONTH = [
    {
      dropDownCode: 1,
      dropDownName: 'มกราคม',
    },
    {
      dropDownCode: 2,
      dropDownName: 'กุมภาพันธ์',
    },
    {
      dropDownCode: 3,
      dropDownName: 'มีนาคม',
    },
    {
      dropDownCode: 4,
      dropDownName: 'เมษายน',
    },
    {
      dropDownCode: 5,
      dropDownName: 'พฤษภาคม',
    },
    {
      dropDownCode: 6,
      dropDownName: 'มิถุนายน',
    },
    {
      dropDownCode: 7,
      dropDownName: 'กรกฎาคม',
    },
    {
      dropDownCode: 8,
      dropDownName: 'สิงหาคม',
    },
    {
      dropDownCode: 9,
      dropDownName: 'กันยายน',
    },
    {
      dropDownCode: 10,
      dropDownName: 'ตุลาคม',
    },
    {
      dropDownCode: 11,
      dropDownName: 'พฤศจิกายน',
    },
    {
      dropDownCode: 12,
      dropDownName: 'ธันวาคม',
    },
  ]
  
  export const EXIT_PAGE = {
    icon: 'IconAlert',
    iconColor: 'fill-blue-grey-40',
    content: 'คุณต้องการออกจากหน้านี้ใช่หรือไม่',
    subContent: 'รายการจะยังไม่เสร็จสมบูรณ์ <br/> คุณต้องการออกโดยไม่ทำให้เสร็จก่อนใช่ไหม',
  }
  
  