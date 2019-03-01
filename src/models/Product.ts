export interface IProduct {
  productID: string;
  category: string;
  mainCategory: string;
  taxTarifCode: string;
  supplierName: string;
  weightMeasure: number;
  weightUnit: string;
  description: string;
  name: string;
  dateOfSale: Date;
  productPicURL: string;
  status: string;
  quantity: number;
  uoM: string;
  currencyCode: string;
  price: number;
  width: number;
  depth: number;
  height: number;
  dimUnit: string;
}

export class Product implements IProduct {
  get category(): string {
    return this._category;
  }

  set category(value: string) {
    this._category = value;
  }

  get currencyCode(): string {
    return this._currencyCode;
  }

  set currencyCode(value: string) {
    this._currencyCode = value;
  }

  get dateOfSale(): Date {
    return this._dateOfSale;
  }

  set dateOfSale(value: Date) {
    this._dateOfSale = value;
  }

  get depth(): number {
    return this._depth;
  }

  set depth(value: number) {
    this._depth = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get dimUnit(): string {
    return this._dimUnit;
  }

  set dimUnit(value: string) {
    this._dimUnit = value;
  }

  get height(): number {
    return this._height;
  }

  set height(value: number) {
    this._height = value;
  }

  get mainCategory(): string {
    return this._mainCategory;
  }

  set mainCategory(value: string) {
    this._mainCategory = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get price(): number {
    return this._price;
  }

  set price(value: number) {
    this._price = value;
  }

  get productID(): string {
    return this._productID;
  }

  set productID(value: string) {
    this._productID = value;
  }

  get productPicURL(): string {
    return this._productPicURL;
  }

  set productPicURL(value: string) {
    this._productPicURL = value;
  }

  get quantity(): number {
    return this._quantity;
  }

  set quantity(value: number) {
    this._quantity = value;
  }

  get status(): string {
    return this._status;
  }

  set status(value: string) {
    this._status = value;
  }

  get supplierName(): string {
    return this._supplierName;
  }

  set supplierName(value: string) {
    this._supplierName = value;
  }

  get taxTarifCode(): string {
    return this._taxTarifCode;
  }

  set taxTarifCode(value: string) {
    this._taxTarifCode = value;
  }

  get uoM(): string {
    return this._uoM;
  }

  set uoM(value: string) {
    this._uoM = value;
  }

  get weightMeasure(): number {
    return this._weightMeasure;
  }

  set weightMeasure(value: number) {
    this._weightMeasure = value;
  }

  get weightUnit(): string {
    return this._weightUnit;
  }

  set weightUnit(value: string) {
    this._weightUnit = value;
  }

  get width(): number {
    return this._width;
  }

  set width(value: number) {
    this._width = value;
  }

  private _category: string = null;
  private _currencyCode: string = null;
  private _dateOfSale: Date = null;
  private _depth: number = null;
  private _description: string = null;
  private _dimUnit: string = null;
  private _height: number = null;
  private _mainCategory: string = null;
  private _name: string = null;
  private _price: number = null;
  private _productID: string = null;
  private _productPicURL: string = null;
  private _quantity: number = null;
  private _status: string = null;
  private _supplierName: string = null;
  private _taxTarifCode: string = null;
  private _uoM: string = null;
  private _weightMeasure: number = null;
  private _weightUnit: string = null;
  private _width: number = null;

  constructor() {}
}
