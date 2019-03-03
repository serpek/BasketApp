export interface IProduct {
  ProductId: string;
  Category: string;
  MainCategory: string;
  TaxTarifCode: string;
  SupplierName: string;
  WeightMeasure: number;
  WeightUnit: WeightUnit;
  Description: string;
  Name: string;
  DateOfSale?: Date;
  ProductPicUrl: string;
  Status: Status;
  Quantity: number;
  UoM: string;
  CurrencyCode: CurrencyCode;
  Price: number;
  Width: number;
  Depth: number;
  Height: number;
  DimUnit: DimUnit;
}

export enum CurrencyCode {
  Eur = 'EUR'
}

export enum DimUnit {
  CM = 'cm'
}

export enum Status {
  Available = 'Available'
}

export enum WeightUnit {
  G = 'G',
  Kg = 'KG'
}

export class Product implements IProduct {
  private _category: string;
  private _currencyCode: CurrencyCode;
  private _dateOfSale: Date;
  private _depth: number;
  private _description: string;
  private _dimUnit: DimUnit;
  private _height: number;
  private _mainCategory: string;
  private _name: string;
  private _price: number;
  private _productId: string;
  private _productPicUrl: string;
  private _quantity: number;
  private _status: Status;
  private _supplierName: string;
  private _taxTarifCode: string;
  private _uoM: string;
  private _weightMeasure: number;
  private _weightUnit: WeightUnit;
  private _width: number;

  constructor() {}

  get Category(): string {
    return this._category;
  }

  set Category(value: string) {
    this._category = value;
  }

  get CurrencyCode(): CurrencyCode {
    return this._currencyCode;
  }

  set CurrencyCode(value: CurrencyCode) {
    this._currencyCode = value;
  }

  get DateOfSale(): Date {
    return this._dateOfSale;
  }

  set DateOfSale(value: Date) {
    this._dateOfSale = value;
  }

  get Depth(): number {
    return this._depth;
  }

  set Depth(value: number) {
    this._depth = value;
  }

  get Description(): string {
    return this._description;
  }

  set Description(value: string) {
    this._description = value;
  }

  get DimUnit(): DimUnit {
    return this._dimUnit;
  }

  set DimUnit(value: DimUnit) {
    this._dimUnit = value;
  }

  get Height(): number {
    return this._height;
  }

  set Height(value: number) {
    this._height = value;
  }

  get MainCategory(): string {
    return this._mainCategory;
  }

  set MainCategory(value: string) {
    this._mainCategory = value;
  }

  get Name(): string {
    return this._name;
  }

  set Name(value: string) {
    this._name = value;
  }

  get Price(): number {
    return this._price;
  }

  set Price(value: number) {
    this._price = value;
  }

  get ProductId(): string {
    return this._productId;
  }

  set ProductId(value: string) {
    this._productId = value;
  }

  get ProductPicUrl(): string {
    return this._productPicUrl;
  }

  set ProductPicUrl(value: string) {
    this._productPicUrl = value;
  }

  get Quantity(): number {
    return this._quantity;
  }

  set Quantity(value: number) {
    this._quantity = value;
  }

  get Status(): Status {
    return this._status;
  }

  set Status(value: Status) {
    this._status = value;
  }

  get SupplierName(): string {
    return this._supplierName;
  }

  set SupplierName(value: string) {
    this._supplierName = value;
  }

  get TaxTarifCode(): string {
    return this._taxTarifCode;
  }

  set TaxTarifCode(value: string) {
    this._taxTarifCode = value;
  }

  get UoM(): string {
    return this._uoM;
  }

  set UoM(value: string) {
    this._uoM = value;
  }

  get WeightMeasure(): number {
    return this._weightMeasure;
  }

  set WeightMeasure(value: number) {
    this._weightMeasure = value;
  }

  get WeightUnit(): WeightUnit {
    return this._weightUnit;
  }

  set WeightUnit(value: WeightUnit) {
    this._weightUnit = value;
  }

  get Width(): number {
    return this._width;
  }

  set Width(value: number) {
    this._width = value;
  }
}
