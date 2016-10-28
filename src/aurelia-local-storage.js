export class LocalStorageProvider {
  constructor(prefix = '') {
    this.prefix = prefix;
  }

  setPrefix(prefix = ''){
    this.prefix = `${prefix}.`;
  }

  get(name){
    return localStorage.getItem(this.prefix+name);
  }

  set(name, value){
    localStorage.setItem(this.prefix+name, value);
  }
}
